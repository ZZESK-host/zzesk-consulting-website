import { createHmac } from "node:crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isServiceInterest } from "@/content/services";
import { site } from "@/content/site";

export const runtime = "nodejs";

type ContactPayload = {
  event?: unknown;
  enquiryId?: unknown;
  submittedAt?: unknown;
  source?: unknown;
  formVersion?: unknown;
  pageUrl?: unknown;
  name?: unknown;
  businessName?: unknown;
  email?: unknown;
  phone?: unknown;
  serviceInterest?: unknown;
  processToImprove?: unknown;
  consentToContact?: unknown;
  utm?: unknown;
};

type EnquiryPayload = {
  event: "website.enquiry.created";
  enquiryId: string;
  submittedAt: string;
  source: "website-contact-form";
  formVersion: "lead-intake-v2";
  pageUrl: string;
  name: string;
  businessName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  processToImprove: string;
  consentToContact: boolean;
  utm: Record<string, string>;
};

type CommandCentreResult =
  | { ok: true }
  | { ok: false; status?: number; message: string };

type EmailResult =
  | { ok: true }
  | { ok: false; skipped?: boolean; message: string; error?: unknown };

const commandCentreFallbackUrl = "http://127.0.0.1:3000";
const webhookPath = "/api/webhooks/website-enquiry";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const requiredFields: Array<[keyof EnquiryPayload, string]> = [
  ["name", "Name"],
  ["businessName", "Business name"],
  ["email", "Email"],
  ["processToImprove", "Process to improve"],
];

function clean(value: unknown, maxLength = 3000) {
  return typeof value === "string" ? value.replace(/\0/g, "").trim().slice(0, maxLength) : "";
}

function cleanBoolean(value: unknown) {
  return value === true || value === "true" || value === "on";
}

function cleanServiceInterest(value: unknown) {
  const candidate = clean(value, 120);
  return candidate && isServiceInterest(candidate) ? candidate : "";
}

function cleanUtm(value: unknown) {
  const utm: Record<string, string> = {
    utm_source: "",
    utm_campaign: "",
    utm_medium: "",
  };

  if (!value || typeof value !== "object" || Array.isArray(value)) return utm;

  for (const [key, rawValue] of Object.entries(value as Record<string, unknown>)) {
    if (key.startsWith("utm_")) {
      utm[key] = clean(rawValue, 500);
    }
  }

  return utm;
}

function createEnquiryId(value: unknown) {
  const candidate = clean(value, 120);
  if (candidate) return candidate;

  return `zzesk_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function createSubmittedAt(value: unknown) {
  const candidate = clean(value, 80);
  const parsed = candidate ? new Date(candidate) : null;

  if (parsed && !Number.isNaN(parsed.getTime())) {
    return parsed.toISOString();
  }

  return new Date().toISOString();
}

function normalisePayload(payload: ContactPayload): EnquiryPayload {
  return {
    event: "website.enquiry.created",
    enquiryId: createEnquiryId(payload.enquiryId),
    submittedAt: createSubmittedAt(payload.submittedAt),
    source: "website-contact-form",
    formVersion: "lead-intake-v2",
    pageUrl: clean(payload.pageUrl, 1000),
    name: clean(payload.name, 200),
    businessName: clean(payload.businessName, 200),
    email: clean(payload.email, 320).toLowerCase(),
    phone: clean(payload.phone, 80),
    serviceInterest: cleanServiceInterest(payload.serviceInterest),
    processToImprove: clean(payload.processToImprove),
    consentToContact: cleanBoolean(payload.consentToContact),
    utm: cleanUtm(payload.utm),
  };
}

function validatePayload(payload: EnquiryPayload) {
  const missing = requiredFields
    .filter(([field]) => {
      const value = payload[field];
      return typeof value === "string" ? !value : false;
    })
    .map(([, label]) => label);

  if (!payload.consentToContact) missing.push("Consent to contact");

  if (missing.length > 0) {
    return `Please complete all required fields: ${missing.join(", ")}.`;
  }

  if (!emailPattern.test(payload.email)) {
    return "Please enter a valid email address.";
  }

  return null;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatLine(label: string, value: string) {
  return `${label}: ${value || "Not provided"}`;
}

function formatHtmlRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 14px; border-bottom: 1px solid #e5e7eb; color: #475569; font-weight: 700; vertical-align: top;">${escapeHtml(label)}</td>
      <td style="padding: 10px 14px; border-bottom: 1px solid #e5e7eb; color: #0f172a; white-space: pre-wrap;">${escapeHtml(value || "Not provided")}</td>
    </tr>
  `;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function responseMessage(value: unknown) {
  return isRecord(value) && typeof value.message === "string" ? value.message : "";
}

function cleanHeaderValue(value: string) {
  return value.replace(/[\r\n<>]+/g, " ").trim().slice(0, 200);
}

function formatMailbox(name: string, email: string) {
  const displayName = cleanHeaderValue(name);
  return displayName ? `${displayName} <${email}>` : email;
}

function commandCentreWebhookUrl() {
  const baseUrl = process.env.ZZESK_COMMAND_CENTRE_URL || commandCentreFallbackUrl;
  return new URL(webhookPath, baseUrl).toString();
}

function signBody(body: string) {
  const secret = process.env.ZZESK_COMMAND_CENTRE_WEBHOOK_SECRET || process.env.ZZESK_WEBHOOK_SECRET;
  if (!secret) return null;

  return `sha256=${createHmac("sha256", secret).update(body).digest("hex")}`;
}

async function postToCommandCentre(payload: EnquiryPayload): Promise<CommandCentreResult> {
  let url: string;

  try {
    url = commandCentreWebhookUrl();
  } catch (error) {
    console.error("Invalid ZZESK Command Centre URL", error);
    return { ok: false, message: "The Command Centre webhook URL is not configured correctly." };
  }

  const body = JSON.stringify(payload);
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  const signature = signBody(body);

  if (signature) {
    headers["x-zzesk-signature"] = signature;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body,
      signal: controller.signal,
    });
    const responseText = await response.text();
    let responseJson: unknown = null;

    if (responseText) {
      try {
        responseJson = JSON.parse(responseText);
      } catch {
        responseJson = null;
      }
    }

    if (response.ok && isRecord(responseJson) && responseJson.ok === true) {
      return { ok: true };
    }

    return {
      ok: false,
      status: response.status,
      message: responseMessage(responseJson) || `Command Centre returned HTTP ${response.status}.`,
    };
  } catch (error) {
    return {
      ok: false,
      message: error instanceof Error ? error.message : "The Command Centre request failed.",
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function sendNotificationEmail(payload: EnquiryPayload): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return { ok: false, skipped: true, message: "RESEND_API_KEY is not configured." };
  }

  const resend = new Resend(apiKey);
  const toEmail = process.env.CONTACT_TO_EMAIL || site.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || `ZZESK Website <website@${site.domain}>`;
  const subject = `New ZZESK enquiry [${payload.enquiryId}] - ${cleanHeaderValue(payload.businessName)} - ${cleanHeaderValue(payload.name)}`;
  const enquiryJson = JSON.stringify(payload, null, 2);
  const rows: Array<[string, string]> = [
    ["Enquiry ID", payload.enquiryId],
    ["Submitted at", payload.submittedAt],
    ["Source", payload.source],
    ["Form version", payload.formVersion],
    ["Name", payload.name],
    ["Business name", payload.businessName],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Service interest", payload.serviceInterest],
    ["Process to improve", payload.processToImprove],
    ["Consent to contact", payload.consentToContact ? "Yes" : "No"],
    ["Page URL", payload.pageUrl],
    ["UTM", JSON.stringify(payload.utm, null, 2)],
  ];

  const text = [
    rows.map(([label, value]) => formatLine(label, value)).join("\n\n"),
    "ZZESK_ENQUIRY_JSON_START",
    enquiryJson,
    "ZZESK_ENQUIRY_JSON_END",
  ].join("\n\n");
  const html = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.5;">
      <h1 style="font-size: 22px; margin: 0 0 16px;">New ZZESK website enquiry</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 760px; border: 1px solid #e5e7eb;">
        <tbody>
          ${rows.map(([label, value]) => formatHtmlRow(label, value)).join("")}
        </tbody>
      </table>
      <pre style="margin-top: 24px; padding: 16px; overflow: auto; background: #f8fafc; border: 1px solid #e5e7eb; color: #0f172a; font-size: 12px; line-height: 1.5;">ZZESK_ENQUIRY_JSON_START
${escapeHtml(enquiryJson)}
ZZESK_ENQUIRY_JSON_END</pre>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: formatMailbox(payload.name, payload.email),
      subject,
      text,
      html,
    });

    if (error) {
      return { ok: false, message: "Resend could not send the enquiry email.", error };
    }

    return { ok: true };
  } catch (error) {
    return { ok: false, message: "The enquiry email could not be sent.", error };
  }
}

export async function POST(request: Request) {
  let rawPayload: ContactPayload;

  try {
    rawPayload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid form submission." }, { status: 400 });
  }

  const payload = normalisePayload(rawPayload);
  const validationError = validatePayload(payload);

  if (validationError) {
    return NextResponse.json({ ok: false, message: validationError }, { status: 400 });
  }

  const commandCentreResult = await postToCommandCentre(payload);

  if (commandCentreResult.ok) {
    const emailResult = await sendNotificationEmail(payload);

    if (!emailResult.ok && !emailResult.skipped) {
      console.error("ZZESK enquiry notification email failed", emailResult.error || emailResult.message);
    }

    return NextResponse.json({
      ok: true,
      enquiryId: payload.enquiryId,
      delivery: "command-centre",
      message: "Thanks, your enquiry has been sent. We will reply as soon as possible.",
    });
  }

  console.error("ZZESK Command Centre webhook failed", {
    enquiryId: payload.enquiryId,
    status: commandCentreResult.status,
    message: commandCentreResult.message,
  });

  const fallbackEmailResult = await sendNotificationEmail(payload);

  if (fallbackEmailResult.ok) {
    return NextResponse.json({
      ok: true,
      enquiryId: payload.enquiryId,
      delivery: "email-fallback",
      message: "Thanks, your enquiry has been sent.",
    });
  }

  console.error("ZZESK enquiry fallback email failed", fallbackEmailResult.error || fallbackEmailResult.message);

  return NextResponse.json(
    {
      ok: false,
      enquiryId: payload.enquiryId,
      message: "Your enquiry could not be sent right now.",
    },
    { status: 502 },
  );
}

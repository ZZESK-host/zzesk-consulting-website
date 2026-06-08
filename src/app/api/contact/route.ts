import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/site";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  businessName?: unknown;
  email?: unknown;
  phone?: unknown;
  process?: unknown;
  tools?: unknown;
  dashboardView?: unknown;
  agentActions?: unknown;
  approvalActions?: unknown;
  teamSize?: unknown;
  contactMethod?: unknown;
};

const requiredFields: Array<keyof ContactPayload> = [
  "name",
  "businessName",
  "email",
  "process",
  "tools",
  "dashboardView",
  "agentActions",
  "approvalActions",
  "teamSize",
  "contactMethod",
];

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 3000) : "";
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

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
  }

  const values = {
    name: clean(payload.name),
    businessName: clean(payload.businessName),
    email: clean(payload.email).toLowerCase(),
    phone: clean(payload.phone),
    process: clean(payload.process),
    tools: clean(payload.tools),
    dashboardView: clean(payload.dashboardView),
    agentActions: clean(payload.agentActions),
    approvalActions: clean(payload.approvalActions),
    teamSize: clean(payload.teamSize),
    contactMethod: clean(payload.contactMethod),
  };

  const missing = requiredFields.filter((field) => !values[field]);
  if (missing.length > 0) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || site.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || `ZZESK Website <website@${site.domain}>`;

  if (!apiKey) {
    return NextResponse.json({ message: "Email sending is not configured yet." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const subject = `New ZZESK enquiry from ${values.name}`;
  const rows = [
    ["Name", values.name],
    ["Business name", values.businessName],
    ["Email", values.email],
    ["Phone", values.phone],
    ["Process to improve", values.process],
    ["Current tools", values.tools],
    ["Desired dashboard view", values.dashboardView],
    ["Agent actions", values.agentActions],
    ["Actions needing approval", values.approvalActions],
    ["Team size", values.teamSize],
    ["Preferred contact method", values.contactMethod],
  ] as const;

  const text = rows.map(([label, value]) => formatLine(label, value)).join("\n\n");
  const html = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.5;">
      <h1 style="font-size: 22px; margin: 0 0 16px;">New ZZESK website enquiry</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 760px; border: 1px solid #e5e7eb;">
        <tbody>
          ${rows.map(([label, value]) => formatHtmlRow(label, value)).join("")}
        </tbody>
      </table>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: values.email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("Resend contact form error", error);
      return NextResponse.json({ message: "Could not send the enquiry." }, { status: 502 });
    }

    return NextResponse.json({ message: "Enquiry sent successfully." });
  } catch (error) {
    console.error("Contact form send failed", error);
    return NextResponse.json({ message: "Could not send the enquiry." }, { status: 502 });
  }
}

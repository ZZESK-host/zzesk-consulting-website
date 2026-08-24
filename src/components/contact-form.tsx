"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { AlertCircle } from "lucide-react";
import type { ServiceInterest } from "@/content/services";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  processToImprove: string;
  consentToContact: boolean;
};

type TextFieldId = Exclude<keyof FormValues, "consentToContact">;
type FormErrors = Partial<Record<keyof FormValues, string>>;
type TouchedFields = Partial<Record<keyof FormValues, boolean>>;
type SubmissionState = "idle" | "sending" | "success" | "error";

const source = "website-contact-form";
const formVersion = "lead-intake-v2";

const baseInitialValues: FormValues = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  serviceInterest: "",
  processToImprove: "",
  consentToContact: false,
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.businessName.trim()) errors.businessName = "Enter your business name.";
  if (!values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.processToImprove.trim()) {
      errors.processToImprove = "Tell us about the priority, problem or process you would like to improve.";
  }
  if (!values.consentToContact) {
    errors.consentToContact = "Please confirm ZZESK can contact you about this enquiry.";
  }

  return errors;
}

type FieldProps = {
  id: keyof FormValues;
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
};

function Field({ id, label, error, required, children }: FieldProps) {
  return (
    <div>
      <div className="flex items-center gap-1">
        <label htmlFor={id} className="block text-sm font-medium text-mist-100">
          {label}
        </label>
        {required ? (
          <span className="text-accent-300" aria-hidden="true">
            *
          </span>
        ) : null}
      </div>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 flex gap-2 text-sm text-red-300">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      ) : null}
    </div>
  );
}

function randomString() {
  if (typeof window !== "undefined" && window.crypto?.getRandomValues) {
    const bytes = new Uint8Array(4);
    window.crypto.getRandomValues(bytes);
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  return Math.random().toString(36).slice(2, 8);
}

function getUtmParams() {
  const utm: Record<string, string> = {
    utm_source: "",
    utm_campaign: "",
    utm_medium: "",
  };

  if (typeof window === "undefined") return utm;

  const params = new URLSearchParams(window.location.search);
  params.forEach((value, key) => {
    if (key.startsWith("utm_")) {
      utm[key] = value;
    }
  });

  return utm;
}

function buildSubmission(values: FormValues) {
  return {
    event: "website.enquiry.created",
    enquiryId: `zzesk_${Date.now()}_${randomString()}`,
    submittedAt: new Date().toISOString(),
    source,
    formVersion,
    pageUrl: typeof window === "undefined" ? "" : window.location.href,
    name: values.name,
    businessName: values.businessName,
    email: values.email,
    phone: values.phone,
    serviceInterest: values.serviceInterest,
    processToImprove: values.processToImprove,
    consentToContact: values.consentToContact,
    utm: getUtmParams(),
  };
}

type ContactFormProps = {
  initialServiceInterest?: ServiceInterest | "";
  serviceOptions: ReadonlyArray<{ value: string; label: string }>;
};

export function ContactForm({ initialServiceInterest = "", serviceOptions = [] }: ContactFormProps) {
  const initialValues = useMemo<FormValues>(
    () => ({ ...baseInitialValues, serviceInterest: initialServiceInterest }),
    [initialServiceInterest],
  );
  const [values, setValues] = useState<FormValues>(() => initialValues);
  const [touched, setTouched] = useState<TouchedFields>({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const errors = useMemo(() => validate(values), [values]);
  const visibleErrors = useMemo<FormErrors>(() => {
    if (submitted) return errors;

    return Object.keys(touched).reduce<FormErrors>((current, key) => {
      const field = key as keyof FormValues;
      if (errors[field]) current[field] = errors[field];
      return current;
    }, {});
  }, [errors, submitted, touched]);
  const submitting = submissionState === "sending";

  function resetSubmissionState() {
    if (submissionState !== "idle") {
      setSubmissionState("idle");
      setSubmissionMessage("");
    }
  }

  function updateValue(id: TextFieldId, value: string) {
    setValues((current) => ({ ...current, [id]: value }));
    resetSubmissionState();
  }

  function updateConsent(value: boolean) {
    setValues((current) => ({ ...current, consentToContact: value }));
    resetSubmissionState();
  }

  function markTouched(id: keyof FormValues) {
    setTouched((current) => ({ ...current, [id]: true }));
  }

  function describedBy(id: keyof FormValues) {
    return visibleErrors[id] ? `${id}-error` : undefined;
  }

  function inputClass(id: keyof FormValues) {
    return cn(
      "min-h-11 w-full rounded-lg border bg-ink-950/70 px-3.5 py-2.5 text-base text-mist-50 outline-none transition placeholder:text-mist-400 focus:border-accent-300 focus:ring-2 focus:ring-accent-300/25",
      visibleErrors[id] ? "border-red-300/70" : "border-white/[0.12] hover:border-white/20",
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setSubmissionMessage("");

    if (Object.keys(errors).length > 0) {
      setSubmissionState("idle");
      return;
    }

    setSubmissionState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buildSubmission(values)),
      });
      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        setSubmissionState("error");
        setSubmissionMessage(result?.message || "Your enquiry could not be sent.");
        return;
      }

      setValues(initialValues);
      setTouched({});
      setSubmitted(false);
      setSubmissionState("success");
        setSubmissionMessage(result?.message || "Thanks, your enquiry has been sent. We will reply as soon as possible.");
    } catch {
      setSubmissionState("error");
      setSubmissionMessage("Your enquiry could not be sent.");
    }
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Name" required error={visibleErrors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateValue("name", event.target.value)}
            onBlur={() => markTouched("name")}
            className={inputClass("name")}
            aria-invalid={Boolean(visibleErrors.name)}
            aria-describedby={describedBy("name")}
          />
        </Field>

        <Field id="businessName" label="Business name" required error={visibleErrors.businessName}>
          <input
            id="businessName"
            name="organization"
            autoComplete="organization"
            value={values.businessName}
            onChange={(event) => updateValue("businessName", event.target.value)}
            onBlur={() => markTouched("businessName")}
            className={inputClass("businessName")}
            aria-invalid={Boolean(visibleErrors.businessName)}
            aria-describedby={describedBy("businessName")}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="email" label="Email" required error={visibleErrors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            onBlur={() => markTouched("email")}
            className={inputClass("email")}
            aria-invalid={Boolean(visibleErrors.email)}
            aria-describedby={describedBy("email")}
          />
        </Field>

        <Field id="phone" label="Phone number, optional" error={visibleErrors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
            onBlur={() => markTouched("phone")}
            className={inputClass("phone")}
            aria-invalid={Boolean(visibleErrors.phone)}
            aria-describedby={describedBy("phone")}
          />
        </Field>
      </div>

      <Field id="serviceInterest" label="Service of interest, optional" error={visibleErrors.serviceInterest}>
        <select
          id="serviceInterest"
          name="serviceInterest"
          value={values.serviceInterest}
          onChange={(event) => updateValue("serviceInterest", event.target.value)}
          onBlur={() => markTouched("serviceInterest")}
          className={inputClass("serviceInterest")}
          aria-invalid={Boolean(visibleErrors.serviceInterest)}
          aria-describedby={describedBy("serviceInterest")}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </Field>

      <Field
        id="processToImprove"
        label="What problem would you like to solve?"
        required
        error={visibleErrors.processToImprove}
      >
        <textarea
          id="processToImprove"
          name="processToImprove"
          rows={5}
          value={values.processToImprove}
          onChange={(event) => updateValue("processToImprove", event.target.value)}
          onBlur={() => markTouched("processToImprove")}
          className={cn(inputClass("processToImprove"), "resize-y")}
          aria-invalid={Boolean(visibleErrors.processToImprove)}
          aria-describedby={describedBy("processToImprove")}
        />
      </Field>

      <div>
        <label className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-mist-200">
          <input
            id="consentToContact"
            name="consentToContact"
            type="checkbox"
            checked={values.consentToContact}
            onChange={(event) => updateConsent(event.target.checked)}
            onBlur={() => markTouched("consentToContact")}
            className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-ink-950 text-accent-400 focus:ring-2 focus:ring-accent-300/35"
            aria-invalid={Boolean(visibleErrors.consentToContact)}
            aria-describedby={describedBy("consentToContact")}
          />
          <span>I&apos;m happy for ZZESK Consulting to contact me about this enquiry.</span>
        </label>
        {visibleErrors.consentToContact ? (
          <p id="consentToContact-error" className="mt-2 flex gap-2 text-sm text-red-300">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{visibleErrors.consentToContact}</span>
          </p>
        ) : null}
      </div>

      {submissionState === "success" ? (
        <div
          className="rounded-lg border border-accent-300/30 bg-accent-400/10 p-4 text-sm leading-6 text-mist-100"
          role="status"
          aria-live="polite"
        >
          {submissionMessage}
        </div>
      ) : null}

      {submissionState === "error" ? (
        <div
          className="rounded-lg border border-red-300/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100"
          role="alert"
        >
          {submissionMessage} Please email{" "}
          <a className="font-medium text-accent-300 underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          instead.
        </div>
      ) : null}

      <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-mist-300">
        <p>
          ZZESK Consulting uses these details to respond to your enquiry, assess fit, prepare proposals and keep ordinary business
          records. Please do not include passwords, API keys or unnecessary sensitive information. Read the{" "}
          <Link
            href="/privacy"
            className="font-medium text-accent-300 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      <button
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-accent-400 px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:bg-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300 disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0 sm:w-fit"
      >
        {submitting ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}

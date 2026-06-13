"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { AlertCircle } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  process: string;
  tools: string;
  dashboardView: string;
  agentActions: string;
  approvalActions: string;
  teamSize: string;
  contactMethod: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type SubmissionState = "idle" | "sending" | "success" | "error";

const initialValues: FormValues = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  process: "",
  tools: "",
  dashboardView: "",
  agentActions: "",
  approvalActions: "",
  teamSize: "",
  contactMethod: "",
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
  if (!values.process.trim()) errors.process = "Describe the process you would like to improve.";
  if (!values.tools.trim()) errors.tools = "List the tools your business currently uses.";
  if (!values.dashboardView.trim()) errors.dashboardView = "Describe what you need to see more clearly.";
  if (!values.agentActions.trim()) errors.agentActions = "Describe what should be automated or made easier.";
  if (!values.approvalActions.trim()) errors.approvalActions = "Describe what should still be checked by a person.";
  if (!values.teamSize) errors.teamSize = "Select an approximate team size.";
  if (!values.contactMethod) errors.contactMethod = "Select a preferred contact method.";

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

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const errors = useMemo(() => validate(values), [values]);
  const visibleErrors = submitted ? errors : Object.fromEntries(Object.keys(touched).map((key) => [key, errors[key as keyof FormValues]]));
  const submitting = submissionState === "sending";

  function updateValue(id: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [id]: value }));
    if (submissionState !== "idle") {
      setSubmissionState("idle");
      setSubmissionMessage("");
    }
  }

  function markTouched(id: keyof FormValues) {
    setTouched((current) => ({ ...current, [id]: "true" }));
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
        body: JSON.stringify(values),
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
      setSubmissionMessage("Thanks, your enquiry has been sent. I will reply as soon as possible.");
    } catch {
      setSubmissionState("error");
      setSubmissionMessage("Your enquiry could not be sent.");
    }
  }

  return (
    <form className="grid gap-5" onSubmit={onSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
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

      <div className="grid gap-5 sm:grid-cols-2">
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

      <Field id="process" label="What process would you like to improve?" required error={visibleErrors.process}>
        <textarea
          id="process"
          name="process"
          rows={5}
          value={values.process}
          onChange={(event) => updateValue("process", event.target.value)}
          onBlur={() => markTouched("process")}
          className={cn(inputClass("process"), "resize-y")}
          aria-invalid={Boolean(visibleErrors.process)}
          aria-describedby={describedBy("process")}
        />
      </Field>

      <Field id="tools" label="What tools does your business currently use?" required error={visibleErrors.tools}>
        <textarea
          id="tools"
          name="tools"
          rows={3}
          value={values.tools}
          onChange={(event) => updateValue("tools", event.target.value)}
          onBlur={() => markTouched("tools")}
          className={cn(inputClass("tools"), "resize-y")}
          aria-invalid={Boolean(visibleErrors.tools)}
          aria-describedby={describedBy("tools")}
        />
      </Field>

      <Field id="dashboardView" label="What do you need to see more clearly?" required error={visibleErrors.dashboardView}>
        <textarea
          id="dashboardView"
          name="dashboardView"
          rows={3}
          value={values.dashboardView}
          onChange={(event) => updateValue("dashboardView", event.target.value)}
          onBlur={() => markTouched("dashboardView")}
          className={cn(inputClass("dashboardView"), "resize-y")}
          aria-invalid={Boolean(visibleErrors.dashboardView)}
          aria-describedby={describedBy("dashboardView")}
        />
      </Field>

      <div className="grid gap-5 lg:grid-cols-2">
        <Field id="agentActions" label="What repetitive steps should be automated or made easier?" required error={visibleErrors.agentActions}>
          <textarea
            id="agentActions"
            name="agentActions"
            rows={4}
            value={values.agentActions}
            onChange={(event) => updateValue("agentActions", event.target.value)}
            onBlur={() => markTouched("agentActions")}
            className={cn(inputClass("agentActions"), "resize-y")}
            aria-invalid={Boolean(visibleErrors.agentActions)}
            aria-describedby={describedBy("agentActions")}
          />
        </Field>

        <Field id="approvalActions" label="Which steps should still be checked by a person?" required error={visibleErrors.approvalActions}>
          <textarea
            id="approvalActions"
            name="approvalActions"
            rows={4}
            value={values.approvalActions}
            onChange={(event) => updateValue("approvalActions", event.target.value)}
            onBlur={() => markTouched("approvalActions")}
            className={cn(inputClass("approvalActions"), "resize-y")}
            aria-invalid={Boolean(visibleErrors.approvalActions)}
            aria-describedby={describedBy("approvalActions")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="teamSize" label="Approximate team size" required error={visibleErrors.teamSize}>
          <select
            id="teamSize"
            name="teamSize"
            value={values.teamSize}
            onChange={(event) => updateValue("teamSize", event.target.value)}
            onBlur={() => markTouched("teamSize")}
            className={inputClass("teamSize")}
            aria-invalid={Boolean(visibleErrors.teamSize)}
            aria-describedby={describedBy("teamSize")}
          >
            <option value="">Select team size</option>
            <option value="1-5">1-5 people</option>
            <option value="6-20">6-20 people</option>
            <option value="21-50">21-50 people</option>
            <option value="51-200">51-200 people</option>
            <option value="200+">200+ people</option>
          </select>
        </Field>

        <Field id="contactMethod" label="Preferred contact method" required error={visibleErrors.contactMethod}>
          <select
            id="contactMethod"
            name="contactMethod"
            value={values.contactMethod}
            onChange={(event) => updateValue("contactMethod", event.target.value)}
            onBlur={() => markTouched("contactMethod")}
            className={inputClass("contactMethod")}
            aria-invalid={Boolean(visibleErrors.contactMethod)}
            aria-describedby={describedBy("contactMethod")}
          >
            <option value="">Select contact method</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="either">Either email or phone</option>
          </select>
        </Field>
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
          ZZESK uses these details to respond to your enquiry, assess fit, prepare proposals and keep ordinary business
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

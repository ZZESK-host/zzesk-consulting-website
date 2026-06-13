import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How ZZESK Consulting collects, uses, stores and protects personal information for enquiries, customer projects, dashboards and AI-assisted services.",
  path: "/privacy",
});

const lastUpdated = "14 June 2026";

type PrivacySection = {
  title: string;
  body?: string[];
  items?: string[];
};

const sections: PrivacySection[] = [
  {
    title: "1. Who this policy applies to",
    body: [
      `${site.businessName} is based in Victoria, Australia. This policy explains how we handle personal information when you visit ${site.domain}, submit an enquiry, discuss a project, use a ZZESK-built dashboard or receive support from us.`,
      "It is written for website visitors, prospective customers, customer team members and other people whose personal information may be handled while we provide dashboard, automation and practical AI services.",
      "Project-specific agreements, statements of work, data-processing terms or security schedules may also apply to customer projects. If those documents say something different for a particular project, the project-specific document applies to that project.",
    ],
  },
  {
    title: "2. Personal information we collect",
    body: [
      "The kinds of personal information we collect depend on how you interact with us and what a customer asks us to build.",
    ],
    items: [
      "Contact and enquiry details, such as name, business name, email address, phone number, preferred contact method and details you provide about a process, dashboard or automation request.",
      "Project and onboarding details, such as business requirements, branding information, user names, user roles, integration preferences, support messages and implementation notes.",
      "Customer dashboard and agent data, such as prompts, instructions, uploaded files, workflow records, connected-system data, agent outputs, action logs and usage records, where that data is needed to provide the agreed service.",
      "Technical information, such as IP address, browser and device information, server logs, security logs, diagnostic data and timestamps.",
      "Commercial and administrative information, such as proposal, contract, billing, payment-status and account-management records.",
    ],
  },
  {
    title: "3. Sensitive information and customer data",
    body: [
      "Some projects may involve business information that is confidential, commercially sensitive or regulated. Depending on the customer's industry and chosen integrations, customer data may also include personal information or sensitive information, such as health information, financial information or client records.",
      "We only ask for information that is reasonably needed to assess, quote, build, support or secure the requested service. Please do not send passwords, API keys, production data, health information or other sensitive information through the general contact form.",
      "Where a project needs sensitive information or regulated data, we will scope the data-handling approach before implementation. This may include limiting what data is processed, using customer-controlled credentials, using on-premises or private-cloud options, setting access controls, logging agent actions and documenting retention requirements.",
    ],
  },
  {
    title: "4. How we collect personal information",
    items: [
      "Directly from you when you submit a form, send an email, book or attend a call, complete an intake form, sign an agreement or request support.",
      "From a customer or authorised user when they invite team members, provide project requirements, upload files, connect tools or configure a dashboard or AI agent.",
      "Automatically from the website, dashboard, hosting environment, security tooling and support systems.",
      "From third-party platforms that a customer authorises us to connect to, such as email, calendar, CRM, form, cloud-storage, accounting, booking or internal business systems.",
    ],
  },
  {
    title: "5. Why we use personal information",
    items: [
      "Respond to enquiries and decide whether ZZESK is a sensible fit for the requested work.",
      "Prepare proposals, quotes, statements of work, service agreements and project plans.",
      "Build, configure, test, host, support and improve customer dashboards, automations and AI-assisted workflows.",
      "Connect approved third-party systems, authenticate users, manage permissions and keep agent actions auditable.",
      "Monitor usage, performance, reliability, security, token costs and service limits.",
      "Send service, support, billing and administrative communications.",
      "Comply with legal, accounting, tax, security, dispute-resolution and record-keeping obligations.",
    ],
  },
  {
    title: "6. AI processing",
    body: [
      "ZZESK builds dashboards and automations that may use AI model providers, workflow tools and other infrastructure providers. When AI is part of a project, prompts, instructions, relevant context, files, outputs and agent action logs may be processed so the service can work.",
      "We do not sell personal information. We do not use customer project data to train a public ZZESK model. Where third-party AI providers are used, the selected providers, privacy settings and data-retention settings should be considered during project setup, especially for sensitive or regulated data.",
      "Important workflows should include appropriate human review, permission controls and logging. AI output may be incomplete or incorrect, so customers and users remain responsible for reviewing outputs before relying on them in important business, legal, financial, health or safety contexts.",
    ],
  },
  {
    title: "7. Disclosure to service providers and others",
    body: [
      "We may disclose personal information where reasonably needed to operate the website, communicate with you, provide services or meet legal obligations.",
    ],
    items: [
      "Hosting, database, infrastructure, security, monitoring, backup and support providers.",
      "Email delivery, communication, scheduling, CRM, payment, accounting and document-signing providers.",
      "AI model, automation, integration and cloud providers used to deliver an agreed customer service.",
      "Professional advisers, insurers, contractors and subcontractors who help us operate or deliver projects.",
      "Government, regulator, court, tribunal, law-enforcement or dispute-resolution bodies where required or authorised by law.",
    ],
  },
  {
    title: "8. Overseas disclosures",
    body: [
      "Some providers used for hosting, email delivery, AI processing, support, analytics if later adopted, payment or business administration may store or process information outside Australia. The countries involved can vary by provider and configuration, but may include the United States, the European Union, the United Kingdom, Singapore and other locations where those providers or their subprocessors operate.",
      "For customer projects, overseas processing and data-residency requirements should be confirmed during scoping, especially where the customer needs Australian hosting, private cloud, on-premises deployment or strict data-sovereignty controls.",
    ],
  },
  {
    title: "9. Security",
    body: [
      "We take reasonable technical and organisational steps to protect personal information from misuse, interference, loss, unauthorised access, modification and disclosure. These steps may include access controls, least-privilege permissions, encrypted connections, environment separation, logging, backups, secure credentials handling and supplier review.",
      "No website, email system, cloud service or AI service can be guaranteed to be completely secure. Please avoid sending unnecessary sensitive information through the website contact form.",
    ],
  },
  {
    title: "10. Retention",
    body: [
      "We keep personal information for as long as reasonably needed for the purpose it was collected, including to respond to enquiries, provide services, support customers, maintain security, resolve disputes and meet legal, tax, accounting and insurance obligations.",
      "When personal information is no longer needed, we will take reasonable steps to delete, destroy or de-identify it, subject to backups, audit logs, legal holds and customer-agreement requirements.",
    ],
  },
  {
    title: "11. Cookies and analytics",
    body: [
      "The current ZZESK website is designed as a simple marketing and enquiry website. It does not currently use marketing cookies or third-party analytics scripts.",
      "The website and hosting provider may still generate ordinary server logs for security, diagnostics and reliability. If analytics, advertising pixels or similar tracking tools are added later, this policy and the website's consent approach should be updated before launch of those tools.",
    ],
  },
  {
    title: "12. Access, correction and deletion requests",
    body: [
      "You may ask for access to personal information we hold about you, or ask us to correct it if it is inaccurate, out of date, incomplete, irrelevant or misleading.",
      "You may also ask us to delete information where it is no longer needed. Some information may need to be retained for legal, security, billing, dispute-resolution, backup or service-continuity reasons.",
      `To make a privacy request, email ${site.email}. We may need to verify your identity before acting on the request.`,
    ],
  },
  {
    title: "13. Privacy complaints",
    body: [
      `If you have a privacy concern, email ${site.email} with enough detail for us to understand the issue. We will review the concern, investigate where needed and aim to respond within a reasonable time.`,
      "If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner.",
    ],
  },
  {
    title: "14. Data breaches",
    body: [
      "If we become aware of a data breach, we will assess it and take steps to contain, investigate and remediate the issue. Where the Privacy Act 1988 (Cth) and Notifiable Data Breaches scheme require notification, we will notify affected individuals and the Office of the Australian Information Commissioner.",
    ],
  },
  {
    title: "15. Changes to this policy",
    body: [
      "We may update this policy as the website, services, providers, customer dashboard features or legal requirements change. The latest version will be published on this page with the updated date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-radial-soft border-b border-white/10 bg-ink-950 py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow="PRIVACY"
              title="Privacy Policy"
              body="How ZZESK Consulting handles personal information for enquiries, customer projects, dashboards and AI-assisted services."
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink-950 py-16 sm:py-20">
        <Container className="max-w-4xl">
          <Reveal>
            <div className="rounded-lg border border-accent-300/25 bg-accent-400/10 p-5 text-sm leading-6 text-mist-100 sm:p-6">
              <p className="font-semibold text-mist-50">Last updated: {lastUpdated}</p>
              <p className="mt-3">
                This policy is a practical website and service privacy policy for launch. It should be reviewed by an
                Australian commercial lawyer before ZZESK signs customers in sensitive, regulated or enterprise contexts.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8">
            {sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.03}>
                <section className="border-b border-white/10 pb-8 last:border-b-0 last:pb-0">
                  <h2 className="text-xl font-semibold text-mist-50">{section.title}</h2>
                  {section.body?.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-base leading-7 text-mist-300">
                      {paragraph}
                    </p>
                  ))}
                  {section.items ? (
                    <ul className="mt-4 grid gap-3 text-base leading-7 text-mist-300">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-300" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.title === "13. Privacy complaints" ? (
                    <p className="mt-3 text-base leading-7 text-mist-300">
                      OAIC website:{" "}
                      <a
                        href="https://www.oaic.gov.au/privacy"
                        className="font-medium text-accent-300 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300"
                      >
                        oaic.gov.au/privacy
                      </a>
                    </p>
                  ) : null}
                </section>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 rounded-lg border border-white/10 bg-ink-850 p-5 text-sm leading-6 text-mist-200 sm:p-6">
              <h2 className="text-lg font-semibold text-mist-50">Questions about this policy?</h2>
              <p className="mt-3">
                Email{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-accent-300 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300"
                >
                  {site.email}
                </a>{" "}
                or use the{" "}
                <Link
                  href="/contact"
                  className="font-medium text-accent-300 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300"
                >
                  contact form
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

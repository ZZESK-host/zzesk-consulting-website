import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy placeholder for ZZESK Consulting, including contact details and launch review notes.",
  path: "/privacy",
});

const sections = [
  {
    title: "Information we collect",
    body:
      "ZZESK Consulting may collect information you provide directly, such as your name, business name, email address, phone number, and details about the workflow or business process you want to discuss.",
  },
  {
    title: "How information is used",
    body:
      "Information is used to respond to enquiries, assess whether there is a sensible fit for consulting work, prepare proposals, provide services, and maintain ordinary business records.",
  },
  {
    title: "AI and business data",
    body:
      "Any AI-related work should be scoped with clear expectations about data handling, tool access, approvals, retention, and privacy requirements before implementation begins.",
  },
  {
    title: "Sharing information",
    body:
      "ZZESK Consulting does not sell personal information. Information may be shared with service providers where needed to operate the website, communicate with you, or deliver agreed consulting services.",
  },
  {
    title: "Data security",
    body:
      "Reasonable technical and organisational steps should be used to protect information, while recognising that no method of electronic transmission or storage is completely secure.",
  },
  {
    title: "Access and correction",
    body:
      "You may request access to, correction of, or deletion of personal information by contacting ZZESK Consulting, subject to legal and operational requirements.",
  },
  {
    title: "Contact",
    body: `For privacy questions, contact ${site.email}.`,
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
              body="This placeholder privacy policy is written in plain language for review before launch."
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink-950 py-16 sm:py-20">
        <Container className="max-w-4xl">
          <Reveal>
            <div className="rounded-lg border border-accent-300/25 bg-accent-400/10 p-5 text-sm leading-6 text-mist-100">
              TODO: Review and finalise this privacy policy before the website goes live. The final wording should reflect the actual business structure, analytics tools, contact-form provider, hosting, data handling practices, and applicable legal requirements.
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8">
            {sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.04}>
                <section className="border-b border-white/10 pb-8 last:border-b-0 last:pb-0">
                  <h2 className="text-xl font-semibold text-mist-50">{section.title}</h2>
                  <p className="mt-3 text-base leading-7 text-mist-300">{section.body}</p>
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

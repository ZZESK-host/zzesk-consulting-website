import { Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { contact, site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact ZZESK Consulting to discuss a dashboard, automation, report, or repeated business task that could be simplified.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-radial-soft border-b border-white/10 bg-ink-950 py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading as="h1" eyebrow="CONTACT" title={contact.heading} body={contact.body} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink-950 py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <Reveal>
            <div className="rounded-lg border border-white/10 bg-ink-850 p-5 shadow-edge sm:p-7">
              <ContactForm />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-accent-300/20 bg-accent-400/10 text-accent-300">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-semibold text-mist-50">Prefer email?</h2>
              <p className="mt-3 text-sm leading-6 text-mist-300">
                Send a brief note about the task or report you want to improve, the tools involved and what you would like to see more clearly.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-5 inline-flex min-h-11 items-center rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-accent-300 transition hover:border-accent-300/50 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300"
              >
                {contact.emailLine}
              </a>
            </aside>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

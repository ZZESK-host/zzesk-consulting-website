import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { contact } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact ZZESK Consulting to discuss a Branded AI Dashboard, automation, report, or repeated business task that could be simplified.",
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
        <Container>
          <Reveal>
            <div className="mx-auto max-w-[56rem] rounded-lg border border-white/10 bg-ink-850 p-5 shadow-edge sm:p-7">
              <ContactForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { isServiceInterest, serviceInterestOptions } from "@/content/services";
import { contact } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Book a consultation with ZZESK Consulting to discuss AI strategy, productivity, automation, data, implementation, training or website modernisation.",
  path: "/contact",
});

type ContactPageProps = {
  searchParams: Promise<{ service?: string | string[] }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const query = await searchParams;
  const requestedService = Array.isArray(query.service) ? query.service[0] : query.service;
  const initialServiceInterest = requestedService && isServiceInterest(requestedService) ? requestedService : "";

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
              <ContactForm
                key={initialServiceInterest || "general-enquiry"}
                initialServiceInterest={initialServiceInterest}
                serviceOptions={serviceInterestOptions}
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

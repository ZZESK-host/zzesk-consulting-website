import Link from "next/link";
import { ArrowRight, CheckCircle2, Wrench } from "lucide-react";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { CtaPanel } from "@/components/cta-panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/content/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "AI Consulting and Delivery Services",
  description:
    "Explore seven connected AI service areas for Australian SMEs—from strategy and governance through implementation, integration and workforce adoption.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-radial-soft border-b border-white/10 bg-ink-950 py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow="SERVICES"
              title="Practical AI support from first decision to lasting adoption."
              body="Choose the capability that best fits your immediate priority. We can connect advisory, technical delivery and change support as the work develops."
              className="max-w-[54rem]"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink-950 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="CORE AI SERVICES"
              title="Seven ways we help SMEs put AI to work."
              body="Every engagement is shaped around the business outcome, current capability and level of risk involved."
              className="max-w-[54rem]"
            />
          </Reveal>
          <Reveal stagger className="mt-11 grid gap-4 lg:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block h-full rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300"
                aria-label={`Explore ${service.title}`}
              >
                <Card className="flex h-full flex-col transition duration-200 group-hover:-translate-y-1 group-hover:border-accent-300/45">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-300/20 bg-accent-400/10 text-accent-300">
                      <service.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-sm font-semibold tracking-[0.16em] text-accent-300">{service.number}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-mist-50">{service.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-mist-300">{service.description}</p>
                  <ul className="mt-6 grid gap-2">
                    {service.problems.slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-mist-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center pt-6 text-sm font-semibold text-accent-300">
                    Explore service
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Card>
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-slate-400/[0.16] bg-ink-900 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="SUPPORTING DIGITAL SERVICE"
              title="Website Modernisation"
              body="When an ageing website is holding the business back, we can also redesign and rebuild it as a faster, clearer and more credible digital experience. This remains available as a supporting service outside our seven core AI categories."
              className="max-w-[54rem]"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href="/contact?service=website-modernisation"
              className="group mt-9 block max-w-[54rem] rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300"
            >
              <Card className="flex items-start gap-5 transition duration-200 group-hover:-translate-y-1 group-hover:border-accent-300/45 sm:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-cobalt-300/25 bg-cobalt-300/10 text-cobalt-300">
                  <Wrench className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-mist-50">Discuss a website modernisation project</h2>
                  <p className="mt-2 text-sm leading-6 text-mist-300">Responsive design, modern development, performance, accessibility, SEO foundations and launch support.</p>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-accent-300 transition group-hover:translate-x-1 sm:mt-0" aria-hidden="true" />
              </Card>
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink-950 py-16 sm:py-20">
        <Container>
          <Reveal>
            <CtaPanel
              heading="Not sure which service fits? Start with the priority."
              body="Tell us what you are considering, where work is getting stuck or what outcome matters. We will help you identify a sensible next step."
              buttonLabel="Book a Consultation"
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

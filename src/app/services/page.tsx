import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { CtaPanel } from "@/components/cta-panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "AI Dashboard and Agent Services",
  description:
    "Explore ZZESK Consulting's branded AI dashboards, custom agent teams, integrations, cloud and on-prem deployment options, usage metering, and support.",
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
              title="Done-for-you AI agents inside your own dashboard."
              body="ZZESK Consulting packages AI implementation into a practical service: a branded dashboard, tailored agents, connected business tools and ongoing support on a subscription."
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink-950 py-16 sm:py-20">
        <Container>
          <Reveal stagger className="grid gap-4 lg:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="h-full">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-accent-300/20 bg-accent-400/10 text-accent-300">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold text-mist-50">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-mist-300">{service.description}</p>
                <div className="mt-6">
                  <p className="text-sm font-medium text-mist-100">{service.goodFitLabel ?? "Good fit for"}</p>
                  <ul className="mt-3 grid gap-2">
                    {service.goodFit.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-mist-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink-950 pb-16 sm:pb-20">
        <Container>
          <Reveal>
            <CtaPanel
              heading="Choose the agent team your business needs."
              body="Start with a discovery call, then scope the dashboard, agents, integrations and deployment model that fit your workflow and data requirements."
              buttonLabel="Book a Discovery Call"
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

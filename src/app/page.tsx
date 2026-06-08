import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { CtaPanel } from "@/components/cta-panel";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { FounderImplementationCard } from "@/components/founder-implementation-card";
import { NeuralNetworkBackground } from "@/components/neural-network-background";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { home, site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Custom AI Dashboards and Business Automation",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950">
        <NeuralNetworkBackground />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,17,26,0.98)_0%,rgba(8,17,26,0.9)_30%,rgba(8,17,26,0.52)_60%,rgba(8,17,26,0.24)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_50%,rgba(8,17,26,0.64)_0%,rgba(8,17,26,0.34)_24rem,rgba(8,17,26,0)_42rem)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(45,212,191,0.1)_0%,rgba(45,212,191,0.04)_24rem,rgba(8,17,26,0)_42rem)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(8,17,26,0)_0%,rgba(8,17,26,0.08)_48%,rgba(8,17,26,0.56)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent to-ink-950"
          aria-hidden="true"
        />
        <Container className="relative flex min-h-[calc(100vh-5rem)] items-center py-20 sm:py-24 lg:min-h-[820px] lg:py-32 xl:min-h-[880px]">
          <Reveal>
            <div className="max-w-[68rem]">
              <p className="text-[0.82rem] font-semibold tracking-[0.22em] text-accent-300 sm:text-sm">
                {home.hero.eyebrow}
              </p>
              <h1 className="mt-6 max-w-[13.4em] text-[clamp(2.85rem,5.4vw,5.9rem)] font-semibold leading-[0.98] text-mist-50">
                Automate the repetitive work.
                {" "}
                <span className="block">Keep the human judgement.</span>
              </h1>
              <p className="mt-8 max-w-[42.5rem] text-lg leading-8 text-mist-200 sm:text-xl sm:leading-9">{home.hero.body}</p>
              <div className="mt-8 inline-flex max-w-full rounded-full border border-accent-300/30 bg-accent-300/10 px-4 py-2 text-sm font-semibold text-accent-300 shadow-[0_0_45px_rgba(45,212,191,0.1)]">
                {home.hero.dashboardLine}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href={site.bookingHref} className="min-h-12 px-6 text-base">
                  {site.bookingLabel}
                </ButtonLink>
                <ButtonLink href="/services" variant="secondary" className="min-h-12 px-6 text-base">
                  Explore Services
                </ButtonLink>
              </div>
              <p className="mt-8 text-base leading-7 text-mist-300">{home.hero.trust}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-slate-400/[0.16] bg-ink-850 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading title={home.values.heading} body={home.values.body} className="max-w-[48rem]" />
          </Reveal>
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {home.values.cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <Card className="h-full min-h-[16rem]">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-accent-300/30 bg-accent-300/10 text-accent-300">
                    <card.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-mist-50">{card.title}</h3>
                  <p className="mt-4 text-[1rem] leading-7 text-mist-200">{card.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-400/[0.16] bg-ink-900 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading title={home.services.heading} body={home.services.body} className="max-w-[50rem]" />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {home.services.cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.07}>
                <ServiceCard title={card.title} body={card.body} icon={card.icon} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-850 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading title={home.process.heading} align="center" />
          </Reveal>
          <div className="relative mt-14 grid gap-5 md:grid-cols-4">
            <div className="absolute left-6 top-0 h-full w-px bg-slate-400/[0.16] md:left-0 md:right-0 md:top-12 md:mx-auto md:h-px md:w-[calc(100%-12rem)]" aria-hidden="true" />
            {home.process.steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08}>
                <div className="relative h-full rounded-lg border border-slate-400/[0.16] bg-ink-800/62 p-6 shadow-edge transition duration-200 hover:border-accent-300/35 hover:bg-ink-800">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent-300/35 bg-ink-950 text-sm font-semibold text-accent-300 shadow-[0_0_32px_rgba(45,212,191,0.11)]">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-mist-50">{step.title}</h3>
                  <p className="mt-3 text-[1rem] leading-7 text-mist-200">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-400/[0.16] bg-ink-900 py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <SectionHeading title={home.founder.heading} body={home.founder.body} />
                <ButtonLink href="/about" variant="secondary" className="mt-8 min-h-12 px-6 text-base">
                  Learn More About ZZESK
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <FounderImplementationCard />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="EXAMPLE CONTROL CENTRE" title={home.useCase.heading} body={home.useCase.body} />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mt-12">
              <div className="absolute inset-x-4 -top-10 h-48 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.15),rgba(79,141,247,0.08)_38%,transparent_70%)] blur-2xl" aria-hidden="true" />
              <DashboardMockup />
              <p className="mt-6 max-w-3xl text-[1rem] leading-7 text-mist-300">{home.useCase.note}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink-950 pb-20 sm:pb-24">
        <Container>
          <Reveal>
            <CtaPanel heading={home.finalCta.heading} body={home.finalCta.body} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

import Image from "next/image";
import type { CSSProperties } from "react";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { CaseStudyTabs } from "@/components/case-study-tabs";
import { Container } from "@/components/container";
import { CtaPanel } from "@/components/cta-panel";
import { FounderImplementationCard } from "@/components/founder-implementation-card";
import { HeroDashboard } from "@/components/hero-dashboard";
import { NeuralNetworkBackground } from "@/components/neural-network-background";
import { ProcessStepCard } from "@/components/process-step-card";
import { Reveal } from "@/components/reveal";
import { RoiCalculator } from "@/components/roi-calculator";
import { RoiCard } from "@/components/roi-card";
import { SectionHeading } from "@/components/section-heading";
import { ServicePackageCard } from "@/components/service-package-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { ToolMarquee } from "@/components/tool-marquee";
import { home, site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Dashboards and Automation for Small Businesses",
  path: "/",
});

function HeroHeading({ text, highlight }: { text: string; highlight: string }) {
  const words = text.split(" ");
  const highlightWords = highlight.split(" ");

  let highlightStart = -1;
  for (let i = 0; i <= words.length - highlightWords.length; i += 1) {
    if (highlightWords.every((word, j) => words[i + j] === word)) {
      highlightStart = i;
      break;
    }
  }

  return (
    <h1 className="mt-6 text-balance text-[clamp(2.6rem,4.7vw,4.7rem)] font-semibold leading-[1.02] text-mist-50">
      {words.map((word, index) => {
        const highlighted = highlightStart >= 0 && index >= highlightStart && index < highlightStart + highlightWords.length;
        return (
          <span key={`${word}-${index}`}>
            <span
              className={highlighted ? "hero-word text-gradient-accent text-shimmer" : "hero-word"}
              style={{ "--word-index": index } as CSSProperties}
            >
              {word}
            </span>
            {index < words.length - 1 ? " " : null}
          </span>
        );
      })}
    </h1>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950">
        <NeuralNetworkBackground />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,17,26,0.97)_0%,rgba(8,17,26,0.88)_34%,rgba(8,17,26,0.55)_70%,rgba(8,17,26,0.3)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_50%,rgba(8,17,26,0.6)_0%,rgba(8,17,26,0.32)_25rem,rgba(8,17,26,0)_44rem)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_38%,rgba(45,212,191,0.1)_0%,rgba(45,212,191,0.035)_24rem,rgba(8,17,26,0)_44rem)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent to-ink-950"
          aria-hidden="true"
        />
        <Container className="relative flex min-h-[calc(100vh-5rem)] items-center py-20 sm:py-24 lg:min-h-[800px] lg:py-28">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
            <div>
              <Reveal variant="fade">
                <p className="inline-flex items-center gap-3 font-mono text-[0.74rem] font-semibold tracking-[0.26em] text-accent-300 sm:text-[0.8rem]">
                  <span className="h-px w-8 bg-accent-300/60" aria-hidden="true" />
                  {home.hero.eyebrow}
                </p>
              </Reveal>
              <HeroHeading text={home.hero.heading} highlight="one clear place." />
              <Reveal variant="blur" delay={0.45}>
                <p className="mt-7 max-w-[36rem] text-lg leading-8 text-mist-200 sm:text-xl sm:leading-9">{home.hero.body}</p>
              </Reveal>
              <Reveal variant="up" delay={0.6}>
                <div className="mt-7 inline-flex max-w-full rounded-full border border-accent-300/30 bg-accent-300/10 px-4 py-2 text-sm font-semibold text-accent-300 shadow-[0_0_45px_rgba(45,212,191,0.1)]">
                  {home.hero.dashboardLine}
                </div>
              </Reveal>
              <Reveal variant="up" delay={0.72}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ButtonLink href={site.bookingHref} className="min-h-12 px-6 text-base">
                    {site.bookingLabel}
                  </ButtonLink>
                  <ButtonLink href="#case-studies" variant="secondary" className="min-h-12 px-6 text-base">
                    See What We Build
                  </ButtonLink>
                </div>
              </Reveal>
              <Reveal variant="fade" delay={0.9}>
                <p className="mt-8 max-w-[36rem] text-base leading-7 text-mist-300">{home.hero.trust}</p>
              </Reveal>
            </div>

            <HeroDashboard />
          </div>
        </Container>

        <div className="pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center lg:flex" aria-hidden="true">
          <div className="flex h-9 w-6 items-start justify-center rounded-full border border-mist-300/30 p-1.5">
            <span className="scroll-cue-bob h-1.5 w-1.5 rounded-full bg-accent-300" />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-400/[0.16] bg-ink-850 py-8 sm:py-10">
        <Container>
          <Reveal stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {home.outcomes.cards.map((outcome) => (
              <div
                key={outcome.title}
                className="spotlight-card flex min-h-24 items-center gap-3 rounded-lg border border-slate-400/[0.16] bg-white/[0.035] p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent-300/25 bg-accent-300/10 text-accent-300">
                  <outcome.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold leading-6 text-mist-50">{outcome.title}</p>
              </div>
            ))}
          </Reveal>
          <Reveal variant="fade" delay={0.3}>
            <p className="mt-4 text-sm leading-6 text-mist-400">{home.outcomes.note}</p>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-slate-400/[0.16] bg-ink-900 py-10 sm:py-12">
        <Container>
          <Reveal variant="fade">
            <p className="mb-6 text-center font-mono text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-mist-400">
              Connects the tools you already use
            </p>
            <ToolMarquee />
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-slate-400/[0.16] bg-ink-950 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading title={home.problems.heading} body={home.problems.body} className="max-w-[54rem]" />
          </Reveal>
          <Reveal stagger className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {home.problems.cards.map((card) => (
              <Card key={card.title} className="h-full p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-accent-300/25 bg-accent-300/10 text-accent-300">
                  <card.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-mist-50">{card.title}</h3>
                <p className="mt-3 text-[0.96rem] leading-7 text-mist-200">{card.body}</p>
              </Card>
            ))}
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-10">
              <ButtonLink href={site.bookingHref} variant="secondary" className="min-h-12 px-6 text-base">
                {home.problems.cta}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-slate-400/[0.16] bg-ink-900 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading title={home.customers.heading} body={home.customers.body} className="max-w-[54rem]" />
          </Reveal>
          <Reveal stagger className="mt-11 grid gap-5 md:grid-cols-3">
            {home.customers.cards.map((card) => (
              <Card key={card.title} className="h-full min-h-[15rem]">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-accent-300/30 bg-accent-300/10 text-accent-300">
                  <card.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-mist-50">{card.title}</h3>
                <p className="mt-4 text-[1rem] leading-7 text-mist-200">{card.body}</p>
              </Card>
            ))}
          </Reveal>
        </Container>
      </section>

      <section id="case-studies" className="scroll-mt-24 border-b border-slate-400/[0.16] bg-ink-950 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading title={home.proof.heading} body={home.proof.body} className="max-w-[56rem]" />
          </Reveal>
          <Reveal delay={0.08}>
            <CaseStudyTabs categories={home.proof.categories} studies={home.proof.caseStudies} />
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-slate-400/[0.16] bg-ink-900 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading title={home.testimonials.heading} className="max-w-[46rem]" />
          </Reveal>
          <Reveal stagger className="mt-11 grid gap-5 lg:grid-cols-2">
            {home.testimonials.cards.map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.company}-${index}`} testimonial={testimonial} />
            ))}
          </Reveal>
        </Container>
      </section>

      <section id="services" className="scroll-mt-24 border-b border-slate-400/[0.16] bg-ink-850 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading title={home.packages.heading} body={home.packages.body} className="max-w-[54rem]" />
          </Reveal>
          <Reveal stagger className="mt-12 grid gap-5 lg:grid-cols-3">
            {home.packages.cards.map((servicePackage) => (
              <ServicePackageCard key={servicePackage.title} servicePackage={servicePackage} />
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-slate-400/[0.16] bg-ink-950 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading title={home.roi.heading} body={home.roi.body} className="max-w-[54rem]" />
          </Reveal>
          <Reveal stagger className="mt-12 grid gap-5 lg:grid-cols-3">
            {home.roi.examples.map((example) => (
              <RoiCard key={example.hoursPerWeek} example={example} />
            ))}
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8">
              <RoiCalculator />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-slate-400/[0.16] bg-ink-850 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading title={home.process.heading} align="center" />
          </Reveal>
          <Reveal stagger className="relative mt-14 grid gap-5 md:grid-cols-4">
            <div
              data-no-stagger
              className="process-connector absolute left-6 top-0 h-full w-px bg-gradient-to-b from-accent-300/55 via-slate-400/[0.22] to-cobalt-300/45 md:left-0 md:right-0 md:top-12 md:mx-auto md:h-px md:w-[calc(100%-12rem)] md:bg-gradient-to-r"
              aria-hidden="true"
            />
            {home.process.steps.map((step) => (
              <ProcessStepCard key={step.number} step={step} />
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-slate-400/[0.16] bg-ink-900 py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="grid gap-5">
                <div className="overflow-hidden rounded-lg border border-slate-400/[0.18] bg-ink-800 shadow-soft">
                  <Image
                    src={home.founder.imageSrc}
                    alt={home.founder.imageAlt}
                    width={1284}
                    height={2778}
                    className="aspect-[5/4] w-full object-cover"
                    style={{ display: "block", height: "auto", maxWidth: "100%", objectPosition: "center 22%", width: "100%" }}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
                <FounderImplementationCard />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <SectionHeading title={home.founder.heading} />
                <div className="mt-6 grid gap-4 text-[1rem] leading-7 text-mist-200">
                  {home.founder.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {home.founder.attributes.map((attribute) => (
                    <div key={attribute} className="flex items-center gap-2 rounded-lg border border-slate-400/[0.16] bg-white/[0.035] px-4 py-3">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
                      <span className="text-sm font-medium text-mist-100">{attribute}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 py-20 sm:py-24">
        <Container>
          <Reveal>
            <CtaPanel heading={home.finalCta.heading} body={home.finalCta.body} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

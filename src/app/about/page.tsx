import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { about, site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn how founder-led ZZESK Consulting combines practical AI advice, responsible governance, technical delivery and adoption support for Australian SMEs.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-radial-soft border-b border-white/10 bg-ink-950 py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading as="h1" eyebrow="ABOUT" title="AI should solve a real business problem—and work responsibly in the real operation." body={about.intro} className="max-w-[54rem]" />
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-ink-950 py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] text-accent-300">WHO WE HELP</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-mist-50">A practical AI partner for Australian SMEs</h2>
                <p className="mt-5 text-base leading-8 text-mist-200">{about.whoWeHelp}</p>
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] text-accent-300">CONNECTED CAPABILITY</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-mist-50">Advice and implementation stay connected</h2>
                <p className="mt-5 text-base leading-8 text-mist-200">{about.capability}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink-900 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading title={about.implementationHeading} />
          </Reveal>
          <Reveal stagger className="mt-10 grid gap-4 md:grid-cols-3">
            {about.principles.map((principle) => (
              <Card key={principle.title} className="h-full">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-accent-300/20 bg-accent-400/10 text-accent-300">
                  <principle.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-semibold text-mist-50">{principle.title}</h2>
                <p className="mt-3 text-sm leading-6 text-mist-300">{principle.body}</p>
              </Card>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-ink-950 py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <SectionHeading eyebrow="WHAT TO EXPECT" title="Straightforward, accountable work" body="The exact scope changes with the priority, but these principles remain consistent across advisory, implementation and adoption engagements." />
              <ul className="mt-7 grid gap-3">
                {about.expectations.map((expectation) => (
                  <li key={expectation} className="flex gap-3 text-sm leading-6 text-mist-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
                    <span>{expectation}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="grid gap-4">
                {about.engagementSteps.map((step, index) => (
                  <Card key={step.title} className="flex gap-4 p-5 sm:p-6">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-300/30 bg-accent-300/10 font-mono text-xs font-semibold text-accent-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="text-base font-semibold text-mist-50">{step.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-mist-300">{step.body}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-ink-900 py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.18em] text-accent-300">FOUNDER</p>
              <h2 className="mt-4 text-3xl font-semibold text-mist-50 sm:text-4xl">{site.founder}</h2>
              <p className="mt-2 text-base font-medium text-mist-200">Founder and accountable delivery partner</p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-mist-300">{about.founderBio}</p>
              <ButtonLink href="/contact" className="mt-7">
                Discuss Your AI Priorities
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

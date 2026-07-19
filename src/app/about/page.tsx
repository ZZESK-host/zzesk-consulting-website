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
    "Learn about ZZESK Consulting, a founder-led business building practical dashboards, automations, and AI-assisted tools where they save time.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-radial-soft border-b border-white/10 bg-ink-950 py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading as="h1" eyebrow="ABOUT" title="Founder-led Branded AI Dashboard building." body={about.intro} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink-950 py-16 sm:py-20">
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

      <section className="border-y border-white/10 bg-ink-900 py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.18em] text-accent-300">FOUNDER</p>
              <h2 className="mt-4 text-3xl font-semibold text-mist-50 sm:text-4xl">{site.founder}</h2>
              <p className="mt-2 text-base font-medium text-mist-200">Founder, ZZESK Consulting</p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-mist-300">{about.founderBio}</p>
              <ButtonLink href="/contact" className="mt-7">
                Book a Discovery Call
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

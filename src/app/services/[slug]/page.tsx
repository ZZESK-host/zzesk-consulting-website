import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { CtaPanel } from "@/components/cta-panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { serviceBySlug, services } from "@/content/services";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);

  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);

  if (!service) notFound();

  const relatedServices = service.related.flatMap((relatedSlug) => {
    const related = serviceBySlug.get(relatedSlug);
    return related ? [related] : [];
  });
  const canonical = `${site.url}/services/${service.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.seoDescription,
      serviceType: service.title,
      areaServed: "Australia",
      url: canonical,
      provider: {
        "@type": "ProfessionalService",
        name: site.businessName,
        url: site.url,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
        { "@type": "ListItem", position: 3, name: service.title, item: canonical },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="bg-radial-soft border-b border-white/10 bg-ink-950 py-14 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-mist-400">
              <Link href="/" className="rounded transition hover:text-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Link href="/services" className="rounded transition hover:text-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300">Services</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-mist-200">{service.shortTitle}</span>
            </nav>

            <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-start">
              <div className="max-w-[55rem]">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent-300/25 bg-accent-300/10 text-accent-300">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-sm font-semibold tracking-[0.18em] text-accent-300">SERVICE {service.number}</span>
                </div>
                <h1 className="text-balance text-[2.35rem] font-semibold leading-[1.08] text-mist-50 sm:text-[3.4rem]">{service.title}</h1>
                <p className="mt-6 max-w-[50rem] text-lg leading-8 text-mist-200 sm:text-xl sm:leading-9">{service.outcome}</p>
                <ButtonLink href={`/contact?service=${service.slug}`} className="mt-8 min-h-12 px-6 text-base">
                  Discuss this service
                </ButtonLink>
              </div>
              <div className="hidden font-mono text-[5.5rem] font-semibold leading-none text-white/[0.035] lg:block" aria-hidden="true">
                {service.number}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-slate-400/[0.16] bg-ink-950 py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <Reveal>
              <SectionHeading eyebrow="OVERVIEW" title="What this service helps you do" />
              <div className="mt-6 grid gap-4 text-base leading-8 text-mist-200">
                {service.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="h-full bg-ink-850 p-6 sm:p-7">
                <h2 className="text-xl font-semibold text-mist-50">A good fit when</h2>
                <ul className="mt-6 grid gap-3">
                  {service.fit.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-mist-200">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-400/[0.16] bg-ink-900 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="BUSINESS NEEDS" title="Problems we can help address" body="The engagement starts with the outcome and operating context, then works back to the right combination of advice, technology and change." className="max-w-[54rem]" />
          </Reveal>
          <Reveal stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {service.problems.map((problem, index) => (
              <div key={problem} className="rounded-lg border border-slate-400/[0.16] bg-white/[0.035] p-5">
                <span className="font-mono text-xs font-semibold text-accent-300">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-4 text-sm font-medium leading-6 text-mist-100">{problem}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-slate-400/[0.16] bg-ink-950 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="CAPABILITIES" title="What we can provide" />
          </Reveal>
          <Reveal stagger className="mt-10 grid gap-5 md:grid-cols-2">
            {service.capabilities.map((capability) => (
              <Card key={capability.title} className="h-full p-6">
                <h2 className="text-lg font-semibold text-mist-50">{capability.title}</h2>
                <p className="mt-3 text-sm leading-7 text-mist-300">{capability.body}</p>
              </Card>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-slate-400/[0.16] bg-ink-850 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="TYPICAL ENGAGEMENTS" title="Focused ways to begin" body="The scope is adjusted to the organisation, but these are representative engagement shapes—not fixed packages or promised outcomes." className="max-w-[54rem]" />
          </Reveal>
          <Reveal stagger className="mt-10 grid gap-5 lg:grid-cols-2">
            {service.engagements.map((engagement) => (
              <Card key={engagement.title} className="h-full p-6 sm:p-7">
                <h2 className="text-xl font-semibold text-mist-50">{engagement.title}</h2>
                <p className="mt-3 text-sm leading-7 text-mist-300">{engagement.body}</p>
                <p className="mt-6 text-sm font-semibold text-mist-100">Representative deliverables</p>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {engagement.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-2 text-sm leading-6 text-mist-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-slate-400/[0.16] bg-ink-950 py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading eyebrow="REPRESENTATIVE EXAMPLES" title="What this could look like" body="These examples illustrate possible applications only. They are not customer case studies or performance claims." />
              <ul className="mt-7 grid gap-3">
                {service.examples.map((example) => (
                  <li key={example} className="flex gap-3 rounded-lg border border-slate-400/[0.14] bg-white/[0.03] p-4 text-sm leading-6 text-mist-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt-300" aria-hidden="true" />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <SectionHeading eyebrow="OUR APPROACH" title="How we work" />
              <ol className="mt-7 grid gap-4">
                {service.approach.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-300/30 bg-accent-300/10 font-mono text-xs font-semibold text-accent-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-sm leading-7 text-mist-200">{step}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-400/[0.16] bg-ink-900 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="RELATED SERVICES" title="Connected capabilities" />
          </Reveal>
          <Reveal stagger className="mt-9 grid gap-4 md:grid-cols-3">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group rounded-lg border border-slate-400/[0.16] bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-accent-300/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <related.icon className="h-5 w-5 text-accent-300" aria-hidden="true" />
                  <ArrowRight className="h-4 w-4 text-accent-300 transition group-hover:translate-x-1" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-base font-semibold leading-6 text-mist-50">{related.title}</h2>
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink-950 py-16 sm:py-20">
        <Container>
          <Reveal>
            <CtaPanel
              heading={`Discuss ${service.shortTitle} with us.`}
              body="Tell us about the business priority, current situation and outcome you are considering. We will help you decide whether there is a practical next step."
              buttonLabel="Book a Consultation"
              href={`/contact?service=${service.slug}`}
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

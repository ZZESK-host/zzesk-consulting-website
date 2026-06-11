import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { CaseStudy } from "@/content/site";
import { cn } from "@/lib/utils";

type CaseStudyCardProps = {
  study: CaseStudy;
  featured?: boolean;
};

export function CaseStudyCard({ study, featured = false }: CaseStudyCardProps) {
  return (
    <article
      className={cn(
        "spotlight-card group flex h-full flex-col overflow-hidden rounded-lg border border-slate-400/[0.16] bg-ink-800/72 shadow-edge transition duration-200 hover:-translate-y-1 hover:border-accent-300/40 hover:bg-ink-800",
        featured && "lg:grid lg:grid-cols-[1.05fr_0.95fr]",
      )}
    >
      <div className={cn("relative min-h-[15rem] overflow-hidden bg-ink-950", featured && "lg:min-h-full")}>
        <Image
          src={study.imageSrc}
          alt={study.imageAlt}
          width={1120}
          height={720}
          className="h-full min-h-[15rem] w-full object-contain transition duration-500 group-hover:scale-[1.02]"
          style={{ display: "block", height: "100%", maxWidth: "100%", width: "100%" }}
          sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/58 via-transparent to-transparent" aria-hidden="true" />
        {study.isPlaceholder ? (
          <div className="absolute left-4 top-4 rounded-full border border-accent-300/25 bg-ink-950/78 px-3 py-1 text-xs font-medium text-accent-300 backdrop-blur">
            Screenshot placeholder
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {study.logoLabel ? <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">{study.logoLabel}</p> : null}
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-mist-50">{study.projectName}</h3>

        <div className="mt-6 flex flex-wrap gap-2">
          {study.categories.map((category) => (
            <span key={category} className="rounded-full border border-slate-400/[0.16] bg-white/[0.035] px-3 py-1 text-xs font-medium text-mist-300">
              {category}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-400">Business problem</p>
            <p className="mt-2 text-[0.98rem] leading-7 text-mist-200">{study.problem}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-400">What was built</p>
            <p className="mt-2 text-[0.98rem] leading-7 text-mist-200">{study.solution}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-400">Day-to-day improvement</p>
            <p className="mt-2 text-[0.98rem] leading-7 text-mist-200">{study.processImprovement}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-400/[0.14] bg-white/[0.035] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-400">Before</p>
            <p className="mt-2 text-sm leading-6 text-mist-200">{study.before}</p>
          </div>
          <div className="rounded-lg border border-accent-300/20 bg-accent-300/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-300">After</p>
            <p className="mt-2 text-sm leading-6 text-mist-100">{study.after}</p>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-cobalt-300/20 bg-cobalt-300/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cobalt-300">Result</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-mist-50">{study.result}</p>
        </div>

        <ul className="mt-5 grid gap-2.5">
          {study.results.map((result) => (
            <li key={result} className="flex gap-2 text-sm leading-6 text-mist-200">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
              <span>{result}</span>
            </li>
          ))}
        </ul>

        {study.testimonial ? (
          <blockquote className="mt-6 rounded-lg border border-accent-300/20 bg-accent-300/10 p-4 text-sm leading-6 text-mist-100">
            &quot;{study.testimonial}&quot;
          </blockquote>
        ) : null}

        {study.caseStudyHref ? (
          <Link
            href={study.caseStudyHref}
            className="mt-6 inline-flex w-fit items-center rounded-lg text-sm font-semibold text-accent-300 transition hover:text-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300"
          >
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        ) : null}
      </div>
    </article>
  );
}

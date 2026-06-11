import Image from "next/image";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/content/site";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="spotlight-card flex h-full flex-col rounded-lg border border-slate-400/[0.16] bg-ink-800/72 p-6 shadow-edge transition duration-200 hover:-translate-y-1 hover:border-accent-300/35 hover:bg-ink-800 sm:p-7">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent-300/20 bg-accent-300/10 text-accent-300">
          <Quote className="h-5 w-5" aria-hidden="true" />
        </div>
        {testimonial.logoLabel ? (
          <span className="rounded-full border border-slate-400/[0.16] bg-white/[0.035] px-3 py-1 text-xs font-medium text-mist-300">
            {testimonial.logoLabel}
          </span>
        ) : null}
      </div>

      <blockquote className="text-[1rem] leading-7 text-mist-100">&quot;{testimonial.quote}&quot;</blockquote>

      <div className="mt-7 flex items-center gap-3">
        {testimonial.portraitSrc ? (
          <Image
            src={testimonial.portraitSrc}
            alt={testimonial.portraitAlt ?? `${testimonial.name} portrait`}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-400/[0.16] bg-white/[0.04] text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-mist-400">
            Photo
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-mist-50">{testimonial.name}</p>
          <p className="mt-0.5 text-sm leading-5 text-mist-400">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>

      {testimonial.isPlaceholder ? <p className="mt-5 text-xs leading-5 text-mist-400">Placeholder content. Replace once approved.</p> : null}
    </article>
  );
}

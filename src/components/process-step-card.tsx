import type { ProcessStep } from "@/content/site";

type ProcessStepCardProps = {
  step: ProcessStep;
};

export function ProcessStepCard({ step }: ProcessStepCardProps) {
  const Icon = step.icon;

  return (
    <article className="spotlight-card relative h-full rounded-lg border border-slate-400/[0.16] bg-ink-800/62 p-6 shadow-edge transition duration-200 hover:border-accent-300/35 hover:bg-ink-800">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent-300/35 bg-ink-950 text-sm font-semibold text-accent-300 shadow-[0_0_32px_rgba(45,212,191,0.11)]">
        {step.number}
      </div>
      <div className="mt-6 flex items-center gap-3">
        <Icon className="h-5 w-5 text-accent-300" aria-hidden="true" />
        <h3 className="text-xl font-semibold text-mist-50">{step.title}</h3>
      </div>
      <p className="mt-3 text-[1rem] leading-7 text-mist-200">{step.body}</p>
    </article>
  );
}

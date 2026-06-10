import { Clock3 } from "lucide-react";
import type { RoiExample } from "@/content/site";

type RoiCardProps = {
  example: RoiExample;
};

export function RoiCard({ example }: RoiCardProps) {
  return (
    <article className="h-full rounded-lg border border-slate-400/[0.16] bg-ink-800/72 p-6 shadow-edge transition duration-200 hover:-translate-y-1 hover:border-accent-300/35 hover:bg-ink-800">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-accent-300/20 bg-accent-300/10 text-accent-300">
        <Clock3 className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-2xl font-semibold text-mist-50">{example.heading}</h3>
      <ul className="mt-5 grid gap-3 text-[0.98rem] leading-7 text-mist-200">
        <li>{example.hoursRecovered}</li>
        <li>
          At {example.hourlyRate}: <strong className="font-semibold text-mist-50">{example.annualValue}</strong>
        </li>
      </ul>
    </article>
  );
}

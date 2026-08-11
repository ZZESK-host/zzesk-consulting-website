import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import type { ServicePackage } from "@/content/site";
import { cn } from "@/lib/utils";

type ServicePackageCardProps = {
  servicePackage: ServicePackage;
};

export function ServicePackageCard({ servicePackage }: ServicePackageCardProps) {
  const Icon = servicePackage.icon;

  return (
    <article
      className={cn(
        "spotlight-card relative flex h-full flex-col overflow-hidden rounded-lg border border-slate-400/[0.16] bg-ink-800/72 p-6 shadow-edge transition duration-200 hover:-translate-y-1 hover:border-accent-300/40 hover:bg-ink-800 sm:p-7",
        servicePackage.featured &&
          "border-accent-300/38 bg-[linear-gradient(150deg,rgba(19,35,51,0.98),rgba(11,22,34,0.94))] shadow-[0_24px_90px_rgba(45,212,191,0.1)]",
      )}
    >
      {servicePackage.featured ? (
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-300 via-cobalt-300 to-accent-300" aria-hidden="true" />
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent-300/25 bg-accent-300/10 text-accent-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        {servicePackage.featured ? (
          <span className="rounded-full border border-accent-300/30 bg-accent-300/10 px-3 py-1 text-xs font-semibold text-accent-300">
            Popular starting point
          </span>
        ) : null}
      </div>

      <h3 className="mt-6 text-2xl font-semibold leading-tight text-mist-50">{servicePackage.title}</h3>
      <p className="mt-2 text-sm font-semibold text-accent-300">{servicePackage.subtitle}</p>
      <p className="mt-5 text-[0.98rem] leading-7 text-mist-200">{servicePackage.description}</p>

      <ul className="mt-6 grid gap-2.5">
        {servicePackage.includes.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-mist-200">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <ButtonLink href={servicePackage.href} variant={servicePackage.featured ? "primary" : "secondary"}>
          {servicePackage.cta}
        </ButtonLink>
      </div>
    </article>
  );
}

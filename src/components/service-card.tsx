import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/card";

type ServiceCardProps = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, body, icon: Icon }: ServiceCardProps) {
  return (
    <Link
      href="/services"
      className="group block h-full rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300"
      aria-label={`View services including ${title}`}
    >
      <Card className="flex h-full flex-col border-slate-400/[0.2] bg-ink-800 p-7 group-hover:border-accent-300/50">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-accent-300/30 bg-accent-300/10 text-accent-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-mist-400">DASHBOARD SERVICE</p>
        <h3 className="text-xl font-semibold leading-snug text-mist-50">{title}</h3>
        <div className="my-5 h-px bg-slate-400/[0.14]" />
        <p className="text-[0.98rem] leading-7 text-mist-200">{body}</p>
        <span className="mt-6 inline-flex items-center text-sm font-semibold text-accent-300">
          Explore service
          <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </Card>
    </Link>
  );
}

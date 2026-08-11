import { CheckCircle2, Gauge, LayoutDashboard, Workflow } from "lucide-react";

const implementationRows = [
  {
    label: "Operation understood",
    detail: "People, tools, handoffs and friction",
    icon: Workflow,
  },
  {
    label: "Right solution defined",
    detail: "AI, automation, software or web",
    icon: LayoutDashboard,
  },
  {
    label: "Handover built in",
    detail: "Documentation and support",
    icon: CheckCircle2,
  },
];

export function FounderImplementationCard() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-slate-400/[0.18] bg-ink-800 p-5 shadow-soft">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_76%_8%,rgba(45,212,191,0.16),transparent_18rem),radial-gradient(circle_at_20%_92%,rgba(79,141,247,0.14),transparent_16rem)]"
        aria-hidden="true"
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Founder-led consulting</p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-mist-50">
              Advice and delivery stay connected from first conversation to handover.
            </h3>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-cobalt-300/25 bg-cobalt-300/10 text-cobalt-300">
            <Gauge className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>

        <div className="my-6 h-px bg-slate-400/[0.14]" />

        <div className="grid gap-3">
          {implementationRows.map((row) => (
            <div key={row.label} className="flex gap-3 rounded-lg border border-slate-400/[0.14] bg-white/[0.035] p-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent-300/20 bg-accent-300/10 text-accent-300">
                <row.icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-mist-50">{row.label}</p>
                <p className="mt-1 text-xs leading-5 text-mist-400">{row.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg border border-accent-300/25 bg-accent-300/10 p-4">
          <p className="text-sm font-semibold text-mist-50">One accountable partner</p>
          <p className="mt-2 text-sm leading-6 text-mist-200">
            Strategy, technical decisions and implementation stay focused on making the business work better.
          </p>
        </div>
      </div>
    </div>
  );
}

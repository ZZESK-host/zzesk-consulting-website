import type { CSSProperties } from "react";
import { FileText, Inbox, RefreshCw } from "lucide-react";
import { CountUp } from "@/components/count-up";
import { cn } from "@/lib/utils";

const kpis = [
  { label: "Hours back / month", value: 86 },
  { label: "Tasks automated", value: 1248 },
  { label: "Less manual admin", value: 38, suffix: "%" },
];

const workflows = [
  { label: "Enquiry handling", width: "82%", status: "On track", tone: "success" as const },
  { label: "Invoice follow-ups", width: "64%", status: "Running", tone: "info" as const },
];

const activity = [
  { icon: Inbox, text: "Enquiry summarised and routed", time: "2m ago" },
  { icon: FileText, text: "Weekly report compiled", time: "11m ago" },
  { icon: RefreshCw, text: "14 records synced across tools", time: "26m ago" },
];

function riseDelay(seconds: number) {
  return { "--rise-delay": `${seconds}s` } as CSSProperties;
}

export function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[30rem]">
      <div
        className="absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgba(45,212,191,0.16),rgba(110,168,254,0.08),transparent)] blur-2xl"
        aria-hidden="true"
      />

      <div className="float-slow relative">
        <div className="hero-panel-tilt">
          <div
            className="rise-item overflow-hidden rounded-xl border border-slate-400/[0.22] bg-ink-900/90 shadow-[0_40px_120px_rgba(0,0,0,0.55),0_0_80px_rgba(45,212,191,0.07)] backdrop-blur-md"
            style={riseDelay(0.25)}
          >
            <div className="flex min-h-11 items-center justify-between gap-3 border-b border-slate-400/[0.16] bg-ink-950/80 px-4">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-status-error/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-status-warning/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-status-success/70" />
              </div>
              <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] text-mist-400">
                Operations overview
              </p>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-300/30 bg-accent-300/10 px-2.5 py-1 text-[0.66rem] font-semibold text-accent-300">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent-300" aria-hidden="true" />
                Live view
              </span>
            </div>

            <div className="grid gap-4 p-4 sm:p-5">
              <div className="grid grid-cols-3 gap-2.5">
                {kpis.map((kpi, index) => (
                  <div
                    key={kpi.label}
                    className="rise-item rounded-lg border border-slate-400/[0.16] bg-white/[0.035] p-3"
                    style={riseDelay(0.5 + index * 0.12)}
                  >
                    <p className="font-mono text-xl font-semibold text-mist-50 sm:text-2xl">
                      <CountUp value={kpi.value} suffix={kpi.suffix ?? ""} />
                    </p>
                    <p className="mt-1 text-[0.66rem] leading-4 text-mist-400">{kpi.label}</p>
                  </div>
                ))}
              </div>

              <div className="rise-item rounded-lg border border-slate-400/[0.16] bg-ink-950/55 p-4" style={riseDelay(0.85)}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold text-mist-100">Hours saved</p>
                  <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-mist-400">Last 12 weeks</p>
                </div>
                <div className="relative mt-3">
                  <svg viewBox="0 0 320 96" preserveAspectRatio="none" className="h-20 w-full sm:h-24" aria-hidden="true">
                    <defs>
                      <linearGradient id="spark-stroke" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#2DD4BF" />
                        <stop offset="100%" stopColor="#6EA8FE" />
                      </linearGradient>
                      <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(45,212,191,0.22)" />
                        <stop offset="100%" stopColor="rgba(45,212,191,0)" />
                      </linearGradient>
                    </defs>
                    <path
                      className="spark-area"
                      d="M0 78 C28 74 44 66 64 64 C92 61 100 52 128 50 C152 48 164 40 192 38 C216 36 232 30 256 26 C280 22 300 18 320 14 L320 96 L0 96 Z"
                      fill="url(#spark-fill)"
                    />
                    <path
                      className="spark-path"
                      d="M0 78 C28 74 44 66 64 64 C92 61 100 52 128 50 C152 48 164 40 192 38 C216 36 232 30 256 26 C280 22 300 18 320 14"
                      fill="none"
                      stroke="url(#spark-stroke)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                    <circle className="spark-dot" cx="320" cy="14" r="4" fill="#6EA8FE" />
                  </svg>
                </div>
              </div>

              <div className="grid gap-3">
                {workflows.map((workflow, index) => (
                  <div key={workflow.label} className="rise-item" style={riseDelay(1.05 + index * 0.15)}>
                    <div className="mb-1.5 flex items-center justify-between gap-3">
                      <p className="text-xs font-medium text-mist-100">{workflow.label}</p>
                      <span
                        className={cn(
                          "rounded-full border px-2 py-0.5 text-[0.62rem] font-semibold",
                          workflow.tone === "success"
                            ? "border-status-success/30 bg-status-success/10 text-status-success"
                            : "border-cobalt-300/30 bg-cobalt-300/10 text-cobalt-300",
                        )}
                      >
                        {workflow.status}
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className="bar-fill h-full rounded-full bg-gradient-to-r from-accent-400 to-cobalt-400"
                        style={{ width: workflow.width, "--bar-delay": `${1.15 + index * 0.18}s` } as CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-2">
                {activity.map((item, index) => (
                  <div
                    key={item.text}
                    className="rise-item flex items-center gap-3 rounded-lg border border-slate-400/[0.14] bg-white/[0.03] px-3 py-2.5"
                    style={riseDelay(1.4 + index * 0.15)}
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent-300/10 text-accent-300">
                      <item.icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </div>
                    <p className="flex-1 truncate text-xs text-mist-100">{item.text}</p>
                    <p className="shrink-0 font-mono text-[0.62rem] text-mist-400">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="rise-item mt-4 text-center text-xs leading-5 text-mist-400" style={riseDelay(1.9)}>
        Illustrative example of a ZZESK operations dashboard.
      </p>
    </div>
  );
}

import type { CSSProperties } from "react";
import { Bot, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";

const focusAreas = [
  { label: "Strategy & governance", detail: "Direction", icon: ShieldCheck },
  { label: "Solution delivery", detail: "Build", icon: Bot },
  { label: "Capability & change", detail: "Enable", icon: GraduationCap },
];

const stages = ["Discover", "Prioritise", "Design & deliver", "Adopt & improve"];

const workstreams = [
  { label: "Generative AI productivity", status: "Prioritised" },
  { label: "Automation & intelligent agents", status: "In design" },
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
              <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] text-mist-400">AI delivery map</p>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-300/30 bg-accent-300/10 px-2.5 py-1 text-[0.66rem] font-semibold text-accent-300">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                Illustrative
              </span>
            </div>

            <div className="grid gap-4 p-4 sm:p-5">
              <div className="grid grid-cols-3 gap-2.5">
                {focusAreas.map((area, index) => (
                  <div
                    key={area.label}
                    className="rise-item rounded-lg border border-slate-400/[0.16] bg-white/[0.035] p-3"
                    style={riseDelay(0.5 + index * 0.12)}
                  >
                    <area.icon className="h-5 w-5 text-accent-300" aria-hidden="true" />
                    <p className="mt-3 text-[0.72rem] font-semibold leading-4 text-mist-100">{area.label}</p>
                    <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-mist-400">{area.detail}</p>
                  </div>
                ))}
              </div>

              <div className="rise-item rounded-lg border border-slate-400/[0.16] bg-ink-950/55 p-4" style={riseDelay(0.85)}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold text-mist-100">From priority to adoption</p>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-mist-400">Connected delivery</p>
                </div>
                <ol className="mt-4 grid grid-cols-4 gap-2">
                  {stages.map((stage, index) => (
                    <li key={stage} className="relative">
                      <div className="flex items-center" aria-hidden="true">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent-300/35 bg-accent-300/10 font-mono text-[0.62rem] font-semibold text-accent-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {index < stages.length - 1 ? <span className="h-px flex-1 bg-gradient-to-r from-accent-300/50 to-cobalt-300/25" /> : null}
                      </div>
                      <p className="mt-2 text-[0.62rem] leading-4 text-mist-300">{stage}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid gap-3">
                {workstreams.map((workstream, index) => (
                  <div
                    key={workstream.label}
                    className="rise-item flex items-center gap-3 rounded-lg border border-slate-400/[0.14] bg-white/[0.03] px-3 py-3"
                    style={riseDelay(1.05 + index * 0.15)}
                  >
                    <div className="h-2 w-2 shrink-0 rounded-full bg-accent-300 shadow-[0_0_14px_rgba(45,212,191,0.6)]" aria-hidden="true" />
                    <p className="flex-1 text-xs font-medium text-mist-100">{workstream.label}</p>
                    <span className="rounded-full border border-cobalt-300/25 bg-cobalt-300/10 px-2 py-0.5 text-[0.62rem] font-semibold text-cobalt-300">
                      {workstream.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="rise-item rounded-lg border border-accent-300/18 bg-accent-300/[0.055] p-4" style={riseDelay(1.4)}>
                <p className="text-xs font-semibold text-mist-100">One accountable delivery thread</p>
                <p className="mt-2 text-[0.72rem] leading-5 text-mist-300">
                  Business priorities, responsible controls, technical implementation and workforce adoption stay connected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="rise-item mt-4 text-center text-xs leading-5 text-mist-400" style={riseDelay(1.7)}>
        An illustrative view of how ZZESK connects AI advice, delivery and adoption.
      </p>
    </div>
  );
}

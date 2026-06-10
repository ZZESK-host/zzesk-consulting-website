"use client";

import { useMemo, useState } from "react";

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
}

function formatCurrency(value: number) {
  return `$${formatNumber(value)}`;
}

function clampNumber(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(Math.max(value, min), max);
}

export function RoiCalculator() {
  const [hoursSavedPerWeek, setHoursSavedPerWeek] = useState(10);
  const [hourlyCost, setHourlyCost] = useState(50);

  const results = useMemo(() => {
    const hoursRecoveredPerYear = hoursSavedPerWeek * 52;
    const annualTimeValue = hoursRecoveredPerYear * hourlyCost;

    return {
      hoursRecoveredPerYear,
      annualTimeValue,
    };
  }, [hourlyCost, hoursSavedPerWeek]);

  return (
    <div className="rounded-lg border border-accent-300/22 bg-[linear-gradient(145deg,rgba(19,35,51,0.88),rgba(8,17,26,0.92))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] sm:p-7">
      <div className="grid gap-7 lg:grid-cols-[1fr_0.82fr] lg:items-end">
        <div className="grid gap-6">
          <div>
            <label htmlFor="hours-saved" className="text-sm font-semibold text-mist-50">
              Hours saved per week
            </label>
            <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_7rem] sm:items-center">
              <input
                id="hours-saved"
                type="range"
                min="1"
                max="40"
                value={hoursSavedPerWeek}
                onChange={(event) => setHoursSavedPerWeek(Number(event.target.value))}
                className="accent-accent-300"
              />
              <input
                type="number"
                min="1"
                max="80"
                value={hoursSavedPerWeek}
                onChange={(event) => setHoursSavedPerWeek(clampNumber(Number(event.target.value), 1, 80))}
                className="min-h-11 rounded-lg border border-slate-400/[0.16] bg-ink-950/72 px-3 py-2 text-mist-50 outline-none transition focus:border-accent-300 focus:ring-2 focus:ring-accent-300/20"
                aria-label="Hours saved per week"
              />
            </div>
          </div>

          <div>
            <label htmlFor="hourly-cost" className="text-sm font-semibold text-mist-50">
              Approximate hourly staff cost
            </label>
            <div className="mt-3 flex max-w-xs items-center rounded-lg border border-slate-400/[0.16] bg-ink-950/72 focus-within:border-accent-300 focus-within:ring-2 focus-within:ring-accent-300/20">
              <span className="px-3 text-mist-400" aria-hidden="true">
                $
              </span>
              <input
                id="hourly-cost"
                type="number"
                min="1"
                max="500"
                value={hourlyCost}
                onChange={(event) => setHourlyCost(clampNumber(Number(event.target.value), 1, 500))}
                className="min-h-11 w-full bg-transparent px-1 py-2 text-mist-50 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-3 rounded-lg border border-slate-400/[0.16] bg-white/[0.035] p-5">
          <div>
            <p className="text-sm text-mist-400">Hours recovered per year</p>
            <p className="mt-1 text-3xl font-semibold text-mist-50">{formatNumber(results.hoursRecoveredPerYear)}</p>
          </div>
          <div className="h-px bg-slate-400/[0.14]" />
          <div>
            <p className="text-sm text-mist-400">Annual time value</p>
            <p className="mt-1 text-3xl font-semibold text-accent-300">{formatCurrency(results.annualTimeValue)}</p>
          </div>
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-mist-400">
        Illustrative estimate only. Actual savings depend on the task, team and setup.
      </p>
    </div>
  );
}

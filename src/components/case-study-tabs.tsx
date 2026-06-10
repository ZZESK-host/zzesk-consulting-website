"use client";

import { useMemo, useState } from "react";
import { CaseStudyCard } from "@/components/case-study-card";
import type { CaseStudy } from "@/content/site";
import { cn } from "@/lib/utils";

type CaseStudyTabsProps = {
  categories: string[];
  studies: CaseStudy[];
};

export function CaseStudyTabs({ categories, studies }: CaseStudyTabsProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const tabs = ["All", ...categories];

  const filteredStudies = useMemo(() => {
    if (activeCategory === "All") return studies;
    return studies.filter((study) => study.categories.includes(activeCategory));
  }, [activeCategory, studies]);

  const [featuredStudy, ...remainingStudies] = filteredStudies;

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Case study categories">
        {tabs.map((category) => {
          const selected = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selected}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300",
                selected
                  ? "border-accent-300/45 bg-accent-300 text-ink-950"
                  : "border-slate-400/[0.16] bg-white/[0.035] text-mist-200 hover:border-accent-300/35 hover:text-mist-50",
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm leading-6 text-mist-400">
        Showing {filteredStudies.length} placeholder example{filteredStudies.length === 1 ? "" : "s"}. Replace placeholders with approved case studies as they become available.
      </p>

      <div className="mt-8 grid gap-5">
        {featuredStudy ? <CaseStudyCard study={featuredStudy} featured /> : null}
        {remainingStudies.length > 0 ? (
          <div className="grid gap-5 lg:grid-cols-2">
            {remainingStudies.map((study) => (
              <CaseStudyCard key={study.projectName} study={study} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

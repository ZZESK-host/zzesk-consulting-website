"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Transition delay in seconds. */
  delay?: number;
  /** Visual style of the reveal. Ignored when `stagger` is set. */
  variant?: "up" | "fade" | "blur" | "scale";
  /** Reveal direct children one by one instead of the wrapper as a whole. */
  stagger?: boolean;
};

let sharedObserver: IntersectionObserver | null = null;

function getObserver() {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          sharedObserver?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -72px 0px", threshold: 0 },
  );

  return sharedObserver;
}

export function Reveal({ children, className, delay = 0, variant = "up", stagger = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      element.classList.add("is-revealed");
      return;
    }

    const observer = getObserver();
    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={stagger ? undefined : variant}
      data-reveal-stagger={stagger ? "" : undefined}
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}

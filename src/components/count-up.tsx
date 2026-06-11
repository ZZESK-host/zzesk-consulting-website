"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  /** Animation length in milliseconds. */
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.round(value));
}

function easeOutExpo(progress: number) {
  return progress >= 1 ? 1 : 1 - Math.pow(2, -10 * progress);
}

/**
 * Animates a number from its previous value to `value`. The first animation
 * waits until the element scrolls into view; later `value` changes animate
 * immediately (used by the ROI calculator). Falls back to the plain value
 * when reduced motion is preferred.
 */
export function CountUp({ value, duration = 1400, prefix = "", suffix = "", className }: CountUpProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const displayedRef = useRef(0);
  const frameRef = useRef(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || started) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      displayedRef.current = value;
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !started) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      displayedRef.current = value;
      element.textContent = `${prefix}${formatNumber(value)}${suffix}`;
      return;
    }

    const from = displayedRef.current;
    const startedAt = performance.now();

    function tick(now: number) {
      const progress = Math.min(1, (now - startedAt) / duration);
      const current = from + (value - from) * easeOutExpo(progress);
      displayedRef.current = current;
      if (element) element.textContent = `${prefix}${formatNumber(current)}${suffix}`;

      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(tick);
      }
    }

    frameRef.current = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameRef.current);
  }, [value, started, duration, prefix, suffix]);

  return (
    <span ref={elementRef} className={className}>
      {`${prefix}${started ? formatNumber(displayedRef.current) : "0"}${suffix}`}
    </span>
  );
}

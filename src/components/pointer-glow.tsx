"use client";

import { useEffect } from "react";

/**
 * Single delegated pointer listener that feeds cursor coordinates to any
 * `.spotlight-card` element via CSS custom properties. Keeps every card a
 * server component and never triggers a React re-render.
 */
export function PointerGlow() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    let lastEvent: PointerEvent | null = null;

    function applySpot() {
      frame = 0;
      if (!lastEvent) return;

      const target = lastEvent.target;
      if (!(target instanceof Element)) return;

      const card = target.closest<HTMLElement>(".spotlight-card");
      if (!card) return;

      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${lastEvent.clientX - rect.left}px`);
      card.style.setProperty("--spot-y", `${lastEvent.clientY - rect.top}px`);
    }

    function onPointerMove(event: PointerEvent) {
      lastEvent = event;
      if (!frame) frame = window.requestAnimationFrame(applySpot);
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

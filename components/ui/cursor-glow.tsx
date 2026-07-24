"use client";

import { useEffect } from "react";

/**
 * CursorGlow — VengenceUI-style spotlight. Tracks the cursor and writes
 * --mx / --my CSS variables onto the nearest card so a radial glow can
 * follow the pointer. Pure delegation, no per-card listeners or markup.
 */
const SELECTOR =
  ".svc-card, .prob-card, .process__step, .why-card, .focus-card, .faq__item, .rating-card, .contact-form-wrap, .review-card, .hero__panel, .h3d__card, .metric, .svc-tabs__panel, .visual-stat, .hero__stat";

export default function CursorGlow() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest(SELECTOR) as HTMLElement | null;
      if (!target) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${e.clientX - r.left}px`);
        target.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { CM_BIGTYPE } from "@/lib/content-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Full-bleed word wall — each word rises on scroll, accent words glow. */
export function BigStatement({
  words = CM_BIGTYPE,
  accent = [3, 4],
}: {
  words?: readonly string[];
  accent?: number[];
}) {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".cm-stmt__word", {
        yPercent: 115,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 72%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="ag-grain flex items-center py-5">
      <div className="container">
        <h2 className="cm-display m-0 text-[clamp(2.1rem,6.8vw,5rem)] leading-[0.98]">
          {words.map((w, i) => (
            <span key={i} className="mr-[0.35em] inline-block overflow-hidden align-bottom">
              <span
                className={
                  "cm-stmt__word inline-block " + (accent.includes(i) ? "cm-grad" : "text-[var(--cm-ink)]")
                }
              >
                {w}
              </span>
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}

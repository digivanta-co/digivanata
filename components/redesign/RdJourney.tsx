"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced, ScrollTrigger } from "@/animations/gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { RD_JOURNEY } from "@/lib/redesign-data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const PATH =
  "M40 220 C 240 60, 380 60, 520 180 S 820 320, 1000 160 S 1320 40, 1560 200";
// 6 evenly-ish spaced node anchors along the curve
const NODES = [
  [40, 220],
  [330, 96],
  [560, 190],
  [820, 250],
  [1120, 96],
  [1560, 200],
];

export default function RdJourney() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const path = root.current!.querySelector<SVGPathElement>("#rd-journey-path");
      if (!path) return;
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top 80%", end: "bottom 60%", scrub: 1 },
      });
      tl.to(path, { strokeDashoffset: 0, ease: "none" }, 0);
      tl.to(".rd-journey__dot", { motionPath: { path, align: path, alignOrigin: [0.5, 0.5] }, ease: "none" }, 0);

      gsap.utils.toArray<HTMLElement>(".rd-journey__node").forEach((n, i) => {
        gsap.fromTo(
          n,
          { autoAlpha: 0, scale: 0.7, y: 15 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.5)",
            scrollTrigger: { trigger: n, start: "top 92%", once: true },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden py-8 sm:py-12">
      <div className="container">
        <span className="rd-eyebrow mb-4">The journey</span>
        <h2 className="rd-h2 mb-3 text-[var(--rd-ink)]" style={{ textTransform: "none" }}>
          {RD_JOURNEY.join(" → ")}
        </h2>
        <p className="mb-12 max-w-xl text-[var(--rd-muted)]">
          One connected path — from the first search to compounding growth.
        </p>

        <div className="relative">
          <svg viewBox="0 0 1600 340" className="w-full overflow-visible" aria-hidden>
            <defs>
              <linearGradient id="rdJourneyGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#286FAB" />
                <stop offset="100%" stopColor="#C9A227" />
              </linearGradient>
              <filter id="rdGlow">
                <feGaussianBlur stdDeviation="5" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path d={PATH} stroke="var(--rd-border)" strokeWidth="2" fill="none" />
            <path id="rd-journey-path" d={PATH} stroke="url(#rdJourneyGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
            {NODES.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="7" fill="#fff" stroke="#286FAB" strokeWidth="3" />
            ))}
            <circle className="rd-journey__dot" r="10" fill="#C9A227" filter="url(#rdGlow)" />
          </svg>

          <div className="mt-8 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {RD_JOURNEY.map((label, i) => (
              <div key={label} className="rd-journey__node rd-glass px-4 py-5 text-center">
                <div className="rd-display text-sm text-[var(--rd-blue)]">0{i + 1}</div>
                <div className="mt-1 font-semibold text-[var(--rd-ink)]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

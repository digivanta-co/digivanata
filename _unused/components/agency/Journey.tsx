"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { AG_JOURNEY } from "@/lib/agency-data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const PATH =
  "M40 120 C 260 20, 380 260, 620 140 S 980 20, 1160 160 S 1400 300, 1560 120";

export default function Journey() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const path = root.current!.querySelector<SVGPathElement>("#ag-journey-path");
      if (!path) return;
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      // progressively draw the path + slight rotation
      tl.to(path, { strokeDashoffset: 0, ease: "none" }, 0);
      tl.to(".ag-journey__svg", { rotation: 4, ease: "none" }, 0);

      // dot + glow travelling along the path
      tl.to(
        ".ag-journey__dot",
        { motionPath: { path, align: path, alignOrigin: [0.5, 0.5] }, ease: "none" },
        0
      );

      // nodes fade in as the line reaches them
      gsap.utils.toArray<HTMLElement>(".ag-journey__node").forEach((node, i) => {
        gsap.from(node, {
          autoAlpha: 0,
          y: 30,
          duration: 0.6,
          scrollTrigger: {
            trigger: root.current,
            start: `top ${60 - i * 8}%`,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="journey" className="relative overflow-hidden py-28">
      <div className="container">
        <h2 className="ag-display mb-4 text-[clamp(2rem,5vw,3.5rem)] text-white">
          Traffic → Leads → Sales → Growth
        </h2>
        <p className="mb-14 max-w-xl text-[var(--ag-muted)]">
          One connected system. Every stage engineered to feed the next.
        </p>

        <div className="relative">
          <svg
            className="ag-journey__svg w-full"
            viewBox="0 0 1600 320"
            fill="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="agLineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4F7DFD" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <filter id="agGlow">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* faint guide */}
            <path d={PATH} stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
            {/* animated draw */}
            <path
              id="ag-journey-path"
              d={PATH}
              stroke="url(#agLineGrad)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle
              className="ag-journey__dot"
              r="9"
              fill="#fff"
              filter="url(#agGlow)"
            />
          </svg>

          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {AG_JOURNEY.map((s, i) => (
              <div key={s.k} className="ag-journey__node ag-glass p-6">
                <div className="ag-display text-sm text-[#4F7DFD]">
                  0{i + 1}
                </div>
                <div className="mt-2 text-xl font-semibold text-white">{s.k}</div>
                <p className="mt-2 text-sm text-[var(--ag-muted)]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

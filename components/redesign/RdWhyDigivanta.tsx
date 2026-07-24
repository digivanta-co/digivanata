"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RD_WHY_CHOOSE } from "@/lib/redesign-data";
import { WHY_CHOOSE, WHY_CHOOSE_DESC } from "@/lib/home-data";
import { WhyIcon } from "@/components/ui/Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Animated orbit mark — rotating dashed rings + self-drawing check. */
function OrbitMark() {
  return (
    <div className="rd-why__orbit relative mt-10 hidden w-full max-w-[280px] lg:block" aria-hidden>
      <svg viewBox="0 0 300 300" className="w-full overflow-visible">
        {/* static outer ring */}
        <circle cx="150" cy="150" r="142" fill="none" stroke="var(--rd-border)" strokeWidth="1.5" />
        {/* rotating dashed rings with orbiting dots */}
        <g className="rd-orbit-spin">
          <circle cx="150" cy="150" r="112" fill="none" stroke="#286FAB" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="3 10" />
          <circle cx="150" cy="38" r="5" fill="#C9A227" />
        </g>
        <g className="rd-orbit-spin--rev">
          <circle cx="150" cy="150" r="76" fill="none" stroke="#C9A227" strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="1 8" />
          <circle cx="226" cy="150" r="4" fill="#286FAB" />
        </g>
        {/* pulsing halo + solid core with drawing check */}
        <circle className="rd-orbit-pulse" cx="150" cy="150" r="36" fill="none" stroke="#286FAB" strokeWidth="1.5" />
        <circle cx="150" cy="150" r="36" fill="#286FAB" />
        <path
          className="rd-why__tick"
          d="M136 151 L146 161 L166 139"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function RdWhyDigivanta() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      // rows cascade in; their divider lines draw from the left
      gsap.utils.toArray<HTMLElement>(".rd-why__row").forEach((row) => {
        gsap.from(row, {
          y: 26,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 94%" },
        });
        const line = row.querySelector(".rd-why__divider");
        if (line)
          gsap.from(line, {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: row, start: "top 92%" },
          });
      });

      // orbit graphic breathes in, then the check draws itself
      gsap.from(".rd-why__orbit", {
        scale: 0.85,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".rd-why__orbit", start: "top 88%" },
      });
      const tick = root.current!.querySelector<SVGPathElement>(".rd-why__tick");
      if (tick) {
        const len = tick.getTotalLength();
        gsap.set(tick, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(tick, {
          strokeDashoffset: 0,
          duration: 0.7,
          delay: 0.35,
          ease: "power2.out",
          scrollTrigger: { trigger: ".rd-why__orbit", start: "top 85%" },
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-[var(--rd-gray)] py-16 sm:py-20">
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* sticky intro + animated orbit mark */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rd-eyebrow mb-5">Why us</span>
          <div className="rd-display text-[clamp(2.2rem,6vw,4.2rem)] leading-[0.9] text-[var(--rd-ink)]">
            <span className="block">Why</span>
            <span className="block text-[var(--rd-blue)]">Digivanta</span>
          </div>
          <h2 className="mt-6 text-xl font-semibold text-[var(--rd-ink)]">{RD_WHY_CHOOSE.heading}</h2>
          <p className="mt-3 text-[var(--rd-muted)]">{RD_WHY_CHOOSE.intro}</p>
          <p className="mt-4 font-semibold text-[var(--rd-blue)]">{RD_WHY_CHOOSE.diffLabel}</p>
          <OrbitMark />
        </div>

        {/* numbered editorial rows */}
        <ol>
          {WHY_CHOOSE.map((w, i) => (
            <li key={w} className="rd-why__row group">
              <div className="flex items-start gap-5 py-7 transition-transform duration-300 ease-out sm:gap-6 group-hover:translate-x-2">
                <span className="rd-display pt-1.5 text-lg tabular-nums text-[var(--rd-blue)]/50 transition-colors duration-300 group-hover:text-[var(--rd-blue)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-[var(--rd-blue)] shadow-sm transition-colors duration-300 group-hover:bg-[var(--rd-blue)] group-hover:text-white [&_svg]:size-5">
                  <WhyIcon index={i} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--rd-ink)]">{w}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--rd-muted)]">
                    {WHY_CHOOSE_DESC[w]}
                  </p>
                </div>
              </div>
              <span className="rd-why__divider block h-px w-full bg-gradient-to-r from-[var(--rd-blue)]/40 via-[var(--rd-border)] to-transparent" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

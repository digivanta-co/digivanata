"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RD_RESULTS } from "@/lib/redesign-data";
import { INTEGRATED_APPROACH } from "@/lib/home-data";
import { Check } from "@/components/ui/Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function RdResults() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".rd-results__chip", {
        y: 20,
        autoAlpha: 0,
        scale: 0.9,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: ".rd-results__grid", start: "top 90%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="rd-panel relative overflow-hidden bg-[var(--rd-ink)] py-16 text-white sm:py-20">
      <div aria-hidden className="rd-blob rd-blob--blue right-[6%] top-[10%] size-[30vw] max-w-[440px] opacity-40" />
      <div className="container relative z-10 max-w-4xl">
        <span className="rd-eyebrow mb-4 text-[var(--rd-gold)] [&::before]:bg-[var(--rd-gold)]">
          Long-term growth
        </span>
        <h2 className="rd-h2">{RD_RESULTS.heading}</h2>
        <div className="mt-5 space-y-3 text-lg text-white/70">
          <p>{RD_RESULTS.paras[0]}</p>
          <p className="font-semibold text-white">{RD_RESULTS.paras[1]}</p>
        </div>

        <div className="rd-results__grid mt-8 flex flex-wrap gap-3">
          {INTEGRATED_APPROACH.map((a) => (
            <span
              key={a}
              className="rd-results__chip inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium"
            >
              <span className="grid size-5 place-items-center rounded-full bg-[var(--rd-blue)] text-white [&_svg]:size-3">
                <Check />
              </span>
              {a}
            </span>
          ))}
        </div>

        <p className="mt-8 text-lg text-white/80">{RD_RESULTS.closing}</p>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RD_INDUSTRIES } from "@/lib/redesign-data";
import { INDUSTRIES } from "@/lib/home-data";
import { IndustryIcon } from "@/components/ui/Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function RdIndustries() {
  const n = INDUSTRIES.length;
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)").matches) return;
    const ctx = gsap.context(() => {
      // ring breathes in from the centre, cards pop around it
      gsap.from(".rd-ind__wheel", {
        scale: 0.88,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".rd-ind__wheel", start: "top 88%" },
      });
      gsap.from(".rd-ind__card", {
        scale: 0,
        autoAlpha: 0,
        duration: 0.45,
        ease: "back.out(1.8)",
        stagger: { each: 0.04, from: "random" },
        clearProps: "all", // keep Tailwind hover:scale working afterwards
        scrollTrigger: { trigger: ".rd-ind__wheel", start: "top 85%" },
      });
      gsap.from(".rd-ind__center span", {
        y: 22,
        autoAlpha: 0,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".rd-ind__wheel", start: "top 85%" },
      });
      // small-screen grid stagger
      gsap.from(".rd-ind__cell", {
        y: 16,
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.04,
        scrollTrigger: { trigger: ".rd-ind__grid", start: "top 92%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden py-8 sm:py-12">
      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="rd-eyebrow mb-4 justify-center">Industries</span>
          <h2 className="rd-h2 text-[var(--rd-ink)]">{RD_INDUSTRIES.heading}</h2>
          <p className="mt-3 text-[var(--rd-muted)]">{RD_INDUSTRIES.intro}</p>
        </div>

        {/* rotating ring (lg+); accessible list underneath on small screens */}
        <div className="rd-ind__wheel relative mx-auto hidden aspect-square max-w-[620px] lg:block">
          {/* center typography */}
          <div className="absolute inset-0 z-10 grid place-items-center">
            <div className="rd-ind__center rd-display text-center text-[clamp(2rem,4vw,3.2rem)] leading-[0.95] text-[var(--rd-ink)]">
              <span className="block">We Help</span>
              <span className="block text-[var(--rd-blue)]">Every</span>
              <span className="block">Industry</span>
            </div>
          </div>

          <div className="rd-ring absolute inset-0">
            {INDUSTRIES.map((ind, i) => {
              const angle = (i / n) * 360;
              return (
                <div
                  key={ind}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translate(0, -290px) rotate(-${angle}deg)`,
                  }}
                >
                  <div className="rd-ring__item -translate-x-1/2 -translate-y-1/2">
                    <div className="rd-ind__card group flex w-28 flex-col items-center gap-2 rounded-2xl border border-[var(--rd-border)] bg-white/95 px-3 py-4 text-center shadow-sm transition-transform duration-300 hover:scale-110 hover:border-[var(--rd-gold)]">
                      <span className="grid size-9 place-items-center rounded-full bg-[var(--rd-blue-soft)] text-[var(--rd-blue)] [&_svg]:size-4.5">
                        <IndustryIcon name={ind} />
                      </span>
                      <span className="text-xs font-semibold text-[var(--rd-ink)]">{ind}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* small-screen grid */}
        <div className="rd-ind__grid grid gap-5 grid-cols-2 sm:grid-cols-3 lg:!hidden">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind}
              className="rd-ind__cell flex items-center gap-2.5 rounded-xl border border-[var(--rd-border)] bg-white px-3 py-3"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--rd-blue-soft)] text-[var(--rd-blue)] [&_svg]:size-4">
                <IndustryIcon name={ind} />
              </span>
              <span className="text-sm font-medium text-[var(--rd-ink)]">{ind}</span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-[var(--rd-muted)]">
          {RD_INDUSTRIES.closing}
        </p>
      </div>
    </section>
  );
}

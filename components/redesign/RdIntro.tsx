"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RD_INTRO, RD_CTA_1 } from "@/lib/redesign-data";
import { FOCUS_AREAS } from "@/lib/home-data";
import { RdMagnetic } from "./primitives";
import { ArrowRight, Check } from "@/components/ui/Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function RdIntro() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)").matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".rd-reveal").forEach((el) => {
        gsap.from(el, {
          y: 24,
          autoAlpha: 0,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 93%" },
        });
      });
      gsap.from(".rd-focus__item", {
        y: 16,
        autoAlpha: 0,
        duration: 0.4,
        stagger: 0.04,
        ease: "power2.out",
        scrollTrigger: { trigger: ".rd-focus", start: "top 90%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="about" className="relative py-16 sm:py-20">
      <div className="container max-w-5xl">
        {/* AT&T stat callout */}
        <div className="rd-reveal rd-glass mb-8 flex flex-col gap-2 p-6 sm:p-10">
          <p className="rd-display text-xl leading-snug text-[var(--rd-ink)] sm:text-3xl" style={{ textTransform: "none" }}>
            {RD_INTRO.statQuote}
          </p>
          <p className="text-sm sm:text-base text-[var(--rd-muted)]">{RD_INTRO.statNote}</p>
        </div>

        <div className="space-y-5 text-base sm:text-lg leading-relaxed text-[var(--rd-muted)]">
          {RD_INTRO.paras.map((p, i) => (
            <p
              key={i}
              className={
                "rd-reveal " +
                (p === "That’s where Digivanta comes in."
                  ? "rd-display text-xl text-[var(--rd-ink)] sm:text-3xl"
                  : "")
              }
              style={p.startsWith("That") ? { textTransform: "none" } : undefined}
            >
              {p}
            </p>
          ))}
        </div>

        {/* focus areas */}
        <div className="rd-focus mt-10 sm:mt-12">
          <p className="rd-reveal mb-5 text-base sm:text-lg font-semibold text-[var(--rd-ink)]">
            {RD_INTRO.focusLead}
          </p>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {FOCUS_AREAS.map((f) => (
              <li
                key={f}
                className="rd-focus__item flex items-center gap-3 rounded-xl border border-[var(--rd-border)] bg-[var(--rd-gray)] px-3.5 py-2.5 sm:px-4 sm:py-3"
              >
                <span className="grid size-5.5 shrink-0 place-items-center rounded-full bg-[var(--rd-blue)] text-white [&_svg]:size-3">
                  <Check />
                </span>
                <span className="text-sm sm:text-base text-[var(--rd-ink)]">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="rd-reveal mt-10 sm:mt-12 text-base sm:text-lg leading-relaxed text-[var(--rd-muted)]">
          {RD_INTRO.closing}
        </p>

        {/* CTA band 1 */}
        <div className="rd-reveal mt-10 sm:mt-12 overflow-hidden rounded-2xl sm:rounded-[28px] bg-[var(--rd-ink)] p-6 sm:p-12 text-white">
          <div className="grid items-center gap-6 lg:grid-cols-[1.4fr_auto]">
            <div>
              <h2 className="rd-display text-2xl sm:text-4xl" style={{ textTransform: "none" }}>
                {RD_CTA_1.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/70">{RD_CTA_1.sub}</p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3">
              <RdMagnetic href="#contact" className="w-full sm:w-auto justify-center">
                Get Started <ArrowRight />
              </RdMagnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

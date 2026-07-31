"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RD_WHY_NEED } from "@/lib/redesign-data";
import { BUSINESS_CHALLENGES } from "@/lib/home-data";
import { AlertTriangle } from "@/components/ui/Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function RdWhyNeed() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)").matches) return;
    const ctx = gsap.context(() => {
      const bg = root.current!.querySelector<SVGPathElement>(".rd-whyneed__draw");
      if (bg) {
        const len = bg.getTotalLength();
        gsap.set(bg, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(bg, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top 80%", end: "bottom bottom", scrub: 1 },
        });
      }
      gsap.utils.toArray<HTMLElement>(".rd-whyneed__card").forEach((card) => {
        gsap.from(card, {
          y: 28,
          autoAlpha: 0,
          duration: 0.45,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 94%" },
        });
        const line = card.querySelector<HTMLElement>(".rd-whyneed__line");
        if (line)
          gsap.from(line, {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 92%" },
          });
      });
      gsap.from(".rd-whyneed__closer", {
        y: 18,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ".rd-whyneed__closerWrap", start: "top 92%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-[var(--rd-gray)] py-16 sm:py-20">
      {/* self-drawing background line */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.5]" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
        <path
          className="rd-whyneed__draw"
          d="M-50 120 C 250 40, 400 320, 700 200 S 1100 60, 1300 260"
          fill="none"
          stroke="rgba(40,111,171,0.18)"
          strokeWidth="2"
        />
      </svg>

      <div className="container relative">
        {/* centred header above the cards */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="rd-eyebrow mb-5 justify-center">The problem</span>
          <h2 className="rd-h2 text-[var(--rd-ink)]">{RD_WHY_NEED.heading}</h2>
          <div className="mt-5 space-y-4 text-[var(--rd-muted)]">
            <p>{RD_WHY_NEED.paras[0]}</p>
            <p className="font-semibold text-[var(--rd-ink)]">{RD_WHY_NEED.paras[1]}</p>
          </div>
        </div>

        {/* challenge cards */}
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BUSINESS_CHALLENGES.map((c) => (
            <li key={c} className="rd-whyneed__card rd-glass p-5">
              <span className="mb-3 inline-grid size-9 place-items-center rounded-full bg-[var(--rd-gold-soft)] text-[var(--rd-gold)] [&_svg]:size-4">
                <AlertTriangle />
              </span>
              <p className="font-medium text-[var(--rd-ink)]">{c}</p>
              <span className="rd-whyneed__line mt-4 block h-px w-full bg-gradient-to-r from-[var(--rd-blue)] to-transparent" />
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-10 max-w-4xl space-y-4 text-center">
          <p className="rd-whyneed__closer text-sm sm:text-base leading-relaxed text-[var(--rd-muted)]">
            A professional Digital Marketing Agency in Delhi helps solve these challenges using proven online marketing strategies.
          </p>
          <p className="rd-whyneed__closer text-sm sm:text-base leading-relaxed text-[var(--rd-muted)]">
            At Digivanta, we understand that every business is different. We create customized digital marketing plans based on your business goals, industry competition, audience behavior, and market trends.
          </p>
          <div className="pt-2">
            <span className="rd-whyneed__closer text-xs uppercase tracking-wider font-bold text-[var(--rd-blue)]">Our goal is simple:</span>
            <p className="rd-whyneed__closer mt-1 text-base sm:text-xl font-bold text-[var(--rd-ink)]">
              Help your business become visible where your customers are searching.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

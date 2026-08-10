"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { Label, StatBig } from "@/components/design/primitives";
import { MagneticButton } from "@/components/agency/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { SMM_WHY_NEED, SMM_IMPACT } from "@/lib/smm-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Why Businesses Need SMM — editorial numbered ledger rows */
export function WhyNeedSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const rows = root.current?.querySelectorAll<HTMLElement>(".smm-prob__row");
      if (!rows?.length) return;
      rows.forEach((row, i) => {
        gsap.from(row, {
          y: 50,
          autoAlpha: 0,
          duration: 0.8,
          delay: i * 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 90%", toggleActions: "play none none none" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-10 sm:py-14">
      <div className="container grid gap-5 items-start lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <Label>Why It Matters</Label>
          <h2 className="gd-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--gd-ink)]">
            Social media without strategy is
            <br />
            <span className="gd-grad">wasted effort.</span>
          </h2>
          <p className="mt-5 max-w-md text-[var(--gd-muted)]">{SMM_WHY_NEED.intro}</p>
        </div>

        <div className="border-t border-[var(--gd-line)]">
          {SMM_WHY_NEED.pains.map((p, i) => (
            <div
              key={p.title}
              className="smm-prob__row group flex items-baseline gap-6 border-b border-[var(--gd-line)] py-6 transition-colors duration-300 hover:bg-[var(--gd-soft)] sm:gap-9"
            >
              <span className="gd-display shrink-0 text-sm text-[var(--gd-gold)]">
                0{i + 1}
              </span>
              <div>
                <h3 className="m-0 text-lg font-semibold text-[var(--gd-ink)] transition-transform duration-300 group-hover:translate-x-2 sm:text-xl">
                  {p.title}
                </h3>
                <p className="mb-0 mt-1.5 max-w-md text-sm leading-relaxed text-[var(--gd-muted)]">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Impact: animated counters + benefit chips */
export function ImpactSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const items = root.current?.querySelectorAll<HTMLElement>(".smm-imp__item");
      if (!items?.length) return;
      items.forEach((item, i) => {
        gsap.from(item, {
          y: 40,
          autoAlpha: 0,
          duration: 0.8,
          delay: i * 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none none" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-10 sm:py-14">
      <div className="container">
        {/* 2-Column Header Layout */}
        <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          {/* Left Column: Heading & Intro */}
          <div className="smm-imp__item max-w-2xl">
            <Label>The Impact of SMM</Label>
            <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
              {SMM_IMPACT.titleLines[0]}
              <br />
              <span className="gd-grad">{SMM_IMPACT.titleLines[1]}</span>
            </h2>
            <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-[var(--gd-muted)]">
              {SMM_IMPACT.intro}
            </p>
          </div>

          {/* Right Column: Interactive Luxury Impact Card */}
          <div className="smm-imp__item w-full shrink-0 lg:max-w-sm">
            <div className="gd-card relative overflow-hidden rounded-2xl border border-[var(--gd-line)] bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(176,141,63,0.1)] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--gd-gold)]">
                  <span className="size-2 rounded-full bg-[var(--gd-gold)] animate-pulse" />
                  Measurable ROI
                </span>
                <span className="text-xs font-bold text-[var(--gd-blue)]">Growth Strategy</span>
              </div>
              <p className="mb-4 text-xs leading-relaxed text-[var(--gd-muted)]">
                Transforming audience attention into measurable sales inquiries, brand prestige, and lower acquisition costs.
              </p>
              <div>
                <MagneticButton href="/contact">
                  Scale Your Brand <ArrowRight />
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 border-t border-[var(--gd-line)] pt-10 sm:grid-cols-3">
          {SMM_IMPACT.stats.map((s) => (
            <div key={s.label} className="smm-imp__item">
              <StatBig value={s.value} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </div>

        <div className="smm-imp__item mt-10 flex flex-wrap gap-2.5">
          {SMM_IMPACT.benefits.map((b) => (
            <span
              key={b}
              className="rounded-full border border-[var(--gd-line)] bg-white px-4 py-2 text-sm text-[var(--gd-muted)] transition-colors duration-300 hover:border-[var(--gd-gold)] hover:text-[var(--gd-ink)] shadow-xs"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

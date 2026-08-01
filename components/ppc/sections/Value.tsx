"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { Label, StatBig } from "@/components/design/primitives";
import { PPC_FAIL, PPC_QUALIFIED, PPC_RESULTS } from "@/lib/ppc-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Why most campaigns fail — editorial numbered ledger. */
export function FailSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".ppc-fail__row", {
        y: 50,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-14 sm:py-24">
      <div className="container grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {/* sticky heading */}
        <div className="lg:sticky lg:top-28">
          <Label>Why most campaigns fail</Label>
          <h2 className="gd-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--gd-ink)]">
            Budget spent.
            <br />
            <span className="gd-grad">Leads missing.</span>
          </h2>
          <p className="mt-5 max-w-md text-[var(--gd-muted)]">{PPC_FAIL.intro}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--gd-muted)]">{PPC_FAIL.closing}</p>
        </div>

        {/* numbered ledger */}
        <div className="border-t border-[var(--gd-line)]">
          {PPC_FAIL.reasons.map((r, i) => (
            <div
              key={r.title}
              className="ppc-fail__row group flex items-baseline gap-6 border-b border-[var(--gd-line)] py-6 transition-colors duration-300 hover:bg-[var(--gd-soft)] sm:gap-9"
            >
              <span className="gd-display shrink-0 text-sm text-[var(--gd-gold)]">0{i + 1}</span>
              <div>
                <h3 className="m-0 text-lg font-semibold text-[var(--gd-ink)] transition-transform duration-300 group-hover:translate-x-2 sm:text-xl">
                  {r.title}
                </h3>
                <p className="mb-0 mt-1.5 max-w-md text-sm leading-relaxed text-[var(--gd-muted)]">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Qualified leads instead of random clicks. */
export function QualifiedSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".ppc-qual__item", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative border-y border-[var(--gd-line)] bg-[var(--gd-soft)] py-14 sm:py-24">
      <div className="container">
        <div className="ppc-qual__item max-w-2xl">
          <Label>Qualified leads, not random clicks</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
            The right audience,
            <br />
            <span className="gd-grad">at the right moment.</span>
          </h2>
          <p className="mt-5 text-[var(--gd-muted)]">{PPC_QUALIFIED.intro}</p>
        </div>

        <div className="ppc-qual__item mt-9 flex flex-wrap gap-2.5">
          {PPC_QUALIFIED.outcomes.map((o) => (
            <span
              key={o}
              className="rounded-full border border-[var(--gd-line)] bg-white px-4 py-2 text-sm font-medium text-[var(--gd-ink)] transition-colors duration-300 hover:border-[var(--gd-gold)]"
            >
              {o}
            </span>
          ))}
        </div>

        <p className="ppc-qual__item mb-0 mt-8 max-w-2xl text-sm leading-relaxed text-[var(--gd-muted)]">
          {PPC_QUALIFIED.closing}
        </p>
      </div>
    </section>
  );
}

/* Proof: animated result counters. */
export function ResultsSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".ppc-res__item", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-24">
      <div className="container">
        <div className="ppc-res__item max-w-2xl">
          <Label>Why businesses trust us</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
            Results,
            <br />
            <span className="gd-grad">not promises.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-8 border-t border-[var(--gd-line)] pt-10 sm:grid-cols-3">
          {PPC_RESULTS.stats.map((s) => (
            <div key={s.label} className="ppc-res__item">
              <StatBig value={s.value} suffix={s.suffix} decimals={s.decimals} label={s.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

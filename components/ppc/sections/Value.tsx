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
    <section ref={root} className="ppc-fail relative py-10 sm:py-14">
      <div className="container grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        {/* sticky heading */}
        <div className="lg:sticky lg:top-28">
          <Label>Why most campaigns fail</Label>
          <h2 className="gd-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--gd-ink)]">
            Budget spent.
            <br />
            <span className="gd-grad">Leads missing.</span>
          </h2>
          <p className="mt-5 max-w-md text-[var(--gd-muted)]">{PPC_FAIL.intro}</p>
          <p className="mt-4 hidden max-w-md text-sm leading-relaxed text-[var(--gd-muted)] lg:block">{PPC_FAIL.closing}</p>
        </div>

        {/* numbered ledger */}
        <ol className="m-0 grid list-none grid-cols-2 gap-3 p-0 max-[359px]:grid-cols-1 lg:block lg:border-t lg:border-[var(--gd-line)]">
          {PPC_FAIL.reasons.map((r, i) => (
            <li
              key={r.title}
              className={
                "ppc-fail__row group flex min-h-44 flex-col rounded-2xl border border-[var(--gd-line)] bg-[var(--gd-soft)] p-4 transition-colors duration-300 lg:min-h-0 lg:flex-row lg:items-baseline lg:gap-9 lg:rounded-none lg:border-x-0 lg:border-t-0 lg:bg-transparent lg:px-0 lg:py-6 lg:hover:bg-[var(--gd-soft)] " +
                (i === PPC_FAIL.reasons.length - 1 ? "col-span-2 max-[359px]:col-span-1" : "")
              }
            >
              <span className="gd-display shrink-0 text-xs text-[var(--gd-gold)] lg:text-sm">0{i + 1}</span>
              <div className="mt-auto pt-6 lg:mt-0 lg:pt-0">
                <h3 className="m-0 text-[0.92rem] font-semibold leading-snug text-[var(--gd-ink)] transition-transform duration-300 group-hover:translate-x-2 sm:text-xl">
                  {r.title}
                </h3>
                <p className="mb-0 mt-1.5 max-w-md text-[0.74rem] leading-relaxed text-[var(--gd-muted)] sm:text-sm">{r.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="m-0 border-l-2 border-[var(--gd-gold)] pl-4 text-sm leading-relaxed text-[var(--gd-muted)] lg:hidden">
          {PPC_FAIL.closing}
        </p>
      </div>
    </section>
  );
}

/* Qualified leads instead of random clicks — premium 2-col layout. */
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
    <section ref={root} className="relative border-y border-[var(--gd-line)] bg-[var(--gd-soft)] py-10 sm:py-14">
      <div className="container">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* left — copy */}
          <div className="ppc-qual__item lg:sticky lg:top-28">
            <Label>Qualified leads, not random clicks</Label>
            <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
              The right audience,
              <br />
              <span className="gd-grad">at the right moment.</span>
            </h2>
            <p className="mt-5 max-w-lg text-[var(--gd-muted)]">{PPC_QUALIFIED.intro}</p>
            <p className="mb-0 mt-5 max-w-lg text-sm leading-relaxed text-[var(--gd-muted)] border-l-2 border-[var(--gd-gold)] pl-4">
              {PPC_QUALIFIED.closing}
            </p>
          </div>

          {/* right — outcome cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PPC_QUALIFIED.outcomes.map((o, i) => (
              <div
                key={o}
                className={
                  "ppc-qual__item group relative overflow-hidden rounded-2xl border border-[var(--gd-line)] bg-white p-5 transition-all duration-300 hover:border-[var(--gd-navy)]/30 hover:shadow-[0_8px_30px_rgba(12,36,61,0.08)] " +
                  (i === PPC_QUALIFIED.outcomes.length - 1 && PPC_QUALIFIED.outcomes.length % 2 !== 0
                    ? "sm:col-span-2"
                    : "")
                }
              >
                {/* number badge */}
                <span className="mb-3 flex size-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#235EA7,#4f93d4)] text-xs font-bold text-white shadow-[0_4px_12px_rgba(35,94,167,0.25)]">
                  0{i + 1}
                </span>
                <h3 className="m-0 text-[0.95rem] font-semibold text-[var(--gd-ink)] transition-transform duration-300 group-hover:translate-x-1">
                  {o}
                </h3>
                {/* decorative corner arrow */}
                <svg
                  className="absolute right-4 top-4 size-4 text-[var(--gd-line)] transition-colors duration-300 group-hover:text-[var(--gd-navy)]"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 12 L12 4 M12 4 L5 4 M12 4 L12 11" />
                </svg>
              </div>
            ))}
          </div>
        </div>
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
    <section ref={root} className="relative py-10 sm:py-14">
      <div className="container">
        <div className="ppc-res__item max-w-2xl">
          <Label>Why businesses trust us</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
            Results,
            <br />
            <span className="gd-grad">not promises.</span>
          </h2>
        </div>

        <div className="ppc-results__grid mt-9 grid grid-cols-3 gap-3 border-t border-[var(--gd-line)] pt-7 sm:mt-12 sm:gap-8 sm:pt-10">
          {PPC_RESULTS.stats.map((s) => (
            <div key={s.label} className="ppc-res__item border-l border-[var(--gd-line)] pl-3 first:border-l-0 first:pl-0 sm:border-l-0 sm:pl-0">
              <StatBig value={s.value} suffix={s.suffix} decimals={s.decimals} label={s.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

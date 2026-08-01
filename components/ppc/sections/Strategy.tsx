"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { Label } from "@/components/design/primitives";
import { PPC_MGMT, PPC_SEO_PPC, PPC_DATA } from "@/lib/ppc-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gd-gold)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* Why professional PPC management pays for itself. */
export function MgmtSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".ppc-mgmt__item", {
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
    <section ref={root} className="relative py-14 sm:py-24">
      <div className="container grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <Label>Professional PPC management</Label>
          <h2 className="gd-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--gd-ink)]">
            Markets move.
            <br />
            <span className="gd-grad">We keep up.</span>
          </h2>
          <p className="mt-5 max-w-md text-[var(--gd-muted)]">{PPC_MGMT.intro}</p>
        </div>

        <div>
          <ul className="m-0 list-none border-t border-[var(--gd-line)] p-0">
            {PPC_MGMT.benefits.map((b, i) => (
              <li
                key={b}
                className="ppc-mgmt__item flex items-baseline gap-6 border-b border-[var(--gd-line)] py-5 sm:gap-9"
              >
                <span className="gd-display shrink-0 text-sm text-[var(--gd-gold)]">0{i + 1}</span>
                <span className="text-base font-semibold text-[var(--gd-ink)] sm:text-lg">{b}</span>
              </li>
            ))}
          </ul>
          <p className="ppc-mgmt__item mb-0 mt-6 text-sm leading-relaxed text-[var(--gd-muted)]">
            {PPC_MGMT.closing}
          </p>
        </div>
      </div>
    </section>
  );
}

/* SEO + PPC — better together. */
export function SeoPpcSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".ppc-sp__item", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative border-y border-[var(--gd-line)] bg-[var(--gd-soft)] py-14 sm:py-24">
      <div className="container">
        <div className="ppc-sp__item max-w-2xl">
          <Label>SEO + PPC, together</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
            Long-term visibility,
            <br />
            <span className="gd-grad">immediate leads.</span>
          </h2>
          <p className="mt-5 text-[var(--gd-muted)]">{PPC_SEO_PPC.intro}</p>
          <p className="mt-4 font-medium text-[var(--gd-ink)]">{PPC_SEO_PPC.lead}</p>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PPC_SEO_PPC.points.map((p, i) => (
            <div key={p} className="ppc-sp__item gd-card p-5">
              <div className="gd-display text-xs text-[var(--gd-gold)]">0{i + 1}</div>
              <p className="mb-0 mt-2 text-sm font-semibold text-[var(--gd-ink)]">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Data-driven advertising checklist. */
export function DataDrivenSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".ppc-dd__item", {
        y: 30,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-14 sm:py-24">
      <div className="container grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <Label>Data-driven advertising</Label>
          <h2 className="gd-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--gd-ink)]">
            Every decision,
            <br />
            <span className="gd-grad">backed by data.</span>
          </h2>
          <p className="mt-5 max-w-md text-[var(--gd-muted)]">{PPC_DATA.intro}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--gd-muted)]">{PPC_DATA.closing}</p>
        </div>

        <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
          {PPC_DATA.items.map((item) => (
            <li
              key={item}
              className="ppc-dd__item flex items-start gap-3 rounded-2xl border border-[var(--gd-line)] bg-white px-5 py-4 text-sm font-medium text-[var(--gd-ink)] transition-colors duration-300 hover:border-[var(--gd-gold)]"
            >
              <Check />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

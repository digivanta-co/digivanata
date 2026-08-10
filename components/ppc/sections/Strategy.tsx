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
    <section ref={root} className="relative py-10 sm:py-14">
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

/* SEO + PPC — better together, with visual comparison panel. */
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
    <section ref={root} className="relative border-y border-[var(--gd-line)] bg-[var(--gd-soft)] py-10 sm:py-14">
      <div className="container">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          {/* left — copy */}
          <div>
            <div className="ppc-sp__item">
              <Label>SEO + PPC, together</Label>
              <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
                Long-term visibility,
                <br />
                <span className="gd-grad">immediate leads.</span>
              </h2>
              <p className="mt-5 max-w-lg text-[var(--gd-muted)]">{PPC_SEO_PPC.intro}</p>
              <p className="mt-4 font-medium text-[var(--gd-ink)]">{PPC_SEO_PPC.lead}</p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {PPC_SEO_PPC.points.map((p, i) => (
                <div key={p} className="ppc-sp__item gd-card p-5">
                  <div className="gd-display text-xs text-[var(--gd-gold)]">0{i + 1}</div>
                  <p className="mb-0 mt-2 text-sm font-semibold text-[var(--gd-ink)]">{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* right — visual comparison panel */}
          <div className="ppc-sp__item">
            <div className="overflow-hidden rounded-3xl border border-[var(--gd-line)] bg-white shadow-[0_20px_50px_rgba(12,36,61,0.08)]">
              {/* header */}
              <div className="border-b border-[var(--gd-line)] bg-[var(--gd-soft)] px-6 py-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gd-muted)]">
                  Combined Strategy Impact
                </span>
              </div>

              <div className="p-6">
                {/* SEO column */}
                <div className="flex items-start gap-4 rounded-2xl border border-[var(--gd-line)] bg-[var(--gd-soft)] p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--gd-navy)] text-xs font-bold text-white">
                    SEO
                  </span>
                  <div>
                    <p className="m-0 text-sm font-semibold text-[var(--gd-ink)]">Organic Visibility</p>
                    <p className="m-0 mt-1 text-xs text-[var(--gd-muted)]">
                      Long-term rankings, brand authority, compounding traffic
                    </p>
                    <div className="mt-3 flex gap-2">
                      <span className="rounded-full bg-[rgba(40,111,171,0.1)] px-2.5 py-1 text-[0.65rem] font-semibold text-[var(--gd-blue)]">Rankings</span>
                      <span className="rounded-full bg-[rgba(40,111,171,0.1)] px-2.5 py-1 text-[0.65rem] font-semibold text-[var(--gd-blue)]">Authority</span>
                      <span className="rounded-full bg-[rgba(40,111,171,0.1)] px-2.5 py-1 text-[0.65rem] font-semibold text-[var(--gd-blue)]">Trust</span>
                    </div>
                  </div>
                </div>

                {/* connector */}
                <div className="my-3 flex items-center justify-center">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#235EA7,#4f93d4)] text-xs font-bold text-white shadow-[0_4px_12px_rgba(35,94,167,0.3)]">
                    +
                  </div>
                </div>

                {/* PPC column */}
                <div className="flex items-start gap-4 rounded-2xl border border-[var(--gd-line)] bg-[var(--gd-soft)] p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#235EA7,#4f93d4)] text-xs font-bold text-white">
                    PPC
                  </span>
                  <div>
                    <p className="m-0 text-sm font-semibold text-[var(--gd-ink)]">Paid Performance</p>
                    <p className="m-0 mt-1 text-xs text-[var(--gd-muted)]">
                      Instant leads, targeted reach, measurable conversions
                    </p>
                    <div className="mt-3 flex gap-2">
                      <span className="rounded-full bg-[rgba(40,111,171,0.1)] px-2.5 py-1 text-[0.65rem] font-semibold text-[var(--gd-blue)]">Leads</span>
                      <span className="rounded-full bg-[rgba(40,111,171,0.1)] px-2.5 py-1 text-[0.65rem] font-semibold text-[var(--gd-blue)]">ROAS</span>
                      <span className="rounded-full bg-[rgba(40,111,171,0.1)] px-2.5 py-1 text-[0.65rem] font-semibold text-[var(--gd-blue)]">Speed</span>
                    </div>
                  </div>
                </div>

                {/* combined result */}
                <div className="mt-5 rounded-2xl border border-[var(--gd-navy)]/20 bg-[linear-gradient(135deg,rgba(35,94,167,0.06),rgba(79,147,212,0.06))] p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-6 items-center justify-center rounded-full bg-[var(--gd-navy)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    </span>
                    <span className="text-sm font-bold text-[var(--gd-navy)]">Combined = Maximum Growth</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="gd-display text-lg text-[var(--gd-navy)]">2.4×</div>
                      <div className="text-[0.6rem] text-[var(--gd-muted)]">More conversions</div>
                    </div>
                    <div className="text-center">
                      <div className="gd-display text-lg text-[var(--gd-navy)]">−35%</div>
                      <div className="text-[0.6rem] text-[var(--gd-muted)]">Lower CPA</div>
                    </div>
                    <div className="text-center">
                      <div className="gd-display text-lg text-[var(--gd-navy)]">3×</div>
                      <div className="text-[0.6rem] text-[var(--gd-muted)]">Brand visibility</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    <section ref={root} className="relative py-10 sm:py-14">
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

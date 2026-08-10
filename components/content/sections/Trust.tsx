"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { WhyIcon, Check, ArrowRight } from "@/components/ui/Icons";
import { Kicker } from "@/components/content/primitives";
import { CM_WHY, CM_GROWTH, CM_AUDIENCE, CM_SMARTER } from "@/lib/content-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Why businesses choose Digivanta — sticky heading + differentiator ledger. */
export function WhySection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".cm-why__row", {
        y: 44,
        autoAlpha: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 76%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-5 sm:py-14">
      <div className="container grid gap-5 items-start lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <Kicker>{CM_WHY.label}</Kicker>
          <h2 className="cm-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--cm-ink)]">
            {CM_WHY.heading[0]}
            <br />
            <span className="cm-grad">{CM_WHY.heading[1]}</span>
          </h2>
          <p className="mt-5 max-w-md text-[var(--cm-muted)]">{CM_WHY.intro}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--cm-muted)]">{CM_WHY.body}</p>
        </div>

        <div>
          <span className="cm-kicker mb-6">{CM_WHY.diffLabel}</span>
          <div className="border-t border-[var(--cm-line)]">
            {CM_WHY.points.map((p, i) => (
              <div
                key={p}
                className="cm-why__row group flex items-center gap-5 border-b border-[var(--cm-line)] py-5 transition-colors duration-300 hover:bg-[var(--cm-glass)]"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-[var(--cm-line)] bg-[var(--cm-blue-soft)] text-[var(--cm-blue)] [&_svg]:size-5">
                  <WhyIcon index={i} />
                </span>
                <p className="m-0 flex-1 text-[1.02rem] font-medium text-[var(--cm-ink)] transition-transform duration-300 group-hover:translate-x-1">
                  {p}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-7 inline-flex items-start gap-2 text-[0.95rem] leading-relaxed text-[var(--cm-muted)]">
            {CM_WHY.closing}
          </p>
        </div>
      </div>
    </section>
  );
}

/* SEO-friendly content that supports long-term growth. */
export function GrowthSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".cm-grow__item", {
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
    <section ref={root} className="relative border-y border-[var(--cm-line)] bg-[var(--cm-panel)] py-14">
      <div className="container">
        <div className="cm-grow__item max-w-4xl">
          <Kicker>{CM_GROWTH.label}</Kicker>
          <h2 className="cm-display text-[clamp(1.9rem,4.4vw,3.2rem)] text-[var(--cm-ink)]">
            {CM_GROWTH.heading[0]}
            <br />
            <span className="cm-grad">{CM_GROWTH.heading[1]}</span>
          </h2>
          <p className="mt-5 text-[var(--cm-muted)]">{CM_GROWTH.body}</p>
        </div>

        <div className="cm-grow__item mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {CM_GROWTH.supports.map((s) => (
            <div
              key={s}
              className="flex items-center gap-3 rounded-xl border border-[var(--cm-line)] bg-[var(--cm-glass)] px-4 py-4 text-[0.92rem] font-medium text-[var(--cm-ink)] transition-colors duration-300 hover:border-[rgba(40,111,171,0.5)]"
            >
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[var(--cm-blue-soft)] text-[var(--cm-blue)] [&_svg]:size-3.5">
                <Check />
              </span>
              {s}
            </div>
          ))}
        </div>

        <p className="cm-grow__item mb-0 mt-8 max-w-3xl text-sm leading-relaxed text-[var(--cm-muted)]">
          {CM_GROWTH.closing}
        </p>
      </div>
    </section>
  );
}

/* Who can benefit — audience chips + smarter-content closing statement. */
export function AudienceSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".cm-aud__item", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
      gsap.from(".cm-aud__chip", {
        scale: 0.9,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: ".cm-aud__chips", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-5 sm:py-14">
      <div className="container">
        <div className="cm-aud__item max-w-2xl">
          <Kicker>{CM_AUDIENCE.label}</Kicker>
          <h2 className="cm-display text-[clamp(1.9rem,4.4vw,3.2rem)] text-[var(--cm-ink)]">
            {CM_AUDIENCE.heading[0]}
            <br />
            <span className="cm-grad">{CM_AUDIENCE.heading[1]}</span>
          </h2>
          <p className="mt-5 text-[var(--cm-muted)]">{CM_AUDIENCE.intro}</p>
        </div>

        <div className="cm-aud__chips mt-9 flex flex-wrap gap-3">
          {CM_AUDIENCE.items.map((a) => (
            <span key={a} className="cm-aud__chip cm-chip text-[0.95rem]">
              {a}
            </span>
          ))}
        </div>

        <p className="cm-aud__item mb-0 mt-8 max-w-3xl text-sm leading-relaxed text-[var(--cm-muted)]">
          {CM_AUDIENCE.closing}
        </p>

        {/* smarter-content editorial band */}
        <div className="cm-aud__item mt-16 cm-card overflow-hidden p-10 sm:p-14">
          <span className="cm-kicker mb-5">{CM_SMARTER.kicker}</span>
          <p className="m-0 max-w-4xl text-[clamp(1.15rem,2.2vw,1.6rem)] font-medium leading-snug text-[var(--cm-ink)]">
            {CM_SMARTER.body}
          </p>
          <a
            href="/contact"
            className="ag-link mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--cm-blue)] [&_svg]:size-4"
          >
            Build a smarter strategy <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

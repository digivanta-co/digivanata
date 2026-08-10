"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { Check, ArrowRight } from "@/components/ui/Icons";
import { Kicker } from "@/components/content/primitives";
import { CM_MATTERS, CM_APPROACH } from "@/lib/content-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Why Content Marketing Matters — a grid of glowing benefit chips. */
export function MattersSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".cm-matters__head", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
      gsap.from(".cm-matters__cell", {
        y: 44,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".cm-matters__grid", start: "top 82%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative border-y border-[var(--cm-line)] bg-[var(--cm-panel)] py-5 sm:py-14">
      <div className="container">
        <div className="cm-matters__head max-w-2xl">
          <Kicker>Why content marketing matters</Kicker>
          <h2 className="cm-display text-[clamp(1.9rem,4.4vw,3.2rem)] text-[var(--cm-ink)]">
            Ten reasons content
            <br />
            <span className="cm-grad">earns its place.</span>
          </h2>
          <p className="mt-5 text-[var(--cm-muted)]">{CM_MATTERS.intro}</p>
        </div>

        {/* interactive editorial index — hover wipes a steel-blue band
            across the row, the label shifts and an arrow slides in */}
        <div className="cm-matters__grid mt-12 grid border-t border-[var(--cm-line)] lg:grid-cols-2 lg:gap-x-14">
          {CM_MATTERS.points.map((p, i) => (
            <div
              key={p}
              className="cm-matters__cell group relative flex cursor-default items-center gap-5 overflow-hidden border-b border-[var(--cm-line)] px-2 py-5 sm:gap-6"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-left scale-x-0 bg-[linear-gradient(90deg,var(--cm-blue-soft),transparent_85%)] transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <span
                className="cm-display relative shrink-0 text-[1.7rem] leading-none text-transparent transition-colors duration-300 group-hover:text-[var(--cm-blue)]"
                style={{ WebkitTextStroke: "1px rgba(12,36,61,0.25)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative text-[clamp(1rem,1.6vw,1.2rem)] font-semibold text-[var(--cm-ink)] transition-transform duration-400 group-hover:translate-x-2">
                {p}
              </span>
              <span className="relative ml-auto grid size-8 shrink-0 -translate-x-2 place-items-center rounded-full bg-[var(--cm-blue)] text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 [&_svg]:size-3.5">
                <Check />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Content that helps you get found & trusted — problem + approach steps. */
export function ApproachSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".cm-appr__item", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 76%" },
      });
      gsap.from(".cm-appr__step", {
        x: -30,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: ".cm-appr__steps", start: "top 82%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-5 sm:py-14">
      <div className="container grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* left — narrative */}
        <div>
          <Kicker>Get found · get trusted</Kicker>
          <h2 className="cm-appr__item cm-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--cm-ink)]">
            {CM_APPROACH.heading[0]}
            <br />
            <span className="cm-grad">{CM_APPROACH.heading[1]}</span>
          </h2>
          <p className="cm-appr__item mt-6 text-[var(--cm-muted)]">{CM_APPROACH.problem}</p>
          <p className="cm-appr__item mt-4 text-[var(--cm-muted)]">{CM_APPROACH.body}</p>
          <p className="cm-appr__item mt-6 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[var(--cm-blue)]">
            {CM_APPROACH.closing} <ArrowRight className="size-4" />
          </p>
        </div>

        {/* right — the simple approach, numbered ladder */}
        <div className="cm-appr__item cm-card p-8 sm:p-10">
          <span className="cm-kicker mb-6">{CM_APPROACH.stepsLabel}</span>
          <ol className="cm-appr__steps m-0 list-none space-y-0 p-0">
            {CM_APPROACH.steps.map((s, i) => (
              <li
                key={s}
                className="cm-appr__step flex items-center gap-5 border-b border-[var(--cm-line)] py-4 last:border-0"
              >
                <span className="cm-display grid size-10 shrink-0 place-items-center rounded-full border border-[var(--cm-line)] bg-[var(--cm-blue-soft)] text-sm text-[var(--cm-blue)]">
                  {i + 1}
                </span>
                <span className="text-[1.02rem] font-medium text-[var(--cm-ink)]">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

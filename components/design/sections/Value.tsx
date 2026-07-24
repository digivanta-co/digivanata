"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { Label } from "@/components/design/primitives";
import { GD_PROBLEM } from "@/lib/design-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* What poor design costs — editorial numbered ledger rows. */
export function ProblemSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".gd-prob__row", {
        y: 50,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-24">
      <div className="container grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {/* sticky heading */}
        <div className="lg:sticky lg:top-28">
          <Label>The cost of poor design</Label>
          <h2 className="gd-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--gd-ink)]">
            Bad design is
            <br />
            <span className="gd-grad">expensive.</span>
          </h2>
          <p className="mt-5 max-w-md text-[var(--gd-muted)]">{GD_PROBLEM.intro}</p>
        </div>

        {/* numbered ledger */}
        <div className="border-t border-[var(--gd-line)]">
          {GD_PROBLEM.pains.map((p, i) => (
            <div
              key={p.title}
              className="gd-prob__row group flex items-baseline gap-6 border-b border-[var(--gd-line)] py-6 transition-colors duration-300 hover:bg-[var(--gd-soft)] sm:gap-9"
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

/* Statement typography — each character rises on scroll. */
export function BigStatement({ lines = ["Every pixel", "tells a story."] }: { lines?: string[] }) {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gd-stmt__char",
        {
          yPercent: 120,
          autoAlpha: 0,
        },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.02,
          // clear the lingering per-char transform so background-clip:text can
          // paint the gradient on the .gd-grad line (otherwise those glyphs
          // stay transparent / only visible when selected).
          clearProps: "transform",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="flex items-center border-y border-[var(--gd-line)] bg-[var(--gd-soft)] py-20">
      <div className="container">
        <h2 className="gd-display m-0 text-[clamp(2.2rem,7vw,5.4rem)] text-[var(--gd-ink)]">
          {lines.map((line, li) => (
            <span key={li} className="block overflow-hidden">
              <span className={"inline-block" + (li === lines.length - 1 ? " gd-grad" : "")}>
                {line.trim().split(/\s+/).map((word, wi, arr) => (
                  <span key={wi}>
                    <span className="inline-block whitespace-nowrap">
                      {Array.from(word).map((ch, ci) => (
                       <span className="inline-block overflow-hidden">
                       <span className="gd-stmt__char inline-block">
                         {ch}
                       </span>
                     </span>
                      ))}
                    </span>
                    {wi < arr.length - 1 && " "}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}

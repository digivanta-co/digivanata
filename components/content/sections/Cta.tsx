"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { MagneticButton } from "@/components/agency/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { Aura } from "@/components/content/primitives";
import { CONTACT } from "@/lib/site-data";
import { CM_CTA } from "@/lib/content-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function CTASection({
  kicker = CM_CTA.kicker,
  lines = CM_CTA.lines,
  desc = CM_CTA.desc,
  primary = CM_CTA.primary,
}: {
  kicker?: string;
  lines?: [string, string];
  desc?: string;
  primary?: string;
}) {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".cm-cta__word", {
        yPercent: 120,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
      gsap.from(".cm-cta__fade", {
        y: 24,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 62%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="contact"
      className="ag-grain relative flex min-h-[78svh] items-center overflow-hidden border-t border-[var(--cm-line)] py-24"
    >
      <Aura />

      <div className="container relative z-10 text-center">
        <p className="cm-cta__fade mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--cm-blue)]">
          {kicker}
        </p>
        <h2 className="cm-display m-0 text-[clamp(2.6rem,9vw,7rem)]">
          {lines.map((w, i) => (
            <span key={i} className="block overflow-hidden">
              <span className={"cm-cta__word block " + (i === 1 ? "cm-grad" : "text-[var(--cm-ink)]")}>
                {w}
              </span>
            </span>
          ))}
        </h2>
        {desc && (
          <p className="cm-cta__fade mx-auto mt-7 max-w-2xl text-[0.98rem] leading-relaxed text-[var(--cm-muted)]">
            {desc}
          </p>
        )}

        <div className="cm-cta__fade mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={CONTACT.whatsapp} external>
            {primary} <ArrowRight />
          </MagneticButton>
          <MagneticButton href={CONTACT.phoneHref} external className="ag-btn--ghost">
            {CONTACT.phone}
          </MagneticButton>
        </div>

        <p className="cm-cta__fade mt-9 text-sm text-[var(--cm-faint)]">
          Serving Dwarka · Janakpuri · Tilak Nagar · Gurgaon · Noida · all Delhi NCR
        </p>
      </div>
    </section>
  );
}

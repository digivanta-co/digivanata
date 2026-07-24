"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { MagneticButton } from "@/components/agency/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { CONTACT } from "@/lib/site-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function CTASection({
  kicker = "Your brand is already talking. Let's control what it says.",
  lines = ["Make it", "speak first."],
  desc,
  primary = "Book a free design consult",
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
      gsap.from(".gd-cta__word", {
        yPercent: 120,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="contact"
      className="relative flex min-h-[70svh] items-center overflow-hidden border-t border-[var(--gd-line)] py-24"
    >
      {/* static background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_420px_at_50%_-10%,rgba(40,111,171,0.07),transparent_60%),radial-gradient(600px_360px_at_85%_110%,rgba(176,141,63,0.08),transparent_55%)]"
      />

      <div className="container relative z-10 text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gd-gold)]">
          {kicker}
        </p>
        <h2 className="gd-display m-0 text-[clamp(2.4rem,8vw,6.2rem)] text-[var(--gd-ink)]">
          {lines.map((w, i) => (
            <span key={i} className="block overflow-hidden">
              <span className={"gd-cta__word block " + (i === 1 ? "gd-grad" : "")}>
                {w}
              </span>
            </span>
          ))}
        </h2>
        {desc && (
          <p className="mx-auto mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-[var(--gd-muted)]">
            {desc}
          </p>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={CONTACT.whatsapp} external>
            {primary} <ArrowRight />
          </MagneticButton>
          <MagneticButton href={CONTACT.phoneHref} external className="ag-btn--ghost">
            {CONTACT.phone}
          </MagneticButton>
        </div>

        <p className="mt-9 text-sm text-[var(--gd-muted)]">
          Serving Delhi · Noida · Gurugram · all NCR regions
        </p>
      </div>
    </section>
  );
}

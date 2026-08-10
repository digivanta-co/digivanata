"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { MagneticButton } from "@/components/agency/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { GD_HERO } from "@/lib/design-data";
import DesignerWorkspace from "@/components/design/DesignerWorkspace";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* One headline line, split into characters for the 3D flip.
   Words stay unbroken but the line may wrap on narrow screens. */
function FlipLine({ text, variant }: { text: string; variant: "solid" | "outline" | "gradient" }) {
  const words = text.trim().split(/\s+/);
  return (
    <span className="block overflow-hidden [transform-style:preserve-3d]">
      <span className="block [transform-style:preserve-3d]">
        {words.map((word, wi) => (
          <span key={wi}>
            <span className="inline-block whitespace-nowrap [transform-style:preserve-3d]">
              {Array.from(word).map((ch, i) => (
                <span
                  key={i}
                  className={
                    "gd-hero__char inline-block will-change-transform " +
                    (variant === "gradient"
                      ? "gd-grad"
                      : variant === "outline"
                      ? "text-transparent"
                      : "text-[var(--gd-navy)]")
                  }
                  style={
                    variant === "outline"
                      ? { WebkitTextStroke: "1.8px #0C243D", WebkitTextFillColor: "transparent" }
                      : undefined
                  }
                >
                  {ch}
                </span>
              ))}
            </span>
            {wi < words.length - 1 && " "}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function HeroSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".gd-hero__eyebrow", { y: 24, autoAlpha: 0, duration: 0.7 })
        .from(
          ".gd-hero__char",
          { rotateX: -95, yPercent: 120, autoAlpha: 0, duration: 0.9, stagger: 0.02, ease: "back.out(1.4)" },
          "-=0.3"
        )
        .from(".gd-hero__sub", { y: 24, autoAlpha: 0, duration: 0.7 }, "-=0.5")
        .from(".gd-hero__ctas > *", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".gd-hero__meta > *", { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, "-=0.4");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-[88svh] items-center overflow-hidden pt-24 pb-16 lg:pt-28"
    >
      {/* static, cheap background accents — no blur filters, no mousemove */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_460px_at_85%_-10%,rgba(40,111,171,0.07),transparent_60%),radial-gradient(700px_420px_at_-10%_110%,rgba(176,141,63,0.07),transparent_55%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--gd-line)]" />

      <div className="container relative z-10">
       <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <div>
        <span className="gd-hero__eyebrow mb-7 inline-flex items-center gap-2.5 rounded-full border border-[var(--gd-line)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gd-muted)] shadow-[0_4px_14px_rgba(13,18,41,0.05)]">
        <span className="size-2 rounded-full bg-[var(--gd-gold)] shadow-[0_0_10px_rgba(176,141,63,0.8)]" />
          {GD_HERO.badge}
        </span>

        <h1 className="gd-display m-0 text-[clamp(2.6rem,7.5vw,5.6rem)] [perspective:900px]">
          <FlipLine text={GD_HERO.titleLines[0]} variant="solid" />
          <FlipLine text={GD_HERO.titleLines[1]} variant="outline" />
          <FlipLine text={GD_HERO.titleLines[2]} variant="gradient" />
        </h1>

        <p className="gd-hero__sub mt-7 max-w-xl text-[1.05rem] leading-relaxed text-[var(--gd-muted)]">
          {GD_HERO.sub}
        </p>

        <div className="gd-hero__ctas mt-8 flex items-center gap-2.5 sm:gap-4">
          <MagneticButton href="/contact">
            <span className="hidden sm:inline">{GD_HERO.primaryCta}</span>
            <span className="sm:hidden">Start Design</span>
            <ArrowRight />
          </MagneticButton>
          <MagneticButton href="#services" className="ag-btn--ghost">
            <span className="hidden sm:inline">{GD_HERO.ghostCta}</span>
            <span className="sm:hidden">Our Services</span>
          </MagneticButton>
        </div>

        <div className="gd-hero__meta mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-[var(--gd-line)] pt-8">
          {GD_HERO.meta.map((m) => (
            <div key={m.l}>
              <div className="gd-display text-2xl text-[var(--gd-navy)]">{m.n}</div>
              <div className="mt-1 text-sm text-[var(--gd-muted)]">{m.l}</div>
            </div>
          ))}
        </div>
        </div>

        {/* right — Designer's Workspace (shown tablet+ where it renders at full size) */}
        <div className="hidden w-full md:mt-6 md:block lg:mt-0">
          <DesignerWorkspace />
        </div>
       </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--gd-muted)]">
        Scroll
      </div>
    </section>
  );
}

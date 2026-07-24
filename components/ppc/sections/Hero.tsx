"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { MagneticButton } from "@/components/agency/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { PPC_HERO, PPC_INTRO } from "@/lib/ppc-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* One headline line, split into characters for the 3D flip.
   Words stay unbroken but the line may wrap on narrow screens. */
function FlipLine({ text, variant }: { text: string; variant: "solid" | "outline" | "gradient" }) {
  if (!text) return null;
  const words = text.trim().split(/\s+/);
  return (
    <span className="block overflow-hidden [transform-style:preserve-3d]">
      <span
        className={
          "block [transform-style:preserve-3d] " +
          (variant === "gradient" ? "gd-grad" : variant === "outline" ? "text-transparent" : "text-[var(--gd-ink)]")
        }
        style={variant === "outline" ? { WebkitTextStroke: "1.5px rgba(13,18,41,0.28)" } : undefined}
      >
        {words.map((word, wi) => (
          <span key={wi}>
            <span className="inline-block whitespace-nowrap [transform-style:preserve-3d]">
              {Array.from(word).map((ch, i) => (
                <span key={i} className="ppc-hero__char inline-block will-change-transform">
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
      tl.from(".ppc-hero__eyebrow", { y: 24, autoAlpha: 0, duration: 0.7 })
        .from(
          ".ppc-hero__char",
          { rotateX: -95, yPercent: 120, autoAlpha: 0, duration: 0.9, stagger: 0.018, ease: "back.out(1.4)" },
          "-=0.3"
        )
        .from(".ppc-hero__sub", { y: 24, autoAlpha: 0, duration: 0.7 }, "-=0.5")
        .from(".ppc-hero__ctas > *", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".ppc-hero__meta > *", { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, "-=0.4")
        .from(".ppc-hero__video", { y: 28, autoAlpha: 0, scale: 0.96, duration: 0.9 }, "-=0.7");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-[88svh] items-center overflow-hidden pt-24 pb-16 lg:pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(900px 460px at 85% -10%, rgba(40,111,171,0.12), transparent 60%)",
            "radial-gradient(700px 420px at -10% 110%, rgba(176,141,63,0.10), transparent 55%)",
          ].join(", "),
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--gd-line)]" />

      <div className="container relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <h1 className="gd-display m-0 text-[clamp(2.4rem,7vw,5.2rem)] [perspective:900px]">
            {PPC_HERO.titleLines.map((line, idx) => {
              const variants: ("solid" | "outline" | "gradient")[] = ["solid", "outline", "gradient"];
              return (
                <FlipLine
                  key={idx}
                  text={line}
                  variant={variants[idx % variants.length]}
                />
              );
            })}
          </h1>

          <p className="ppc-hero__sub mt-7 max-w-xl text-[1.05rem] leading-relaxed text-[var(--gd-muted)]">
            {PPC_HERO.sub}
          </p>

          <div className="ppc-hero__ctas mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="#contact">
              {PPC_HERO.primaryCta} <ArrowRight />
            </MagneticButton>
            <MagneticButton href="#services" className="ag-btn--ghost">
              {PPC_HERO.ghostCta}
            </MagneticButton>
          </div>

          <div className="ppc-hero__meta mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-[var(--gd-line)] pt-8">
            {PPC_HERO.meta.map((m) => (
              <div key={m.l}>
                <div className="gd-display text-2xl text-[var(--gd-navy)]">{m.n}</div>
                <div className="mt-1 text-sm text-[var(--gd-muted)]">{m.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="ppc-hero__video relative mx-auto w-full max-w-lg overflow-hidden rounded-[24px] border border-[var(--gd-line)] shadow-[0_24px_60px_rgba(12,36,61,0.12)] lg:mx-0 lg:max-w-none">
          <video
            src="/perfomance-marketing.mp4"
            autoPlay
            loop
            muted
            playsInline
            className=""
          />
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--gd-muted)]">
        Scroll
      </div>
    </section>
  );
}

/* Editorial intro — the strategy manifesto under the hero. */
export function IntroSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".ppc-intro__item", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-20">
      <div className="container">
        <p className="ppc-intro__item m-0 max-w-3xl text-[clamp(1.2rem,2.4vw,1.7rem)] font-medium leading-snug text-[var(--gd-ink)]">
          {PPC_INTRO.lead}
        </p>
        <div className="mt-9 grid gap-8 border-t border-[var(--gd-line)] pt-9 md:grid-cols-3">
          {PPC_INTRO.paragraphs.map((p, i) => (
            <p key={i} className="ppc-intro__item m-0 text-sm leading-relaxed text-[var(--gd-muted)]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

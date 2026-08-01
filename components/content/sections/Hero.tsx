"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { MagneticButton, CursorFollower } from "@/components/agency/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { Aura } from "@/components/content/primitives";
import { CM_HERO, CM_INTRO } from "@/lib/content-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* One headline line, split into characters for the 3D flip-in. */
function FlipLine({ text, variant }: { text: string; variant: "solid" | "outline" | "gradient" }) {
  if (!text) return null;
  return (
    <span className="block overflow-hidden [transform-style:preserve-3d]">
      <span
        className={
          "block whitespace-nowrap [transform-style:preserve-3d] " +
          (variant === "gradient" ? "cm-grad" : variant === "outline" ? "cm-outline" : "text-[var(--cm-ink)]")
        }
      >
        {Array.from(text).map((ch, i) => (
          <span
            key={i}
            className="cm-hero__char inline-block will-change-transform"
            style={{ whiteSpace: ch === " " ? "pre" : "normal" }}
          >
            {ch === " " ? " " : ch}
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
      // fromTo (not from) so the end state is always explicit & visible —
      // guards against React Strict Mode double-mount leaving text at opacity 0.
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(".cm-hero__eyebrow", { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 })
        .fromTo(".cm-hero__tag", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6 }, "-=0.35")
        .fromTo(
          ".cm-hero__char",
          { rotateX: -95, yPercent: 120, autoAlpha: 0 },
          { rotateX: 0, yPercent: 0, autoAlpha: 1, duration: 0.9, stagger: 0.018, ease: "back.out(1.4)" },
          "-=0.3"
        )
        .fromTo(".cm-hero__sub", { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, "-=0.5")
        .fromTo(".cm-hero__ctas > *", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .fromTo(".cm-hero__meta > *", { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08 }, "-=0.4");

      // gentle parallax drift on the scroll cue
      gsap.to(".cm-hero__cue", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.4,
        ease: "sine.inOut",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="ag-grain relative flex min-h-[92svh] items-center overflow-hidden pt-28 pb-20 lg:pt-32"
    >
      {/* <CursorFollower /> */}
      <Aura />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--cm-line)]" />

      <div className="container relative z-10">
        <span className="cm-hero__eyebrow cm-chip mb-7 uppercase tracking-[0.2em] text-[var(--cm-muted)]">
          <span className="size-2 rounded-full bg-[var(--cm-blue)] shadow-[0_0_12px_rgba(40,111,171,0.5)]" />
          {CM_HERO.badge}
        </span>

        <p className="cm-hero__tag mb-5 max-w-2xl text-[clamp(1rem,1.6vw,1.2rem)] font-medium text-[var(--cm-blue)]">
          {CM_HERO.tagline}
        </p>

        <h1 className="cm-display m-0 text-[clamp(2.3rem,6.2vw,4.4rem)] [perspective:900px] ">
          {CM_HERO.titleLines.map((line, idx) => {
            const variants: ("solid" | "outline" | "gradient")[] = ["solid", "outline", "gradient"];
            return <FlipLine key={idx} text={line} variant={variants[idx % variants.length]} />;
          })}
        </h1>

        <p className="cm-hero__sub mt-7 max-w-xl text-[1.05rem] leading-relaxed text-[var(--cm-muted)]">
          {CM_HERO.sub}
        </p>

        <div className="cm-hero__ctas mt-8 flex items-center gap-2.5 sm:gap-4">
          <MagneticButton href="#contact">
            <span className="hidden sm:inline">{CM_HERO.primaryCta}</span>
            <span className="sm:hidden">Content Strategy</span>
            <ArrowRight />
          </MagneticButton>
          <MagneticButton href="#services" className="ag-btn--ghost">
            <span className="hidden sm:inline">{CM_HERO.ghostCta}</span>
            <span className="sm:hidden">Our Services</span>
          </MagneticButton>
        </div>

        <div className="cm-hero__meta mt-16 grid gap-8 border-t border-[var(--cm-line)] pt-9 sm:grid-cols-3">
          {CM_HERO.meta.map((m) => (
            <div key={m.l}>
              <div className="cm-display text-2xl text-[var(--cm-ink)] sm:text-3xl">{m.n}</div>
              <div className="mt-2 text-sm leading-snug text-[var(--cm-muted)]">{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="cm-hero__cue absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--cm-faint)]">
        Scroll
      </div>
    </section>
  );
}

/* Editorial intro — the manifesto under the hero. */
export function IntroSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cm-intro__item",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-24">
      <div className="container">
        <p className="cm-intro__item m-0 max-w-3xl text-[clamp(1.3rem,2.6vw,1.9rem)] font-medium leading-snug text-[var(--cm-ink)]">
          {CM_INTRO.lead}
        </p>
        <div className="mt-10 grid gap-8 border-t border-[var(--cm-line)] pt-10 md:grid-cols-2">
          {CM_INTRO.paragraphs.map((p, i) => (
            <p key={i} className="cm-intro__item m-0 text-[0.95rem] leading-relaxed text-[var(--cm-muted)]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { MagneticButton } from "@/components/agency/primitives";
import { ArrowRight, Instagram, Facebook, LinkedIn, YouTube } from "@/components/ui/Icons";
import { CONTACT } from "@/lib/site-data";
import { SMM_HERO, SMM_INTRO } from "@/lib/smm-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

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
                <span key={i} className="smm-hero__char inline-block will-change-transform">
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

const PLATFORMS = [
  { node: <Instagram width={18} height={18} />, name: "Instagram" },
  { node: <Facebook width={18} height={18} />, name: "Facebook" },
  { node: <LinkedIn width={18} height={18} />, name: "LinkedIn" },
  { node: <YouTube width={18} height={18} />, name: "YouTube" },
];

export default function HeroSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".smm-hero__eyebrow", { y: 24, autoAlpha: 0, duration: 0.7 })
        .from(
          ".smm-hero__char",
          { rotateX: -95, yPercent: 120, autoAlpha: 0, duration: 0.9, stagger: 0.018, ease: "back.out(1.4)" },
          "-=0.3"
        )
        .from(".smm-hero__sub", { y: 24, autoAlpha: 0, duration: 0.7 }, "-=0.5")
        .from(".smm-hero__ctas > *", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".smm-hero__platforms > *", { y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.06 }, "-=0.3")
        .from(".smm-hero__meta > *", { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, "-=0.3");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-[88svh] items-center overflow-hidden pt-24 pb-16 lg:pt-28"
    >
     
      <div className="container relative z-10">
       
        <h1 className="gd-display m-0 text-[clamp(2.4rem,7vw,5.2rem)] [perspective:500px]">
          {SMM_HERO.titleLines.map((line, idx) => {
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

        <p className="smm-hero__sub mt-7 max-w-xl text-[1.05rem] leading-relaxed text-[var(--gd-muted)]">
          {SMM_HERO.sub}
        </p>

        <div className="smm-hero__ctas mt-8 flex items-center gap-2.5 sm:gap-4">
          <MagneticButton href="#contact">
            <span className="hidden sm:inline">{SMM_HERO.primaryCta}</span>
            <span className="sm:hidden">SMM Strategy</span>
            <ArrowRight />
          </MagneticButton>
          <MagneticButton href={CONTACT.whatsapp} external className="ag-btn--ghost">
            <span className="hidden sm:inline">{SMM_HERO.ghostCta}</span>
            <span className="sm:hidden">WhatsApp Now</span>
          </MagneticButton>
        </div>

        <div className="smm-hero__platforms mt-9 flex flex-wrap items-center gap-3">
          {PLATFORMS.map((p) => (
            <span
              key={p.name}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--gd-line)] bg-white px-4 py-2 text-[0.82rem] font-semibold text-[var(--gd-ink)] shadow-[0_4px_14px_rgba(13,18,41,0.04)] transition-colors hover:border-[var(--gd-blue)]"
            >
              <span className="text-[var(--gd-blue)]">{p.node}</span>
              {p.name}
            </span>
          ))}
        </div>

        <div className="smm-hero__meta mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-[var(--gd-line)] pt-8">
          {SMM_HERO.meta.map((m) => (
            <div key={m.l}>
              <div className="gd-display text-2xl text-[var(--gd-navy)]">{m.n}</div>
              <div className="mt-1 text-sm text-[var(--gd-muted)]">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IntroSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".smm-intro__item", {
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
    <section ref={root} className="relative py-12 sm:py-20">
      <div className="container">
        <p className="smm-intro__item m-0 max-w-3xl text-[clamp(1.2rem,2.4vw,1.7rem)] font-medium leading-snug text-[var(--gd-ink)]">
          {SMM_INTRO.lead}
        </p>
        <div className="mt-9 grid gap-8 border-t border-[var(--gd-line)] pt-9 md:grid-cols-3">
          {SMM_INTRO.paragraphs.map((p, i) => (
            <p key={i} className="smm-intro__item m-0 text-sm leading-relaxed text-[var(--gd-muted)]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

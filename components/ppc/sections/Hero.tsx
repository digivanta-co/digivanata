"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { MagneticButton } from "@/components/agency/primitives";
import { ArrowRight, WhatsApp } from "@/components/ui/Icons";
import { SeoIcon } from "@/components/seo/SeoIcons";
import { CONTACT } from "@/lib/site-data";
import { PPC_HERO, PPC_INTRO } from "@/lib/ppc-data";
import LazyVideo from "@/components/ui/LazyVideo";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function HeroSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".ppc2__eyebrow", { y: 24, autoAlpha: 0, duration: 0.7 })
        .from(".ppc2__word", { yPercent: 120, rotateX: -80, autoAlpha: 0, duration: 0.9, stagger: 0.06, ease: "back.out(1.4)" }, "-=0.3")
        .from(".ppc2__sub", { y: 24, autoAlpha: 0, duration: 0.7 }, "-=0.5")
        .from(".ppc2__ctas > *", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".ppc2__trust > *", { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, "-=0.4")
        .from(".ppc2__video", { y: 28, autoAlpha: 0, scale: 0.96, duration: 0.9 }, "-=0.7");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden pt-24 pb-4 lg:pt-28 lg:pb-10">
      {/* static background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_460px_at_88%_-10%,rgba(40,111,171,0.08),transparent_60%),radial-gradient(700px_420px_at_-10%_110%,rgba(176,141,63,0.08),transparent_55%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--gd-line)]" />

      <div className="container relative z-10">
        <div className="grid gap-5 items-center lg:grid-cols-[1.05fr_0.95fr]">
          {/* copy */}
          <div>
            <span className="ppc2__eyebrow inline-flex items-center gap-2.5 rounded-full border border-[var(--gd-line)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gd-muted)] shadow-[0_4px_14px_rgba(12,36,61,0.05)]">
              <span className="size-2 rounded-full bg-[var(--gd-gold)] shadow-[0_0_10px_rgba(176,141,63,0.8)]" />
              {PPC_HERO.eyebrow}
            </span>

            <h1 className="gd-display mt-7 text-[clamp(2.2rem,5.4vw,3.9rem)] leading-[1.02] text-[var(--gd-ink)] [perspective:900px]">
              {PPC_HERO.h1.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-top">
                  <span className={"ppc2__word mr-[0.28em] inline-block will-change-transform " + (w.grad ? "gd-grad" : "")}>
                    {w.t}
                  </span>
                </span>
              ))}
            </h1>

            <p className="ppc2__sub mt-6 max-w-xl text-[1.02rem] leading-relaxed text-[var(--gd-muted)]">
              {PPC_HERO.sub}
            </p>

            <div className="ppc2__ctas mt-8 flex items-center gap-2.5 sm:gap-4">
              <MagneticButton href="/contact">
                <span className="hidden sm:inline">{PPC_HERO.ctaPrimary}</span>
                <span className="sm:hidden">PPC Audit</span>
                <ArrowRight />
              </MagneticButton>
              <MagneticButton href={CONTACT.whatsapp} external className="ag-btn--ghost">
                <WhatsApp width={17} height={17} className="hidden text-[#25d366] sm:inline" /> {PPC_HERO.ctaGhost}
              </MagneticButton>
            </div>

            {/* trust row */}
            <div className="ppc2__trust mt-8 grid gap-5 grid-cols-2 border-t border-[var(--gd-line)] pt-6 sm:mt-12 sm:grid-cols-4 sm:pt-7">
              <div className="flex flex-col items-start gap-1">
                <span className="flex text-[var(--gd-gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <SeoIcon key={i} name="star" width={16} height={16} />
                  ))}
                </span>
                <span className="text-[0.82rem] font-semibold text-[var(--gd-ink)]">4.9/5 Google rating</span>
              </div>
              {PPC_HERO.meta.map((m) => (
                <div key={m.l} className="flex flex-col items-start">
                  <strong className="gd-display text-2xl text-[var(--gd-navy)]">{m.n}</strong>
                  <span className="text-[0.72rem] leading-snug text-[var(--gd-muted)]">{m.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* video */}
          <div className="ppc2__video relative mx-auto aspect-[16/10] w-full max-w-lg overflow-hidden rounded-[20px] border border-[var(--gd-line)] shadow-[0_18px_45px_rgba(12,36,61,0.12)] sm:rounded-[24px] lg:mx-0 lg:max-w-none">
            <LazyVideo
              src="/perfomance-marketing.mp4"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
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
    <section ref={root} className="relative py-8 sm:py-12">
      <div className="container">
        <p className="ppc-intro__item m-0 text-[clamp(1.2rem,2.4vw,1.7rem)] font-medium leading-snug text-[var(--gd-ink)]">
          {PPC_INTRO.lead}
        </p>
        <div className="mt-7 grid gap-5 border-t border-[var(--gd-line)] pt-7 md:mt-9 md:grid-cols-3 md:pt-9">
          {PPC_INTRO.paragraphs.map((p, i) => (
            <p key={i} className="ppc-intro__item m-0 border-l-2 border-[var(--gd-line)] py-1 pl-4 text-sm leading-relaxed text-[var(--gd-muted)] md:border-0 md:p-0">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { MagneticButton } from "@/components/agency/primitives";
import { ArrowRight, Instagram, Facebook, LinkedIn, YouTube } from "@/components/ui/Icons";
import { SeoIcon } from "@/components/seo/SeoIcons";
import { CONTACT } from "@/lib/site-data";
import { SMM_HERO, SMM_INTRO } from "@/lib/smm-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Hand-built SMM Campaign dashboard panel graphic (right column) */
function SmmPanel() {
  const root = useRef<HTMLDivElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(root.current, { y: 50, autoAlpha: 0, scale: 0.96, duration: 1, ease: "power3.out", delay: 0.4 });
      gsap.from(".smm__spark-path", {
        strokeDashoffset: 420,
        duration: 1.6,
        ease: "power2.inOut",
        delay: 1,
      });
      gsap.to(".smm__chip--a", { y: -10, duration: 2.6, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.2 });
      gsap.to(".smm__chip--b", { y: 10, duration: 3, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.4 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative mx-auto w-full max-w-[520px]">
      {/* Dashboard container */}
      <div className="relative overflow-hidden rounded-3xl border border-[var(--gd-line)] bg-white shadow-[0_30px_70px_rgba(12,36,61,0.12)]">
        {/* Chrome header */}
        <div className="flex items-center gap-2 border-b border-[var(--gd-line)] bg-[var(--gd-soft)] px-5 py-3">
          <span className="size-2.5 rounded-full bg-[#f26d6d]" />
          <span className="size-2.5 rounded-full bg-[#f2c94c]" />
          <span className="size-2.5 rounded-full bg-[#6dd58c]" />
          <span className="ml-3 flex flex-1 items-center gap-2 rounded-full border border-[var(--gd-line)] bg-white px-3.5 py-1.5 text-[0.72rem] text-[var(--gd-muted)]">
            <SeoIcon name="search" width={12} height={12} />
            social.digivanta.co/analytics
          </span>
        </div>

        <div className="space-y-3.5 p-5">
          {/* Main Campaign Banner */}
          <div className="relative rounded-2xl border border-[var(--gd-gold)]/40 bg-[var(--gd-gold-soft)] p-4">
            <span className="absolute -top-2.5 right-4 rounded-full bg-[linear-gradient(120deg,var(--gd-navy),var(--gd-blue))] px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-white">
              ● Active Campaign
            </span>
            <p className="m-0 text-[0.68rem] text-[var(--gd-muted)]">Digivanta SMM Growth</p>
            <p className="m-0 mt-0.5 text-[0.92rem] font-bold text-[var(--gd-navy)]">
              +340% Audience Engagement Rate
            </p>
            <div className="mt-2.5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[0.68rem] font-semibold text-[var(--gd-ink)] shadow-xs">
                <Instagram width={12} height={12} className="text-[#e4405f]" /> 85k Reach
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[0.68rem] font-semibold text-[var(--gd-ink)] shadow-xs">
                <Facebook width={12} height={12} className="text-[#1877f2]" /> 120k Impressions
              </span>
            </div>
          </div>

          {/* Social post mock preview */}
          <div className="flex items-center gap-3 rounded-2xl border border-[var(--gd-line)] p-3.5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--gd-navy),var(--gd-blue))] text-xs font-bold text-white">
              DV
            </div>
            <div className="min-w-0 flex-1">
              <div className="h-2.5 w-32 rounded-full bg-[rgba(12,36,61,0.12)]" />
              <div className="mt-1.5 h-2 w-48 rounded-full bg-[rgba(12,36,61,0.06)]" />
            </div>
            <span className="rounded-md bg-[rgba(40,111,171,0.1)] px-2 py-1 text-[0.65rem] font-bold text-[var(--gd-blue)]">
              Viral Reel
            </span>
          </div>

          {/* Engagement sparkline curve */}
          <div className="rounded-2xl border border-[var(--gd-line)] bg-[var(--gd-soft)] p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-[var(--gd-muted)]">
                Monthly Impressions
              </span>
              <span className="text-[0.72rem] font-bold text-[var(--gd-gold)]">5.2M Total</span>
            </div>
            <svg viewBox="0 0 360 80" className="h-16 w-full" aria-hidden>
              <defs>
                <linearGradient id="smmSpark" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0C243D" />
                  <stop offset="100%" stopColor="#286FAB" />
                </linearGradient>
              </defs>
              <path
                className="smm__spark-path"
                d="M4 70 C 50 66, 80 58, 110 52 S 170 44, 200 34 S 280 24, 320 12 L 356 6"
                fill="none"
                stroke="url(#smmSpark)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="420"
              />
              <circle cx="356" cy="6" r="4" fill="#b08d3f" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating stat chips */}
      <div className="smm__chip--a absolute -left-4 -top-5 hidden rounded-2xl border border-[var(--gd-line)] bg-white/95 px-4 py-3 shadow-[0_14px_34px_rgba(12,36,61,0.12)] sm:block">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-[rgba(40,111,171,0.1)] text-[var(--gd-blue)]">
            <SeoIcon name="trendUp" width={20} height={20} />
          </span>
          <div>
            <strong className="block text-[1.2rem] font-extrabold leading-none text-[var(--gd-ink)]">+340%</strong>
            <span className="text-[0.7rem] text-[var(--gd-muted)]">Engagement Growth</span>
          </div>
        </div>
      </div>
      <div className="smm__chip--b absolute -bottom-5 -right-4 hidden rounded-2xl border border-[var(--gd-line)] bg-white/95 px-4 py-3 shadow-[0_14px_34px_rgba(12,36,61,0.12)] sm:block">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-[rgba(40,111,171,0.1)] text-[var(--gd-blue)]">
            <SeoIcon name="users" width={20} height={20} />
          </span>
          <div>
            <strong className="block text-[1.2rem] font-extrabold leading-none text-[var(--gd-ink)]">5M+</strong>
            <span className="text-[0.7rem] text-[var(--gd-muted)]">Monthly Impressions</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const PLATFORMS = [
  { node: <Instagram width={16} height={16} />, name: "Instagram" },
  { node: <Facebook width={16} height={16} />, name: "Facebook" },
  { node: <LinkedIn width={16} height={16} />, name: "LinkedIn" },
  { node: <YouTube width={16} height={16} />, name: "YouTube" },
];

export default function HeroSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".smm-hero__eyebrow", { y: 24, autoAlpha: 0, duration: 0.7 })
        .from(".smm-hero__word", { yPercent: 120, rotateX: -80, autoAlpha: 0, duration: 0.9, stagger: 0.06, ease: "back.out(1.4)" }, "-=0.3")
        .from(".smm-hero__sub", { y: 24, autoAlpha: 0, duration: 0.7 }, "-=0.5")
        .from(".smm-hero__ctas > *", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".smm-hero__platforms > *", { y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.06 }, "-=0.3")
        .from(".smm-hero__trust > *", { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, "-=0.3");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-24">
      {/* background radial lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_460px_at_88%_-10%,rgba(40,111,171,0.08),transparent_60%),radial-gradient(700px_420px_at_-10%_110%,rgba(176,141,63,0.08),transparent_55%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--gd-line)]" />

      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* copy column */}
          <div>
            <span className="smm-hero__eyebrow inline-flex items-center gap-2.5 rounded-full border border-[var(--gd-line)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gd-muted)] shadow-[0_4px_14px_rgba(12,36,61,0.05)]">
              <span className="size-2 rounded-full bg-[var(--gd-gold)] shadow-[0_0_10px_rgba(176,141,63,0.8)]" />
              Social Media Marketing Company in Delhi
            </span>

            <h1 className="gd-display mt-7 text-[clamp(2.2rem,5.4vw,3.9rem)] leading-[1.02] text-[var(--gd-ink)] [perspective:900px]">
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="smm-hero__word inline-block will-change-transform text-[var(--gd-ink)]">
                  TURN FOLLOWERS
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="smm-hero__word inline-block will-change-transform gd-grad">
                  INTO LOYAL CUSTOMERS.
                </span>
              </span>
            </h1>

            <p className="smm-hero__sub mt-6 max-w-xl text-[1.02rem] leading-relaxed text-[var(--gd-muted)]">
              {SMM_HERO.sub}
            </p>

            <div className="smm-hero__ctas mt-8 flex items-center gap-2.5 sm:gap-4">
              <MagneticButton href="/contact">
                <span className="hidden sm:inline">{SMM_HERO.primaryCta}</span>
                <span className="sm:hidden">SMM Strategy</span>
                <ArrowRight />
              </MagneticButton>
              <MagneticButton href={CONTACT.whatsapp} external className="ag-btn--ghost">
                <span className="hidden sm:inline">{SMM_HERO.ghostCta}</span>
                <span className="sm:hidden">Talk to Our Team</span>
              </MagneticButton>
            </div>

            {/* Social platform pills */}
            <div className="smm-hero__platforms mt-8 flex flex-wrap items-center gap-3">
              {PLATFORMS.map((p) => (
                <span
                  key={p.name}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--gd-line)] bg-white px-3.5 py-1.5 text-xs font-semibold text-[var(--gd-ink)] shadow-[0_4px_14px_rgba(13,18,41,0.04)] transition-colors hover:border-[var(--gd-blue)]"
                >
                  <span className="text-[var(--gd-blue)]">{p.node}</span>
                  {p.name}
                </span>
              ))}
            </div>

            {/* Trust row */}
            <div className="smm-hero__trust mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--gd-line)] pt-6 sm:mt-10 sm:pt-7">
              <div className="flex items-center gap-2">
                <span className="flex text-[var(--gd-gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <SeoIcon key={i} name="star" width={16} height={16} />
                  ))}
                </span>
                <span className="text-[0.85rem] font-semibold text-[var(--gd-ink)]">4.9/5 Client rating</span>
              </div>
              <div>
                <strong className="gd-display block text-2xl text-[var(--gd-navy)]">73%</strong>
                <span className="text-[0.74rem] text-[var(--gd-muted)]">Engagement increase</span>
              </div>
              <div>
                <strong className="gd-display block text-2xl text-[var(--gd-navy)]">5M+</strong>
                <span className="text-[0.74rem] text-[var(--gd-muted)]">Impressions delivered</span>
              </div>
            </div>
          </div>

          {/* Graphic Panel Column */}
          <SmmPanel />
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
    <section ref={root} className="relative py-8 sm:py-12">
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

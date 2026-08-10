"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { MagneticButton } from "@/components/agency/primitives";
import { ArrowRight, WhatsApp } from "@/components/ui/Icons";
import { SeoIcon } from "@/components/seo/SeoIcons";
import { CONTACT } from "@/lib/site-data";
import { SEO_HERO } from "@/lib/seo-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Hand-built SERP mockup — replaces the old stock photo with a live-feeling
   "rank #1" graphic: browser card, highlighted result, drawing sparkline,
   floating stat chips. Pure CSS/SVG + a few cheap GSAP tweens. */
function SerpPanel() {
  const root = useRef<HTMLDivElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(root.current, { y: 50, autoAlpha: 0, scale: 0.96, duration: 1, ease: "power3.out", delay: 0.4 });
      gsap.from(".sh2__spark-path", {
        strokeDashoffset: 420,
        duration: 1.6,
        ease: "power2.inOut",
        delay: 1,
      });
      gsap.to(".sh2__chip--a", { y: -10, duration: 2.6, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.2 });
      gsap.to(".sh2__chip--b", { y: 10, duration: 3, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.4 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative mx-auto w-full max-w-[520px]">
      {/* browser card */}
      <div className="relative overflow-hidden rounded-3xl border border-[var(--gd-line)] bg-white shadow-[0_30px_70px_rgba(12,36,61,0.12)]">
        {/* chrome */}
        <div className="flex items-center gap-2 border-b border-[var(--gd-line)] bg-[var(--gd-soft)] px-5 py-3">
          <span className="size-2.5 rounded-full bg-[#f26d6d]" />
          <span className="size-2.5 rounded-full bg-[#f2c94c]" />
          <span className="size-2.5 rounded-full bg-[#6dd58c]" />
          <span className="ml-3 flex flex-1 items-center gap-2 rounded-full border border-[var(--gd-line)] bg-white px-3.5 py-1.5 text-[0.72rem] text-[var(--gd-muted)]">
            <SeoIcon name="search" width={12} height={12} />
            best seo company in delhi
          </span>
        </div>

        <div className="space-y-3 p-5">
          {/* result #1 — highlighted */}
          <div className="relative rounded-2xl border border-[var(--gd-gold)]/40 bg-[var(--gd-gold-soft)] p-4">
            <span className="absolute -top-2.5 right-4 rounded-full bg-[linear-gradient(120deg,var(--gd-navy),var(--gd-blue))] px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-white">
              Rank #1
            </span>
            <p className="m-0 text-[0.68rem] text-[var(--gd-muted)]">digivanta.co</p>
            <p className="m-0 mt-0.5 text-[0.88rem] font-bold text-[var(--gd-navy)]">
              Digivanta — Best SEO Company in Delhi
            </p>
            <p className="m-0 mt-1 text-[0.72rem] leading-snug text-[var(--gd-muted)]">
              SEO services that build long-term online visibility…
            </p>
          </div>

          {/* skeleton results */}
          {[0, 1].map((i) => (
            <div key={i} className="rounded-2xl border border-[var(--gd-line)] p-4">
              <div className="h-2 w-24 rounded-full bg-[rgba(12,36,61,0.08)]" />
              <div className="mt-2 h-2.5 w-3/4 rounded-full bg-[rgba(12,36,61,0.12)]" />
              <div className="mt-2 h-2 w-1/2 rounded-full bg-[rgba(12,36,61,0.06)]" />
            </div>
          ))}

          {/* organic growth sparkline */}
          <div className="rounded-2xl border border-[var(--gd-line)] bg-[var(--gd-soft)] p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-[var(--gd-muted)]">
                Organic traffic
              </span>
              <span className="text-[0.72rem] font-bold text-[var(--gd-gold)]">12 months</span>
            </div>
            <svg viewBox="0 0 360 80" className="h-16 w-full" aria-hidden>
              <defs>
                <linearGradient id="seoSpark" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0C243D" />
                  <stop offset="100%" stopColor="#286FAB" />
                </linearGradient>
              </defs>
              <path
                className="sh2__spark-path"
                d="M4 70 C 50 66, 80 58, 110 52 S 170 44, 200 34 S 280 24, 320 12 L 356 6"
                fill="none"
                stroke="url(#seoSpark)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="420"
              />
              <circle cx="356" cy="6" r="4" fill="#b08d3f" />
            </svg>
          </div>
        </div>
      </div>

      {/* floating stat chips (kept from the original hero) */}
      <div className="sh2__chip--a absolute -left-4 -top-5 hidden rounded-2xl border border-[var(--gd-line)] bg-white/95 px-4 py-3 shadow-[0_14px_34px_rgba(12,36,61,0.12)] sm:block">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-[rgba(40,111,171,0.1)] text-[var(--gd-blue)]">
            <SeoIcon name="trendUp" width={20} height={20} />
          </span>
          <div>
            <strong className="block text-[1.2rem] font-extrabold leading-none text-[var(--gd-ink)]">+210%</strong>
            <span className="text-[0.7rem] text-[var(--gd-muted)]">Organic traffic</span>
          </div>
        </div>
      </div>
      <div className="sh2__chip--b absolute -bottom-5 -right-4 hidden rounded-2xl border border-[var(--gd-line)] bg-white/95 px-4 py-3 shadow-[0_14px_34px_rgba(12,36,61,0.12)] sm:block">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-[rgba(40,111,171,0.1)] text-[var(--gd-blue)]">
            <SeoIcon name="target" width={20} height={20} />
          </span>
          <div>
            <strong className="block text-[1.2rem] font-extrabold leading-none text-[var(--gd-ink)]">Top 3</strong>
            <span className="text-[0.7rem] text-[var(--gd-muted)]">Keyword rankings</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".sh2__eyebrow", { y: 24, autoAlpha: 0, duration: 0.7 })
        .from(".sh2__word", { yPercent: 120, rotateX: -80, autoAlpha: 0, duration: 0.9, stagger: 0.06, ease: "back.out(1.4)" }, "-=0.3")
        .from(".sh2__sub", { y: 24, autoAlpha: 0, duration: 0.7 }, "-=0.5")
        .from(".sh2__ctas > *", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".sh2__trust > *", { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, "-=0.4");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-24">
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
            <span className="sh2__eyebrow inline-flex items-center gap-2.5 rounded-full border border-[var(--gd-line)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gd-muted)] shadow-[0_4px_14px_rgba(12,36,61,0.05)]">
              <span className="size-2 rounded-full bg-[var(--gd-gold)] shadow-[0_0_10px_rgba(176,141,63,0.8)]" />
              {SEO_HERO.eyebrow}
            </span>

            <h1 className="gd-display mt-7 text-[clamp(2.2rem,5.4vw,3.9rem)] leading-[1.02] text-[var(--gd-ink)] [perspective:900px]">
              {SEO_HERO.h1.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-top">
                  <span className={"sh2__word mr-[0.28em] inline-block will-change-transform " + (w.grad ? "gd-grad" : "")}>
                    {w.t}
                  </span>
                </span>
              ))}
            </h1>

            <p className="sh2__sub mt-6 max-w-xl text-[1.02rem] leading-relaxed text-[var(--gd-muted)]">
              {SEO_HERO.sub}
            </p>

            <div className="sh2__ctas mt-8 flex items-center gap-2.5 sm:gap-4">
              <MagneticButton href="/contact">
                <span className="hidden sm:inline">{SEO_HERO.ctaPrimary}</span>
                <span className="sm:hidden">SEO Consultation</span>
                <ArrowRight />
              </MagneticButton>
              <MagneticButton href={CONTACT.whatsapp} external className="ag-btn--ghost">
                <WhatsApp width={17} height={17} className="hidden text-[#25d366] sm:inline" /> {SEO_HERO.ctaGhost}
              </MagneticButton>
            </div>

            {/* trust row */}
            <div className="sh2__trust mt-8 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-[var(--gd-line)] pt-6 sm:mt-12 sm:pt-7">
              <div className="flex items-center gap-2">
                <span className="flex text-[var(--gd-gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <SeoIcon key={i} name="star" width={16} height={16} />
                  ))}
                </span>
                <span className="text-[0.85rem] font-semibold text-[var(--gd-ink)]">4.9/5 Google rating</span>
              </div>
              <div>
                <strong className="gd-display block text-2xl text-[var(--gd-navy)]">100+</strong>
                <span className="text-[0.74rem] text-[var(--gd-muted)]">Happy Clients</span>
              </div>
              <div>
                <strong className="gd-display block text-2xl text-[var(--gd-navy)]">1+</strong>
                <span className="text-[0.74rem] text-[var(--gd-muted)]">Years experience</span>
              </div>
            </div>
          </div>

          {/* graphic */}
          <SerpPanel />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { MagneticButton } from "@/components/agency/primitives";
import { ArrowRight, WhatsApp } from "@/components/ui/Icons";
import { SeoIcon } from "@/components/seo/SeoIcons";
import { CONTACT } from "@/lib/site-data";
import { WEB_HERO } from "@/lib/web-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Web Architecture & Performance Panel — populates the right side of the hero */
function WebHeroPanel() {
  const root = useRef<HTMLDivElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(root.current, { y: 40, autoAlpha: 0, scale: 0.95, duration: 1, ease: "power3.out", delay: 0.3 });
      gsap.to(".wh-chip--a", { y: -8, duration: 2.8, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 0.5 });
      gsap.to(".wh-chip--b", { y: 8, duration: 3.2, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 0.8 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="wh-panel relative mx-auto w-full max-w-[500px] lg:max-w-[540px] pt-4 lg:pt-0">
      {/* Background Soft Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(40,111,171,0.15),transparent_70%)] blur-2xl"
      />

      {/* Floating Badge Chip A (Top Right) */}
      <div className="wh-chip--a absolute right-1 -top-3 sm:-right-2 sm:-top-4 z-20 flex items-center gap-2 rounded-full border border-[var(--gd-gold)]/40 bg-white/95 px-3 py-1.5 sm:px-4 sm:py-2 text-[0.68rem] sm:text-xs font-bold text-[var(--gd-navy)] shadow-[0_10px_25px_rgba(13,18,41,0.12)]">
        <span className="flex size-2 sm:size-2.5 items-center justify-center rounded-full bg-[var(--gd-gold)]">
          <span className="size-1 sm:size-1.5 animate-ping rounded-full bg-[var(--gd-gold)]" />
        </span>
        <span>⚡ 0.8s Core Web Vitals</span>
      </div>

      {/* Floating Badge Chip B (Bottom Left) */}
      <div className="wh-chip--b absolute left-1 -bottom-3 sm:-left-2 sm:-bottom-4 z-20 flex items-center gap-2 rounded-full border border-[var(--gd-blue)]/40 bg-white/95 px-3 py-1.5 sm:px-4 sm:py-2 text-[0.68rem] sm:text-xs font-bold text-[var(--gd-navy)] shadow-[0_10px_25px_rgba(13,18,41,0.12)]">
        <span className="size-1.5 sm:size-2 rounded-full bg-[var(--gd-blue)]" />
        <span>🛡️ Technical SEO Ready</span>
      </div>

      {/* Main Glassmorphism Browser Window Card */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[var(--gd-line)] bg-white/95 shadow-[0_30px_70px_rgba(12,36,61,0.12)]">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between border-b border-[var(--gd-line)] bg-[var(--gd-soft)]/80 px-3.5 py-2.5 sm:px-5 sm:py-3.5">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="size-2.5 sm:size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 sm:size-3 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 sm:size-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex flex-1 items-center justify-center px-2 sm:px-4">
            <div className="flex w-full max-w-[240px] items-center gap-1.5 sm:gap-2 rounded-full border border-[var(--gd-line)] bg-white px-3 py-1 text-[0.68rem] sm:text-[0.72rem] text-[var(--gd-muted)] font-mono">
              <span className="text-[var(--gd-blue)]">🔒</span>
              <span className="truncate">digivanta.co/web-development</span>
            </div>
          </div>
          <div className="size-2.5 sm:size-3" />
        </div>

        {/* Dashboard / Preview Body */}
        <div className="space-y-3.5 p-4 sm:p-6">
          {/* Header Preview Banner */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-[var(--gd-line)] bg-gradient-to-br from-[#0C243D] via-[#102a48] to-[#1e4570] p-4 sm:p-5 text-white shadow-inner">
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-white/10 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-wider text-[var(--gd-gold)]">
                Next.js 16 + React 19
              </span>
              <span className="flex items-center gap-1.5 text-[0.62rem] sm:text-[0.68rem] text-emerald-400 font-semibold">
                <span className="size-1.5 sm:size-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Architecture
              </span>
            </div>
            <h4 className="gd-display m-0 mt-2.5 text-base sm:text-lg font-bold tracking-tight text-white">
              Custom Web Development
            </h4>
            <p className="m-0 mt-1 text-[0.7rem] sm:text-[0.75rem] text-white/80 leading-relaxed">
              Fast, responsive, and conversion-focused web solutions engineered for business growth.
            </p>
          </div>

          {/* Speed & Performance Gauges Grid */}
          <div className="grid gap-5 grid-cols-3">
            <div className="rounded-xl sm:rounded-2xl border border-[var(--gd-line)] bg-[var(--gd-soft)] p-2.5 sm:p-3.5 text-center">
              <div className="gd-display text-base sm:text-xl font-extrabold text-[var(--gd-navy)]">99/100</div>
              <div className="mt-0.5 text-[0.58rem] sm:text-[0.65rem] font-medium text-[var(--gd-muted)] uppercase tracking-wider truncate">Performance</div>
            </div>
            <div className="rounded-xl sm:rounded-2xl border border-[var(--gd-line)] bg-[var(--gd-soft)] p-2.5 sm:p-3.5 text-center">
              <div className="gd-display text-base sm:text-xl font-extrabold text-[var(--gd-blue)]">0.8s</div>
              <div className="mt-0.5 text-[0.58rem] sm:text-[0.65rem] font-medium text-[var(--gd-muted)] uppercase tracking-wider truncate">LCP Speed</div>
            </div>
            <div className="rounded-xl sm:rounded-2xl border border-[var(--gd-line)] bg-[var(--gd-soft)] p-2.5 sm:p-3.5 text-center">
              <div className="gd-display text-base sm:text-xl font-extrabold text-[var(--gd-gold)]">0.00</div>
              <div className="mt-0.5 text-[0.58rem] sm:text-[0.65rem] font-medium text-[var(--gd-muted)] uppercase tracking-wider truncate">CLS Shift</div>
            </div>
          </div>

          {/* Live Code & Tech Stack Indicators */}
          <div className="rounded-xl sm:rounded-2xl border border-[var(--gd-line)] bg-white p-3.5 sm:p-4">
            <div className="mb-2 flex items-center justify-between text-[0.65rem] sm:text-[0.7rem] font-semibold text-[var(--gd-muted)]">
              <span>ENTERPRISE STACK</span>
              <span className="text-[var(--gd-blue)]">Optimal UX</span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["Next.js App Router", "Tailwind CSS", "TypeScript", "GSAP Motion", "Core Web Vitals"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--gd-line)] bg-[var(--gd-soft)] px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.68rem] sm:text-[0.72rem] font-medium text-[var(--gd-ink)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WebHeroSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".web2__eyebrow", { y: 24, autoAlpha: 0, duration: 0.7 })
        .from(".web2__word", { yPercent: 120, rotateX: -80, autoAlpha: 0, duration: 0.9, stagger: 0.06, ease: "back.out(1.4)" }, "-=0.3")
        .from(".web2__sub", { y: 24, autoAlpha: 0, duration: 0.7 }, "-=0.5")
        .from(".web2__ctas > *", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".web2__trust > *", { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, "-=0.4");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden pt-20 pb-4 sm:pt-24 lg:pt-28 lg:pb-10">
      {/* Radial soft glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_460px_at_88%_-10%,rgba(40,111,171,0.08),transparent_60%),radial-gradient(700px_420px_at_-10%_110%,rgba(176,141,63,0.08),transparent_55%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--gd-line)]" />

      <div className="container relative z-10">
        <div className="grid gap-5 items-center lg:grid-cols-[1.05fr_0.95fr]">
          {/* copy */}
          <div>
            <span className="web2__eyebrow inline-flex items-center gap-2.5 rounded-full border border-[var(--gd-line)] bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[var(--gd-muted)] shadow-[0_4px_14px_rgba(12,36,61,0.05)]">
              <span className="size-2 rounded-full bg-[var(--gd-gold)] shadow-[0_0_10px_rgba(176,141,63,0.8)]" />
              {WEB_HERO.eyebrow}
            </span>

            <h1 className="gd-display mt-5 sm:mt-7 text-[clamp(2rem,5.4vw,3.9rem)] leading-[1.02] text-[var(--gd-ink)] [perspective:900px]">
              {WEB_HERO.h1.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-top">
                  <span className={"web2__word mr-[0.24em] sm:mr-[0.28em] inline-block will-change-transform " + (w.grad ? "gd-grad" : "")}>
                    {w.t}
                  </span>
                </span>
              ))}
            </h1>

            <p className="web2__sub mt-4 sm:mt-6 max-w-xl text-[0.95rem] sm:text-[1.02rem] leading-relaxed text-[var(--gd-muted)]">
              {WEB_HERO.sub}
            </p>

            <div className="web2__ctas mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <MagneticButton href="/contact">
                <span className="hidden sm:inline">{WEB_HERO.primaryCta}</span>
                <span className="sm:hidden">Web Quote</span>
                <ArrowRight />
              </MagneticButton>
              <MagneticButton href={CONTACT.whatsapp} external className="ag-btn--ghost">
                <WhatsApp width={17} height={17} className="text-[#25d366]" /> {WEB_HERO.ghostCta}
              </MagneticButton>
            </div>

            {/* trust row */}
            <div className="web2__trust mt-8 grid gap-5 grid-cols-2 border-t border-[var(--gd-line)] pt-6 sm:mt-12 sm:grid-cols-5 sm:pt-7">
              <div className="flex flex-col items-start gap-1">
                <span className="flex text-[var(--gd-gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <SeoIcon key={i} name="star" width={15} height={15} />
                  ))}
                </span>
                <span className="text-[0.78rem] sm:text-[0.82rem] font-semibold text-[var(--gd-ink)]">4.9/5 Google rating</span>
              </div>
              {WEB_HERO.meta.map((m, idx) => (
                <div key={m.l} className={`flex flex-col items-start ${idx === 3 ? "col-span-2 sm:col-span-1" : ""}`}>
                  <strong className="gd-display text-xl sm:text-2xl text-[var(--gd-navy)]">{m.n}</strong>
                  <span className="text-[0.7rem] sm:text-[0.72rem] leading-snug text-[var(--gd-muted)]">{m.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* graphic */}
          <div className="flex justify-center lg:justify-end">
            <WebHeroPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

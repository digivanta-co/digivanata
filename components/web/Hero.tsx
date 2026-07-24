"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { MagneticButton } from "@/components/agency/primitives";
import { ArrowRight, Spark } from "@/components/ui/Icons";
import { WEB_HERO } from "@/lib/web-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Character flip animation helper */
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
      <div className="wh-chip--a absolute -right-2 -top-4 z-20 flex items-center gap-2.5 rounded-full border border-[var(--gd-gold)]/40 bg-white/95 px-4 py-2 text-xs font-bold text-[var(--gd-navy)] shadow-[0_10px_25px_rgba(13,18,41,0.12)] backdrop-blur-md">
        <span className="flex size-2.5 items-center justify-center rounded-full bg-[var(--gd-gold)]">
          <span className="size-1.5 animate-ping rounded-full bg-[var(--gd-gold)]" />
        </span>
        <span>⚡ 0.8s Core Web Vitals</span>
      </div>

      {/* Floating Badge Chip B (Bottom Left) */}
      <div className="wh-chip--b absolute -bottom-4 -left-2 z-20 flex items-center gap-2.5 rounded-full border border-[var(--gd-blue)]/40 bg-white/95 px-4 py-2 text-xs font-bold text-[var(--gd-navy)] shadow-[0_10px_25px_rgba(13,18,41,0.12)] backdrop-blur-md">
        <span className="size-2 rounded-full bg-[var(--gd-blue)]" />
        <span>🛡️ 100% Technical SEO Ready</span>
      </div>

      {/* Main Glassmorphism Browser Window Card */}
      <div className="relative overflow-hidden rounded-3xl border border-[var(--gd-line)] bg-white/95 shadow-[0_30px_70px_rgba(12,36,61,0.12)] backdrop-blur-sm">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between border-b border-[var(--gd-line)] bg-[var(--gd-soft)]/80 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex flex-1 items-center justify-center px-4">
            <div className="flex w-full max-w-[260px] items-center gap-2 rounded-full border border-[var(--gd-line)] bg-white px-3.5 py-1 text-[0.72rem] text-[var(--gd-muted)] font-mono">
              <span className="text-[var(--gd-blue)]">🔒</span>
              <span className="truncate">digivanta.com/web-dev</span>
            </div>
          </div>
          <div className="size-3" />
        </div>

        {/* Dashboard / Preview Body */}
        <div className="space-y-4 p-6">
          {/* Header Preview Banner */}
          <div className="relative overflow-hidden rounded-2xl border border-[var(--gd-line)] bg-gradient-to-br from-[#0C243D] via-[#102a48] to-[#1e4570] p-5 text-white shadow-inner">
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--gd-gold)] backdrop-blur-sm">
                Next.js 16 + React 19
              </span>
              <span className="flex items-center gap-1.5 text-[0.68rem] text-emerald-400 font-semibold">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Architecture
              </span>
            </div>
            <h4 className="gd-display m-0 mt-3 text-lg font-bold tracking-tight text-white">
              Custom Web Development
            </h4>
            <p className="m-0 mt-1 text-[0.75rem] text-white/80 leading-relaxed">
              Fast, responsive, and conversion-focused web solutions engineered for business growth.
            </p>
          </div>

          {/* Speed & Performance Gauges Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-[var(--gd-line)] bg-[var(--gd-soft)] p-3.5 text-center">
              <div className="gd-display text-xl font-extrabold text-[var(--gd-navy)]">99/100</div>
              <div className="mt-0.5 text-[0.65rem] font-medium text-[var(--gd-muted)] uppercase tracking-wider">Performance</div>
            </div>
            <div className="rounded-2xl border border-[var(--gd-line)] bg-[var(--gd-soft)] p-3.5 text-center">
              <div className="gd-display text-xl font-extrabold text-[var(--gd-blue)]">0.8s</div>
              <div className="mt-0.5 text-[0.65rem] font-medium text-[var(--gd-muted)] uppercase tracking-wider">LCP Speed</div>
            </div>
            <div className="rounded-2xl border border-[var(--gd-line)] bg-[var(--gd-soft)] p-3.5 text-center">
              <div className="gd-display text-xl font-extrabold text-[var(--gd-gold)]">0.00</div>
              <div className="mt-0.5 text-[0.65rem] font-medium text-[var(--gd-muted)] uppercase tracking-wider">CLS Shift</div>
            </div>
          </div>

          {/* Live Code & Tech Stack Indicators */}
          <div className="rounded-2xl border border-[var(--gd-line)] bg-white p-4">
            <div className="mb-2.5 flex items-center justify-between text-[0.7rem] font-semibold text-[var(--gd-muted)]">
              <span>ENTERPRISE STACK</span>
              <span className="text-[var(--gd-blue)]">Optimal UX</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Next.js App Router", "Tailwind CSS", "TypeScript", "GSAP Motion", "Core Web Vitals"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--gd-line)] bg-[var(--gd-soft)] px-3 py-1 text-[0.72rem] font-medium text-[var(--gd-ink)]"
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
      {/* Radial soft glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_460px_at_85%_-10%,rgba(40,111,171,0.08),transparent_60%),radial-gradient(700px_420px_at_-10%_110%,rgba(176,141,63,0.08),transparent_55%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--gd-line)]" />

      <div className="container relative z-10 grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        {/* Left Column: Copy & CTAs */}
        <div>
          <span className="gd-hero__eyebrow mb-7 inline-flex items-center gap-2.5 rounded-full border border-[var(--gd-line)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gd-muted)] shadow-[0_4px_14px_rgba(13,18,41,0.05)]">
            <span className="size-2 rounded-full bg-[var(--gd-gold)] shadow-[0_0_10px_rgba(176,141,63,0.8)]" />
            {WEB_HERO.badge}
          </span>

          <h1 className="gd-display m-0 text-[clamp(2.4rem,6vw,4.8rem)] [perspective:900px]">
            <FlipLine text={WEB_HERO.titleLines[0]} variant="solid" />
            <FlipLine text={WEB_HERO.titleLines[1]} variant="outline" />
            <FlipLine text={WEB_HERO.titleLines[2]} variant="gradient" />
          </h1>

          <p className="gd-hero__sub mt-7 max-w-xl text-[1.05rem] leading-relaxed text-[#334155]">
            {WEB_HERO.sub}
          </p>

          <div className="gd-hero__ctas mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="#web-contact">
              {WEB_HERO.primaryCta} <ArrowRight />
            </MagneticButton>
            <MagneticButton href="#web-services" className="ag-btn--ghost">
              <Spark /> {WEB_HERO.ghostCta}
            </MagneticButton>
          </div>

          <div className="gd-hero__meta mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-[var(--gd-line)] pt-8">
            {WEB_HERO.meta.map((m) => (
              <div key={m.l}>
                <div className="gd-display text-2xl font-extrabold text-[var(--gd-navy)]">{m.n}</div>
                <div className="mt-1 text-sm font-medium text-[var(--gd-muted)]">{m.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Web Architecture & Performance Panel */}
        <div className="flex justify-center lg:justify-end">
          <WebHeroPanel />
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--gd-muted)]">
        Scroll to Explore
      </div>
    </section>
  );
}

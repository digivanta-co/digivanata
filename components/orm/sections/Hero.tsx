"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { MagneticButton } from "@/components/agency/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { SeoIcon } from "@/components/seo/SeoIcons";
import { useMarquee } from "@/hooks/animations";
import { ORM_HERO, ORM_INTRO } from "@/lib/orm-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Gold star row */
function Stars({ n = 5, dim = false }: { n?: number; dim?: boolean }) {
  return (
    <span className={"flex gap-0.5 " + (dim ? "text-[rgba(12,36,61,0.18)]" : "text-[var(--gd-gold)]")}>
      {Array.from({ length: n }).map((_, i) => (
        <SeoIcon key={i} name="star" width={13} height={13} />
      ))}
    </span>
  );
}

/* Reputation Monitor — the page's signature graphic. A live brand-health
   panel: animated score ring, sentiment split, and a review stream where a
   flagged 1★ review is shown "handled". Pure CSS/SVG + cheap GSAP. */
function ReputationMonitor() {
  const root = useRef<HTMLDivElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(root.current, { y: 50, autoAlpha: 0, scale: 0.96, duration: 1, ease: "power3.out", delay: 0.4 });
      // score ring sweeps to 92/100
      const ring = { v: 0 };
      const circle = root.current!.querySelector<SVGCircleElement>(".orm-ring__val");
      const num = root.current!.querySelector<HTMLElement>(".orm-ring__num");
      const C = 2 * Math.PI * 34;
      gsap.to(ring, {
        v: 92,
        duration: 1.6,
        ease: "power2.out",
        delay: 0.9,
        onUpdate: () => {
          if (circle) circle.style.strokeDashoffset = String(C - (C * ring.v) / 100);
          if (num) num.textContent = String(Math.round(ring.v));
        },
      });
      gsap.from(".orm-sent__seg", { scaleX: 0, transformOrigin: "left center", duration: 1, stagger: 0.12, ease: "power3.out", delay: 1 });
      gsap.from(".orm-rev", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.18, ease: "power3.out", delay: 1.2 });
      gsap.to(".orm-chip--a", { y: -10, duration: 2.6, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.4 });
      gsap.to(".orm-chip--b", { y: 10, duration: 3, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.6 });
    }, root);
    return () => ctx.revert();
  }, []);

  const C = 2 * Math.PI * 34;

  return (
    <div ref={root} className="relative mx-auto w-full max-w-[520px]">
      <div className="relative overflow-hidden rounded-3xl border border-[var(--gd-line)] bg-white shadow-[0_30px_70px_rgba(12,36,61,0.12)]">
        {/* panel header */}
        <div className="flex items-center justify-between border-b border-[var(--gd-line)] bg-[var(--gd-soft)] px-5 py-3.5">
          <span className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[var(--gd-ink)]">
            Reputation Monitor
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(37,180,110,0.1)] px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-wider text-[#1d9e63]">
            <span className="size-1.5 animate-pulse rounded-full bg-[#25b46e]" />
            Live
          </span>
        </div>

        <div className="p-5">
          {/* score + sentiment */}
          <div className="flex items-center gap-5">
            <div className="relative grid size-24 shrink-0 place-items-center">
              <svg viewBox="0 0 80 80" className="absolute inset-0 -rotate-90" aria-hidden>
                <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(12,36,61,0.08)" strokeWidth="7" />
                <circle
                  className="orm-ring__val"
                  cx="40" cy="40" r="34" fill="none"
                  stroke="url(#ormRing)" strokeWidth="7" strokeLinecap="round"
                  strokeDasharray={C} strokeDashoffset={C}
                />
                <defs>
                  <linearGradient id="ormRing" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0C243D" />
                    <stop offset="70%" stopColor="#286FAB" />
                    <stop offset="100%" stopColor="#b08d3f" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="text-center">
                <span className="orm-ring__num gd-display block text-2xl leading-none text-[var(--gd-ink)]">0</span>
                <span className="text-[0.58rem] font-bold uppercase tracking-wider text-[var(--gd-muted)]">Brand health</span>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-2 flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--gd-muted)]">
                <span>Sentiment</span>
                <span className="text-[var(--gd-gold)]">30 days</span>
              </div>
              <div className="flex h-2.5 w-full gap-1 overflow-hidden rounded-full">
                <span className="orm-sent__seg h-full w-[76%] rounded-full bg-[linear-gradient(90deg,#0C243D,#286FAB)]" />
                <span className="orm-sent__seg h-full w-[16%] rounded-full bg-[rgba(12,36,61,0.18)]" />
                <span className="orm-sent__seg h-full w-[8%] rounded-full bg-[#e0655a]" />
              </div>
              <div className="mt-2 flex gap-4 text-[0.64rem] font-medium text-[var(--gd-muted)]">
                <span><b className="text-[var(--gd-ink)]">76%</b> Positive</span>
                <span><b className="text-[var(--gd-ink)]">16%</b> Neutral</span>
                <span><b className="text-[var(--gd-ink)]">8%</b> Negative</span>
              </div>
            </div>
          </div>

          {/* review stream */}
          <div className="mt-5 space-y-3">
            <div className="orm-rev rounded-2xl border border-[var(--gd-line)] p-4">
              <div className="flex items-center justify-between">
                <Stars />
                <span className="text-[0.64rem] font-semibold text-[var(--gd-muted)]">Google · new</span>
              </div>
              <div className="mt-2.5 h-2 w-3/4 rounded-full bg-[rgba(12,36,61,0.1)]" />
              <div className="mt-1.5 h-2 w-1/2 rounded-full bg-[rgba(12,36,61,0.06)]" />
            </div>
            <div className="orm-rev rounded-2xl border border-[#e0655a]/30 bg-[#e0655a]/[0.04] p-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Stars n={1} />
                  <Stars n={4} dim />
                </span>
                <span className="rounded-full bg-[var(--gd-gold-soft)] px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-[var(--gd-gold)]">
                  ✓ Response drafted
                </span>
              </div>
              <div className="mt-2.5 h-2 w-2/3 rounded-full bg-[rgba(12,36,61,0.1)]" />
            </div>
          </div>
        </div>
      </div>

      {/* floating chips */}
      <div className="orm-chip--a absolute -left-4 -top-5 hidden rounded-2xl border border-[var(--gd-line)] bg-white/95 px-4 py-3 shadow-[0_14px_34px_rgba(12,36,61,0.12)] sm:block">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-[var(--gd-gold-soft)] text-[var(--gd-gold)]">
            <SeoIcon name="star" width={19} height={19} />
          </span>
          <div>
            <strong className="block text-[1.15rem] font-extrabold leading-none text-[var(--gd-ink)]">90%</strong>
            <span className="text-[0.68rem] text-[var(--gd-muted)]">check reviews first</span>
          </div>
        </div>
      </div>
      <div className="orm-chip--b absolute -bottom-5 -right-4 hidden rounded-2xl border border-[var(--gd-line)] bg-white/95 px-4 py-3 shadow-[0_14px_34px_rgba(12,36,61,0.12)] sm:block">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-[rgba(40,111,171,0.1)] text-[var(--gd-blue)]">
            <SeoIcon name="shield" width={19} height={19} />
          </span>
          <div>
            <strong className="block text-[1.15rem] font-extrabold leading-none text-[var(--gd-ink)]">24/7</strong>
            <span className="text-[0.68rem] text-[var(--gd-muted)]">brand monitoring</span>
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
      tl.from(".orm-h__eyebrow", { y: 24, autoAlpha: 0, duration: 0.7 })
        .from(".orm-h__word", { yPercent: 120, rotateX: -80, autoAlpha: 0, duration: 0.9, stagger: 0.07, ease: "back.out(1.4)" }, "-=0.3")
        .from(".orm-h__tag", { y: 22, autoAlpha: 0, duration: 0.7 }, "-=0.5")
        .from(".orm-h__sub", { y: 22, autoAlpha: 0, duration: 0.7 }, "-=0.5")
        .from(".orm-h__ctas > *", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, "-=0.4");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_460px_at_88%_-10%,rgba(40,111,171,0.08),transparent_60%),radial-gradient(700px_420px_at_-10%_110%,rgba(176,141,63,0.08),transparent_55%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--gd-line)]" />

      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="orm-h__eyebrow inline-flex items-center gap-2.5 rounded-full border border-[var(--gd-line)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gd-muted)] shadow-[0_4px_14px_rgba(12,36,61,0.05)]">
              <span className="size-2 rounded-full bg-[var(--gd-gold)] shadow-[0_0_10px_rgba(176,141,63,0.8)]" />
              {ORM_HERO.badge}
            </span>

            <h1 className="gd-display mt-7 text-[clamp(2.3rem,5.8vw,4.2rem)] leading-[1.02] text-[var(--gd-ink)] [perspective:900px]">
              {ORM_HERO.titleLines.map((line, li) => (
                <span key={li} className="block overflow-hidden pb-[0.08em]">
                  <span className={"orm-h__word inline-block will-change-transform " + (li === 1 ? "gd-grad" : "")}>
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p className="orm-h__tag mt-5 border-l-2 border-[var(--gd-gold)] pl-4 text-[1.02rem] font-semibold italic text-[var(--gd-ink)]">
              {ORM_HERO.tagline}
            </p>

            <p className="orm-h__sub mt-5 max-w-xl text-[1rem] leading-relaxed text-[var(--gd-muted)]">
              {ORM_HERO.sub}
            </p>

            <div className="orm-h__ctas mt-8 flex items-center gap-2.5 sm:gap-4">
              <MagneticButton href="#contact">
                <span className="hidden sm:inline">{ORM_HERO.primaryCta}</span>
                <span className="sm:hidden">Protect Reputation</span>
                <ArrowRight />
              </MagneticButton>
              <MagneticButton href="#orm-services" className="ag-btn--ghost">
                <span className="hidden sm:inline">{ORM_HERO.ghostCta}</span>
                <span className="sm:hidden">ORM Services</span>
              </MagneticButton>
            </div>
          </div>

          <ReputationMonitor />
        </div>
      </div>
    </section>
  );
}

/* Platform ticker — where reputations are made (and monitored). */
export function PlatformTicker() {
  const row = useMarquee<HTMLDivElement>({ duration: 26 });
  const doubled = [...ORM_HERO.platforms, ...ORM_HERO.platforms];
  return (
    <section className="relative overflow-hidden border-y border-[var(--gd-line)] bg-[var(--gd-soft)] py-5" aria-label="Platforms we monitor">
      <div className="[mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div ref={row} className="flex w-max items-center gap-3">
          {doubled.map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--gd-line)] bg-white px-5 py-2 text-sm font-semibold text-[var(--gd-ink)]"
            >
              <span className="text-[var(--gd-gold)]">
                <SeoIcon name="star" width={13} height={13} />
              </span>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Editorial intro — the three "that's where ORM comes in" notes. */
export function IntroSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".orm-intro__item", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-12 sm:py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {ORM_INTRO.paragraphs.map((p, i) => (
            <div key={i} className="orm-intro__item border-t-2 border-[var(--gd-line)] pt-5 transition-colors duration-300 hover:border-[var(--gd-gold)]">
              <span className="gd-display text-xs text-[var(--gd-gold)]">0{i + 1}</span>
              <p className="mb-0 mt-3 text-[0.98rem] leading-relaxed text-[var(--gd-muted)]">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

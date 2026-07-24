"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CONTACT } from "@/lib/site-data";
import { RD_HERO_WORDS, RD_PAGE_TITLE } from "@/lib/redesign-data";
import { RdMagnetic } from "./primitives";
import { ArrowRight } from "@/components/ui/Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function RdHero() {
  const root = useRef<HTMLElement | null>(null);
  const blobs = useRef<HTMLDivElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const growth = root.current!.querySelector<SVGPathElement>(".rd-hero__growth");
      if (growth) {
        const len = growth.getTotalLength();
        gsap.set(growth, { strokeDasharray: len, strokeDashoffset: len });
      }
      const uline = root.current!.querySelector<SVGPathElement>(".rd-hero__uline");
      if (uline) {
        const len = uline.getTotalLength();
        gsap.set(uline, { strokeDasharray: len, strokeDashoffset: len });
      }
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".rd-hero__eyebrow", { y: 20, autoAlpha: 0, duration: 0.6 })
        .from(
          ".rd-hero__char",
          { yPercent: 120, rotate: 8, transformOrigin: "0% 100%", autoAlpha: 0, duration: 0.9, stagger: 0.03 },
          "-=0.2"
        )
        .from(".rd-hero__title", { y: 20, autoAlpha: 0, duration: 0.7 }, "-=0.5")
        .from(".rd-hero__cta > *", { y: 22, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".rd-hero__viz", { autoAlpha: 0, x: 40, duration: 1 }, "-=0.8")
        .from(".rd-hero__bar", { scaleY: 0, transformOrigin: "bottom", duration: 0.8, stagger: 0.1 }, "-=0.6");
      if (growth) tl.to(growth, { strokeDashoffset: 0, duration: 1, ease: "power2.out" }, "-=0.5");
      if (uline) tl.to(uline, { strokeDashoffset: 0, duration: 0.7, ease: "power2.inOut" }, "-=0.9");
      tl.from(
        ".rd-hero__pt",
        { scale: 0, transformOrigin: "50% 50%", duration: 0.4, ease: "back.out(2.5)", stagger: 0.07 },
        "-=0.7"
      ).from(
        ".rd-hero__pill",
        { scale: 0, autoAlpha: 0, duration: 0.5, ease: "back.out(2)" },
        "-=0.3"
      );

      // last data point keeps pulsing — "live" growth
      gsap.to(".rd-hero__pt:last-of-type", {
        scale: 1.6,
        transformOrigin: "50% 50%",
        duration: 0.9,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2.4,
      });

      // hero content drifts up + fades slightly as you scroll away (depth)
      gsap.to(".rd-hero__parallax", {
        yPercent: -8,
        autoAlpha: 0.25,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      // blobs sink slower than the content — parallax layering
      if (blobs.current)
        gsap.to(blobs.current, {
          y: 120,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
    }, root);
    return () => ctx.revert();
  }, []);

  // mouse parallax
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = blobs.current;
    if (!el) return;
    const kids = Array.from(el.children) as HTMLElement[];
    const onMove = (e: MouseEvent) => {
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      kids.forEach((n, i) => {
        gsap.to(n, { x: cx * (i + 1) * 24, y: cy * (i + 1) * 24, duration: 0.9, ease: "power2.out" });
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={root}
      className="rd-hero rd-grid relative flex min-h-[92svh] items-center overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-14"
    >
      <div ref={blobs} aria-hidden className="pointer-events-none absolute inset-0">
        <div className="rd-blob rd-blob--blue rd-blob--float left-[6%] top-[16%] size-[34vw] max-w-[520px] opacity-70" />
        <div className="rd-blob rd-blob--gold rd-blob--float bottom-[10%] left-[38%] size-[24vw] max-w-[360px]" style={{ animationDelay: "-7s" }} />
      </div>

      {/* two-column at every size so the phone layout mirrors desktop */}
      <div className="rd-hero__parallax container relative z-10 grid grid-cols-[1.15fr_0.85fr] items-center gap-4 sm:gap-8 lg:gap-14">
        {/* copy */}
        <div>

          {/* Decorative oversized wordmark */}
          <div aria-hidden className="rd-display rd-hero__words text-[var(--rd-ink)]">
            {RD_HERO_WORDS.map((w, wi) => (
              <span key={wi} className="relative block">
                <span className="block overflow-hidden">
                <span className="block">
                  {Array.from(w).map((ch, ci) => (
                    <span
                      key={ci}
                      className={
                        "rd-hero__char inline-block " +
                        (wi === 3 ? "text-[var(--rd-blue)]" : "")
                      }
                      style={{ whiteSpace: ch === " " ? "pre" : "normal" }}
                    >
                      {ch === " " ? " " : ch}
                    </span>
                  ))}
                </span>
                </span>
                {/* self-drawing gold underline beneath the accent word */}
                {wi === 3 && (
                  <svg
                    aria-hidden
                    viewBox="0 0 300 16"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1 left-0 h-[0.12em] w-[62%]"
                  >
                    <path
                      className="rd-hero__uline"
                      d="M4 11 C 80 3, 210 4, 296 9"
                      fill="none"
                      stroke="#C9A227"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </span>
            ))}
          </div>

          {/* Exact SEO H1 — preserved verbatim */}
          <h1 className="rd-hero__title mt-4 max-w-xl text-xs font-medium leading-relaxed text-[var(--rd-muted)] sm:mt-7 sm:text-lg lg:text-xl">
            {RD_PAGE_TITLE}
          </h1>

          <div className="rd-hero__cta mt-5 flex flex-wrap items-center gap-2.5 sm:mt-9 sm:gap-4">
            <RdMagnetic href="#contact">
              Get a Free Consultation <ArrowRight />
            </RdMagnetic>
            <RdMagnetic href={CONTACT.whatsapp} external className="rd-btn--ghost">
              Talk on WhatsApp
            </RdMagnetic>
          </div>
        </div>

        {/* animated digital-growth SVG */}
        <div className="rd-hero__viz relative mx-auto w-full max-w-[440px]">
          {/* slow-rotating dashed ring behind the card */}
          <svg
            aria-hidden
            viewBox="0 0 200 200"
            className="absolute -right-5 -top-5 size-20 text-[var(--rd-blue)]/25 sm:-right-12 sm:-top-12 sm:size-44"
          >
            <g className="rd-orbit-spin">
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 10" />
              <circle cx="100" cy="10" r="4" fill="#C9A227" />
            </g>
          </svg>
          <div className="rd-glass rd-float-slow p-3.5 sm:p-7">
            <div className="mb-3 flex items-center justify-between sm:mb-6">
              <span className="text-[0.68rem] font-semibold text-[var(--rd-ink)] sm:text-sm">
                Growth Snapshot
              </span>
              <span className="rd-hero__pill rounded-full bg-[var(--rd-blue-soft)] px-2 py-0.5 text-[0.6rem] font-semibold text-[var(--rd-blue)] sm:px-3 sm:py-1 sm:text-xs">
                +142%
              </span>
            </div>
            <svg viewBox="0 0 320 200" className="w-full" role="img" aria-label="Digital growth chart">
              <defs>
                <linearGradient id="rdBar" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#286FAB" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#286FAB" />
                </linearGradient>
              </defs>
              {[60, 95, 80, 130, 115, 165].map((h, i) => (
                <rect
                  key={i}
                  className="rd-hero__bar"
                  x={20 + i * 50}
                  y={190 - h}
                  width="30"
                  height={h}
                  rx="6"
                  fill="url(#rdBar)"
                />
              ))}
              <path
                className="rd-hero__growth"
                d="M35 150 L85 120 L135 130 L185 80 L235 92 L300 40"
                fill="none"
                stroke="#C9A227"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {[[35,150],[85,120],[135,130],[185,80],[235,92],[300,40]].map(([x,y],i)=>(
                <circle key={i} className="rd-hero__pt" cx={x} cy={y} r="4" fill="#C9A227" />
              ))}
            </svg>
            <div className="mt-3 grid grid-cols-3 gap-1.5 text-center sm:mt-6 sm:gap-3">
              {[
                { n: "800+", l: "Clients" },
                { n: "16+", l: "Years" },
                { n: "3.2×", l: "ROAS" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-[var(--rd-gray)] py-1.5 sm:py-3">
                  <div className="rd-display text-xs text-[var(--rd-ink)] sm:text-xl">{s.n}</div>
                  <div className="text-[0.55rem] text-[var(--rd-muted)] sm:text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[var(--rd-muted)]">
          Scroll
        </span>
        <span aria-hidden className="rd-scrolldown" />
      </div>
    </section>
  );
}

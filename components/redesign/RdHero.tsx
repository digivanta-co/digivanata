"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CONTACT } from "@/lib/site-data";
import { RD_HERO_WORDS, RD_PAGE_TITLE } from "@/lib/redesign-data";
import { RdMagnetic } from "./primitives";
import { ArrowRight } from "@/components/ui/Icons";
import Image from "next/image";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;


const C = 220;
const RINGS = {
  outer: { rx: 178, ry: 106 },
  mid: { rx: 128, ry: 76 },
  inner: { rx: 80, ry: 48 },
};


type Badge = { icon: string; label: string; ring: keyof typeof RINGS; startDeg: number; period: number; dir: 1 | -1 };
const BADGES: Badge[] = [
  { icon: "/googleads.svg", label: "Google Ads", ring: "outer", startDeg: -58, period: 28, dir: 1 },
  { icon: "/hubspot.svg", label: "HubSpot", ring: "outer", startDeg: 122, period: 28, dir: 1 },
  { icon: "/googleanalytics.svg", label: "Google Analytics", ring: "mid", startDeg: 34, period: 18, dir: -1 },
  { icon: "/meta.svg", label: "Meta", ring: "mid", startDeg: 214, period: 18, dir: -1 },
  { icon: "/openai-chatgpt.svg", label: "ChatGPT", ring: "inner", startDeg: -90, period: 12, dir: 1 },
];


const NODES = [
  { ring: "outer" as const, startDeg: 60, period: 34, dir: 1 as const, c: "#286FAB" },
  { ring: "mid" as const, startDeg: 150, period: 22, dir: -1 as const, c: "#C9A227" },
  { ring: "inner" as const, startDeg: 20, period: 15, dir: 1 as const, c: "#286FAB" },
];

export default function RdHero() {
  const root = useRef<HTMLElement | null>(null);
  const blobs = useRef<HTMLDivElement | null>(null);
  const stage = useRef<HTMLDivElement | null>(null);

  useIso(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const scope = stage.current!;
      const badgeEls = gsap.utils.toArray<HTMLElement>("[data-badge]", scope);
      const nodeEls = gsap.utils.toArray<SVGGElement>("[data-node]", scope);

      /* place an HTML badge (left/top %) or an SVG node (transform) on an ellipse */
      const placeBadge = (el: HTMLElement, r: { rx: number; ry: number }, ang: number) => {
        el.style.left = `${((C + r.rx * Math.cos(ang)) / 440) * 100}%`;
        el.style.top = `${((C + r.ry * Math.sin(ang)) / 440) * 100}%`;
      };
      const placeNode = (el: SVGGElement, r: { rx: number; ry: number }, ang: number) => {
        el.setAttribute("transform", `translate(${C + r.rx * Math.cos(ang)}, ${C + r.ry * Math.sin(ang)})`);
      };

      /* badges orbit via trig (not by rotating the svg) */
      badgeEls.forEach((el, i) => {
        const b = BADGES[i];
        const r = RINGS[b.ring];
        const start = (b.startDeg * Math.PI) / 180;
        placeBadge(el, r, start);
        if (reduce) return;
        const p = { a: start };
        gsap.to(p, {
          a: start + b.dir * Math.PI * 2,
          duration: b.period,
          ease: "none",
          repeat: -1,
          onUpdate: () => placeBadge(el, r, p.a),
        });
      });

      /* drifting nodes */
      nodeEls.forEach((el, i) => {
        const n = NODES[i];
        const r = RINGS[n.ring];
        const start = (n.startDeg * Math.PI) / 180;
        placeNode(el, r, start);
        if (reduce) return;
        const p = { a: start };
        gsap.to(p, {
          a: start + n.dir * Math.PI * 2,
          duration: n.period,
          ease: "none",
          repeat: -1,
          onUpdate: () => placeNode(el, r, p.a),
        });
      });

      if (reduce) return;

      /* centre logo — slow breathe, glow pulse, tiny drift-rotate */
      gsap.to(".rd-core__disc", { scale: 1.045, duration: 2.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".rd-core__glow", { opacity: 0.9, scale: 1.14, transformOrigin: "50% 50%", duration: 2.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(".rd-core__mark", { rotate: 4, transformOrigin: "50% 50%", duration: 7, ease: "sine.inOut", yoyo: true, repeat: -1 });
      /* rings quietly shimmer */
      gsap.to(".rd-hero-ring", { opacity: "-=0.18", duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1, stagger: 0.6 });

      /* self-drawing gold underline in the copy */
      const uline = root.current!.querySelector<SVGPathElement>(".rd-hero__uline");
      if (uline) {
        const len = uline.getTotalLength();
        gsap.set(uline, { strokeDasharray: len, strokeDashoffset: len });
      }

      /* intro (fromTo so Strict Mode double-mount can't leave text hidden) */
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        ".rd-hero__char",
        { yPercent: 120, rotate: 8, autoAlpha: 0, transformOrigin: "0% 100%" },
        { yPercent: 0, rotate: 0, autoAlpha: 1, duration: 0.9, stagger: 0.03 }
      )
        .fromTo(".rd-hero__title", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, "-=0.5")
        .fromTo(".rd-hero__cta > *", { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .fromTo(".rd-viz-scene", { autoAlpha: 0, scale: 0.92, transformOrigin: "50% 50%" }, { autoAlpha: 1, scale: 1, duration: 1, ease: "power3.out" }, "-=0.8")
        .fromTo(
          ".rd-core",
          { scale: 0, xPercent: -50, yPercent: -50, transformOrigin: "50% 50%" },
          { scale: 1, xPercent: -50, yPercent: -50, duration: 0.7, ease: "back.out(2)", clearProps: "transform" },
          "-=0.7"
        )
        .fromTo(
          "[data-badge-fx]",
          { autoAlpha: 0, scale: 0.3 },
          { autoAlpha: 1, scale: 1, duration: 0.55, stagger: 0.08, ease: "back.out(1.9)", clearProps: "transform" },
          "-=0.5"
        );
      if (uline) tl.to(uline, { strokeDashoffset: 0, duration: 0.7, ease: "power2.inOut" }, "-=0.6");

      /* hero drifts up on scroll-away; blobs sink slower */
      gsap.to(".rd-hero__parallax", {
        yPercent: -8,
        ease: "none",
        force3D: true,
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.5 },
      });
      if (blobs.current)
        gsap.to(blobs.current, {
          y: 120,
          ease: "none",
          force3D: true,
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.5 },
        });
    }, root);
    return () => ctx.revert();
  }, []);

  
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const blobEl = blobs.current;
    const blobKids = blobEl ? (Array.from(blobEl.children) as HTMLElement[]) : [];
    let ticking = false;
    const onMove = (e: MouseEvent) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const cx = e.clientX / window.innerWidth - 0.5;
        const cy = e.clientY / window.innerHeight - 0.5;
        blobKids.forEach((n, i) =>
          gsap.to(n, { x: cx * (i + 1) * 16, y: cy * (i + 1) * 16, duration: 0.8, ease: "power2.out", force3D: true })
        );
        ticking = false;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={root}
      className="rd-hero rd-grid relative flex min-h-0 sm:min-h-[92svh] items-start sm:items-center overflow-hidden pt-2 pb-6 sm:pt-28 sm:pb-14"
    >
      <div ref={blobs} aria-hidden className="pointer-events-none absolute inset-0">
        <div className="rd-blob rd-blob--blue rd-blob--float left-[6%] top-[16%] size-[34vw] max-w-[520px] opacity-70" />
        <div className="rd-blob rd-blob--gold rd-blob--float bottom-[10%] left-[38%] size-[24vw] max-w-[360px]" style={{ animationDelay: "-7s" }} />
      </div>

      <div className="rd-hero__parallax container relative z-10 grid gap-4 grid-cols-1 items-center lg:grid-cols-[1.15fr_0.85fr] pt-0">
      
        <div className="text-center lg:text-left">
          <h1 className="rd-display rd-hero__words text-[var(--rd-ink)]">
            {RD_HERO_WORDS.map((w, wi) => (
              <span key={wi} className="relative block">
                <span className="block overflow-hidden">
                  <span className="block">
                    {Array.from(w).map((ch, ci) => (
                      <span
                        key={ci}
                        className={"rd-hero__char inline-block " + (wi === 3 ? "text-[var(--rd-blue)]" : "")}
                        style={{ whiteSpace: ch === " " ? "pre" : "normal" }}
                      >
                        {ch === " " ? " " : ch}
                      </span>
                    ))}
                  </span>
                </span>
                {wi === 3 && (
                  <svg aria-hidden viewBox="0 0 300 16" preserveAspectRatio="none" className="absolute -bottom-1 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 h-[0.12em] w-[62%] max-w-[260px] lg:max-w-none">
                    <path className="rd-hero__uline" d="M4 11 C 80 3, 210 4, 296 9" fill="none" stroke="#C9A227" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                )}
              </span>
            ))}
          </h1>

          <p className="rd-hero__title mt-3 sm:mt-7 max-w-xl mx-auto lg:mx-0 text-sm sm:text-lg lg:text-xl font-medium leading-relaxed text-[var(--rd-muted)]">
            {RD_PAGE_TITLE}
          </p>

          <div className="rd-actions rd-hero__cta mt-6 sm:mt-9 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <RdMagnetic href="/contact">
              Get a Free Consultation <ArrowRight />
            </RdMagnetic>
            <RdMagnetic href={CONTACT.whatsapp} external className="rd-btn--ghost">
              Talk on WhatsApp
            </RdMagnetic>
          </div>
        </div>

        {/* ===== premium orbital ecosystem — responsive mobile & desktop stage ===== */}
        <div className="rd-hero__viz relative mx-auto w-full max-w-[320px] sm:max-w-[440px] lg:max-w-[520px] mt-2 lg:mt-0">
          {/* soft background glows (<15%) */}
          <div aria-hidden className="pointer-events-none absolute left-[14%] top-[10%] size-[64%] rounded-full bg-[radial-gradient(circle,rgba(40,111,171,0.18),transparent_70%)] blur-2xl" />
          <div aria-hidden className="pointer-events-none absolute bottom-[8%] right-[12%] size-[48%] rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.15),transparent_70%)] blur-2xl" />

          <div ref={stage} className="relative aspect-square w-full">
            {/* rings + drifting nodes */}
            <svg viewBox="0 0 440 440" className="rd-viz-scene absolute inset-0 size-full [overflow:visible]" aria-hidden>
              <defs>
                <linearGradient id="rdInnerStroke" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#286FAB" stopOpacity="0.05" />
                  <stop offset="50%" stopColor="#286FAB" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#286FAB" stopOpacity="0.05" />
                </linearGradient>
                <filter id="rdRingGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.2" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g filter="url(#rdRingGlow)">
                <ellipse className="rd-hero-ring" cx={C} cy={C} rx={RINGS.outer.rx} ry={RINGS.outer.ry} fill="none" stroke="rgba(23,75,155,0.55)" strokeWidth="1.5" />
                <ellipse className="rd-hero-ring" cx={C} cy={C} rx={RINGS.mid.rx} ry={RINGS.mid.ry} fill="none" stroke="rgba(201,162,39,0.75)" strokeWidth="1.5" strokeDasharray="1 7" strokeLinecap="round" />
                <ellipse className="rd-hero-ring" cx={C} cy={C} rx={RINGS.inner.rx} ry={RINGS.inner.ry} fill="none" stroke="url(#rdInnerStroke)" strokeWidth="1.5" />
              </g>

              {NODES.map((n, i) => (
                <g key={i} data-node>
                  <circle r="7" fill={n.c} opacity="0.18" />
                  <circle r="2.6" fill={n.c} />
                </g>
              ))}
            </svg>

            {/* centre — glass Digivanta logo */}
            <div className="rd-core absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="rd-core__glow pointer-events-none absolute -inset-7 rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.4),transparent_68%)] opacity-70" />
              <div className="rd-core__disc relative flex size-[clamp(76px,20vw,104px)] items-center justify-center rounded-full border-2 border-[#C9A227]/70 shadow-[0_22px_50px_-14px_rgba(15,45,82,0.75),inset_0_1px_3px_rgba(255,255,255,0.18)] p-2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.95),rgba(240,244,248,0.9))]">
                {/* width/height must match the file's real 3.64:1 ratio —
                    a wrong ratio makes object-contain letterbox inside the
                    declared box and shrink the mark off-centre */}
                <Image
                  src="/digivanta.png"
                  alt="Digivanta"
                  width={200}
                  height={55}
                  className="max-h-[62%] max-w-[78%] object-contain"
                />
              </div>
            </div>

            {/* orbiting platform badges */}
            {BADGES.map((b) => (
              <div key={b.label} data-badge className="absolute left-0 top-0">
                <div className="-translate-x-1/2 -translate-y-1/2">
                  <div
                    data-badge-fx
                    title={b.label}
                    className="grid size-[clamp(40px,10.5vw,54px)] place-items-center rounded-full border border-white/70 bg-white/80 shadow-[0_10px_26px_-8px_rgba(15,45,82,0.3)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_34px_-10px_rgba(15,45,82,0.4)]"
                  >
                    {/* Plain <img> on purpose: these are static SVGs, and
                        next/image won't optimise SVG without
                        dangerouslyAllowSVG — it'd add overhead for nothing.
                        Explicit dimensions keep them out of CLS. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={b.icon}
                      alt={b.label}
                      width={54}
                      height={54}
                      decoding="async"
                      className="size-[54%] object-contain"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[var(--rd-muted)]">Scroll</span>
        <span aria-hidden className="rd-scrolldown" />
      </div>
    </section>
  );
}

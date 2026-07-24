"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { CONTACT } from "@/lib/site-data";
import { MagneticButton } from "./primitives";
import { ArrowRight } from "@/components/ui/Icons";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function AgencyHero() {
  const root = useRef<HTMLElement | null>(null);
  const blobs = useRef<HTMLDivElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".ag-hero__eyebrow", { y: 24, autoAlpha: 0, duration: 0.7 })
        .from(
          ".ag-hero__line",
          { yPercent: 120, autoAlpha: 0, duration: 1, stagger: 0.12 },
          "-=0.3"
        )
        .from(".ag-hero__sub", { y: 24, autoAlpha: 0, duration: 0.7 }, "-=0.5")
        .from(".ag-hero__ctas > *", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".ag-hero__meta > *", { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.08 }, "-=0.4");
    }, root);

    return () => ctx.revert();
  }, []);

  // mouse parallax on blobs
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = blobs.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    const onMove = (e: MouseEvent) => {
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      items.forEach((node, i) => {
        const depth = (i + 1) * 26;
        gsap.to(node, {
          x: cx * depth,
          y: cy * depth,
          duration: 0.9,
          ease: "power2.out",
        });
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="ag-grain relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-24"
    >
      {/* floating gradient blobs */}
      <div ref={blobs} aria-hidden className="pointer-events-none absolute inset-0">
        <div className="ag-blob ag-blob--blue ag-blob--float left-[8%] top-[14%] size-[38vw] max-w-[560px]" />
        <div className="ag-blob ag-blob--purple ag-blob--float bottom-[6%] right-[6%] size-[34vw] max-w-[520px]" style={{ animationDelay: "-6s" }} />
        <div className="ag-blob ag-blob--blue left-[46%] top-[52%] size-[24vw] max-w-[360px] opacity-30" />
      </div>

      <div className="container relative z-10">
        <span className="ag-hero__eyebrow mb-8 inline-flex items-center gap-2.5 rounded-full border border-[var(--ag-line)] bg-[var(--ag-glass)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ag-muted)] backdrop-blur">
          <span className="size-2 rounded-full bg-[#4F7DFD] shadow-[0_0_12px_#4F7DFD]" />
          Digital Marketing Agency · Delhi
        </span>

        <h1 className="ag-display ag-huge m-0">
          <span className="block overflow-hidden">
            <span className="ag-hero__line block bg-gradient-to-r from-white via-white to-[#9db4ff] bg-clip-text text-transparent">
              Marketing
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="ag-hero__line block bg-gradient-to-r from-[#4F7DFD] via-[#7a9bff] to-[#a855f7] bg-clip-text text-transparent">
              Agency
            </span>
          </span>
        </h1>

        <p className="ag-hero__sub mt-8 max-w-xl text-lg leading-relaxed text-[var(--ag-muted)]">
          We don&apos;t just run campaigns — we build digital machines that turn
          traffic into leads, leads into sales, and sales into compounding growth.
        </p>

        <div className="ag-hero__ctas mt-10 flex flex-wrap items-center gap-5">
          <MagneticButton href="#contact">
            Let&apos;s grow together <ArrowRight />
          </MagneticButton>
          <MagneticButton href={CONTACT.whatsapp} external className="ag-btn--ghost">
            View our work
          </MagneticButton>
        </div>

        <div className="ag-hero__meta mt-16 flex flex-wrap gap-x-12 gap-y-6">
          {[
            { n: "500+", l: "Projects delivered" },
            { n: "50M+", l: "Ad spend managed" },
            { n: "16+", l: "Years in the game" },
          ].map((m) => (
            <div key={m.l}>
              <div className="ag-display text-3xl text-white">{m.n}</div>
              <div className="mt-1 text-sm text-[var(--ag-muted)]">{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.7rem] uppercase tracking-[0.3em] text-[var(--ag-muted)]">
        Scroll
      </div>
    </section>
  );
}

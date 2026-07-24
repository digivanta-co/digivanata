"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CONTACT } from "@/lib/site-data";
import { RD_FINAL_CTA, RD_COMPETITORS } from "@/lib/redesign-data";
import { RdMagnetic } from "./primitives";
import { ArrowRight, WhatsApp } from "@/components/ui/Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function RdFinalCta() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".rd-final__word", {
        yPercent: 120,
        rotate: 3,
        transformOrigin: "0% 100%",
        autoAlpha: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.08,
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
      gsap.to(".rd-final__spark", {
        y: -34,
        opacity: 0.9,
        duration: 3,
        ease: "sine.inOut",
        stagger: { each: 0.35, repeat: -1, yoyo: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  // cursor-tracking spotlight over the dark section
  function onMove(e: React.MouseEvent) {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--sx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--sy", `${((e.clientY - r.top) / r.height) * 100}%`);
  }

  return (
    <section
      ref={root}
      id="contact"
      onMouseMove={onMove}
      className="rd-panel mb-4 relative flex items-center overflow-hidden bg-[var(--rd-ink)] py-20 text-white"
    >
      <div aria-hidden className="rd-spotlight pointer-events-none absolute inset-0 z-[1]" />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="rd-blob rd-blob--blue rd-blob--float left-[10%] top-[16%] size-[30vw] max-w-[440px] opacity-60" />
        <div className="rd-blob rd-blob--gold rd-blob--float bottom-[10%] right-[10%] size-[24vw] max-w-[380px] opacity-50" style={{ animationDelay: "-6s" }} />
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="rd-final__spark absolute size-1 rounded-full bg-white/70 blur-[1px]"
            style={{ left: `${(i * 41) % 100}%`, top: `${(i * 59) % 100}%`, opacity: 0.3 }}
          />
        ))}
      </div>

      <div className="container relative z-10 text-center">
        {/* verbatim competitors block */}
        <div className="mx-auto mb-10 max-w-2xl">
          <h2 className="rd-display text-2xl sm:text-3xl" style={{ textTransform: "none" }}>
            {RD_COMPETITORS.title}
          </h2>
          <p className="mt-3 text-white/70">{RD_COMPETITORS.sub}</p>
        </div>

        {/* big animated headline */}
        <div className="rd-display rd-mega leading-[0.9]">
          {RD_FINAL_CTA.map((w, i) => (
            <span key={i} className="block overflow-hidden">
              <span className={"rd-final__word block " + (i === 1 ? "rd-shimmer" : i === 3 ? "rd-shimmer rd-shimmer--gold" : "")}>
                {w}
              </span>
            </span>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 mb-2">
          <RdMagnetic href={CONTACT.phoneHref}>
            Call {CONTACT.phone} <ArrowRight />
          </RdMagnetic>
          <RdMagnetic href={CONTACT.whatsapp} external className="rd-btn--ghost !text-white !border-white/20">
            <WhatsApp /> WhatsApp Now
          </RdMagnetic>
        </div>
      </div>
    </section>
  );
}

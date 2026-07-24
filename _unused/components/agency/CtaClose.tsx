"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CONTACT } from "@/lib/site-data";
import { MagneticButton } from "./primitives";
import { ArrowRight } from "@/components/ui/Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const LINES = ["Let's", "grow", "together."];

export default function CtaClose() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".ag-cta__word", {
        yPercent: 120,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
      // drifting glow particles
      gsap.to(".ag-cta__spark", {
        y: -30,
        opacity: 0.9,
        duration: 3,
        ease: "sine.inOut",
        stagger: { each: 0.4, repeat: -1, yoyo: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="contact"
      className="ag-grain relative flex min-h-[90svh] items-center overflow-hidden py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="ag-blob ag-blob--blue ag-blob--float left-[12%] top-[20%] size-[30vw] max-w-[440px]" />
        <div className="ag-blob ag-blob--purple ag-blob--float bottom-[10%] right-[10%] size-[28vw] max-w-[420px]" style={{ animationDelay: "-5s" }} />
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="ag-cta__spark absolute size-1 rounded-full bg-white/70 blur-[1px]"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 text-center">
        <h2 className="ag-display ag-mega text-white">
          {LINES.map((w, i) => (
            <span key={i} className="block overflow-hidden">
              <span
                className={
                  "ag-cta__word block " +
                  (i === 2
                    ? "bg-gradient-to-r from-[#4F7DFD] to-[#a855f7] bg-clip-text text-transparent"
                    : "")
                }
              >
                {w}
              </span>
            </span>
          ))}
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <MagneticButton href={CONTACT.whatsapp} external>
            Book a strategy call <ArrowRight />
          </MagneticButton>
          <MagneticButton href={CONTACT.emailHref} external className="ag-btn--ghost">
            {CONTACT.email}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

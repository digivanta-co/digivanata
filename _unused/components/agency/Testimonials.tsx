"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AG_TESTIMONIALS } from "@/lib/agency-data";
import { TiltCard } from "./primitives";
import { Star } from "@/components/ui/Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Testimonials() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".ag-tst__card", {
        y: 60,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
      gsap.to(".ag-tst__wave", {
        backgroundPositionX: "1200px",
        duration: 24,
        ease: "none",
        repeat: -1,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden py-28">
      {/* slow moving wave background */}
      <div
        aria-hidden
        className="ag-tst__wave pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='200'%3E%3Cpath d='M0 100 C 300 20 600 180 1200 60' stroke='%234F7DFD' fill='none' stroke-width='2'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="container relative z-10">
        <h2 className="ag-display mb-14 text-[clamp(2rem,5vw,3.5rem)] text-white">
          Clients who scaled
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {AG_TESTIMONIALS.map((t) => (
            <TiltCard key={t.n} max={6} className="ag-tst__card ag-glass p-8">
              <div className="mb-4 flex gap-1 text-[#4F7DFD] [&_svg]:size-4">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="text-lg leading-relaxed text-white">&ldquo;{t.q}&rdquo;</p>
              <div className="mt-6">
                <div className="font-semibold text-white">{t.n}</div>
                <div className="text-sm text-[var(--ag-muted)]">{t.r}</div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

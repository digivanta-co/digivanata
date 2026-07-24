"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AG_SERVICES } from "@/lib/agency-data";
import { TiltCard, MagneticButton } from "./primitives";
import { ArrowRight } from "@/components/ui/Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// alternating entry directions for the 6 cards
const FROM = [
  { x: -120, y: 0 },
  { x: 120, y: 0 },
  { x: -120, y: 60 },
  { x: 120, y: 60 },
  { x: -120, y: 0 },
  { x: 120, y: 0 },
];

export default function StickyServices() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".ag-svc__card").forEach((card, i) => {
        const f = FROM[i % FROM.length];
        gsap.from(card, {
          x: f.x,
          y: f.y,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="services" className="ag-grain relative py-28">
      <div className="container grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* sticky heading */}
        <div className="lg:sticky lg:top-28">
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#4F7DFD]">
            What we do
          </span>
          <h2 className="ag-display text-[clamp(2.4rem,6vw,4.5rem)] text-white">
            We don&apos;t run ads.
            <br />
            We build{" "}
            <span className="bg-gradient-to-r from-[#4F7DFD] to-[#a855f7] bg-clip-text text-transparent">
              digital machines.
            </span>
          </h2>
          <p className="mt-6 max-w-md text-[var(--ag-muted)]">
            Six disciplines, one revenue engine — engineered to compound.
          </p>
          <div className="mt-8">
            <MagneticButton href="#contact">
              Start a project <ArrowRight />
            </MagneticButton>
          </div>
        </div>

        {/* cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {AG_SERVICES.map((s, i) => (
            <TiltCard key={s.t} className="ag-svc__card ag-glass p-7">
              <div className="ag-display text-sm text-[var(--ag-muted)]">
                0{i + 1}
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ag-muted)]">
                {s.d}
              </p>
              <span className="mt-6 inline-flex size-9 items-center justify-center rounded-full border border-[var(--ag-line)] text-[#4F7DFD] [&_svg]:size-4">
                <ArrowRight />
              </span>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

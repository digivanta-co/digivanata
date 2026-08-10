"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { TiltCard, MagneticButton } from "@/components/agency/primitives";
import { Label } from "@/components/design/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { SMM_WHY } from "@/lib/smm-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Why Us: sticky heading + spotlight tilt cards */
export function WhyChooseSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const cards = root.current?.querySelectorAll<HTMLElement>(".smm-why__card");
      if (!cards?.length) return;
      cards.forEach((card, i) => {
        gsap.from(card, {
          x: i % 2 ? 80 : -80,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none none" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-[var(--gd-soft)] py-10 sm:py-14">
      <div className="container grid gap-5 items-start lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <Label>Why Digivanta</Label>
          <h2 className="gd-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--gd-ink)]">
            Creativity,
            <br />
            <span className="gd-grad">backed by strategy.</span>
          </h2>
          <p className="mt-5 max-w-md text-[var(--gd-muted)]">{SMM_WHY.intro}</p>
          <div className="mt-8">
            <MagneticButton href="/contact">
              Start Your Strategy <ArrowRight />
            </MagneticButton>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {SMM_WHY.points.map((p, i) => (
            <TiltCard key={p.title} max={6} className="smm-why__card gd-card p-6">
              <div className="gd-display text-sm text-[var(--gd-gold)]">0{i + 1}</div>
              <h3 className="mt-3 text-lg font-semibold text-[var(--gd-ink)]">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--gd-muted)]">{p.desc}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

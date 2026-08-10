"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { TiltCard, MagneticButton } from "@/components/agency/primitives";
import { Label } from "@/components/design/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { PPC_LEADGEN, PPC_WHY, PPC_GROW } from "@/lib/ppc-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Choosing the right lead generation partner — numbered ledger. */
export function LeadGenSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".ppc-lg__row", {
        y: 50,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-10 sm:py-14">
      <div className="container grid gap-5 items-start lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <Label>Lead generation, done right</Label>
          <h2 className="gd-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--gd-ink)]">
            Traffic is noise.
            <br />
            <span className="gd-grad">Leads are signal.</span>
          </h2>
          <p className="mt-5 max-w-md text-[var(--gd-muted)]">{PPC_LEADGEN.intro}</p>
          <p className="mt-4 max-w-md text-sm font-medium text-[var(--gd-ink)]">{PPC_LEADGEN.closing}</p>
        </div>

        <div className="border-t border-[var(--gd-line)]">
          {PPC_LEADGEN.points.map((p, i) => (
            <div
              key={p.title}
              className="ppc-lg__row group flex items-baseline gap-6 border-b border-[var(--gd-line)] py-6 transition-colors duration-300 hover:bg-[var(--gd-soft)] sm:gap-9"
            >
              <span className="gd-display shrink-0 text-sm text-[var(--gd-gold)]">0{i + 1}</span>
              <div>
                <h3 className="m-0 text-lg font-semibold text-[var(--gd-ink)] transition-transform duration-300 group-hover:translate-x-2 sm:text-xl">
                  {p.title}
                </h3>
                <p className="mb-0 mt-1.5 max-w-md text-sm leading-relaxed text-[var(--gd-muted)]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Why businesses trust our expertise — spotlight tilt cards. */
export function WhySection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".ppc-why__card").forEach((card, i) => {
        gsap.from(card, {
          x: i % 2 ? 90 : -90,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-[var(--gd-soft)] py-10 sm:py-14">
      <div className="container grid gap-5 items-start lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <Label>Why trust our expertise</Label>
          <h2 className="gd-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--gd-ink)]">
            Clicks are cheap.
            <br />
            <span className="gd-grad">Results aren&apos;t.</span>
          </h2>
          <p className="mt-5 max-w-md text-[var(--gd-muted)]">{PPC_WHY.intro}</p>
          <div className="mt-8">
            <MagneticButton href="/contact">
              Start a campaign <ArrowRight />
            </MagneticButton>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {PPC_WHY.points.map((p, i) => (
            <TiltCard key={p.title} max={6} className="ppc-why__card gd-card p-6">
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

/* Closing prose — smarter Google Ads strategies. */
export function GrowSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".ppc-grow__item", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative border-b border-[var(--gd-line)] py-8 sm:py-12">
      <div className="container">
        <div className="ppc-grow__item max-w-2xl">
          <Label>Grow with smarter strategies</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
            Smarter campaigns,
            <br />
            <span className="gd-grad">faster growth.</span>
          </h2>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {PPC_GROW.paragraphs.map((p, i) => (
            <p key={i} className="ppc-grow__item m-0 text-sm leading-relaxed text-[var(--gd-muted)]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

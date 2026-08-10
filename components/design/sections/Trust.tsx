"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { TiltCard, MagneticButton } from "@/components/agency/primitives";
import { Label, StatBig } from "@/components/design/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { useMarquee } from "@/hooks/animations";
import { GD_IMPACT, GD_WHY, GD_INDUSTRIES } from "@/lib/design-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Impact: animated counters + benefit chips. */
export function ImpactSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".gd-imp__item", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-10 sm:py-14">
      <div className="container">
        <div className="gd-imp__item max-w-2xl">
          <Label>The impact of good design</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
            Design isn&apos;t decoration.
            <br />
            <span className="gd-grad">It&apos;s growth.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 border-t border-[var(--gd-line)] pt-10 sm:grid-cols-3">
          {GD_IMPACT.stats.map((s) => (
            <div key={s.label} className="gd-imp__item">
              <StatBig value={s.value} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </div>

        <div className="gd-imp__item mt-10 flex flex-wrap gap-2.5">
          {GD_IMPACT.benefits.map((b) => (
            <span
              key={b}
              className="rounded-full border border-[var(--gd-line)] bg-white px-4 py-2 text-sm text-[var(--gd-muted)] transition-colors duration-300 hover:border-[var(--gd-gold)] hover:text-[var(--gd-ink)]"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Why us: sticky heading + spotlight tilt cards. */
export function WhySection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gd-why__card").forEach((card, i) => {
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
          <Label>Why Digivanta</Label>
          <h2 className="gd-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--gd-ink)]">
            Creativity,
            <br />
            <span className="gd-grad">with strategy.</span>
          </h2>
          <p className="mt-5 max-w-md text-[var(--gd-muted)]">{GD_WHY.intro}</p>
          <div className="mt-8">
            <MagneticButton href="/contact">
              Start a project <ArrowRight />
            </MagneticButton>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {GD_WHY.points.map((p, i) => (
            <TiltCard key={p.title} max={6} className="gd-why__card gd-card p-6">
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

/* Industries: continuous outlined-text marquee. */
export function IndustriesSection({
  items = GD_INDUSTRIES,
  label = "Industries we design for",
}: {
  items?: readonly string[];
  label?: string;
}) {
  const row = useMarquee<HTMLDivElement>({ duration: 34 });
  const doubled = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-b border-[var(--gd-line)] py-8" aria-label="Industries we serve">
      <div className="container mb-5">
        <Label>{label}</Label>
      </div>
      <div ref={row} className="flex w-max items-center whitespace-nowrap">
        {doubled.map((ind, i) => (
          <span
            key={i}
            className="gd-display flex items-center gap-5 pr-5 text-[clamp(1.4rem,3.2vw,2.4rem)] text-transparent"
            style={{ WebkitTextStroke: "1px rgba(13,18,41,0.25)" }}
          >
            {ind}
            <span className="size-1.5 rounded-full bg-[var(--gd-gold)]" />
          </span>
        ))}
      </div>
    </section>
  );
}

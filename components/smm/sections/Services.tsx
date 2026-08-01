"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { Label } from "@/components/design/primitives";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { SMM_PLATFORMS } from "@/lib/smm-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ServicesSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const cards = root.current?.querySelectorAll<HTMLElement>(".smm-svc__card");
      if (!cards?.length) return;

      // Ensure cards are visible first, then animate
      gsap.set(cards, { autoAlpha: 1 });

      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 50,
          autoAlpha: 0,
          duration: 0.8,
          delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="services" className="relative py-14 sm:py-24">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <Label>Platforms We Master</Label>
          <h2 className="gd-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--gd-ink)]">
            Platform-specific strategies,
            <br />
            <span className="gd-grad">not generic posting.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[var(--gd-muted)]">
            Each platform has its own audience, format, and language. We tailor content and paid campaigns to where your customers actually spend their time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SMM_PLATFORMS.map((p, i) => (
            <div
              key={p.name}
              className="smm-svc__card gd-card flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="gd-display text-xs text-[var(--gd-gold)]">0{i + 1}</div>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-[var(--gd-ink)]">
                {p.name}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--gd-muted)]">
                {p.desc}
              </p>

              {p.items && p.items.length > 0 && (
                <ul className="mt-6 grid list-none gap-2.5 border-t border-[var(--gd-line)] pt-5 p-0">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-xs font-medium text-[var(--gd-ink)]">
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-[var(--gd-gold-soft)] text-[var(--gd-gold)] [&_svg]:size-2.5">
                        <Check />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

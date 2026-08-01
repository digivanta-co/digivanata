"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { Label } from "@/components/design/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { PPC_SERVICES } from "@/lib/ppc-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Service index: full-width rows with display titles. */
export function ServicesSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".ppc-svc__row", {
        y: 60,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="services" className="relative py-14 sm:py-24">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <Label>Our Google Ads services</Label>
          <h2 className="gd-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--gd-ink)]">
            Campaigns built for
            <br />
            <span className="gd-grad">business outcomes.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[var(--gd-muted)]">{PPC_SERVICES.intro}</p>
        </div>

        <div className="border-t border-[var(--gd-line)]">
          {PPC_SERVICES.items.map((s, i) => (
            <a
              key={s.title}
              href="#contact"
              className="ppc-svc__row group block border-b border-[var(--gd-line)] py-7 transition-colors duration-300 hover:bg-[var(--gd-soft)]"
            >
              <div className="grid items-baseline gap-x-8 gap-y-3 md:grid-cols-[3.2rem_1.2fr_1fr_auto]">
                <span className="gd-display text-sm text-[var(--gd-gold)]">0{i + 1}</span>
                <h3 className="gd-display m-0 text-[clamp(1.25rem,2.4vw,1.9rem)] text-[var(--gd-ink)] transition-transform duration-400 group-hover:translate-x-3">
                  {s.title}
                </h3>
                <p className="m-0 max-w-sm text-sm leading-relaxed text-[var(--gd-muted)]">{s.desc}</p>
                <span className="hidden size-10 items-center justify-center justify-self-end rounded-full border border-[var(--gd-line)] text-[var(--gd-navy)] transition-all duration-300 group-hover:-rotate-45 group-hover:border-[var(--gd-navy)] md:inline-flex [&_svg]:size-4">
                  <ArrowRight />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

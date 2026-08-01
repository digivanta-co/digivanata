"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { Label } from "@/components/design/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { GD_SERVICES } from "@/lib/design-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Service index: full-width rows, display titles,
   details slide open on hover (desktop) and stay visible on touch. */
export function ServicesSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".gd-svc__row", {
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
          <Label>What we create</Label>
          <h2 className="gd-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--gd-ink)]">
            Design services,
            <br />
            <span className="gd-grad">engineered for brands.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[var(--gd-muted)]">{GD_SERVICES.intro}</p>
        </div>

        <div className="border-t border-[var(--gd-line)]">
          {GD_SERVICES.items.map((s, i) => (
            <a
              key={s.title}
              href="#contact"
              className="gd-svc__row group block border-b border-[var(--gd-line)] py-7 transition-colors duration-300 hover:bg-[var(--gd-soft)]"
            >
              <div className="grid items-baseline gap-x-8 gap-y-3 md:grid-cols-[3.2rem_1.2fr_1fr_auto]">
                <span className="gd-display text-sm text-[var(--gd-gold)]">
                  0{i + 1}
                </span>
                <h3 className="gd-display m-0 text-[clamp(1.35rem,2.6vw,2.1rem)] text-[var(--gd-ink)] transition-transform duration-400 group-hover:translate-x-3">
                  {s.title}
                </h3>
                <p className="m-0 max-w-sm text-sm leading-relaxed text-[var(--gd-muted)]">
                  {s.desc}
                </p>
                <span className="hidden size-10 items-center justify-center justify-self-end rounded-full border border-[var(--gd-line)] text-[var(--gd-navy)] transition-all duration-300 group-hover:-rotate-45 group-hover:border-[var(--gd-navy)] md:inline-flex [&_svg]:size-4">
                  <ArrowRight />
                </span>
              </div>
              {/* deliverable tags — expand on hover */}
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] max-md:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="flex flex-wrap gap-2 pt-4 md:pl-[calc(3.2rem+2rem)]">
                    {s.points.map((pt) => (
                      <span
                        key={pt}
                        className="rounded-full border border-[var(--gd-line)] bg-white px-3.5 py-1.5 text-xs font-medium tracking-wide text-[var(--gd-muted)]"
                      >
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { Label } from "@/components/design/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { SEO_SERVICES } from "@/lib/seo-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Service index: full-width rows with display titles; the 8 deliverables
   of each service expand on hover (always open on touch screens). */
export function ServicesSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".sv-svc__row", {
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
    <section ref={root} id="seo-services" className="relative py-24">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <Label>What we provide</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
            Comprehensive SEO
            <br />
            <span className="gd-grad">services we provide.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[var(--gd-muted)]">
            Each service is designed to improve search visibility and drive sustainable organic growth.
          </p>
        </div>

        <div className="border-t border-[var(--gd-line)]">
          {SEO_SERVICES.map((s) => (
            <a
              key={s.title}
              href="#contact"
              className="sv-svc__row group block border-b border-[var(--gd-line)] py-7 transition-colors duration-300 hover:bg-[var(--gd-soft)]"
            >
              <div className="grid items-baseline gap-x-8 gap-y-3 md:grid-cols-[3.2rem_1.2fr_1fr_auto]">
                <span className="gd-display text-sm text-[var(--gd-gold)]">{s.num}</span>
                <h3 className="gd-display m-0 text-[clamp(1.25rem,2.4vw,1.9rem)] text-[var(--gd-ink)] transition-transform duration-400 group-hover:translate-x-3">
                  {s.title}
                </h3>
                <p className="m-0 max-w-sm text-sm leading-relaxed text-[var(--gd-muted)]">{s.desc}</p>
                <span className="hidden size-10 items-center justify-center justify-self-end rounded-full border border-[var(--gd-line)] text-[var(--gd-navy)] transition-all duration-300 group-hover:-rotate-45 group-hover:border-[var(--gd-navy)] md:inline-flex [&_svg]:size-4">
                  <ArrowRight />
                </span>
              </div>
              {/* deliverable tags — expand on hover, always open on touch */}
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] max-md:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="flex flex-wrap gap-2 pt-4 md:pl-[calc(3.2rem+2rem)]">
                    {s.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full border border-[var(--gd-line)] bg-white px-3.5 py-1.5 text-xs font-medium tracking-wide text-[var(--gd-muted)]"
                      >
                        {it}
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

"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { Label } from "@/components/design/primitives";
import { ArrowRight, ServiceIcon } from "@/components/ui/Icons";
import { WEB_SERVICES } from "@/lib/web-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Service index: full-width expandable rows with display titles.
 * Each row shows a gold number, service title, short description,
 * and an arrow icon. On hover, deliverable tags + badge expand below.
 * Follows the proven SEO Services pattern used across the site.
 */
export default function WebServicesSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const rows = root.current?.querySelectorAll<HTMLElement>("[data-svc-row]");
      if (!rows) return;
      gsap.from(rows, {
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
    <section ref={root} id="web-services" className="relative py-10 sm:py-14">
      <div className="container">
        {/* Section Header — heading left, description right */}
        <div className="mb-14 grid items-end gap-6 md:grid-cols-2">
          <div>
            <Label>What we build</Label>
            <h2 className="gd-display m-0 text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
              Web Development
              <br />
              <span className="gd-grad">services we provide.</span>
            </h2>
          </div>
          <p className="m-0 max-w-md text-[var(--gd-muted)] md:ml-auto md:text-right">
            From enterprise web applications to high-converting ecommerce stores — every project is engineered for performance, scalability, and results.
          </p>
        </div>

        {/* Service Rows */}
        <div className="border-t border-[var(--gd-line)]">
          {WEB_SERVICES.map((s, i) => (
            <a
              key={s.title}
              href="#web-contact"
              data-svc-row
              className="group block border-b border-[var(--gd-line)] py-7 transition-colors duration-300 hover:bg-[var(--gd-soft)]"
            >
              <div className="grid items-center gap-x-8 gap-y-3 md:grid-cols-[1fr_1fr]">
                {/* Left: Number + Icon + Title */}
                <div className="flex items-center gap-4">
                  <span className="gd-display text-sm text-[var(--gd-gold)]">
                    0{i + 1}
                  </span>
                  <span className="hidden size-10 items-center justify-center rounded-xl bg-[var(--gd-soft)] text-[var(--gd-navy)] transition-colors duration-300 group-hover:bg-[var(--gd-navy)] group-hover:text-white md:inline-flex [&_svg]:size-5">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <h3 className="gd-display m-0 text-[clamp(1.15rem,2.4vw,1.75rem)] text-[var(--gd-ink)] transition-transform duration-400 group-hover:translate-x-3">
                    {s.title}
                  </h3>
                </div>

                {/* Right: Description + Arrow */}
                <div className="flex items-center gap-6">
                  <p className="m-0 flex-1 text-sm leading-relaxed text-[var(--gd-muted)]">
                    {s.desc}
                  </p>
                  <span className="hidden size-10 shrink-0 items-center justify-center rounded-full border border-[var(--gd-line)] text-[var(--gd-navy)] transition-all duration-300 group-hover:-rotate-45 group-hover:border-[var(--gd-navy)] md:inline-flex [&_svg]:size-4">
                    <ArrowRight />
                  </span>
                </div>
              </div>

              {/* Expandable deliverable tags + badge — hover to reveal on desktop, always open on mobile */}
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] max-md:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="flex flex-wrap items-center gap-2 pt-4 md:pl-[calc(3.2rem+2rem)]">
                    {/* Tech badge */}
                    <span className="rounded-full border border-[var(--gd-gold)]/30 bg-[var(--gd-gold-soft)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[var(--gd-gold)]">
                      {s.badge}
                    </span>
                    <span className="mx-1 hidden h-4 w-px bg-[var(--gd-line)] md:block" />
                    {/* Deliverable tags */}
                    {s.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-[var(--gd-line)] bg-white px-3.5 py-1.5 text-xs font-medium tracking-wide text-[var(--gd-muted)]"
                      >
                        {h}
                      </span>
                    ))}
                    {/* Service tag */}
                    <span className="rounded-full border border-[var(--gd-line)] bg-[var(--gd-soft)] px-3 py-1 text-[0.68rem] font-semibold tracking-wide text-[var(--gd-blue)]">
                      {s.tag}
                    </span>
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

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { WD_PROCESS_STEPS } from "@/lib/webdev-data";
import Reveal from "@/components/ui/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WebdevProcess() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = el.querySelectorAll(".wdp-card");
    const tween = gsap.fromTo(
      cards,
      { opacity: 0, y: 32, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="wd-light-section" id="wd-process">
      <div className="container">
        <Reveal className="mx-auto mb-11 max-w-2xl text-center">
          <p className="mb-3 text-[0.74rem] font-bold uppercase tracking-[0.18em] text-[#a27702]">
            How We Work
          </p>
          <h2 className="font-[family-name:var(--font-display),var(--font)] text-[clamp(1.9rem,4vw,2.8rem)] font-[800] leading-[1.12] tracking-[-0.03em] text-[var(--ink)]">
            Our Web Development Process
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-[var(--muted)]">
            A successful website requires strategy, structure, performance optimization, responsive development, and SEO integration.
          </p>
        </Reveal>

        <div ref={gridRef} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {WD_PROCESS_STEPS.map((step, i) => (
            <div
              key={step.step}
              className={`wdp-card group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[var(--shadow)] ${
                /* Make the last row's cards span properly */
                i === WD_PROCESS_STEPS.length - 1 && WD_PROCESS_STEPS.length % 4 !== 0
                  ? "sm:col-span-2 lg:col-span-1 xl:col-span-1"
                  : ""
              }`}
            >
              {/* Step number */}
              <span className="block font-[family-name:var(--font-display),var(--font)] text-[2.4rem] font-[800] leading-none tracking-[-0.04em] text-[#a27702]">
                {step.step}
              </span>

              <h3 className="mt-3 text-[1rem] font-semibold text-[var(--ink)]">{step.title}</h3>
              <p className="mt-1.5 text-[0.84rem] leading-relaxed text-[var(--muted)]">{step.desc}</p>

              {/* Tech/item pills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {step.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 text-[0.72rem] font-semibold text-[var(--navy)] transition-colors group-hover:border-[rgba(201,169,97,0.3)]"
                  >
                    <span className="size-[4px] rounded-full bg-[var(--gold)]" />
                    {item}
                  </span>
                ))}
              </div>

              {/* Hover shimmer */}
              <div
                className="pointer-events-none absolute top-0 -left-full h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-[rgba(201,169,97,0.08)] to-transparent [animation:hv-shimmer_12s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 1.5}s` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RD_PROCESS } from "@/lib/redesign-data";
import { PROCESS_STEPS } from "@/lib/home-data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function RdProcess() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)").matches) return;
    const ctx = gsap.context(() => {
      // fill the connecting line as the timeline scrolls through
      gsap.to(".rd-time-fill", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".rd-timeline",
          start: "top 60%",
          end: "bottom 70%",
          scrub: 0.6,
        },
      });
      gsap.utils.toArray<HTMLElement>(".rd-step").forEach((step) => {
        gsap.from(step, {
          x: 30,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 92%" },
        });
        const num = step.querySelector(".rd-step__num");
        if (num)
          gsap.from(num, {
            scale: 0,
            rotate: -30,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: { trigger: step, start: "top 92%" },
          });
        // number lights up blue once the scroll fill reaches it
        ScrollTrigger.create({
          trigger: step,
          start: "top 62%",
          toggleClass: { targets: step, className: "is-on" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="process" className="relative py-16 sm:py-20">
      <div className="container max-w-4xl">
        {/* Working process intro (verbatim) */}
        <span className="rd-eyebrow mb-4">How we work</span>
        <h2 className="rd-h2 text-[var(--rd-ink)]">{RD_PROCESS.heading}</h2>
        <div className="mt-5 space-y-3 text-lg text-[var(--rd-muted)]">
          {RD_PROCESS.paras.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <h3 className="rd-display mt-16 text-2xl text-[var(--rd-ink)] sm:text-3xl" style={{ textTransform: "none" }}>
          {RD_PROCESS.detailHeading}
        </h3>

        <ol className="rd-timeline relative mt-10 space-y-8 sm:space-y-10 pl-14 sm:pl-16">
          {/* base + fill line */}
          <span className="rd-time-line" style={{ left: "1.25rem" }} />
          <span className="rd-time-fill" style={{ left: "1.25rem" }} />
          {PROCESS_STEPS.map((s) => (
            <li key={s.step} className="rd-step relative">
              <span className="rd-step__num absolute -left-14 sm:-left-16 top-0 grid size-10 sm:size-12 place-items-center rounded-full border border-[var(--rd-border)] bg-white text-[var(--rd-blue)] shadow-sm">
                <span className="rd-display text-base sm:text-lg">{s.step}</span>
              </span>
              <h4 className="text-lg sm:text-xl font-semibold text-[var(--rd-ink)]">{s.title}</h4>
              <p className="mt-1 text-sm sm:text-base text-[var(--rd-muted)]">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

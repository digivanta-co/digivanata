"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RD_PROCESS } from "@/lib/redesign-data";
import { PROCESS_STEPS } from "@/lib/home-data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Zigzag vertices, in viewBox x units (0–100). Kept inside the middle
   band so the diagonals never cross the cards, which sit in the outer
   34% on either side. */
const X_LEFT = 38;
const X_RIGHT = 62;
const ROW = 100; // viewBox y units per step

export default function RdProcess() {
  const root = useRef<HTMLElement | null>(null);
  const steps = PROCESS_STEPS;

  /* M38,50 L62,150 L38,250 … — one vertex per step, alternating sides */
  const path = steps
    .map((_, i) => `${i === 0 ? "M" : "L"}${i % 2 === 1 ? X_RIGHT : X_LEFT},${i * ROW + ROW / 2}`)
    .join(" ");

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)").matches) return;
    const ctx = gsap.context(() => {
      // the zigzag draws itself as the timeline scrolls through
      gsap.to(".rd-zig__draw", {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: { trigger: ".rd-timeline", start: "top 60%", end: "bottom 70%", scrub: 0.6 },
      });

      gsap.utils.toArray<HTMLElement>(".rd-step").forEach((step) => {
        const fromRight = step.classList.contains("rd-step--right");
        gsap.from(step.querySelector(".rd-step__card"), {
          x: fromRight ? 46 : -46,
          autoAlpha: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 88%" },
        });
        const num = step.querySelector(".rd-step__num");
        if (num)
          gsap.from(num, {
            scale: 0,
            rotate: -30,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: { trigger: step, start: "top 88%" },
          });
        // node lights up once the draw reaches it
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
    <section ref={root} id="process" className="relative py-8 sm:py-12">
      <div className="container">
        <div className="max-w-4xl">
          <span className="rd-eyebrow mb-4">How we work</span>
          <h2 className="rd-h2 text-[var(--rd-ink)]">{RD_PROCESS.heading}</h2>
          <div className="mt-5 space-y-3 text-lg text-[var(--rd-muted)]">
            {RD_PROCESS.paras.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <h3
          className="rd-display mt-16 text-2xl text-[var(--rd-ink)] sm:text-3xl md:text-center"
          style={{ textTransform: "none" }}
        >
          {RD_PROCESS.detailHeading}
        </h3>

        {/* Below md this collapses to the original left rail — a zigzag
            has no horizontal room to read on a phone. */}
        <ol
          className="rd-timeline rd-zig relative mx-auto mt-12 max-w-6xl list-none space-y-8 p-0 pl-14 sm:pl-16 md:space-y-0 md:pl-0"
          style={{ ["--rd-zig-rows" as string]: steps.length }}
        >
          {/* phone: straight rail */}
          <span className="rd-time-line md:hidden" style={{ left: "1.25rem" }} />
          <span className="rd-time-fill md:hidden" style={{ left: "1.25rem" }} />

          {/* desktop: the zigzag itself. preserveAspectRatio="none" lets
              the path stretch to the list box; non-scaling-stroke keeps
              the line an even weight despite that distortion.
              Hidden via a wrapper because globals.css has an unlayered
              `img, svg { display: block }` that outranks `hidden`. */}
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
          <svg
            className="size-full"
            viewBox={`0 0 100 ${steps.length * ROW}`}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="rdZigGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--rd-blue)" />
                <stop offset="100%" stopColor="var(--rd-gold)" />
              </linearGradient>
            </defs>
            <path
              d={path}
              fill="none"
              stroke="var(--rd-border)"
              strokeWidth={2}
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="rd-zig__draw"
              d={path}
              fill="none"
              stroke="url(#rdZigGrad)"
              strokeWidth={2}
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={1}
            />
          </svg>
          </div>

          {steps.map((s, i) => {
            const right = i % 2 === 1;
            return (
              <li
                key={s.step}
                className={
                  "rd-step relative md:flex md:items-center " + (right ? "rd-step--right" : "")
                }
                style={{ ["--x" as string]: `${right ? X_RIGHT : X_LEFT}%` }}
              >
                <div
                  className={
                    "rd-step__card md:w-[34%] " + (right ? "md:ml-auto" : "md:mr-auto md:text-right")
                  }
                >
                  <h4 className="text-lg font-semibold text-[var(--rd-ink)] sm:text-xl">{s.title}</h4>
                  <p className="mt-1 text-sm text-[var(--rd-muted)] sm:text-base">{s.desc}</p>
                </div>

                {/* wrapper owns the positioning so GSAP can own the
                    inner circle's transform without fighting it */}
                <span className="rd-step__node">
                  <span className="rd-step__num grid size-10 place-items-center rounded-full border border-[var(--rd-border)] bg-white text-[var(--rd-blue)] shadow-sm sm:size-12">
                    <span className="rd-display text-base sm:text-lg">{s.step}</span>
                  </span>
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RD_PROCESS } from "@/lib/redesign-data";
import { PROCESS_STEPS } from "@/lib/home-data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* The line snakes: nodes sit on the centre line, and between each pair
   the curve bulges out to alternating sides. Quadratic control points at
   x=6/94 put the widest part of each bulge around x=28/72 — a real
   undulation rather than the previous sharp diagonals.
   ROW is viewBox y units per step. */
const CTRL_LEFT = 6;
const CTRL_RIGHT = 94;
const ROW = 100;

export default function RdProcess() {
  const root = useRef<HTMLElement | null>(null);
  const steps = PROCESS_STEPS;

  /* M50,50 Q6,100 50,150 Q94,200 50,250 … */
  const path = steps
    .map((_, i) => {
      const y = i * ROW + ROW / 2;
      if (i === 0) return `M50,${y}`;
      const midY = y - ROW / 2;
      return `Q${i % 2 === 1 ? CTRL_LEFT : CTRL_RIGHT},${midY} 50,${y}`;
    })
    .join(" ");

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)").matches) return;
    const ctx = gsap.context(() => {
      /* Drive the draw from onUpdate rather than tweening the property:
         one source of truth for both the line and the travelling marker,
         and it can't drift out of sync with the scrub. */
      const line = root.current?.querySelector<SVGPathElement>(".rd-zig__draw");
      const dot = root.current?.querySelector<HTMLElement>(".rd-zig__dot");

      if (line) {
        const total = line.getTotalLength();
        const rows = steps.length * ROW;
        const stepEls = gsap.utils.toArray<HTMLElement>(".rd-step");
        /* Every curve segment is the same shape, so node i sits at
           i/(n-1) along the path — that's the exact progress at which the
           marker reaches it, and therefore when its card should light. */
        const segments = Math.max(stepEls.length - 1, 1);

        ScrollTrigger.create({
          trigger: ".rd-timeline",
          start: "top 72%",
          end: "bottom 85%",
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            line.style.strokeDashoffset = String(1 - p);

            stepEls.forEach((el, i) => el.classList.toggle("is-on", p >= i / segments));

            if (!dot) return;
            /* The marker is an HTML element, not an SVG child, so it
               escapes preserveAspectRatio="none" squashing the circle
               into an ellipse. viewBox is 0..100 wide by 0..rows tall,
               so the point maps straight to percentages. */
            const pt = line.getPointAtLength(total * p);
            dot.style.left = `${pt.x}%`;
            dot.style.top = `${(pt.y / rows) * 100}%`;
            dot.style.opacity = p > 0.001 && p < 0.999 ? "1" : "0";
          },
        });
      }

      gsap.utils.toArray<HTMLElement>(".rd-step").forEach((step) => {
        const fromRight = step.classList.contains("rd-step--right");
        gsap.from(step.querySelector(".rd-step__card"), {
          x: fromRight ? 40 : -40,
          autoAlpha: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 90%" },
        });
        const num = step.querySelector(".rd-step__num");
        if (num)
          gsap.from(num, {
            scale: 0,
            rotate: -30,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: { trigger: step, start: "top 90%" },
          });
        /* `is-on` is owned by the marker's onUpdate above — a second
           trigger toggling the same class would fight it. */
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
          className="rd-display mt-12 text-2xl text-[var(--rd-ink)] sm:text-3xl md:text-center"
          style={{ textTransform: "none" }}
        >
          {RD_PROCESS.detailHeading}
        </h3>

        {/* Below md this collapses to a left rail — a snake has no
            horizontal room to read on a phone. */}
        <ol
          className="rd-timeline rd-zig relative mx-auto mt-8 max-w-5xl list-none space-y-8 p-0 pl-14 sm:pl-16 md:space-y-0 md:pl-0"
          style={{ ["--rd-zig-rows" as string]: steps.length }}
        >
          <span className="rd-time-line md:hidden" style={{ left: "1.25rem" }} />
          <span className="rd-time-fill md:hidden" style={{ left: "1.25rem" }} />

          {/* the marker that rides the curve as you scroll */}
          <span
            aria-hidden
            className="rd-zig__dot pointer-events-none absolute z-[2] hidden size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 md:block"
            style={{
              background: "var(--rd-gold)",
              boxShadow: "0 0 0 5px rgba(201,162,39,0.18), 0 0 18px 4px rgba(201,162,39,0.45)",
              transition: "opacity .3s ease",
            }}
          />

          {/* Hidden via a wrapper because globals.css sets
              `img, svg { display: block }`, which outranks `hidden`. */}
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
            <svg className="size-full" viewBox={`0 0 100 ${steps.length * ROW}`} preserveAspectRatio="none">
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
              />
              <path
                className="rd-zig__draw"
                d={path}
                fill="none"
                stroke="url(#rdZigGrad)"
                strokeWidth={2}
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
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
                className={"rd-step relative md:flex md:items-center " + (right ? "rd-step--right" : "")}
              >
                {/* Solid fill + `relative` so the curve tucks BEHIND the
                    card where it grazes. Without positioning, the
                    absolutely-positioned SVG paints over static content
                    and the line runs straight through the text. */}
                <div
                  className={
                    "rd-step__card relative rounded-2xl md:w-[43%] md:border md:border-[var(--rd-border)] md:bg-white md:p-5 md:shadow-[0_10px_30px_rgba(12,36,61,0.05)] " +
                    (right ? "md:ml-auto" : "md:mr-auto md:text-right")
                  }
                >
                  <h4 className="text-lg font-semibold text-[var(--rd-ink)] sm:text-xl">{s.title}</h4>
                  <p className="mt-1 text-sm text-[var(--rd-muted)] sm:text-base">{s.desc}</p>
                </div>

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

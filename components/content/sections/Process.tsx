"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { Kicker } from "@/components/content/primitives";
import { CM_PROCESS } from "@/lib/content-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Numbered steps as a pinned horizontal-scroll gallery (desktop) with a
   scrub-driven progress line; simple vertical reveal on mobile. */
export function ProcessSection({
  steps = CM_PROCESS.steps,
  intro = CM_PROCESS.intro,
}: {
  steps?: readonly { title: string; desc: string }[];
  intro?: string;
}) {
  const root = useRef<HTMLElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 900px)", () => {
        const el = track.current!;
        const getDist = () => el.scrollWidth - window.innerWidth;

        gsap.to(el, {
          x: () => -getDist(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => "+=" + getDist(),
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.to(".cm-proc__bar", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => "+=" + getDist(),
            scrub: 1,
          },
        });
      });

      mm.add("(max-width: 899px)", () => {
        gsap.from(".cm-proc__card", {
          y: 50,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: track.current, start: "top 80%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden border-y border-[var(--cm-line)] bg-[var(--cm-panel)] py-8 sm:py-12 md:flex md:min-h-[100svh] md:flex-col md:justify-center md:py-0"
    >
      <div className="container">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>Our content marketing process</Kicker>
            <h2 className="cm-display m-0 text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--cm-ink)]">
              From research
              <br />
              <span className="cm-grad">to rankings.</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-[var(--cm-muted)] md:block">{intro}</p>
        </div>

        {/* progress line (desktop scrub) */}
        <div className="mb-9 hidden h-px w-full bg-[var(--cm-line)] md:block">
          <div className="cm-proc__bar h-px w-full origin-left scale-x-0 bg-[linear-gradient(90deg,var(--cm-blue),var(--cm-violet))]" />
        </div>
      </div>

      <div className="overflow-hidden max-md:container">
        <div
          ref={track}
          className="flex flex-col gap-4 md:w-max md:flex-row md:gap-5 md:pl-[max(1rem,calc((100vw-1200px)/2))] md:pr-[8vw]"
        >
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="cm-proc__card cm-card relative shrink-0 p-7 md:w-[clamp(280px,24vw,360px)] md:p-9"
            >
              <div
                className="cm-display pointer-events-none absolute -right-1 -top-5 text-[3rem] cm-outline md:text-[4rem]"
                style={{ WebkitTextStroke: "1px rgba(12,36,61,0.12)" }}
              >
                0{i + 1}
              </div>
              <div className="cm-display text-sm text-[var(--cm-blue)]">0{i + 1}</div>
              <h3 className="mt-3 text-xl font-semibold text-[var(--cm-ink)] md:text-2xl">{step.title}</h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-[var(--cm-muted)]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

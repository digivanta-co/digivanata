"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { Label } from "@/components/design/primitives";
import { GD_PROCESS } from "@/lib/design-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Numbered steps as a pinned horizontal scroll gallery (desktop)
   with a scrub-driven progress line; simple vertical reveal on mobile. */
export function ProcessSection({
  steps = GD_PROCESS.steps,
  intro = GD_PROCESS.intro,
  label = "How we work",
  headingTop = "The process,",
  headingAccent = "start to ship.",
  headingBreak = true,
  scrollFactor = 1,
}: {
  steps?: readonly { title: string; desc: string }[];
  intro?: string;
  label?: string;
  headingTop?: string;
  headingAccent?: string;
  headingBreak?: boolean;
  /* Scroll distance as a multiple of the track's overflow width. 1 maps
     one pixel of scroll to one pixel of pan; lower values make the
     gallery pan faster so the pin holds the viewport for less time. */
  scrollFactor?: number;
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
        /* how far the page scrolls while pinned — the pan itself always
           covers the full track, so a lower factor just pans faster */
        const getScroll = () => getDist() * scrollFactor;

        gsap.to(el, {
          x: () => -getDist(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => "+=" + getScroll(),
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.to(".gd-proc__bar", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => "+=" + getScroll(),
            scrub: 1,
          },
        });
      });

      mm.add("(max-width: 899px)", () => {
        gsap.from(".gd-proc__card", {
          y: 50,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: track.current, start: "top 30%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, [scrollFactor]);

  return (
    <section
      ref={root}
      id="process"
      className="relative flex flex-col justify-center overflow-hidden bg-[var(--gd-soft)] py-8 md:min-h-[80vh] md:py-12 lg:min-h-[85vh]"
    >
      <div className="container">
        <div className="mb-6 text-center gap-4 md:mb-4" >
          <div>
            <Label>{label}</Label>
            <h2 className="gd-display m-0 mb-4 text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
              {headingTop}
              {headingBreak ? <br /> : " "}
              <span className="gd-grad ">{headingAccent}</span>
            </h2>
          </div>
          <p className="hidden  text-sm text-[var(--gd-muted)] md:block">
            {intro}
          </p>
        </div>

        {/* progress line (desktop scrub) */}
        <div className="mb-9 hidden h-px w-full bg-[var(--gd-line)] md:block">
          <div className="gd-proc__bar h-px w-full origin-left scale-x-0 bg-[linear-gradient(90deg,var(--gd-navy),var(--gd-gold))]" />
        </div>
      </div>

      <div className="gd-proc__viewport overflow-hidden max-md:container">
        <div
          ref={track}
          className="flex flex-col gap-4 md:w-max md:flex-row md:gap-5 md:pl-[max(1rem,calc((100vw-1200px)/2))] md:pr-[8vw]"
        >
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="gd-proc__card gd-card relative shrink-0 p-6 md:w-[clamp(270px,23vw,340px)] md:p-8"
            >
              <div
                className="gd-display pointer-events-none absolute -right-1 -top-5 text-[4.5rem] text-transparent md:text-[5.5rem]"
                style={{ WebkitTextStroke: "1px rgba(13,18,41,0.08)" }}
              >
                0{i + 1}
              </div>
             
              <h3 className="gd-display mt-3 text-xl text-[var(--gd-ink)] md:text-2xl">{step.title}</h3>
              <p className="mb-0 mt-2.5 text-sm leading-relaxed text-[var(--gd-muted)]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

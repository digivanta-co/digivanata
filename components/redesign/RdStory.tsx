"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RD_STORY } from "@/lib/redesign-data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Pinned storytelling — reveals one large message at a time as you scroll. */
export default function RdStory() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".rd-story__line");
      gsap.set(lines, { autoAlpha: 0, y: 50, scale: 0.95 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "center center",
          end: "+=" + lines.length * 200,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => gsap.set(".rd-story__progFill", { scaleX: self.progress }),
        },
      });

      // each line arrives from below, then floats up cleanly — GPU accelerated
      lines.forEach((line, i) => {
        tl.to(line, { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, force3D: true })
          .to(
            line,
            { autoAlpha: 0, y: -50, scale: 1.04, duration: 0.4, force3D: true },
            i === lines.length - 1 ? ">" : ">+=0.3"
          );
      });

      // the blue glow behind slowly breathes wider through the whole story
      tl.fromTo(
        ".rd-story__glow",
        { scale: 0.75, opacity: 0.25 },
        { scale: 1.15, opacity: 0.5, ease: "none", duration: tl.duration() },
        0
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      /* taller on phones: while pinned, the animating lines must sit
         mid-screen — at 40vh they hug the sticky header and exit off-screen */
      className="rd-panel relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[var(--rd-ink)] text-white"
    >
      <div aria-hidden className="rd-story__glow rd-blob rd-blob--blue absolute left-1/2 top-1/2 size-[42vw] max-w-[620px] -translate-x-1/2 -translate-y-1/2 opacity-40" />
      <div className="container relative grid place-items-center">
        <div className="relative grid min-h-[3em] place-items-center [grid-template-areas:'stack']">
          {RD_STORY.map((line, i) => (
            <p
              key={i}
              className="rd-story__line rd-display rd-h2 col-start-1 row-start-1 max-w-4xl text-center text-[clamp(1.6rem,4.2vw,2.6rem)] [grid-area:stack]"
              style={{ textTransform: "none" }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* reading progress for the pinned story */}
      <div aria-hidden className="absolute bottom-10 left-1/2 h-px w-16 -translate-x-1/2 overflow-hidden bg-white/15">
        <span className="rd-story__progFill block h-full w-full origin-left scale-x-0 bg-[var(--rd-gold)]" />
      </div>
    </section>
  );
}

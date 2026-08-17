"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LazyVideo from "@/components/ui/LazyVideo";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Full-bleed typographic break; each letter animates up. `accent` indexes get blue. */
export default function RdBigType({
  words,
  accent = [],
  dark = false,
}: {
  words: string[];
  accent?: number[];
  dark?: boolean;
}) {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".rd-big__char", {
        yPercent: 120,
        rotate: 6,
        transformOrigin: "0% 100%",
        autoAlpha: 0,
        duration: 0.7,
        ease: "power4.out",
        stagger: 0.02,
        scrollTrigger: { trigger: root.current, start: "top 85%" },
      });
      // lines drift horizontally in alternate directions while scrolling past
      gsap.utils.toArray<HTMLElement>(".rd-big__line").forEach((line, i) => {
        gsap.fromTo(
          line,
          { xPercent: i % 2 === 0 ? 4 : -4 },
          {
            xPercent: i % 2 === 0 ? -4 : 4,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className={
        "flex items-center py-16 " +
        (dark ? "rd-panel bg-black text-white" : "")
      }
    >
      <div className="container grid gap-5 items-center lg:grid-cols-[1.1fr_0.9fr]">
        <h2
          aria-label={words.join(" ")}
          className="rd-display rd-mega leading-[0.9]"
        >
          {words.map((w, wi) => (
            <span key={wi} className="rd-big__line block overflow-hidden">
              <span className={"block " + (accent.includes(wi) ? "text-[var(--rd-blue)]" : "")}>
                {Array.from(w).map((ch, ci) => (
                  <span
                    key={ci}
                    className="rd-big__char inline-block"
                    style={{ whiteSpace: ch === " " ? "pre" : "normal" }}
                  >
                    {ch === " " ? " " : ch}
                  </span>
                ))}
              </span>
              {wi < words.length - 1 && <span className="sr-only">{" "}</span>}
            </span>
          ))}
        </h2>

        <div
          className={
            "relative mx-auto w-full max-w-lg overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.18)] lg:mx-0 lg:max-w-none"
          }
        >
          <LazyVideo
            src="/explore-method.mp4"
            className="aspect-[4/5] w-full object-cover md:aspect-[16/11]"
          />
        </div>
      </div>
    </section>
  );
}

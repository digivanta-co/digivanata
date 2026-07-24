"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Full-screen typography where each character animates upward on scroll. */
export default function BigStatement({
  lines = ["Your brand.", "Our obsession."],
}: {
  lines?: string[];
}) {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(".ag-stmt__char", {
        yPercent: 120,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="ag-grain flex min-h-[70svh] items-center py-24"
    >
      <div className="container">
        <h2 className="ag-display ag-mega text-white">
          {lines.map((line, li) => (
            <span key={li} className="block overflow-hidden">
              <span className="inline-block">
                {Array.from(line).map((ch, ci) => (
                  <span
                    key={ci}
                    className="ag-stmt__char inline-block"
                    style={{ whiteSpace: ch === " " ? "pre" : "normal" }}
                  >
                    {ch === " " ? " " : ch}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}

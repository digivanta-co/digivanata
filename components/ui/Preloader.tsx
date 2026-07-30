"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const useIsoEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const WORD = "Digivanta";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useIsoEffect(() => {
    if (!root.current) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = previousOverflow;
        setDone(true);
      },
    });

    tl.from("[data-char]", {
      yPercent: 120,
      opacity: 0,
      stagger: 0.05,
      duration: 0.4,
      ease: "power4.out",
    })
      .to("[data-line]", {
        scaleX: 1,
        duration: 0.6,
        ease: "power2.inOut",
      })
      .to(
        "[data-content]",
        {
          yPercent: -35,
          opacity: 0,
          duration: 0.4,
          ease: "power3.in",
        },
        "+=0.3"
      )
      .to(
        "[data-panel]",
        {
          yPercent: -100,
          stagger: 0.06,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "-=0.1"
      );

    return () => {
      tl.kill();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
    >
      {/* Background Panels */}
      <div className="absolute inset-0 flex">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            data-panel
            className="flex-1 bg-black"
          />
        ))}
      </div>

      {/* Content */}
      <div data-content className="relative z-10 flex flex-col items-center px-6">
        {/* Glow */}
        <span className="pointer-events-none absolute -inset-x-16 -inset-y-24 -z-10 rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.18),transparent_65%)] blur-2xl" />

        {/* Logo */}
        <div className="overflow-hidden pb-1">
          <h1 className="flex font-bold text-[clamp(2.8rem,10vw,6rem)] tracking-tight text-white">
            {[...WORD].map((char, index) => (
              <span key={index} data-char className="inline-block">
                {char}
              </span>
            ))}
            <span data-char className="inline-block text-[#C9A227]">
              .
            </span>
          </h1>
        </div>

        {/* Loading Line */}
        <div className="mt-6 h-px w-44 max-w-[70vw] overflow-hidden bg-white/15">
          <div
            data-line
            className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-[#286FAB] to-[#C9A227]"
          />
        </div>

        {/* Tagline */}
        <p className="mt-4 text-[11px] uppercase tracking-[0.35em] text-white/50">
          Digital Growth Partner
        </p>
      </div>
    </div>
  );
}
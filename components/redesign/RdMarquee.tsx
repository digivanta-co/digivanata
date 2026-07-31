"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RD_MARQUEE } from "@/lib/redesign-data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Giant outlined-blue right→left marquee; speed reacts to scroll velocity. */
export default function RdMarquee() {
  const root = useRef<HTMLElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)").matches) return;
    const el = track.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const half = el.scrollWidth / 2;
      const wrap = gsap.utils.wrap(-half, 0);
      let x = 0;
      const base = 0.7;
      let kick = 0;
      let skew = 0;
      const tick = () => {
        x -= base + kick;
        kick *= 0.92;
        skew *= 0.9; // eases back upright once scrolling stops
        gsap.set(el, { x: wrap(x), skewX: skew });
      };
      gsap.ticker.add(tick);
      const st = ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const v = self.getVelocity();
          kick = Math.min(Math.abs(v) / 110, 45);
          skew = gsap.utils.clamp(-9, 9, v / -160);
        },
      });
      return () => {
        gsap.ticker.remove(tick);
        st.kill();
      };
    }, root);

    return () => ctx.revert();
  }, []);

  const items = [...RD_MARQUEE, ...RD_MARQUEE];

  return (
    <section
      ref={root}
      className="relative overflow-hidden border-y border-[var(--rd-border)] bg-[var(--rd-gray)] py-8"
      aria-label="Our services"
    >
      <div ref={track} className="rd-marquee">
        {items.map((t, i) => (
          <span
            key={i}
            className="rd-display rd-outline flex items-center gap-8 text-[clamp(2rem,6vw,4.5rem)]"
          >
            {t}
            <span
              className="text-[var(--rd-gold)]"
              style={{ WebkitTextStroke: "0" }}
            >
              •
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, reduced } from "@/animations/gsap";
import { CM_HERO } from "@/lib/content-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Giant outlined typography whose drift speed reacts to scroll velocity.
 *  Ticker only runs while the section is on screen. */
export function VelocityMarquee({ items = CM_HERO.marquee }: { items?: readonly string[] }) {
  const root = useRef<HTMLElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const el = track.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const half = el.scrollWidth / 2;
      let x = 0;
      const baseSpeed = 0.55;
      let velScale = 0;
      let active = false;

      const wrap = gsap.utils.wrap(-half, 0);
      const tick = () => {
        if (!active) return;
        x -= baseSpeed + velScale;
        velScale *= 0.92;
        gsap.set(el, { x: wrap(x) });
      };
      gsap.ticker.add(tick);

      const st = ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => {
          active = self.isActive;
        },
        onUpdate: (self) => {
          velScale = Math.min(Math.abs(self.getVelocity()) / 130, 34);
        },
      });

      return () => {
        gsap.ticker.remove(tick);
        st.kill();
      };
    }, root);

    return () => ctx.revert();
  }, []);

  const doubled = [...items, ...items];

  return (
    <section
      ref={root}
      className="ag-grain relative overflow-hidden border-y border-[var(--cm-line)] bg-[var(--cm-panel)] py-9"
      aria-label="Content services"
    >
      <div ref={track} className="ag-marquee">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="cm-display flex items-center gap-8 text-[clamp(1.9rem,5.2vw,4.2rem)] cm-outline"
          >
            {t}
            <span className="text-[var(--cm-blue)]" style={{ WebkitTextStroke: "0" }}>
              •
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}

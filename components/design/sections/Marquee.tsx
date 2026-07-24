"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, reduced } from "@/animations/gsap";
import { GD_HERO } from "@/lib/design-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Outlined typography whose drift speed is driven by scroll velocity.
 *  The ticker only runs while the section is on screen. */
export function VelocityMarquee({ items = GD_HERO.marquee }: { items?: readonly string[] }) {
  const root = useRef<HTMLElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const el = track.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const half = el.scrollWidth / 2;
      let x = 0;
      const baseSpeed = 0.5;
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
          velScale = Math.min(Math.abs(self.getVelocity()) / 140, 30);
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
      className="relative overflow-hidden border-y border-[var(--gd-line)] bg-[var(--gd-soft)] py-7"
      aria-label="Design services"
    >
      <div ref={track} className="ag-marquee">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="gd-display flex items-center gap-7 hover:text-[var(--gd-gold)] text-[clamp(2.2rem,6.5vw,5.2rem)] text-transparent"
            style={{ WebkitTextStroke: "1px rgba(13,18,41,0.22)" }}
          >
            {t}
            <span className="text-[var(--gd-gold)]" style={{ WebkitTextStroke: "0" }}>
              •
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}

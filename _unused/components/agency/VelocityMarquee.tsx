"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AG_MARQUEE } from "@/lib/agency-data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Giant right-to-left typography whose speed is driven by scroll velocity. */
export default function VelocityMarquee() {
  const root = useRef<HTMLDivElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = track.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // width of one repetition (half, since content is duplicated)
      const half = el.scrollWidth / 2;
      let x = 0;
      let baseSpeed = 0.6; // px per frame, constant drift
      let velScale = 0; // extra from scroll velocity

      const wrap = gsap.utils.wrap(-half, 0);
      const tick = () => {
        x -= baseSpeed + velScale;
        velScale *= 0.92; // decay the scroll kick
        gsap.set(el, { x: wrap(x) });
      };
      gsap.ticker.add(tick);

      const st = ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          velScale = Math.min(Math.abs(self.getVelocity()) / 120, 40);
        },
      });

      return () => {
        gsap.ticker.remove(tick);
        st.kill();
      };
    }, root);

    return () => ctx.revert();
  }, []);

  const items = [...AG_MARQUEE, ...AG_MARQUEE];

  return (
    <section
      ref={root}
      className="ag-grain relative overflow-hidden border-y border-[var(--ag-line)] py-10"
      aria-label="Services"
    >
      <div ref={track} className="ag-marquee">
        {items.map((t, i) => (
          <span
            key={i}
            className="ag-display flex items-center gap-8 text-[clamp(3rem,11vw,11rem)] text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)" }}
          >
            {t}
            <span className="text-[#4F7DFD]" style={{ WebkitTextStroke: "0" }}>
              •
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}

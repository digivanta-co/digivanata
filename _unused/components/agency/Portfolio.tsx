"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AG_PORTFOLIO } from "@/lib/agency-data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Cards scroll horizontally while the page scrolls vertically (pinned). */
export default function Portfolio() {
  const root = useRef<HTMLElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);

  useIso(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = track.current;
    if (!el || !root.current) return;

    const ctx = gsap.context(() => {
      const distance = el.scrollWidth - window.innerWidth;
      if (distance <= 0) return;

      const tween = gsap.to(el, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // subtle image zoom + rotate as they move
      gsap.utils.toArray<HTMLElement>(".ag-port__card").forEach((card) => {
        const img = card.querySelector<HTMLElement>(".ag-port__img");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.15 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: tween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="work" className="relative overflow-hidden">
      <div className="flex h-[100svh] flex-col justify-center">
        <div className="container mb-10 flex items-end justify-between">
          <h2 className="ag-display text-[clamp(2rem,5vw,3.5rem)] text-white">
            Selected work
          </h2>
          <span className="hidden text-sm text-[var(--ag-muted)] md:block">
            Scroll to explore →
          </span>
        </div>

        <div ref={track} className="flex gap-6 pl-[max(1rem,calc((100vw-1200px)/2))] pr-[10vw]">
          {AG_PORTFOLIO.map((p) => (
            <article
              key={p.t}
              className="ag-port__card group relative h-[60vh] w-[78vw] shrink-0 overflow-hidden rounded-[26px] border border-[var(--ag-line)] sm:w-[46vw] lg:w-[36vw]"
            >
              <Image
                src={p.img}
                alt={p.t}
                fill
                sizes="(max-width: 640px) 78vw, 40vw"
                className="ag-port__img object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-7 transition-transform duration-500 group-hover:translate-y-0">
                <div className="text-xs uppercase tracking-[0.2em] text-[#7a9bff]">
                  {p.cat}
                </div>
                <h3 className="mt-2 text-2xl font-semibold text-white">{p.t}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-[var(--ag-muted)] opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                  Full-funnel campaign delivering measurable revenue growth.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

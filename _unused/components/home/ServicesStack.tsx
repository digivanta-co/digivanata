"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES_DETAIL } from "@/lib/home-data";
import { ArrowRight } from "@/components/ui/Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useIsoEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Service = (typeof SERVICES_DETAIL)[number];
type ServiceLoose = {
  problems?: readonly string[];
  struggles?: readonly string[];
  focus?: readonly string[];
  helps?: readonly string[];
  cta?: string;
};

/** Pick a secondary list (problems / struggles / focus / helps) for the right column. */
function secondary(s: Service): { heading: string; items: readonly string[] } | null {
  const r = s as ServiceLoose;
  if (r.problems) return { heading: "Problems we solve", items: r.problems };
  if (r.struggles) return { heading: "Common challenges", items: r.struggles };
  if (r.focus) return { heading: "What we focus on", items: r.focus };
  if (r.helps) return { heading: "How we help", items: r.helps };
  return null;
}

export default function ServicesStack() {
  const root = useRef<HTMLElement | null>(null);
  const pin = useRef<HTMLDivElement | null>(null);

  useIsoEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".sstack__card");
      const dots = gsap.utils.toArray<HTMLElement>(".sstack__dot");
      const n = cards.length;
      if (n < 2) return;

      // initial stack: first card forward, rest hidden behind
      cards.forEach((c, i) =>
        gsap.set(c, i === 0
          ? { autoAlpha: 1, scale: 1, yPercent: 0 }
          : { autoAlpha: 0, scale: 0.92, yPercent: 14 })
      );
      const setActive = (idx: number) =>
        dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
      setActive(0);

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut", duration: 1 },
        scrollTrigger: {
          trigger: pin.current,
          start: "top top",
          end: "+=" + (n - 1) * 100 + "%",
          pin: true,
          scrub: 0.6,
          onUpdate: (self) => setActive(Math.round(self.progress * (n - 1))),
        },
      });

      for (let i = 0; i < n - 1; i++) {
        tl.to(cards[i], { autoAlpha: 0, scale: 0.88, yPercent: -10 }, i)
          .to(cards[i + 1], { autoAlpha: 1, scale: 1, yPercent: 0 }, i);
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="sstack section--soft" id="services-detail" ref={root}>
      <div className="sstack__pin" ref={pin}>
        <div className="container">
          <div className="sstack__head">
            <span className="eyebrow"><i className="dot" /> Our services</span>
            <h2>Complete Digital Marketing Services in Delhi</h2>
            <p>Digivanta offers end-to-end digital marketing services in Delhi for businesses looking to scale online.</p>
            <div className="sstack__dots">
              {SERVICES_DETAIL.map((s, i) => (
                <span className="sstack__dot" key={s.id}>{String(i + 1).padStart(2, "0")}</span>
              ))}
            </div>
          </div>

          <div className="sstack__stage">
            {SERVICES_DETAIL.map((s, i) => {
              const sec = secondary(s);
              return (
                <article className="sstack__card" key={s.id}>
                  <div className="sstack__card-l">
                    <span className="sstack__num">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{s.title}</h3>
                    <p>{s.intro}</p>
                    <Link href="#contact" className="btn btn--primary">
                      {(s as ServiceLoose).cta ?? "Talk to us"} <ArrowRight />
                    </Link>
                  </div>

                  <div className="sstack__card-r">
                    <div className="sstack__col">
                      <h4>What&apos;s included</h4>
                      <ul className="sstack__list">
                        {s.includes.map((x) => <li key={x}>{x}</li>)}
                      </ul>
                    </div>
                    {sec && (
                      <div className="sstack__col">
                        <h4>{sec.heading}</h4>
                        <ul className="sstack__list sstack__list--alt">
                          {sec.items.map((x) => <li key={x}>{x}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

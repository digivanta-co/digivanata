"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SEO_SERVICES } from "@/lib/seo-data";
import Reveal from "@/components/ui/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SeoServiceCards() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = el.querySelectorAll(".seo-bento");
    const tween = gsap.fromTo(
      cards,
      { opacity: 0, y: 32, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="seo-light-section" id="seo-services-detail">
      <div className="container">
        <Reveal className="seo-sec-head seo-sec-head--light">
          <p className="seo-sec-label seo-sec-label--dark">
            <span className="seo-sec-label__line" />
            SEO Services in Delhi
          </p>
          <h2>Comprehensive SEO Services We Provide</h2>
          <p className="seo-sec-desc seo-sec-desc--dark">Each service is designed to improve search visibility and drive sustainable organic growth.</p>
        </Reveal>

        <div ref={gridRef} className="seo-bento-grid">
          {SEO_SERVICES.map((svc, i) => (
            <article
              key={svc.num}
              className={`seo-bento seo-bento--${i < 2 ? "lg" : "sm"}`}
            >
              <div className="seo-bento__inner">
                <div className="seo-bento__head">
                  <span className="seo-bento__num">{svc.num}</span>
                  <h3>{svc.title}</h3>
                </div>
                <p className="seo-bento__desc">{svc.desc}</p>
                <ul className="seo-bento__list">
                  {svc.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* shimmer sweep */}
              <div
                className="pointer-events-none absolute top-0 -left-full h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-[rgba(201,169,97,0.08)] to-transparent [animation:hv-shimmer_12s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 1.8}s` }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SEO_TRENDS } from "@/lib/seo-data";
import Reveal from "@/components/ui/Reveal";
import { SeoIcon } from "@/components/seo/SeoIcons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SeoTrends() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = el.querySelectorAll(".seot");
    const tween = gsap.fromTo(
      cards,
      { opacity: 0, y: 24, rotateX: 8 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.65,
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
    <section className="seo-light-section" id="seo-trends">
      <div className="container">
        <Reveal className="seo-sec-head seo-sec-head--light">
          <p className="seo-sec-label seo-sec-label--dark">
            <span className="seo-sec-label__line" />
            SEO Trends 2026
          </p>
          <h2>The Future of Search Optimization</h2>
          <p className="seo-sec-desc seo-sec-desc--dark">Search engines are evolving rapidly. Stay ahead with modern strategies.</p>
        </Reveal>

        <div ref={gridRef} className="seot-grid">
          {SEO_TRENDS.map((trend) => (
            <article key={trend.title} className="seot" style={{ perspective: "800px" }}>
              <div className="seot__stripe" />
              <span className="seot__icon">
                <SeoIcon name={trend.icon} />
              </span>
              <h3>{trend.title}</h3>
              <p>{trend.desc}</p>
              <ul>
                {trend.items.map((item) => (
                  <li key={item}>
                    <span className="seot__dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TiltedMarqueeProps {
  items?: string[];
  className?: string;
  speed?: string; // e.g. "25s", "30s"
  direction?: "left-to-right" | "right-to-left";
  angle?: number; // rotation in degrees
}

export default function TiltedMarquee({
  items = [
    "WEB DEVELOPMENT",
    "CUSTOM WEB DESIGN",
    "SPEED OPTIMIZED",
    "SEO-FRIENDLY CODE",
    "E-COMMERCE STORES",
    "RESPONSIVE LAYOUTS"
  ],
  className,
  speed = "32s",
  direction = "left-to-right",
  angle = -1.5,
}: TiltedMarqueeProps) {
  // We repeat the array multiple times to ensure seamless infinite looping without visible gaps
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-10 md:py-14 relative z-20 select-none">
      <div
        className={cn(
          "relative w-[112vw] -left-[6vw] py-4 md:py-5 bg-[var(--brand-navy)] border-y border-[var(--gold)]/30 shadow-[0_15px_35px_rgba(6,16,24,0.18)] flex items-center",
          className
        )}
        style={{
          transform: `rotate(${angle}deg)`,
        }}
      >
        <div
          className={cn(
            direction === "left-to-right" ? "marquee-reverse" : "marquee"
          )}
          style={{
            animationDuration: speed,
          }}
        >
          {/* Group 1 */}
          <div className="marquee__group">
            {repeatedItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <span
                  key={`g1-${idx}`}
                  className={cn(
                    "font-[family-name:var(--font-display)] text-[clamp(1.1rem,3.2vw,2.2rem)] font-extrabold tracking-wider uppercase inline-flex items-center gap-6",
                    isEven
                      ? "text-white"
                      : "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.45)]"
                  )}
                >
                  {item}
                </span>
              );
            })}
          </div>
          {/* Group 2 */}
          <div className="marquee__group" aria-hidden="true">
            {repeatedItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <span
                  key={`g2-${idx}`}
                  className={cn(
                    "font-[family-name:var(--font-display)] text-[clamp(1.1rem,3.2vw,2.2rem)] font-extrabold tracking-wider uppercase inline-flex items-center gap-6",
                    isEven
                      ? "text-white"
                      : "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.45)]"
                  )}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

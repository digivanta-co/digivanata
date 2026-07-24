"use client";

import { motion } from "framer-motion";
import { BI_STATS } from "@/lib/betindia-data";
import { Counter, LiveDot, Section, SectionHeading, BI_EASE } from "./primitives";

export default function BiStats() {
  return (
    <Section id="stats" className="py-24 md:py-32">
      <SectionHeading
        eyebrow="Tonight, On The Floor"
        title="The House Is"
        accent="Alive"
        sub="Live numbers from across every BetIndia table — updated as the cards fall."
      />

      <motion.div
        initial={{ opacity: 0, y: 56 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: BI_EASE }}
        className="bi-border-gold rounded-[2rem] p-2"
      >
        <div className="grid divide-y divide-white/6 rounded-[1.6rem] bg-[#0b1a2e]/50 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {BI_STATS.map((s, i) => (
            <div key={s.label} className="relative px-8 py-10 text-center">
              {/* Top accent tick */}
              <span className="absolute left-1/2 top-0 h-px w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
              <div className="flex items-center justify-center gap-2 text-[0.68rem] font-semibold tracking-[0.22em] text-[#b7c2d0]/70 uppercase">
                {s.live ? <LiveDot /> : null}
                {s.label}
              </div>
              <div className="bi-serif mt-4 text-4xl font-semibold md:text-5xl">
                <Counter
                  value={s.value}
                  prefix={s.prefix ?? ""}
                  suffix={s.suffix ?? ""}
                  decimals={s.decimals ?? 0}
                  className={i === 2 ? "bi-gold-text" : "text-white"}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

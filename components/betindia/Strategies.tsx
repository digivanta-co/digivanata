"use client";

import { motion } from "framer-motion";
import { BI_STRATEGIES } from "@/lib/betindia-data";
import { BI_ICONS, Section, SectionHeading, BI_EASE } from "./primitives";

export default function BiStrategies() {
  return (
    <Section id="strategies" className="bg-[#050d1a]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

      <SectionHeading
        eyebrow="Play Sharper"
        title="Strategies Of The"
        accent="Quiet Professionals"
        sub="Teen Patti rewards temperament over luck. Four disciplines that separate winners from wishers."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {BI_STRATEGIES.map((s, i) => {
          const Icon = BI_ICONS[s.icon];
          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: (i % 2) * 0.12, ease: BI_EASE }}
              className="bi-border-gold bi-sweep group flex gap-6 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(212,175,55,0.12)] sm:p-10"
            >
              <div className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[#d4af37]/30 bg-gradient-to-b from-[#16305083] to-[#0b1c34] sm:grid">
                {Icon ? <Icon className="h-6 w-6 text-[#f0d47a]" /> : null}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="bi-serif text-sm font-semibold tracking-[0.2em] text-[#d4af37]/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="bi-serif text-xl font-semibold text-white">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#b7c2d0]">{s.desc}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

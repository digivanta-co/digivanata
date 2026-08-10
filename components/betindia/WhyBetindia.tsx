"use client";

import { motion } from "framer-motion";
import { BI_WHY } from "@/lib/betindia-data";
import { BI_ICONS, Section, SectionHeading, BI_EASE } from "./primitives";

export default function BiWhy() {
  return (
    <Section id="why">
      <div className="pointer-events-none absolute right-[-15%] top-[10%] h-[26rem] w-[40rem] rounded-full bg-[radial-gradient(ellipse,rgba(30,73,118,0.28),transparent_65%)]" />

      <SectionHeading
        eyebrow="Built Different"
        title="Why India Plays At"
        accent="BetIndia"
        sub="Not the loudest casino. The most considered one — every detail exists because a player asked for it."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {BI_WHY.map((f, i) => {
          const Icon = BI_ICONS[f.icon];
          return (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 48, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: (i % 3) * 0.1, ease: BI_EASE }}
              className="bi-glass bi-sweep group rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/30 hover:shadow-[0_30px_80px_rgba(3,8,16,0.7)]"
            >
              <div className="flex items-center gap-4">
                <div className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#d4af37]/25 bg-gradient-to-b from-[#16305083] to-[#0b1c34] transition-transform duration-500 group-hover:scale-110">
                  {Icon ? <Icon className="h-5 w-5 text-[#f0d47a]" /> : null}
                </div>
                <h3 className="bi-serif text-lg font-semibold text-white">{f.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#b7c2d0]">{f.desc}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

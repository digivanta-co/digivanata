"use client";

import { motion } from "framer-motion";
import { BI_FEATURES } from "@/lib/betindia-data";
import { BI_ICONS, Section, SectionHeading, BI_EASE } from "./primitives";

export default function BiFeatures() {
  return (
    <Section id="features">
      {/* Ambient accent */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[50rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,122,0,0.06),transparent_65%)]" />

      <SectionHeading
        eyebrow="The BetIndia Standard"
        title="Everything A Serious Player"
        accent="Deserves"
        sub="Six promises we make to every player who takes a seat — engineered, audited and kept."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {BI_FEATURES.map((f, i) => {
          const Icon = BI_ICONS[f.icon];
          return (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: (i % 3) * 0.12, ease: BI_EASE }}
              className="bi-border-gold bi-sweep group rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(255,122,0,0.14)]"
            >
              <div className="relative mb-7 inline-grid h-14 w-14 place-items-center rounded-2xl border border-[#d4af37]/30 bg-gradient-to-b from-[#16305083] to-[#0b1c34] transition-colors duration-500 group-hover:border-[#ff7a00]/50">
                <span className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle,rgba(255,122,0,0.25),transparent_70%)] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                {Icon ? (
                  <Icon className="relative h-6 w-6 text-[#f0d47a] transition-colors duration-500 group-hover:text-[#ffb066]" />
                ) : null}
              </div>
              <h3 className="bi-serif text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#b7c2d0]">{f.desc}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

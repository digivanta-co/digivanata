"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { BI_JOURNEY } from "@/lib/betindia-data";
import { BI_ICONS, Section, SectionHeading, BI_EASE } from "./primitives";
import { cn } from "@/lib/utils";

export default function BiJourney() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 72%", "end 78%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <Section id="journey" className="overflow-hidden">
      <SectionHeading
        eyebrow="From First Chip To Final Show"
        title="Your Journey To The"
        accent="Winning Hand"
        sub="Seven moves separate a newcomer from the pot. Here is the ritual, exactly as it unfolds at the table."
      />

      <div ref={trackRef} className="relative mx-auto max-w-4xl">
        {/* Dormant spine */}
        <div className="absolute top-0 bottom-0 left-6 w-px bg-white/8 md:left-1/2" />
        {/* Glowing progress spine */}
        <motion.div
          style={{ scaleY: progress }}
          className="absolute top-0 bottom-0 left-6 w-px origin-top bg-gradient-to-b from-[#d4af37] via-[#ff7a00] to-[#d4af37] shadow-[0_0_14px_1px_rgba(255,122,0,0.55)] md:left-1/2"
        />

        <ol className="space-y-14 md:space-y-20">
          {BI_JOURNEY.map((s, i) => {
            const Icon = BI_ICONS[s.icon];
            const left = i % 2 === 0;
            return (
              <li key={s.step} className="relative">
                {/* Node */}
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: BI_EASE }}
                  className="absolute left-6 top-8 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center md:left-1/2"
                >
                  <span className="absolute h-4 w-4 rounded-full bg-[#ff7a00]/30 blur-[2px]" />
                  <span className="relative h-2.5 w-2.5 rounded-full border border-[#f0d47a] bg-[#081426]" />
                </motion.span>

                <motion.article
                  initial={{ opacity: 0, y: 48, x: left ? -24 : 24 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: BI_EASE }}
                  className={cn(
                    "bi-glass bi-sweep group ml-14 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(212,175,55,0.12)] md:ml-0 md:w-[calc(50%-3rem)]",
                    left ? "md:mr-auto" : "md:ml-auto"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-grid h-12 w-12 place-items-center rounded-xl border border-[#d4af37]/30 bg-gradient-to-b from-[#16305083] to-[#0b1c34]">
                      {Icon ? <Icon className="h-5 w-5 text-[#f0d47a]" /> : null}
                    </div>
                    <span className="bi-serif text-4xl font-semibold text-white/8 transition-colors duration-500 group-hover:text-[#d4af37]/25">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="bi-serif mt-5 text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#b7c2d0]">{s.desc}</p>
                </motion.article>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

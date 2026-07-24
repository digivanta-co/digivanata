"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { BI_FAQS } from "@/lib/betindia-data";
import { Section, SectionHeading, BI_EASE } from "./primitives";
import { cn } from "@/lib/utils";

export default function BiFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="Before You Sit Down"
        title="Questions, "
        accent="Answered"
        sub="Everything players ask before their first hand — straight answers, no fine print."
      />

      <div className="mx-auto max-w-3xl space-y-4">
        {BI_FAQS.map((f, i) => {
          const active = open === i;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, delay: i * 0.06, ease: BI_EASE }}
              className={cn(
                "bi-glass overflow-hidden rounded-2xl transition-all duration-500",
                active && "border-[#ff7a00]/40 shadow-[0_20px_60px_rgba(255,122,0,0.10)]"
              )}
            >
              <button
                onClick={() => setOpen(active ? null : i)}
                aria-expanded={active}
                className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
              >
                <span
                  className={cn(
                    "bi-serif text-lg font-medium transition-colors duration-300",
                    active ? "text-[#ffb066]" : "text-white"
                  )}
                >
                  {f.q}
                </span>
                <span
                  className={cn(
                    "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500",
                    active
                      ? "rotate-45 border-[#ff7a00]/60 bg-[#ff7a00]/15 text-[#ffb066]"
                      : "border-white/15 text-[#b7c2d0]"
                  )}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {active && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: BI_EASE }}
                  >
                    <p className="px-7 pb-7 text-sm leading-relaxed text-[#b7c2d0]">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

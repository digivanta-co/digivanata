"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RD_FAQ_HEADING } from "@/lib/redesign-data";
import { FAQS } from "@/lib/home-data";

const EASE = [0.22, 1, 0.36, 1] as const;

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[var(--rd-border)]">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className={"rd-faq__q text-lg font-semibold transition-colors " + (open ? "text-[var(--rd-blue)]" : "text-[var(--rd-ink)]")}>
          {q}
        </span>
        <motion.span
          animate={{
            rotate: open ? 180 : 0,
            backgroundColor: open ? "var(--rd-blue)" : "rgba(40,111,171,0)",
            borderColor: open ? "var(--rd-blue)" : "var(--rd-border)",
            color: open ? "#ffffff" : "var(--rd-ink)",
          }}
          transition={{ duration: 0.45, ease: EASE }}
          className="relative grid size-8 shrink-0 place-items-center rounded-full border border-[var(--rd-border)]"
        >
          <span className="absolute h-0.5 w-3.5 rounded bg-current" />
          <motion.span
            animate={{ rotate: open ? 0 : 90 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="absolute h-0.5 w-3.5 rounded bg-current"
          />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.08, ease: EASE } }}
              exit={{ y: 8, opacity: 0, transition: { duration: 0.2 } }}
              className="pb-6 pr-12 text-[var(--rd-muted)]"
            >
              {a}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function RdFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-16 sm:py-20">
      <div className="container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rd-eyebrow mb-4">FAQ</span>
          <h2 className="rd-h2 text-[var(--rd-ink)]">{RD_FAQ_HEADING}</h2>
        </div>
        <div>
          {FAQS.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05, ease: EASE }}
            >
              <Item
                q={f.q}
                a={f.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

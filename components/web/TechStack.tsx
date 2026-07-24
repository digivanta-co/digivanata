"use client";

import { motion } from "framer-motion";
import { WEB_TECH } from "@/lib/web-data";
import { Spark } from "@/components/ui/Icons";

export default function WebTechStackSection() {
  return (
    <section className="relative bg-white py-20 lg:py-24 border-t border-[var(--gd-line)]">
      <div className="container relative z-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--gd-blue)]">
            <Spark /> Modern Framework Stack
          </span>
          <h2 className="gd-display m-0 text-[clamp(2rem,4vw,2.8rem)] text-[var(--gd-navy)]">
            Technologies We Build With
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-[var(--gd-muted)]">
            We leverage modern, battle-tested tools and frameworks to ensure lightning-fast load speeds, robust security, and seamless developer handoff.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl mx-auto">
          {WEB_TECH.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group flex items-center gap-3 rounded-full border border-[var(--gd-line)] bg-[var(--gd-soft)] px-5 py-3 text-sm font-semibold text-[var(--gd-navy)] shadow-sm transition-all duration-300 hover:border-[var(--gd-blue)] hover:bg-white hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="size-2 rounded-full bg-[var(--gd-gold)] transition-transform duration-300 group-hover:scale-125" />
              <span>{item.name}</span>
              <span className="text-xs text-[var(--gd-muted)] font-normal border-l border-[var(--gd-line)] pl-2.5">
                {item.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

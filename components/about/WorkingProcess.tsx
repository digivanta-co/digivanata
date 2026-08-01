"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Search, ClipboardList, Code2, Rocket, LineChart, type LucideIcon } from "lucide-react";
import { ABOUT_PROCESS } from "@/lib/about-data";

const ICONS: Record<string, LucideIcon> = { Search, ClipboardList, Code2, Rocket, LineChart };

const gradText: React.CSSProperties = {
  backgroundImage: "linear-gradient(100deg,#235EA7,#4f93d4)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

export default function WorkingProcess() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 65%"] });

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-12 sm:py-20 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-1/3 size-[420px] rounded-full bg-[#235EA7]/[0.07] blur-[64px]" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-10 size-[360px] rounded-full bg-[#D4AF37]/[0.08] blur-[64px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[700px] text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#235EA7]/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#235EA7]">
            <span className="size-1.5 rounded-full bg-[#D4AF37]" /> Our process
          </span>
          <h2 className="mt-5 font-[family-name:var(--font-display),var(--font)] text-[clamp(2.2rem,5vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0C243D]">
            Our Working <span style={gradText}>Process</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[1.05rem] leading-relaxed text-slate-500">
            A strategy-driven, result-focused journey — from the first conversation to long-term growth.
          </p>
        </motion.div>

        <div ref={ref} className="relative mt-16 lg:mt-24">
          {/* ============ Desktop — horizontal timeline ============ */}
          <div className="hidden lg:block">
            <div className="absolute left-[10%] right-[10%] top-9 h-[3px] -translate-y-1/2 rounded-full bg-slate-200" />
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute left-[10%] right-[10%] top-9 h-[3px] -translate-y-1/2 origin-left rounded-full bg-[linear-gradient(90deg,#235EA7,#D4AF37)]"
            />
            <div className="relative grid grid-cols-5 gap-6">
              {ABOUT_PROCESS.map((p, i) => {
                const Icon = ICONS[p.icon] ?? Search;
                return (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="relative grid size-[72px] place-items-center rounded-full border border-[#235EA7]/15 bg-white font-[family-name:var(--font-display),var(--font)] text-2xl font-extrabold text-[#235EA7] shadow-[0_10px_30px_-10px_rgba(35,94,167,0.5)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#235EA7]/40 group-hover:shadow-[0_16px_40px_-12px_rgba(35,94,167,0.6)]">
                      {p.step}
                      <span aria-hidden className="absolute -inset-1 -z-10 rounded-full bg-[#235EA7]/25 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <div className="mt-7 w-full rounded-[24px] border border-slate-200/70 bg-white/95 p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_18px_40px_-24px_rgba(15,23,42,0.18)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-[#235EA7]/25 group-hover:shadow-[0_28px_60px_-24px_rgba(35,94,167,0.4)]">
                      <span className="mb-4 inline-grid size-12 place-items-center rounded-xl bg-[linear-gradient(135deg,#235EA7,#4f93d4)] text-white shadow-lg shadow-[#235EA7]/25 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={24} strokeWidth={2} />
                      </span>
                      <h3 className="text-[1.05rem] font-bold text-[#0C243D]">{p.title}</h3>
                      <p className="mt-2 text-[0.86rem] leading-relaxed text-slate-500">{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ============ Mobile — vertical timeline ============ */}
          <div className="relative lg:hidden">
            <div className="absolute left-[27px] top-4 bottom-4 w-[3px] rounded-full bg-slate-200" />
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-[27px] top-4 bottom-4 w-[3px] origin-top rounded-full bg-[linear-gradient(180deg,#235EA7,#D4AF37)]"
            />
            <div className="space-y-8">
              {ABOUT_PROCESS.map((p, i) => {
                const Icon = ICONS[p.icon] ?? Search;
                return (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="relative pl-[72px]"
                  >
                    <div className="absolute left-0 top-0 grid size-14 place-items-center rounded-full border border-[#235EA7]/15 bg-white text-lg font-extrabold text-[#235EA7] shadow-[0_10px_24px_-10px_rgba(35,94,167,0.5)]">
                      {p.step}
                    </div>
                    <div className="rounded-[24px] border border-slate-200/70 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_36px_-24px_rgba(15,23,42,0.18)]">
                      <span className="mb-3 inline-grid size-11 place-items-center rounded-xl bg-[linear-gradient(135deg,#235EA7,#4f93d4)] text-white">
                        <Icon size={22} strokeWidth={2} />
                      </span>
                      <h3 className="text-[1.02rem] font-bold text-[#0C243D]">{p.title}</h3>
                      <p className="mt-1.5 text-[0.88rem] leading-relaxed text-slate-500">{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/app-dev/primitives";
import { useReveal, useParallax } from "@/hooks/animations";

export function CTASection() {
  const panel = useReveal<HTMLDivElement>({ variant: "scale", duration: 1 });
  const shapeA = useParallax<HTMLDivElement>({ y: -50 });
  const shapeB = useParallax<HTMLDivElement>({ y: 50 });

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="container">
        <div
          ref={panel}
          className="relative overflow-hidden rounded-[36px] bg-[#0F172A] px-6 py-20 text-center sm:px-12"
        >
          {/* animated background */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(80%_120%_at_50%_-10%,rgba(40,111,171,0.65),transparent_60%)]" />
            <div ref={shapeA} className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(40,111,171,0.4),transparent_70%)] blur-3xl" />
            <div ref={shapeB} className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(40,111,171,0.5),transparent_70%)] blur-3xl" />
            <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
          </div>

          <div className="relative z-[1] mx-auto max-w-3xl">
            <p className="mb-4 text-[0.74rem] font-bold uppercase tracking-[0.2em] text-[#286FAB]">Let&apos;s build</p>
            <h2 className="text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.08] tracking-tight text-white [text-wrap:balance]">
              Imagine your business in your{" "}
              <span className="bg-[linear-gradient(120deg,#286FAB,#5a97cc)] bg-clip-text text-transparent">customer&apos;s pocket.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-slate-300">
              One tap. Instant access. Unlimited opportunities. From Android and iOS to AI-powered and
              cross-platform apps, Digivanta turns your idea into a high-performing product.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href="#contact" variant="light">Put My Business on Every Phone</Button>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40"
              >
                Discuss My Idea
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

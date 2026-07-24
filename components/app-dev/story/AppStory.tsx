"use client";

/* ================================================================
   Immersive, scroll-driven "build a mobile app" experience.
   Desktop: pinned cinematic scenes + horizontal scroll (gsap.matchMedia).
   Every section reveals on scroll via the .story-reveal / .story-stagger
   batch. Mobile / reduced-motion degrades gracefully.
   ================================================================ */
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, reduced } from "@/animations/gsap";
import { useCounter } from "@/hooks/animations";
import { cn } from "@/lib/utils";
import { Button } from "@/components/app-dev/primitives";
import { AppIcon } from "@/components/app-dev/AppIcon";
import { Plus } from "lucide-react";
import {
  PhoneFrame,
  ScreenLayer,
  WireframeScreen,
  DesignScreen,
  AppScreen,
  ShowcaseScreen,
} from "@/components/app-dev/story/Phone";
import {
  APP_HERO,
  APP_PROBLEM,
  APP_CUSTOM,
  APP_WHY_CHOOSE,
  APP_TECH,
  APP_PLATFORMS,
  APP_PLATFORM_FOCUS,
  APP_INDUSTRIES,
  APP_PROCESS,
  APP_SUPPORT,
  APP_AI,
  APP_ENTERPRISE,
  APP_PRICING,
  APP_DEDICATED,
  APP_STATS,
  APP_GLANCE,
  APP_AUTHOR,
  APP_FAQS,
} from "@/lib/app-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const BUILD_STAGES = [
  { n: "01", label: "The idea", text: "Every great app starts with a problem worth solving. We turn your concept into a clear, build-ready roadmap." },
  { n: "02", label: "The design", text: "We shape an intuitive, beautiful interface — every screen crafted for usability and flow." },
  { n: "03", label: "The launch", text: "Engineered fast, secure and scalable — then shipped to the App Store & Play Store." },
];

/* ---- dark section heading ---- */
function SceneHead({
  eyebrow,
  title,
  gradWord,
  desc,
  center,
}: {
  eyebrow: string;
  title: string;
  gradWord?: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("story-reveal max-w-2xl", center && "mx-auto text-center")}>
      <p className="mb-3 text-[0.74rem] font-bold uppercase tracking-[0.3em] text-[#286fab]">{eyebrow}</p>
      <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold leading-tight tracking-tight text-[#0c243d]">
        {title}{" "}
        {gradWord && (
          <span className="bg-[linear-gradient(120deg,#286fab,#3d96d4)] bg-clip-text text-transparent">{gradWord}</span>
        )}
      </h2>
      {desc && <p className="mt-4 text-[1.02rem] leading-relaxed text-slate-600">{desc}</p>}
    </div>
  );
}

const cardCls =
  "group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/50 p-6 backdrop-blur transition-colors duration-300 hover:border-[#286fab]/50 hover:bg-slate-100/50";
const chipCls = "rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700";

function StoryStat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const ref = useCounter<HTMLSpanElement>(value, { suffix });
  return (
    <div className="text-center">
      <div className="bg-[linear-gradient(120deg,#286fab,#3d96d4)] bg-clip-text text-[clamp(3rem,8vw,5.5rem)] font-bold tracking-tight text-transparent">
        <span ref={ref}>0{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
    </div>
  );
}

/* ---- dark FAQ row with GSAP height animation ---- */
function FaqRow({ q, a, open0 }: { q: string; a: React.ReactNode; open0?: boolean }) {
  const [open, setOpen] = useState(!!open0);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = panel.current;
    if (!el) return;
    if (reduced()) {
      el.style.height = open ? "auto" : "0px";
      el.style.opacity = open ? "1" : "0";
      return;
    }
    gsap.to(el, { height: open ? "auto" : 0, opacity: open ? 1 : 0, duration: 0.45, ease: "power2.out" });
  }, [open]);

  return (
    <div className="border-b border-slate-200">
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 py-5 text-left">
        <span className="text-[1.02rem] font-semibold text-[#0c243d]">{q}</span>
        <span className={cn("grid size-8 shrink-0 place-items-center rounded-full border border-slate-200 text-[#286fab] transition-all duration-300", open && "rotate-45 bg-[#0c243d] text-white")}>
          <Plus size={16} strokeWidth={2.5} />
        </span>
      </button>
      <div ref={panel} className="h-0 overflow-hidden opacity-0">
        <p className="pb-6 pr-10 text-[0.96rem] leading-[1.75] text-slate-600">{a}</p>
      </div>
    </div>
  );
}

function DarkCta({ title, gradWord, desc, button, href = "#contact" }: { title: string; gradWord?: string; desc?: string; button: string; href?: string }) {
  return (
    <section className="relative py-10 border-b border-slate-200/60 bg-slate-50/10">
      <div className="container">
        <div className="story-reveal relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 px-6 py-16 text-center sm:px-12">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_140%_at_50%_-10%,rgba(40,111,171,0.08),transparent_60%)]" />
          <div className="relative z-[1] mx-auto max-w-2xl">
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight tracking-tight text-[#0c243d]">
              {title} {gradWord && <span className="bg-[linear-gradient(120deg,#286fab,#3d96d4)] bg-clip-text text-transparent">{gradWord}</span>}
            </h2>
            {desc && <p className="mx-auto mt-4 max-w-xl text-[1.02rem] leading-relaxed text-slate-600">{desc}</p>}
            <div className="mt-8 flex justify-center">
              <Button href={href} variant="primary">{button}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AppStory() {
  const root = useRef<HTMLDivElement>(null);

  useIso(() => {
    const el = root.current;
    if (!el || reduced()) return;

    const ctx = gsap.context((self) => {
      const q = self.selector!;
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        /* BUILD — pinned phone, screens cross-fade per stage */
        const screens = q(".build-phone .phone-screen");
        const stages = q(".build-stage");
        gsap.set(screens, { opacity: 0 });
        gsap.set(screens[0], { opacity: 1 });
        gsap.set(stages, { opacity: 0.25 });
        gsap.set(stages[0], { opacity: 1 });

        const buildTl = gsap.timeline({
          scrollTrigger: { trigger: ".build-scene", start: "top top", end: "+=2600", pin: true, scrub: 1 },
        });
        buildTl
          .to(screens[0], { opacity: 0, duration: 0.4 })
          .to(screens[1], { opacity: 1, duration: 0.4 }, "<")
          .to(stages[0], { opacity: 0.25, duration: 0.4 }, "<")
          .to(stages[1], { opacity: 1, duration: 0.4 }, "<")
          .to(".build-phone", { rotate: -3, duration: 0.4 }, "<")
          .to({}, { duration: 0.4 })
          .to(screens[1], { opacity: 0, duration: 0.4 })
          .to(screens[2], { opacity: 1, duration: 0.4 }, "<")
          .to(stages[1], { opacity: 0.25, duration: 0.4 }, "<")
          .to(stages[2], { opacity: 1, duration: 0.4 }, "<")
          .to(".build-phone", { rotate: 0, scale: 1.05, duration: 0.4 }, "<")
          .to({}, { duration: 0.4 });

        /* HORIZONTAL showcase */
        const track = q(".h-track")[0];
        const dist = () => track.scrollWidth - window.innerWidth;
        gsap.to(track, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: { trigger: ".h-wrap", start: "top top", end: () => "+=" + dist(), pin: true, scrub: 1, invalidateOnRefresh: true },
        });

        /* LAUNCH finale */
        const launchTl = gsap.timeline({
          scrollTrigger: { trigger: ".launch-scene", start: "top top", end: "+=1600", pin: true, scrub: 1 },
        });
        launchTl
          .from(".launch-phone", { y: 120, scale: 0.7, opacity: 0, ease: "power2.out" })
          .to(".launch-phone", { y: -60, scale: 1.08, ease: "power1.in" }, "+=0.3")
          .from(".launch-copy > *", { opacity: 0, y: 40, stagger: 0.15 }, "<");
      });

      /* INTRO entrance (all viewports) */
      gsap.from(".intro-word", { yPercent: 120, opacity: 0, duration: 0.95, stagger: 0.18, ease: "power3.out", delay: 0.15 });
      gsap.from(".intro-sub", { opacity: 0, y: 20, duration: 0.6, delay: 1 });

      /* Generic content reveals (all viewports) */
      q(".story-reveal").forEach((node: Element) => {
        gsap.from(node, { opacity: 0, y: 50, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: node, start: "top 85%", once: true } });
      });
      q(".story-stagger").forEach((grid: Element) => {
        gsap.from((grid as HTMLElement).children, {
          opacity: 0, y: 50, scale: 0.96, duration: 0.7, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: grid, start: "top 82%", once: true },
        });
      });

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="bg-white text-slate-800">
      {/* ============ INTRO ============ */}
      <section className="intro-scene relative grid min-h-screen place-items-center overflow-hidden py-28 border-b border-slate-200">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(70%_100%_at_50%_20%,rgba(40,111,171,0.08),transparent_60%)]" />
          <div className="absolute inset-0 [background-image:linear-gradient(rgba(12,36,61,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(12,36,61,0.03)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
        </div>
        <div className="relative z-[1] px-6 text-center">
          <p className="mb-6 text-[0.74rem] font-bold uppercase tracking-[0.3em] text-[#286fab]">{APP_HERO.badge}</p>
          <h1 className="font-bold leading-[1.02] tracking-tight text-[clamp(2.6rem,8vw,7rem)] text-[#0c243d]">
            <span className="block overflow-hidden pb-2"><span className="intro-word inline-block">Every great app</span></span>
            <span className="block overflow-hidden pb-2">
              <span className="intro-word inline-block bg-[linear-gradient(120deg,#286fab,#3d96d4)] bg-clip-text text-transparent">starts as an idea.</span>
            </span>
          </h1>
          <p className="intro-sub mx-auto mt-7 max-w-2xl text-[1.05rem] leading-relaxed text-slate-600">{APP_HERO.sub}</p>
          {/* 90% stat + areas */}
          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 backdrop-blur">
              <span className="bg-[linear-gradient(120deg,#286fab,#3d96d4)] bg-clip-text text-3xl font-bold text-transparent">{APP_HERO.stat}%</span>
              <p className="max-w-[200px] text-left text-[0.8rem] leading-snug text-slate-600">{APP_HERO.statText}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-slate-600">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Serving Delhi NCR:</span>
              {APP_HERO.areas.map((a) => (
                <span key={a} className="rounded-full bg-slate-100 px-3 py-1 text-[0.78rem] text-slate-600">{a}</span>
              ))}
            </div>
          </div>
          <p className="mt-10 text-sm text-slate-400">Scroll to build it ↓</p>
        </div>
      </section>

      {/* ============ WHY BUSINESSES NEED APPS ============ */}
      <section className="relative py-14 lg:py-16 bg-slate-50/50 border-b border-slate-200/60">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SceneHead eyebrow="The Opportunity" title="Why businesses need" gradWord="mobile apps today" desc={APP_PROBLEM.intro} />
          <div className="story-stagger grid gap-3.5">
            {APP_PROBLEM.solutions.map((s) => (
              <div key={s} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[linear-gradient(135deg,#0c243d,#286fab)] text-white">
                  <AppIcon name="code" size={14} />
                </span>
                <span className="text-[0.94rem] font-medium text-slate-700">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BUILD (pinned phone) ============ */}
      <section className="build-scene relative flex min-h-screen items-center overflow-hidden py-14 lg:py-0 border-b border-slate-200">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_50%,rgba(40,111,171,0.05),transparent_60%)]" />
        <div className="container relative z-[1] grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 space-y-10 lg:order-1">
            {BUILD_STAGES.map((s) => (
              <div key={s.n} className="build-stage">
                <span className="bg-[linear-gradient(120deg,#286fab,#3d96d4)] bg-clip-text text-sm font-bold tracking-widest text-transparent">{s.n}</span>
                <h3 className="mt-1 text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold tracking-tight">{s.label}</h3>
                <p className="mt-2 max-w-md text-[1rem] leading-relaxed text-slate-400">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="order-1 flex justify-center lg:order-2">
            <div className="build-phone">
              <PhoneFrame>
                <ScreenLayer><WireframeScreen /></ScreenLayer>
                <ScreenLayer><DesignScreen /></ScreenLayer>
                <ScreenLayer active><AppScreen /></ScreenLayer>
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CUSTOM DEVELOPMENT ============ */}
      <section className="relative py-14 lg:py-16 bg-slate-50/50 border-b border-slate-200/60">
        <div className="container">
          <SceneHead center eyebrow="Tailored to You" title="Custom apps, built around" gradWord="your business" desc={APP_CUSTOM.intro} />
          <div className="story-stagger mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {APP_CUSTOM.focus.map((f) => (
              <span key={f} className={chipCls}>{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TECHNOLOGIES ============ */}
      <section className="relative overflow-hidden py-14 lg:py-16 border-b border-slate-200/60">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_30%_0%,rgba(40,111,171,0.05),transparent_60%)]" />
        <div className="container relative z-[1]">
          <SceneHead center eyebrow="Our Stack" title="Technologies" gradWord="we use" desc="Modern, scalable technologies chosen around your app goals, performance needs and future growth." />
          <div className="story-stagger mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {APP_TECH.map((g) => (
              <div key={g.group} className={cardCls}>
                <span className="mb-5 grid size-12 place-items-center rounded-xl bg-[linear-gradient(135deg,#0c243d,#286fab)] text-white">
                  <AppIcon name={g.icon} />
                </span>
                <h3 className="text-lg font-semibold text-[#0c243d]">{g.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-1 text-[0.78rem] font-medium text-slate-700">{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PLATFORMS (Android, iOS, cross-platform) ============ */}
      <section className="relative py-14 lg:py-16 bg-slate-50/50 border-b border-slate-200/60">
        <div className="container">
          <SceneHead center eyebrow="Platforms" title="Android, iOS &" gradWord="cross-platform" desc="Android users dominate reach, iOS users represent premium segments — we deliver native quality on both, plus cross-platform & hybrid apps from a single codebase using Flutter and React Native." />
          <div className="story-stagger mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {APP_PLATFORM_FOCUS.map((f) => (
              <span key={f} className={chipCls}>{f}</span>
            ))}
          </div>
          <div className="story-stagger mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {APP_PLATFORMS.map((p) => (
              <div key={p.name} className={cn(cardCls, "text-center")}>
                <span className="mx-auto mb-5 grid size-14 place-items-center rounded-2xl bg-[linear-gradient(135deg,#0c243d,#286fab)] text-white transition-transform duration-300 group-hover:scale-110">
                  <AppIcon name={p.icon} size={26} />
                </span>
                <h3 className="text-lg font-semibold text-[#0c243d]">{p.name}</h3>
                <p className="mt-1.5 text-[0.9rem] leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HORIZONTAL SHOWCASE (industries) ============ */}
      <section className="relative bg-[#f8fafc] border-b border-slate-200 py-12 lg:py-0">
        <div className="container lg:hidden">
          <SceneHead eyebrow="Showcase" title="One studio." gradWord="Every kind of app." desc="App solutions built around real-world industry use cases." />
        </div>
        <div className="h-wrap relative overflow-hidden">
          <div className="h-track flex flex-col gap-12 lg:h-screen lg:flex-row lg:gap-0">
            <div className="h-panel hidden shrink-0 flex-col justify-center px-[7vw] lg:flex lg:h-screen lg:w-screen">
              <p className="text-[0.74rem] font-bold uppercase tracking-[0.3em] text-[#286fab]">Showcase</p>
              <h2 className="mt-4 max-w-xl text-[clamp(2.4rem,5vw,4rem)] font-bold leading-tight tracking-tight text-[#0c243d]">
                One studio. <span className="bg-[linear-gradient(120deg,#286fab,#3d96d4)] bg-clip-text text-transparent">Every kind of app.</span>
              </h2>
              <p className="mt-5 max-w-md text-slate-500">Scroll across to explore apps we build for real-world industries →</p>
            </div>
            {APP_INDUSTRIES.map((s, i) => (
              <div key={s.name} className="h-panel grid shrink-0 items-center gap-8 px-6 lg:h-screen lg:w-screen lg:grid-cols-2 lg:px-[7vw]">
                <div className="order-2 lg:order-1">
                  <span className="bg-[linear-gradient(120deg,#286fab,#3d96d4)] bg-clip-text text-6xl font-bold text-transparent">{`0${i + 1}`}</span>
                  <h3 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight text-[#0c243d]">{s.name}</h3>
                  <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-slate-600">{s.desc}</p>
                </div>
                <div className="order-1 flex justify-center lg:order-2">
                  <PhoneFrame>
                    <ShowcaseScreen kind={s.kind} />
                  </PhoneFrame>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="relative py-14 lg:py-16 border-b border-slate-200/60">
        <div className="container">
          <SceneHead center eyebrow="How We Work" title="Our development" gradWord="process" desc="A structured, transparent process for smooth execution, faster delivery and high-quality results." />
          <div className="story-stagger mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {APP_PROCESS.map((s) => (
              <div key={s.step} className={cardCls}>
                <span className="bg-[linear-gradient(120deg,#286fab,#3d96d4)] bg-clip-text text-3xl font-bold tracking-tight text-transparent">{s.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-[#0c243d]">{s.title}</h3>
                <p className="mt-1.5 text-[0.9rem] leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DarkCta title="The next big app could be" gradWord="yours." desc="Whether you're building a customer app, business app, or marketplace, we'll help bring your vision to life." button="Discuss My Idea" />

      {/* ============ SUPPORT ============ */}
      <section className="relative overflow-hidden py-14 lg:py-16 bg-slate-50/50 border-b border-slate-200/60">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_70%_0%,rgba(40,111,171,0.05),transparent_60%)]" />
        <div className="container relative z-[1]">
          <SceneHead center eyebrow="Beyond Launch" title="End-to-end app" gradWord="support" desc="Our work doesn't end at launch. We keep your app secure, updated and ready to scale." />
          <div className="story-stagger mt-12 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {APP_SUPPORT.map((s) => (
              <div key={s} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[linear-gradient(135deg,#0c243d,#286fab)] text-white">
                  <AppIcon name="code" size={14} />
                </span>
                <span className="text-[0.94rem] font-medium text-slate-700">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AI ============ */}
      <section className="relative py-14 lg:py-16 border-b border-slate-200/60">
        <div className="container">
          <SceneHead center eyebrow="Smarter Apps" title="AI-powered" gradWord="mobile applications" desc={APP_AI.intro} />
          <div className="story-stagger mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {APP_AI.features.map((f) => (
              <div key={f.title} className={cn(cardCls, "flex items-center gap-4")}>
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,#0c243d,#286fab)] text-white">
                  <AppIcon name={f.icon} />
                </span>
                <h3 className="text-lg font-semibold text-[#0c243d]">{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ENTERPRISE ============ */}
      <section className="relative py-14 lg:py-16 bg-slate-50/50 border-b border-slate-200/60">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SceneHead eyebrow="Enterprise" title="Enterprise mobile" gradWord="app development" desc={APP_ENTERPRISE.intro} />
          <div className="story-stagger grid gap-3 sm:grid-cols-2">
            {APP_ENTERPRISE.points.map((p) => (
              <div key={p} className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[0.92rem] font-medium text-slate-700">
                <span className="size-2 shrink-0 rounded-full bg-[linear-gradient(120deg,#286fab,#3d96d4)]" />
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="relative overflow-hidden py-14 lg:py-16 border-b border-slate-200/60">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_0%,rgba(40,111,171,0.22),transparent_60%)]" />
        <div className="container relative z-[1]">
          <SceneHead center eyebrow="Pricing Approach" title="Affordable development for" gradWord="startups & SMBs" desc={APP_PRICING.intro} />
          <div className="story-stagger mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {APP_PRICING.plans.map((plan) => (
              <div key={plan.name} className={cn("relative rounded-3xl border p-7 backdrop-blur", plan.featured ? "border-[#286fab] bg-slate-50 lg:-translate-y-3" : "border-slate-200 bg-white")}>
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[linear-gradient(120deg,#0c243d,#286fab)] px-4 py-1 text-[0.66rem] font-bold uppercase tracking-wide text-white">Most Popular</span>
                )}
                <h3 className="text-xl font-bold text-[#0c243d]">{plan.name}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-slate-600">{plan.desc}</p>
                <ul className="mt-6 grid gap-3">
                  {plan.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-[0.9rem] text-slate-700">
                      <span className="size-1.5 rounded-full bg-[#286fab]" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="#contact" variant={plan.featured ? "primary" : "ghost"} className="w-full justify-center">Get Estimate</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DEDICATED DEVELOPERS ============ */}
      <section className="relative py-14 lg:py-16 bg-slate-50/50 border-b border-slate-200/60">
        <div className="container">
          <SceneHead center eyebrow="Long-Term Partner" title="Hire dedicated" gradWord="app developers" desc={APP_DEDICATED.intro} />
          <div className="story-stagger mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {APP_DEDICATED.supports.map((s) => (
              <div key={s} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                <span className="size-2 shrink-0 rounded-full bg-[linear-gradient(120deg,#286fab,#3d96d4)]" />
                <span className="text-[0.92rem] font-medium text-slate-700">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BUILD REAL PROBLEMS (narrative) ============ */}
      <section className="relative py-14 lg:py-16 border-b border-slate-200/60">
        <div className="container">
          <div className="story-reveal mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[0.74rem] font-bold uppercase tracking-[0.3em] text-[#286fab]">Our Philosophy</p>
            <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-tight tracking-tight text-[#0c243d]">
              Build apps that solve <span className="bg-[linear-gradient(120deg,#286fab,#3d96d4)] bg-clip-text text-transparent">real problems.</span>
            </h2>
            <p className="mt-5 text-[1.05rem] leading-[1.8] text-slate-600">
              The most successful apps aren&apos;t the ones with the most features — they&apos;re the ones that solve real user problems effectively. Whether you want to launch an ecommerce app, an on-demand platform, modernize internal operations or create a customer-engagement tool, the right development partner matters. From idea to execution, Digivanta helps you move forward with clarity and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE ============ */}
      <section className="relative overflow-hidden py-14 lg:py-16 bg-slate-50/50 border-b border-slate-200/60">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_40%_0%,rgba(40,111,171,0.2),transparent_60%)]" />
        <div className="container relative z-[1]">
          <SceneHead center eyebrow="Why Digivanta" title="Why choose us for" gradWord="app development" />
          <div className="story-stagger mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {APP_WHY_CHOOSE.map((r) => (
              <div key={r.title} className={cardCls}>
                <span className="mb-5 grid size-12 place-items-center rounded-xl bg-[linear-gradient(135deg,#0c243d,#286fab)] text-white">
                  <AppIcon name={r.icon} />
                </span>
                <h3 className="text-lg font-semibold text-[#0c243d]">{r.title}</h3>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed text-slate-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DarkCta title="Imagine your business in your" gradWord="customer's pocket." desc="One tap. Instant access. Unlimited opportunities. Let's create an app your customers will love to use." button="Put My Business on Every Phone" />

      {/* ============ IMPACT / GLANCE ============ */}
      <section className="relative overflow-hidden border-b border-slate-200 py-16 lg:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(12,36,61,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(12,36,61,0.03)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />
        <div className="container relative z-[1]">
          <h2 className="story-reveal mx-auto mb-16 max-w-2xl text-center text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight text-[#0c243d]">Digivanta at a glance</h2>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            {APP_STATS.map((s) => (
              <StoryStat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
          <div className="story-stagger mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
            {APP_GLANCE.map((g) => (
              <span key={g} className={chipCls}>{g}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LET'S DISCUSS ============ */}
      <section className="relative py-14 lg:py-16 bg-slate-50/50 border-b border-slate-200/60">
        <div className="container">
          <div className="story-reveal mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[0.74rem] font-bold uppercase tracking-[0.3em] text-[#286fab]">Start Here</p>
            <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight text-[#0c243d]">Let&apos;s discuss your app idea</h2>
            <p className="mt-5 text-[1.05rem] leading-[1.8] text-slate-600">
              Every successful app starts with understanding the problem first. We&apos;ll help you choose the right technology, define the development roadmap and build an application that creates real business impact.
            </p>
          </div>
        </div>
      </section>

      {/* ============ AUTHOR / EXPERTISE ============ */}
      <section className="relative py-12 border-b border-slate-200/60">
        <div className="container">
          <div className="story-reveal mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[linear-gradient(120deg,#0c243d,#286fab)] px-3 py-1 text-[0.66rem] font-bold uppercase tracking-wide text-white">Updated {APP_AUTHOR.updated}</span>
              <h3 className="text-lg font-bold text-[#0c243d]">Author Profile</h3>
            </div>
            <p className="text-[0.94rem] leading-relaxed text-slate-600">{APP_AUTHOR.text}</p>
            <p className="mt-6 mb-3 text-sm font-semibold text-slate-700">Areas of Expertise</p>
            <div className="flex flex-wrap gap-2">
              {APP_AUTHOR.expertise.map((e) => (
                <span key={e} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[0.78rem] text-slate-600">{e}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="relative py-14 lg:py-16 bg-slate-50/50 border-b border-slate-200/60">
        <div className="container">
          <SceneHead center eyebrow="FAQ" title="Frequently asked" gradWord="questions" />
          <div className="story-reveal mx-auto mt-12 max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 px-6 sm:px-9">
            {APP_FAQS.map((f, i) => (
              <FaqRow key={f.question} q={f.question} a={f.answer} open0={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ LAUNCH FINALE ============ */}
      <section className="launch-scene relative grid min-h-screen place-items-center overflow-hidden py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_100%_at_50%_120%,rgba(40,111,171,0.15),transparent_60%)]" />
        <div className="relative z-[1] flex flex-col items-center px-6 text-center">
          <div className="launch-phone mb-10">
            <PhoneFrame><AppScreen /></PhoneFrame>
          </div>
          <div className="launch-copy flex flex-col items-center">
            <h2 className="text-[clamp(2.4rem,7vw,5rem)] font-bold leading-[1.05] tracking-tight text-[#0c243d]">
              Now, <span className="bg-[linear-gradient(120deg,#286fab,#3d96d4)] bg-clip-text text-transparent">launch yours.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-slate-600">
              From Android and iOS to AI-powered and cross-platform solutions, Digivanta helps you create apps that are user-focused, scalable and growth-ready. Looking for reliable app developers in Delhi? Let&apos;s build it.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href="#contact" variant="primary">Start My App Journey</Button>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-7 py-3.5 text-sm font-semibold text-[#0c243d] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#286fab] hover:bg-slate-100">Discuss My Idea</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

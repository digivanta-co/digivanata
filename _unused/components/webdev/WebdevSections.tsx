import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { WdIcon } from "@/components/webdev/WebdevIcons";
import { CONTACT } from "@/lib/site-data";
import {
  WD_TRUSTED,
  WD_INTRO,
  WD_PROBLEMS,
  WD_SERVICES_OVERVIEW,
  WD_CUSTOM,
  WD_SOLUTIONS,
  WD_SPEED,
  WD_MOBILE,
  WD_SEO_DEV,
  WD_ECOMMERCE,
  WD_FOCUS,
  WD_WHY_CHOOSE,
  WD_AREAS,
  WD_AUTHOR,
} from "@/lib/webdev-data";

/* ---- Shared helpers ---- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[0.74rem] font-bold uppercase tracking-[0.18em] text-[#a27702]">
      {children}
    </p>
  );
}

function SectionHead({
  eyebrow,
  title,
  desc,
  center = true,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto mb-11 max-w-2xl text-center" : "mb-10 max-w-2xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-[family-name:var(--font-display),var(--font)] text-[clamp(1.9rem,4vw,2.8rem)] font-[800] leading-[1.12] tracking-[-0.03em] text-[var(--ink)]">
        {title}
      </h2>
      {desc && <p className="mt-4 text-[1rem] leading-relaxed text-[var(--muted)]">{desc}</p>}
    </Reveal>
  );
}

const TILE = "place-items-center rounded-xl border border-[rgba(201,169,97,0.25)] bg-[var(--gold-soft)] text-[#a27702]";
const CHECK_BOX = "grid size-6 shrink-0 place-items-center rounded-md bg-[var(--navy)] text-white text-[0.7rem] font-bold";

/* ================================================================
   1. Trusted By — 3 region pills in a simple row
   ================================================================ */
export function TrustedSection() {
  return (
    <section className="wd-light-section" id="wd-trusted">
      <div className="container">
        <SectionHead eyebrow="Trusted Partner" title={WD_TRUSTED.heading} desc={WD_TRUSTED.desc} />
        <div className="flex flex-wrap justify-center gap-4">
          {WD_TRUSTED.regions.map((r, i) => (
            <Reveal
              as="div"
              key={r.name}
              delay={(i + 1) as 1 | 2 | 3}
              className="group flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white px-8 py-5 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[var(--shadow)]"
            >
              <span className={`grid size-11 ${TILE}`}>
                <WdIcon name="mapPin" width={22} height={22} />
              </span>
              <span className="text-[1.1rem] font-bold text-[var(--ink)]">{r.name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   2. Intro — centered prose with accent border card
   ================================================================ */
export function IntroSection() {
  return (
    <section className="wd-light-section" id="wd-intro">
      <div className="container">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-[var(--border)] bg-white px-8 py-10 shadow-[var(--shadow)] sm:px-12">
            <span aria-hidden className="absolute inset-x-0 top-0 h-[5px] bg-[var(--gold)]" />
            <div className="relative z-[1] text-center">
              <Eyebrow>Business Communication</Eyebrow>
              <h2 className="font-[family-name:var(--font-display),var(--font)] text-[clamp(1.7rem,3.8vw,2.5rem)] font-[800] leading-tight tracking-[-0.025em] text-[var(--ink)]">
                {WD_INTRO.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[1.05rem] leading-[1.75] text-[var(--text)]">
                {WD_INTRO.desc}
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-[1.05rem] leading-[1.75] text-[var(--text)]">
                {WD_INTRO.note}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   3. Common Website Problems — 3-column icon grid
   ================================================================ */
export function ProblemsSection() {
  return (
    <section className="wd-light-section" id="wd-problems">
      <div className="container">
        <SectionHead
          eyebrow="Common Issues"
          title="The Real Problems Usually Come From"
          desc="Many businesses invest in websites that look attractive initially but fail to generate leads, inquiries, or conversions over time."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WD_PROBLEMS.map((p, i) => (
            <Reveal
              as="div"
              key={p.text}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="group flex items-center gap-3.5 rounded-2xl border-2 border-[var(--border)] bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#e2483d] hover:shadow-[0_8px_20px_rgba(226,72,61,0.12)]"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[rgba(12,36,61,0.06)] text-[var(--navy)] transition-colors group-hover:bg-[rgba(226,72,61,0.1)] group-hover:text-[#e2483d]">
                <WdIcon name={p.icon} width={20} height={20} />
              </span>
              <span className="text-[0.98rem] font-semibold text-[var(--ink)]">{p.text}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   4. Services Overview — left text + right checklist card
   ================================================================ */
export function ServicesOverviewSection() {
  return (
    <section className="wd-light-section" id="wd-services-overview">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow="Our Services" title={WD_SERVICES_OVERVIEW.heading} desc={WD_SERVICES_OVERVIEW.desc} center={false} />
            <Reveal>
              <Image
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1100"
                alt="Team working on website development project"
                width={1100}
                height={733}
                sizes="(max-width: 1024px) 90vw, 520px"
                className="rounded-2xl border border-[var(--border)] object-cover shadow-[var(--shadow-lg)]"
              />
            </Reveal>
          </div>
          <Reveal delay={2}>
            <div className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)]">
              <span aria-hidden className="absolute inset-y-0 left-0 w-[5px] bg-[var(--gold)]" />
              <h3 className="mb-5 font-[family-name:var(--font-display),var(--font)] text-[1.3rem] font-[700] text-[var(--ink)]">
                Whether you need:
              </h3>
              <ul className="grid gap-3.5">
                {WD_SERVICES_OVERVIEW.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 transition-colors hover:border-[var(--gold)]">
                    <span className={CHECK_BOX}>✓</span>
                    <span className="text-[0.95rem] font-medium text-[var(--text)]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="btn btn--primary btn--lg mt-7 w-full justify-center">
                Let&apos;s Create Something Amazing
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   5. Custom Web Development — dark section with glowing feature cards
   ================================================================ */
export function CustomDevSection() {
  return (
    <section className="wd-dark-section" id="wd-custom">
      <div className="container">
        <Reveal className="mx-auto mb-11 max-w-2xl text-center">
          <Eyebrow>Custom Development</Eyebrow>
          <h2 className="font-[family-name:var(--font-display),var(--font)] text-[clamp(1.9rem,4vw,2.8rem)] font-[800] leading-[1.12] tracking-[-0.03em] text-white">
            {WD_CUSTOM.heading}
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-[#b9cdec]">{WD_CUSTOM.desc}</p>
        </Reveal>

        {/* Two columns: focuses grid + solutions card */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          {/* Focuses — 2-col pill-style grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {WD_CUSTOM.focuses.map((f, i) => (
              <Reveal
                as="div"
                key={f}
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                className="flex items-center gap-3 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-5 py-4 backdrop-blur-sm transition-all hover:border-[var(--gold)] hover:bg-[rgba(255,255,255,0.07)]"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-lg text-[0.72rem] font-[800] text-[#231f20]" style={{ background: "linear-gradient(135deg, var(--gold-light), var(--gold))" }}>
                  ✓
                </span>
                <span className="text-[0.95rem] font-medium text-[#c7d6ee]">{f}</span>
              </Reveal>
            ))}
          </div>

          {/* Solutions card */}
          <Reveal delay={2}>
            <div className="relative overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-7 backdrop-blur-xl">
              <span aria-hidden className="absolute inset-x-0 top-0 h-[3px]" style={{ background: "linear-gradient(90deg, var(--gold), var(--accent))" }} />
              <h3 className="mb-5 font-[family-name:var(--font-display),var(--font)] text-[1.15rem] font-[700] text-white">
                Complete Website Solutions
              </h3>
              <ul className="grid gap-2.5">
                {WD_SOLUTIONS.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 text-[0.92rem] text-[#c7d6ee]">
                    <span className="size-[7px] shrink-0 rounded-full bg-[var(--gold)]" style={{ boxShadow: "0 0 0 3px rgba(201,169,97,0.2)" }} />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.88rem] italic leading-[1.6] text-[#b9cdec]">
                Digivanta builds websites that combine performance, branding, usability, and search engine optimization into every stage of development.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   CTA Band — premium editorial
   ================================================================ */
export function WdCtaBand({
  heading,
  desc,
  ctaText,
  ctaHref = "#contact",
  id,
}: {
  heading: string;
  desc: string;
  ctaText: string;
  ctaHref?: string;
  id?: string;
}) {
  return (
    <section className="wd-cta-section" id={id}>
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-white px-6 py-10 text-center shadow-[var(--shadow)] sm:px-12">
            <span aria-hidden className="absolute inset-x-0 top-0 h-[5px] bg-[var(--gold)]" />
            <div className="relative z-[1] mx-auto max-w-2xl">
              <h2 className="font-[family-name:var(--font-display),var(--font)] text-[clamp(1.6rem,4vw,2.4rem)] font-[800] leading-tight tracking-[-0.02em] text-[var(--ink)]">
                {heading}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[1.02rem] text-[var(--text)]">{desc}</p>
              <Link href={ctaHref} className="btn btn--primary btn--lg mt-6">
                {ctaText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   6. Speed — stat callout + impact/optimization two-column
   ================================================================ */
export function SpeedSection() {
  return (
    <section className="wd-light-section" id="wd-speed">
      <div className="container">
        <SectionHead eyebrow="Website Speed" title={WD_SPEED.heading} desc={WD_SPEED.desc} />

        {/* Stat banner */}
        <Reveal>
          <div className="relative mx-auto mb-10 max-w-2xl overflow-hidden rounded-[28px] border border-[var(--border)] bg-white px-8 py-8 text-center shadow-[var(--shadow)]">
            <span aria-hidden className="absolute inset-x-0 top-0 h-[5px] bg-[var(--gold)]" />
            <strong className="block font-[family-name:var(--font-display),var(--font)] text-[clamp(3rem,7vw,5rem)] font-[800] leading-none tracking-[-0.04em]" style={{ background: "linear-gradient(100deg, var(--gold), var(--gold-light))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              {WD_SPEED.stat}
            </strong>
            <p className="mt-3 text-[1.1rem] italic text-[var(--text)]">&ldquo;{WD_SPEED.statText}&rdquo;</p>
          </div>
        </Reveal>

        {/* Two columns */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Impacts (what goes wrong) */}
          <Reveal>
            <div className="rounded-2xl border-2 border-[rgba(226,72,61,0.2)] bg-white p-7">
              <h3 className="mb-4 text-[1.1rem] font-bold text-[#e2483d]">A delay of even a few seconds can:</h3>
              <ul className="grid gap-3">
                {WD_SPEED.impacts.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[0.95rem] font-medium text-[var(--ink)]">
                    <span className="grid size-6 shrink-0 place-items-center rounded-md bg-[#e2483d] text-[0.7rem] font-bold text-white">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Optimization focuses (what we do) */}
          <Reveal delay={2}>
            <div className="rounded-2xl border-2 border-[rgba(201,169,97,0.3)] bg-white p-7">
              <h3 className="mb-4 text-[1.1rem] font-bold text-[var(--gold)]">Modern optimization focuses on:</h3>
              <ul className="grid gap-3">
                {WD_SPEED.focuses.map((focus) => (
                  <li key={focus} className="flex items-center gap-3 text-[0.95rem] font-medium text-[var(--ink)]">
                    <span className={CHECK_BOX}>✓</span>
                    {focus}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   7. Mobile — photo + checklist
   ================================================================ */
export function MobileSection() {
  return (
    <section className="wd-light-section" id="wd-mobile">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1100"
              alt="Mobile responsive website displayed on multiple devices"
              width={1100}
              height={825}
              sizes="(max-width: 1024px) 90vw, 520px"
              className="rounded-2xl border border-[var(--border)] object-cover shadow-[var(--shadow-lg)]"
            />
          </Reveal>

          <div>
            <SectionHead eyebrow="Responsive Design" title={WD_MOBILE.heading} desc={WD_MOBILE.desc} center={false} />
            <Reveal>
              <ul className="grid gap-3">
                {WD_MOBILE.benefits.map((b, i) => (
                  <li key={b} className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-5 py-3.5 shadow-[var(--shadow-sm)] transition-colors hover:border-[var(--gold)]">
                    <span className={`grid size-9 shrink-0 ${TILE}`}>
                      <WdIcon name={i === 0 ? "smartphone" : i === 1 ? "zap" : i === 2 ? "layout" : i === 3 ? "users" : "trendUp"} width={18} height={18} />
                    </span>
                    <span className="text-[0.95rem] font-medium text-[var(--text)]">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-5 py-4 text-[0.95rem] italic leading-[1.65] text-[var(--text)]">
                {WD_MOBILE.note}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   8. SEO During Development — dark section, left-right
   ================================================================ */
export function SeoDevSection() {
  return (
    <section className="wd-dark-section" id="wd-seo-dev">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>SEO + Development</Eyebrow>
            <h2 className="font-[family-name:var(--font-display),var(--font)] text-[clamp(1.8rem,3.8vw,2.6rem)] font-[800] leading-[1.12] tracking-[-0.025em] text-white">
              {WD_SEO_DEV.heading}
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-[#b9cdec]">{WD_SEO_DEV.desc}</p>
            <ul className="mt-6 grid gap-3">
              {WD_SEO_DEV.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[0.95rem] text-[#c7d6ee]">
                  <span className="grid size-6 shrink-0 place-items-center rounded-md text-[0.7rem] font-[800] text-[#231f20]" style={{ background: "linear-gradient(135deg, var(--gold-light), var(--gold))" }}>
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={2}>
            <div className="relative overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-7 backdrop-blur-xl">
              <span aria-hidden className="absolute inset-x-0 top-0 h-[3px]" style={{ background: "linear-gradient(90deg, var(--gold), var(--accent))" }} />
              <h3 className="mb-2 font-[family-name:var(--font-display),var(--font)] text-[1.15rem] font-[700] text-white">
                Search engines prefer websites that are:
              </h3>
              <ul className="mt-4 grid gap-2.5">
                {["Fast-loading", "Mobile-friendly", "Secure", "Easy to crawl", "Technically optimized"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[0.92rem] text-[#c7d6ee]">
                    <span className="size-[7px] shrink-0 rounded-full bg-[var(--gold)]" style={{ boxShadow: "0 0 0 3px rgba(201,169,97,0.2)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-4 text-[0.88rem] italic leading-[1.6] text-[#b9cdec]">
                {WD_SEO_DEV.note}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   9. Ecommerce — 2x3 expectation grid + platform pills
   ================================================================ */
export function EcommerceSection() {
  return (
    <section className="wd-light-section" id="wd-ecommerce">
      <div className="container">
        <SectionHead eyebrow="Ecommerce" title={WD_ECOMMERCE.heading} desc={WD_ECOMMERCE.desc} />

        {/* User expectations — 3-column cards */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WD_ECOMMERCE.expectations.map((e, i) => (
            <Reveal
              as="div"
              key={e}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="group flex items-center gap-3.5 rounded-2xl border border-[var(--border)] bg-white px-5 py-4 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[var(--shadow)]"
            >
              <span className={`grid size-10 shrink-0 ${TILE}`}>
                <WdIcon name={i === 0 ? "zap" : i === 1 ? "globe" : i === 2 ? "shield" : i === 3 ? "smartphone" : i === 4 ? "layout" : "target"} width={20} height={20} />
              </span>
              <span className="text-[0.95rem] font-semibold text-[var(--ink)]">{e}</span>
            </Reveal>
          ))}
        </div>

        {/* Platforms we use — pill row */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-5 text-[1.1rem] font-bold text-[var(--ink)]">Our experts develop ecommerce websites using:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {WD_ECOMMERCE.platforms.map((platform) => (
                <span
                  key={platform}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--border)] bg-white px-5 py-2.5 text-[0.9rem] font-semibold text-[var(--navy)] shadow-[var(--shadow-sm)] transition-all hover:-translate-y-[2px] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                >
                  <WdIcon name="cart" width={16} height={16} className="text-[var(--gold)]" />
                  {platform}
                </span>
              ))}
            </div>
            <p className="mt-5 text-[0.96rem] italic text-[var(--muted)]">{WD_ECOMMERCE.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   10. Business Focus — 6-card icon grid
   ================================================================ */
const FOCUS_ICONS: Record<string, string> = {
  "User experience": "users",
  "Conversion optimization": "target",
  "SEO performance": "search",
  "Website scalability": "layers",
  "Technical reliability": "shield",
  "Mobile-first performance": "smartphone",
};

const FOCUS_DESCS: Record<string, string> = {
  "User experience": "Crafting intuitive interfaces that keep visitors engaged and help them find what they need.",
  "Conversion optimization": "Strategically guiding visitors toward meaningful actions like inquiries, signups, and purchases.",
  "SEO performance": "Building search-engine-friendly architecture that improves organic visibility from day one.",
  "Website scalability": "Using modern frameworks that grow with your business without performance degradation.",
  "Technical reliability": "Ensuring uptime, security, and consistent performance under real-world traffic conditions.",
  "Mobile-first performance": "Designing for the majority of your audience: mobile users who expect instant load times.",
};

export function BusinessFocusSection() {
  return (
    <section className="wd-light-section" id="wd-focus">
      <div className="container">
        <SectionHead eyebrow="Business Focus" title={WD_FOCUS.heading} desc={WD_FOCUS.desc} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WD_FOCUS.points.map((point, i) => (
            <Reveal
              as="div"
              key={point}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="group rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[var(--shadow)]"
            >
              <span className={`mb-4 inline-grid size-12 ${TILE}`}>
                <WdIcon name={FOCUS_ICONS[point] ?? "globe"} width={22} height={22} />
              </span>
              <h3 className="mb-1.5 text-[1.05rem] font-semibold text-[var(--ink)]">{point}</h3>
              <p className="text-[0.9rem] leading-relaxed text-[var(--muted)]">{FOCUS_DESCS[point] ?? "Focused on delivering measurable results and long-term business growth."}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   11. Why Choose — checklist + trust side-by-side
   ================================================================ */
export function WhyChooseSection() {
  return (
    <section className="wd-light-section" id="wd-why-choose">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal as="div">
            <Eyebrow>Why Digivanta</Eyebrow>
            <h2 className="font-[family-name:var(--font-display),var(--font)] text-[clamp(1.7rem,3.4vw,2.3rem)] font-[800] tracking-[-0.025em] text-[var(--ink)]">
              Why Businesses Choose Digivanta
            </h2>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-[var(--muted)]">
              Every project is designed to support sustainable digital growth instead of short-term visual appeal.
            </p>
            <ul className="mt-6 grid gap-3">
              {WD_WHY_CHOOSE.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3 shadow-[var(--shadow-sm)] transition-colors hover:border-[var(--gold)]">
                  <span className={CHECK_BOX}>✓</span>
                  <span className="text-[0.92rem] font-medium text-[var(--text)]">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" delay={2}>
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1100"
              alt="Digivanta team collaborating on a web project"
              width={1100}
              height={733}
              sizes="(max-width: 1024px) 90vw, 520px"
              className="rounded-2xl border border-[var(--border)] object-cover shadow-[var(--shadow-lg)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   12. Areas We Serve — pill row
   ================================================================ */
export function AreasSection() {
  return (
    <section className="wd-light-section" id="wd-areas">
      <div className="container">
        <SectionHead
          eyebrow="Service Areas"
          title="Serving Businesses Across Delhi NCR"
          desc="From business websites to ecommerce solutions and scalable web applications, the focus remains on creating modern digital experiences tailored to evolving customer expectations."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {WD_AREAS.map((area) => (
            <Reveal
              as="span"
              key={area}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--border)] bg-white px-5 py-2.5 text-[0.9rem] font-semibold text-[var(--navy)] shadow-[var(--shadow-sm)] transition-all hover:-translate-y-[2px] hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              <WdIcon name="mapPin" width={16} height={16} className="text-[var(--accent)]" />
              {area}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   13. Deserves More — centered prose
   ================================================================ */
export function DeservesMoreSection() {
  return (
    <section className="wd-light-section" id="wd-deserves">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Premium Websites</Eyebrow>
          <h2 className="font-[family-name:var(--font-display),var(--font)] text-[clamp(1.7rem,3.6vw,2.4rem)] font-[800] tracking-[-0.025em] text-[var(--ink)]">
            Your Business Deserves More Than a Basic Website
          </h2>
          <p className="mt-5 text-[1.05rem] leading-[1.8] text-[var(--muted)]">
            Whether you need a responsive business website, ecommerce platform, or scalable custom solution, Digivanta helps businesses create digital experiences focused on performance, usability, and long-term growth.
          </p>
          <p className="mt-4 text-[1.05rem] leading-[1.8] text-[var(--muted)]">
            Let&apos;s build a faster, smarter, and more user-focused website for your business.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   14. Author Profile
   ================================================================ */
export function AuthorSection() {
  return (
    <section className="wd-light-section" id="wd-author">
      <div className="container">
        <Reveal>
          <div className="relative mx-auto max-w-[820px] overflow-hidden rounded-[24px] border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)] sm:p-10">
            <span aria-hidden className="absolute inset-x-0 top-0 h-[4px]" style={{ background: "linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold))" }} />
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span className="rounded-full bg-[var(--gold-light)] px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.05em] text-[#231f20]">Last Updated: {WD_AUTHOR.lastUpdated}</span>
              <h3 className="font-[family-name:var(--font-display),var(--font)] text-[1.3rem] font-[700] text-[var(--ink)]">Author Profile</h3>
            </div>
            <p className="mb-3 text-[1.04rem] leading-[1.75] text-[var(--text)]">{WD_AUTHOR.text}</p>
            <p className="mb-5 text-[1.04rem] leading-[1.75] text-[var(--text)]">
              We continuously monitor web development trends, user experience best practices, search engine guidelines, and emerging technologies to ensure our recommendations remain practical, scalable, and business-focused.
            </p>
            <h4 className="mb-3 text-[0.9rem] font-bold text-[var(--gold)]">Areas of Expertise:</h4>
            <div className="flex flex-wrap gap-2">
              {WD_AUTHOR.expertise.map((exp) => (
                <span key={exp} className="rounded-full border border-[var(--border)] bg-[var(--bg-soft)] px-3.5 py-1.5 text-[0.76rem] font-semibold text-[var(--navy)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]">
                  {exp}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   15. Final Thoughts
   ================================================================ */
export function FinalThoughtsSection() {
  return (
    <section className="wd-light-section" id="wd-final">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Final Thoughts</Eyebrow>
          <h2 className="font-[family-name:var(--font-display),var(--font)] text-[clamp(1.7rem,3.6vw,2.4rem)] font-[800] tracking-[-0.025em] text-[var(--ink)]">
            Ready to Build a Website That Actually Performs?
          </h2>
          <p className="mt-5 text-[1.05rem] leading-[1.8] text-[var(--muted)]">
            A modern website should do more than just look good — it should improve visibility, create trust, and help your business grow consistently online. Digivanta builds fast, responsive, SEO-focused, and conversion-driven websites designed around real business goals.
          </p>
          <p className="mt-4 text-[1.05rem] leading-[1.8] text-[var(--muted)]">
            Connect with our team to discuss a website strategy tailored to your business needs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   16. Stronger Digital Presence
   ================================================================ */
export function StrongerPresenceSection() {
  return (
    <section className="wd-light-section" id="wd-stronger">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Digital Presence</Eyebrow>
          <h2 className="font-[family-name:var(--font-display),var(--font)] text-[clamp(1.7rem,3.6vw,2.4rem)] font-[800] tracking-[-0.025em] text-[var(--ink)]">
            Build a Stronger Digital Presence with Digivanta
          </h2>
          <p className="mt-5 text-[1.05rem] leading-[1.8] text-[var(--muted)]">
            From responsive website design and ecommerce development to SEO-friendly web solutions, our professionals help businesses create modern digital platforms that improve engagement, visibility, and customer experience.
          </p>
          <p className="mt-4 text-[1.05rem] leading-[1.8] text-[var(--muted)]">
            <strong className="text-[var(--ink)]">A Better Website Creates Better Business Opportunities.</strong> Slow, outdated, and poorly optimized websites quietly reduce trust and conversions. Digivanta helps businesses create fast, scalable, and conversion-focused digital experiences built for modern users and long-term growth.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

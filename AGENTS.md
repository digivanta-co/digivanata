<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Digivanta — Codebase & Architecture Guide

This guide provides an overview of the Digivanta codebase, design system conventions, directory structure, and architectural patterns to help AI agents (Claude, Antigravity, etc.) work effectively in this repository.

---

## 1. Tech Stack Overview

- **Framework**: Next.js (App Router)
- **Language**: TypeScript (`strict: true`)
- **Styling**: Tailwind CSS + Custom CSS Variables (`app/globals.css`)
- **Animations**: GSAP (with `ScrollTrigger`) for high-performance scroll effects + Framer Motion for interactive micro-primitives
- **Icons**: Custom SVG icons (`components/ui/Icons.tsx`) & Lucide React (`lucide-react`)

---

## 2. Directory Structure

```
digivanta/
├── app/                                  # Next.js App Router pages
│   ├── page.tsx                          # Homepage
│   ├── layout.tsx                        # Root Layout & metadata
│   ├── globals.css                       # Design systems CSS (.gd, .rd, etc.)
│   ├── seo-services-in-delhi/            # SEO Services page
│   ├── ppc-company-in-delhi/             # PPC / Google Ads page
│   ├── social-media-marketing-in-delhi/  # Social Media Marketing page
│   ├── content-marketing-in-delhi/       # Content Marketing page
│   ├── graphic-designing-company-in-delhi/# Graphic Design page
│   ├── online-reputation-management.../  # ORM page
│   ├── mobile-app-development-in-delhi/  # Mobile App Dev page
│   ├── web-development-company-in-delhi/ # Web Dev page
│   ├── about/                            # About Us page
│   ├── contact/                          # Contact page
│   ├── faq/                              # FAQ page
│   └── digivanta-team/                   # Team page
│
├── components/                           # Component Library
│   ├── design/                           # Shared Light Luxury Design System (.gd)
│   │   ├── primitives.tsx                # Label, StatBig, CtaRibbon
│   │   └── sections/                     # Shared Sections: Hero, Services, Process, Trust, Value, Faq, Cta, Marquee
│   ├── agency/                           # Interactive Primitives (MagneticButton, TiltCard)
│   ├── redesign/                         # Homepage Redesign components (.rd scope)
│   ├── seo/                              # SEO section components
│   ├── ppc/                              # PPC section components
│   ├── smm/                              # Social Media Marketing section components
│   ├── content/                          # Content Marketing section components
│   ├── orm/                              # ORM section components
│   ├── web/                              # Web Dev section components
│   ├── app-dev/                          # Mobile App Dev section components
│   └── ui/                               # Shared UI (Icons.tsx, Reveal.tsx, faq-accordion.tsx)
│
├── lib/                                  # Centralized Content Data & Utilities
│   ├── site-data.ts                      # Global contact info, navigation, branding
│   ├── design-data.ts                    # Graphic design page data
│   ├── seo-data.ts                       # SEO page data
│   ├── ppc-data.ts                       # PPC page data
│   ├── smm-data.ts                       # Social Media Marketing page data
│   ├── content-data.ts                   # Content Marketing page data
│   ├── orm-data.ts                       # ORM page data
│   ├── web-data.ts                       # Web Dev page data
│   ├── app-dev-data.ts                   # Mobile App Dev page data
│   └── utils.ts                          # Classname helper (cn)
│
├── animations/                           # GSAP setup & reduced motion checks
│   └── gsap.ts                           # GSAP instance & ScrollTrigger registration
│
└── hooks/                                # Custom React hooks
    └── animations.ts                     # Counter, Reveal, and Marquee hooks
```

---

## 3. Design System & Styling Conventions

All service pages (SEO, PPC, SMM, Content Marketing, Graphic Design, ORM) use the **Shared Light Luxury Theme** scoped under the `.gd` CSS class.

### CSS Theme Variables (`.gd` scope in `app/globals.css`)
- `--gd-ink`: `#0d1229` (Primary typography)
- `--gd-navy`: `#0C243D` (Navy brand color)
- `--gd-blue`: `#286FAB` (Steel blue accent)
- `--gd-gold`: `#b08d3f` (Luxury gold kicker accent)
- `--gd-gold-soft`: `rgba(176, 141, 63, 0.12)`
- `--gd-muted`: `#5b6478` (Muted body text)
- `--gd-line`: `rgba(13, 18, 41, 0.1)` (Subtle section borders)
- `--gd-soft`: `#f6f7fb` (Soft background section rhythm)

### Common CSS Classes
- `.gd-display`: Editorial display font (`font-family: var(--font-display)`) uppercase title styling.
- `.gd-grad`: Gradient text from `--gd-navy` to `--gd-blue`.
- `.gd-card`: Standard card container with cursor spotlight effect (`TiltCard`).

---

## 4. Shared Component Patterns

When building or updating service pages, reuse the shared section primitives in `@/components/design/`:

1. **Top Banner / Hero**: GSAP 3D character flip headline + `MagneticButton` CTAs + trust meta stats.
2. **`VelocityMarquee`**: Infinite scroll text ticker driven by scroll velocity.
3. **`CtaRibbon`**: Full-width inline CTA ribbon between major page sections (`@/components/design/primitives`).
4. **`ProcessSection`**: Pinned horizontal scroll gallery on desktop with scrubbed progress bar.
5. **`IndustriesSection`**: Continuous marquee of target industry verticals.
6. **`BigStatement`**: Character-reveal impact statement typography.
7. **`FAQSection`**: Minimal accordion with gold numbers (`01`, `02`, etc.) and plus toggles.
8. **`CTASection`**: Full-width contact CTA section with word reveal and `MagneticButton`.

---

## 5. Guidelines for AI Assistants

1. **Content Separation**: NEVER hardcode text content directly into TSX components. Always store text, statistics, features, and FAQ items in `lib/<service>-data.ts`.
2. **Theme Scoping**: Wrap main page layouts with `<main className="gd">` to ensure design tokens apply correctly.
3. **Animations**: Always use GSAP context or `useIso` layout effect for animations, and check for `reduced()` (`prefers-reduced-motion`) before triggering heavy scroll animations.
4. **Type Safety**: Verify TypeScript correctness after edits by running:
   ```bash
   npx tsc --noEmit
   ```

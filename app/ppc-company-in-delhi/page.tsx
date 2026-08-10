import type { Metadata } from "next";
import HeroSection, { IntroSection } from "@/components/ppc/sections/Hero";
import { FailSection, QualifiedSection, ResultsSection } from "@/components/ppc/sections/Value";
import { ServicesSection } from "@/components/ppc/sections/Services";
import { MgmtSection, SeoPpcSection, DataDrivenSection } from "@/components/ppc/sections/Strategy";
import { LeadGenSection, WhySection, GrowSection } from "@/components/ppc/sections/Trust";
import { VelocityMarquee } from "@/components/design/sections/Marquee";
import { BigStatement } from "@/components/design/sections/Value";
import { ProcessSection } from "@/components/design/sections/Process";
import { IndustriesSection } from "@/components/design/sections/Trust";
import { FAQSection } from "@/components/design/sections/Faq";
import { CTASection } from "@/components/design/sections/Cta";
import { CtaRibbon } from "@/components/design/primitives";
import { AreasSection } from "@/components/seo/sections/Trust";
import {
  PPC_HERO,
  PPC_PROCESS,
  PPC_INDUSTRIES,
  PPC_INDUSTRIES_NOTE,
  PPC_FAQS,
  PPC_CTA,
} from "@/lib/ppc-data";

export const metadata: Metadata = {
  title: "Google Ads Company in Delhi | PPC Management & Lead Generation — Digivanta",
  description:
    "Digivanta is a performance-focused Google Ads company in Delhi offering PPC management, search ads, remarketing, local lead generation and ecommerce advertising across Delhi NCR.",
  keywords: [
    "Google Ads Company in Delhi",
    "PPC Company in Delhi",
    "Google Ads Agency Delhi",
    "PPC Services in Delhi",
    "Search Engine Marketing Services Delhi",
    "Google Advertising Services Delhi",
    "Lead Generation Company Delhi",
  ],
  openGraph: {
    title: "Google Ads Company in Delhi — Digivanta",
    description:
      "Data-driven Google Ads campaigns focused on visibility, qualified leads and measurable growth — not just clicks.",
    type: "website",
    locale: "en_IN",
  },
};

export default function PpcCompanyPage() {
  return (
    <main className="gd ppc-page">
      <HeroSection />
      <IntroSection />
      <VelocityMarquee items={PPC_HERO.marquee} />
      <FailSection />
      <QualifiedSection />

      <CtaRibbon
        text="Want to reduce wasted ad spend and improve lead quality? Let's audit your current campaigns and identify growth opportunities."
        cta="Audit my campaigns"
      />

      <ResultsSection />
      <ServicesSection />
      <ProcessSection steps={PPC_PROCESS.steps} intro={PPC_PROCESS.intro} />
      <MgmtSection />

      <CtaRibbon
        text="Looking for a smarter PPC strategy? Discover missed conversion opportunities and how targeted advertising can increase your conversions."
        cta="Find my missed conversions"
      />

      <SeoPpcSection />
      <BigStatement lines={["Not more clicks.", "More customers."]} />
      <IndustriesSection
        items={PPC_INDUSTRIES}
        label="Industries we work with"
      />
      <DataDrivenSection />

      <CtaRibbon
        text="Need campaigns that actually generate enquiries and sales? Let's create a Google Ads strategy tailored to your business goals."
        cta="Build my strategy"
      />

      <LeadGenSection />
      <WhySection />
      <GrowSection />
      <AreasSection />
      <FAQSection items={PPC_FAQS} />
      <CTASection
        kicker={PPC_CTA.kicker}
        lines={PPC_CTA.lines}
        desc={PPC_CTA.desc}
        primary={PPC_CTA.primary}
      />
    </main>
  );
}

import type { Metadata } from "next";
import HeroSection, { IntroSection } from "@/components/smm/sections/Hero";
import { WhyNeedSection, ImpactSection } from "@/components/smm/sections/Value";
import { ServicesSection } from "@/components/smm/sections/Services";
import { WhyChooseSection } from "@/components/smm/sections/Trust";

import { VelocityMarquee } from "@/components/design/sections/Marquee";
import { ProcessSection } from "@/components/design/sections/Process";
import { IndustriesSection } from "@/components/design/sections/Trust";
import { BigStatement } from "@/components/design/sections/Value";
import { FAQSection } from "@/components/design/sections/Faq";
import { CTASection } from "@/components/design/sections/Cta";
import { CtaRibbon } from "@/components/design/primitives";

import {
  SMM_HERO,
  SMM_PROCESS,
  SMM_INDUSTRIES,
  SMM_INDUSTRIES_NOTE,
  SMM_RIBBON,
  SMM_FAQS,
  SMM_CTA,
} from "@/lib/smm-data";

export const metadata: Metadata = {
  title:
    "Social Media Marketing Company in Delhi | Instagram, Facebook & LinkedIn Marketing — Digivanta",
  description:
    "Digivanta is a results-driven Social Media Marketing Company in Delhi offering Instagram, Facebook, and LinkedIn marketing, content creation, and brand strategy to grow audience engagement and generate quality leads.",
  keywords: [
    "Social Media Marketing Company in Delhi",
    "Social Media Marketing Agency in Delhi",
    "Instagram Marketing Company in Delhi",
    "Facebook Marketing Company in Delhi",
    "LinkedIn Marketing Company in Delhi",
    "Best Social Media Marketing Company in Delhi",
    "Content Creation and Brand Strategy",
  ],
  openGraph: {
    title: "Social Media Marketing Company in Delhi — Digivanta",
    description:
      "Audience-first social media marketing that builds visibility, engagement, and a consistent brand identity across Instagram, Facebook, and LinkedIn.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SocialMediaMarketingPage() {
  return (
    <main className="gd">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Editorial intro */}
      <IntroSection />

      {/* 3. Ticker marquee */}
      <VelocityMarquee items={SMM_HERO.marquee} />

      {/* 4. Why Businesses Need SMM */}
      <WhyNeedSection />

      {/* 5. Cta ribbon 1 */}
      <CtaRibbon text={SMM_RIBBON.first} cta={SMM_RIBBON.firstCta} />

      {/* 6. Platforms & Services */}
      <ServicesSection />

      {/* 7. Process — pinned horizontal scroll */}
      <ProcessSection
        steps={SMM_PROCESS.steps}
        intro={SMM_PROCESS.intro}
        label="Our Process"
        headingTop="The SMM"
        headingAccent="process."
      />

      {/* 8. Impact & stats */}
      <ImpactSection />

      {/* 9. Cta ribbon 2 */}
      <CtaRibbon text={SMM_RIBBON.second} cta={SMM_RIBBON.secondCta} />

      {/* 10. Why choose Digivanta */}
      <WhyChooseSection />

      {/* 11. Big statement */}
      <BigStatement lines={["Not just posts.", "Real customers."]} />

      {/* 12. Industries marquee */}
      <IndustriesSection
        items={SMM_INDUSTRIES}
        label="Industries We Grow"
        note={SMM_INDUSTRIES_NOTE}
      />

      {/* 13. FAQs */}
      <FAQSection items={SMM_FAQS} />

      {/* 14. Final CTA */}
      <CTASection
        kicker={SMM_CTA.kicker}
        lines={SMM_CTA.lines}
        desc={SMM_CTA.desc}
        primary={SMM_CTA.primary}
      />
    </main>
  );
}

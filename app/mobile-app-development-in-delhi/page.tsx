import type { Metadata } from "next";
import AppHeroSection from "@/components/app-dev/sections/AppHero";
import {
  AISection,
  CustomSection,
  DedicatedSection,
  EnterpriseSection,
  IndustryShowcaseSection,
  OpportunitySection,
  PlatformSection,
  PricingSection,
  ResultsSection,
  StackSection,
  SupportSection,
  WhyChooseSection,
} from "@/components/app-dev/sections/AppSections";
import { VelocityMarquee } from "@/components/design/sections/Marquee";
import { BigStatement } from "@/components/design/sections/Value";
import { ProcessSection } from "@/components/design/sections/Process";
import { FAQSection } from "@/components/design/sections/Faq";
import { CTASection } from "@/components/design/sections/Cta";
import { CtaRibbon } from "@/components/design/primitives";
import { APP_EXPERIENCE, APP_FAQS, APP_PROCESS } from "@/lib/app-data";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { getPageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = getPageMetadata("app");

export default function MobileAppDevelopmentPage() {
  return (
    <main className="gd">
      <ServiceJsonLd
        name="Mobile App Development"
        description={`Digivanta is a trusted mobile app development company in Delhi building scalable, user-friendly Android, iOS, Flutter and React Native apps for startups and enterprises.`}
        path="/mobile-app-development-in-delhi"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Mobile App Development", path: "/mobile-app-development-in-delhi" },
        ]}
      />
      {/* 1. Hero */}
      <AppHeroSection />

      {/* Velocity marquee */}
      <VelocityMarquee items={APP_EXPERIENCE.marquee} />

      {/* 2. Why businesses need apps */}
      <OpportunitySection />

      {/* 3. Custom apps built around the business */}
      <CustomSection />

      {/* 4. Why choose Digivanta */}
      <WhyChooseSection />

      {/* 5. Technologies & development stack */}
      <StackSection />

      {/* 6. Platforms */}
      <PlatformSection />

      {/* 7. Industries — mini phone mockups per business model */}
      <IndustryShowcaseSection />

      {/* 8. CTA ribbon */}
      <CtaRibbon text={APP_EXPERIENCE.ribbon1.text} cta={APP_EXPERIENCE.ribbon1.cta} />

      {/* 9. App development process — pinned horizontal gallery */}
      <ProcessSection
        steps={APP_PROCESS}
        intro={APP_EXPERIENCE.processIntro}
        label={APP_EXPERIENCE.labels.process}
        headingTop={APP_EXPERIENCE.processTitle[0]}
        headingAccent={APP_EXPERIENCE.processTitle[1]}
      />

      {/* 10. Post-launch support */}
      <SupportSection />

      {/* 11. AI-powered applications */}
      <AISection />

      {/* Big statement */}
      <BigStatement lines={[...APP_EXPERIENCE.statement]} />

      {/* 12. Enterprise */}
      <EnterpriseSection />

      {/* 13. Pricing */}
      <PricingSection />

      {/* CTA ribbon */}
      <CtaRibbon text={APP_EXPERIENCE.ribbon2.text} cta={APP_EXPERIENCE.ribbon2.cta} href="#app-pricing" />

      {/* 14. Dedicated developers */}
      <DedicatedSection />

      {/* 15. Results */}
      <ResultsSection />

      {/* 16. FAQs */}
      <FAQSection items={APP_FAQS} />

      {/* 17. Final CTA */}
      <CTASection
        kicker={APP_EXPERIENCE.cta.eyebrow}
        lines={[APP_EXPERIENCE.cta.titleLines[0], APP_EXPERIENCE.cta.titleLines[1]]}
        desc={APP_EXPERIENCE.cta.desc}
        primary={APP_EXPERIENCE.cta.primary}
      />
    </main>
  );
}

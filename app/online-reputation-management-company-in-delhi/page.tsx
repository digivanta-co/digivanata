import type { Metadata } from "next";
import HeroSection, { PlatformTicker, IntroSection } from "@/components/orm/sections/Hero";
import {
  DykAlertSection,
  WhyMattersSection,
  BestOrmSection,
  ServicesStackSection,
  AffordableSection,
} from "@/components/orm/sections/Value";
import {
  WhyChooseSection,
  IndustriesSection,
  TopAgencySection,
  ClosingSection,
} from "@/components/orm/sections/Trust";
import { FAQSection } from "@/components/design/sections/Faq";
import { CTASection } from "@/components/design/sections/Cta";
import { ORM_FAQS, ORM_FINAL_CTA } from "@/lib/orm-data";

export const metadata: Metadata = {
  title:
    "Online Reputation Management Company in Delhi | ORM Services — Digivanta",
  description:
    "Digivanta is a trusted Online Reputation Management Company in Delhi offering brand reputation management, review management, social media reputation management, brand monitoring and search engine reputation management across Delhi NCR.",
  keywords: [
    "Online Reputation Management Company in Delhi",
    "ORM Company in Delhi",
    "Reputation Management Services in Delhi",
    "Best ORM Company in Delhi",
    "Brand Reputation Management Delhi",
    "Review Management Services Delhi",
    "Online Reputation Management Agency Delhi",
    "Affordable ORM Services in Delhi NCR",
  ],
  openGraph: {
    title: "Online Reputation Management Company in Delhi — Digivanta",
    description:
      "Your reputation speaks before your business does — make sure it says the right thing. Strategic, result-driven ORM solutions that build, protect and strengthen your brand image.",
    type: "website",
    locale: "en_IN",
  },
};

export default function OrmCompanyPage() {
  return (
    <main className="gd">
      {/* 1. Hero + reputation monitor */}
      <HeroSection />

      {/* 2. Platforms ticker */}
      <PlatformTicker />

      {/* 3. Intro notes */}
      <IntroSection />

      {/* 4. Did you know 90% + free audit alert */}
      <DykAlertSection />

      {/* 5. Why ORM matters */}
      <WhyMattersSection />

      {/* 6. Best ORM company */}
      <BestOrmSection />

      {/* 7. Key ORM services — stacking deck */}
      <ServicesStackSection />

      {/* 8. Affordable ORM */}
      <AffordableSection />

      {/* 9. Why choose us — navy vault panel */}
      <WhyChooseSection />

      {/* 10. Industries */}
      <IndustriesSection />

      {/* 11. Top agency + reputation recovery CTA */}
      <TopAgencySection />

      {/* 12. FAQs */}
      <FAQSection items={ORM_FAQS} />

      {/* 13. Closing prose */}
      <ClosingSection />

      {/* 14. Final CTA */}
      <CTASection
        kicker={ORM_FINAL_CTA.kicker}
        lines={ORM_FINAL_CTA.lines}
        desc={ORM_FINAL_CTA.desc}
        primary={ORM_FINAL_CTA.primary}
      />
    </main>
  );
}

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
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { getPageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = getPageMetadata("orm");

export default function OrmCompanyPage() {
  return (
    <main className="gd">
      <ServiceJsonLd
        name="Online Reputation Management"
        description={`Digivanta is a trusted Online Reputation Management Company in Delhi offering brand reputation management, review management, social media reputation management, brand monitoring and search engine reputation management across Delhi NCR.`}
        path="/online-reputation-management-company-in-delhi"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Online Reputation Management", path: "/online-reputation-management-company-in-delhi" },
        ]}
      />
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

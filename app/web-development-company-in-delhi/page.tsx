import type { Metadata } from "next";
import WebHeroSection from "@/components/web/Hero";
import WebServicesSection from "@/components/web/Services";
import WebTechStackSection from "@/components/web/TechStack";
import WebWhyChooseSection from "@/components/web/WhyChoose";
import WebShowcaseSection from "@/components/web/Showcase";
import {
  IntroSection,
  WebCtaBand,
  RegionsSection,
  WebWhyGridSection,
  AuthorSection,
} from "@/components/web/ContentSections";
import { VelocityMarquee } from "@/components/design/sections/Marquee";
import { ProcessSection } from "@/components/design/sections/Process";
import { IndustriesSection } from "@/components/design/sections/Trust";
import { FAQSection } from "@/components/design/sections/Faq";
import { CTASection } from "@/components/design/sections/Cta";
import {
  WEB_PROCESS_STEPS,
  WEB_INDUSTRIES,
  WEB_FAQS,
} from "@/lib/web-data";

export const metadata: Metadata = {
  title:
    "Best Web Development Company in Delhi | Custom Website Development — Digivanta",
  description:
    "Digivanta is a leading Web Development Company in Delhi offering responsive website design, custom web applications, ecommerce platforms, SEO-friendly architecture, and high-performance digital solutions.",
  keywords: [
    "Best Web Development Company in Delhi",
    "Web Development Services in Delhi",
    "Website Development Company Delhi",
    "Responsive Web Design Company Delhi",
    "Custom Website Development Delhi",
    "Ecommerce Website Development Delhi",
    "SEO-Friendly Website Development",
    "Web Design and Development Company Delhi NCR",
  ],
  openGraph: {
    title: "Best Web Development Company in Delhi — Digivanta",
    description:
      "Premium web development services in Delhi — fast, responsive, SEO-optimized websites built for business growth.",
    type: "website",
    locale: "en_IN",
  },
};

export default function WebDevelopmentPage() {
  return (
    <main className="gd">
      {/* 1. Hero */}
      <WebHeroSection />

      {/* 2. Velocity marquee */}
      <VelocityMarquee
        items={[
          "React / Next.js",
          "Core Web Vitals",
          "Ecommerce UX",
          "Responsive Design",
          "Fast Load Times",
          "Technical SEO",
        ]}
      />

      {/* 3. Intro Strategy & Common Pitfalls */}
      <IntroSection />

      {/* 4. Services Breakdown */}
      <WebServicesSection />

      {/* 5. Inline CTA Ribbon #1 */}
      <WebCtaBand
        id="web-cta-1"
        heading="Is Your Website Costing You Customers?"
        desc="A slow, outdated, or hard-to-navigate website drives potential clients away. Let's create a digital experience that converts."
        ctaText="Request a Free Web Audit"
      />

      {/* 6. Process Section (Pinned Horizontal Scroll Gallery) */}
      <ProcessSection
        steps={WEB_PROCESS_STEPS}
        intro="A proven technical engineering approach that turns business requirements into fast, conversion-ready web applications."
        label="Development Process"
        headingTop="Our Web"
        headingAccent="Process."
      />

      {/* 7. Tech Stack Section */}
      <WebTechStackSection />

      {/* 8. Why Choose Comparison (Others vs Digivanta) */}
      <WebWhyChooseSection />

      {/* 9. Interactive Showcase */}
      <WebShowcaseSection />

      {/* 10. Inline CTA Ribbon #2 */}
      <WebCtaBand
        id="web-cta-2"
        heading="Build a Website That Drives Real Growth"
        desc="Whether you need a brand-new web application or a performance overhaul, Digivanta is your trusted technical partner."
        ctaText="Schedule a Strategy Call"
      />

      {/* 11. Industries We Serve */}
      <IndustriesSection
        items={WEB_INDUSTRIES}
        label="Industries We Serve"
        note="Custom web development solutions tailored to high-growth industry verticals."
      />

      {/* 12. Serving Regions */}
      <RegionsSection />

      {/* 13. Core Development Principles */}
      <WebWhyGridSection />

      {/* 14. Author & Expert Reviewer */}
      <AuthorSection />

      {/* 15. FAQs Accordion */}
      <FAQSection items={WEB_FAQS} />

      {/* 16. Final Contact CTA */}
      <CTASection
        kicker="Ready to transform your web presence?"
        lines={["Build your", "digital future."]}
        desc="Our team of web engineers and UX designers is ready to bring your vision to life. Let's discuss your project today."
        primary="Get Started with Digivanta"
      />
    </main>
  );
}

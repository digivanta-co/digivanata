import type { Metadata } from "next";
import HeroSection from "@/components/seo/sections/Hero";
import {
  DidYouKnowIntro,
  WhyNeedSection,
  ProblemsSection,
  DifferenceSection,
  SeoCtaBand,
} from "@/components/seo/sections/Value";
import { ServicesSection } from "@/components/seo/sections/Services";
import {
  AreasSection,
  ToolsSection,
  AiPlatformsSection,
  TrendsSection,
  BenefitsSection,
  WhyChooseSection,
  TrustSection,
  AuthorSection,
  FinalThoughtsSection,
} from "@/components/seo/sections/Trust";
import { VelocityMarquee } from "@/components/design/sections/Marquee";
import { ProcessSection } from "@/components/design/sections/Process";
import { IndustriesSection } from "@/components/design/sections/Trust";
import { FAQSection } from "@/components/design/sections/Faq";
import { CTASection } from "@/components/design/sections/Cta";
import { SEO_PROCESS_STEPS, SEO_INDUSTRIES, SEO_FAQS } from "@/lib/seo-data";

export const metadata: Metadata = {
  title:
    "Best SEO Company in Delhi | SEO Services That Build Long-Term Online Visibility — Digivanta",
  description:
    "Digivanta is a trusted SEO Company in Delhi offering professional SEO Services including Technical SEO, Local SEO, AI Search Optimization, On-Page SEO, and Content Strategy for long-term organic growth.",
  keywords: [
    "Best SEO Company in Delhi",
    "SEO Services in Delhi",
    "SEO Agency in Delhi",
    "Best SEO Agency in Delhi",
    "SEO Company near me",
    "SEO Services in Delhi NCR",
    "Local SEO Services in Delhi",
    "Technical SEO Services",
    "AI Search Optimization",
    "Affordable SEO Services in Delhi",
  ],
  openGraph: {
    title: "Best SEO Company in Delhi | SEO Services — Digivanta",
    description:
      "Professional SEO Services in Delhi that improve visibility, strengthen brand authority, and help businesses appear where users are actively searching.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SeoServicesPage() {
  return (
    <main className="gd">
      {/* 1. Hero */}
      <HeroSection />

      {/* Velocity marquee */}
      <VelocityMarquee items={["Technical SEO", "Local SEO", "On-Page", "AI Search", "Backlinks", "Audits"]} />

      {/* 2. Did You Know + intro */}
      <DidYouKnowIntro />

      {/* 3. Why Businesses Need SEO */}
      <WhyNeedSection />

      {/* 4. Common SEO Problems */}
      <ProblemsSection />

      {/* 5. What Makes Us Different */}
      <DifferenceSection />

      {/* 6. CTA Band #1 */}
      <SeoCtaBand
        heading="Stop Losing Customers to Your Competitors"
        desc="Our SEO experts help businesses improve search rankings, increase visibility, and drive sustainable growth."
        ctaText="Request an SEO Consultation"
        id="seo-cta-1"
      />

      {/* 7. Our SEO Process — pinned horizontal gallery */}
      <ProcessSection
        steps={SEO_PROCESS_STEPS}
        intro="A strategic, data-driven approach that turns technical optimization into measurable organic growth."
        label="Our Process"
        headingTop="Our SEO"
        headingAccent="process."
        headingBreak={false}
        scrollFactor={0.55}
      />

      {/* 8. SEO Services Detail */}
      <ServicesSection />

      {/* 9. Areas We Serve */}
      <AreasSection />

      {/* 10. CTA Band #2 */}
      <SeoCtaBand
        heading="Let's Grow Your Organic Traffic"
        desc="Whether you're a local business or an established brand, our SEO solutions are designed to deliver measurable results."
        ctaText="Start Your SEO Journey"
        id="seo-cta-2"
      />

      {/* 11. SEO Tools */}
      <ToolsSection />

      {/* 12. SEO for AI Platforms */}
      <AiPlatformsSection />

      {/* 13. SEO Trends 2026 */}
      <TrendsSection />

      {/* 14. Benefits of SEO */}
      <BenefitsSection />

      {/* 15. Industries */}
      <IndustriesSection
        items={SEO_INDUSTRIES}
        label="Industries We Serve"
      />

      {/* 16. Why Choose Digivanta */}
      <WhyChooseSection />

      {/* 17. Why Trust */}
      <TrustSection />

      {/* 18. Author Profile */}
      <AuthorSection />

      {/* 19. SEO FAQs */}
      <FAQSection items={SEO_FAQS} />

      {/* 20. Final Thoughts */}
      <FinalThoughtsSection />

      {/* 21. Final CTA */}
      <CTASection
        kicker="Ready to improve your search visibility?"
        lines={["Be found", "everywhere."]}
        desc="Our SEO specialists can help create a customized strategy for your business growth. Get started today."
        primary="Get Your Free SEO Consultation"
      />
    </main>
  );
}

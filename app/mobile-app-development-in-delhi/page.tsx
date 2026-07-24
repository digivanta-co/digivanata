import type { Metadata } from "next";
import HeroSection from "@/components/app-dev/sections/Hero";
import { ProblemSection, WhyChooseAppSection } from "@/components/app-dev/sections/Value";
import { TechnologySection, PlatformSection } from "@/components/app-dev/sections/Tech";
import { IndustrySection } from "@/components/app-dev/sections/Industry";
import { DevelopmentProcessTimeline, SupportSection } from "@/components/app-dev/sections/Process";
import {
  AISection,
  EnterpriseSection,
  PricingSection,
  DedicatedDeveloperSection,
} from "@/components/app-dev/sections/Advanced";
import { StatisticsSection, FAQSection } from "@/components/app-dev/sections/Proof";
import { CTASection } from "@/components/app-dev/sections/Cta";
import { CtaBand } from "@/components/app-dev/primitives";

export const metadata: Metadata = {
  title:
    "Mobile App Development Company in Delhi | Android, iOS & Cross-Platform — Digivanta",
  description:
    "Digivanta is a trusted mobile app development company in Delhi building scalable, user-friendly Android, iOS, Flutter and React Native apps for startups and enterprises.",
  keywords: [
    "Mobile app development company in Delhi",
    "App developers in Delhi",
    "Android app development company Delhi",
    "iOS app development company Delhi",
    "Custom mobile app development Delhi",
    "Best mobile app development company in Delhi",
    "Affordable app development Delhi",
  ],
  openGraph: {
    title: "Mobile App Development Company in Delhi — Digivanta",
    description:
      "Scalable Android, iOS and cross-platform apps built around usability, retention and real business growth.",
    type: "website",
    locale: "en_IN",
  },
};

export default function MobileAppDevelopmentPage() {
  return (
    <main className="dv-grain bg-white text-[#0F172A]">
      <HeroSection />
      <ProblemSection />
      <WhyChooseAppSection />
      <TechnologySection />
      <PlatformSection />
      <IndustrySection />

      <CtaBand
        title="The next big app could be yours."
        desc="Whether you're building a customer app, business app, or marketplace, we'll help bring your vision to life."
        button="Discuss My Idea"
      />

      <DevelopmentProcessTimeline />
      <SupportSection />
      <AISection />
      <EnterpriseSection />
      <PricingSection />
      <DedicatedDeveloperSection />
      <StatisticsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

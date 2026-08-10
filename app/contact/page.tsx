import type { Metadata } from "next";
import {
  ContactBanner,
  ContactMarquee,
  ContactMain,
  ContactMap,
} from "@/components/contact/ContactSections";

export const metadata: Metadata = {
  title: "Contact Digivanta for SEO, Google Ads & Web Development",
  description:
    "Contact Digivanta for expert SEO services, Google Ads management, social media marketing, website development, and complete digital marketing solutions to grow your business online.",
};

export default function ContactPage() {
  return (
    <main className="gd">
      <ContactBanner />
      <ContactMarquee dark />
      <ContactMain />
      <ContactMap />
      <ContactMarquee />
    </main>
  );
}

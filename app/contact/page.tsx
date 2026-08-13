import type { Metadata } from "next";
import {
  ContactBanner,
  ContactMarquee,
  ContactMain,
  ContactMap,
} from "@/components/contact/ContactSections";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { getPageMetadata, SEO_PAGES } from "@/lib/seo-config";

export const metadata: Metadata = getPageMetadata("contact");

export default function ContactPage() {
  return (
    <main className="gd">
      <WebPageJsonLd name={SEO_PAGES.contact.title} description={SEO_PAGES.contact.description} path={SEO_PAGES.contact.path} type="ContactPage" />
      <ContactBanner />
      <ContactMarquee dark />
      <ContactMain />
      <ContactMap />
      <ContactMarquee />
    </main>
  );
}

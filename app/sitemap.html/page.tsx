import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getPageMetadata } from "@/lib/seo-config";
import { CONTACT, SERVICES } from "@/lib/site-data";
import { ArrowRight, Phone, Mail, MapPin } from "@/components/ui/Icons";

export const metadata: Metadata = getPageMetadata("sitemap");

const MAIN_PAGES = [
  { name: "Home", path: "/", desc: "Homepage of Digivanta, top digital marketing company in Delhi." },
  { name: "About Us", path: "/about", desc: "Learn about our mission, vision, and growth story." },
  { name: "Digivanta Team", path: "/digivanta-team", desc: "Meet our digital strategists, designers, and developers." },
  { name: "Frequently Asked Questions", path: "/faq", desc: "Answers to common questions about our services and process." },
  { name: "Contact Us", path: "/contact", desc: "Get in touch for a free digital marketing consultation." },
];

const SERVICE_PAGES = [
  {
    title: "Search Engine Optimization (SEO)",
    path: "/seo-services-in-delhi",
    desc: "Technical SEO, Local SEO, and AI Search Optimization.",
  },
  {
    title: "Google Ads & PPC Management",
    path: "/ppc-company-in-delhi",
    desc: "High-ROI paid search, display, and remarketing campaigns.",
  },
  {
    title: "Social Media Marketing (SMM)",
    path: "/social-media-marketing-in-delhi",
    desc: "Brand building and performance marketing on Meta, Instagram & LinkedIn.",
  },
  {
    title: "Content Marketing Services",
    path: "/content-marketing-in-delhi",
    desc: "SEO blogs, landing page copywriting, and editorial content.",
  },
  {
    title: "Graphic Designing Services",
    path: "/graphic-designing-company-in-delhi",
    desc: "Brand identity, logos, marketing collaterals, and social media creatives.",
  },
  {
    title: "Online Reputation Management (ORM)",
    path: "/online-reputation-management-company-in-delhi",
    desc: "Review management, search result cleanup, and brand protection.",
  },
  {
    title: "Website Design & Development",
    path: "/web-development-company-in-delhi",
    desc: "Fast, responsive, conversion-focused websites and web apps.",
  },
  {
    title: "Mobile App Development",
    path: "/mobile-app-development-in-delhi",
    desc: "Android, iOS, Flutter, and React Native mobile applications.",
  },
];

export default function HtmlSitemapPage() {
  return (
    <main className="gd min-h-screen pt-24 pb-20 bg-white">
      <WebPageJsonLd
        name="HTML Sitemap"
        description="Comprehensive overview of all pages and digital marketing services offered by Digivanta in Delhi."
        path="/sitemap.html"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "HTML Sitemap", path: "/sitemap.html" },
        ]}
      />

      {/* Hero Header */}
      <section className="relative border-b border-[var(--gd-line)] bg-gradient-to-b from-[#f8fafd] to-white py-14">
        <div className="container max-w-5xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gd-line)] bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gd-gold)] shadow-sm">
            <span className="size-2 rounded-full bg-[var(--gd-gold)]" />
            Website Index
          </span>
          <h1 className="gd-display mt-4 text-3xl sm:text-5xl font-extrabold text-[var(--gd-ink)] tracking-tight">
            HTML Sitemap
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-[var(--gd-muted)] leading-relaxed">
            Welcome to the Digivanta HTML sitemap. Explore our website hierarchy, digital marketing services, and company resources below.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="container max-w-5xl py-12">
        <div className="grid gap-10 md:grid-cols-2">
          
          {/* Column 1: Main Pages */}
          <div className="flex flex-col gap-8">
            <div className="rounded-3xl border border-[var(--gd-line)] bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(12,36,61,0.04)]">
              <div className="flex items-center justify-between border-b border-[var(--gd-line)] pb-4 mb-6">
                <h2 className="text-xl font-bold text-[var(--gd-navy)]">
                  Primary Pages
                </h2>
                <span className="rounded-full bg-[var(--gd-gold-soft)] px-3 py-1 text-xs font-bold text-[var(--gd-gold)]">
                  {MAIN_PAGES.length} Pages
                </span>
              </div>
              <ul className="space-y-4">
                {MAIN_PAGES.map((page) => (
                  <li key={page.path} className="group">
                    <Link
                      href={page.path}
                      className="flex items-start justify-between rounded-xl p-3 transition-colors hover:bg-[var(--gd-soft)]"
                    >
                      <div>
                        <span className="font-semibold text-[var(--gd-ink)] group-hover:text-[var(--gd-blue)] transition-colors">
                          {page.name}
                        </span>
                        <p className="mt-0.5 text-xs text-[var(--gd-muted)]">
                          {page.desc}
                        </p>
                      </div>
                      <span className="text-[var(--gd-muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--gd-blue)] mt-1">
                        <ArrowRight />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Connect Box */}
            <div className="rounded-3xl border border-[var(--gd-line)] bg-[var(--gd-soft)] p-6 sm:p-8">
              <h2 className="text-lg font-bold text-[var(--gd-navy)] mb-4">
                Quick Contact Info
              </h2>
              <div className="space-y-3 text-sm text-[var(--gd-muted)]">
                <div className="flex items-center gap-3">
                  <Phone />
                  <a href={CONTACT.phoneHref} className="hover:text-[var(--gd-blue)] transition-colors font-medium">
                    {CONTACT.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail />
                  <a href={CONTACT.emailHref} className="hover:text-[var(--gd-blue)] transition-colors font-medium">
                    {CONTACT.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin />
                  <span>{CONTACT.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Digital Marketing Services */}
          <div className="rounded-3xl border border-[var(--gd-line)] bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(12,36,61,0.04)]">
            <div className="flex items-center justify-between border-b border-[var(--gd-line)] pb-4 mb-6">
              <h2 className="text-xl font-bold text-[var(--gd-navy)]">
                Digital Marketing & Dev Services
              </h2>
              <span className="rounded-full bg-[rgba(40,111,171,0.1)] px-3 py-1 text-xs font-bold text-[var(--gd-blue)]">
                {SERVICE_PAGES.length} Services
              </span>
            </div>
            <ul className="space-y-4">
              {SERVICE_PAGES.map((s) => (
                <li key={s.path} className="group">
                  <Link
                    href={s.path}
                    className="flex items-start justify-between rounded-xl p-3 transition-colors hover:bg-[var(--gd-soft)]"
                  >
                    <div>
                      <span className="font-semibold text-[var(--gd-ink)] group-hover:text-[var(--gd-blue)] transition-colors">
                        {s.title}
                      </span>
                      <p className="mt-0.5 text-xs text-[var(--gd-muted)]">
                        {s.desc}
                      </p>
                    </div>
                    <span className="text-[var(--gd-muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--gd-blue)] mt-1">
                      <ArrowRight />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* XML Sitemap Reference */}
        <div className="mt-12 rounded-2xl border border-[var(--gd-line)] bg-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--gd-muted)]">Search Engine Index</span>
            <p className="text-sm text-[var(--gd-ink)] mt-0.5">Looking for our machine-readable XML sitemap for search crawlers?</p>
          </div>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--gd-navy)] px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          >
            View sitemap.xml <ArrowRight />
          </a>
        </div>
      </div>
    </main>
  );
}

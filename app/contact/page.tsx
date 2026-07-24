import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  WhatsApp,
  ServiceIcon,
} from "@/components/ui/Icons";
import { CONTACT } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Digivanta for SEO, Google Ads & Web Development",
  description:
    "Contact Digivanta for expert SEO services, Google Ads management, social media marketing, website development, and complete digital marketing solutions to grow your business online.",
};

const SERVICES = [
  { label: "Search Engine Optimization (SEO)", icon: <ServiceIcon name="search" /> },
  { label: "Local SEO Services", icon: <MapPin /> },
  { label: "Google Ads & PPC Campaign Management", icon: <ServiceIcon name="ppc" /> },
  { label: "Social Media Marketing", icon: <ServiceIcon name="social" /> },
  { label: "Website Design & Development", icon: <ServiceIcon name="web" /> },
  { label: "Mobile App Development", icon: <ServiceIcon name="app" /> },
  { label: "Content Marketing Services", icon: <ServiceIcon name="content" /> },
  { label: "Branding & Online Reputation Management", icon: <ServiceIcon name="orm" /> },
];

const DIFFERENCE = [
  "Experienced Digital Marketing Experts",
  "Customized SEO Strategies",
  "Affordable Marketing Packages",
  "Transparent Reporting",
  "Dedicated Customer Support",
  "ROI-Focused Campaigns",
];

export default function ContactPage() {
  return (
    <main className="contact-page dv-grain">
      {/* ── Hero ── */}
      <section className="cx-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow"><i className="dot" /> Get in Touch</span>
            <h1>
              Contact <span>Digivanta</span>
            </h1>
            <span className="cx-rule" />
            <p className="cx-lead">
              Welcome to Digivanta, your trusted partner for result-driven digital marketing
              solutions. Whether you need SEO services, social media marketing, Google Ads
              management, website development, or complete online branding, our expert team is
              ready to help your business grow online.
            </p>
            <p className="cx-lead">
              If you have questions, need a customized digital marketing strategy, or want to
              discuss your project, feel free to contact us today.
            </p>
            <div className="cx-hero__actions">
              <a href={CONTACT.phoneHref} className="btn btn--primary btn--lg">
                <Phone /> Call {CONTACT.phone}
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">
                <WhatsApp /> WhatsApp Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Info + Form ── */}
      <section className="cx-section">
        <div className="container">
          <div className="cx-grid">
            {/* contact details */}
            <Reveal className="cx-info">
              <h2>Get in Touch</h2>

              <div className="cx-info__row">
                <span className="cx-info__ic"><MapPin /></span>
                <div>
                  <h4>Office Address</h4>
                  <p>Digivanta</p>
                  <p>Delhi NCR, India</p>
                </div>
              </div>

              <div className="cx-info__row">
                <span className="cx-info__ic"><Phone /></span>
                <div>
                  <h4>Phone Number</h4>
                  <a href="tel:+919999911195">+91 99999 11195</a>
                  <a href="tel:+918800585867">+91 88005 85867</a>
                </div>
              </div>

              <div className="cx-info__row">
                <span className="cx-info__ic"><Mail /></span>
                <div>
                  <h4>Email Address</h4>
                  <a href={CONTACT.emailHref}>{CONTACT.email}</a>
                </div>
              </div>

              <div className="cx-info__row">
                <span className="cx-info__ic"><ServiceIcon name="web" /></span>
                <div>
                  <h4>Website</h4>
                  <Link href="/">Digivanta Official Website</Link>
                </div>
              </div>

              <div className="cx-info__row">
                <span className="cx-info__ic"><Clock /></span>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday – Saturday: 9:00 AM – 7:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </Reveal>

            {/* form */}
            <Reveal className="cx-form" delay={2}>
              <h2>Send Us a Message</h2>
              <p className="cx-form__note">
                Use the form below to connect with our team. We typically respond within 24 hours.
              </p>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="cx-section cx-section--soft">
        <div className="container">
          <Reveal className="cx-head">
            <span className="eyebrow"><i className="dot" /> What we do</span>
            <h2>Contact Digivanta for SEO &amp; Digital Marketing Services</h2>
            <p>
              At Digivanta, we specialize in helping businesses improve online visibility, generate
              qualified leads, and increase conversions through data-driven digital marketing
              strategies. No matter your business size, we create customized solutions designed to
              deliver measurable results and long-term growth.
            </p>
          </Reveal>

          <div className="cx-svcs">
            {SERVICES.map((s, i) => (
              <Reveal key={s.label} as="div" className="cx-svc" delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <span className="cx-svc__ic">{s.icon}</span>
                <span>{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="cx-section">
        <div className="container">
          <Reveal className="cx-head">
            <span className="eyebrow"><i className="dot" /> Why Digivanta</span>
            <h2>Why Choose Digivanta?</h2>
            <p>
              Choosing Digivanta means partnering with a team focused on growth, transparency, and
              performance. Here&apos;s what makes us different.
            </p>
          </Reveal>

          <div className="cx-diff">
            {DIFFERENCE.map((d, i) => (
              <Reveal key={d} as="div" className="cx-diff__item" delay={((i % 3) + 1) as 1 | 2 | 3}>
                <span className="cx-diff__ic"><Check /></span>
                {d}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="cx-section cx-section--soft">
        <div className="container">
          <Reveal>
            <div className="cx-final">
              <div className="cx-final__inner">
                <span className="cx-final__eyebrow">Ready to grow faster?</span>
                <h2>Your Competitors Are Getting the Clicks — It&apos;s Time They Found You Instead</h2>
                <p>
                  Every day you wait, potential customers choose another business online. At
                  Digivanta, we help brands dominate search results, generate quality leads, and
                  turn website traffic into real revenue. Let us create the digital strategy your
                  business deserves.
                </p>
                <div className="cx-final__actions">
                  <a href={CONTACT.phoneHref} className="btn btn--light btn--lg">
                    <Phone /> Start Turning Searches Into Sales
                  </a>
                  <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">
                    <WhatsApp /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

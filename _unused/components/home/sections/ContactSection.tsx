"use client";

import Link from "next/link";
import { STATS, CONTACT } from "@/lib/site-data";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, Phone, Mail, MapPin, Clock, WhatsApp } from "@/components/ui/Icons";

export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal>
          <div className="cta-band" style={{ marginBottom: "4rem" }}>
            <div className="cta-band__inner">
              <h2>Your Competitors Are Growing Online. Are You?</h2>
              <p>
                If your website isn&apos;t generating traffic, leads, or sales, it&apos;s
                time for a smarter strategy. Let&apos;s accelerate your growth.
              </p>
              <div className="cta-band__actions">
                <Link href="#contact-form" className="btn btn--light btn--lg">
                  Book a Free Consultation <ArrowRight />
                </Link>
                <a href={CONTACT.whatsapp} className="btn btn--whatsapp btn--lg" target="_blank" rel="noopener noreferrer">
                  <WhatsApp /> WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-copy">
            <span className="eyebrow"><i className="dot" /> Let&apos;s talk</span>
            <h2>Let&apos;s Build Your Digital Success Story</h2>
            <p>
              Digital growth is about meaningful connections, real value and consistent
              results. Get a free consultation and discover how your business can
              generate more traffic, leads and sales.
            </p>

            <div className="contact-info">
              <a href={CONTACT.phoneHref}><span className="ci-ic"><Phone /></span> {CONTACT.phone}</a>
              <a href={CONTACT.emailHref}><span className="ci-ic"><Mail /></span> {CONTACT.email}</a>
              <div><span className="ci-ic"><MapPin /></span> {CONTACT.location}</div>
              <div><span className="ci-ic"><Clock /></span> Mon – Sat, 10:00 AM – 7:00 PM</div>
            </div>

            <div className="stats-row">
              {STATS.map((s) => (
                <div key={s.label} className="stats-row__item">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="contact-form-wrap" id="contact-form" delay={2}>
            <h3>Get Your Free Digital Marketing Audit</h3>
            <p>Tell us about your business — we&apos;ll show you where the growth is.</p>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="cf-name">Name</label>
              <input id="cf-name" type="text" name="name" placeholder="Your full name" required />
              <label htmlFor="cf-email">Email</label>
              <input id="cf-email" type="email" name="email" placeholder="you@company.com" required />
              <label htmlFor="cf-phone">Phone</label>
              <input id="cf-phone" type="tel" name="phone" placeholder="+91 99999 11195" required />
              <label htmlFor="cf-message">How can we help?</label>
              <textarea id="cf-message" name="message" placeholder="Tell us about your goals (SEO, ads, website…)" />
              <button type="submit" className="btn btn--primary btn--full btn--lg">
                Send Message <ArrowRight />
              </button>
              <p className="form-note">We&apos;ll get back to you within one business day.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

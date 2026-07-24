"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/ui/Icons";

const SERVICES = [
  "Search Engine Optimization (SEO)",
  "Local SEO Services",
  "Google Ads & PPC Management",
  "Social Media Marketing",
  "Website Design & Development",
  "Mobile App Development",
  "Content Marketing",
  "Branding & Online Reputation",
  "Other / Not sure yet",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="cx-form-el"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="cx-field-grid">
        <div className="cx-field">
          <label htmlFor="c-name">Full Name</label>
          <input id="c-name" name="name" type="text" placeholder="Your full name" required />
        </div>
        <div className="cx-field">
          <label htmlFor="c-email">Email Address</label>
          <input id="c-email" name="email" type="email" placeholder="you@company.com" required />
        </div>
        <div className="cx-field">
          <label htmlFor="c-phone">Phone Number</label>
          <input id="c-phone" name="phone" type="tel" placeholder="+91 99999 11195" required />
        </div>
        <div className="cx-field">
          <label htmlFor="c-company">Company Name</label>
          <input id="c-company" name="company" type="text" placeholder="Your company (optional)" />
        </div>
        <div className="cx-field cx-field--full">
          <label htmlFor="c-service">Service Required</label>
          <select id="c-service" name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="cx-field cx-field--full">
          <label htmlFor="c-message">Message</label>
          <textarea id="c-message" name="message" placeholder="Tell us about your project or goals…" required />
        </div>
      </div>

      <button type="submit" className="btn btn--primary btn--full btn--lg">
        Send Message <ArrowRight />
      </button>

      {sent && (
        <p className="cx-form__ok">Thank you! We&apos;ve received your message and typically respond within 24 hours.</p>
      )}
    </form>
  );
}

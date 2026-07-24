import type { Metadata } from "next";
import Link from "next/link";
import AboutTeamPhoto from "@/components/about/AboutTeamPhoto";
import WhatWeDo from "@/components/about/WhatWeDo";
import WorkingProcess from "@/components/about/WorkingProcess";
import WhyChoose from "@/components/about/WhyChoose";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, Spark, TrendUp } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About Digivanta — The Story Behind Digivanta",
  description:
    "Founded in 2023 by cousins Yash Gupta and Sachin Gupta, Digivanta is a modern digital solutions agency helping startups, brands and businesses grow through web development, digital marketing, branding and SEO.",
};

const FOCUS = [
  "Understanding your business needs",
  "Building tailored digital strategies",
  "Creating modern and user-friendly experiences",
  "Improving online visibility and engagement",
  "Delivering measurable business growth",
  "Building long-term partnerships with clients",
];

export default function AboutPage() {
  return (
    <main className="about dv-grain">
      {/* ── Hero ── */}
      <section className="ab-hero">
        <div className="ab-hero__bg" aria-hidden="true">
          <span className="herox__blob herox__blob--a" />
          <span className="herox__blob herox__blob--b" />
        </div>
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow"><i className="dot" /> About Digivanta</span>
            <h1 className="ab-hero__title">
              The Story Behind <span className="gold-text">Digivanta</span>
            </h1>
            <span className="ab-rule" />
            <p className="ab-lead">
              Welcome to Digivanta, a modern digital solutions agency helping startups,
              brands, and businesses grow through innovative web development, digital
              marketing, branding, SEO services, and business-focused digital strategies.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section section--surface">
        <div className="container split">
          <Reveal className="split__content">
            <span className="ab-label">Our story</span>
            <p>
              At Digivanta, we believe every successful business starts with a vision and
              for us, that vision began with a simple but powerful idea.
            </p>

            <blockquote className="ab-quote">
              <span className="ab-quote__mark">&ldquo;</span>
              Why build someone else&apos;s dream forever when you can create something of
              your own and empower others along the way?
            </blockquote>

            <p>
              Founded in 2023 by cousins Yash Gupta and Sachin Gupta, Digivanta was built
              with a shared ambition to create a modern digital agency driven by creativity,
              innovation, and real business growth.
            </p>
            <p>
              Before starting Digivanta, Yash Gupta worked as a Digital Marketing
              Specialist, gaining hands-on experience in branding, marketing strategy, lead
              generation, and business growth. During his journey, he realized that many
              agencies focused only on delivering services rather than building meaningful
              relationships and helping businesses grow long-term.
            </p>
            <p>
              With the support and partnership of Sachin Gupta, the two decided to build
              something of their own, a company where creativity, technology, strategy, and
              people could grow together.
            </p>
            <p>
              Today, Digivanta helps businesses establish a strong digital presence through
              custom website development, SEO optimization, branding, social media
              marketing, UI/UX design, performance marketing, and innovative digital
              solutions designed to create measurable business results.
            </p>
          </Reveal>

          <Reveal className="split__visual" delay={2}>
            <div className="ab-founders">
              <span className="ab-est">Est. 2023</span>
              <h3>Built by founders who care</h3>
              <p>Started by cousins with a shared ambition for creativity, innovation and real growth.</p>
              <div className="ab-founders__people">
                <div>
                  <span className="ab-founders__avatar">YG</span>
                  <div><strong>Yash Gupta</strong><span>Founder</span></div>
                </div>
                <div>
                  <span className="ab-founders__avatar">SG</span>
                  <div><strong>Sachin Gupta</strong><span>Co-Founder</span></div>
                </div>
              </div>
              <div className="ab-founders__tags">
                <span>Creativity</span><span>Innovation</span><span>Growth</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AboutTeamPhoto />

      {/* ── Mission & Vision ── */}
      <section className="section section--soft">
        <div className="container">
          <div className="ab-mv">
            <Reveal as="article" className="ab-mv__card ab-mv__card--light">
              <span className="ab-mv__ic"><Spark /></span>
              <h3>Our Mission</h3>
              <p>
                Our mission is to help businesses grow with creative digital marketing
                strategies, modern web development, and impactful branding solutions that
                deliver long-term success. We aim to build meaningful partnerships by
                creating user-focused digital experiences that improve visibility,
                engagement, and business growth.
              </p>
            </Reveal>

            <Reveal as="article" className="ab-mv__card ab-mv__card--dark" delay={2}>
              <span className="ab-mv__ic"><TrendUp /></span>
              <h3>Our Vision</h3>
              <p>
                Our vision is to become a trusted digital growth partner for startups,
                businesses, and brands worldwide by combining creativity, technology, and
                innovation to build future-ready digital experiences.
              </p>
              <p>
                We also believe in empowering talented individuals by creating a culture
                where ideas, creativity, and growth are valued equally.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <WhatWeDo />

      {/* ── How We Work ── */}
      <section className="section section--soft">
        <div className="container split">
          <Reveal className="split__content">
            <span className="ab-label">How we work</span>
            <h2>How We Work</h2>
            <p>
              At Digivanta, we follow a strategy-driven and result-focused approach to help
              businesses grow online. Every brand is different, which is why we create
              customized digital strategies based on your goals, audience, and market.
            </p>
            <h4>We focus on:</h4>
            <ul className="check-list">
              {FOCUS.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </Reveal>
          <Reveal className="split__visual" delay={2}>
            <div className="focus-card">
              <h3>Strategy-driven. Result-focused.</h3>
              <ul className="check-list check-list--light">
                {FOCUS.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Working Process ── */}
      <WorkingProcess />

      {/* ── Why Choose ── */}
      <WhyChoose />

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="ab-cta">
              <div className="ab-cta__inner">
                <h2>Your Growth <span className="gold-text">Starts Here</span></h2>
                <p>
                  Whether you&apos;re a startup or an established business, Digivanta can help
                  you achieve measurable digital growth.
                </p>
                <Link href="/#contact" className="btn btn--gold btn--lg">
                  Schedule a Strategy Call <ArrowRight />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";
import { REVIEWS } from "@/lib/site-data";
import Reveal from "@/components/ui/Reveal";

export default function ReviewsSection() {
  const [idx, setIdx] = useState(0);
  const review = REVIEWS[idx];
  const go = (n: number) => setIdx((i) => (i + n + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="section section--surface">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow"><i className="dot" /> Testimonials</span>
          <h2>What Our Clients Say</h2>
          <p>Real reviews from businesses that grew with Digivanta.</p>
        </Reveal>

        <Reveal>
          <div className="review-slider">
            <button type="button" className="review-arrow" onClick={() => go(-1)} aria-label="Previous review">‹</button>
            <blockquote className="review-card">
              <div className="review-card__quote">&ldquo;</div>
              <div className="review-card__stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p>{review.text}</p>
              <footer>
                <strong>{review.name}</strong>
                <span>Posted on Google</span>
              </footer>
            </blockquote>
            <button type="button" className="review-arrow" onClick={() => go(1)} aria-label="Next review">›</button>
          </div>
          <div className="review-dots">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                type="button"
                className={i === idx ? "is-active" : ""}
                onClick={() => setIdx(i)}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

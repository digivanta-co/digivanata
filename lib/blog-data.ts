/* ================================================================
   Blog — UI copy + helpers (Light Luxury "Journal")
   Content strings live here per the content-separation convention.
   ================================================================ */

export const BLOG_INDEX = {
  kicker: "The Digivanta Journal",
  title: "Insights that move brands forward",
  intro:
    "Playbooks, teardowns and field notes on SEO, paid media, content and web — written by the team actually running the campaigns.",
  featuredLabel: "Featured",
  latestLabel: "Latest articles",
  emptyTitle: "The first story is on its way",
  emptyBody: "We're putting the finishing touches on our opening piece. Check back shortly.",
} as const;

export const BLOG_ARTICLE = {
  backLabel: "All articles",
  writtenBy: "Written by",
  ctaKicker: "Let's talk",
  ctaText: "Ready to turn these ideas into real pipeline?",
  ctaButton: "Book a strategy call",
  ctaHref: "/contact",
} as const;

/** Editorial date — e.g. "24 Aug 2026". */
export function formatDate(iso?: string | null): string {
  if (!iso) return "";
  try {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

type MinimalBlock = { _type?: string; children?: { text?: string }[] };

/** Rough reading time in minutes from a Portable Text body (~200 wpm). */
export function readingTime(body: unknown): number {
  if (!Array.isArray(body)) return 1;
  const words = body
    .filter((b): b is MinimalBlock => !!b && (b as MinimalBlock)._type === "block")
    .flatMap((b) => (b.children || []).map((c) => c?.text || ""))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** First character of a title, for the image-less card placeholder. */
export function titleInitial(title?: string | null): string {
  return (title || "D").trim().charAt(0).toUpperCase() || "D";
}

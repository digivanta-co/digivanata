import { BLOG_ARTICLE } from "@/lib/blog-data";

// Each provider's entry point that accepts a prefilled prompt via `?q=`.
const PROVIDERS = [
  { name: "ChatGPT", color: "#10a37f", base: "https://chatgpt.com/?q=" },
  { name: "Claude", color: "#d97757", base: "https://claude.ai/new?q=" },
  { name: "Perplexity", color: "#20b8cd", base: "https://www.perplexity.ai/search?q=" },
  { name: "Grok", color: "#e8e8e8", base: "https://grok.com/?q=" },
  { name: "Google AI", color: "#4285f4", base: "https://www.google.com/search?udm=50&q=" },
];

export default function AiSummary({
  title,
  url,
  summary,
}: {
  title: string;
  url: string;
  summary?: string | null;
}) {
  const q = encodeURIComponent(`Summarize this article: "${title}" ${url}`);

  return (
    <section className="blog-ai">
      {summary ? <p className="blog-ai__summary">{summary}</p> : null}
      <span className="blog-ai__label">{BLOG_ARTICLE.aiSummaryLabel}</span>
      <div className="blog-ai__row">
        {PROVIDERS.map((p) => (
          <a key={p.name} className="blog-ai__btn" href={`${p.base}${q}`} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="16" height="16" fill={p.color} aria-hidden="true">
              <path d="M12 2l1.7 6.1L20 10l-6.3 1.9L12 18l-1.7-6.1L4 10l6.3-1.9z" />
            </svg>
            {p.name}
          </a>
        ))}
      </div>
    </section>
  );
}

import type { PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "@/sanity/image";

/** Stable id from a heading block's text — matches the page TOC slugs. */
function headingId(value: unknown): string | undefined {
  const children = (value as { children?: ReadonlyArray<{ text?: unknown }> } | undefined)?.children ?? [];
  const text = children.map((c) => (typeof c.text === "string" ? c.text : "")).join("");
  const id = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return id || undefined;
}

export const portableComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children, value }) => <h2 id={headingId(value)}>{children}</h2>,
    h3: ({ children, value }) => <h3 id={headingId(value)}>{children}</h3>,
    h4: ({ children, value }) => <h4 id={headingId(value)}>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="blog-ul">{children}</ul>,
    number: ({ children }) => <ol className="blog-ol">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => <code>{children}</code>,
    link: ({ children, value }) => {
      const href: string = value?.href || "#";
      const external = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          className="blog-link"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = urlForImage(value).width(1400).fit("max").auto("format").url();
      return (
        <figure className="blog-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt={value.alt || ""} loading="lazy" />
          {value.alt ? <figcaption>{value.alt}</figcaption> : null}
        </figure>
      );
    },
  },
};

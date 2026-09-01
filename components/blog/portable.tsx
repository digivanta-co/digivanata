import type { PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "@/sanity/image";

/** Stable id from heading text so headings can be deep-linked. */
function slugifyText(children: React.ReactNode): string | undefined {
  const text = Array.isArray(children)
    ? children.map((c) => (typeof c === "string" ? c : "")).join(" ")
    : typeof children === "string"
      ? children
      : "";
  const id = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return id || undefined;
}

export const portableComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2 id={slugifyText(children)}>{children}</h2>,
    h3: ({ children }) => <h3 id={slugifyText(children)}>{children}</h3>,
    h4: ({ children }) => <h4 id={slugifyText(children)}>{children}</h4>,
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

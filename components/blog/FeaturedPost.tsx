import Link from "next/link";
import { urlForImage } from "@/sanity/image";
import { ArrowRight } from "@/components/ui/Icons";
import { formatDate, titleInitial } from "@/lib/blog-data";
import type { POSTS_QUERY_RESULT } from "@/sanity.types";

type Post = POSTS_QUERY_RESULT[number];

export default function FeaturedPost({ post }: { post: Post }) {
  const href = `/blog/${post.slug?.current ?? ""}`;
  const cats = (post.categories ?? []).filter(Boolean) as string[];
  const img = post.mainImage?.asset
    ? urlForImage(post.mainImage).width(1200).height(900).fit("crop").auto("format").url()
    : null;

  return (
    <article className="blog-featured">
      <Link href={href} className="blog-featured__media">
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={img} alt={post.mainImage?.alt || post.title || ""} />
        ) : (
          <span className="blog-featured__ph" aria-hidden="true">
            {titleInitial(post.title)}
          </span>
        )}
      </Link>

      <div className="blog-featured__body">
        <div className="blog-featured__tags">
          {cats.length ? (
            cats.slice(0, 2).map((c) => (
              <span key={c} className="blog-tag">
                {c}
              </span>
            ))
          ) : (
            <span className="blog-tag">Article</span>
          )}
        </div>

        <h2 className="blog-featured__title gd-display">
          <Link href={href}>{post.title}</Link>
        </h2>

        {post.excerpt ? <p className="blog-featured__excerpt">{post.excerpt}</p> : null}

        <p className="blog-featured__meta">
          {formatDate(post.publishedAt)}
          {post.authorName ? <span> · {post.authorName}</span> : null}
        </p>

        <Link href={href} className="ag-btn blog-featured__cta">
          Read the story <ArrowRight />
        </Link>
      </div>
    </article>
  );
}

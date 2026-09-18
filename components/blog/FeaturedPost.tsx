import Link from "next/link";
import { urlForImage } from "@/sanity/image";
import { Clock } from "@/components/ui/Icons";
import { blogPostHref, formatDate, titleInitial, BLOG_INDEX } from "@/lib/blog-data";
import type { POSTS_QUERY_RESULT } from "@/sanity.types";

type Post = POSTS_QUERY_RESULT[number];

export default function FeaturedPost({ post }: { post: Post }) {
  const href = blogPostHref(post.slug?.current);
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
          <span className="blog-featured__badge">
            {BLOG_INDEX.featuredLabel}<i aria-hidden="true" />{cats[0] || BLOG_INDEX.articleLabel}
          </span>
        </div>

        <h2 className="blog-featured__title gd-display">
          <Link href={href}>{post.title}</Link>
        </h2>

        {post.excerpt ? <p className="blog-featured__excerpt">{post.excerpt}</p> : null}

        <div className="blog-featured__meta">
          <span className="blog-featured__author">
            <b aria-hidden="true">{titleInitial(post.authorName)}</b>
            {post.authorName || BLOG_INDEX.defaultAuthor}
          </span>
          <span className="blog-featured__date"><Clock />{formatDate(post.publishedAt)}</span>
        </div>
      </div>
    </article>
  );
}

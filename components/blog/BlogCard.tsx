import Link from "next/link";
import { urlForImage } from "@/sanity/image";
import { ArrowRight, Clock } from "@/components/ui/Icons";
import { blogPostHref, formatDate, titleInitial, BLOG_INDEX } from "@/lib/blog-data";
import type { POSTS_QUERY_RESULT } from "@/sanity.types";

type Post = POSTS_QUERY_RESULT[number];

export default function BlogCard({ post }: { post: Post }) {
  const href = blogPostHref(post.slug?.current);
  const cats = (post.categories ?? []).filter(Boolean) as string[];
  const img = post.mainImage?.asset
    ? urlForImage(post.mainImage).width(880).height(560).fit("crop").auto("format").url()
    : null;

  return (
    <Link href={href} className="blog-card">
      <div className="blog-card__media">
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={img} alt={post.mainImage?.alt || post.title || ""} loading="lazy" />
        ) : (
          <span className="blog-card__ph" aria-hidden="true">
            {titleInitial(post.title)}
          </span>
        )}
      </div>

      <div className="blog-card__body">
        <span className="blog-card__category"><i aria-hidden="true" />{cats[0] || BLOG_INDEX.articleLabel}</span>
        <h3 className="blog-card__title">{post.title}</h3>
        {post.excerpt ? <p className="blog-card__excerpt">{post.excerpt}</p> : null}
        <span className="blog-card__author">
          <b aria-hidden="true">{titleInitial(post.authorName)}</b>
          {post.authorName || BLOG_INDEX.defaultAuthor}
        </span>
        <span className="blog-card__footer">
          <span className="blog-card__date"><Clock />{formatDate(post.publishedAt)}</span>
          <span className="blog-card__more">{BLOG_INDEX.readArticle}<ArrowRight /></span>
        </span>
      </div>
    </Link>
  );
}

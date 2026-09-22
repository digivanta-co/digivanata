import Link from "next/link";
import { urlForImage } from "@/sanity/image";
import { ArrowRight, Clock } from "@/components/ui/Icons";
import { blogPostHref, formatDate, titleInitial, BLOG_INDEX, type BlogListPost } from "@/lib/blog-data";

export default function BlogCard({ post }: { post: BlogListPost }) {
  const href = blogPostHref(post.slug?.current);
  const cats = (post.categories ?? []).filter(Boolean) as string[];
  const img = post.mainImage?.asset
    ? urlForImage(post.mainImage).width(880).height(495).fit("crop").auto("format").url()
    : null;
  const authorImg = post.author?.image?.asset
    ? urlForImage(post.author.image).width(64).height(64).fit("crop").auto("format").url()
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
          {authorImg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={authorImg} alt="" />
          ) : <b aria-hidden="true">{titleInitial(post.author?.name)}</b>}
          {post.author?.name || BLOG_INDEX.defaultAuthor}
        </span>
        <span className="blog-card__footer">
          <span className="blog-card__date"><Clock />{formatDate(post.publishedAt)}</span>
          <span className="blog-card__more">{BLOG_INDEX.readArticle}<ArrowRight /></span>
        </span>
      </div>
    </Link>
  );
}

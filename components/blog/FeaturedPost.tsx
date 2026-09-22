import Link from "next/link";
import { urlForImage } from "@/sanity/image";
import { Clock } from "@/components/ui/Icons";
import { blogPostHref, formatDate, titleInitial, BLOG_INDEX, type BlogListPost } from "@/lib/blog-data";

export default function FeaturedPost({ post }: { post: BlogListPost }) {
  const href = blogPostHref(post.slug?.current);
  const img = post.mainImage?.asset
    ? urlForImage(post.mainImage).width(1200).height(675).fit("crop").auto("format").url()
    : null;
  const authorImg = post.author?.image?.asset
    ? urlForImage(post.author.image).width(64).height(64).fit("crop").auto("format").url()
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
        

        <h2 className="blog-featured__title gd-display">
          <Link href={href}>{post.title}</Link>
        </h2>

        {post.excerpt ? <p className="blog-featured__excerpt">{post.excerpt}</p> : null}

        <div className="blog-featured__meta">
          <span className="blog-featured__author">
            {authorImg ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={authorImg} alt="" />
            ) : <b aria-hidden="true">{titleInitial(post.author?.name)}</b>}
            {post.author?.name || BLOG_INDEX.defaultAuthor}
          </span>
          <span className="blog-featured__date"><Clock />{formatDate(post.publishedAt)}</span>
        </div>
      </div>
    </article>
  );
}

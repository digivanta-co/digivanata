import Link from "next/link";
import { urlForImage } from "@/sanity/image";
import { ArrowRight } from "@/components/ui/Icons";
import { formatDate, titleInitial } from "@/lib/blog-data";
import type { POSTS_QUERY_RESULT } from "@/sanity.types";

type Post = POSTS_QUERY_RESULT[number];

export default function BlogCard({ post }: { post: Post }) {
  const href = `/blog/${post.slug?.current ?? ""}`;
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
        {cats[0] ? <span className="blog-card__cat">{cats[0]}</span> : null}
      </div>

      <div className="blog-card__body">
        <p className="blog-card__meta">
          {formatDate(post.publishedAt)}
          {post.authorName ? <span> · {post.authorName}</span> : null}
        </p>
        <h3 className="blog-card__title">{post.title}</h3>
        {post.excerpt ? <p className="blog-card__excerpt">{post.excerpt}</p> : null}
        <span className="blog-card__more">
          Read article <ArrowRight />
        </span>
      </div>
    </Link>
  );
}

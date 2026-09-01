import { PortableText, defineQuery } from "next-sanity";
import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import { ArrowRight, Clock } from "@/components/ui/Icons";
import { CtaRibbon } from "@/components/design/primitives";
import { portableComponents } from "@/components/blog/portable";
import { formatDate, readingTime, titleInitial, BLOG_ARTICLE } from "@/lib/blog-data";

const POST_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    publishedAt,
    excerpt,
    mainImage,
    body,
    "author": author->{name, image},
    "categories": categories[]->title
  }`
);

const options = { next: { revalidate: 30 } };

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug }, options);
  if (!post) return {};
  const ogImage = post.mainImage?.asset
    ? urlForImage(post.mainImage).width(1200).height(630).fit("crop").url()
    : undefined;
  return {
    title: post.title || undefined,
    description: post.excerpt || undefined,
    openGraph: ogImage
      ? { title: post.title || undefined, description: post.excerpt || undefined, images: [ogImage] }
      : undefined,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug }, options);

  if (!post) return notFound();

  const cats = (post.categories ?? []).filter(Boolean) as string[];
  const mins = readingTime(post.body);
  const cover = post.mainImage?.asset
    ? urlForImage(post.mainImage).width(1600).fit("max").auto("format").url()
    : null;
  const authorImg = post.author?.image?.asset
    ? urlForImage(post.author.image).width(96).height(96).fit("crop").url()
    : null;

  return (
    <main className="gd blog">
      <article className="blog-article">
        {/* ── Article header ── */}
        <header className="blog-article__head">
          <div className="container container--narrow">
            <Link href="/blog" className="blog-back ag-link">
              <span aria-hidden="true">←</span> {BLOG_ARTICLE.backLabel}
            </Link>

            <div className="blog-article__tags">
              {(cats.length ? cats : ["Article"]).map((c) => (
                <span key={c} className="blog-tag">
                  {c}
                </span>
              ))}
            </div>

            <h1 className="blog-article__title gd-display">
              <span className="gd-grad">{post.title}</span>
            </h1>

            {post.excerpt ? <p className="blog-article__lead">{post.excerpt}</p> : null}

            <div className="blog-article__meta">
              {post.author?.name ? (
                <span className="blog-byline">
                  {authorImg ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="blog-byline__avatar" src={authorImg} alt={post.author.name} />
                  ) : (
                    <span className="blog-byline__avatar blog-byline__avatar--ph" aria-hidden="true">
                      {titleInitial(post.author.name)}
                    </span>
                  )}
                  <span>{post.author.name}</span>
                </span>
              ) : null}
              {post.publishedAt ? <span>{formatDate(post.publishedAt)}</span> : null}
              <span className="blog-readtime">
                <Clock /> {mins} min read
              </span>
            </div>
          </div>
        </header>

        {/* ── Cover ── */}
        {cover ? (
          <figure className="blog-article__cover container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cover} alt={post.mainImage?.alt || post.title || ""} />
          </figure>
        ) : (
          <div className="container container--narrow">
            <span className="blog-divider" />
          </div>
        )}

        {/* ── Body ── */}
        <div className="container container--narrow blog-prose">
          {Array.isArray(post.body) ? (
            <PortableText value={post.body} components={portableComponents} />
          ) : null}
        </div>
      </article>

      <div className="blog-cta-wrap">
        <CtaRibbon text={BLOG_ARTICLE.ctaText} cta={BLOG_ARTICLE.ctaButton} href={BLOG_ARTICLE.ctaHref} />
      </div>
    </main>
  );
}

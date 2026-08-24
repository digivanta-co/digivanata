import {PortableText, defineQuery} from 'next-sanity'
import {notFound} from 'next/navigation'
import Link from 'next/link'
import {client} from '@/sanity/client'
import {urlForImage} from '@/sanity/image'

const POST_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    publishedAt,
    mainImage,
    body,
    "authorName": author->name,
    "categories": categories[]->title
  }`
)

const options = {next: {revalidate: 30}}

export default async function PostPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params
  const post = await client.fetch(POST_QUERY, {slug}, options)

  if (!post) return notFound()

  const categories = (post.categories || []).filter((c): c is string => Boolean(c))

  return (
    <main style={{maxWidth: 720, margin: '0 auto', padding: '3rem 1.25rem'}}>
      <p style={{marginBottom: '1.5rem'}}>
        <Link href="/blog">← Back to blog</Link>
      </p>

      <article>
        <h1 style={{fontSize: '2.25rem', marginBottom: '0.5rem'}}>{post.title}</h1>
        <p style={{opacity: 0.6, fontSize: '0.9rem', marginBottom: '1.5rem'}}>
          {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : null}
          {post.authorName ? ` · ${post.authorName}` : ''}
          {categories.length ? ` · ${categories.join(', ')}` : ''}
        </p>

        {post.mainImage?.asset ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={urlForImage(post.mainImage).width(720).url()}
            alt={post.mainImage.alt || post.title || ''}
            style={{width: '100%', borderRadius: 8, marginBottom: '1.5rem'}}
          />
        ) : null}

        {post.body ? <PortableText value={post.body} /> : null}
      </article>
    </main>
  )
}

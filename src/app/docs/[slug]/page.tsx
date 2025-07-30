
import { getDocBySlug, getAllDocs } from '@/lib/docs'
import { serialize } from 'next-mdx-remote/serialize'
import MDXContent from '@/components/MDXContent'

export async function generateStaticParams() {
  const docs = getAllDocs()
  return docs
    .filter(doc => doc.slug !== 'page')
    .map(({ slug }) => ({ slug }))
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  const { frontmatter, content } = await getDocBySlug(awaitedParams.slug);
  const mdxSource = await serialize(content)

  return (
    <>
      <h1>{frontmatter.title}</h1>
      {/* Pass serialized source to client component */}
      <MDXContent source={mdxSource} />
    </>
  )
}

// app/docs/[...slug]/page.tsx
import { getDocBySlug } from '@/lib/docs'
import { serialize } from 'next-mdx-remote/serialize'
import ClientMDXContent from '@/components/ClientMDXContent'
import remarkGfm from 'remark-gfm'

interface Props {
  params: { slug?: string[] } // optional, empty array for /docs
}

export default async function DocCatchAllPage({ params }: Props) {
  const slugPath = params.slug?.join('/') || 'page' // fallback to index.mdx
  let doc
  try {
    doc = getDocBySlug(slugPath)
  } catch {
    return <div>404: Document not found</div>
  }

  const mdxSource = await serialize(doc.content, {
    mdxOptions: { remarkPlugins: [remarkGfm] },
    parseFrontmatter: true,
  })

  return <ClientMDXContent source={mdxSource} />
}

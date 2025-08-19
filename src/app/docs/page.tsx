// app/docs/[...slug]/page.tsx
import { getDocBySlug } from '@/lib/docs'
import { serialize } from 'next-mdx-remote/serialize'
import ClientMDXContent from '@/components/ClientMDXContent'
import remarkGfm from 'remark-gfm'


// docs stuff part 5

interface Props {
  params: Promise<{ slug?: string[] }> // optional, empty array for /docs
}



export default async function DocCatchAllPage({ params }: Props) {
  const { slug } = await params;
  const slugPath = slug?.join('/') || 'page'; // fallback

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

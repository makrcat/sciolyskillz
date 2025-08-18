
/*
import { getDocBySlug, getAllDocs } from '@/lib/docs'
import { serialize } from 'next-mdx-remote/serialize'
import Link from 'next/link';
import remarkGfm from 'remark-gfm'


import ClientMDXContent from '@/components/ClientMDXContent'

export async function generateStaticParams() {
  const docs = getAllDocs();

  console.log("AAAAA");

  return docs
    .filter(doc => doc.slug !== 'page')
    .filter(doc => doc.slug.endsWith('.mdx') || doc.slug.endsWith('.md'))
    .map(({ slug }) => ({
      slug: slug.split('/'),
    }));
  // array
}


export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const awaitedParams = await params;
  const slugPath = awaitedParams.slug.join('/');

  const { frontmatter, content } = getDocBySlug(slugPath);

  console.log('FRONTMATTER:', frontmatter);
  console.log('CONTENT:', content.split('\n').slice(0, 5));

  // YOUVE GOT TO BE SHITTING ME
  // WHY ISNT IT STRIPPING THE FRONTMATTER

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
    parseFrontmatter: true,
  })

  return (
    <div className="ml-4">

      WHAT WHAT WHAT

    </div>
  )

    return (
    <div className="ml-4">

      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/docs">Docs</Link>
          </li>
          {awaitedParams.slug.map((segment, index) => {
            const href = '/docs/' + awaitedParams.slug.slice(0, index + 1).join('/');
            const isLast = index === awaitedParams.slug.length - 1;
            return (
              <li key={index}>
                {isLast ? (
                  <span className="font-semibold">{frontmatter.title}</span>
                ) : (
                  <Link href={href}>{segment}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <ClientMDXContent source={mdxSource} />
    </div>
  )
}






*/
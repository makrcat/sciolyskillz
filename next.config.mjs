import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow .mdx extensions for files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  remarkPlugins: [remarkGfm, remarkFrontmatter, ],
  rehypePlugins: [],
  extension: /\.(md|mdx)$/,
})

 
// Combine MDX and Next.js config
export default withMDX(nextConfig)
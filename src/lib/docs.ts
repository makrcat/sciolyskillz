

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// docs stuff pt 2


type SidebarItem = {
  type: 'folder' | 'file'
  name: string
  slug?: string           //for files
  frontmatter?: any       //for files
  children?: SidebarItem[]  //for folders
}

export function getSidebarTree(
  rootDir: string = path.join(process.cwd(), 'src', 'content', 'docs'),
  baseSlug = ''
): SidebarItem[] {
  if (!fs.existsSync(rootDir)) return []

  const entries = fs.readdirSync(rootDir, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  const items: SidebarItem[] = []

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const children = getSidebarTree(path.join(rootDir, entry.name), baseSlug + entry.name + '/')
      items.push({
        type: 'folder',
        name: entry.name,
        children,
      })
      continue
    }

    if (entry.isFile() && entry.name.endsWith('.mdx')) {
      const fullPath = path.join(rootDir, entry.name)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data: frontmatter } = matter(fileContents)

      // Default slug/name
      let slug = baseSlug + entry.name.replace(/\.mdx$/, '')
      let displayName = frontmatter?.title || entry.name.replace(/\.mdx$/, '')

      // Special-case: treat page.mdx as the folder's canonical page.
      if (entry.name.toLowerCase() === 'page.mdx') {
        // map folder/page.mdx -> folder slug (without trailing slash)
        slug = baseSlug.replace(/\/$/, '')
        // display name: frontmatter.title || last segment of baseSlug || 'Home'
        displayName =
          frontmatter?.title ||
          (baseSlug ? baseSlug.replace(/\/$/, '').split('/').filter(Boolean).slice(-1)[0] : 'Home')
      }

      items.push({
        type: 'file',
        name: displayName,
        slug,
        frontmatter,
      })
    }
  }

  return items
}



const docsPath = path.join(process.cwd(), 'src', 'content', 'docs')


export function getDocBySlug(slug: string) {
  const docsPath = path.join(process.cwd(), 'src', 'content', 'docs');
  let fullPath = path.join(docsPath, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(docsPath, slug, 'page.mdx')
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Doc not found for slug: ${slug}`)
    }
  }


  const fileContents = fs.readFileSync(fullPath, 'utf8').trimStart();
  
  const { data: frontmatter, content: content } = matter(fileContents)

  return {frontmatter, content}
}


export function getAllDocs() {
  const entries = fs.readdirSync(docsPath, { withFileTypes: true })

  const mdxFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
    .map((file) => {
      const slug = file.name.replace(/\.mdx$/, '')
      const fullPath = path.join(docsPath, file.name)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data: frontmatter } = matter(fileContents)
      
      return { slug, frontmatter }
    })

  return mdxFiles
}

export function getSidebarData() {
  const docs = getAllDocs()
  const grouped = docs.reduce((acc, { slug, frontmatter }) => {
    const category = frontmatter.category || 'Uncategorized'
    if (!acc[category]) acc[category] = []
    acc[category].push({ slug, title: frontmatter.title, order: frontmatter.order || 999 })
    return acc
  }, {} as Record<string, { slug: string; title: string; order: number }[]>)


  for (const category in grouped) {
    grouped[category].sort((a, b) => a.order - b.order)
  }

  return grouped
}



import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


type SidebarItem = {
  type: 'folder' | 'file'
  name: string
  slug?: string          // for files
  frontmatter?: any      // for files
  children?: SidebarItem[] // for folders
}

export function getSidebarTree(
  rootDir: string = path.join(process.cwd(), 'src', 'app', 'docs'),
  baseSlug = ''
): SidebarItem[] {
  const entries = fs.readdirSync(rootDir, { withFileTypes: true })

  return entries.map((entry) => {
    if (entry.name.startsWith('[') || entry.name.startsWith('_')) return false;


    if (entry.isDirectory()) {
      // Folder node with children
      return {
        type: 'folder',
        name: entry.name,
        children: getSidebarTree(path.join(rootDir, entry.name), baseSlug + entry.name + '/'),
      }
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      const fullPath = path.join(rootDir, entry.name)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data: frontmatter } = matter(fileContents)


      const slug = baseSlug + entry.name.replace(/\.mdx$/, '')

      return {
        type: 'file',
        name: frontmatter.title || entry.name.replace(/\.mdx$/, ''),
        slug,
        frontmatter,
      }
    }
    return null
  }).filter(Boolean) as SidebarItem[]
}

const docsPath = path.join(process.cwd(), 'src', 'app', 'docs')


export function getDocBySlug(slug: string) {
  //const docsPath = path.join(process.cwd(), 'src', 'app', 'docs')
  //let fullPath = path.join(docsPath, `${slug}.mdx`)

  //if (!fs.existsSync(fullPath)) {
  //  fullPath = path.join(docsPath, slug, 'page.mdx')
  //  if (!fs.existsSync(fullPath)) {
  //    throw new Error(`Doc not found for slug: ${slug}`)
  //  }
  //}


  //const fileContents = fs.readFileSync(fullPath, 'utf8').trimStart();
  
  //const { data: frontmatter, content: content } = matter(fileContents)

  return { 
    frontmatter: "what the fuck", 
    content: "AAAAAAAGGGGGGGGGGGHHHHHHHHH"
  }
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

  // Sort each category by order
  for (const category in grouped) {
    grouped[category].sort((a, b) => a.order - b.order)
  }

  return grouped
}

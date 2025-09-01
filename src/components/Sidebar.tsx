"use client"
import React, { useState } from 'react'
import Link from 'next/link'

type SidebarItem = {
  type: 'folder' | 'file'
  name: string
  slug?: string
  children?: SidebarItem[]
}

function SidebarItemComponent({ item, level = 0 }: { item: SidebarItem; level?: number }) {
  
  const [open, setOpen] = useState(false)

  
  if (item.type === 'folder') {
  return (
    <div className="mb-1">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between cursor-pointer select-none font-semibold text-gray-800 hover:text-black transition-colors mb-1"
        style={{ paddingLeft: (level == 0) ? `0rem` : `1.5rem` }}
      >
        <span>{item.name}</span>
        <span className="ml-2">{open ? '▾' : '▸'}</span>
      </div>

      {open && item.children && (
        <div
          className="border-l border-gray-300"
          style={{ marginLeft: (level == 0) ? `0rem` : `1.5rem` }}
        >
          {item.children.map((child) => (
            <SidebarItemComponent
              key={child.name}
              item={child}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

  if (item.type === 'file') {
    let href = item.slug === 'page' ? '/docs' : `/docs/${item.slug}`
    href = href.replace(/\/page$/, '') // now only trailing /page instead of any /page

    return (
      <div
        className="mb-1"
        style={{ paddingLeft: (level == 0) ? `0rem` : `1.5rem` }}
      >
        <Link
          href={href}
          className="block text-md text-gray-700 hover:text-blue-600 transition-colors"
        >
          {item.name}
        </Link>
      </div>
    )
  }

  return null
}

export default function Sidebar({ items }: { items: SidebarItem[] }) {
  return (
    <nav className="text-md">
      {items.map((item) => (
        <SidebarItemComponent key={item.name} item={item} level={0} />
      ))}
    </nav>
  )
}

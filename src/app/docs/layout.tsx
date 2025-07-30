import React from 'react'
import { getSidebarTree } from '@/lib/docs'
import Sidebar from '@/components/Sidebar'

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  const sidebarItems = await getSidebarTree() // await here if async

  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: 250, borderRight: '1px solid #ccc', padding: '1rem' }}>
        <Sidebar items={sidebarItems} />
      </aside>
      <main style={{ flex: 1, padding: '1rem' }}>{children}</main>
    </div>
  )
}

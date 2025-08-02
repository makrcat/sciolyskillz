import React from 'react'
import { getSidebarTree } from '@/lib/docs'
import Sidebar from '@/components/Sidebar'

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  const sidebarItems = await getSidebarTree() // await here if async

  return (
    <div style={{ display: 'flex' }}>
      {/* Left Sidebar */}
      <aside
        style={{
          width: 250,
          borderRight: '1px solid #ccc',
          padding: '1rem',
          position: 'sticky',
          top: '4rem',
          alignSelf: 'flex-start',
          height: '100vh',
          overflowY: 'scroll',
        }}
      >
        <Sidebar items={sidebarItems} />
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '1rem' }}>{children}</main>

      {/* Right Sidebar (Heading navigation placeholder) */}
      <aside
        style={{
          width: 250,
          borderLeft: '1px solid #ccc',
          padding: '1rem',
          position: 'sticky',
          top: '4rem',
          alignSelf: 'flex-start',
          height: '20vh',
          overflowY: 'auto', 
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>On This Page</div>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
          <li>Heading 1</li>
          <li>Heading 2</li>
          <li>Heading 3</li>
          <li>...</li>
        </ul>
      </aside>
    </div>
  )
}

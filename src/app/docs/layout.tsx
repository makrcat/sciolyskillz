// docs stuff pt 4
import React from 'react'
import { getSidebarTree } from '@/lib/docs'
import DocsLayoutClient from './DocsLayoutClient'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const sidebarItems = getSidebarTree()
  return (
    <DocsLayoutClient sidebarItems={sidebarItems}>
      {children}
    </DocsLayoutClient>
  )
}
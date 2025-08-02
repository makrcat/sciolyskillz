'use client'

// UGHHH

import { MDXRemote } from 'next-mdx-remote'
import dynamic from 'next/dynamic'
import { components as baseComponents } from '@/mdx-components'

// Dynamically import client-only MDX components here
const CheckYoWork = dynamic(() => import('@/components/DocsFeatures/CheckYoWork'), { ssr: false })
const TopicCard = dynamic(() => import('@/components/DocsFeatures/TopicCard'), { ssr: false }) as (props: any) => JSX.Element;

const moreComponents = {
  CheckYoWork,
  TopicCard,
}

const mergedComponents = {
  ...baseComponents,
  ...moreComponents,
}

export default function ClientMDXContent({ source }: { source: any }) {
  return <MDXRemote {...source} components={mergedComponents} />
}

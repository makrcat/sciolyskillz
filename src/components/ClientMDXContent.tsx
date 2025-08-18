/*

'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { components as baseComponents } from '@/mdx-components'

// Dynamically import client-only MDX components here UGHGHEOIGHOEIGHIEHGOHEWIG
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

  useEffect(() => {
    console.log(source);
    console.log('CLIENT: MDX component mounted AUGH WHY DOESNT THIS PRINT ANYTHINGGGs')
  }, [])

  return <div style={{ background: 'red', color: 'white' }}>driving in my car right after a beer</div>;

  
  return (
    <>
    <MDXRemote {...source} components={mergedComponents} />
    </>
  )
}

*/
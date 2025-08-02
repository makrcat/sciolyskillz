import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.


export const components = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: ({ children }) => (
    <h1 className="doc">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="doc">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="doc">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="doc">{children}</h4>
  ),

  p: ({ children }) => (
    <p className="doc">{children}</p>
  ),
  img: (props) => (
    <Image
      {...(props as ImageProps)}
      width={800}  // actual image width
      height={600} // actual image height
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  ),
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
  return components
}
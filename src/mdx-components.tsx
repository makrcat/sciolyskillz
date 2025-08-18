import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.


export const components = {
  // Allows customizing built-in components, e.g. to add styling.

  h1: (props) => <h1 className="doc" {...props} />,
  h2: (props) => <h2 className="doc" {...props} />,
  h3: (props) => <h3 className="doc" {...props} />,
  h4: (props) => <h4 className="doc" {...props} />,

  p: (props) => <p className="doc" {...props} />,

  img: ({ src, alt, ...rest }: ImageProps) => (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      {...rest}
    />
  ),

  table: (props) => <table className="table-auto border border-gray-400 w-full my-4" {...props} />,
  th: (props) => <th className="border border-gray-400 px-2 py-1 bg-gray-100" {...props} />,
  td: (props) => <td className="border border-gray-400 px-2 py-1" {...props} />,
  tr: (props) => <tr className="hover:bg-gray-50" {...props} />,
} satisfies MDXComponents

// do we even need this
export function useMDXComponents(): MDXComponents {
  return components
}


import type { MDXComponents } from "mdx/types"

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
    h1: ({ children }) => (
      <h1 className="mb-8 text-4xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-2xl mt-6 mb-3">{children}</h2>,
    p: ({ children }) => <p className="my-4 leading-7">{children}</p>,
    code: ({ children }) => (
      <code className="rounded-md px-1 py-0.5 bg-gray-200">{children}</code>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="transition-colors text-blue-500 hover:text-blue-400"
      >
        {children}
      </a>
    ),
  }
}

import type { MDXComponents } from "mdx/types"
import { H1 } from "./components/h1"
import { Code } from "./components/code"
import { AnchorSpan } from "./components/anchor-span"

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
    h1: H1,
    h2: ({ children }) => <h2 className="text-2xl mt-6 mb-3">{children}</h2>,
    p: ({ children }) => <p className="my-4 leading-7">{children}</p>,
    code: Code,
    a: ({ href, children }) => (
      <a href={href}>
        <AnchorSpan>{children}</AnchorSpan>
      </a>
    ),
    // TODO: 코드 하이라이팅 기능
    pre: ({ children }) => (
      <pre className="rounded-md p-3 bg-gray-200 text-sm [&>code]:rounded-none [&>code]:p-0 [&>code]:bg-transparent">
        {children}
      </pre>
    ),
  }
}

import { MDXProps } from "mdx/types"

export async function importPost(slug: string) {
  const { default: MDXContent, meta }: Awaited<typeof import("@/posts/*.mdx")> =
    await import(`@/posts/${slug}.mdx`)

  return { MDXContent, meta }
}

declare module "@/posts/*.mdx" {
  type ISO8601 = string

  interface PostMeta {
    title: string
    description: string
    createdAt: ISO8601
    updatedAt: ISO8601 | undefined
  }

  export const meta: PostMeta
  export default function MDXContent(props: MDXProps): JSX.Element
}

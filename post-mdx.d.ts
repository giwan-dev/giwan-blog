declare module "@/posts/*.mdx" {
  import { MDXProps } from "mdx/types"

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

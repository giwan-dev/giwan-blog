import { RequiredProperties } from "@/common/utils/type"
import { MDXProps } from "mdx/types"

export async function importPost(slug: string) {
  try {
    const { default: MDXContent, meta } = (await import(
      `./${slug}.mdx`
    )) as Awaited<typeof import("./*.mdx")>

    if (meta.createdAt === undefined) {
      return undefined
    }

    return {
      MDXContent,
      meta: meta as RequiredProperties<typeof meta, "createdAt">,
    }
  } catch (error) {
    console.error(error)
    return undefined
  }
}

declare module "./*.mdx" {
  type ISO8601 = string

  interface PostMeta {
    title: string
    description: string
    createdAt: ISO8601 | undefined
    updatedAt: ISO8601 | undefined
  }

  export const meta: PostMeta
  export default function MDXContent(props: MDXProps): JSX.Element
}

import { METADATA_TITLE_POSTFIX } from "@/common/constants"
import { Metadata } from "next"
import { importPost } from "./posts"

interface Props {
  params: { slug: string }
}
export default async function PostDetailPage({ params: { slug } }: Props) {
  const post = await importPost(slug)
  if (post === undefined) {
    throw new Error(`Post ${slug} not found`)
  }

  const { MDXContent } = post

  return (
    <article>
      <MDXContent />
    </article>
  )
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const post = await importPost(slug)
  if (post === undefined) {
    throw new Error(`Post ${slug} not found`)
  }

  const { meta } = post

  return {
    title: `${meta.title} ${METADATA_TITLE_POSTFIX}`,
    description: meta.description,
  }
}

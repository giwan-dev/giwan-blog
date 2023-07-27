import { METADATA_TITLE_POSTFIX } from "@/common/constants"
import { importPost } from "@/posts"
import { Metadata } from "next"

interface Props {
  params: { slug: string }
}
export default async function PostDetailPage({ params: { slug } }: Props) {
  const { MDXContent } = await importPost(slug)

  return (
    <article>
      <MDXContent />
    </article>
  )
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { meta } = await importPost(slug)

  return {
    title: `${meta.title} ${METADATA_TITLE_POSTFIX}`,
    description: meta.description,
  }
}

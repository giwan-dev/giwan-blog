import { METADATA_TITLE_POSTFIX } from "@/common/constants"
import { Code } from "@/components/code"
import { H1 } from "@/components/h1"
import { importPost } from "@/posts"
import Link from "next/link"

export const metadata = {
  title: `글 ${METADATA_TITLE_POSTFIX}`,
}

// TODO: 이걸 자동으로 긁어올 방법은 없을까?
const postSlugs = [
  "product-manager-of-design-system",
  "react-callback-prop-naming-convention",
  "constructing-blog",
]

export default async function Home() {
  const posts = (
    await Promise.all(
      postSlugs.map(async (slug) => {
        const post = await importPost(slug)
        if (post === undefined) {
          return undefined
        }
        const { meta } = post

        return {
          id: slug,
          title: meta.title,
          description: meta.description,
          createdAt: meta.createdAt,
        }
      }),
    )
  )
    .filter((post): post is NonNullable<typeof post> => !!post)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )

  return (
    <>
      <H1>글</H1>

      <ul className="[&>li+li]:mt-6">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} className="text-lg font-bold">
              {post.title}
            </Link>

            <p className="whitespace-pre-line">{post.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

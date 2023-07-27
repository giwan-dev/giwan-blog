export async function importPost(slug: string) {
  const { default: MDXContent, meta }: Awaited<typeof import("@/posts/*.mdx")> =
    await import(`@/posts/${slug}.mdx`)

  return { MDXContent, meta }
}

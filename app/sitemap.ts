import { BASE_URL } from "@/common/constants"
import { MetadataRoute } from "next"

const postSlugs = [
  "product-manager-of-design-system",
  "react-callback-prop-naming-convention",
  "constructing-blog",
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    ...postSlugs.map((slug) => {
      return {
        url: `${BASE_URL}/posts/${slug}`,
        lastModified: new Date(),
      }
    }),
  ]
}

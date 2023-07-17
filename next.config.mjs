/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
}

import emoji from "remark-emoji"
import createMDXWrapper from "@next/mdx"

const withMDX = createMDXWrapper({
  options: {
    remarkPlugins: [emoji],
  },
})

export default withMDX(nextConfig)

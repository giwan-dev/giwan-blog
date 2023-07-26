import createMDXWrapper from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
}

const withMDX = createMDXWrapper()

export default withMDX(nextConfig)

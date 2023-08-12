export const METADATA_TITLE_POSTFIX = "- 박기완의 블로그"

export const BASE_URL = process.env.VERCEL
  ? "https://giwan-blog.vercel.app"
  : "http://localhost:3000"
export const SPOTIFY_CLIENT_ID = required(process.env.SPOTIFY_CLIENT_ID)
export const SPOTIFY_CLIENT_SECRET = required(process.env.SPOTIFY_CLIENT_SECRET)

function required(
  value: string | undefined,
): string {
  if (value === undefined) {
    throw new Error("This value should be non nullable")
  }

  return value
}

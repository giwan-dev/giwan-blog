import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "@/common/constants"
import type { AuthOptions, DefaultSession } from "next-auth"
import NextAuth from "next-auth/next"
import SpotifyProvider from "next-auth/providers/spotify"
import type { DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken: string
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    accessToken: string
  }
}

const authOptions: AuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: SPOTIFY_CLIENT_ID,
      clientSecret: SPOTIFY_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    jwt({ account, token }) {
      // NOTE: 타입 정의는 Account | null인데 실제 값은 undefined
      if (!account) {
        return token
      }

      const accessToken = account.access_token
      if (accessToken === undefined) {
        throw new Error("Access Token이 없습니다.")
      }

      token.accessToken = accessToken
      return token
    },
    session({ token, session }) {
      session.accessToken = token.accessToken
      return session
    },
  },
}
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

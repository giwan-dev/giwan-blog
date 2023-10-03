import { type NextRequest } from "next/server"
import { getCommits } from "@/services/github"
import { LogApiQueryKey } from "./query"
import { type LogApiResponse } from "./types"

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get(LogApiQueryKey.Page)

  const commits = await getCommits({
    page: page !== null ? parseInt(page, 10) : 1,
  })

  if (commits === undefined) {
    return Response.error()
  }

  return Response.json({ commits } satisfies LogApiResponse)
}

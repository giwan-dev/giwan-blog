import { type NextRequest } from "next/server"
import { getCommits, type Commit } from "@/services/github"

export enum LogApiQueryKey {
  Page = "p",
}

export interface LogApiResponse {
  commits: Commit[]
}

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get(LogApiQueryKey.Page)

  const commits = await getCommits({ page: page !== null ? parseInt(page, 10) : 1 })

  if (commits === undefined) {
    return Response.error()
  }

  return Response.json({ commits } satisfies LogApiResponse)
}

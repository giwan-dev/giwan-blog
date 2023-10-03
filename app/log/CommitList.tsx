"use client"

import { useState } from "react"
import { COMMIT_COUNT_PER_PAGE, type Commit } from "@/services/github"
import { LogApiQueryKey, type LogApiResponse } from "../api/log"

export function CommitList({ initialCommits }: { initialCommits: Commit[] }) {
  const [commits, setCommits] = useState(initialCommits)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [end, setEnd] = useState(initialCommits.length < COMMIT_COUNT_PER_PAGE)

  const fetchMore = async () => {
    const nextPage = page + 1
    const url = new URL("/api/log", window.location.href)
    url.searchParams.set(LogApiQueryKey.Page, nextPage.toString())

    setLoading(true)
    const response = await fetch(url)
    setLoading(false)

    if (response.ok === false) {
      // TODO: 오류 알리기
      return
    }

    const { commits }: LogApiResponse = await response.json()

    setCommits((prev) => [...prev, ...commits])
    setPage(nextPage)
    setEnd(commits.length < COMMIT_COUNT_PER_PAGE)
  }

  return (
    <>
      <ul>
        {commits.map((commit) => {
          const [title, , ...message] = commit.message.split("\n")

          return (
            <li
              key={commit.sha}
              className="my-3 border-gray-100 whitespace-pre-line"
            >
              <div className="font-medium">{title}</div>

              {message.length > 0 ? (
                <div className="mt-3 rounded-sm p-2 text-sm bg-gray-50">
                  {/* TODO: 마크다운으로 렌더링 */}
                  {message.join("\n")}
                </div>
              ) : null}
            </li>
          )
        })}
      </ul>

      {end === false ? (
        <button
          disabled={loading}
          className="w-full rounded-md py-2 text-sm transition-colors hover:bg-gray-50"
          onClick={fetchMore}
        >
          {loading ? "..." : "더 불러오기"}
        </button>
      ) : null}
    </>
  )
}

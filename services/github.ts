import { Octokit } from "octokit"

const octokit = new Octokit({ auth: process.env.GITHUB_PAT })

export interface Commit {
  sha: string
  message: string
}
export const COMMIT_COUNT_PER_PAGE = 30
export async function getCommits({ page = 1 }: { page?: number } = {}) {
  const { data, status } = await octokit.request(
    "GET /repos/{owner}/{repo}/commits",
    {
      owner: "giwan-dev",
      repo: "giwan-blog",
      page,
      per_page: COMMIT_COUNT_PER_PAGE,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  )

  if (status >= 400) {
    return undefined
  }

  return data.map((e): Commit => ({ sha: e.sha, message: e.commit.message }))
}

import { H1 } from "@/components/h1"
import { getCommits } from "@/services/github"
import { CommitList } from "./CommitList"

export default async function LogPage() {
  const initialCommits = await getCommits()
  if (initialCommits === undefined) {
    throw new Error("페이지 로딩 실패")
  }

  return (
    <>
      <H1>이 블로그의 git 로그</H1>

      <CommitList initialCommits={initialCommits} />
    </>
  )
}

import { AnchorSpan } from "@/components/anchor-span"
import { Code } from "@/components/code"
import { H1 } from "@/components/h1"
import Link from "next/link"

const posts = [
  {
    id: "react-callback-prop-naming-convention",
    title: "React 콜백 prop 네이밍 컨벤션",
    description: (
      <>
        prop으로 콜백 함수를 넘겨 줄 때 <Code>on[EventName]</Code> 형태의 이름을
        사용한다.
        <br />
        클린 코드 어딘가 나올 거 같은 &quot;함수는 동사로 시작한다&quot;라는
        규칙을 왜 콜백 prop에는 적용하지 않을까?
      </>
    ),
  },
  {
    id: "constructing-blog",
    title: "블로그 만들기",
    description: (
      <>
        자유롭게 쓸 수 있는 나만의 블로그를 처음 설정하고 배포하면서 겪은 소소한
        이야기
      </>
    ),
  },
]

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-8 py-10">
      <H1>글</H1>

      <ul className="[&>li+li]:mt-6">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} className="text-lg font-bold">
              <AnchorSpan>{post.title}</AnchorSpan>
            </Link>

            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

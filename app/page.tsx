import { METADATA_TITLE_POSTFIX } from "@/common/constants"
import { H1 } from "@/components/h1"
import Link from "next/link"

export const metadata = {
  title: `홈 ${METADATA_TITLE_POSTFIX}`,
}

export default function HomePage() {
  return (
    <>
      <H1>홈</H1>

      <ul>
        <li>
          <Link href="/posts" className="text-xl">
            글
          </Link>
        </li>

        <li>
          <Link href="/albums" className="text-xl">
            음반 🚧
          </Link>
        </li>

        <li>
          <Link href="/log" className="text-xl">
            로그
          </Link>
        </li>
      </ul>
    </>
  )
}

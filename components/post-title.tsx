import Link from "next/link"
import { H1 } from "./h1"

export function PostTitle({ title }: { title: string }) {
  return (
    <H1>
      <Link
        href="/"
        className="!border-none !text-gray-300 hover:!text-gray-200"
      >
        <span>글</span>
      </Link>

      <span className="text-gray-200"> / </span>

      <span>{title}</span>
    </H1>
  )
}

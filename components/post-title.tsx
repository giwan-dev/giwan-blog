import Link from "next/link"

export function PostTitle({ title }: { title: string }) {
  return (
    <div className="mb-8 text-4xl font-bold">
      <Link
        href="/"
        className="!border-none !text-gray-300 hover:!text-gray-200"
      >
        <span>글</span>
      </Link>

      <span className="text-gray-200"> / </span>

      <h1 className="inline">{title}</h1>
    </div>
  )
}

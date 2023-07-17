import { PropsWithChildren } from "react"

export default function PostsLayout({ children }: PropsWithChildren<unknown>) {
  return <article className="mx-auto max-w-3xl px-8 py-10">{children}</article>
}

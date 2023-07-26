import { PropsWithChildren } from "react"

export default function PostsLayout({ children }: PropsWithChildren<unknown>) {
  return <article>{children}</article>
}

import { type PropsWithChildren } from "react"

export function Strikethrough({ children }: PropsWithChildren<unknown>) {
  return <span className="line-through">{children}</span>
}

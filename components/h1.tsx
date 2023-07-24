import { PropsWithChildren } from "react"

export function H1({ children }: PropsWithChildren<unknown>) {
  return <h1 className="mb-8 text-4xl font-bold">{children}</h1>
}

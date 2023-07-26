import { PropsWithChildren } from "react"

export function Code({ children }: PropsWithChildren<unknown>) {
  return <code className="rounded-md px-1 py-0.5 bg-gray-200">{children}</code>
}

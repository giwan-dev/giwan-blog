"use client"

import { SessionProvider } from "next-auth/react"
import { PropsWithChildren } from "react"

export function RootContextProvider({ children }: PropsWithChildren<unknown>) {
  return <SessionProvider>{children}</SessionProvider>
}

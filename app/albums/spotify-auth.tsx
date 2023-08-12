"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { FC, PropsWithChildren } from "react"

const buttons: Record<ReturnType<typeof useSession>["status"], FC> = {
  authenticated: LogOutButton,
  unauthenticated: LogInButton,
  loading: LoadingButton,
}

export function SpotifyAuth() {
  const { status, data } = useSession()

  const Button = buttons[status]

  return (
    <div className="flex items-center gap-x-2">
      {data && (
        <>
          {data.user && (
            <div className="flex items-center gap-x-1">
              <span className="text-sm text-gray-900">
                {data.user.name ?? "이름 없음"}
              </span>

              {data.user.image && (
                <Image
                  className="w-8 h-8 rounded-2xl object-cover"
                  src={data.user.image}
                  alt={`${data.user.name}의 프로필 이미지`}
                  width={32}
                  height={32}
                />
              )}
            </div>
          )}
        </>
      )}

      <Button />
    </div>
  )
}

function LogInButton() {
  return (
    <Button
      onClick={() => {
        signIn("spotify")
      }}
    >
      로그인
    </Button>
  )
}

function LogOutButton() {
  return (
    <Button
      onClick={() => {
        signOut()
      }}
    >
      로그아웃
    </Button>
  )
}

function Button({
  onClick,
  children,
}: PropsWithChildren<{ onClick?: () => void }>) {
  return (
    <button
      className="rounded-lg px-2 py-1 text-sm text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-600"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function LoadingButton() {
  return (
    <Button>
      <span className="block w-10 h-5 rounded-full bg-gray-300" />
    </Button>
  )
}

import { PropsWithChildren } from "react"

/**
 * a 태그 아래에 사용하는 span 태그. a 태그의 스타일을 담당합니다.
 */
export function AnchorSpan({ children }: PropsWithChildren<unknown>) {
  return (
    <span className="border border-transparent border-b-blue-400 border-opacity-0 border-b-solid pb-0.5 transition-colors text-blue-500 hover:border-opacity-100">
      {children}
    </span>
  )
}

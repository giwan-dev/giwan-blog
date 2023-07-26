import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const pretendard = localFont({
  src: "./fonts/PretendardVariable_1.3.8.woff2",
  display: "swap",
  fallback: [
    "Pretendard",
    "-apple-system",
    "BlinkMacSystemFont",
    "system-ui",
    "Roboto",
    "Helvetica Neue",
    "Segoe UI",
    "Apple SD Gothic Neo",
    "Noto Sans KR",
    "Malgun Gothic",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "sans-serif",
  ],
})

const d2Coding = localFont({
  src: [
    { path: "./fonts/D2Coding_1.3.2.ttf", weight: "400" },
    { path: "./fonts/D2CodingBold_1.3.2.ttf", weight: "700" },
  ],
  variable: "--font-d2-coding",
  display: "swap",
  fallback: ["menlo", "Courier New", "monospace"],
})

export const metadata = {
  title: "박기완의 블로그",
  description: "나를 담은 내 글",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} ${d2Coding.variable}`}>
        <main className="mx-auto max-w-3xl p-8">{children}</main>

        <Analytics />
      </body>
    </html>
  )
}

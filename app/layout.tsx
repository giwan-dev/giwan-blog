import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const pretendard = localFont({
  src: "./fonts/PretendardVariable_1.3.8.woff2",
  display: "swap",
})

const d2Coding = localFont({
  src: [
    { path: "./fonts/D2Coding_1.3.2.ttf", weight: "400" },
    { path: "./fonts/D2CodingBold_1.3.2.ttf", weight: "700" },
  ],
  variable: "--font-d2-coding",
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}

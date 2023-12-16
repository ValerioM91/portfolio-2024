import type { Metadata } from "next"
import { cookies } from "next/headers"
import { chakraPetch } from "@/utils/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Valerio Mattera",
  description: "Valerio Mattera's website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const themeValue = cookieStore.get("vm91-theme")?.value || "light"

  return (
    <html lang="en" data-theme={themeValue} className="scroll-smooth">
      <body className={`${chakraPetch.className} ${chakraPetch.variable} relative text-base-content antialiased`}>
        {children}
      </body>
    </html>
  )
}

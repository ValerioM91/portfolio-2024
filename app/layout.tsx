import type { Metadata } from "next"
import { cookies } from "next/headers"
import { Chakra_Petch } from "next/font/google"
import "./globals.css"

const chakraPetch = Chakra_Petch({
  variable: "--chakraPetch",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Valerio Mattera",
  description: "Valerio Mattera's website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const themeValue = cookieStore.get("vm91-theme")?.value || "light"

  return (
    <html lang="en" data-theme={themeValue} className="scroll-smooth">
      <body
        className={`${chakraPetch.className} ${chakraPetch.variable} relative font-chakraPetch text-base-content antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

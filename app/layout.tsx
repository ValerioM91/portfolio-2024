import type { Metadata } from "next"
import { cookies } from "next/headers"
import { Chakra_Petch } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

const chakraPetch = Chakra_Petch({
  variable: "--chakraPetch",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://valeriomattera.com"),
  title: "Valerio Mattera | Full Stack Engineer",
  description: "Valerio Mattera - Portfolio website",
  openGraph: {
    images: [
      {
        url: "og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Valerio Mattera",
      },
    ],
  },
  robots: "follow, index",
  alternates: {
    canonical: "https://valeriomattera.com",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const themeValue = cookieStore.get("vm91-theme")?.value || "light"

  return (
    <html lang="en" data-theme={themeValue} className="scroll-smooth">
      <body
        className={`${chakraPetch.className} ${chakraPetch.variable} ${themeValue} relative animate-[fade_1s] font-chakraPetch text-base-content antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}

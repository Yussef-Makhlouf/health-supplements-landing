import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "ProDentim – Best-Selling Oral Probiotic for Healthy Teeth & Gums",
  description:
    "Shop ProDentim, the #1 oral probiotic, plus PrimeBiome Glow for radiant skin and FemiPro for bladder health. 60-day money-back guarantee.",
  keywords:
    "ProDentim, oral probiotic, PrimeBiome Glow, FemiPro, health supplements, dental health, skin health, bladder health",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

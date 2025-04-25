'use client'
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

import CookiePolicyModal from "@/components/cookie-policy-modal"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
  
          {children}
          <CookiePolicyModal />
       
      </body>
    </html>
  )
}

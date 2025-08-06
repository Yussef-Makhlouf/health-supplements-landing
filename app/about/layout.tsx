import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import CookiePolicyModal from "@/components/cookie-policy-modal"
import GoogleTagManager from "@/components/google-tag-manager"
import GoogleAnalytics from "@/components/google-analytics"
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  metadataBase: new URL('https://beautyrealmart.com'),
  title: "About  BEAUTY REALM Supplements | Premium Health & Wellness Products | Trusted by Thousands",
  description: 'Learn about  BEAUTY REALM Supplements - a trusted provider of premium health supplements including ProDentim, KeySlim Drops, PrimeBiome, and FemiPro. Quality ingredients, science-backed formulas, 60-day guarantee.',
  keywords: " BEAUTY REALM Supplements, about us, premium health supplements, natural supplements, quality supplements, trusted supplement company, ProDentim, KeySlim Drops, PrimeBiome, FemiPro, health supplement company, natural health products, wellness supplements, supplement quality, customer reviews, money back guarantee, GMP certified, third party testing, premium ingredients",
  openGraph: {
    title: 'About  BEAUTY REALM Supplements | Premium Health & Wellness Products',
    description: 'Learn about  BEAUTY REALM Supplements - a trusted provider of premium health supplements including ProDentim, KeySlim Drops, PrimeBiome, and FemiPro.',
    url: 'https://beautyrealmart.com/about',
    siteName: ' BEAUTY REALM Supplements',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: ' BEAUTY REALM Supplements About Us',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About  BEAUTY REALM Supplements | Premium Health & Wellness Products',
    description: 'Learn about  BEAUTY REALM Supplements - a trusted provider of premium health supplements including ProDentim, KeySlim Drops, PrimeBiome, and FemiPro.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://beautyrealmart.com/about',
  },
}

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content=" BEAUTY REALM Supplements" />
        <link rel="icon" href="/logo.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": " BEAUTY REALM Supplements",
              "description": " BEAUTY REALM Supplements is a trusted provider of premium health supplements including ProDentim, KeySlim Drops, PrimeBiome, and FemiPro. We are committed to providing high-quality, natural supplements backed by science.",
              "url": "https://beautyrealmart.com",
              "logo": "https://beautyrealmart.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://beautyrealmart.com"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "50000"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "brand": [
                {
                  "@type": "Brand",
                  "name": "ProDentim"
                },
                {
                  "@type": "Brand",
                  "name": "KeySlim Drops"
                },
                {
                  "@type": "Brand",
                  "name": "PrimeBiome"
                },
                {
                  "@type": "Brand",
                  "name": "FemiPro"
                }
              ],
              "foundingDate": "2020",
              "numberOfEmployees": "50-100",
              "slogan": "Premium Health Supplements for Optimal Wellness"
            }`
          }}
        />
      </head>
      <body className={inter.className}>
        <GoogleTagManager />
        <GoogleAnalytics />
        {children}
        <CookiePolicyModal />
      </body>
    </html>
  )
} 
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import CookiePolicyModal from "@/components/cookie-policy-modal"
import GoogleAnalytics from "@/components/google-analytics"
import GoogleTagManager from "@/components/google-tag-manager"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  metadataBase: new URL('https://beautyrealmart.com'),
  title: "Product Comparison Guide | ProDentim vs KeySlim vs PrimeBiome vs FemiPro |  BEAUTY REALM Supplements",
  description: 'Compare ProDentim, KeySlim Drops, PrimeBiome, and FemiPro supplements. Find the perfect health solution for your needs. Detailed comparison of ingredients, benefits, and customer ratings.',
  keywords: "product comparison, ProDentim vs KeySlim, PrimeBiome vs FemiPro, supplement comparison, health supplement comparison, ProDentim review, KeySlim Drops review, PrimeBiome review, FemiPro review, best health supplements, oral health vs weight loss, gut health vs women's health, supplement comparison guide, which supplement to choose, health supplement guide, ProDentim comparison, KeySlim comparison, PrimeBiome comparison, FemiPro comparison",
  openGraph: {
    title: 'Product Comparison Guide | ProDentim vs KeySlim vs PrimeBiome vs FemiPro',
    description: 'Compare ProDentim, KeySlim Drops, PrimeBiome, and FemiPro supplements. Find the perfect health solution for your needs.',
    url: 'https://beautyrealmart.com/compare',
    siteName: ' BEAUTY REALM Supplements',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: ' BEAUTY REALM Supplements Product Comparison',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Comparison Guide | ProDentim vs KeySlim vs PrimeBiome vs FemiPro',
    description: 'Compare ProDentim, KeySlim Drops, PrimeBiome, and FemiPro supplements. Find the perfect health solution for your needs.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://beautyrealmart.com/compare',
  },
}

export default function CompareLayout({
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
              "@type": "WebPage",
              "name": "Product Comparison Guide",
              "description": "Compare ProDentim, KeySlim Drops, PrimeBiome, and FemiPro supplements to find the perfect health solution for your needs.",
              "url": "https://beautyrealmart.com/compare",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "ProDentim - Oral Health Supplement",
                    "description": "Advanced oral probiotic with 3.5 billion CFUs for healthy teeth and gums"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "KeySlim Drops - Weight Loss Supplement",
                    "description": "Revolutionary liquid formula with 24 natural ingredients for sustainable weight loss"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "PrimeBiome - Gut Health Supplement",
                    "description": "Gut-skin connection supplement with 5 billion CFUs and collagen peptides"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "FemiPro - Women's Health Supplement",
                    "description": "Comprehensive women's health formula for bladder control and urinary wellness"
                  }
                ]
              },
              "about": [
                {
                  "@type": "Product",
                  "name": "ProDentim",
                  "description": "Oral health supplement with 3.5 billion CFUs"
                },
                {
                  "@type": "Product",
                  "name": "KeySlim Drops",
                  "description": "Weight loss supplement with 24 natural ingredients"
                },
                {
                  "@type": "Product",
                  "name": "PrimeBiome",
                  "description": "Gut health supplement with 5 billion CFUs"
                },
                {
                  "@type": "Product",
                  "name": "FemiPro",
                  "description": "Women's health supplement for bladder support"
                }
              ]
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
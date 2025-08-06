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
  title: "Customer Reviews & Testimonials |  BEAUTY REALM Supplements | Real Results from Real Customers",
  description: 'Read authentic customer reviews and testimonials for ProDentim, KeySlim Drops, PrimeBiome, and FemiPro. Real results from 50,000+ satisfied customers. 4.8/5 average rating.',
  keywords: "customer reviews, testimonials, ProDentim reviews, KeySlim Drops reviews, PrimeBiome reviews, FemiPro reviews, customer testimonials, real customer results, before and after, weight loss testimonials, oral health reviews, gut health testimonials, women's health reviews, supplement reviews, customer success stories, product reviews, health supplement testimonials, weight loss success stories, oral health success stories, gut health success stories",
  openGraph: {
    title: 'Customer Reviews & Testimonials |  BEAUTY REALM Supplements',
    description: 'Read authentic customer reviews and testimonials for ProDentim, KeySlim Drops, PrimeBiome, and FemiPro. Real results from 50,000+ satisfied customers.',
    url: 'https://beautyrealmart.com/testimonials',
    siteName: ' BEAUTY REALM Supplements',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: ' BEAUTY REALM Supplements Customer Reviews',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Reviews & Testimonials |  BEAUTY REALM Supplements',
    description: 'Read authentic customer reviews and testimonials for ProDentim, KeySlim Drops, PrimeBiome, and FemiPro. Real results from 50,000+ satisfied customers.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://beautyrealmart.com/testimonials',
  },
}

export default function TestimonialsLayout({
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
              "name": "Customer Reviews & Testimonials",
              "description": "Read authentic customer reviews and testimonials for  BEAUTY REALM Supplements products including ProDentim, KeySlim Drops, PrimeBiome, and FemiPro.",
              "url": "https://beautyrealmart.com/testimonials",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "ProDentim Customer Reviews",
                    "description": "Real customer testimonials for ProDentim oral health supplement"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "KeySlim Drops Customer Reviews",
                    "description": "Real customer testimonials for KeySlim Drops weight loss supplement"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "PrimeBiome Customer Reviews",
                    "description": "Real customer testimonials for PrimeBiome gut health supplement"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "FemiPro Customer Reviews",
                    "description": "Real customer testimonials for FemiPro women's health supplement"
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "50000"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Theo F."
                  },
                  "reviewBody": "ProDentim changed my oral health completely! My teeth feel stronger, my gums are healthier, and my breath is fresher."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Jennifer L."
                  },
                  "reviewBody": "I lost 25 pounds in just 8 weeks with KeySlim Drops! The appetite control is incredible and my energy levels are through the roof."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Amanda L."
                  },
                  "reviewBody": "PrimeBiome has completely transformed my skin! My complexion is clearer, more radiant, and I've noticed a significant improvement in my digestion."
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
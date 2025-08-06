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
  title: "KeySlim Drops Review 2025 – How KeySlim Works for Weight Loss | Real User Results",
  description: 'KeySlim Drops review 2025: Discover how this revolutionary liquid weight loss supplement works with 24 natural ingredients. Real user results in 1-3 weeks. Get 60% off today with free shipping and 60-day guarantee.',
  keywords: "KeySlim Drops review 2025, KeySlim Drops weight loss, KeySlim Drops does it work, KeySlim Drops customer reviews, liquid weight loss supplement, natural weight loss drops, fat burning supplement, metabolism booster, appetite suppressant, weight loss supplement for women, KeySlim Drops ingredients, KeySlim Drops side effects, KeySlim Drops results, KeySlim Drops before and after, natural weight loss, fat burning drops, metabolism supplement, weight loss drops review, KeySlim Drops scam, KeySlim Drops legitimate",
  openGraph: {
    title: 'KeySlim Drops Review 2025 – How KeySlim Works for Weight Loss',
    description: 'KeySlim Drops review 2025: Discover how this revolutionary liquid weight loss supplement works with 24 natural ingredients. Real user results in 1-3 weeks.',
    url: 'https://beautyrealmart.com/keyslim',
    siteName: ' BEAUTY REALM Supplements',
    images: [
      {
        url: '/keyslim-drops1.png',
        width: 1200,
        height: 630,
        alt: 'KeySlim Drops weight loss supplement review',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KeySlim Drops Review 2025 – How KeySlim Works for Weight Loss',
    description: 'KeySlim Drops review 2025: Discover how this revolutionary liquid weight loss supplement works with 24 natural ingredients. Real user results in 1-3 weeks.',
    images: ['/keyslim-drops1.png'],
  },
  alternates: {
    canonical: 'https://beautyrealmart.com/keyslim',
  },
}

export default function KeySlimLayout({
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
        <link rel="icon" href="/keyslim-drops1.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "KeySlim Drops",
              "description": "KeySlim Drops is a revolutionary liquid weight loss supplement featuring 24 powerful natural ingredients in a breakthrough 3-stage formula. Designed to optimize metabolism, control appetite, and support sustainable fat burning for real results in 1-3 weeks.",
              "brand": {
                "@type": "Brand",
                "name": " BEAUTY REALM Supplements"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "price": "39.95",
                "priceValidUntil": "2025-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "892"
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
                    "name": "Jennifer L."
                  },
                  "reviewBody": "I lost 25 pounds in just 8 weeks with KeySlim Drops! The appetite control is incredible - I no longer crave junk food, and my energy levels are through the roof. This product really works!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Mike R."
                  },
                  "reviewBody": "After trying countless weight loss products, KeySlim Drops finally delivered real results. I've lost 18 pounds and 3 inches off my waist in 6 weeks. The liquid form is so easy to take!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sarah K."
                  },
                  "reviewBody": "KeySlim Drops helped me break through my weight loss plateau. I've lost 32 pounds total and feel more confident than ever. The natural ingredients give me peace of mind."
                }
              ],
              "image": "/keyslim-drops1.png",
              "category": "Health & Beauty",
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Ingredients",
                  "value": "24 Natural Ingredients"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Form",
                  "value": "Liquid Drops"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Serving Size",
                  "value": "1-2 droppers daily"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Results Timeline",
                  "value": "1-3 weeks"
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
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import CookiePolicyModal from "@/components/cookie-policy-modal"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  metadataBase: new URL('https://beautyrealmart.com'),
  title: "FemiPro Review 2025 – Complete Women's Health & Bladder Support | Real Results",
  description: 'FemiPro review 2025: Discover the complete women\'s health supplement for bladder control and urinary tract health. Natural herbal formula, 60-day guarantee. Get 50% off today with free shipping.',
  keywords: "FemiPro review 2025, FemiPro women's health, FemiPro bladder support, FemiPro urinary tract health, women's health supplement, bladder control supplement, urinary tract supplement, natural women's health, bladder health for women, urinary health supplement, pelvic floor support, women's wellness supplement, natural bladder support, urinary tract health for women, bladder control for women, women's health formula, FemiPro ingredients, FemiPro side effects, FemiPro results, FemiPro before and after, women's bladder health, natural urinary support",
  openGraph: {
    title: 'FemiPro Review 2025 – Complete Women\'s Health & Bladder Support',
    description: 'FemiPro review 2025: Discover the complete women\'s health supplement for bladder control and urinary tract health. Natural herbal formula, 60-day guarantee.',
    url: 'https://beautyrealmart.com/femipro',
    siteName: ' BEAUTY REALM Supplements',
    images: [
      {
        url: '/femipro.png',
        width: 1200,
        height: 630,
        alt: 'FemiPro women\'s health and bladder support supplement review',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FemiPro Review 2025 – Complete Women\'s Health & Bladder Support',
    description: 'FemiPro review 2025: Discover the complete women\'s health supplement for bladder control and urinary tract health. Natural herbal formula, 60-day guarantee.',
    images: ['/femipro.png'],
  },
  alternates: {
    canonical: 'https://beautyrealmart.com/femipro',
  },
}

export default function FemiProLayout({
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
        <link rel="icon" href="/femipro.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "FemiPro",
              "description": "FemiPro is a comprehensive women's health supplement designed specifically for bladder control, urinary tract health, and pelvic wellness. Features cranberry extract, D-Mannose, hibiscus extract, and other natural herbal ingredients for complete women's wellness support.",
              "brand": {
                "@type": "Brand",
                "name": " BEAUTY REALM Supplements"
              },
              "offers": {
                "@type": "Offer",
                "url": "http://femipro24.com/text.php#aff=lifestylemedicine623",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "price": "49.95",
                "priceValidUntil": "2025-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "634"
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
                    "name": "Lisa M."
                  },
                  "reviewBody": "FemiPro has been a game-changer for my bladder health! I no longer worry about urgency issues, and my confidence has improved dramatically. The natural ingredients give me peace of mind."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sarah W."
                  },
                  "reviewBody": "After struggling with urinary tract issues for years, FemiPro has finally provided the relief I needed. My urinary health is better than ever, and I feel more comfortable and confident."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Jennifer P."
                  },
                  "reviewBody": "FemiPro has restored my quality of life! I can now enjoy activities without worrying about bladder issues. The natural formula is gentle and effective - I highly recommend it to all women."
                }
              ],
              "image": "/femipro.png",
              "category": "Health & Beauty",
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Form",
                  "value": "Capsule"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Serving Size",
                  "value": "2 capsules daily"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Key Ingredients",
                  "value": "Cranberry Extract, D-Mannose, Hibiscus Extract"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Target Audience",
                  "value": "Women"
                }
              ]
            }`
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookiePolicyModal />
      </body>
    </html>
  )
} 
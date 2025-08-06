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
  metadataBase: new URL('https://beautyrealmart.com/primebiome'),
  title: "PrimeBiome Review 2025 – Best Probiotic for Gut Health & Radiant Skin | Real Results",
  description: 'PrimeBiome review 2025: Discover the best probiotic for gut health and radiant skin. 5 billion CFUs, gut-skin connection, natural ingredients. Get 50% off today with free shipping and 60-day guarantee.',
  keywords: "PrimeBiome review 2025, PrimeBiome probiotic, PrimeBiome gut health, PrimeBiome skin health, best probiotic for gut health, gut skin connection, probiotic supplement for skin, B. Coagulans probiotic, Lion's Mane supplement, marine collagen peptides, hyaluronic acid supplement, gut microbiome, skin health supplement, digestive health, radiant skin supplement, natural probiotic, gut health supplement, skin glow supplement, PrimeBiome ingredients, PrimeBiome side effects, PrimeBiome results, PrimeBiome before and after, gut skin axis",
  openGraph: {
    title: 'PrimeBiome Review 2025 – Best Probiotic for Gut Health & Radiant Skin',
    description: 'PrimeBiome review 2025: Discover the best probiotic for gut health and radiant skin. 5 billion CFUs, gut-skin connection, natural ingredients.',
    url: 'https://beautyrealmart.com/primebiome',
    siteName: ' BEAUTY REALM Supplements',
    images: [
      {
        url: '/primebiome.png',
        width: 1200,
        height: 630,
        alt: 'PrimeBiome gut health and skin supplement review',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrimeBiome Review 2025 – Best Probiotic for Gut Health & Radiant Skin',
    description: 'PrimeBiome review 2025: Discover the best probiotic for gut health and radiant skin. 5 billion CFUs, gut-skin connection, natural ingredients.',
    images: ['/primebiome.png'],
  },
  alternates: {
    canonical: 'https://beautyrealmart.com/primebiome',
  },
}

export default function PrimeBiomeLayout({
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
        <link rel="icon" href="/primebiome.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "PrimeBiome",
              "description": "PrimeBiome is a revolutionary gut-skin health supplement featuring 5 billion CFUs of B. Coagulans probiotic, Lion's Mane mushroom extract, marine collagen peptides, and hyaluronic acid. Designed to support gut health and promote radiant skin through the gut-skin connection.",
              "brand": {
                "@type": "Brand",
                "name": " BEAUTY REALM Supplements"
              },
              "offers": {
                "@type": "Offer",
                "url": "http://primebiome24.com/text.php#aff=lifestylemedicine623",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "price": "59.95",
                "priceValidUntil": "2025-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "756"
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
                    "name": "Amanda L."
                  },
                  "reviewBody": "PrimeBiome has completely transformed my skin! My complexion is clearer, more radiant, and I've noticed a significant improvement in my digestion. The gut-skin connection is real!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "David J."
                  },
                  "reviewBody": "After struggling with digestive issues for years, PrimeBiome has been a game-changer. My gut health is better than ever, and my skin has never looked more glowing and healthy."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Rachel K."
                  },
                  "reviewBody": "I was skeptical about the gut-skin connection, but PrimeBiome proved me wrong! My skin is clearer, my energy is higher, and I feel amazing. This product really works from the inside out."
                }
              ],
              "image": "/primebiome.png",
              "category": "Health & Beauty",
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "CFU Count",
                  "value": "5 Billion"
                },
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
                  "value": "B. Coagulans, Lion's Mane, Marine Collagen"
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
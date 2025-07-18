import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import CookiePolicyModal from "@/components/cookie-policy-modal"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  metadataBase: new URL('https://prodentim.beautyrealmart.com'),
  title: "ProDentim | Premium Oral Health Supplements & Wellness Products",
  description: 'Shop ProDentim, the #1 oral probiotic for healthy teeth and gums, plus PrimeBiome Glow for radiant skin and FemiPro for bladder health. 100% natural, non-GMO, with a 60-day money-back guarantee.',
  keywords: "ProDentim,ProDentim, oral probiotic supplement, PrimeBiome Glow, FemiPro, healthy teeth and gums, radiant skin, bladder health supplement, natural probiotics, oral health, probiotic supplement, dental health, gum health, PrimeBiome, FemiPro, wellness supplements, premium health supplements, natural ingredients",
  openGraph: {
    title: 'ProDentim – Best Oral Probiotic for Healthy Teeth & Gums |  BEAUTY REALM',
    description: 'Shop ProDentim, the #1 oral probiotic for healthy teeth and gums, plus PrimeBiome Glow for radiant skin and FemiPro for bladder health.',
    url: 'https://prodentim.beautyrealmart.com',
    siteName: ' BEAUTY REALM Supplements',
    images: [
      {
        url: '/prodentim.png',
        width: 1200,
        height: 630,
        alt: 'ProDentim oral probiotic supplement',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProDentim – Best Oral Probiotic for Healthy Teeth & Gums |  BEAUTY REALM',
    description: 'Shop ProDentim, the #1 oral probiotic for healthy teeth and gums, plus PrimeBiome Glow for radiant skin and FemiPro for bladder health.',
    images: ['/prodentim.png'],
  },
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ProDentim" />
        <link rel="icon" href="/prodentim.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "ProDentim",
              "description": "ProDentim is an advanced oral probiotic supplement designed to support healthy teeth and gums. With 3.5 billion CFUs of clinically studied probiotics like Lactobacillus paracasei and Lactobacillus reuteri, it balances your oral microbiome, reduces plaque, and freshens breath.",
              "brand": {
                "@type": "Brand",
                "name": " BEAUTY REALM Supplements"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://prodentim24.com/text.php#aff=lifestylemedicine623",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1245"
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
                    "name": "Sarah M."
                  },
                  "reviewBody": "ProDentim transformed my oral health! My gums are healthier, and my breath is fresher."
                },
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
                  "reviewBody": "My teeth feel stronger, and my smile is brighter with ProDentim!"
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

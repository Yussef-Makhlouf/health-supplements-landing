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
  title: "ProDentim Review 2025 – Does It Really Work? | Best Oral Probiotic Supplement",
  description: 'ProDentim review 2025: Discover if this oral probiotic supplement really works for healthy teeth and gums. Read customer reviews, benefits, and get 50% off today. 3.5 billion CFUs, natural ingredients, 60-day guarantee.',
  keywords: "ProDentim review 2025, ProDentim oral probiotic, ProDentim does it work, ProDentim customer reviews, oral health supplement, dental probiotic, healthy teeth and gums, bad breath treatment, gum health supplement, oral microbiome, probiotic supplement for teeth, ProDentim ingredients, ProDentim side effects, ProDentim results, ProDentim before and after, oral health probiotic, dental health supplement, fresh breath supplement, gum disease treatment, oral hygiene supplement",
  openGraph: {
    title: 'ProDentim Review 2025 – Does It Really Work? | Best Oral Probiotic',
    description: 'ProDentim review 2025: Discover if this oral probiotic supplement really works for healthy teeth and gums. Read customer reviews, benefits, and get 50% off today.',
    url: 'https://beautyrealmart.com/prodentim',
    siteName: ' BEAUTY REALM Supplements',
    images: [
      {
        url: '/prodentim.png',
        width: 1200,
        height: 630,
        alt: 'ProDentim oral probiotic supplement review',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProDentim Review 2025 – Does It Really Work? | Best Oral Probiotic',
    description: 'ProDentim review 2025: Discover if this oral probiotic supplement really works for healthy teeth and gums. Read customer reviews, benefits, and get 50% off today.',
    images: ['/prodentim.png'],
  },
  alternates: {
    canonical: 'https://beautyrealmart.com/prodentim',
  },
}

export default function ProDentimLayout({
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
                "availability": "https://schema.org/InStock",
                "price": "49.95",
                "priceValidUntil": "2025-12-31"
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
                    "name": "Theo F."
                  },
                  "reviewBody": "ProDentim changed my oral health completely! My teeth feel stronger, my gums are healthier, and my breath is fresher. I've never been more confident about my smile. My dentist was amazed at the improvement!"
                },
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
                  "reviewBody": "After struggling with gum sensitivity for years, ProDentim has been a game-changer. My gums are no longer inflamed, and I can enjoy hot and cold foods without discomfort. Highly recommend!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Michael J."
                  },
                  "reviewBody": "I was skeptical at first, but ProDentim really works! My breath is noticeably fresher, and my teeth feel cleaner throughout the day. It's become an essential part of my daily routine."
                }
              ],
              "image": "/prodentim.png",
              "category": "Health & Beauty",
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "CFU Count",
                  "value": "3.5 Billion"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Form",
                  "value": "Tablet"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Serving Size",
                  "value": "1 tablet daily"
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
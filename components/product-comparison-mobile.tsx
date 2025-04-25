"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductInfo {
  name: string
  tagline: string
  color: string
  benefits: string[]
  ingredients: string[]
  usage: string
  probioticCount: string
  suitableFor: string
  resultsTimeline: string
  pricePoint: string
  image: string
}

export default function ProductComparisonMobile() {
  const [activeTab, setActiveTab] = useState("prodentim")

  const products: Record<string, ProductInfo> = {
    prodentim: {
      name: "ProDentim",
      tagline: "Oral Probiotic",
      color: "blue",
      benefits: ["Improves gum health", "Freshens breath", "Strengthens tooth enamel", "Reduces plaque formation"],
      ingredients: ["Lactobacillus Paracasei", "Lactobacillus Reuteri", "B.lactis BL-04", "Inulin", "Malic Acid"],
      usage: "1 tablet daily, preferably after brushing teeth",
      probioticCount: "3.5 Billion CFU",
      suitableFor: "Adults concerned about oral health",
      resultsTimeline: "2-4 weeks for noticeable results",
      pricePoint: "Premium",
      image: "/prodentim.jpg",
    },
    primebiome: {
      name: "PrimeBiome ",
      tagline: "Skin & Gut Health",
      color: "green",
      benefits: [
        "Promotes radiant skin",
        "Supports gut health",
        "Reduces inflammation",
        "Enhances nutrient absorption",
      ],
      ingredients: ["B. Coagulans", "Lion's Mane Mushroom", "Collagen Peptides", "Hyaluronic Acid", "Vitamin C & E"],
      usage: "2 capsules daily with food",
      probioticCount: "5 Billion CFU",
      suitableFor: "Adults seeking skin and digestive benefits",
      resultsTimeline: "4-6 weeks for optimal results",
      pricePoint: "Premium",
      image: "/primebiome.jpg",
    },
    femipro: {
      name: "FemiPro",
      tagline: "Bladder Health",
      color: "blue",
      benefits: [
        "Improves bladder control",
        "Supports urinary tract health",
        "Reduces discomfort",
        "Promotes overall comfort",
      ],
      ingredients: ["Cranberry Extract", "  D-Mannose", "Hibiscus Extract", "Dandelion Root", "Marshmallow Root"],
      usage: "1-2 capsules daily with water",
      probioticCount: "Not applicable",
      suitableFor: "Women concerned about bladder health",
      resultsTimeline: "1-2 weeks for initial comfort",
      pricePoint: "Premium",
      image: "/femipro.jpg",
    },
  }

  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700",
    green: "bg-green-50 text-green-700",
  }

  const badgeColorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
  }

  const activeProduct = products[activeTab]

  return (
    <div className="md:hidden w-full">
      <Tabs defaultValue="prodentim" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="prodentim">ProDentim</TabsTrigger>
          <TabsTrigger value="primebiome">PrimeBiome</TabsTrigger>
          <TabsTrigger value="femipro">FemiPro</TabsTrigger>
        </TabsList>

        {Object.keys(products).map((productKey) => (
          <TabsContent key={productKey} value={productKey} className="mt-0">
            <div className="flex flex-col items-center mb-6">
              <div className="relative h-24 w-24 mb-2">
                <Image
                  src={products[productKey].image}
                  alt={`${products[productKey].name} bottle`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className={`font-bold text-xl ${colorMap[products[productKey].color].split(" ")[1]}`}>
                {products[productKey].name}
              </h3>
              <span className="text-xs text-muted-foreground">{products[productKey].tagline}</span>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Primary Benefits</h4>
                <ul className="space-y-1 pl-5 list-disc">
                  {products[productKey].benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Key Ingredients</h4>
                <ul className="space-y-1 pl-5 list-disc">
                  {products[productKey].ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-1">Recommended Usage</h4>
                  <p>{products[productKey].usage}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-1">Probiotic Count</h4>
                  <p>{products[productKey].probioticCount}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-1">Suitable For</h4>
                  <p>{products[productKey].suitableFor}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-1">Results Timeline</h4>
                  <p>{products[productKey].resultsTimeline}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-1">Price Point</h4>
                  <Badge className={badgeColorMap[products[productKey].color]}>{products[productKey].pricePoint}</Badge>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

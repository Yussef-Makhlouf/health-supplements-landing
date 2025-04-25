import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

interface ProductDetailsCardProps {
  name: string
  tagline: string
  description: string
  benefits: string[]
  ingredients: string[]
  color: "blue" | "green" | "purple"
  imagePath: string
  learnMoreLink: string
}

export default function ProductDetailsCard({
  name,
  tagline,
  description,
  benefits,
  ingredients,
  color,
  imagePath,
  learnMoreLink,
}: ProductDetailsCardProps) {
  const colorMap = {
    blue: {
      badge: "bg-blue-100 text-blue-700 hover:bg-blue-100 border-none",
      check: "bg-blue-50 text-blue-700",
    },
    green: {
      badge: "bg-green-100 text-green-700 hover:bg-green-100 border-none",
      check: "bg-green-50 text-green-700",
    },
    purple: {
      badge: "bg-purple-100 text-purple-700 hover:bg-purple-100 border-none",
      check: "bg-purple-50 text-purple-700",
    },
  }

  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row">
        <div className="relative h-[250px] lg:h-auto lg:w-[220px] bg-gradient-to-br from-gray-50 to-gray-100">
          <Image src={imagePath || "/placeholder.svg"} alt={`${name} bottle`} fill className="object-contain p-4" />
        </div>
        <CardContent className="flex-1 p-6 lg:p-8">
          <Badge className={colorMap[color].badge}>{tagline}</Badge>
          <h3 className="text-2xl font-bold mt-2 mb-3">{name}</h3>
          <p className="text-muted-foreground mb-6">{description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
            <div>
              <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-gray-500">Key Benefits</h4>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span
                      className={`inline-flex items-center justify-center h-5 w-5 rounded-full ${colorMap[color].check} mr-2 mt-0.5`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-gray-500">Key Ingredients</h4>
              <ul className="space-y-2">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span
                      className={`inline-flex items-center justify-center h-5 w-5 rounded-full ${colorMap[color].check} mr-2 mt-0.5`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Button variant="outline" className="mt-2" asChild>
            <Link href={learnMoreLink}>  Learn More About This Offere </Link>
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}

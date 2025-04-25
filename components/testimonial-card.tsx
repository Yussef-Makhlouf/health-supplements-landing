import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  rating: number
  product: string
  image?: string
}

export default function TestimonialCard({ quote, author, rating, product, image }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden bg-white border-gray-100 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardContent className="p-8">
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <div className="bg-primary/5 px-4 py-2 rounded-full mb-6 inline-block text-sm font-medium text-primary">
          {product}
        </div>
        <blockquote className="text-lg text-gray-700 mb-6">"{quote}"</blockquote>
        <div className="flex items-center">
          {image && (
            <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-sm mr-3">
              <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
            </div>
          )}
          <p className="text-sm font-semibold">{author}</p>
        </div>
      </CardContent>
    </Card>
  )
}

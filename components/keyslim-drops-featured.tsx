import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Star, Droplets, Zap, Target } from "lucide-react"

export default function KeySlimDropsFeatured() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge className="bg-orange-100 text-orange-700 mb-4">
            🔥 HOT NEW PRODUCT
          </Badge>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-4">
            KeySlim Drops - Revolutionary Weight Loss
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The world's first liquid weight loss supplement with 24 natural ingredients
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/keyslim-drops1.png"
              alt="KeySlim Drops"
              width={400}
              height={500}
              className="mx-auto animate-float"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">3-Stage Weight Loss System</h3>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <Target className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Stage 1: Appetite Control</h4>
                  <p className="text-gray-600">Natural hunger suppression</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Zap className="h-6 w-6 text-amber-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Stage 2: Metabolism Boost</h4>
                  <p className="text-gray-600">Accelerated fat burning</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Droplets className="h-6 w-6 text-yellow-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Stage 3: Long-term Results</h4>
                  <p className="text-gray-600">Sustainable weight management</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
              asChild
            >
              <Link href="https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623">
                Get KeySlim Drops Now - Special Offer
              </Link>
            </Button>

            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm">4.9/5 (112,847+ reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
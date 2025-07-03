import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Check, Star, Droplets, Zap, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function KeySlimShowcase() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100 rounded-full opacity-30 blur-3xl -z-10"></div>

      <div className="container px-4 md:px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 border-none px-4 py-2 text-base font-medium shadow-md mb-6">
            <Droplets className="h-4 w-4 mr-2" />
            NEW REVOLUTIONARY FORMULA
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              KeySlim Drops
            </span>
          </h2>
          <p className="text-xl text-muted-foreground md:text-2xl max-w-3xl mx-auto">
            The ultimate liquid weight loss supplement with 24 natural ingredients for rapid, sustainable results
          </p>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Product Image Section */}
          <div className="relative">
            <div className="relative h-[500px] w-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/50 to-amber-200/50 rounded-full blur-3xl scale-110 opacity-60"></div>
              <Image
                src="/keyslim-drops1.png"
                alt="KeySlim Drops Weight Loss Formula"
                fill
                className="object-contain drop-shadow-2xl animate-float"
                priority
              />
              
              {/* Floating Features */}
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-xl rotate-6">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium">3-Stage Fat Burn</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-xl -rotate-6">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-medium">24 Ingredients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Why KeySlim Drops Works</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Target className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Stage 1: Appetite Control</h4>
                    <p className="text-muted-foreground text-sm">L-Ornithine and GABA work together to naturally suppress hunger and improve mood</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Stage 2: Metabolism Boost</h4>
                    <p className="text-muted-foreground text-sm">Green Tea Extract and Guarana accelerate fat burning without affecting muscle</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Award className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Stage 3: Long-term Fat Loss</h4>
                    <p className="text-muted-foreground text-sm">Maca Root and L-Arginine support sustained weight management</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <Link href="https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623" className="flex items-center justify-center gap-2">
                  <Droplets className="h-5 w-5" />
                  Get KeySlim Drops Now - 60% OFF
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium">4.9/5 (112,847+ reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-6 text-center">
              <Droplets className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-1">Liquid Formula</h4>
              <p className="text-sm text-muted-foreground">Better absorption than pills</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
            <CardContent className="p-6 text-center">
              <Target className="h-8 w-8 text-amber-500 mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-1">24 Ingredients</h4>
              <p className="text-sm text-muted-foreground">Natural & powerful blend</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-1">FDA Registered</h4>
              <p className="text-sm text-muted-foreground">Safe & regulated facility</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6 text-center">
              <Check className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-1">60-Day Guarantee</h4>
              <p className="text-sm text-muted-foreground">Risk-free trial</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 
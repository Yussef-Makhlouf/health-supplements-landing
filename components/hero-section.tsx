import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container px-4 md:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-100 rounded-full opacity-20 blur-3xl -z-10"></div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block animate-bounce">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-3 py-1.5 text-sm">
                #1 Best-Selling Oral Probiotic
              </Badge>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent">
              Transform Your Health with ProDentim!
            </h1>

            {/* Product image for mobile only - shown between title and description */}
            <div className="flex justify-center lg:hidden relative my-8">
              <div className="relative h-[350px] w-[280px] animate-float">
                <div className="absolute top-10 -left-5 bg-white p-3 rounded-lg shadow-lg z-10 rotate-6">
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-xs font-medium">Clinically Proven</span>
                  </div>
                </div>
                <div className="absolute bottom-10 -right-5 bg-white p-3 rounded-lg shadow-lg z-10 -rotate-6">
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-xs font-medium">3.5 Billion CFUs</span>
                  </div>
                </div>
                <Image
                  src="/prodentim.png"
                  alt="ProDentim bottle"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            <p className="text-xl text-muted-foreground md:text-2xl max-w-[600px]">
              Discover the #1 best-selling oral probiotic for healthy teeth and gums, plus more premium supplements for
              radiant skin and bladder health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="https://prodentim24.com/text.php#aff=lifestylemedicine623" className="flex items-center gap-2 text-lg">
                  Shop ProDentim Now
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
              <Link href="https://prodentim24.com/text.php#aff=lifestylemedicine623">
              <Button size="lg" variant="outline" className="border-2 hover:bg-gray-50 transition-all duration-300">
                Learn More About This Offere <ChevronRight className="h-5 w-5" />
              </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center gap-1">
                <Badge
                  variant="outline"
                  className="bg-white border-gold-200 text-gold-700 flex items-center gap-1 px-3 py-1.5"
                >
                  <Check className="h-4 w-4 text-green-600" />
                  60-Day Money-Back Guarantee
                </Badge>
              </div>
              <div className="flex items-center gap-1">
                <Badge
                  variant="outline"
                  className="bg-white border-gold-200 text-gold-700 flex items-center gap-1 px-3 py-1.5"
                >
                  <Check className="h-4 w-4 text-green-600" />
                  FDA-Registered Facilities
                </Badge>
              </div>
              <div className="flex items-center gap-1">
                <Badge
                  variant="outline"
                  className="bg-white border-gold-200 text-gold-700 flex items-center gap-1 px-3 py-1.5"
                >
                  <Check className="h-4 w-4 text-green-600" />
                  Premium Quality Ingredients
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">5.0 (19,500+ reviews)</span>
            </div>
          </div>

          {/* Product image for desktop only - hidden on mobile */}
          <div className="hidden lg:flex justify-center lg:justify-end relative">
            <div className="absolute w-full h-full bg-gradient-to-br from-blue-100/50 to-green-100/50 rounded-full blur-3xl opacity-70 -z-10"></div>
            <div className="relative h-[400px] w-[320px] sm:h-[450px] sm:w-[350px] lg:h-[500px] lg:w-[400px] animate-float">
              <div className="absolute top-10 -left-10 bg-white p-3 rounded-lg shadow-lg z-10 rotate-6">
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-xs font-medium">Clinically Proven</span>
                </div>
              </div>
              <div className="absolute bottom-10 -right-10 bg-white p-3 rounded-lg shadow-lg z-10 -rotate-6">
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-xs font-medium">3.5 Billion CFUs</span>
                </div>
              </div>
              <Image
                src="/prodentim.png"
                alt="ProDentim bottle"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

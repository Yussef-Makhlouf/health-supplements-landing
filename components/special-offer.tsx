import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, Gift, Truck, Book, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function SpecialOffer() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-amber-50 via-white to-blue-50 overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full opacity-20 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl -z-10"></div>

        <Card className="border-2 border-amber-200 shadow-2xl hover:shadow-3xl transition-all duration-300">
          <CardContent className="p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-3 items-center">
              {/* ProDentim */}
              <div className="space-y-6 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl relative">
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-none px-3 py-1.5 text-sm animate-pulse">
                    <Gift className="h-4 w-4 mr-1" />
                    Order 6 Bottles and Get 2  E-Books!
                  </Badge>
                </div>
                <div className="inline-block">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-3 py-1.5 text-sm">
                    ProDentim
                  </Badge>
                </div>

                <div className="relative h-[250px] w-full">
                  <Image
                    src="/prodentim.png"
                    alt="ProDentim bottle"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-blue-600" />
                    <p className="text-sm font-medium">Free Shipping</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-blue-600" />
                    <p className="text-sm font-medium">2FREE  E-Books! </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-white border-blue-200 text-blue-700"
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Oral Health Support
                  </Badge>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    5.0 (95,000+ reviews)
                  </span>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                  asChild
                >
                  <Link
                    href="https://prodentim24.com/text.php#aff=lifestylemedicine623"
                    className="flex items-center justify-center gap-2"
                  >
                    Buy ProDentim
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* PrimeBiome */}
              <div className="space-y-6 bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl relative">
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-none px-3 py-1.5 text-sm animate-pulse">
                    <Gift className="h-4 w-4 mr-1" />
                    Order 6 Bottles and Get 2  E-Books!
                  </Badge>
                </div>
                <div className="inline-block">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none px-3 py-1.5 text-sm">
                    PrimeBiome
                  </Badge>
                </div>

                <div className="relative h-[250px] w-full">
                  <Image
                    src="/primebiome.png"
                    alt="PrimeBiome bottle"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-green-600" />
                    <p className="text-sm font-medium">Free Shipping</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-green-600" />
                    <p className="text-sm font-medium">2FREE  E-Books! </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-white border-green-200 text-green-700"
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Skin & Gut Health
                  </Badge>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    5.0 (19,479 + reviews)
                  </span>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                  asChild
                >
                  <Link
                    href="https://primebiome24.com/text.php#aff=lifestylemedicine623"
                    className="flex items-center justify-center gap-2"
                  >
                    Buy PrimeBiome
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* FemiPro */}
              <div className="space-y-6 bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl relative">
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-none px-3 py-1.5 text-sm animate-pulse">
                    <Gift className="h-4 w-4 mr-1" />
                    Order 6 Bottles and Get 2  E-Books!
                  </Badge>
                </div>
                <div className="inline-block">
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 border-none px-3 py-1.5 text-sm">
                    FemiPro
                  </Badge>
                </div>

                <div className="relative h-[250px] w-full">
                  <Image
                    src="/femipro.png"
                    alt="FemiPro bottle"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-purple-600" />
                    <p className="text-sm font-medium">Free Shipping</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-purple-600" />
                    <p className="text-sm font-medium">2FREE  E-Books! </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-white border-purple-200 text-purple-700"
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Bladder Health
                  </Badge>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    5.0 (18,369+ reviews)
                  </span>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
                  asChild
                >
                  <Link
                    href="https://femipro24.com/text.php#aff=lifestylemedicine623"
                    className="flex items-center justify-center gap-2"
                  >
                    Buy FemiPro
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

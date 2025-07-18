import Image from "next/image"
import Link from "next/link"
import { Check, Star, Award, Shield, Heart, Users, Leaf, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-4 py-2 mb-6">
              PRODUCT COMPARISON GUIDE
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Product Comparison Guide
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Compare our premium health supplements to find the perfect solution for your needs. 
              Each product is designed to address specific health concerns with science-backed 
              ingredients and proven results.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Science-Backed Formulas</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Natural Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>60-Day Money Back</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Health Supplements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each product is carefully formulated to address specific health needs with 
              the highest quality ingredients and proven effectiveness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
              <CardHeader className="text-center flex-shrink-0">
                <Image
                  src="/prodentim.png"
                  alt="ProDentim Oral Health"
                  width={200}
                  height={200}
                  className="w-full h-auto max-w-[120px] mx-auto mb-4"
                />
                <CardTitle className="text-lg">ProDentim</CardTitle>
                <p className="text-sm text-gray-600">Oral Health & Dental Care</p>
                <Badge className="bg-blue-100 text-blue-700 mt-2">Best Seller</Badge>
              </CardHeader>
              <CardContent className="text-center flex-grow flex flex-col">
                <p className="text-gray-600 text-sm mb-4">
                  Advanced oral probiotic with 3.5 billion CFUs for healthy teeth and gums.
                </p>
                <div className="space-y-2 text-sm flex-grow">
                  <div className="flex items-center justify-between">
                    <span>CFU Count:</span>
                    <span className="font-semibold">3.5 Billion</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Form:</span>
                    <span className="font-semibold">Tablet</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Rating:</span>
                    <span className="font-semibold">4.8/5</span>
                  </div>
                </div>
                <Button size="sm" className="w-full mt-4" asChild>
                  <Link href="/prodentim">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
              <CardHeader className="text-center flex-shrink-0">
                <Image
                  src="/keyslim-drops1.png"
                  alt="KeySlim Drops Weight Loss"
                  width={200}
                  height={200}
                  className="w-full h-auto max-w-[120px] mx-auto mb-4"
                />
                <CardTitle className="text-lg">KeySlim Drops</CardTitle>
                <p className="text-sm text-gray-600">Weight Loss & Metabolism</p>
                <Badge className="bg-orange-100 text-orange-700 mt-2">New Formula</Badge>
              </CardHeader>
              <CardContent className="text-center flex-grow flex flex-col">
                <p className="text-gray-600 text-sm mb-4">
                  Revolutionary liquid formula with 24 natural ingredients for sustainable weight loss.
                </p>
                <div className="space-y-2 text-sm flex-grow">
                  <div className="flex items-center justify-between">
                    <span>Ingredients:</span>
                    <span className="font-semibold">24 Natural</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Form:</span>
                    <span className="font-semibold">Liquid Drops</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Rating:</span>
                    <span className="font-semibold">4.7/5</span>
                  </div>
                </div>
                <Button size="sm" className="w-full mt-4" asChild>
                  <Link href="/keyslim">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
              <CardHeader className="text-center flex-shrink-0">
                <Image
                  src="/primebiome.png"
                  alt="PrimeBiome Gut Health"
                  width={200}
                  height={200}
                  className="w-full h-auto max-w-[120px] mx-auto mb-4"
                />
                <CardTitle className="text-lg">PrimeBiome</CardTitle>
                <p className="text-sm text-gray-600">Gut Health & Skin Radiance</p>
                <Badge className="bg-green-100 text-green-700 mt-2">Gut-Skin Formula</Badge>
              </CardHeader>
              <CardContent className="text-center flex-grow flex flex-col">
                <p className="text-gray-600 text-sm mb-4">
                  Gut-skin connection supplement with 5 billion CFUs and collagen peptides.
                </p>
                <div className="space-y-2 text-sm flex-grow">
                  <div className="flex items-center justify-between">
                    <span>CFU Count:</span>
                    <span className="font-semibold">5 Billion</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Form:</span>
                    <span className="font-semibold">Capsule</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Rating:</span>
                    <span className="font-semibold">4.8/5</span>
                  </div>
                </div>
                <Button size="sm" className="w-full mt-4" asChild>
                  <Link href="/primebiome">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
              <CardHeader className="text-center flex-shrink-0">
                <Image
                  src="/femipro.png"
                  alt="FemiPro Women's Health"
                  width={200}
                  height={200}
                  className="w-full h-auto max-w-[120px] mx-auto mb-4"
                />
                <CardTitle className="text-lg">FemiPro</CardTitle>
                <p className="text-sm text-gray-600">Women's Health & Bladder Support</p>
                <Badge className="bg-purple-100 text-purple-700 mt-2">Women's Formula</Badge>
              </CardHeader>
              <CardContent className="text-center flex-grow flex flex-col">
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive women's health formula for bladder control and urinary wellness.
                </p>
                <div className="space-y-2 text-sm flex-grow">
                  <div className="flex items-center justify-between">
                    <span>Key Ingredient:</span>
                    <span className="font-semibold">Cranberry Extract</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Form:</span>
                    <span className="font-semibold">Capsule</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Rating:</span>
                    <span className="font-semibold">4.8/5</span>
                  </div>
                </div>
                <Button size="sm" className="w-full mt-4" asChild>
                  <Link href="/femipro">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Detailed Product Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare key features, ingredients, and benefits to find the perfect 
              supplement for your health goals.
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Features</TableHead>
                  <TableHead className="text-center">ProDentim</TableHead>
                  <TableHead className="text-center">KeySlim Drops</TableHead>
                  <TableHead className="text-center">PrimeBiome</TableHead>
                  <TableHead className="text-center">FemiPro</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">Primary Benefit</TableCell>
                  <TableCell className="text-center">Oral Health & Dental Care</TableCell>
                  <TableCell className="text-center">Weight Loss & Metabolism</TableCell>
                  <TableCell className="text-center">Gut Health & Skin Radiance</TableCell>
                  <TableCell className="text-center">Women's Health & Bladder Support</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Key Ingredients</TableCell>
                  <TableCell className="text-center">3.5 Billion CFUs, Lactobacillus paracasei</TableCell>
                  <TableCell className="text-center">24 Natural Ingredients, Green Tea Extract</TableCell>
                  <TableCell className="text-center">5 Billion CFUs, Lion's Mane, Marine Collagen</TableCell>
                  <TableCell className="text-center">Cranberry Extract, D-Mannose, Hibiscus</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Form</TableCell>
                  <TableCell className="text-center">Tablet</TableCell>
                  <TableCell className="text-center">Liquid Drops</TableCell>
                  <TableCell className="text-center">Capsule</TableCell>
                  <TableCell className="text-center">Capsule</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Serving Size</TableCell>
                  <TableCell className="text-center">1 tablet daily</TableCell>
                  <TableCell className="text-center">1-2 droppers daily</TableCell>
                  <TableCell className="text-center">2 capsules daily</TableCell>
                  <TableCell className="text-center">2 capsules daily</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Results Timeline</TableCell>
                  <TableCell className="text-center">2-3 weeks</TableCell>
                  <TableCell className="text-center">1-3 weeks</TableCell>
                  <TableCell className="text-center">1-4 weeks</TableCell>
                  <TableCell className="text-center">2-3 weeks</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Customer Rating</TableCell>
                  <TableCell className="text-center">4.8/5 ⭐</TableCell>
                  <TableCell className="text-center">4.7/5 ⭐</TableCell>
                  <TableCell className="text-center">4.8/5 ⭐</TableCell>
                  <TableCell className="text-center">4.8/5 ⭐</TableCell>
                </TableRow>
                {/* <TableRow>
                  <TableCell className="font-semibold">Price</TableCell>
                  <TableCell className="text-center">$49.95</TableCell>
                  <TableCell className="text-center">$39.95</TableCell>
                  <TableCell className="text-center">$59.95</TableCell>
                  <TableCell className="text-center">$49.95</TableCell>
                </TableRow> */}
                <TableRow>
                  <TableCell className="font-semibold">Money Back Guarantee</TableCell>
                  <TableCell className="text-center">60 Days</TableCell>
                  <TableCell className="text-center">60 Days</TableCell>
                  <TableCell className="text-center">60 Days</TableCell>
                  <TableCell className="text-center">60 Days</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Which Product is Right for You */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Which Product is Right for You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect supplement based on your specific health goals and needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Choose ProDentim if you:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Want healthier teeth and gums</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Struggle with bad breath</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Have sensitive gums</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Want to improve oral hygiene</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Choose KeySlim Drops if you:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Want to lose weight naturally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Struggle with appetite control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Need a metabolism boost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Prefer liquid supplements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Choose PrimeBiome if you:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Want radiant, healthy skin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Have digestive issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Want to improve gut health</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Believe in the gut-skin connection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Choose FemiPro if you:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Are a woman with bladder concerns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Have urinary tract issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Want natural women's health support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Need pelvic floor support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Find Your Perfect Health Solution
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Compare our products and choose the supplement that best fits your health goals. 
            All products come with our 60-day money-back guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
            >
              Shop All Products
            </Button>
            <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-blue-600">
              Read Customer Reviews
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span>60-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 
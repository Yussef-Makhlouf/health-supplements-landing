import Image from "next/image"
import Link from "next/link"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TestimonialCard from "@/components/testimonial-card"
import ProductFeature from "@/components/product-feature"
import CountdownTimer from "@/components/countdown-timer"
import ProductComparisonMobile from "@/components/product-comparison-mobile"
import LuxuryHeader from "@/components/luxury-header"
import HeroSection from "@/components/hero-section"
import ProductDetailsCard from "@/components/product-details-card"
import SpecialOffer from "@/components/special-offer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <LuxuryHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        <SpecialOffer />

        {/* ProDentim Feature Section */}
        <section id="prodentim" className="w-full py-16 md:py-24 lg:py-32 border-t border-gray-100 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-3 py-1.5">
                TRUSTED BY THOUSANDS
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent">
                Why ProDentim is the Ultimate Oral Health Solution
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                ProDentim is a revolutionary oral probiotic supplement specially designed to support dental health with
                powerful, scientifically-backed ingredients that promote a healthy oral microbiome.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <ProductFeature
                icon="tooth"
                title="Improved Gum Health"
                description="ProDentim's specialized probiotic blend supports healthy gums and prevents inflammation by balancing beneficial bacteria."
              />
              <ProductFeature
                icon="smile"
                title="Fresher Breath"
                description="Combat bad breath at its source with beneficial bacteria that restore oral microbiome balance for long-lasting freshness."
              />
              <ProductFeature
                icon="shield"
                title="Stronger Enamel"
                description="Our unique formulation helps strengthen tooth enamel for better protection against decay and sensitivity."
              />
              <ProductFeature
                icon="award"
                title="3.5 Billion CFUs"
                description="Each dose contains a powerful 3.5 billion colony-forming units of beneficial probiotic strains for maximum effectiveness."
              />
              <ProductFeature
                icon="leaf"
                title="Natural Ingredients"
                description="Features Lactobacillus paracasei, B.lactis BL-04, inulin, and malic acid for comprehensive oral care without harsh chemicals."
              />
              <ProductFeature
                icon="thumbs-up"
                title="Easy Daily Use"
                description="Simply take one tablet daily for ongoing protection and support for your oral health. No complicated routines required."
              />
            </div>

            <div className="mt-20 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl italic text-gray-700">
                  "ProDentim changed my oral health completely! My teeth feel stronger, my gums are healthier, and my
                  breath is fresher. I've never been more confident about my smile. My dentist was amazed at the
                  improvement!"
                </blockquote>
                <p className="font-semibold text-lg">— Theo F., Chicago</p>
                <Button
                  size="lg"
                  className="mt-4 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="https://us-prodintim.com/">Get ProDentim Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Other Products Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none px-3 py-1.5">
                PREMIUM SUPPLEMENTS
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-green-700 via-green-600 to-blue-600 bg-clip-text text-transparent">
                Explore Our Premium Supplements
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Discover our carefully formulated supplements designed to support your overall wellness journey with
                premium, science-backed ingredients.
              </p>
            </div>

            <div className="grid gap-8 mt-16">
              <ProductDetailsCard
                name="PrimeBiome  "
                tagline="Skin & Gut Health"
                description="Support radiant skin and digestive health with our specialized formula containing B. Coagulans, Lion's Mane, and other natural botanicals that work synergistically to enhance your natural beauty from within."
                benefits={[
                  "Promotes radiant, youthful skin",
                  "Supports gut microbiome balance",
                  "Reduces inflammation and redness",
                  "Enhances nutrient absorption",
                  "Improves skin elasticity and hydration",
                ]}
                ingredients={[
                  "B. Coagulans (5 Billion CFU)",
                  "Lion's Mane Mushroom Extract",
                  "Marine Collagen Peptides",
                  "Hyaluronic Acid",
                  "Vitamins C, E & Zinc",
                ]}
                color="green"
                imagePath="/placeholder.svg?height=300&width=200"
                learnMoreLink="#"
              />

              <ProductDetailsCard
                name="FemiPro"
                tagline="Bladder Health"
                description="Improve bladder control and urinary tract health with our proprietary blend of herbal extracts designed specifically for women's wellness, providing comfort and confidence throughout your day."
                benefits={[
                  "Improves bladder control and function",
                  "Supports urinary tract health",
                  "Reduces discomfort and urgency",
                  "Promotes overall pelvic floor health",
                  "Provides long-lasting comfort",
                ]}
                ingredients={[
                  "Cranberry Extract (36:1 concentrate)",
                  "D-Mannose (2000mg)",
                  "Hibiscus Extract",
                  "Dandelion Root",
                  "Marshmallow Root & Pumpkin Seed",
                ]}
                color="blue"
                imagePath="/placeholder.svg?height=300&width=200"
                learnMoreLink="#"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 border-t border-gray-100 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent">
                Why Choose Our Supplements?
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Our premium supplements are crafted with care using the highest quality ingredients to deliver
                exceptional results for your health and wellness journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <Card className="bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                    <Check className="h-7 w-7 text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Science-Backed Formulas</h3>
                  <p className="text-muted-foreground">
                    All our formulations are based on scientific research and developed by a team of health experts and
                    nutritionists.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <Check className="h-7 w-7 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Premium Ingredients</h3>
                  <p className="text-muted-foreground">
                    We source only the highest quality, purest ingredients that meet our strict standards for potency
                    and purity.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                    <Check className="h-7 w-7 text-purple-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">FDA-Registered Facilities</h3>
                  <p className="text-muted-foreground">
                    All our supplements are manufactured in FDA-registered facilities following strict Good
                    Manufacturing Practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                    <Check className="h-7 w-7 text-amber-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Third-Party Tested</h3>
                  <p className="text-muted-foreground">
                    Every batch undergoes rigorous third-party testing to ensure purity, potency, and safety for your
                    peace of mind.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                    <Check className="h-7 w-7 text-rose-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">60-Day Guarantee</h3>
                  <p className="text-muted-foreground">
                    Our 60-day money-back guarantee ensures you can try our products risk-free and experience the
                    benefits yourself.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-sky-100 flex items-center justify-center mb-6">
                    <Check className="h-7 w-7 text-sky-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Expert Support</h3>
                  <p className="text-muted-foreground">
                    Our dedicated team of health experts is available to answer your questions and provide personalized
                    guidance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-green-50 border-t border-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-3 py-1.5">
                PRODUCT COMPARISON
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent">
                Compare Our Premium Supplements
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Find the perfect supplement to support your specific health needs with our easy-to-read comparison
                chart.
              </p>
            </div>

            {/* Mobile Comparison (Tabs) */}
            <ProductComparisonMobile />

            {/* Desktop Comparison (Table) */}
            <div className="hidden md:block mt-16 overflow-x-auto rounded-xl shadow-xl">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr>
                    <th className="p-6 text-left bg-gray-50 border-b"></th>
                    <th className="p-6 text-center bg-blue-50 border-b">
                      <div className="flex flex-col items-center">
                        <div className="relative h-20 w-20 mb-3">
                          <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt="ProDentim bottle"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="font-bold text-primary text-xl">ProDentim</span>
                        <span className="text-sm text-muted-foreground">Oral Probiotic</span>
                      </div>
                    </th>
                    <th className="p-6 text-center bg-green-50 border-b">
                      <div className="flex flex-col items-center">
                        <div className="relative h-20 w-20 mb-3">
                          <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt="PrimeBiome   bottle"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="font-bold text-green-700 text-xl">PrimeBiome </span>
                        <span className="text-sm text-muted-foreground">Skin & Gut Health</span>
                      </div>
                    </th>
                    <th className="p-6 text-center bg-blue-50 border-b">
                      <div className="flex flex-col items-center">
                        <div className="relative h-20 w-20 mb-3">
                          <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt="FemiPro bottle"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="font-bold text-blue-700 text-xl">FemiPro</span>
                        <span className="text-sm text-muted-foreground">Bladder Health</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-6 font-medium border-b bg-gray-50">Primary Benefits</td>
                    <td className="p-6 text-center border-b">
                      <ul className="space-y-2">
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span>Improves gum health</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span>Freshens breath</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span>Strengthens tooth enamel</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span>Reduces plaque formation</span>
                        </li>
                      </ul>
                    </td>
                    <td className="p-6 text-center border-b">
                      <ul className="space-y-2">
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-green-600 mr-2" />
                          <span>Promotes radiant skin</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-green-600 mr-2" />
                          <span>Supports gut health</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-green-600 mr-2" />
                          <span>Reduces inflammation</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-green-600 mr-2" />
                          <span>Enhances nutrient absorption</span>
                        </li>
                      </ul>
                    </td>
                    <td className="p-6 text-center border-b">
                      <ul className="space-y-2">
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Improves bladder control</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Supports urinary tract health</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Reduces discomfort</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Promotes overall comfort</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium border-b bg-gray-50">Key Ingredients</td>
                    <td className="p-6 text-center border-b">
                      <ul className="space-y-2">
                        <li>Lactobacillus Paracasei</li>
                        <li>Lactobacillus Reuteri</li>
                        <li>B.lactis BL-04</li>
                        <li>Inulin</li>
                        <li>Malic Acid</li>
                      </ul>
                    </td>
                    <td className="p-6 text-center border-b">
                      <ul className="space-y-2">
                        <li>B. Coagulans</li>
                        <li>Lion's Mane Mushroom</li>
                        <li>Collagen Peptides</li>
                        <li>Hyaluronic Acid</li>
                        <li>Vitamin C & E</li>
                      </ul>
                    </td>
                    <td className="p-6 text-center border-b">
                      <ul className="space-y-2">
                        <li>Cranberry Extract</li>
                        <li>D-Mannose</li>
                        <li>Hibiscus Extract</li>
                        <li>Dandelion Root</li>
                        <li>Marshmallow Root</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium border-b bg-gray-50">Recommended Usage</td>
                    <td className="p-6 text-center border-b">1 tablet daily, preferably after brushing teeth</td>
                    <td className="p-6 text-center border-b">2 capsules daily with food</td>
                    <td className="p-6 text-center border-b">1-2 capsules daily with water</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium border-b bg-gray-50">Probiotic Count</td>
                    <td className="p-6 text-center border-b">3.5 Billion CFU</td>
                    <td className="p-6 text-center border-b">5 Billion CFU</td>
                    <td className="p-6 text-center border-b">Not applicable</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium border-b bg-gray-50">Suitable For</td>
                    <td className="p-6 text-center border-b">Adults concerned about oral health</td>
                    <td className="p-6 text-center border-b">Adults seeking skin and digestive benefits</td>
                    <td className="p-6 text-center border-b">Women concerned about bladder health</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium border-b bg-gray-50">Results Timeline</td>
                    <td className="p-6 text-center border-b">2-4 weeks for noticeable results</td>
                    <td className="p-6 text-center border-b">4-6 weeks for optimal results</td>
                    <td className="p-6 text-center border-b">1-2 weeks for initial comfort</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium bg-gray-50">Price Point</td>
                    <td className="p-6 text-center">
                      <Badge className="bg-blue-100 text-blue-700 px-3 py-1">Premium</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge className="bg-green-100 text-green-700 px-3 py-1">Premium</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge className="bg-blue-100 text-blue-700 px-3 py-1">Premium</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="https://us-prodintim.com/">Shop Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-3 py-1.5">
                SUCCESS STORIES
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent">
                Hear from Our Happy Customers
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Real stories from real people who have experienced the transformative benefits of our premium
                supplements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <TestimonialCard
                quote="Since using ProDentim, my gums feel healthier, and my smile is brighter! My dentist noticed the difference at my last checkup and was amazed by the improvement."
                author="Sarah M., New York"
                rating={5}
                product="ProDentim"
              />
              <TestimonialCard
                quote="PrimeBiome   has transformed my skin. After just one month, my complexion is clearer and more radiant than it's been in years. I've received so many compliments!"
                author="Michael K., Los Angeles"
                rating={5}
                product="PrimeBiome  "
              />
              <TestimonialCard
                quote="FemiPro has been a game-changer for my bladder health. I feel more comfortable and confident throughout the day. I can finally enjoy activities without worry."
                author="Jennifer L., Chicago"
                rating={5}
                product="FemiPro"
              />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/20 border-none px-3 py-1.5">
                SPECIAL OFFER
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent">
                Start Your Health Journey Today!
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Join thousands of satisfied customers with ProDentim and our premium supplements. Limited-time offer
                available now!
              </p>

              <div className="w-full max-w-md mt-8">
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4 text-center">Limited-Time Offer</h3>
                  <div className="mb-6">
                    <CountdownTimer hours={23} minutes={59} seconds={59} />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <p className="font-medium text-center"> Buy 6 Bottles, Get 2 FREE  E-Books</p>
                      <p className="text-sm text-muted-foreground text-center">Plus Free Shipping</p>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                      asChild
                    >
                      <Link href="https://us-prodintim.com/">Shop ProDentim Now</Link>
                    </Button>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <Button variant="outline" size="lg" asChild>
                        <Link href="#">PrimeBiome  </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <Link href="#">FemiPro</Link>
                      </Button>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm">5.0 (2,500+ reviews)</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                      <Badge variant="outline" className="bg-white flex items-center gap-1">
                        <Check className="h-3 w-3 text-green-600" />
                        <span className="text-xs">Money-Back Guarantee</span>
                      </Badge>
                      <Badge variant="outline" className="bg-white flex items-center gap-1">
                        <Check className="h-3 w-3 text-green-600" />
                        <span className="text-xs">Secure Checkout</span>
                      </Badge>
                      <Badge variant="outline" className="bg-white flex items-center gap-1">
                        <Check className="h-3 w-3 text-green-600" />
                        <span className="text-xs">Fast Shipping</span>
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                ProDentim
              </h3>
              <p className="text-sm text-muted-foreground">
                Premium health supplements for oral health, skin care, and bladder wellness. Crafted with the highest
                quality ingredients for optimal results.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <p className="text-sm text-muted-foreground">Email: elite@beautyrealmart.com</p>
             
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                ProDentim
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                FemiPro
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                PrimeBiome 
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Legal</h3>
              <div className="grid grid-cols-1 gap-2">
                <Link href="https://beautyrealmart.com/privacy-policy/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="https://beautyrealmart.com/terms-of-use/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link href="https://beautyrealmart.com/refund_returns/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Refund Policy
                </Link>
                <p className="text-xs text-muted-foreground mt-4">
                  * These statements have not been evaluated by the FDA. These products are not intended to diagnose,
                  treat, cure, or prevent any disease. Consult a healthcare professional before use.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} ProDentim. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <img src="/placeholder.svg?height=30&width=50" alt="Payment Method" className="h-6" />
              <img src="/placeholder.svg?height=30&width=50" alt="Payment Method" className="h-6" />
              <img src="/placeholder.svg?height=30&width=50" alt="Payment Method" className="h-6" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

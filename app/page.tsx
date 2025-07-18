import Image from "next/image"
import Link from "next/link"
import { Check, Star, Award, Shield, Truck, RefreshCw, Heart, ArrowRight, Clock, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TestimonialCard from "@/components/testimonial-card"
import ProductFeature from "@/components/product-feature"
import CountdownTimer from "@/components/countdown-timer"
import ProductComparisonMobile from "@/components/product-comparison-mobile"
import HeroSection from "@/components/hero-section"
import ProductDetailsCard from "@/components/product-details-card"
import SpecialOffer from "@/components/special-offer"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Trust Indicators */}
        <section className="py-8 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center justify-center space-x-2 text-center">
                <Users className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-semibold text-sm">50,000+</div>
                  <div className="text-xs text-gray-600">Happy Customers</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 text-center">
                <Star className="h-5 w-5 text-yellow-500" />
                <div>
                  <div className="font-semibold text-sm">4.8/5</div>
                  <div className="text-xs text-gray-600">Average Rating</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 text-center">
                <Shield className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-semibold text-sm">60-Day</div>
                  <div className="text-xs text-gray-600">Money Back</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 text-center">
                <Truck className="h-5 w-5 text-purple-600" />
                <div>
                  <div className="font-semibold text-sm">Free</div>
                  <div className="text-xs text-gray-600">Shipping</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ProDentim Feature Section */}
        <section id="prodentim" className="w-full py-16 md:py-24 lg:py-32 border-t border-gray-100 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-3 py-1.5">
                #1 ORAL HEALTH SUPPLEMENT IN AMERICA
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent">
                Transform Your Oral Health with ProDentim
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Discover the revolutionary oral probiotic that's changing dental health across America. 
                With 3.5 billion CFUs of clinically-studied probiotics, ProDentim supports healthy teeth, 
                gums, and fresh breath naturally.
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

            {/* Visual Placeholder: Customer Before/After Photos */}
            <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Customer Results</h3>
                <p className="text-gray-600">See the transformation in oral health that thousands of Americans have experienced</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Image src="/prodentim_before.jpg" alt="Before ProDentim" width={100} height={100} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Before ProDentim</h4>
                  <p className="text-sm text-gray-600">Gum sensitivity, bad breath, weak enamel</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Image src="/prodentim_after.jpg" alt="After ProDentim" width={100} height={100} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">After ProDentim</h4>
                  <p className="text-sm text-gray-600">Healthy gums, fresh breath, strong teeth</p>
                </div>
              </div>
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href="https://prodentim24.com/text.php#aff=lifestylemedicine623">
                      Get ProDentim Today - Save 50%
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/prodentim">Learn More About ProDentim</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Products Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none px-3 py-1.5">
                PREMIUM HEALTH SUPPLEMENTS
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-green-700 via-green-600 to-blue-600 bg-clip-text text-transparent">
                Complete Your Wellness Journey
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Discover our carefully formulated supplements designed to support your overall wellness journey with
                premium, science-backed ingredients that deliver real results.
              </p>
            </div>

            <div className="grid gap-8 mt-16">
              <ProductDetailsCard
                name="KeySlim Drops"
                tagline="Revolutionary Weight Loss & Metabolism"
                description="Experience the breakthrough liquid weight loss supplement with 24 powerful natural ingredients. Our revolutionary 3-stage formula targets appetite control, metabolic acceleration, and sustainable weight management for real results in 1-3 weeks."
                benefits={[
                  "Controls appetite and hunger naturally with advanced ingredients",
                  "Accelerates metabolism and fat burning through thermogenesis",
                  "Supports long-term weight management and maintenance",
                  "Boosts energy levels naturally without jitters",
                  "Non-GMO, vegan, and gluten-free for everyone",
                ]}
                ingredients={[
                  "L-Ornithine & Chromium Picolinate for appetite control",
                  "Green Tea Leaf Extract for metabolism boost",
                  "Maca Root & Grapefruit Extract for energy",
                  "Guarana & Raspberry Ketones for fat burning",
                  "African Mango & Forskolin for sustainable results",
                ]}
                color="orange"
                imagePath="/keyslim-drops1.png"
                learnMoreLink="https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623"
              />

              <ProductDetailsCard
                name="PrimeBiome"
                tagline="Gut Health & Radiant Skin Connection"
                description="Unlock the powerful gut-skin connection with our specialized formula containing B. Coagulans, Lion's Mane, and premium collagen peptides. Experience radiant skin and optimal digestive health from within."
                benefits={[
                  "Promotes radiant, youthful skin through gut-skin axis",
                  "Supports gut microbiome balance with 5 billion CFUs",
                  "Reduces inflammation and redness naturally",
                  "Enhances nutrient absorption for better health",
                  "Improves skin elasticity and hydration from within",
                ]}
                ingredients={[
                  "B. Coagulans (5 Billion CFU) for gut health",
                  "Lion's Mane Mushroom Extract for cognitive support",
                  "Marine Collagen Peptides for skin structure",
                  "Hyaluronic Acid for deep hydration",
                  "Vitamins C, E & Zinc for antioxidant protection",
                ]}
                color="green"
                imagePath="/primebiome.png"
                learnMoreLink="http://primebiome24.com/text.php#aff=lifestylemedicine623"
              />

              <ProductDetailsCard
                name="FemiPro"
                tagline="Complete Women's Health & Bladder Support"
                description="Specially formulated for women's unique health needs, FemiPro combines powerful herbal extracts to support bladder control, urinary tract health, and overall pelvic wellness for confidence and comfort."
                benefits={[
                  "Improves bladder control and function naturally",
                  "Supports urinary tract health with cranberry extract",
                  "Reduces discomfort and urgency with soothing herbs",
                  "Promotes overall pelvic floor health and strength",
                  "Provides long-lasting comfort and confidence",
                ]}
                ingredients={[
                  "Cranberry Extract (36:1 concentrate) for urinary health",
                  "D-Mannose for natural urinary tract support",
                  "Hibiscus Extract for soothing relief",
                  "Dandelion Root for natural diuretic properties",
                  "Marshmallow Root & Pumpkin Seed for comfort",
                ]}
                color="purple"
                imagePath="/femipro.png"
                learnMoreLink="http://femipro24.com/text.php#aff=lifestylemedicine623"
              />
            </div>
          </div>
        </section>

        <SpecialOffer />
        
        {/* KeySlim Drops Featured Section */}
        <section className="w-full py-12 md:py-20 lg:py-32 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-orange-100 rounded-full opacity-30 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 md:w-80 md:h-80 bg-amber-100 rounded-full opacity-30 blur-3xl -z-10"></div>
          
          <div className="container px-4 md:px-6 relative">
            <div className="text-center mb-8 md:mb-16">
              <Badge className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 border-none px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg font-medium shadow-lg mb-6 md:mb-8 animate-pulse">
                🔥 BREAKTHROUGH WEIGHT LOSS TECHNOLOGY
              </Badge>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 md:mb-8">
                <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  KeySlim Drops
                </span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
                The world's first revolutionary liquid weight loss supplement featuring 
                <span className="font-bold text-orange-600"> 24 powerful natural ingredients</span> 
                in a breakthrough 3-stage formula
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-20">
              {/* Product Showcase */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/50 to-amber-200/50 rounded-full blur-3xl scale-110 opacity-60"></div>
                <div className="relative h-[300px] w-[240px] sm:h-[400px] sm:w-[320px] md:h-[500px] md:w-[400px] lg:h-[600px] lg:w-[480px] mx-auto">
                  <Image
                      src="/keyslim-drops1.png"
                    alt="KeySlim Drops Revolutionary Weight Loss Formula"
                    fill
                    className="object-contain drop-shadow-2xl animate-float"
                    priority
                  />
                  
                  {/* Floating Achievement Badges */}
                  <div className="absolute -top-3 -left-3 md:-top-6 md:-left-6 bg-white p-2 md:p-4 rounded-xl shadow-2xl rotate-6 border-2 border-orange-200">
                    <div className="text-center">
                      <p className="font-bold text-orange-600 text-sm md:text-lg">24</p>
                      <p className="text-xs md:text-sm font-medium">Natural Ingredients</p>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white p-2 md:p-4 rounded-xl shadow-2xl -rotate-6">
                    <div className="text-center">
                      <p className="font-bold text-sm md:text-lg">Results in</p>
                      <p className="text-lg md:text-2xl font-bold">1-3 Weeks</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 -right-5 md:-right-10 bg-white p-2 md:p-3 rounded-full shadow-2xl">
                    <Check className="h-5 w-5 md:h-8 md:w-8 text-green-500" />
                  </div>
                </div>
              </div>

              {/* Features & Benefits */}
              <div className="space-y-6 lg:space-y-10 order-1 lg:order-2">
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-8 text-center lg:text-left">Revolutionary 3-Stage System</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-2">Appetite Control</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Advanced ingredients like African Mango and Chromium Picolinate work together to naturally 
                          suppress appetite and reduce cravings, helping you consume fewer calories without feeling deprived.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-2">Metabolism Boost</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Green Tea Extract, Guarana, and Raspberry Ketones accelerate your metabolism and increase 
                          fat burning, turning your body into a more efficient calorie-burning machine.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-2">Long-term Success</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Forskolin and Maca Root support sustainable weight management by improving body composition 
                          and helping maintain your results long after you reach your goal weight.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Placeholder: How It Works Infographic */}
                {/* <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-lg text-gray-900 mb-4 text-center">How KeySlim Drops Works</h4>
                  <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Infographic: 3-Stage Weight Loss Process</span>
                  </div>
                </div> */}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-lg"
                    asChild
                  >
                    <Link href="https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623">
                      Get KeySlim Drops Now - Save 60%
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/keyslim">Learn More About KeySlim</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Success Stories */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real Success Stories from Real Americans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have transformed their health and lives 
                with our premium supplements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "I lost 25 pounds in just 8 weeks with KeySlim Drops! The appetite control 
                    is incredible - I no longer crave junk food, and my energy levels are through 
                    the roof. This product really works!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold">JL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Jennifer L.</p>
                      <p className="text-sm text-gray-500">Los Angeles, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "ProDentim changed my oral health completely! My teeth feel stronger, 
                    my gums are healthier, and my breath is fresher. I've never been more 
                    confident about my smile."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">TF</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Theo F.</p>
                      <p className="text-sm text-gray-500">Chicago, IL</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "PrimeBiome has completely transformed my skin! My complexion is clearer, 
                    more radiant, and I've noticed a significant improvement in my digestion. 
                    The gut-skin connection is real!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">AL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Amanda L.</p>
                      <p className="text-sm text-gray-500">San Francisco, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="/testimonials">
                  Read More Success Stories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose  BEAUTY REALM */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose  BEAUTY REALM Supplements?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to providing the highest quality health supplements backed by science 
                and trusted by thousands of Americans.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Quality</h3>
                <p className="text-gray-600">
                  Every ingredient is carefully selected and tested to ensure the highest standards 
                  of purity and effectiveness.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Science-Backed</h3>
                <p className="text-gray-600">
                  Our formulas are developed based on clinical research and proven to deliver 
                  real, measurable results.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Focused</h3>
                <p className="text-gray-600">
                  Your success is our success. We're here to support your health journey 
                  every step of the way.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
                <p className="text-gray-600">
                  Thousands of customers have experienced life-changing results with our 
                  premium supplements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-green-50 border-t border-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-">
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
                            src="/prodentim.png"
                            alt="ProDentim bottle"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <Link href='https://prodentim24.com/text.php#aff=lifestylemedicine623'>
                        <span className="font-bold text-primary text-xl">ProDentim</span>
                        </Link>
                        <span className="text-sm text-muted-foreground">Oral Probiotic</span>
                      </div>
                    </th>
                    <th className="p-6 text-center bg-green-50 border-b">
                      <div className="flex flex-col items-center">
                        <div className="relative h-20 w-20 mb-3">
                          <Image
                            src="/primebiome.png"
                            alt="PrimeBiome bottle"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <Link href="http://primebiome24.com/text.php#aff=lifestylemedicine623">
                        <span className="font-bold text-green-700 text-xl">PrimeBiome </span>
                        </Link>
                        
                        <span className="text-sm text-muted-foreground">Skin & Gut Health</span>
                      </div>
                    </th>
                    <th className="p-6 text-center bg-orange-50 border-b">
                      <div className="flex flex-col items-center">
                        <div className="relative h-20 w-20 mb-3">
                          <Image
                              src="/keyslim-drops1.png"
                            alt="KeySlim Drops bottle"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <Link href="https://getkeyslimdrops.cc/vsl1/">
                        <span className="font-bold text-orange-700 text-xl">KeySlim Drops</span>
                        </Link>
                        <span className="text-sm text-muted-foreground">Weight Loss</span>
                      </div>
                    </th>
                    <th className="p-6 text-center bg-purple-50 border-b">
                      <div className="flex flex-col items-center">
                        <div className="relative h-20 w-20 mb-3">
                          <Image
                            src="/femipro.png"
                            alt="FemiPro bottle"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <Link href="http://femipro24.com/text.php#aff=lifestylemedicine623">
                        <span className="font-bold text-purple-700 text-xl">FemiPro</span>
                        </Link>
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
                          <Check className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Improves gum health</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Freshens breath</span>
                        </li>
                        <li className="flex items-center justify-center">
                            <Check className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Strengthens tooth enamel</span>
                        </li>
                        <li className="flex items-center justify-center">
                            <Check className="h-4 w-4 text-blue-600 mr-2" />
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
                          <Check className="h-4 w-4 text-orange-600 mr-2" />
                          <span>Controls appetite naturally</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-orange-600 mr-2" />
                          <span>Accelerates metabolism</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-orange-600 mr-2" />
                          <span>Burns fat day & night</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-orange-600 mr-2" />
                          <span>Boosts energy levels</span>
                        </li>
                      </ul>
                    </td>
                    <td className="p-6 text-center border-b">
                      <ul className="space-y-2">
                        <li className="flex items-center justify-center">
                            <Check className="h-4 w-4 text-purple-600 mr-2" />
                          <span>Improves bladder control</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-purple-600 mr-2" />
                          <span>Supports urinary tract health</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-purple-600 mr-2" />
                          <span>Reduces discomfort</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-purple-600 mr-2" />
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
                        <li>L-Ornithine & Chromium</li>
                        <li>Green Tea Extract</li>
                        <li>Maca Root & Grapefruit</li>
                        <li>Guarana & Forskolin</li>
                        <li>African Mango Extract</li>
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
                    <td className="p-6 text-center border-b">1-2 drops daily, preferably before meals</td>
                    <td className="p-6 text-center border-b">1-2 capsules daily with water</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium border-b bg-gray-50">Probiotic Count</td>
                    <td className="p-6 text-center border-b">3.5 Billion CFU</td>
                    <td className="p-6 text-center border-b">5 Billion CFU</td>
                    <td className="p-6 text-center border-b">24 Natural Ingredients</td>
                    <td className="p-6 text-center border-b">Not applicable</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium border-b bg-gray-50">Suitable For</td>
                    <td className="p-6 text-center border-b">Adults concerned about oral health</td>
                    <td className="p-6 text-center border-b">Adults seeking skin and digestive benefits</td>
                    <td className="p-6 text-center border-b">Adults looking for weight management</td>
                    <td className="p-6 text-center border-b">Women concerned about bladder health</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium border-b bg-gray-50">Results Timeline</td>
                    <td className="p-6 text-center border-b">2-4 weeks for noticeable results</td>
                    <td className="p-6 text-center border-b">4-6 weeks for optimal results</td>
                    <td className="p-6 text-center border-b">1-3 weeks for initial results</td>
                    <td className="p-6 text-center border-b">1-2 weeks for initial comfort</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium bg-gray-50">quality</td>
                    <td className="p-6 text-center">
                      <Badge className="bg-blue-100 text-blue-700 px-3 py-1">Premium</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge className="bg-green-100 text-green-700 px-3 py-1">Premium</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge className="bg-orange-100 text-orange-700 px-3 py-1">Premium</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge className="bg-purple-100 text-purple-700 px-3 py-1">Premium</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium bg-gray-50">Availability</td>
                    <td className="p-6 text-center">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                        <Link href="https://prodentim24.com/text.php#aff=lifestylemedicine623">Shop Now</Link>
                      </Button>
                    </td>
                    <td className="p-6 text-center">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                        <Link href="https://primebiome24.com/text.php#aff=lifestylemedicine623">Shop Now</Link>
                      </Button>
                    </td>
                    <td className="p-6 text-center">
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                        <Link href="https://getkeyslimdrops.cc/vsl1/#aff=lifestylemedicine623">Shop Now</Link>
                      </Button>
                    </td>
                    <td className="p-6 text-center">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                        <Link href="https://femipro24.com/text.php#aff=lifestylemedicine623">Shop Now</Link>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <div className="flex justify-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="https://prodentim24.com/text.php#aff=lifestylemedicine623">Shop Now</Link>
              </Button>
            </div> */}
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

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <TestimonialCard
                quote="Since using ProDentim, my gums feel healthier, and my smile is brighter! My dentist noticed the difference at my last checkup and was amazed by the improvement."
                author="Sarah M., New York"
                rating={5}
                product="ProDentim"
              />
              <TestimonialCard
                quote="PrimeBiome has transformed my skin. After just one month, my complexion is clearer and more radiant than it's been in years. I've received so many compliments!"
                author="Michael K., Los Angeles"
                rating={5}
                product="PrimeBiome"
              />
              <TestimonialCard
                quote="KeySlim Drops changed my life! I lost 25 pounds in just 3 weeks without strict dieting. My energy levels are through the roof and I feel amazing every day!"
                author="David R., Miami"
                rating={5}
                product="KeySlim Drops"
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
        <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Health Transformation Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of Americans who have already improved their health and lives 
              with our premium supplements. Choose the product that fits your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
                asChild
              >
                <Link href="/compare">Compare All Products</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-blue-600">
                <Link href="/testimonials">Read Customer Reviews</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-blue-100">
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
      </main>

      <Footer />
    </div>
  )
}

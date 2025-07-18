import Image from "next/image"
import Link from "next/link"
import { Check, Star, Shield, Award, Leaf, Clock, ArrowRight, Users, TrendingUp, Heart, Zap, Target, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function KeySlimPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 border-none px-4 py-2">
                  🔥 BREAKTHROUGH WEIGHT LOSS TECHNOLOGY
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                    KeySlim Drops Review 2025
                  </span>
                  <br />
                  <span className="text-gray-900">Revolutionary Liquid Weight Loss Formula</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience the world's first revolutionary liquid weight loss supplement featuring 
                  24 powerful natural ingredients in a breakthrough 3-stage formula. Join thousands 
                  of Americans who have achieved sustainable weight loss in just 1-3 weeks.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">24 Natural Ingredients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Results in 1-3 Weeks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">60-Day Money Back</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-lg"
                    asChild
                  >
                    <Link href="https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623">
                      Get KeySlim Drops Today - Save 60%
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#reviews">Read Customer Reviews</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/50 to-amber-200/50 rounded-full blur-3xl scale-110 opacity-60"></div>
                <div className="relative">
                  <Image
                    src="/keyslim-drops1.png"
                    alt="KeySlim Drops Revolutionary Weight Loss Formula"
                    width={500}
                    height={500}
                    className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-8 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center justify-center space-x-2 text-center">
                <Users className="h-5 w-5 text-orange-600" />
                <div>
                  <div className="font-semibold text-sm">75,000+</div>
                  <div className="text-xs text-gray-600">Happy Customers</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 text-center">
                <Star className="h-5 w-5 text-yellow-500" />
                <div>
                  <div className="font-semibold text-sm">4.9/5</div>
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
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <div>
                  <div className="font-semibold text-sm">Proven</div>
                  <div className="text-xs text-gray-600">Results</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revolutionary 3-Stage System */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Revolutionary 3-Stage Weight Loss System
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                KeySlim Drops works through a scientifically-designed 3-stage process that targets 
                the root causes of weight gain for sustainable, long-lasting results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Stage 1: Appetite Control</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Advanced ingredients like African Mango and Chromium Picolinate work together to 
                    naturally suppress appetite and reduce cravings, helping you consume fewer calories 
                    without feeling deprived.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Stage 2: Metabolism Boost</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Green Tea Extract, Guarana, and Raspberry Ketones accelerate your metabolism and 
                    increase fat burning, turning your body into a more efficient calorie-burning machine.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Scale className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Stage 3: Long-term Success</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Forskolin and Maca Root support sustainable weight management by improving body 
                    composition and helping maintain your results long after you reach your goal weight.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Visual Placeholder: How It Works Infographic */}
            <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How KeySlim Drops Works</h3>
                <p className="text-gray-600">See the transformation in weight loss that thousands of Americans have experienced</p>
              </div>
              <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Infographic: 3-Stage Weight Loss Process</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why KeySlim Drops is the Ultimate Weight Loss Solution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Backed by science and trusted by thousands of Americans, KeySlim Drops delivers 
                comprehensive weight loss support through its unique liquid formula.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Controls Appetite Naturally</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Advanced ingredients work together to naturally suppress appetite and reduce 
                    cravings, helping you consume fewer calories without feeling deprived.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Accelerates Metabolism</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Powerful thermogenic ingredients boost your metabolism and increase fat burning, 
                    turning your body into a more efficient calorie-burning machine.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Scale className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Sustainable Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Supports long-term weight management by improving body composition and helping 
                    maintain your results long after you reach your goal weight.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Boosts Energy Levels</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Natural energy boosters help you stay active and motivated throughout your 
                    weight loss journey without the jitters of artificial stimulants.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">Natural Ingredients</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Non-GMO, vegan, and gluten-free formula with 24 carefully selected natural 
                    ingredients for everyone's dietary needs and preferences.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">Fast Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Most customers begin to see results within 1-3 weeks of consistent use, 
                    with continued improvements over time for lasting success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Ingredients */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful Natural Ingredients for Weight Loss
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each ingredient in KeySlim Drops is carefully selected for its proven benefits 
                in supporting weight loss and metabolism.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">L-Ornithine & Chromium Picolinate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Work together to naturally suppress appetite and reduce cravings, helping 
                    you consume fewer calories without feeling deprived.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Green Tea Leaf Extract</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Powerful antioxidant that boosts metabolism and increases fat burning through 
                    thermogenesis for enhanced weight loss results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Maca Root & Grapefruit Extract</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Natural energy boosters that help you stay active and motivated throughout 
                    your weight loss journey without artificial stimulants.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Scale className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Guarana & Raspberry Ketones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Accelerate fat burning and metabolism while providing natural energy to 
                    support your active lifestyle and weight loss goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">African Mango & Forskolin</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Support sustainable weight management by improving body composition and 
                    helping maintain your results long after reaching your goal weight.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">24 Natural Ingredients</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Each dose delivers a powerful blend of 24 carefully selected natural 
                    ingredients for maximum effectiveness and comprehensive weight loss support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section id="reviews" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Customers Say About KeySlim Drops
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of satisfied Americans who have achieved their weight loss goals with KeySlim Drops.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
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

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "After trying countless weight loss products, KeySlim Drops finally delivered 
                    the results I was looking for. My metabolism is faster, I have more energy, 
                    and the weight is staying off!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">MR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Michael R.</p>
                      <p className="text-sm text-gray-500">Austin, TX</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "The appetite control is amazing! I no longer have those late-night cravings, 
                    and my portion sizes have naturally decreased. I've lost 18 pounds in 6 weeks!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">AS</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Amanda S.</p>
                      <p className="text-sm text-gray-500">Seattle, WA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Visual Placeholder: Verified Buyer Testimonials */}
            <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Verified Buyer Testimonials</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Before Photo</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">Before KeySlim Drops</h4>
                  <p className="text-sm text-gray-600 text-center">Struggling with weight loss, low energy, cravings</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">After Photo</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">After KeySlim Drops</h4>
                  <p className="text-sm text-gray-600 text-center">Achieved weight loss goals, high energy, confidence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to the most common questions about KeySlim Drops and weight loss.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    How long does it take to see results with KeySlim Drops?
                  </AccordionTrigger>
                  <AccordionContent>
                    Most customers begin to notice improvements in their weight loss journey within 1-3 weeks 
                    of consistent use. However, individual results may vary depending on your starting weight, 
                    diet, and exercise routine.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Is KeySlim Drops safe to use daily?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, KeySlim Drops is completely safe for daily use. It contains only natural ingredients 
                    and is designed for long-term use to support sustainable weight loss and maintenance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Can KeySlim Drops help with appetite control?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely! KeySlim Drops' formula specifically targets appetite control through ingredients 
                    like African Mango and Chromium Picolinate, helping you naturally reduce cravings and 
                    consume fewer calories.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    What makes KeySlim Drops different from other weight loss products?
                  </AccordionTrigger>
                  <AccordionContent>
                    KeySlim Drops is unique because it uses a liquid formula with 24 natural ingredients 
                    in a 3-stage system that targets appetite control, metabolism boost, and sustainable 
                    results, rather than just masking symptoms.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Is there a money-back guarantee?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer a 60-day money-back guarantee on all KeySlim Drops orders. 
                    If you're not completely satisfied with your results, simply return the unused 
                    portion within 60 days for a full refund, no questions asked.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Your Health Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our other premium supplements designed to support your overall wellness.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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
                  <p className="text-sm text-gray-600">Oral Health & Fresh Breath</p>
                </CardHeader>
                <CardContent className="text-center flex-grow flex flex-col">
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    Revolutionary oral probiotic with 3.5 billion CFUs for healthy teeth and gums.
                  </p>
                  <Button size="sm" asChild>
                    <Link href="/prodentim">Learn More</Link>
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
                </CardHeader>
                <CardContent className="text-center flex-grow flex flex-col">
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    Gut-skin connection supplement with 5 billion CFUs and collagen peptides.
                  </p>
                  <Button size="sm" asChild>
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
                </CardHeader>
                <CardContent className="text-center flex-grow flex flex-col">
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    Comprehensive women's health formula for bladder control and urinary wellness.
                  </p>
                  <Button size="sm" asChild>
                    <Link href="/femipro">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Weight Loss Journey Today
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of Americans who have already achieved their weight loss goals with KeySlim Drops. 
              Start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg"
                asChild
              >
                <Link href="https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623">
                  Get KeySlim Drops Now - Save 60%
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-orange-600">
                <Link href="/compare">Compare All Products</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-orange-100">
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
                <span>Natural Ingredients</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 
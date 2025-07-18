import Image from "next/image"
import Link from "next/link"
import { Check, Star, Shield, Award, Leaf, Clock, ArrowRight, Users, TrendingUp, Heart, Flower, Zap, Target, Gift, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FemiProPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 py-20 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-none px-4 py-2">
                  🌸 COMPLETE WOMEN'S HEALTH SUPPORT
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    FemiPro Review 2025
                  </span>
                  <br />
                  <span className="text-gray-900">Women's Health & Bladder Support</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Specially formulated for women's unique health needs, FemiPro combines powerful 
                  herbal extracts to support bladder control, urinary tract health, and overall 
                  pelvic wellness for confidence and comfort.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Natural Herbal Formula</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Bladder Control Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">60-Day Money Back</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg"
                    asChild
                  >
                    <Link href="http://femipro24.com/text.php#aff=lifestylemedicine623">
                      Get FemiPro Today - Save 50%
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#reviews">Read Customer Reviews</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full blur-3xl scale-110 opacity-60"></div>
                <div className="relative">
                  <Image
                    src="/femipro.png"
                    alt="FemiPro Women's Health & Bladder Support"
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

        {/* Special Offer Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-none px-4 py-2 text-sm animate-pulse mb-4">
                <Gift className="h-4 w-4 mr-1" />
                LIMITED TIME OFFER
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Special FemiPro Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Order 6 bottles of FemiPro and receive 2 exclusive E-Books absolutely FREE!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-purple-200 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gift className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">What You Get</h3>
                    <div className="space-y-4 text-left">
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="font-medium">6 Bottles of FemiPro</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="font-medium">"Women's Health Guide" E-Book</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="font-medium">"Natural Wellness Secrets" E-Book</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="font-medium">Free Shipping</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="font-medium">60-Day Money Back Guarantee</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Book className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Free E-Books Include</h3>
                    <div className="space-y-4 text-left">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Women's Health Guide</h4>
                        <p className="text-sm text-purple-700">
                          Comprehensive guide covering women's unique health needs, bladder control 
                          techniques, and natural approaches to pelvic wellness and confidence.
                        </p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Natural Wellness Secrets</h4>
                        <p className="text-sm text-purple-700">
                          Ancient and modern natural remedies for women's health, including herbal 
                          treatments, lifestyle tips, and holistic wellness approaches.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                        asChild
                      >
                        <Link href="http://femipro24.com/text.php#aff=lifestylemedicine623">
                          Get FemiPro + 2 Free E-Books
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-8 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center justify-center space-x-2 text-center">
                <Users className="h-5 w-5 text-purple-600" />
                <div>
                  <div className="font-semibold text-sm">25,000+</div>
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

        {/* Women's Health Support */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Women's Health Support System
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                FemiPro works through a scientifically-designed approach that targets women's 
                unique health needs for comprehensive wellness and comfort.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Stage 1: Bladder Control</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Natural ingredients work together to improve bladder function and control, 
                    helping to reduce urgency and frequency for better comfort and confidence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Stage 2: Urinary Health</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Cranberry extract and D-Mannose support urinary tract health and help 
                    maintain a healthy urinary system for long-term wellness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Stage 3: Overall Wellness</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Comprehensive support for pelvic floor health and overall women's wellness, 
                    promoting confidence and quality of life.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Visual Placeholder: How It Works Infographic */}
            {/* <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How FemiPro Works</h3>
                <p className="text-gray-600">See the transformation in women's health that thousands of Americans have experienced</p>
              </div>
              <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Infographic: Women's Health Support Process</span>
              </div>
            </div> */}
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why FemiPro is the Ultimate Women's Health Solution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Backed by science and trusted by thousands of American women, FemiPro delivers 
                comprehensive women's health support through its unique herbal formula.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Improves Bladder Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Natural ingredients work together to improve bladder function and control, 
                    helping to reduce urgency and frequency for better comfort.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl">Supports Urinary Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Cranberry extract and D-Mannose support urinary tract health and help 
                    maintain a healthy urinary system for long-term wellness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle className="text-xl">Reduces Discomfort</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Soothing herbal extracts help reduce discomfort and urgency, providing 
                    natural relief and improved quality of life.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Flower className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">Promotes Pelvic Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Comprehensive support for pelvic floor health and overall women's wellness, 
                    promoting confidence and comfort.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Natural Ingredients</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Carefully selected herbal extracts and natural ingredients provide gentle, 
                    effective support without harsh chemicals or artificial additives.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Long-lasting Comfort</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Provides long-lasting comfort and confidence through sustained support 
                    for women's unique health needs.
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
                Powerful Natural Ingredients for Women's Health
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each ingredient in FemiPro is carefully selected for its proven benefits 
                in supporting women's health and wellness.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Cranberry Extract (36:1)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Highly concentrated cranberry extract that supports urinary tract health 
                    and helps maintain a healthy urinary system.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-lg">D-Mannose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Natural sugar that supports urinary tract health and helps maintain 
                    a healthy urinary system for long-term wellness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle className="text-lg">Hibiscus Extract</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Soothing herbal extract that helps reduce discomfort and provides 
                    natural relief for urinary tract support.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Flower className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">Dandelion Root</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Natural diuretic that supports healthy fluid balance and helps maintain 
                    optimal urinary system function.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Marshmallow Root</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Soothing herb that provides comfort and support for urinary tract health 
                    and overall women's wellness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Pumpkin Seed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Natural ingredient that supports bladder health and provides additional 
                    comfort for women's unique health needs.
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
                What Our Customers Say About FemiPro
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of satisfied American women who have experienced improved health and comfort with FemiPro.
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
                    "FemiPro has been a lifesaver! My bladder control has improved dramatically, 
                    and I feel so much more confident. The natural ingredients give me peace of mind."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">SL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Sarah L.</p>
                      <p className="text-sm text-gray-500">Chicago, IL</p>
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
                    "After struggling with urinary issues for years, FemiPro has been a game-changer. 
                    My comfort and confidence have improved so much. Highly recommend!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 font-semibold">MJ</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Maria J.</p>
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
                    "The natural ingredients in FemiPro are amazing! I feel so much better, 
                    and my quality of life has improved dramatically. Thank you!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                      <span className="text-rose-600 font-semibold">AK</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Amanda K.</p>
                      <p className="text-sm text-gray-500">Seattle, WA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Visual: Skin Radiance After Hormonal Balance */}
            <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Skin Radiance After Hormonal Balance</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-100 h-100 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Image src="/femipro_before.jpg" alt="Before FemiPro" width={100} height={100} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">Before Using the Product</h4>
                  <p className="text-sm text-gray-600 text-center">Dull skin, fatigue, hormonal imbalance</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-100 h-100 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Image src="/femipro_after.jpg" alt="After FemiPro" width={100} height={100} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">After Using the Product</h4>
                  <p className="text-sm text-gray-600 text-center">Radiant skin, natural glow, improved hormonal balance</p>
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
                Get answers to the most common questions about FemiPro and women's health.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    How long does it take to see results with FemiPro?
                  </AccordionTrigger>
                  <AccordionContent>
                    Most customers begin to notice improvements in their bladder control and comfort 
                    within 2-4 weeks of consistent use. However, individual results may vary depending 
                    on your current health status and specific needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Is FemiPro safe to use daily?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, FemiPro is completely safe for daily use. It contains only natural herbal 
                    ingredients and is designed for long-term use to support women's health and wellness.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Can FemiPro help with bladder control?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely! FemiPro's formula specifically targets bladder control through natural 
                    ingredients that help improve bladder function and reduce urgency for better comfort.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    What makes FemiPro different from other women's health products?
                  </AccordionTrigger>
                  <AccordionContent>
                    FemiPro is unique because it combines bladder control support with urinary tract 
                    health and overall women's wellness, creating a comprehensive approach to women's 
                    health needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Is there a money-back guarantee?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer a 60-day money-back guarantee on all FemiPro orders. 
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
                    src="/keyslim-drops1.png"
                    alt="KeySlim Drops Weight Loss"
                    width={200}
                    height={200}
                    className="w-full h-auto max-w-[120px] mx-auto mb-4"
                  />
                  <CardTitle className="text-lg">KeySlim Drops</CardTitle>
                  <p className="text-sm text-gray-600">Weight Loss & Metabolism</p>
                </CardHeader>
                <CardContent className="text-center flex-grow flex flex-col">
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    Revolutionary liquid formula with 24 natural ingredients for sustainable weight loss.
                  </p>
                  <Button size="sm" asChild>
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Women's Health Journey Today
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of American women who have already improved their health and comfort with FemiPro. 
              Start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg"
                asChild
              >
                <Link href="http://femipro24.com/text.php#aff=lifestylemedicine623">
                  Get FemiPro Now - Save 50%
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-purple-600">
                <Link href="/compare">Compare All Products</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-purple-100">
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
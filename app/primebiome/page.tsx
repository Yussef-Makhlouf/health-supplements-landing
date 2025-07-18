import Image from "next/image"
import Link from "next/link"
import { Check, Star, Shield, Award, Leaf, Clock, ArrowRight, Users, TrendingUp, Heart, Sparkles, Eye, Brain, Gift, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrimeBiomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-none px-4 py-2">
                  🌟 GUT-SKIN CONNECTION REVOLUTION
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    PrimeBiome Review 2025
                  </span>
                  <br />
                  <span className="text-gray-900">Gut Health & Radiant Skin Connection</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Unlock the powerful gut-skin connection with our specialized formula containing 
                  B. Coagulans, Lion's Mane, and premium collagen peptides. Experience radiant skin 
                  and optimal digestive health from within.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">5 Billion CFUs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Gut-Skin Connection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">60-Day Money Back</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg"
                    asChild
                  >
                    <Link href="http://primebiome24.com/text.php#aff=lifestylemedicine623">
                      Get PrimeBiome Today - Save 50%
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#reviews">Read Customer Reviews</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-200/50 to-emerald-200/50 rounded-full blur-3xl scale-110 opacity-60"></div>
                <div className="relative">
                  <Image
                    src="/primebiome.png"
                    alt="PrimeBiome Gut Health & Skin Radiance"
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
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-none px-4 py-2 text-sm animate-pulse mb-4">
                <Gift className="h-4 w-4 mr-1" />
                LIMITED TIME OFFER
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Special PrimeBiome Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Order 6 bottles of PrimeBiome and receive 3 exclusive E-Books absolutely FREE!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-green-200 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gift className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">What You Get</h3>
                    <div className="space-y-4 text-left">
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="font-medium">6 Bottles of PrimeBiome</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="font-medium">"Gut Health Mastery Guide" E-Book</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="font-medium">"Natural Skin Care Secrets" E-Book</span>
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

              <Card className="border-2 border-green-200 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Book className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Free E-Books Include</h3>
                    <div className="space-y-4 text-left">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Gut Health Mastery Guide</h4>
                        <p className="text-sm text-green-700">
                          Comprehensive guide covering gut microbiome science, probiotic benefits, 
                          and natural ways to improve digestive health and overall wellness.
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Natural Skin Care Secrets</h4>
                        <p className="text-sm text-green-700">
                          Ancient and modern natural remedies for radiant skin, including gut-skin 
                          connection tips, herbal treatments, and holistic skincare approaches.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                        asChild
                      >
                        <Link href="http://primebiome24.com/text.php#aff=lifestylemedicine623">
                          Get PrimeBiome + 2 Free E-Books
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
                <Users className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-semibold text-sm">35,000+</div>
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
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <div>
                  <div className="font-semibold text-sm">Proven</div>
                  <div className="text-xs text-gray-600">Results</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gut-Skin Connection */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Revolutionary Gut-Skin Connection
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                PrimeBiome works through a scientifically-designed approach that targets the 
                powerful connection between your gut microbiome and skin health for radiant results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Stage 1: Gut Health</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    B. Coagulans (5 Billion CFU) works to restore and maintain a healthy gut 
                    microbiome, which is the foundation for overall wellness and skin health.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Stage 2: Skin Radiance</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Marine Collagen Peptides and Hyaluronic Acid work together to improve 
                    skin elasticity, hydration, and overall radiance from within.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Stage 3: Cognitive Support</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Lion's Mane Mushroom Extract provides cognitive support and mental clarity, 
                    completing the mind-body-skin wellness trifecta.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Visual Placeholder: How It Works Infographic */}
            {/* <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How PrimeBiome Works</h3>
                <p className="text-gray-600">See the transformation in gut health and skin radiance that thousands of Americans have experienced</p>
              </div>
              <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Infographic: Gut-Skin Connection Process</span>
              </div>
            </div> */}
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why PrimeBiome is the Ultimate Gut-Skin Solution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Backed by science and trusted by thousands of Americans, PrimeBiome delivers 
                comprehensive gut-skin support through its unique formula.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Promotes Radiant Skin</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Through the gut-skin axis, PrimeBiome helps promote radiant, youthful skin 
                    by supporting the body's natural processes for skin health and regeneration.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Supports Gut Microbiome</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    With 5 billion CFUs of B. Coagulans, PrimeBiome helps restore and maintain 
                    a healthy gut microbiome balance for optimal digestive health.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Reduces Inflammation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The formula helps reduce inflammation and redness naturally, promoting 
                    clearer, healthier skin and improved overall wellness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Enhances Nutrient Absorption</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A healthy gut microbiome improves nutrient absorption, ensuring your body 
                    gets the maximum benefit from the vitamins and minerals in PrimeBiome.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">Improves Skin Elasticity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Marine Collagen Peptides and Hyaluronic Acid work together to improve 
                    skin elasticity and hydration for a more youthful appearance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">Cognitive Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Lion's Mane Mushroom Extract provides cognitive support and mental clarity, 
                    completing the comprehensive wellness approach.
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
                Powerful Natural Ingredients for Gut-Skin Health
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each ingredient in PrimeBiome is carefully selected for its proven benefits 
                in supporting gut health and skin radiance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">B. Coagulans (5 Billion CFU)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    A clinically-studied probiotic strain that supports healthy gut microbiome 
                    and helps maintain optimal digestive health and skin balance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Lion's Mane Mushroom Extract</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    A powerful nootropic that provides cognitive support and mental clarity, 
                    completing the mind-body-skin wellness trifecta.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Marine Collagen Peptides</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Premium collagen peptides that help improve skin structure, elasticity, 
                    and hydration for a more youthful, radiant appearance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Hyaluronic Acid</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    A natural compound that provides deep hydration and helps maintain skin 
                    moisture for a plump, youthful complexion.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">Vitamins C, E & Zinc</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Essential antioxidants that provide protection against free radicals and 
                    support overall skin health and immune function.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">Natural Extracts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Carefully selected plant extracts that provide additional support for 
                    gut health and skin radiance through natural, synergistic effects.
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
                What Our Customers Say About PrimeBiome
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of satisfied Americans who have experienced the gut-skin connection with PrimeBiome.
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

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "I've struggled with digestive issues for years, and PrimeBiome has been 
                    a game-changer. My gut health is better than ever, and my skin has never 
                    looked more radiant!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">RJ</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Rachel J.</p>
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
                    "The cognitive benefits are amazing! I feel more focused and clear-headed, 
                    and my skin has improved dramatically. PrimeBiome is now a daily essential."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">MK</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Michael K.</p>
                      <p className="text-sm text-gray-500">Seattle, WA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Visual Placeholder: Verified Buyer Testimonials */}
            {/* <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Verified Buyer Testimonials</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Before Photo</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">Before PrimeBiome</h4>
                  <p className="text-sm text-gray-600 text-center">Digestive issues, dull skin, low energy</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">After Photo</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">After PrimeBiome</h4>
                  <p className="text-sm text-gray-600 text-center">Healthy gut, radiant skin, improved energy</p>
                </div>
              </div>
            </div> */}
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
                Get answers to the most common questions about PrimeBiome and gut-skin health.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    How long does it take to see results with PrimeBiome?
                  </AccordionTrigger>
                  <AccordionContent>
                    Most customers begin to notice improvements in their gut health and skin radiance 
                    within 2-4 weeks of consistent use. However, individual results may vary depending 
                    on your current gut health status and skin condition.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Is PrimeBiome safe to use daily?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, PrimeBiome is completely safe for daily use. It contains only natural ingredients 
                    and is designed for long-term use to support gut health and skin radiance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Can PrimeBiome help with skin issues?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely! PrimeBiome's formula specifically targets the gut-skin axis, helping 
                    to reduce inflammation, improve skin radiance, and support overall skin health 
                    through better gut microbiome balance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    What makes PrimeBiome different from other gut health products?
                  </AccordionTrigger>
                  <AccordionContent>
                    PrimeBiome is unique because it combines gut health support with skin radiance 
                    benefits through the gut-skin connection, plus cognitive support from Lion's Mane, 
                    creating a comprehensive wellness approach.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Is there a money-back guarantee?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer a 60-day money-back guarantee on all PrimeBiome orders. 
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
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Gut-Skin Journey Today
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of Americans who have already experienced the gut-skin connection with PrimeBiome. 
              Start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-gray-100 shadow-lg"
                asChild
              >
                <Link href="http://primebiome24.com/text.php#aff=lifestylemedicine623">
                  Get PrimeBiome Now - Save 50%
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-green-600 ">
                <Link href="/compare">Compare All Products</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-green-100">
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
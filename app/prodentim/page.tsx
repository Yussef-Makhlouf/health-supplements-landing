import Image from "next/image"
import Link from "next/link"
import { Check, Star, Shield, Award, Leaf, Clock, Gift, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProDentimPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-4 py-2">
                #1 ORAL PROBIOTIC SUPPLEMENT
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  ProDentim Review 2025
                </span>
                <br />
                <span className="text-gray-900">Does It Really Work?</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover the revolutionary oral probiotic that's transforming dental health across America. 
                With 3.5 billion CFUs of clinically-studied probiotics, ProDentim supports healthy teeth, 
                gums, and fresh breath naturally.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">3.5 Billion CFUs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Natural Ingredients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">60-Day Money Back</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
                  asChild
                >
                  <Link href="https://prodentim24.com/text.php#aff=lifestylemedicine623">
                    Get ProDentim Today - Save 50%
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#reviews">Read Customer Reviews</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-blue-300/50 rounded-full blur-3xl scale-110 opacity-60"></div>
              <div className="relative">
                <Image
                  src="/prodentim.png"
                  alt="ProDentim Oral Probiotic Supplement"
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
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-none px-4 py-2 text-sm animate-pulse mb-4">
              <Gift className="h-4 w-4 mr-1" />
              LIMITED TIME OFFER
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Special ProDentim Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Order 6 bottles of ProDentim and receive 2 exclusive E-Books absolutely FREE!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-blue-200 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What You Get</h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="font-medium">6 Bottles of ProDentim</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="font-medium">"Complete Oral Health Guide" E-Book</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="font-medium">"Natural Dental Care Secrets" E-Book</span>
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

            <Card className="border-2 border-blue-200 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Book className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Free E-Books Include</h3>
                  <div className="space-y-4 text-left">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Complete Oral Health Guide</h4>
                      <p className="text-sm text-blue-700">
                        Comprehensive guide covering natural oral care techniques, diet tips for healthy teeth, 
                        and professional dental hygiene practices.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Natural Dental Care Secrets</h4>
                      <p className="text-sm text-blue-700">
                        Ancient and modern natural remedies for oral health, including herbal treatments, 
                        oil pulling techniques, and holistic dental care approaches.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                      asChild
                    >
                      <Link href="https://prodentim24.com/text.php#aff=lifestylemedicine623">
                        Get ProDentim + 2 Free E-Books
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why ProDentim is the Ultimate Oral Health Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Backed by science and trusted by thousands of Americans, ProDentim delivers 
              comprehensive oral health support through its unique probiotic formula.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Improved Gum Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ProDentim's specialized probiotic blend supports healthy gums and prevents 
                  inflammation by balancing beneficial bacteria in your oral microbiome.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Fresher Breath</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Combat bad breath at its source with beneficial bacteria that restore 
                  oral microbiome balance for long-lasting freshness throughout the day.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Stronger Enamel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our unique formulation helps strengthen tooth enamel for better protection 
                  against decay and sensitivity, promoting overall dental health.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Natural Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Features Lactobacillus paracasei, B.lactis BL-04, inulin, and malic acid 
                  for comprehensive oral care without harsh chemicals or artificial additives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Easy Daily Use</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Simply take one tablet daily for ongoing protection and support for your 
                  oral health. No complicated routines or multiple products required.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Clinically Studied</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Each dose contains a powerful 3.5 billion colony-forming units of beneficial 
                  probiotic strains for maximum effectiveness and proven results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How ProDentim Works for Better Oral Health
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ProDentim's advanced formula works in three stages to restore and maintain 
              your oral microbiome balance for optimal dental health.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Restore Balance</h3>
              <p className="text-gray-600">
                ProDentim introduces beneficial probiotic strains that help restore the 
                natural balance of bacteria in your mouth, creating a healthy oral environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strengthen Protection</h3>
              <p className="text-gray-600">
                The formula strengthens your teeth and gums by promoting healthy tissue 
                and supporting your body's natural defense mechanisms against oral issues.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Maintain Results</h3>
              <p className="text-gray-600">
                With daily use, ProDentim helps maintain optimal oral health, fresh breath, 
                and a confident smile that lasts throughout your day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Results
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results: Before and After ProDentim
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the incredible transformations our customers have experienced with ProDentim. 
              These real results speak for themselves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center flex-1">
                    <h4 className="text-sm font-semibold text-red-600 mb-2">BEFORE</h4>
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Image src="/prodentim_before.jpg" alt="ProDentim" width={100} height={100} />
                    </div>
                    <p className="text-xs text-gray-600">Gum Inflammation</p>
                  </div>
                  <div className="text-center flex-1">
                    <h4 className="text-sm font-semibold text-green-600 mb-2">AFTER</h4>
                    <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Image src="/prodentim_after.jpg" alt="ProDentim" width={100} height={100} />
                    </div>
                    <p className="text-xs text-gray-600">Healthy Gums</p>
                  </div>
                </div>
                <CardTitle className="text-lg">Sarah M. - Austin, TX</CardTitle>
                <p className="text-sm text-gray-600">"After 3 weeks of ProDentim"</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-4">
                  "My gums were constantly inflamed and sensitive. After just 3 weeks with ProDentim, 
                  the inflammation is completely gone and I can enjoy hot and cold foods again!"
                </p>
                <div className="flex justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center flex-1">
                    <h4 className="text-sm font-semibold text-red-600 mb-2">BEFORE</h4>
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Image src="/prodentim.png" alt="ProDentim" width={100} height={100} />
                    </div>
                    <p className="text-xs text-gray-600">Bad Breath</p>
                  </div>
                  <div className="text-center flex-1">
                    <h4 className="text-sm font-semibold text-green-600 mb-2">AFTER</h4>
                    <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Image src="/prodentim.png" alt="ProDentim" width={100} height={100} />
                    </div>
                    <p className="text-xs text-gray-600">Fresh Breath</p>
                  </div>
                </div>
                <CardTitle className="text-lg">Michael J. - Seattle, WA</CardTitle>
                <p className="text-sm text-gray-600">"After 2 weeks of ProDentim"</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-4">
                  "I struggled with chronic bad breath for years. ProDentim completely transformed 
                  my oral health. My breath is now fresh throughout the entire day!"
                </p>
                <div className="flex justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center flex-1">
                    <h4 className="text-sm font-semibold text-red-600 mb-2">BEFORE</h4>
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Image src="/prodentim.png" alt="ProDentim" width={100} height={100} />
                    </div>
                    <p className="text-xs text-gray-600">Weak Teeth</p>
                  </div>
                  <div className="text-center flex-1">
                    <h4 className="text-sm font-semibold text-green-600 mb-2">AFTER</h4>
                    <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Image src="/prodentim.png" alt="ProDentim" width={100} height={100} />
                    </div>
                    <p className="text-xs text-gray-600">Strong Teeth</p>
                  </div>
                </div>
                <CardTitle className="text-lg">Theo F. - Chicago, IL</CardTitle>
                <p className="text-sm text-gray-600">"After 4 weeks of ProDentim"</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-4">
                  "My teeth were sensitive and weak. After 4 weeks with ProDentim, they feel 
                  stronger and more resilient. My dentist was amazed at the improvement!"
                </p>
                <div className="flex justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Thousands of Success Stories
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                These are just a few examples of the incredible transformations our customers experience. 
                ProDentim has helped over 50,000+ Americans achieve better oral health.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">2-3</div>
                  <div className="text-sm text-gray-600">Weeks to See Results</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
                  <div className="text-sm text-gray-600">Average Customer Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
         <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Verified Buyer Testimonials</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Image src="/prodentim_before.jpg" alt="ProDentim" width={100} height={100} />
                                      </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">Before ProDentim</h4>
                  <p className="text-sm text-gray-600 text-center">Struggling with weight loss, low energy, cravings</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Image src="/prodentim_after.jpg" alt="ProDentim" width={100} height={100} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">After ProDentim</h4>
                  <p className="text-sm text-gray-600 text-center">Achieved weight loss goals, high energy, confidence</p>
                </div>
              </div>
            </div>
      {/* Customer Reviews */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say About ProDentim
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied Americans who have transformed their oral health with ProDentim.
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
                  "ProDentim changed my oral health completely! My teeth feel stronger, 
                  my gums are healthier, and my breath is fresher. I've never been more 
                  confident about my smile. My dentist was amazed at the improvement!"
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

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "After struggling with gum sensitivity for years, ProDentim has been a 
                  game-changer. My gums are no longer inflamed, and I can enjoy hot and 
                  cold foods without discomfort. Highly recommend!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah M.</p>
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
                  "I was skeptical at first, but ProDentim really works! My breath is 
                  noticeably fresher, and my teeth feel cleaner throughout the day. 
                  It's become an essential part of my daily routine."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">MJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Michael J.</p>
                    <p className="text-sm text-gray-500">Seattle, WA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about ProDentim and oral health.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How long does it take to see results with ProDentim?
                </AccordionTrigger>
                <AccordionContent>
                  Most customers begin to notice improvements in their oral health within 2-3 weeks of consistent use. 
                  However, individual results may vary depending on your current oral health status and how well you 
                  maintain your daily routine.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Is ProDentim safe to use daily?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, ProDentim is completely safe for daily use. It contains only natural ingredients and 
                  clinically-studied probiotic strains that are beneficial for your oral microbiome. The formula 
                  is designed for long-term use to maintain optimal oral health.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Can ProDentim help with bad breath?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! ProDentim's probiotic formula specifically targets the root cause of bad breath 
                  by balancing the oral microbiome. By introducing beneficial bacteria, it helps eliminate 
                  the harmful bacteria that cause unpleasant odors, providing long-lasting fresh breath.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  What makes ProDentim different from other oral health products?
                </AccordionTrigger>
                <AccordionContent>
                  ProDentim is unique because it uses a probiotic approach to oral health, rather than just 
                  masking symptoms. With 3.5 billion CFUs of clinically-studied probiotics, it works to 
                  restore and maintain a healthy oral microbiome, addressing the root cause of oral health issues.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Is there a money-back guarantee?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! We offer a 60-day money-back guarantee on all ProDentim orders. If you're not completely 
                  satisfied with your results, simply return the unused portion within 60 days for a full refund, 
                  no questions asked.
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Oral Health Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Americans who have already improved their oral health with ProDentim. 
            Start your journey to a healthier, more confident smile today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
              asChild
            >
              <Link href="https://prodentim24.com/text.php#aff=lifestylemedicine623">
                Get ProDentim Now - Save 50%
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white  hover:bg-white hover:text-blue-600">
              Learn More About Oral Health
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
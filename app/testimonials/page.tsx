import Image from "next/image"
import Link from "next/link"
import { Check, Star, Shield, Award, Leaf, Clock, ArrowRight, Users, TrendingUp, Heart, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-20 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-8">
              <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 border-none px-4 py-2">
                ⭐ REAL CUSTOMER SUCCESS STORIES
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Customer Testimonials
                </span>
                <br />
                <span className="text-gray-900">Real Results from Real People</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join thousands of satisfied Americans who have transformed their health and lives 
                with our premium supplements. Read their stories and see the real results.
              </p>
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
                  <div className="font-semibold text-sm">100,000+</div>
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

        {/* Featured Testimonials */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These are just a few of the thousands of success stories from our customers. 
                Real people, real results, real transformations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* ProDentim Testimonial */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">TF</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Theo F.</p>
                      <p className="text-sm text-gray-500">Chicago, IL</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "ProDentim changed my oral health completely! My teeth feel stronger, 
                    my gums are healthier, and my breath is fresher. I've never been more 
                    confident about my smile. My dentist was amazed at the improvement!"
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-700">ProDentim</Badge>
                    <span className="text-sm text-gray-500">Oral Health</span>
                  </div>
                </CardContent>
              </Card>

              {/* KeySlim Testimonial */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold">JL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Jennifer L.</p>
                      <p className="text-sm text-gray-500">Los Angeles, CA</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "I lost 25 pounds in just 8 weeks with KeySlim Drops! The appetite control 
                    is incredible - I no longer crave junk food, and my energy levels are through 
                    the roof. This product really works!"
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-orange-100 text-orange-700">KeySlim Drops</Badge>
                    <span className="text-sm text-gray-500">Weight Loss</span>
                  </div>
                </CardContent>
              </Card>

              {/* PrimeBiome Testimonial */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">AL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Amanda L.</p>
                      <p className="text-sm text-gray-500">San Francisco, CA</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "PrimeBiome has completely transformed my skin! My complexion is clearer, 
                    more radiant, and I've noticed a significant improvement in my digestion. 
                    The gut-skin connection is real!"
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-700">PrimeBiome</Badge>
                    <span className="text-sm text-gray-500">Gut Health</span>
                  </div>
                </CardContent>
              </Card>

              {/* FemiPro Testimonial */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">SL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Sarah L.</p>
                      <p className="text-sm text-gray-500">Chicago, IL</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "FemiPro has been a lifesaver! My bladder control has improved dramatically, 
                    and I feel so much more confident. The natural ingredients give me peace of mind."
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-purple-100 text-purple-700">FemiPro</Badge>
                    <span className="text-sm text-gray-500">Women's Health</span>
                  </div>
                </CardContent>
              </Card>

              {/* Another ProDentim Testimonial */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">SM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Sarah M.</p>
                      <p className="text-sm text-gray-500">Austin, TX</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "After struggling with gum sensitivity for years, ProDentim has been a 
                    game-changer. My gums are no longer inflamed, and I can enjoy hot and 
                    cold foods without discomfort."
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-700">ProDentim</Badge>
                    <span className="text-sm text-gray-500">Oral Health</span>
                  </div>
                </CardContent>
              </Card>

              {/* Another KeySlim Testimonial */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold">MR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Michael R.</p>
                      <p className="text-sm text-gray-500">Austin, TX</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "After trying countless weight loss products, KeySlim Drops finally delivered 
                    the results I was looking for. My metabolism is faster, I have more energy, 
                    and the weight is staying off!"
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-orange-100 text-orange-700">KeySlim Drops</Badge>
                    <span className="text-sm text-gray-500">Weight Loss</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Product-Specific Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Product-Specific Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how each of our products has helped customers achieve their specific health goals.
              </p>
            </div>

            {/* ProDentim Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">ProDentim Success Stories</h3>
                <p className="text-gray-600">Real results from customers who improved their oral health</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">MJ</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Michael J.</p>
                        <p className="text-sm text-gray-500">Seattle, WA</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "I was skeptical at first, but ProDentim really works! My breath is 
                      noticeably fresher, and my teeth feel cleaner throughout the day. 
                      It's become an essential part of my daily routine."
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-100 text-blue-700">ProDentim</Badge>
                      <span className="text-sm text-gray-500">Oral Health</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">LK</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Lisa K.</p>
                        <p className="text-sm text-gray-500">Miami, FL</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "My dentist was amazed at my last checkup! My gums are healthier, 
                      my teeth are stronger, and I no longer have sensitivity issues. 
                      ProDentim has been a game-changer for my oral health."
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-100 text-blue-700">ProDentim</Badge>
                      <span className="text-sm text-gray-500">Oral Health</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* KeySlim Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">KeySlim Drops Success Stories</h3>
                <p className="text-gray-600">Real results from customers who achieved their weight loss goals</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-semibold">AS</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Amanda S.</p>
                        <p className="text-sm text-gray-500">Seattle, WA</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "The appetite control is amazing! I no longer have those late-night cravings, 
                      and my portion sizes have naturally decreased. I've lost 18 pounds in 6 weeks!"
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-orange-100 text-orange-700">KeySlim Drops</Badge>
                      <span className="text-sm text-gray-500">Weight Loss</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-semibold">RK</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Robert K.</p>
                        <p className="text-sm text-gray-500">Denver, CO</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "KeySlim Drops helped me break through my weight loss plateau. I've lost 
                      32 pounds total and feel more confident than ever. The natural ingredients 
                      give me peace of mind."
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-orange-100 text-orange-700">KeySlim Drops</Badge>
                      <span className="text-sm text-gray-500">Weight Loss</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* PrimeBiome Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">PrimeBiome Success Stories</h3>
                <p className="text-gray-600">Real results from customers who improved their gut health and skin</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-semibold">RJ</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Rachel J.</p>
                        <p className="text-sm text-gray-500">Austin, TX</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "I've struggled with digestive issues for years, and PrimeBiome has been a 
                      game-changer. My gut health is better than ever, and my skin has never 
                      looked more radiant!"
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-700">PrimeBiome</Badge>
                      <span className="text-sm text-gray-500">Gut Health</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-semibold">MK</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Michael K.</p>
                        <p className="text-sm text-gray-500">Seattle, WA</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "The cognitive benefits are amazing! I feel more focused and clear-headed, 
                      and my skin has improved dramatically. PrimeBiome is now a daily essential."
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-700">PrimeBiome</Badge>
                      <span className="text-sm text-gray-500">Gut Health</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FemiPro Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">FemiPro Success Stories</h3>
                <p className="text-gray-600">Real results from women who improved their health and comfort</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">MJ</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Maria J.</p>
                        <p className="text-sm text-gray-500">Austin, TX</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "After struggling with urinary issues for years, FemiPro has been a game-changer. 
                      My comfort and confidence have improved so much. Highly recommend!"
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-purple-100 text-purple-700">FemiPro</Badge>
                      <span className="text-sm text-gray-500">Women's Health</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">AK</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Amanda K.</p>
                        <p className="text-sm text-gray-500">Seattle, WA</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "The natural ingredients in FemiPro are amazing! I feel so much better, 
                      and my quality of life has improved dramatically. Thank you!"
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-purple-100 text-purple-700">FemiPro</Badge>
                      <span className="text-sm text-gray-500">Women's Health</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Before & After Transformations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See the real transformations our customers have experienced with our products.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">ProDentim Results</h3>
                <div className="grid md:grid-cols-2 gap-6">
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

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">KeySlim Drops Results</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 text-center">
                    <div className="w-100 h-100 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Image src="/keyslim_before.jpg" alt="Before KeySlim" width={100} height={100} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Before KeySlim</h4>
                    <p className="text-sm text-gray-600">Struggling with weight loss, low energy</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center">
                    <div className="w-100 h-100 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Image src="/keyslim_after.jpg" alt="After KeySlim" width={100} height={100} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">After KeySlim</h4>
                    <p className="text-sm text-gray-600">Achieved weight loss goals, high energy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Success Stories
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Ready to transform your health? Join thousands of Americans who have already 
              achieved their health goals with our premium supplements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg"
                asChild
              >
                <Link href="/compare">Compare All Products</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-orange-600">
                <Link href="/about">Learn More About Us</Link>
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
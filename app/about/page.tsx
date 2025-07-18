import Image from "next/image"
import Link from "next/link"
import { Check, Star, Shield, Award, Leaf, Clock, ArrowRight, Users, TrendingUp, Heart, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-8">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-4 py-2">
                TRUSTED BY 100,000+ AMERICANS
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  About  BEAUTY REALM
                </span>
                <br />
                <span className="text-gray-900">Your Trusted Health Partner</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're committed to providing the highest quality health supplements backed by science 
                and trusted by thousands of Americans. Our mission is to help you achieve optimal 
                wellness through natural, effective solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded with a simple mission: to provide Americans with premium health supplements 
                  that actually work. We understand that your health is your most valuable asset, 
                  and we're committed to delivering products that support your wellness journey.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team of health experts, scientists, and wellness professionals work together 
                  to develop formulas that combine traditional wisdom with modern science. Every 
                  product we create is thoroughly researched, tested, and backed by real results.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we're proud to serve over 100,000 satisfied customers across America, 
                  helping them achieve their health goals and live their best lives.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full blur-3xl scale-110 opacity-60"></div>
                <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                    <p className="text-gray-600">
                      To provide premium health supplements that deliver real results, 
                      backed by science and trusted by families across America.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do, from product development to customer service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Premium Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Every ingredient is carefully selected and tested to ensure the highest standards 
                    of purity and effectiveness. We never compromise on quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Science-Backed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our formulas are developed based on clinical research and proven to deliver 
                    real, measurable results that you can trust.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Customer Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Your success is our success. We're here to support your health journey 
                    every step of the way with exceptional service and care.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Natural & Safe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We use only natural ingredients and follow strict safety protocols to ensure 
                    our products are safe for daily use by the whole family.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Thousands of customers have experienced life-changing results with our 
                    premium supplements. We're committed to delivering what we promise.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">Continuous Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We're constantly researching and developing new formulas to meet the evolving 
                    health needs of our customers and stay ahead of the latest science.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose  BEAUTY REALM?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not just another supplement company. Here's what makes us different.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Formulation</h3>
                    <p className="text-gray-600">
                      Our products are developed by a team of health experts, nutritionists, 
                      and scientists who understand what your body needs to thrive.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
                    <p className="text-gray-600">
                      Every batch is tested for purity and potency. We use only the highest 
                      quality ingredients from trusted suppliers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Success</h3>
                    <p className="text-gray-600">
                      Your results matter to us. We provide comprehensive support and education 
                      to help you achieve your health goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Natural Ingredients</h3>
                    <p className="text-gray-600">
                      We believe in the power of nature. Our formulas use carefully selected 
                      natural ingredients that work with your body, not against it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                    <p className="text-gray-600">
                      Thousands of customers have experienced real results with our products. 
                      We're committed to delivering what we promise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">60-Day Guarantee</h3>
                    <p className="text-gray-600">
                      We're so confident in our products that we offer a 60-day money-back 
                      guarantee. Your satisfaction is our priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our dedicated team of health experts, scientists, and wellness professionals 
                work together to bring you the best health supplements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Health Experts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our team includes certified nutritionists, health coaches, and wellness 
                    professionals who understand your health needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-12 w-12 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Research Scientists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our research team stays up-to-date with the latest scientific discoveries 
                    to ensure our formulas are cutting-edge and effective.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-12 w-12 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Customer Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our customer service team is here to support your health journey with 
                    personalized guidance and expert advice.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Thousands of Americans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our community of satisfied customers who have transformed their health with our products.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100,000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Health Experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Health Journey Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of Americans who have already improved their health and lives 
              with our premium supplements. Choose the product that fits your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </main>

      <Footer />
    </div>
  )
} 
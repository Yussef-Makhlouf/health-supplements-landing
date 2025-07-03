"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Check, Star, Droplets, Zap, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function KeySlimHeroSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-30 blur-3xl -z-10 animate-pulse-subtle"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100 rounded-full opacity-30 blur-3xl -z-10 animate-pulse-subtle"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-100 rounded-full opacity-20 blur-3xl -z-10"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Content Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-block"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 hover:from-orange-200 hover:to-amber-200 border-none px-4 py-2 text-base font-medium shadow-md">
                <Droplets className="h-4 w-4 mr-2" />
                Revolutionary Liquid Formula
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                KeySlim Drops
              </span>
              <br />
              <span className="text-gray-900">
                Weight Loss Revolution
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-xl text-muted-foreground md:text-2xl max-w-[600px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Transform your body with our cutting-edge liquid supplement featuring 
              <span className="font-semibold text-orange-600"> 24 powerful natural ingredients</span> 
              designed to accelerate metabolism, control appetite, and burn fat 24/7.
            </motion.p>

            {/* Key Features Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg shadow-sm">
                <Target className="h-6 w-6 text-orange-600" />
                <span className="font-medium">3-Stage Fat Burning</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg shadow-sm">
                <Zap className="h-6 w-6 text-amber-600" />
                <span className="font-medium">Instant Energy Boost</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg shadow-sm">
                <Award className="h-6 w-6 text-yellow-600" />
                <span className="font-medium">FDA Registered</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/80 rounded-lg shadow-sm">
                <Check className="h-6 w-6 text-green-600" />
                <span className="font-medium">60-Day Guarantee</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4"
                asChild
              >
                <Link href="https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623" className="flex items-center gap-2">
                  <Droplets className="h-5 w-5" />
                  Get KeySlim Drops Now
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-orange-200 hover:bg-orange-50 transition-all duration-300 text-lg px-8 py-4"
                asChild
              >
                <Link href="https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623">
                  Learn More About This Revolutionary Formula
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap items-center gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5 (112,847+ reviews)</span>
              </div>
              <Badge variant="outline" className="bg-white border-orange-200 text-orange-700">
                <Check className="h-4 w-4 mr-1" />
                Non-GMO & Vegan
              </Badge>
              <Badge variant="outline" className="bg-white border-orange-200 text-orange-700">
                <Check className="h-4 w-4 mr-1" />
                Made in USA
              </Badge>
            </motion.div>
          </motion.div>

          {/* Product Showcase Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200/50 to-amber-200/50 rounded-full blur-3xl scale-110 opacity-60"></div>
            
            {/* Main Product Image */}
            <div className="relative h-[400px] w-[320px] sm:h-[500px] sm:w-[400px] mx-auto">
              <motion.div
                className="absolute inset-0"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/keyslim-drops1.png"
                  alt="KeySlim Drops Revolutionary Weight Loss Formula"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Floating Info Cards */}
              <motion.div 
                className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-xl z-10"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [-3, 3, -3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-bold text-sm">Liquid Formula</p>
                    <p className="text-xs text-muted-foreground">Fast Absorption</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl z-10"
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [3, -3, 3]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-amber-500" />
                  <div>
                    <p className="font-bold text-sm">24 Ingredients</p>
                    <p className="text-xs text-muted-foreground">Natural Power</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute top-1/2 -right-8 bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3 rounded-xl shadow-xl z-10"
                animate={{ 
                  x: [0, 8, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="text-center">
                  <p className="font-bold text-sm">Results in</p>
                  <p className="text-xl font-bold">1-3 Weeks</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Section */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3-Stage Process</h3>
              <p className="text-muted-foreground">Turn off hunger, accelerate metabolism, burn fat long-term</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Droplets className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Liquid Technology</h3>
              <p className="text-muted-foreground">Superior absorption compared to pills and capsules</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">FDA registered facility, USDA organic standards</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 
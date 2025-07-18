"use client"

import Link from "next/link"
import { useState , useEffect } from "react"
import { Menu, X, ShoppingCart, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${ isScrolled ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 ">
            <Image
              src="/logo.png"
              alt="BEAUTY REALM Logo"
              width={56}
              height={56}
              className="object-contain"
              priority
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">BEAUTY REALM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            <span className="text-xl font-bold bg-gradient-to-r text-transparent from-primary via-purple-600 to-blue-600 bg-clip-text tracking-wider">
              BEAUTY REALM
            </span>
            </Link> */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 space-y-3">
                  <Link href="/prodentim" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">PD</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">ProDentim</div>
                      <div className="text-sm text-gray-500">Oral Health</div>
                    </div>
                  </Link>
                  <Link href="/keyslim" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                      <span className="text-orange-600 text-xs font-bold">KS</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">KeySlim Drops</div>
                      <div className="text-sm text-gray-500">Weight Loss</div>
                    </div>
                  </Link>
                  <Link href="/primebiome" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                      <span className="text-green-600 text-xs font-bold">PB</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">PrimeBiome</div>
                      <div className="text-sm text-gray-500">Gut Health</div>
                    </div>
                  </Link>
                  <Link href="/femipro" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                      <span className="text-purple-600 text-xs font-bold">FP</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">FemiPro</div>
                      <div className="text-sm text-gray-500">Women's Health</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/compare" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Compare
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Reviews
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
          </div>

          {/* Desktop Actions */}
          {/* <div className="hidden md:flex items-center space-x-4">
       
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Shop Now
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="space-y-4">
              <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <div className="space-y-2">
                <div className="font-medium text-gray-900 mb-2">Products</div>
                <Link href="/prodentim" className="block text-gray-600 hover:text-blue-600 pl-4">
                  ProDentim - Oral Health
                </Link>
                <Link href="/keyslim" className="block text-gray-600 hover:text-blue-600 pl-4">
                  KeySlim Drops - Weight Loss
                </Link>
                <Link href="/primebiome" className="block text-gray-600 hover:text-blue-600 pl-4">
                  PrimeBiome - Gut Health
                </Link>
                <Link href="/femipro" className="block text-gray-600 hover:text-blue-600 pl-4">
                  FemiPro - Women's Health
                </Link>
              </div>
              <Link href="/compare" className="block text-gray-700 hover:text-blue-600 font-medium">
                Compare Products
              </Link>
              <Link href="/testimonials" className="block text-gray-700 hover:text-blue-600 font-medium">
                Customer Reviews
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-blue-600 font-medium">
                About Us
              </Link>
              {/* <div className="pt-4 border-t border-gray-100">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Shop Now
                </Button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 
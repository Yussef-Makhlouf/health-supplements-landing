"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function LuxuryHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            ProDentim
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#prodentim" className="text-sm font-medium hover:text-primary transition-colors">
            ProDentim
          </Link>
          <Link href="#primebiome" className="text-sm font-medium hover:text-primary transition-colors">
            PrimeBiome Glow
          </Link>
          <Link href="#femipro" className="text-sm font-medium hover:text-primary transition-colors">
            FemiPro
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="https://us-prodintim.com/">Shop Now</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-4 space-y-4">
            <Link
              href="#"
              className="block text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#prodentim"
              className="block text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              ProDentim
            </Link>
            <Link
              href="#primebiome"
              className="block text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              PrimeBiome Glow
            </Link>
            <Link
              href="#femipro"
              className="block text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              FemiPro
            </Link>
            <Button
              className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white"
              asChild
            >
              <Link href="https://us-prodintim.com/" onClick={() => setMobileMenuOpen(false)}>
                Shop Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

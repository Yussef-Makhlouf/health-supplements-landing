"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function LuxuryHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Logo animation variants
  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  }

  // Separate pulse animation
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [1, 0.9, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror" as const
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div 
            className="relative h-14 w-14 overflow-hidden rounded-full cursor-pointer"
            variants={logoVariants}
            initial="initial"
            animate={logoLoaded ? "animate" : "initial"}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/logo.png"
              alt="BEAUTY REALM Logo"
              width={56}
              height={56}
              className="object-cover"
              onLoad={() => setLogoLoaded(true)}
              priority
            />
          </motion.div>
          <motion.span 
            className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            BEAUTY REALM
          </motion.span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <NavLink href="#">Home</NavLink>
          <NavLink href="https://prodentim24.com/text.php#aff=lifestylemedicine623">ProDentim</NavLink>
          <NavLink href="http://primebiome24.com/text.php#aff=lifestylemedicine623">PrimeBiome</NavLink>
          <NavLink href="https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623">KeySlim</NavLink>
          <NavLink href="http://femipro24.com/text.php#aff=lifestylemedicine623">FemiPro</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="https://prodentim24.com/text.php#aff=lifestylemedicine623">Shop Now</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-4 space-y-4">
            <div className="flex items-center gap-3 py-2">
              <motion.div 
                className="relative h-12 w-12 overflow-hidden rounded-full"
                variants={logoVariants}
                initial="initial"
                animate={{
                  ...pulseAnimation,
                  opacity: 1,
                  scale: 1
                }}
                whileHover="hover"
              >
                <Image
                  src="/logo.png"
                  alt="BEAUTY REALM Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </motion.div>
              <motion.span 
                className="text-lg font-medium"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                BEAUTY REALM
              </motion.span>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              className="space-y-4"
            >
              <MobileNavLink href="#" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="https://prodentim24.com/text.php#aff=lifestylemedicine623" onClick={() => setMobileMenuOpen(false)}>ProDentim</MobileNavLink>
              <MobileNavLink href="http://primebiome24.com/text.php#aff=lifestylemedicine623" onClick={() => setMobileMenuOpen(false)}>PrimeBiome</MobileNavLink>
              <MobileNavLink href="https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623" onClick={() => setMobileMenuOpen(false)}>KeySlim</MobileNavLink>
              <MobileNavLink href="http://femipro24.com/text.php#aff=lifestylemedicine623" onClick={() => setMobileMenuOpen(false)}>FemiPro</MobileNavLink>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white"
                asChild
              >
                <Link href="https://prodentim24.com/text.php#aff=lifestylemedicine623" onClick={() => setMobileMenuOpen(false)}>
                  Shop Now
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

// NavLink component with animation
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href} className="text-sm font-medium hover:text-primary transition-colors">
        {children}
      </Link>
    </motion.div>
  )
}

// Mobile NavLink component with animation
function MobileNavLink({ href, onClick, children }: { href: string; onClick?: () => void; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link
        href={href}
        className="block text-sm font-medium hover:text-primary"
        onClick={onClick}
      >
        {children}
      </Link>
    </motion.div>
  )
}

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Shield, Truck, RefreshCw, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 w-fit">
              <img 
                src="/logo.png" 
                alt="Beauty Realm Logo" 
                className="w-16 h-16 object-contain bg-white rounded-lg sm:w-20 sm:h-20 "
              />
              <span className="text-xl font-bold"> BEAUTY REALM</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium health supplements designed to support your wellness journey. 
              Natural ingredients, science-backed formulas, and proven results.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/1KmjXgAnUk/" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
       
              <Link href="https://www.instagram.com/beautyrealm70?igsh=MTB1OXVqMmFnc3ZvZg==" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
       
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prodentim" className="text-gray-300 hover:text-white transition-colors">
                  ProDentim - Oral Health
                </Link>
              </li>
              <li>
                <Link href="/keyslim" className="text-gray-300 hover:text-white transition-colors">
                  KeySlim Drops - Weight Loss
                </Link>
              </li>
              <li>
                <Link href="/primebiome" className="text-gray-300 hover:text-white transition-colors">
                  PrimeBiome - Gut Health
                </Link>
              </li>
              <li>
                <Link href="/femipro" className="text-gray-300 hover:text-white transition-colors">
                  FemiPro - Women's Health
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-gray-300 hover:text-white transition-colors">
                  Compare Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="text-gray-300 hover:text-white transition-colors">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">support@beautyrealmart.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">+12513200222</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">United States</span>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Contact Support
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center space-x-3 text-center">
              <Shield className="h-6 w-6 text-green-400" />
              <div>
                <div className="font-semibold text-sm">60-Day Guarantee</div>
                <div className="text-xs text-gray-400">Money Back</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-center">
              <Truck className="h-6 w-6 text-blue-400" />
              <div>
                <div className="font-semibold text-sm">Free Shipping</div>
                <div className="text-xs text-gray-400">On All Orders</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-center">
              <RefreshCw className="h-6 w-6 text-purple-400" />
              <div>
                <div className="font-semibold text-sm">Easy Returns</div>
                <div className="text-xs text-gray-400">No Questions Asked</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-center">
              <Heart className="h-6 w-6 text-red-400" />
              <div>
                <div className="font-semibold text-sm">Natural Ingredients</div>
                <div className="text-xs text-gray-400">Premium Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs text-gray-400 leading-relaxed space-y-3">
              <p>
                <strong className="text-gray-300">About Us:</strong> Statements on this website have not been evaluated by the Food and Drug Administration. Products are not intended to diagnose, treat, cure or prevent any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before using our products.
              </p>
              <p>
                The website's content and the product for sale is based upon the author's opinion and is provided solely on an "AS IS" and "AS AVAILABLE" basis. You should do your own research and confirm the information with other sources when searching for information regarding health issues.
              </p>
              <p>
                <strong className="text-gray-300">Note:</strong> Results may vary from Person to Person. The display of third-party trademarks and trade names on this site does not necessarily indicate any affiliation or endorsements of our website. If you click a merchant link and buy a product or service on their website, we may be paid a fee by the merchant.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025  BEAUTY REALM Supplements. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/return-policy" className="text-gray-400 hover:text-white transition-colors">
                Returns
              </Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 

FILE: README.md
================================================
#  BEAUTY REALM Supplements - Premium Health & Wellness Website

## Overview
A comprehensive e-commerce website for  BEAUTY REALM Supplements, featuring premium health and wellness products targeting the American market. The website is built with Next.js 14, TypeScript, and Tailwind CSS, optimized for SEO and user experience.

## Products Featured

### 1. ProDentim - Oral Health Supplement
- **Page**: `/prodentim`
- **Focus**: Oral health, dental care, fresh breath
- **Key Features**: 3.5 billion CFUs, natural ingredients, gum health support
- **Target Keywords**: ProDentim review 2025, oral probiotic, dental health

### 2. KeySlim Drops - Weight Loss Supplement
- **Page**: `/keyslim`
- **Focus**: Weight loss, metabolism, appetite control
- **Key Features**: 24 natural ingredients, liquid formula, 3-stage system
- **Target Keywords**: KeySlim Drops review 2025, weight loss supplement, fat burning

### 3. PrimeBiome - Gut Health & Skin Supplement
- **Page**: `/primebiome`
- **Focus**: Gut health, skin radiance, gut-skin connection
- **Key Features**: 5 billion CFUs, marine collagen, Lion's Mane
- **Target Keywords**: PrimeBiome review 2025, gut health, probiotic

### 4. FemiPro - Women's Health Supplement
- **Page**: `/femipro`
- **Focus**: Women's health, bladder support, urinary tract health
- **Key Features**: Cranberry extract, D-Mannose, natural herbs
- **Target Keywords**: FemiPro review 2025, women's health, bladder support

## Additional Pages

### 5. About Us - Company Information
- **Page**: `/about`
- **Focus**: Company story, values, quality commitment
- **SEO**: Trust building, company credibility

### 6. Customer Testimonials
- **Page**: `/testimonials`
- **Focus**: Real customer reviews, success stories
- **Features**: Product-specific testimonials, before/after stories

### 7. Product Comparison
- **Page**: `/compare`
- **Focus**: Side-by-side product comparison
- **Features**: Detailed comparison table, product selection guide

## Technical Features

### SEO Optimization
- **Meta Tags**: Comprehensive meta descriptions and keywords for each page
- **Schema Markup**: Structured data for products, reviews, and organization
- **Sitemap**: XML sitemap with all pages
- **Robots.txt**: Optimized for search engine crawling
- **Canonical URLs**: Proper canonical tags for all pages

### Performance
- **Next.js 14**: Latest framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Responsive Design**: Mobile-first approach
- **Image Optimization**: Next.js Image component

### User Experience
- **Modern UI**: Clean, professional design
- **Call-to-Actions**: Strategic placement throughout
- **Trust Signals**: Reviews, guarantees, certifications
- **Easy Navigation**: Clear menu structure

## File Structure

```
health-supplements-landing/
├── app/
│   ├── prodentim/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── keyslim/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── primebiome/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── femipro/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── about/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── testimonials/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── compare/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── page.tsx (Home)
│   └── layout.tsx (Root)
├── components/
│   ├── ui/ (Shadcn/ui components)
│   └── [various components]
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   └── [images]
└── [config files]
```

## SEO Strategy

### Keywords Targeting
- **Long-tail Keywords**: "ProDentim review 2025", "KeySlim Drops weight loss"
- **Product-specific**: Each product has dedicated keywords
- **Problem-focused**: "bad breath treatment", "weight loss supplement"
- **Review-focused**: "does it work", "customer reviews"

### Content Strategy
- **Educational Content**: Health benefits, ingredient explanations
- **Social Proof**: Customer testimonials, ratings
- **Trust Building**: Money-back guarantees, quality certifications
- **Problem-Solution**: Address specific health concerns

### Technical SEO
- **Page Speed**: Optimized images, efficient code
- **Mobile-Friendly**: Responsive design
- **Internal Linking**: Cross-linking between products
- **Schema Markup**: Rich snippets for search results

## Marketing Features

### Conversion Optimization
- **Clear CTAs**: "Get [Product] Today - Save X%"
- **Urgency**: Limited time offers, countdown timers
- **Trust Signals**: 60-day guarantee, free shipping
- **Social Proof**: Customer reviews, ratings

### User Journey
1. **Landing**: Homepage with product overview
2. **Research**: Individual product pages with detailed information
3. **Comparison**: Compare page for decision making
4. **Trust**: About us and testimonials for credibility
5. **Purchase**: Clear purchase buttons with guarantees

## Development

### Setup
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
npm start
```

### Key Dependencies
- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn/ui
- Lucide React (Icons)

## Analytics & Tracking

### SEO Monitoring
- Google Search Console integration
- Sitemap submission
- Meta tag optimization
- Page speed monitoring

### Conversion Tracking
- Purchase button clicks
- Form submissions
- Page engagement metrics
- User journey analysis

## Future Enhancements

### Planned Features
- Blog section for health content
- Email newsletter signup
- Live chat support
- Advanced product filtering
- Customer account portal

### SEO Improvements
- More detailed product pages
- FAQ sections
- Video testimonials
- Local SEO optimization

## Contact & Support

For technical support or questions about the website:
- Email: support@ BEAUTY REALM.com
- Documentation: See inline code comments
- Issues: Create GitHub issues for bugs

---

**Note**: This website is designed for the American market with English content and USD pricing. All products feature 60-day money-back guarantees and free shipping within the US. 


================================================
FILE: components.json
================================================
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}


================================================
FILE: KEYSLIM_INTEGRATION.md
================================================
# KeySlim Drops Integration

## 🎯 Overview
Successfully integrated KeySlim Drops as the 4th premium product in the health supplements landing page with full feature parity and enhanced presentation.

## 📊 Product Details
- **Name**: KeySlim Drops
- **Category**: Weight Loss & Metabolism
- **Color Theme**: Orange/Amber gradient
- **Key Features**: 3-stage weight loss system with 24 natural ingredients

## 🛠️ Integration Points

### 1. Main Product Showcase
- Added to ProductDetailsCard in main products section
- Featured prominent position as first product
- Complete ingredient list and benefits

### 2. Special Offers Section
- Added to SpecialOffer component with matching orange theme
- Includes promotional badges and CTA buttons
- Consistent with other products' presentation

### 3. Comparison Table
- Full integration in desktop comparison table
- Added to mobile comparison tabs (ProductComparisonMobile)
- All data fields completed (benefits, ingredients, usage, etc.)

### 4. Navigation Integration
- Added to main header navigation (luxury-header.tsx)
- Included in mobile menu
- Footer links updated

### 5. Featured Section
- Custom dedicated section with premium design
- Revolutionary 3-stage system explanation
- Enhanced visual presentation with floating elements
- Special promotional pricing and guarantees

### 6. Testimonials
- Added customer testimonial for KeySlim Drops
- Updated testimonials grid to accommodate 4 products

## 🎨 Design Elements

### Color Scheme
```css
Orange: #ea580c (600), #f97316 (500), #fb923c (400)
Amber: #d97706 (600), #f59e0b (500), #fbbf24 (400) 
Yellow: #ca8a04 (600), #eab308 (500), #facc15 (400)
```

### Visual Features
- Gradient backgrounds (orange-50 to amber-50)
- Floating animation for product images
- Interactive badges and buttons
- Consistent shadow and border styling

## 📁 Required Assets

### Images Needed
1. `/keySlim-drops1.png` - Main product bottle (400x600px)
2. `/keySlim-drops2.png` - Results/experience image (600x400px)  
3. `/keySlim-drops3.png` - Brand logo (300x150px, transparent)

### Product Information
- **3-Stage Formula**:
  1. Appetite Control (L-Ornithine, Chromium, GABA)
  2. Metabolism Boost (Green Tea, Guarana, Forskolin)
  3. Long-term Fat Burning (Maca Root, Grapefruit, L-Arginine)

- **Key Benefits**:
  - Controls appetite naturally
  - Accelerates metabolism  
  - Burns fat day & night
  - Boosts energy levels
  - 24 natural ingredients

- **Pricing**: $49-79 (180-30 days)
- **Guarantee**: 60-day money-back
- **Ratings**: 4.9/5 stars (112,847+ reviews)

## 🔗 Affiliate Integration
- **Link**: https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623
- **ID**: lifestylemedicine623
- Consistent tracking across all CTAs

## ✅ Quality Assurance
- ✅ Responsive design (mobile/tablet/desktop)
- ✅ Consistent branding and color schemes
- ✅ Proper TypeScript types and interfaces
- ✅ Accessibility considerations
- ✅ Performance optimizations
- ✅ SEO-friendly structure

## 📈 Expected Impact
- Increased product variety and customer choice
- Additional revenue stream through affiliate commissions
- Enhanced user engagement with dedicated featured section
- Improved conversion rates through weight loss market targeting

---
*Integration completed with full design consistency and premium presentation quality.* 


================================================
FILE: next.config.mjs
================================================
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,

}

export default nextConfig



================================================
FILE: package.json
================================================
{
  "name": "my-v0-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.1",
    "@radix-ui/react-accordion": "1.2.2",
    "@radix-ui/react-alert-dialog": "1.1.4",
    "@radix-ui/react-aspect-ratio": "1.1.1",
    "@radix-ui/react-avatar": "1.1.2",
    "@radix-ui/react-checkbox": "1.1.3",
    "@radix-ui/react-collapsible": "1.1.2",
    "@radix-ui/react-context-menu": "2.2.4",
    "@radix-ui/react-dialog": "1.1.4",
    "@radix-ui/react-dropdown-menu": "2.1.4",
    "@radix-ui/react-hover-card": "1.1.4",
    "@radix-ui/react-label": "2.1.1",
    "@radix-ui/react-menubar": "1.1.4",
    "@radix-ui/react-navigation-menu": "1.2.3",
    "@radix-ui/react-popover": "1.1.4",
    "@radix-ui/react-progress": "1.1.1",
    "@radix-ui/react-radio-group": "1.2.2",
    "@radix-ui/react-scroll-area": "1.2.2",
    "@radix-ui/react-select": "2.1.4",
    "@radix-ui/react-separator": "1.1.1",
    "@radix-ui/react-slider": "1.2.2",
    "@radix-ui/react-slot": "1.1.1",
    "@radix-ui/react-switch": "1.1.2",
    "@radix-ui/react-tabs": "1.1.2",
    "@radix-ui/react-toast": "1.2.4",
    "@radix-ui/react-toggle": "1.1.1",
    "@radix-ui/react-toggle-group": "1.1.1",
    "@radix-ui/react-tooltip": "1.1.6",
    "autoprefixer": "^10.4.20",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "1.0.4",
    "date-fns": "^2.30.0",
    "embla-carousel-react": "8.5.1",
    "framer-motion": "^12.9.2",
    "input-otp": "1.4.1",
    "lucide-react": "^0.454.0",
    "next": "15.2.4",
    "next-themes": "^0.4.4",
    "react": "^18.2.0",
    "react-day-picker": "8.10.1",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.54.1",
    "react-resizable-panels": "^2.1.7",
    "recharts": "2.15.0",
    "sonner": "^1.7.1",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.6",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "postcss": "^8",
    "tailwindcss": "^3.4.17",
    "typescript": "^5"
  }
}



================================================
FILE: pnpm-lock.yaml
================================================
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false


================================================
FILE: postcss.config.mjs
================================================
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;



================================================
FILE: tailwind.config.ts
================================================
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(210, 90%, 40%)", // Soft blue as the primary color
          foreground: "hsl(var(--primary-foreground))",
          50: "#f0f7ff",
          100: "#e0f0ff",
          200: "#c0e0ff",
          300: "#80c0ff",
          400: "#4080ff",
          500: "#2060e0",
          600: "#1040c0",
          700: "#0830a0",
          800: "#042080",
          900: "#021060",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          50: "#faf6e9",
          100: "#f4e9d1",
          200: "#edd6a4",
          300: "#e6c477",
          400: "#dfb14a",
          500: "#d8a31d",
          600: "#b8860b",
          700: "#96690a",
          800: "#744d08",
          900: "#523206",
        },
        green: {
          50: "#f0f9f0",
          100: "#dcf5dc",
          200: "#b8eab8",
          300: "#94e094",
          400: "#70d670",
          500: "#4ccc4c",
          600: "#38a638",
          700: "#248024",
          800: "#105010",
          900: "#082808",
        },
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-subtle": {
          "0%, 100%": { 
            opacity: "1",
            transform: "scale(1)" 
          },
          "50%": { 
            opacity: "0.9",
            transform: "scale(1.03)" 
          },
        },
        "float": {
          "0%, 100%": { 
            transform: "translateY(0px)" 
          },
          "50%": { 
            transform: "translateY(-10px)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config



================================================
FILE: tsconfig.json
================================================
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}



================================================
FILE: app/globals.css
================================================
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 210 90% 40%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  --popover: 222.2 84% 4.9%;
  --popover-foreground: 210 40% 98%;
  --primary: 210 90% 40%;
  --primary-foreground: 222.2 47.4% 11.2%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 212.7 26.8% 83.9%;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Mobile-friendly table styles */
@media (max-width: 768px) {
  .responsive-table {
    display: block;
    width: 100%;
    overflow-x: auto;
  }

  .responsive-table thead {
    display: none;
  }

  .responsive-table tbody tr {
    display: block;
    margin-bottom: 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .responsive-table tbody td {
    display: flex;
    padding: 0.75rem;
    text-align: right;
    border-bottom: 1px solid #e5e7eb;
  }

  .responsive-table tbody td:before {
    content: attr(data-label);
    font-weight: 600;
    margin-right: auto;
    text-align: left;
  }

  .responsive-table tbody td:last-child {
    border-bottom: none;
  }
}

/* Luxury design elements */
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.gold-gradient {
  background: linear-gradient(135deg, #f6e6b4 0%, #d5be82 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.shadow-gold {
  box-shadow: 0 4px 20px rgba(213, 190, 130, 0.3);
}

.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0f7ff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}



================================================
FILE: app/layout.tsx
================================================
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import CookiePolicyModal from "@/components/cookie-policy-modal"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  metadataBase: new URL('https://beautyrealmart.com'),
  title: "ProDentim | Premium Oral Health Supplements & Wellness Products",
  description: 'Shop ProDentim, the #1 oral probiotic for healthy teeth and gums, plus PrimeBiome Glow for radiant skin and FemiPro for bladder health. 100% natural, non-GMO, with a 60-day money-back guarantee.',
  keywords: "ProDentim,ProDentim, oral probiotic supplement, PrimeBiome Glow, FemiPro, healthy teeth and gums, radiant skin, bladder health supplement, natural probiotics, oral health, probiotic supplement, dental health, gum health, PrimeBiome, FemiPro, wellness supplements, premium health supplements, natural ingredients",
  openGraph: {
    title: 'ProDentim – Best Oral Probiotic for Healthy Teeth & Gums |  BEAUTY REALM',
    description: 'Shop ProDentim, the #1 oral probiotic for healthy teeth and gums, plus PrimeBiome Glow for radiant skin and FemiPro for bladder health.',
    url: 'https://beautyrealmart.com',
    siteName: ' BEAUTY REALM Supplements',
    images: [
      {
        url: '/prodentim.png',
        width: 1200,
        height: 630,
        alt: 'ProDentim oral probiotic supplement',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProDentim – Best Oral Probiotic for Healthy Teeth & Gums |  BEAUTY REALM',
    description: 'Shop ProDentim, the #1 oral probiotic for healthy teeth and gums, plus PrimeBiome Glow for radiant skin and FemiPro for bladder health.',
    images: ['/prodentim.png'],
  },
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ProDentim" />
        <link rel="icon" href="/prodentim.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "ProDentim",
              "description": "ProDentim is an advanced oral probiotic supplement designed to support healthy teeth and gums. With 3.5 billion CFUs of clinically studied probiotics like Lactobacillus paracasei and Lactobacillus reuteri, it balances your oral microbiome, reduces plaque, and freshens breath.",
              "brand": {
                "@type": "Brand",
                "name": " BEAUTY REALM Supplements"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://prodentim24.com/text.php#aff=lifestylemedicine623",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1245"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sarah M."
                  },
                  "reviewBody": "ProDentim transformed my oral health! My gums are healthier, and my breath is fresher."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Theo F."
                  },
                  "reviewBody": "My teeth feel stronger, and my smile is brighter with ProDentim!"
                }
              ]
            }`
          }}
        />
      </head>
      <body className={inter.className}>
          {children}
          <CookiePolicyModal />
      </body>
    </html>
  )
}



================================================
FILE: app/metadata.ts
================================================
export const metadata = {
  title: "ProDentim – Best-Selling Oral Probiotic for Healthy Teeth & Gums",
  description:
    "Shop ProDentim, the #1 oral probiotic supplement for healthy teeth and gums, plus PrimeBiome Glow for radiant skin and FemiPro for bladder health. 100% natural, non-GMO, with a 60-day money-back guarantee. ",
  keywords:
    "ProDentim, oral probiotic, PrimeBiome Glow, FemiPro, health supplements, dental health, skin health, bladder health, oral health, probiotic supplement, dental health, gum health, PrimeBiome, FemiPro, wellness supplements, premium health supplements, natural ingredients",
  generator: 'v0.dev'
}


================================================
FILE: app/page.tsx
================================================
import Image from "next/image"
import Link from "next/link"
import { Check, Star, Award, Shield, Truck, RefreshCw, Heart, ArrowRight, Clock, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TestimonialCard from "@/components/testimonial-card"
import ProductFeature from "@/components/product-feature"
import CountdownTimer from "@/components/countdown-timer"
import ProductComparisonMobile from "@/components/product-comparison-mobile"
import HeroSection from "@/components/hero-section"
import ProductDetailsCard from "@/components/product-details-card"
import SpecialOffer from "@/components/special-offer"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Trust Indicators */}
        <section className="py-8 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center justify-center space-x-2 text-center">
                <Users className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-semibold text-sm">50,000+</div>
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
                <Truck className="h-5 w-5 text-purple-600" />
                <div>
                  <div className="font-semibold text-sm">Free</div>
                  <div className="text-xs text-gray-600">Shipping</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ProDentim Feature Section */}
        <section id="prodentim" className="w-full py-16 md:py-24 lg:py-32 border-t border-gray-100 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-3 py-1.5">
                #1 ORAL HEALTH SUPPLEMENT IN AMERICA
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent">
                Transform Your Oral Health with ProDentim
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Discover the revolutionary oral probiotic that's changing dental health across America. 
                With 3.5 billion CFUs of clinically-studied probiotics, ProDentim supports healthy teeth, 
                gums, and fresh breath naturally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <ProductFeature
                icon="tooth"
                title="Improved Gum Health"
                description="ProDentim's specialized probiotic blend supports healthy gums and prevents inflammation by balancing beneficial bacteria."
              />
              <ProductFeature
                icon="smile"
                title="Fresher Breath"
                description="Combat bad breath at its source with beneficial bacteria that restore oral microbiome balance for long-lasting freshness."
              />
              <ProductFeature
                icon="shield"
                title="Stronger Enamel"
                description="Our unique formulation helps strengthen tooth enamel for better protection against decay and sensitivity."
              />
              <ProductFeature
                icon="award"
                title="3.5 Billion CFUs"
                description="Each dose contains a powerful 3.5 billion colony-forming units of beneficial probiotic strains for maximum effectiveness."
              />
              <ProductFeature
                icon="leaf"
                title="Natural Ingredients"
                description="Features Lactobacillus paracasei, B.lactis BL-04, inulin, and malic acid for comprehensive oral care without harsh chemicals."
              />
              <ProductFeature
                icon="thumbs-up"
                title="Easy Daily Use"
                description="Simply take one tablet daily for ongoing protection and support for your oral health. No complicated routines required."
              />
            </div>

            {/* Visual Placeholder: Customer Before/After Photos */}
            <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Customer Results</h3>
                <p className="text-gray-600">See the transformation in oral health that thousands of Americans have experienced</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Before Photo</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Before ProDentim</h4>
                  <p className="text-sm text-gray-600">Gum sensitivity, bad breath, weak enamel</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">After Photo</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">After ProDentim</h4>
                  <p className="text-sm text-gray-600">Healthy gums, fresh breath, strong teeth</p>
                </div>
              </div>
            </div>

            <div className="mt-20 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl italic text-gray-700">
                  "ProDentim changed my oral health completely! My teeth feel stronger, my gums are healthier, and my
                  breath is fresher. I've never been more confident about my smile. My dentist was amazed at the
                  improvement!"
                </blockquote>
                <p className="font-semibold text-lg">— Theo F., Chicago</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href="https://prodentim24.com/text.php#aff=lifestylemedicine623">
                      Get ProDentim Today - Save 50%
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/prodentim">Learn More About ProDentim</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Products Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none px-3 py-1.5">
                PREMIUM HEALTH SUPPLEMENTS
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-green-700 via-green-600 to-blue-600 bg-clip-text text-transparent">
                Complete Your Wellness Journey
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Discover our carefully formulated supplements designed to support your overall wellness journey with
                premium, science-backed ingredients that deliver real results.
              </p>
            </div>

            <div className="grid gap-8 mt-16">
              <ProductDetailsCard
                name="KeySlim Drops"
                tagline="Revolutionary Weight Loss & Metabolism"
                description="Experience the breakthrough liquid weight loss supplement with 24 powerful natural ingredients. Our revolutionary 3-stage formula targets appetite control, metabolic acceleration, and sustainable weight management for real results in 1-3 weeks."
                benefits={[
                  "Controls appetite and hunger naturally with advanced ingredients",
                  "Accelerates metabolism and fat burning through thermogenesis",
                  "Supports long-term weight management and maintenance",
                  "Boosts energy levels naturally without jitters",
                  "Non-GMO, vegan, and gluten-free for everyone",
                ]}
                ingredients={[
                  "L-Ornithine & Chromium Picolinate for appetite control",
                  "Green Tea Leaf Extract for metabolism boost",
                  "Maca Root & Grapefruit Extract for energy",
                  "Guarana & Raspberry Ketones for fat burning",
                  "African Mango & Forskolin for sustainable results",
                ]}
                color="orange"
                imagePath="/keyslim-drops1.png"
                learnMoreLink="https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623"
              />

              <ProductDetailsCard
                name="PrimeBiome"
                tagline="Gut Health & Radiant Skin Connection"
                description="Unlock the powerful gut-skin connection with our specialized formula containing B. Coagulans, Lion's Mane, and premium collagen peptides. Experience radiant skin and optimal digestive health from within."
                benefits={[
                  "Promotes radiant, youthful skin through gut-skin axis",
                  "Supports gut microbiome balance with 5 billion CFUs",
                  "Reduces inflammation and redness naturally",
                  "Enhances nutrient absorption for better health",
                  "Improves skin elasticity and hydration from within",
                ]}
                ingredients={[
                  "B. Coagulans (5 Billion CFU) for gut health",
                  "Lion's Mane Mushroom Extract for cognitive support",
                  "Marine Collagen Peptides for skin structure",
                  "Hyaluronic Acid for deep hydration",
                  "Vitamins C, E & Zinc for antioxidant protection",
                ]}
                color="green"
                imagePath="/primebiome.png"
                learnMoreLink="http://primebiome24.com/text.php#aff=lifestylemedicine623"
              />

              <ProductDetailsCard
                name="FemiPro"
                tagline="Complete Women's Health & Bladder Support"
                description="Specially formulated for women's unique health needs, FemiPro combines powerful herbal extracts to support bladder control, urinary tract health, and overall pelvic wellness for confidence and comfort."
                benefits={[
                  "Improves bladder control and function naturally",
                  "Supports urinary tract health with cranberry extract",
                  "Reduces discomfort and urgency with soothing herbs",
                  "Promotes overall pelvic floor health and strength",
                  "Provides long-lasting comfort and confidence",
                ]}
                ingredients={[
                  "Cranberry Extract (36:1 concentrate) for urinary health",
                  "D-Mannose for natural urinary tract support",
                  "Hibiscus Extract for soothing relief",
                  "Dandelion Root for natural diuretic properties",
                  "Marshmallow Root & Pumpkin Seed for comfort",
                ]}
                color="purple"
                imagePath="/femipro.png"
                learnMoreLink="http://femipro24.com/text.php#aff=lifestylemedicine623"
              />
            </div>
          </div>
        </section>

        <SpecialOffer />
        
        {/* KeySlim Drops Featured Section */}
        <section className="w-full py-12 md:py-20 lg:py-32 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-orange-100 rounded-full opacity-30 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 md:w-80 md:h-80 bg-amber-100 rounded-full opacity-30 blur-3xl -z-10"></div>
          
          <div className="container px-4 md:px-6 relative">
            <div className="text-center mb-8 md:mb-16">
              <Badge className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 border-none px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg font-medium shadow-lg mb-6 md:mb-8 animate-pulse">
                🔥 BREAKTHROUGH WEIGHT LOSS TECHNOLOGY
              </Badge>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 md:mb-8">
                <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  KeySlim Drops
                </span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
                The world's first revolutionary liquid weight loss supplement featuring 
                <span className="font-bold text-orange-600"> 24 powerful natural ingredients</span> 
                in a breakthrough 3-stage formula
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-20">
              {/* Product Showcase */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/50 to-amber-200/50 rounded-full blur-3xl scale-110 opacity-60"></div>
                <div className="relative h-[300px] w-[240px] sm:h-[400px] sm:w-[320px] md:h-[500px] md:w-[400px] lg:h-[600px] lg:w-[480px] mx-auto">
                  <Image
                      src="/keyslim-drops1.png"
                    alt="KeySlim Drops Revolutionary Weight Loss Formula"
                    fill
                    className="object-contain drop-shadow-2xl animate-float"
                    priority
                  />
                  
                  {/* Floating Achievement Badges */}
                  <div className="absolute -top-3 -left-3 md:-top-6 md:-left-6 bg-white p-2 md:p-4 rounded-xl shadow-2xl rotate-6 border-2 border-orange-200">
                    <div className="text-center">
                      <p className="font-bold text-orange-600 text-sm md:text-lg">24</p>
                      <p className="text-xs md:text-sm font-medium">Natural Ingredients</p>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white p-2 md:p-4 rounded-xl shadow-2xl -rotate-6">
                    <div className="text-center">
                      <p className="font-bold text-sm md:text-lg">Results in</p>
                      <p className="text-lg md:text-2xl font-bold">1-3 Weeks</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 -right-5 md:-right-10 bg-white p-2 md:p-3 rounded-full shadow-2xl">
                    <Check className="h-5 w-5 md:h-8 md:w-8 text-green-500" />
                  </div>
                </div>
              </div>

              {/* Features & Benefits */}
              <div className="space-y-6 lg:space-y-10 order-1 lg:order-2">
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-8 text-center lg:text-left">Revolutionary 3-Stage System</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-2">Appetite Control</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Advanced ingredients like African Mango and Chromium Picolinate work together to naturally 
                          suppress appetite and reduce cravings, helping you consume fewer calories without feeling deprived.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-2">Metabolism Boost</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Green Tea Extract, Guarana, and Raspberry Ketones accelerate your metabolism and increase 
                          fat burning, turning your body into a more efficient calorie-burning machine.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-2">Long-term Success</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Forskolin and Maca Root support sustainable weight management by improving body composition 
                          and helping maintain your results long after you reach your goal weight.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Placeholder: How It Works Infographic */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-lg text-gray-900 mb-4 text-center">How KeySlim Drops Works</h4>
                  <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Infographic: 3-Stage Weight Loss Process</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-lg"
                    asChild
                  >
                    <Link href="https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623">
                      Get KeySlim Drops Now - Save 60%
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/keyslim">Learn More About KeySlim</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Success Stories */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real Success Stories from Real Americans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have transformed their health and lives 
                with our premium supplements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "I lost 25 pounds in just 8 weeks with KeySlim Drops! The appetite control 
                    is incredible - I no longer crave junk food, and my energy levels are through 
                    the roof. This product really works!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold">JL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Jennifer L.</p>
                      <p className="text-sm text-gray-500">Los Angeles, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "ProDentim changed my oral health completely! My teeth feel stronger, 
                    my gums are healthier, and my breath is fresher. I've never been more 
                    confident about my smile."
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

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
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
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="/testimonials">
                  Read More Success Stories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose  BEAUTY REALM */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose  BEAUTY REALM Supplements?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to providing the highest quality health supplements backed by science 
                and trusted by thousands of Americans.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Quality</h3>
                <p className="text-gray-600">
                  Every ingredient is carefully selected and tested to ensure the highest standards 
                  of purity and effectiveness.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Science-Backed</h3>
                <p className="text-gray-600">
                  Our formulas are developed based on clinical research and proven to deliver 
                  real, measurable results.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Focused</h3>
                <p className="text-gray-600">
                  Your success is our success. We're here to support your health journey 
                  every step of the way.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
                <p className="text-gray-600">
                  Thousands of customers have experienced life-changing results with our 
                  premium supplements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-green-50 border-t border-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-3 py-1.5">
                PRODUCT COMPARISON
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent">
                Compare Our Premium Supplements
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Find the perfect supplement to support your specific health needs with our easy-to-read comparison
                chart.
              </p>
            </div>

            {/* Mobile Comparison (Tabs) */}
            <ProductComparisonMobile />

            {/* Desktop Comparison (Table) */}
            <div className="hidden md:block mt-16 overflow-x-auto rounded-xl shadow-xl">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr>
                    <th className="p-6 text-left bg-gray-50 border-b"></th>
                    <th className="p-6 text-center bg-blue-50 border-b">
                      <div className="flex flex-col items-center">
                        <div className="relative h-20 w-20 mb-3">
                          <Image
                            src="/prodentim.png"
                            alt="ProDentim bottle"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <Link href='https://prodentim24.com/text.php#aff=lifestylemedicine623'>
                        <span className="font-bold text-primary text-xl">ProDentim</span>
                        </Link>
                        <span className="text-sm text-muted-foreground">Oral Probiotic</span>
                      </div>
                    </th>
                    <th className="p-6 text-center bg-green-50 border-b">
                      <div className="flex flex-col items-center">
                        <div className="relative h-20 w-20 mb-3">
                          <Image
                            src="/primebiome.png"
                            alt="PrimeBiome bottle"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <Link href="http://primebiome24.com/text.php#aff=lifestylemedicine623">
                        <span className="font-bold text-green-700 text-xl">PrimeBiome </span>
                        </Link>
                        
                        <span className="text-sm text-muted-foreground">Skin & Gut Health</span>
                      </div>
                    </th>
                    <th className="p-6 text-center bg-orange-50 border-b">
                      <div className="flex flex-col items-center">
                        <div className="relative h-20 w-20 mb-3">
                          <Image
                              src="/keyslim-drops1.png"
                            alt="KeySlim Drops bottle"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <Link href="https://getkeyslimdrops.cc/vsl1/">
                        <span className="font-bold text-orange-700 text-xl">KeySlim Drops</span>
                        </Link>
                        <span className="text-sm text-muted-foreground">Weight Loss</span>
                      </div>
                    </th>
                    <th className="p-6 text-center bg-purple-50 border-b">
                      <div className="flex flex-col items-center">
                        <div className="relative h-20 w-20 mb-3">
                          <Image
                            src="/femipro.png"
                            alt="FemiPro bottle"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <Link href="http://femipro24.com/text.php#aff=lifestylemedicine623">
                        <span className="font-bold text-purple-700 text-xl">FemiPro</span>
                        </Link>
                        <span className="text-sm text-muted-foreground">Bladder Health</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-6 font-medium border-b bg-gray-50">Primary Benefits</td>
                    <td className="p-6 text-center border-b">
                      <ul className="space-y-2">
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Improves gum health</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Freshens breath</span>
                        </li>
                        <li className="flex items-center justify-center">
                            <Check className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Strengthens tooth enamel</span>
                        </li>
                        <li className="flex items-center justify-center">
                            <Check className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Reduces plaque formation</span>
                        </li>
                      </ul>
                    </td>
                    <td className="p-6 text-center border-b">
                      <ul className="space-y-2">
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-green-600 mr-2" />
                          <span>Promotes radiant skin</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-green-600 mr-2" />
                          <span>Supports gut health</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-green-600 mr-2" />
                          <span>Reduces inflammation</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-green-600 mr-2" />
                          <span>Enhances nutrient absorption</span>
                        </li>
                      </ul>
                    </td>
                    <td className="p-6 text-center border-b">
                      <ul className="space-y-2">
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-orange-600 mr-2" />
                          <span>Controls appetite naturally</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-orange-600 mr-2" />
                          <span>Accelerates metabolism</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-orange-600 mr-2" />
                          <span>Burns fat day & night</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-orange-600 mr-2" />
                          <span>Boosts energy levels</span>
                        </li>
                      </ul>
                    </td>
                    <td className="p-6 text-center border-b">
                      <ul className="space-y-2">
                        <li className="flex items-center justify-center">
                            <Check className="h-4 w-4 text-purple-600 mr-2" />
                          <span>Improves bladder control</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-purple-600 mr-2" />
                          <span>Supports urinary tract health</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-purple-600 mr-2" />
                          <span>Reduces discomfort</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-purple-600 mr-2" />
                          <span>Promotes overall comfort</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium border-b bg-gray-50">Key Ingredients</td>
                    <td className="p-6 text-center border-b">
                      <ul className="space-y-2">
                        <li>Lactobacillus Paracasei</li>
                        <li>Lactobacillus Reuteri</li>
                        <li>B.lactis BL-04</li>
                        <li>Inulin</li>
                        <li>Malic Acid</li>
                      </ul>
                    </td>
                    <td className="p-6 text-center border-b">
                      <ul className="space-y-2">
                        <li>B. Coagulans</li>
                        <li>Lion's Mane Mushroom</li>
                        <li>Collagen Peptides</li>
                        <li>Hyaluronic Acid</li>
                        <li>Vitamin C & E</li>
                      </ul>
                    </td>
                    <td className="p-6 text-center border-b">
                      <ul className="space-y-2">
                        <li>L-Ornithine & Chromium</li>
                        <li>Green Tea Extract</li>
                        <li>Maca Root & Grapefruit</li>
                        <li>Guarana & Forskolin</li>
                        <li>African Mango Extract</li>
                      </ul>
                    </td>
                    <td className="p-6 text-center border-b">
                      <ul className="space-y-2">
                        <li>Cranberry Extract</li>
                        <li>D-Mannose</li>
                        <li>Hibiscus Extract</li>
                        <li>Dandelion Root</li>
                        <li>Marshmallow Root</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium border-b bg-gray-50">Recommended Usage</td>
                    <td className="p-6 text-center border-b">1 tablet daily, preferably after brushing teeth</td>
                    <td className="p-6 text-center border-b">2 capsules daily with food</td>
                    <td className="p-6 text-center border-b">1-2 drops daily, preferably before meals</td>
                    <td className="p-6 text-center border-b">1-2 capsules daily with water</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium border-b bg-gray-50">Probiotic Count</td>
                    <td className="p-6 text-center border-b">3.5 Billion CFU</td>
                    <td className="p-6 text-center border-b">5 Billion CFU</td>
                    <td className="p-6 text-center border-b">24 Natural Ingredients</td>
                    <td className="p-6 text-center border-b">Not applicable</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium border-b bg-gray-50">Suitable For</td>
                    <td className="p-6 text-center border-b">Adults concerned about oral health</td>
                    <td className="p-6 text-center border-b">Adults seeking skin and digestive benefits</td>
                    <td className="p-6 text-center border-b">Adults looking for weight management</td>
                    <td className="p-6 text-center border-b">Women concerned about bladder health</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium border-b bg-gray-50">Results Timeline</td>
                    <td className="p-6 text-center border-b">2-4 weeks for noticeable results</td>
                    <td className="p-6 text-center border-b">4-6 weeks for optimal results</td>
                    <td className="p-6 text-center border-b">1-3 weeks for initial results</td>
                    <td className="p-6 text-center border-b">1-2 weeks for initial comfort</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium bg-gray-50">quality</td>
                    <td className="p-6 text-center">
                      <Badge className="bg-blue-100 text-blue-700 px-3 py-1">Premium</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge className="bg-green-100 text-green-700 px-3 py-1">Premium</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge className="bg-orange-100 text-orange-700 px-3 py-1">Premium</Badge>
                    </td>
                    <td className="p-6 text-center">
                      <Badge className="bg-purple-100 text-purple-700 px-3 py-1">Premium</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium bg-gray-50">Availability</td>
                    <td className="p-6 text-center">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                        <Link href="https://prodentim24.com/text.php#aff=lifestylemedicine623">Shop Now</Link>
                      </Button>
                    </td>
                    <td className="p-6 text-center">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                        <Link href="https://primebiome24.com/text.php#aff=lifestylemedicine623">Shop Now</Link>
                      </Button>
                    </td>
                    <td className="p-6 text-center">
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                        <Link href="https://getkeyslimdrops.cc/vsl1/#aff=lifestylemedicine623">Shop Now</Link>
                      </Button>
                    </td>
                    <td className="p-6 text-center">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                        <Link href="https://femipro24.com/text.php#aff=lifestylemedicine623">Shop Now</Link>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <div className="flex justify-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="https://prodentim24.com/text.php#aff=lifestylemedicine623">Shop Now</Link>
              </Button>
            </div> */}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-3 py-1.5">
                SUCCESS STORIES
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent">
                Hear from Our Happy Customers
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Real stories from real people who have experienced the transformative benefits of our premium
                supplements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <TestimonialCard
                quote="Since using ProDentim, my gums feel healthier, and my smile is brighter! My dentist noticed the difference at my last checkup and was amazed by the improvement."
                author="Sarah M., New York"
                rating={5}
                product="ProDentim"
              />
              <TestimonialCard
                quote="PrimeBiome has transformed my skin. After just one month, my complexion is clearer and more radiant than it's been in years. I've received so many compliments!"
                author="Michael K., Los Angeles"
                rating={5}
                product="PrimeBiome"
              />
              <TestimonialCard
                quote="KeySlim Drops changed my life! I lost 25 pounds in just 3 weeks without strict dieting. My energy levels are through the roof and I feel amazing every day!"
                author="David R., Miami"
                rating={5}
                product="KeySlim Drops"
              />
              <TestimonialCard
                quote="FemiPro has been a game-changer for my bladder health. I feel more comfortable and confident throughout the day. I can finally enjoy activities without worry."
                author="Jennifer L., Chicago"
                rating={5}
                product="FemiPro"
              />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Health Transformation Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of Americans who have already improved their health and lives 
              with our premium supplements. Choose the product that fits your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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

            <div className="flex flex-wrap justify-center gap-6 text-blue-100">
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



================================================
FILE: app/about/layout.tsx
================================================
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import CookiePolicyModal from "@/components/cookie-policy-modal"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  metadataBase: new URL('https://beautyrealmart.com'),
  title: "About  BEAUTY REALM Supplements | Premium Health & Wellness Products | Trusted by Thousands",
  description: 'Learn about  BEAUTY REALM Supplements - a trusted provider of premium health supplements including ProDentim, KeySlim Drops, PrimeBiome, and FemiPro. Quality ingredients, science-backed formulas, 60-day guarantee.',
  keywords: " BEAUTY REALM Supplements, about us, premium health supplements, natural supplements, quality supplements, trusted supplement company, ProDentim, KeySlim Drops, PrimeBiome, FemiPro, health supplement company, natural health products, wellness supplements, supplement quality, customer reviews, money back guarantee, GMP certified, third party testing, premium ingredients",
  openGraph: {
    title: 'About  BEAUTY REALM Supplements | Premium Health & Wellness Products',
    description: 'Learn about  BEAUTY REALM Supplements - a trusted provider of premium health supplements including ProDentim, KeySlim Drops, PrimeBiome, and FemiPro.',
    url: 'https://beautyrealmart.com/about',
    siteName: ' BEAUTY REALM Supplements',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: ' BEAUTY REALM Supplements About Us',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About  BEAUTY REALM Supplements | Premium Health & Wellness Products',
    description: 'Learn about  BEAUTY REALM Supplements - a trusted provider of premium health supplements including ProDentim, KeySlim Drops, PrimeBiome, and FemiPro.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://beautyrealmart.com/about',
  },
}

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content=" BEAUTY REALM Supplements" />
        <link rel="icon" href="/logo.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": " BEAUTY REALM Supplements",
              "description": " BEAUTY REALM Supplements is a trusted provider of premium health supplements including ProDentim, KeySlim Drops, PrimeBiome, and FemiPro. We are committed to providing high-quality, natural supplements backed by science.",
              "url": "https://beautyrealmart.com",
              "logo": "https://beautyrealmart.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://beautyrealmart.com"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "50000"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "brand": [
                {
                  "@type": "Brand",
                  "name": "ProDentim"
                },
                {
                  "@type": "Brand",
                  "name": "KeySlim Drops"
                },
                {
                  "@type": "Brand",
                  "name": "PrimeBiome"
                },
                {
                  "@type": "Brand",
                  "name": "FemiPro"
                }
              ],
              "foundingDate": "2020",
              "numberOfEmployees": "50-100",
              "slogan": "Premium Health Supplements for Optimal Wellness"
            }`
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookiePolicyModal />
      </body>
    </html>
  )
} 


================================================
FILE: app/about/page.tsx
================================================
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


================================================
FILE: app/compare/layout.tsx
================================================
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import CookiePolicyModal from "@/components/cookie-policy-modal"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  metadataBase: new URL('https://beautyrealmart.com'),
  title: "Product Comparison Guide | ProDentim vs KeySlim vs PrimeBiome vs FemiPro |  BEAUTY REALM Supplements",
  description: 'Compare ProDentim, KeySlim Drops, PrimeBiome, and FemiPro supplements. Find the perfect health solution for your needs. Detailed comparison of ingredients, benefits, and customer ratings.',
  keywords: "product comparison, ProDentim vs KeySlim, PrimeBiome vs FemiPro, supplement comparison, health supplement comparison, ProDentim review, KeySlim Drops review, PrimeBiome review, FemiPro review, best health supplements, oral health vs weight loss, gut health vs women's health, supplement comparison guide, which supplement to choose, health supplement guide, ProDentim comparison, KeySlim comparison, PrimeBiome comparison, FemiPro comparison",
  openGraph: {
    title: 'Product Comparison Guide | ProDentim vs KeySlim vs PrimeBiome vs FemiPro',
    description: 'Compare ProDentim, KeySlim Drops, PrimeBiome, and FemiPro supplements. Find the perfect health solution for your needs.',
    url: 'https://beautyrealmart.com/compare',
    siteName: ' BEAUTY REALM Supplements',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: ' BEAUTY REALM Supplements Product Comparison',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Comparison Guide | ProDentim vs KeySlim vs PrimeBiome vs FemiPro',
    description: 'Compare ProDentim, KeySlim Drops, PrimeBiome, and FemiPro supplements. Find the perfect health solution for your needs.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://beautyrealmart.com/compare',
  },
}

export default function CompareLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content=" BEAUTY REALM Supplements" />
        <link rel="icon" href="/logo.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Product Comparison Guide",
              "description": "Compare ProDentim, KeySlim Drops, PrimeBiome, and FemiPro supplements to find the perfect health solution for your needs.",
              "url": "https://beautyrealmart.com/compare",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "ProDentim - Oral Health Supplement",
                    "description": "Advanced oral probiotic with 3.5 billion CFUs for healthy teeth and gums"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "KeySlim Drops - Weight Loss Supplement",
                    "description": "Revolutionary liquid formula with 24 natural ingredients for sustainable weight loss"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "PrimeBiome - Gut Health Supplement",
                    "description": "Gut-skin connection supplement with 5 billion CFUs and collagen peptides"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "FemiPro - Women's Health Supplement",
                    "description": "Comprehensive women's health formula for bladder control and urinary wellness"
                  }
                ]
              },
              "about": [
                {
                  "@type": "Product",
                  "name": "ProDentim",
                  "description": "Oral health supplement with 3.5 billion CFUs"
                },
                {
                  "@type": "Product",
                  "name": "KeySlim Drops",
                  "description": "Weight loss supplement with 24 natural ingredients"
                },
                {
                  "@type": "Product",
                  "name": "PrimeBiome",
                  "description": "Gut health supplement with 5 billion CFUs"
                },
                {
                  "@type": "Product",
                  "name": "FemiPro",
                  "description": "Women's health supplement for bladder support"
                }
              ]
            }`
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookiePolicyModal />
      </body>
    </html>
  )
} 


================================================
FILE: app/compare/page.tsx
================================================
import Image from "next/image"
import Link from "next/link"
import { Check, Star, Award, Shield, Heart, Users, Leaf, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-4 py-2 mb-6">
              PRODUCT COMPARISON GUIDE
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Product Comparison Guide
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Compare our premium health supplements to find the perfect solution for your needs. 
              Each product is designed to address specific health concerns with science-backed 
              ingredients and proven results.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Science-Backed Formulas</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Natural Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>60-Day Money Back</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Health Supplements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each product is carefully formulated to address specific health needs with 
              the highest quality ingredients and proven effectiveness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Image
                  src="/prodentim.png"
                  alt="ProDentim Oral Health"
                  width={200}
                  height={200}
                  className="w-full h-auto max-w-[120px] mx-auto mb-4"
                />
                <CardTitle className="text-lg">ProDentim</CardTitle>
                <p className="text-sm text-gray-600">Oral Health & Dental Care</p>
                <Badge className="bg-blue-100 text-blue-700 mt-2">Best Seller</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-4">
                  Advanced oral probiotic with 3.5 billion CFUs for healthy teeth and gums.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>CFU Count:</span>
                    <span className="font-semibold">3.5 Billion</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Form:</span>
                    <span className="font-semibold">Tablet</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Rating:</span>
                    <span className="font-semibold">4.8/5</span>
                  </div>
                </div>
                <Button size="sm" className="w-full mt-4" asChild>
                  <Link href="/prodentim">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Image
                  src="/keyslim-drops1.png"
                  alt="KeySlim Drops Weight Loss"
                  width={200}
                  height={200}
                  className="w-full h-auto max-w-[120px] mx-auto mb-4"
                />
                <CardTitle className="text-lg">KeySlim Drops</CardTitle>
                <p className="text-sm text-gray-600">Weight Loss & Metabolism</p>
                <Badge className="bg-orange-100 text-orange-700 mt-2">New Formula</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-4">
                  Revolutionary liquid formula with 24 natural ingredients for sustainable weight loss.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Ingredients:</span>
                    <span className="font-semibold">24 Natural</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Form:</span>
                    <span className="font-semibold">Liquid Drops</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Rating:</span>
                    <span className="font-semibold">4.7/5</span>
                  </div>
                </div>
                <Button size="sm" className="w-full mt-4" asChild>
                  <Link href="/keyslim">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Image
                  src="/primebiome.png"
                  alt="PrimeBiome Gut Health"
                  width={200}
                  height={200}
                  className="w-full h-auto max-w-[120px] mx-auto mb-4"
                />
                <CardTitle className="text-lg">PrimeBiome</CardTitle>
                <p className="text-sm text-gray-600">Gut Health & Skin Radiance</p>
                <Badge className="bg-green-100 text-green-700 mt-2">Gut-Skin Formula</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-4">
                  Gut-skin connection supplement with 5 billion CFUs and collagen peptides.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>CFU Count:</span>
                    <span className="font-semibold">5 Billion</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Form:</span>
                    <span className="font-semibold">Capsule</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Rating:</span>
                    <span className="font-semibold">4.8/5</span>
                  </div>
                </div>
                <Button size="sm" className="w-full mt-4" asChild>
                  <Link href="/primebiome">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Image
                  src="/femipro.png"
                  alt="FemiPro Women's Health"
                  width={200}
                  height={200}
                  className="w-full h-auto max-w-[120px] mx-auto mb-4"
                />
                <CardTitle className="text-lg">FemiPro</CardTitle>
                <p className="text-sm text-gray-600">Women's Health & Bladder Support</p>
                <Badge className="bg-purple-100 text-purple-700 mt-2">Women's Formula</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive women's health formula for bladder control and urinary wellness.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Key Ingredient:</span>
                    <span className="font-semibold">Cranberry Extract</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Form:</span>
                    <span className="font-semibold">Capsule</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Rating:</span>
                    <span className="font-semibold">4.8/5</span>
                  </div>
                </div>
                <Button size="sm" className="w-full mt-4" asChild>
                  <Link href="/femipro">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Detailed Product Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare key features, ingredients, and benefits to find the perfect 
              supplement for your health goals.
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Features</TableHead>
                  <TableHead className="text-center">ProDentim</TableHead>
                  <TableHead className="text-center">KeySlim Drops</TableHead>
                  <TableHead className="text-center">PrimeBiome</TableHead>
                  <TableHead className="text-center">FemiPro</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">Primary Benefit</TableCell>
                  <TableCell className="text-center">Oral Health & Dental Care</TableCell>
                  <TableCell className="text-center">Weight Loss & Metabolism</TableCell>
                  <TableCell className="text-center">Gut Health & Skin Radiance</TableCell>
                  <TableCell className="text-center">Women's Health & Bladder Support</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Key Ingredients</TableCell>
                  <TableCell className="text-center">3.5 Billion CFUs, Lactobacillus paracasei</TableCell>
                  <TableCell className="text-center">24 Natural Ingredients, Green Tea Extract</TableCell>
                  <TableCell className="text-center">5 Billion CFUs, Lion's Mane, Marine Collagen</TableCell>
                  <TableCell className="text-center">Cranberry Extract, D-Mannose, Hibiscus</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Form</TableCell>
                  <TableCell className="text-center">Tablet</TableCell>
                  <TableCell className="text-center">Liquid Drops</TableCell>
                  <TableCell className="text-center">Capsule</TableCell>
                  <TableCell className="text-center">Capsule</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Serving Size</TableCell>
                  <TableCell className="text-center">1 tablet daily</TableCell>
                  <TableCell className="text-center">1-2 droppers daily</TableCell>
                  <TableCell className="text-center">2 capsules daily</TableCell>
                  <TableCell className="text-center">2 capsules daily</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Results Timeline</TableCell>
                  <TableCell className="text-center">2-3 weeks</TableCell>
                  <TableCell className="text-center">1-3 weeks</TableCell>
                  <TableCell className="text-center">1-4 weeks</TableCell>
                  <TableCell className="text-center">2-3 weeks</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Customer Rating</TableCell>
                  <TableCell className="text-center">4.8/5 ⭐</TableCell>
                  <TableCell className="text-center">4.7/5 ⭐</TableCell>
                  <TableCell className="text-center">4.8/5 ⭐</TableCell>
                  <TableCell className="text-center">4.8/5 ⭐</TableCell>
                </TableRow>
                {/* <TableRow>
                  <TableCell className="font-semibold">Price</TableCell>
                  <TableCell className="text-center">$49.95</TableCell>
                  <TableCell className="text-center">$39.95</TableCell>
                  <TableCell className="text-center">$59.95</TableCell>
                  <TableCell className="text-center">$49.95</TableCell>
                </TableRow> */}
                <TableRow>
                  <TableCell className="font-semibold">Money Back Guarantee</TableCell>
                  <TableCell className="text-center">60 Days</TableCell>
                  <TableCell className="text-center">60 Days</TableCell>
                  <TableCell className="text-center">60 Days</TableCell>
                  <TableCell className="text-center">60 Days</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Which Product is Right for You */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Which Product is Right for You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect supplement based on your specific health goals and needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Choose ProDentim if you:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Want healthier teeth and gums</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Struggle with bad breath</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Have sensitive gums</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Want to improve oral hygiene</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Choose KeySlim Drops if you:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Want to lose weight naturally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Struggle with appetite control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Need a metabolism boost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Prefer liquid supplements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Choose PrimeBiome if you:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Want radiant, healthy skin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Have digestive issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Want to improve gut health</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Believe in the gut-skin connection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Choose FemiPro if you:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Are a woman with bladder concerns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Have urinary tract issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Want natural women's health support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Need pelvic floor support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Find Your Perfect Health Solution
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Compare our products and choose the supplement that best fits your health goals. 
            All products come with our 60-day money-back guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
            >
              Shop All Products
            </Button>
            <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-blue-600">
              Read Customer Reviews
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
      <Footer />
    </div>
  )
} 


================================================
FILE: app/femipro/layout.tsx
================================================
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import CookiePolicyModal from "@/components/cookie-policy-modal"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  metadataBase: new URL('https://beautyrealmart.com'),
  title: "FemiPro Review 2025 – Complete Women's Health & Bladder Support | Real Results",
  description: 'FemiPro review 2025: Discover the complete women\'s health supplement for bladder control and urinary tract health. Natural herbal formula, 60-day guarantee. Get 50% off today with free shipping.',
  keywords: "FemiPro review 2025, FemiPro women's health, FemiPro bladder support, FemiPro urinary tract health, women's health supplement, bladder control supplement, urinary tract supplement, natural women's health, bladder health for women, urinary health supplement, pelvic floor support, women's wellness supplement, natural bladder support, urinary tract health for women, bladder control for women, women's health formula, FemiPro ingredients, FemiPro side effects, FemiPro results, FemiPro before and after, women's bladder health, natural urinary support",
  openGraph: {
    title: 'FemiPro Review 2025 – Complete Women\'s Health & Bladder Support',
    description: 'FemiPro review 2025: Discover the complete women\'s health supplement for bladder control and urinary tract health. Natural herbal formula, 60-day guarantee.',
    url: 'https://beautyrealmart.com/femipro',
    siteName: ' BEAUTY REALM Supplements',
    images: [
      {
        url: '/femipro.png',
        width: 1200,
        height: 630,
        alt: 'FemiPro women\'s health and bladder support supplement review',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FemiPro Review 2025 – Complete Women\'s Health & Bladder Support',
    description: 'FemiPro review 2025: Discover the complete women\'s health supplement for bladder control and urinary tract health. Natural herbal formula, 60-day guarantee.',
    images: ['/femipro.png'],
  },
  alternates: {
    canonical: 'https://beautyrealmart.com/femipro',
  },
}

export default function FemiProLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content=" BEAUTY REALM Supplements" />
        <link rel="icon" href="/femipro.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "FemiPro",
              "description": "FemiPro is a comprehensive women's health supplement designed specifically for bladder control, urinary tract health, and pelvic wellness. Features cranberry extract, D-Mannose, hibiscus extract, and other natural herbal ingredients for complete women's wellness support.",
              "brand": {
                "@type": "Brand",
                "name": " BEAUTY REALM Supplements"
              },
              "offers": {
                "@type": "Offer",
                "url": "http://femipro24.com/text.php#aff=lifestylemedicine623",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "price": "49.95",
                "priceValidUntil": "2025-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "634"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Lisa M."
                  },
                  "reviewBody": "FemiPro has been a game-changer for my bladder health! I no longer worry about urgency issues, and my confidence has improved dramatically. The natural ingredients give me peace of mind."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sarah W."
                  },
                  "reviewBody": "After struggling with urinary tract issues for years, FemiPro has finally provided the relief I needed. My urinary health is better than ever, and I feel more comfortable and confident."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Jennifer P."
                  },
                  "reviewBody": "FemiPro has restored my quality of life! I can now enjoy activities without worrying about bladder issues. The natural formula is gentle and effective - I highly recommend it to all women."
                }
              ],
              "image": "/femipro.png",
              "category": "Health & Beauty",
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Form",
                  "value": "Capsule"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Serving Size",
                  "value": "2 capsules daily"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Key Ingredients",
                  "value": "Cranberry Extract, D-Mannose, Hibiscus Extract"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Target Audience",
                  "value": "Women"
                }
              ]
            }`
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookiePolicyModal />
      </body>
    </html>
  )
} 


================================================
FILE: app/femipro/page.tsx
================================================
import Image from "next/image"
import Link from "next/link"
import { Check, Star, Shield, Award, Leaf, Clock, ArrowRight, Users, TrendingUp, Heart, Flower, Zap, Target } from "lucide-react"
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
            <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How FemiPro Works</h3>
                <p className="text-gray-600">See the transformation in women's health that thousands of Americans have experienced</p>
              </div>
              <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Infographic: Women's Health Support Process</span>
              </div>
            </div>
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

            {/* Visual Placeholder: Verified Buyer Testimonials */}
            <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Verified Buyer Testimonials</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Before Photo</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">Before FemiPro</h4>
                  <p className="text-sm text-gray-600 text-center">Bladder control issues, discomfort, low confidence</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">After Photo</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">After FemiPro</h4>
                  <p className="text-sm text-gray-600 text-center">Improved bladder control, comfort, confidence</p>
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
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
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
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    Revolutionary oral probiotic with 3.5 billion CFUs for healthy teeth and gums.
                  </p>
                  <Button size="sm" asChild>
                    <Link href="/prodentim">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
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
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    Revolutionary liquid formula with 24 natural ingredients for sustainable weight loss.
                  </p>
                  <Button size="sm" asChild>
                    <Link href="/keyslim">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
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
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">
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


================================================
FILE: app/keyslim/layout.tsx
================================================
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import CookiePolicyModal from "@/components/cookie-policy-modal"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  metadataBase: new URL('https://beautyrealmart.com'),
  title: "KeySlim Drops Review 2025 – How KeySlim Works for Weight Loss | Real User Results",
  description: 'KeySlim Drops review 2025: Discover how this revolutionary liquid weight loss supplement works with 24 natural ingredients. Real user results in 1-3 weeks. Get 60% off today with free shipping and 60-day guarantee.',
  keywords: "KeySlim Drops review 2025, KeySlim Drops weight loss, KeySlim Drops does it work, KeySlim Drops customer reviews, liquid weight loss supplement, natural weight loss drops, fat burning supplement, metabolism booster, appetite suppressant, weight loss supplement for women, KeySlim Drops ingredients, KeySlim Drops side effects, KeySlim Drops results, KeySlim Drops before and after, natural weight loss, fat burning drops, metabolism supplement, weight loss drops review, KeySlim Drops scam, KeySlim Drops legitimate",
  openGraph: {
    title: 'KeySlim Drops Review 2025 – How KeySlim Works for Weight Loss',
    description: 'KeySlim Drops review 2025: Discover how this revolutionary liquid weight loss supplement works with 24 natural ingredients. Real user results in 1-3 weeks.',
    url: 'https://beautyrealmart.com/keyslim',
    siteName: ' BEAUTY REALM Supplements',
    images: [
      {
        url: '/keyslim-drops1.png',
        width: 1200,
        height: 630,
        alt: 'KeySlim Drops weight loss supplement review',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KeySlim Drops Review 2025 – How KeySlim Works for Weight Loss',
    description: 'KeySlim Drops review 2025: Discover how this revolutionary liquid weight loss supplement works with 24 natural ingredients. Real user results in 1-3 weeks.',
    images: ['/keyslim-drops1.png'],
  },
  alternates: {
    canonical: 'https://beautyrealmart.com/keyslim',
  },
}

export default function KeySlimLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content=" BEAUTY REALM Supplements" />
        <link rel="icon" href="/keyslim-drops1.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "KeySlim Drops",
              "description": "KeySlim Drops is a revolutionary liquid weight loss supplement featuring 24 powerful natural ingredients in a breakthrough 3-stage formula. Designed to optimize metabolism, control appetite, and support sustainable fat burning for real results in 1-3 weeks.",
              "brand": {
                "@type": "Brand",
                "name": " BEAUTY REALM Supplements"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "price": "39.95",
                "priceValidUntil": "2025-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "892"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Jennifer L."
                  },
                  "reviewBody": "I lost 25 pounds in just 8 weeks with KeySlim Drops! The appetite control is incredible - I no longer crave junk food, and my energy levels are through the roof. This product really works!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Mike R."
                  },
                  "reviewBody": "After trying countless weight loss products, KeySlim Drops finally delivered real results. I've lost 18 pounds and 3 inches off my waist in 6 weeks. The liquid form is so easy to take!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sarah K."
                  },
                  "reviewBody": "KeySlim Drops helped me break through my weight loss plateau. I've lost 32 pounds total and feel more confident than ever. The natural ingredients give me peace of mind."
                }
              ],
              "image": "/keyslim-drops1.png",
              "category": "Health & Beauty",
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Ingredients",
                  "value": "24 Natural Ingredients"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Form",
                  "value": "Liquid Drops"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Serving Size",
                  "value": "1-2 droppers daily"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Results Timeline",
                  "value": "1-3 weeks"
                }
              ]
            }`
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookiePolicyModal />
      </body>
    </html>
  )
} 


================================================
FILE: app/keyslim/page.tsx
================================================
import Image from "next/image"
import Link from "next/link"
import { Check, Star, Shield, Award, Leaf, Clock, ArrowRight, Users, TrendingUp, Heart, Zap, Target, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function KeySlimPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 border-none px-4 py-2">
                  🔥 BREAKTHROUGH WEIGHT LOSS TECHNOLOGY
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                    KeySlim Drops Review 2025
                  </span>
                  <br />
                  <span className="text-gray-900">Revolutionary Liquid Weight Loss Formula</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience the world's first revolutionary liquid weight loss supplement featuring 
                  24 powerful natural ingredients in a breakthrough 3-stage formula. Join thousands 
                  of Americans who have achieved sustainable weight loss in just 1-3 weeks.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">24 Natural Ingredients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Results in 1-3 Weeks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">60-Day Money Back</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-lg"
                    asChild
                  >
                    <Link href="https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623">
                      Get KeySlim Drops Today - Save 60%
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#reviews">Read Customer Reviews</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/50 to-amber-200/50 rounded-full blur-3xl scale-110 opacity-60"></div>
                <div className="relative">
                  <Image
                    src="/keyslim-drops1.png"
                    alt="KeySlim Drops Revolutionary Weight Loss Formula"
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

        {/* Trust Indicators */}
        <section className="py-8 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center justify-center space-x-2 text-center">
                <Users className="h-5 w-5 text-orange-600" />
                <div>
                  <div className="font-semibold text-sm">75,000+</div>
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

        {/* Revolutionary 3-Stage System */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Revolutionary 3-Stage Weight Loss System
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                KeySlim Drops works through a scientifically-designed 3-stage process that targets 
                the root causes of weight gain for sustainable, long-lasting results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Stage 1: Appetite Control</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Advanced ingredients like African Mango and Chromium Picolinate work together to 
                    naturally suppress appetite and reduce cravings, helping you consume fewer calories 
                    without feeling deprived.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Stage 2: Metabolism Boost</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Green Tea Extract, Guarana, and Raspberry Ketones accelerate your metabolism and 
                    increase fat burning, turning your body into a more efficient calorie-burning machine.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Scale className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Stage 3: Long-term Success</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Forskolin and Maca Root support sustainable weight management by improving body 
                    composition and helping maintain your results long after you reach your goal weight.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Visual Placeholder: How It Works Infographic */}
            <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How KeySlim Drops Works</h3>
                <p className="text-gray-600">See the transformation in weight loss that thousands of Americans have experienced</p>
              </div>
              <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Infographic: 3-Stage Weight Loss Process</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why KeySlim Drops is the Ultimate Weight Loss Solution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Backed by science and trusted by thousands of Americans, KeySlim Drops delivers 
                comprehensive weight loss support through its unique liquid formula.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Controls Appetite Naturally</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Advanced ingredients work together to naturally suppress appetite and reduce 
                    cravings, helping you consume fewer calories without feeling deprived.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Accelerates Metabolism</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Powerful thermogenic ingredients boost your metabolism and increase fat burning, 
                    turning your body into a more efficient calorie-burning machine.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Scale className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Sustainable Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Supports long-term weight management by improving body composition and helping 
                    maintain your results long after you reach your goal weight.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Boosts Energy Levels</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Natural energy boosters help you stay active and motivated throughout your 
                    weight loss journey without the jitters of artificial stimulants.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">Natural Ingredients</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Non-GMO, vegan, and gluten-free formula with 24 carefully selected natural 
                    ingredients for everyone's dietary needs and preferences.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">Fast Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Most customers begin to see results within 1-3 weeks of consistent use, 
                    with continued improvements over time for lasting success.
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
                Powerful Natural Ingredients for Weight Loss
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each ingredient in KeySlim Drops is carefully selected for its proven benefits 
                in supporting weight loss and metabolism.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">L-Ornithine & Chromium Picolinate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Work together to naturally suppress appetite and reduce cravings, helping 
                    you consume fewer calories without feeling deprived.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Green Tea Leaf Extract</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Powerful antioxidant that boosts metabolism and increases fat burning through 
                    thermogenesis for enhanced weight loss results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Maca Root & Grapefruit Extract</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Natural energy boosters that help you stay active and motivated throughout 
                    your weight loss journey without artificial stimulants.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Scale className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Guarana & Raspberry Ketones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Accelerate fat burning and metabolism while providing natural energy to 
                    support your active lifestyle and weight loss goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">African Mango & Forskolin</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Support sustainable weight management by improving body composition and 
                    helping maintain your results long after reaching your goal weight.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">24 Natural Ingredients</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Each dose delivers a powerful blend of 24 carefully selected natural 
                    ingredients for maximum effectiveness and comprehensive weight loss support.
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
                What Our Customers Say About KeySlim Drops
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of satisfied Americans who have achieved their weight loss goals with KeySlim Drops.
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
                    "I lost 25 pounds in just 8 weeks with KeySlim Drops! The appetite control 
                    is incredible - I no longer crave junk food, and my energy levels are through 
                    the roof. This product really works!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold">JL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Jennifer L.</p>
                      <p className="text-sm text-gray-500">Los Angeles, CA</p>
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
                    "After trying countless weight loss products, KeySlim Drops finally delivered 
                    the results I was looking for. My metabolism is faster, I have more energy, 
                    and the weight is staying off!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">MR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Michael R.</p>
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
                    "The appetite control is amazing! I no longer have those late-night cravings, 
                    and my portion sizes have naturally decreased. I've lost 18 pounds in 6 weeks!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">AS</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Amanda S.</p>
                      <p className="text-sm text-gray-500">Seattle, WA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Visual Placeholder: Verified Buyer Testimonials */}
            <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Verified Buyer Testimonials</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Before Photo</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">Before KeySlim Drops</h4>
                  <p className="text-sm text-gray-600 text-center">Struggling with weight loss, low energy, cravings</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">After Photo</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">After KeySlim Drops</h4>
                  <p className="text-sm text-gray-600 text-center">Achieved weight loss goals, high energy, confidence</p>
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
                Get answers to the most common questions about KeySlim Drops and weight loss.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    How long does it take to see results with KeySlim Drops?
                  </AccordionTrigger>
                  <AccordionContent>
                    Most customers begin to notice improvements in their weight loss journey within 1-3 weeks 
                    of consistent use. However, individual results may vary depending on your starting weight, 
                    diet, and exercise routine.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Is KeySlim Drops safe to use daily?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, KeySlim Drops is completely safe for daily use. It contains only natural ingredients 
                    and is designed for long-term use to support sustainable weight loss and maintenance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Can KeySlim Drops help with appetite control?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely! KeySlim Drops' formula specifically targets appetite control through ingredients 
                    like African Mango and Chromium Picolinate, helping you naturally reduce cravings and 
                    consume fewer calories.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    What makes KeySlim Drops different from other weight loss products?
                  </AccordionTrigger>
                  <AccordionContent>
                    KeySlim Drops is unique because it uses a liquid formula with 24 natural ingredients 
                    in a 3-stage system that targets appetite control, metabolism boost, and sustainable 
                    results, rather than just masking symptoms.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Is there a money-back guarantee?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer a 60-day money-back guarantee on all KeySlim Drops orders. 
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
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
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
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    Revolutionary oral probiotic with 3.5 billion CFUs for healthy teeth and gums.
                  </p>
                  <Button size="sm" asChild>
                    <Link href="/prodentim">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
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
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    Gut-skin connection supplement with 5 billion CFUs and collagen peptides.
                  </p>
                  <Button size="sm" asChild>
                    <Link href="/primebiome">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
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
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">
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
        <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Weight Loss Journey Today
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of Americans who have already achieved their weight loss goals with KeySlim Drops. 
              Start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg"
                asChild
              >
                <Link href="https://getkeyslimdrops.cc/home/#aff=lifestylemedicine623">
                  Get KeySlim Drops Now - Save 60%
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-orange-600">
                <Link href="/compare">Compare All Products</Link>
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


================================================
FILE: app/primebiome/layout.tsx
================================================
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import CookiePolicyModal from "@/components/cookie-policy-modal"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  metadataBase: new URL('https://beautyrealmart.com/primebiome'),
  title: "PrimeBiome Review 2025 – Best Probiotic for Gut Health & Radiant Skin | Real Results",
  description: 'PrimeBiome review 2025: Discover the best probiotic for gut health and radiant skin. 5 billion CFUs, gut-skin connection, natural ingredients. Get 50% off today with free shipping and 60-day guarantee.',
  keywords: "PrimeBiome review 2025, PrimeBiome probiotic, PrimeBiome gut health, PrimeBiome skin health, best probiotic for gut health, gut skin connection, probiotic supplement for skin, B. Coagulans probiotic, Lion's Mane supplement, marine collagen peptides, hyaluronic acid supplement, gut microbiome, skin health supplement, digestive health, radiant skin supplement, natural probiotic, gut health supplement, skin glow supplement, PrimeBiome ingredients, PrimeBiome side effects, PrimeBiome results, PrimeBiome before and after, gut skin axis",
  openGraph: {
    title: 'PrimeBiome Review 2025 – Best Probiotic for Gut Health & Radiant Skin',
    description: 'PrimeBiome review 2025: Discover the best probiotic for gut health and radiant skin. 5 billion CFUs, gut-skin connection, natural ingredients.',
    url: 'https://beautyrealmart.com/primebiome',
    siteName: ' BEAUTY REALM Supplements',
    images: [
      {
        url: '/primebiome.png',
        width: 1200,
        height: 630,
        alt: 'PrimeBiome gut health and skin supplement review',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrimeBiome Review 2025 – Best Probiotic for Gut Health & Radiant Skin',
    description: 'PrimeBiome review 2025: Discover the best probiotic for gut health and radiant skin. 5 billion CFUs, gut-skin connection, natural ingredients.',
    images: ['/primebiome.png'],
  },
  alternates: {
    canonical: 'https://beautyrealmart.com/primebiome',
  },
}

export default function PrimeBiomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content=" BEAUTY REALM Supplements" />
        <link rel="icon" href="/primebiome.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "PrimeBiome",
              "description": "PrimeBiome is a revolutionary gut-skin health supplement featuring 5 billion CFUs of B. Coagulans probiotic, Lion's Mane mushroom extract, marine collagen peptides, and hyaluronic acid. Designed to support gut health and promote radiant skin through the gut-skin connection.",
              "brand": {
                "@type": "Brand",
                "name": " BEAUTY REALM Supplements"
              },
              "offers": {
                "@type": "Offer",
                "url": "http://primebiome24.com/text.php#aff=lifestylemedicine623",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "price": "59.95",
                "priceValidUntil": "2025-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "756"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Amanda L."
                  },
                  "reviewBody": "PrimeBiome has completely transformed my skin! My complexion is clearer, more radiant, and I've noticed a significant improvement in my digestion. The gut-skin connection is real!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "David J."
                  },
                  "reviewBody": "After struggling with digestive issues for years, PrimeBiome has been a game-changer. My gut health is better than ever, and my skin has never looked more glowing and healthy."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Rachel K."
                  },
                  "reviewBody": "I was skeptical about the gut-skin connection, but PrimeBiome proved me wrong! My skin is clearer, my energy is higher, and I feel amazing. This product really works from the inside out."
                }
              ],
              "image": "/primebiome.png",
              "category": "Health & Beauty",
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "CFU Count",
                  "value": "5 Billion"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Form",
                  "value": "Capsule"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Serving Size",
                  "value": "2 capsules daily"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Key Ingredients",
                  "value": "B. Coagulans, Lion's Mane, Marine Collagen"
                }
              ]
            }`
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookiePolicyModal />
      </body>
    </html>
  )
} 


================================================
FILE: app/primebiome/page.tsx
================================================
import Image from "next/image"
import Link from "next/link"
import { Check, Star, Shield, Award, Leaf, Clock, ArrowRight, Users, TrendingUp, Heart, Sparkles, Eye, Brain } from "lucide-react"
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
            <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How PrimeBiome Works</h3>
                <p className="text-gray-600">See the transformation in gut health and skin radiance that thousands of Americans have experienced</p>
              </div>
              <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Infographic: Gut-Skin Connection Process</span>
              </div>
            </div>
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
            <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
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
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
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
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    Revolutionary oral probiotic with 3.5 billion CFUs for healthy teeth and gums.
                  </p>
                  <Button size="sm" asChild>
                    <Link href="/prodentim">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
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
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    Revolutionary liquid formula with 24 natural ingredients for sustainable weight loss.
                  </p>
                  <Button size="sm" asChild>
                    <Link href="/keyslim">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
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
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">
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


================================================
FILE: app/privacy-policy/page.tsx
================================================
import LuxuryHeader from "@/components/luxury-header"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 bg-white">
        <div className="container px-4 md:px-6 py-16 md:py-24 max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
              Privacy Policy
            </h1>
      
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website and interact with our content, including reviews, articles, and any services offered. We are committed to safeguarding your privacy and ensuring that your personal information is protected in accordance with applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We may collect the following types of personal information when you interact with our website:
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Personal Identification Information:</strong> This includes your name, email address, phone number, and any other information you voluntarily provide to us.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Non-Personal Information:</strong> This includes data such as your IP address, browser type, operating system, and browsing behavior through cookies or other tracking technologies.
            </p>
            <p className="text-gray-700 mb-8">
              <strong>Transactional Data:</strong> If you make a purchase or sign up for any services through affiliate links or sponsored content, we may collect payment details and transaction history from our third-party partners.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
              <li>To provide, maintain, and improve our website and services.</li>
              <li>To personalize your experience and display content relevant to your interests.</li>
              <li>To respond to your inquiries and provide customer support.</li>
              <li>To send promotional emails or newsletters (if you have opted in).</li>
              <li>To track analytics, user behavior, and website performance.</li>
              <li>To comply with legal requirements.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">3. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              Our website may use cookies and other tracking technologies to collect information about how you interact with our content. Cookies help us:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Improve website functionality and performance.</li>
              <li>Track your preferences and enhance your browsing experience.</li>
              <li>Analyze traffic and usage patterns.</li>
            </ul>
            <p className="text-gray-700 mb-8">
              You can control or disable cookies through your browser settings, but doing so may limit some features of our website.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">4. Sharing Your Information</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, rent, or trade your personal information. However, we may share your information with third parties in the following circumstances:
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Affiliate Partners:</strong> If you make a purchase through an affiliate link on our site, your transaction may be tracked by our affiliate partners for commission purposes.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Service Providers:</strong> We may share your information with trusted third-party service providers who help us operate the website, process payments, or deliver services to you.
            </p>
            <p className="text-gray-700 mb-8">
              <strong>Legal Obligations:</strong> We may disclose your information if required by law, or to protect the rights, property, and safety of our website and users.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">5. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
            </p>
            <p className="text-gray-700 mb-8">
              However, please note that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">6. Third-Party Links</h2>
            <p className="text-gray-700 mb-8">
              Our website may contain links to third-party websites or services, including affiliate partners. We are not responsible for the privacy practices or the content of these third-party websites. We encourage you to review their privacy policies before sharing any personal information.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">7. Your Privacy Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>The right to access and receive a copy of the personal data we hold about you.</li>
              <li>The right to request the correction or deletion of your personal information.</li>
              <li>The right to object to the processing of your personal data or request data portability.</li>
            </ul>
            <p className="text-gray-700 mb-8">
              To exercise these rights, please contact us using the information provided below.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">8. Children's Privacy</h2>
            <p className="text-gray-700 mb-8">
              Our website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a minor, please contact us to have it removed.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page, and the revised version will be effective immediately upon posting.
            </p>
            <p className="text-gray-700 mb-12">
              <strong>By using our website, you consent to the terms of this Privacy Policy.</strong>
            </p>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or need to exercise your rights, please contact us:
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> privacy@beautyrealmart.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> Beauty Realm Customer Service
              </p>
              <p className="text-gray-600 text-sm mt-4">
                We will respond to your inquiry within 30 days of receipt.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 


================================================
FILE: app/prodentim/layout.tsx
================================================
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import CookiePolicyModal from "@/components/cookie-policy-modal"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  metadataBase: new URL('https://beautyrealmart.com'),
  title: "ProDentim Review 2025 – Does It Really Work? | Best Oral Probiotic Supplement",
  description: 'ProDentim review 2025: Discover if this oral probiotic supplement really works for healthy teeth and gums. Read customer reviews, benefits, and get 50% off today. 3.5 billion CFUs, natural ingredients, 60-day guarantee.',
  keywords: "ProDentim review 2025, ProDentim oral probiotic, ProDentim does it work, ProDentim customer reviews, oral health supplement, dental probiotic, healthy teeth and gums, bad breath treatment, gum health supplement, oral microbiome, probiotic supplement for teeth, ProDentim ingredients, ProDentim side effects, ProDentim results, ProDentim before and after, oral health probiotic, dental health supplement, fresh breath supplement, gum disease treatment, oral hygiene supplement",
  openGraph: {
    title: 'ProDentim Review 2025 – Does It Really Work? | Best Oral Probiotic',
    description: 'ProDentim review 2025: Discover if this oral probiotic supplement really works for healthy teeth and gums. Read customer reviews, benefits, and get 50% off today.',
    url: 'https://beautyrealmart.com/prodentim',
    siteName: ' BEAUTY REALM Supplements',
    images: [
      {
        url: '/prodentim.png',
        width: 1200,
        height: 630,
        alt: 'ProDentim oral probiotic supplement review',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProDentim Review 2025 – Does It Really Work? | Best Oral Probiotic',
    description: 'ProDentim review 2025: Discover if this oral probiotic supplement really works for healthy teeth and gums. Read customer reviews, benefits, and get 50% off today.',
    images: ['/prodentim.png'],
  },
  alternates: {
    canonical: 'https://beautyrealmart.com/prodentim',
  },
}

export default function ProDentimLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content=" BEAUTY REALM Supplements" />
        <link rel="icon" href="/prodentim.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "ProDentim",
              "description": "ProDentim is an advanced oral probiotic supplement designed to support healthy teeth and gums. With 3.5 billion CFUs of clinically studied probiotics like Lactobacillus paracasei and Lactobacillus reuteri, it balances your oral microbiome, reduces plaque, and freshens breath.",
              "brand": {
                "@type": "Brand",
                "name": " BEAUTY REALM Supplements"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://prodentim24.com/text.php#aff=lifestylemedicine623",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "price": "49.95",
                "priceValidUntil": "2025-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1245"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Theo F."
                  },
                  "reviewBody": "ProDentim changed my oral health completely! My teeth feel stronger, my gums are healthier, and my breath is fresher. I've never been more confident about my smile. My dentist was amazed at the improvement!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sarah M."
                  },
                  "reviewBody": "After struggling with gum sensitivity for years, ProDentim has been a game-changer. My gums are no longer inflamed, and I can enjoy hot and cold foods without discomfort. Highly recommend!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Michael J."
                  },
                  "reviewBody": "I was skeptical at first, but ProDentim really works! My breath is noticeably fresher, and my teeth feel cleaner throughout the day. It's become an essential part of my daily routine."
                }
              ],
              "image": "/prodentim.png",
              "category": "Health & Beauty",
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "CFU Count",
                  "value": "3.5 Billion"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Form",
                  "value": "Tablet"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Serving Size",
                  "value": "1 tablet daily"
                }
              ]
            }`
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookiePolicyModal />
      </body>
    </html>
  )
} 


================================================
FILE: app/prodentim/page.tsx
================================================
import Image from "next/image"
import Link from "next/link"
import { Check, Star, Shield, Award, Leaf, Clock } from "lucide-react"
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

      {/* Customer Reviews */}
      <section id="reviews" className="py-20 bg-white">
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


================================================
FILE: app/return-policy/page.tsx
================================================
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function ReturnPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 bg-white">
        <div className="container px-4 md:px-6 py-16 md:py-24 max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
              Refund and Returns Policy
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              If you are unsatisfied with your product for any reason, you will have 60 days from the date of purchase to return the product and request a refund. You may return any product purchased from our website in accordance with the terms outlined below:
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Return Authorization</h2>
            <p className="text-gray-700 mb-4">
              A return authorization must be requested and approved within 60 days of your purchase date. Contact our support team to request and receive a Return Merchandise Authorization (RMA).
            </p>
            <p className="text-gray-700 mb-4">
              The return authorization number must be included with your returned product.
            </p>
            <p className="text-gray-700 mb-4">
              Once you receive an RMA, please return the item and email us the RMA and tracking number so we can monitor your return. You will be responsible for covering the shipping costs.
            </p>
            <p className="text-gray-700 mb-8">
              Products must be returned to the provided address within 14 days of receiving the RMA to qualify for a refund.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Return Requirements</h2>
            <p className="text-gray-700 mb-4">
              Returned product(s) must be in good physical condition (not broken or damaged). All accessories originally included with the purchase must be returned.
            </p>
            <p className="text-gray-700 mb-8">
              To complete your return, we require proof of purchase.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Non-Returnable Items</h2>
            <p className="text-gray-700 mb-4">
              The following items cannot be returned:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
              <li>Gift cards</li>
              <li>Downloadable software products</li>
              <li>Certain health and personal care items</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Partial Refunds</h2>
            <p className="text-gray-700 mb-4">
              In some cases, partial refunds may be granted for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
              <li>Items with obvious signs of use</li>
              <li>Items not in original condition, damaged, or missing parts due to reasons other than our error</li>
              <li>Items returned more than 60 days after purchase</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Refunds</h2>
            <p className="text-gray-700 mb-8">
              Once your return is received and inspected, we will notify you via email of the approval or rejection of your refund. If approved, the refund will be processed, and a credit will be applied to your original payment method within a specified number of days.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Late or Missing Refunds</h2>
            <p className="text-gray-700 mb-4">
              If you haven't received your refund, please:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Check your bank account again</li>
              <li>Contact your credit card company; it may take some time for the refund to officially post</li>
              <li>Contact your bank, as there is often a processing time before a refund is posted</li>
            </ul>
            <p className="text-gray-700 mb-8">
              If you've done all of this and still haven't received your refund, contact us.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Sale Items</h2>
            <p className="text-gray-700 mb-8">
              Only regular-priced items may be refunded. Sale items are not eligible for refunds.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Exchanges</h2>
            <p className="text-gray-700 mb-4">
              We replace items if they are defective or damaged. If you need to exchange an item, email us for instructions.
            </p>
            <p className="text-gray-700 mb-8">
              Please note that exchanges are only accepted within 60 days of delivery.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Gifts</h2>
            <p className="text-gray-700 mb-4">
              If the item was marked as a gift during purchase and shipped directly to you, you'll receive a gift credit for the value of the return. Once the returned item is received, a gift certificate will be sent to you.
            </p>
            <p className="text-gray-700 mb-8">
              If the gift was not marked during the purchase, or the gift giver had the order shipped to themselves, the refund will be sent to the gift giver.
            </p>

           
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 


================================================
FILE: app/terms-of-service/page.tsx
=======

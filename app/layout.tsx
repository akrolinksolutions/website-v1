import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SchemaMarkup from "@/components/seo/schema-markup"

const _geist = Geist({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  display: 'swap',
  preload: false,
  fallback: ['monospace']
})

export const metadata: Metadata = {
  title: {
    default: "Akrolink Solutions Limited - CFL Customs Clearance at Heathrow Airport",
    template: "%s | Akrolink Solutions Limited"
  },
  description:
    "Specialized customs clearance services for air courier shipments at Heathrow Airport through CFL. Expert HS code classification, duty optimization, and UK Border Force coordination. Fast, accurate, cost-effective customs clearance.",
  keywords: [
    "CFL customs clearance",
    "Heathrow customs clearance",
    "air courier customs",
    "UK customs broker",
    "HS code classification",
    "duty optimization",
    "CDS import declarations",
    "UK Border Force",
    "customs clearance Heathrow",
    "CFL shipments",
    "import duty reduction",
    "UK customs regulations",
    "HMRC compliance",
    "customs clearance services",
    "international shipping UK"
  ],
  authors: [{ name: "Akrolink Solutions Limited" }],
  creator: "Akrolink Solutions Limited",
  publisher: "Akrolink Solutions Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://akrolinksolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://akrolinksolutions.com',
    siteName: 'Akrolink Solutions Limited',
    title: 'Akrolink Solutions Limited - CFL Customs Clearance at Heathrow Airport',
    description: 'Specialized customs clearance services for air courier shipments at Heathrow Airport through CFL. Expert HS code classification and duty optimization.',
    images: [
      {
        url: '/customs-clearance-logistics-warehouse-heathrow.jpg',
        width: 1200,
        height: 630,
        alt: 'CFL Customs Clearance Services at Heathrow Airport',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akrolink Solutions Limited - CFL Customs Clearance at Heathrow',
    description: 'Specialized customs clearance services for air courier shipments at Heathrow Airport through CFL.',
    images: ['/customs-clearance-logistics-warehouse-heathrow.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Customs Clearance Services',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Akrolink Solutions Limited",
    "description": "Specialized customs clearance services for air courier shipments at Heathrow Airport through CFL",
    "url": "https://akrolinksolutions.com",
    "logo": "https://akrolinksolutions.com/placeholder-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-XXX-XXX-XXXX",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "GB"
    },
    "sameAs": [
      "https://www.linkedin.com/company/akrolink-solutions",
      "https://twitter.com/akrolinksolutions"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 51.4700,
        "longitude": -0.4543
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Customs Clearance Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CFL Customs Clearance",
            "description": "Specialized customs clearance for air courier shipments at Heathrow through CFL"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HS Code Classification",
            "description": "Expert HS code classification for duty optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UK Border Force Coordination",
            "description": "Direct coordination with UK Border Force for seamless clearance"
          }
        }
      ]
    }
  }

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preload critical resources */}
        <link rel="preload" href="/customs-clearance-logistics-warehouse-heathrow.jpg" as="image" type="image/jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <SchemaMarkup />
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

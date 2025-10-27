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
    default: "Fast Customs Clearance at Heathrow (CFL) | Akrolink Solutions – UK Customs Broker",
    template: "%s | Akrolink Solutions"
  },
  description:
    "Akrolink Solutions offers reliable customs clearance services for air courier shipments at Heathrow Airport. We handle all paperwork, HS code classification, and import duty optimisation.",
  keywords: [
    "customs clearance Heathrow",
    "UK customs broker Heathrow",
    "courier customs clearance UK",
    "air courier customs clearance",
    "CFL Heathrow customs clearance",
    "import customs agent Heathrow",
    "UK import clearance service",
    "customs declaration Heathrow airport",
    "UK courier import clearance",
    "CDS customs declaration UK",
    "CFL customs clearance",
    "Heathrow customs clearance",
    "HS code classification",
    "duty optimization",
    "CDS import declarations",
    "UK Border Force",
    "HMRC compliance",
    "customs clearance services"
  ],
  authors: [{ name: "Akrolink Solutions" }],
  creator: "Akrolink Solutions",
  publisher: "Akrolink Solutions",
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
    siteName: 'Akrolink Solutions',
    title: 'Fast Customs Clearance at Heathrow (CFL) | Akrolink Solutions – UK Customs Broker',
    description: 'Akrolink Solutions offers reliable customs clearance services for air courier shipments at Heathrow Airport. We handle all paperwork, HS code classification, and import duty optimisation.',
    images: [
      {
        url: '/customs-clearance-logistics-warehouse-heathrow.jpg',
        width: 1200,
        height: 630,
        alt: 'CFL Customs Clearance Services at Heathrow Airport',
      },
      {
        url: '/logoWithBg.png',
        width: 512,
        height: 512,
        alt: 'Akrolink Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fast Customs Clearance at Heathrow (CFL) | Akrolink Solutions – UK Customs Broker',
    description: 'Akrolink Solutions offers reliable customs clearance services for air courier shipments at Heathrow Airport. We handle all paperwork, HS code classification, and import duty optimisation.',
    images: ['/customs-clearance-logistics-warehouse-heathrow.jpg', '/logoWithBg.png'],
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
    google: 'TH_MCnov0IiSiTheq2bhmV8tS9_EQ1Grwhux1ewsgHg',
    yandex: 'your-yandex-verification-code',
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
    "name": "Akrolink Solutions",
    "description": "Specialized customs clearance services for air courier shipments at Heathrow Airport through CFL",
    "url": "https://akrolinksolutions.com",
    "logo": "https://akrolinksolutions.com/logoWithBg.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 8100306576",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "167-169 Great Portland Street, 5th Floor",
      "addressLocality": "London",
      "postalCode": "W1W 5PF",
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
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
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

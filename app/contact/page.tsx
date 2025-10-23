import type { Metadata } from "next"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import GoogleMap from "@/components/contact/google-map"

export const metadata: Metadata = {
  title: "Contact Akrolink Solutions - CFL Customs Clearance at Heathrow",
  description: "Get in touch with Akrolink Solutions for CFL customs clearance services at Heathrow Airport. Expert HS code classification, duty optimization, and UK Border Force coordination.",
  keywords: [
    "contact akrolink solutions",
    "CFL customs clearance contact",
    "Heathrow customs clearance contact",
    "customs broker contact",
    "HS code classification contact",
    "duty optimization contact",
    "UK customs services contact",
    "air courier customs contact"
  ],
  openGraph: {
    title: "Contact Akrolink Solutions - CFL Customs Clearance at Heathrow",
    description: "Contact us for specialized customs clearance services for air courier shipments at Heathrow Airport through CFL.",
    type: "website",
    images: [
      {
        url: "/customs-clearance-logistics-warehouse-heathrow.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Akrolink Solutions for CFL Customs Clearance",
      },
    ],
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function Contact() {
  return (
    <main className="pt-16">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-8">
            <ContactInfo />
            <GoogleMap />
          </div>
        </div>
      </div>
    </main>
  )
}

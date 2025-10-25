import type { Metadata } from "next"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import GoogleMap from "@/components/contact/google-map"

export const metadata: Metadata = {
  title: "Contact Us - UK Customs Broker Heathrow | Akrolink Solutions",
  description: "Contact Akrolink Solutions for professional UK customs broker services at Heathrow CFL. Expert HS code classification, duty optimisation, and UK Border Force clearance services.",
  keywords: [
    "contact akrolink solutions",
    "customs broker contact Heathrow",
    "UK import clearance service contact",
    "Heathrow customs clearance contact",
    "HS code classification contact",
    "duty optimisation contact",
    "UK customs broker near me",
    "air courier customs contact"
  ],
  openGraph: {
    title: "Contact Us - UK Customs Broker Heathrow | Akrolink Solutions",
    description: "Contact us for professional UK customs broker services for air courier shipments at Heathrow CFL with duty optimisation.",
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
      <ContactInfo />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="h-full">
            <GoogleMap />
          </div>
        </div>
      </div>
    </main>
  )
}

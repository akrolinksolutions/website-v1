import type { Metadata } from "next"
import QuoteHero from "@/components/contact/quote-hero"
import QuoteForm from "@/components/contact/quote-form"
import ContactInfo from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Request Customs Clearance Quote - UK Customs Broker | Akrolink Solutions",
  description: "Get a free quote for UK customs clearance services at Heathrow CFL. Expert customs broker with duty optimisation and HS code classification for air courier shipments.",
  keywords: [
    "customs clearance quote UK",
    "UK customs broker quote",
    "Heathrow customs clearance quote",
    "import clearance service quote",
    "duty optimisation quote",
    "HS code classification quote",
    "courier customs clearance quote",
    "request customs clearance quote UK"
  ],
  openGraph: {
    title: "Request Customs Clearance Quote - UK Customs Broker | Akrolink Solutions",
    description: "Get a detailed quote for your UK customs clearance needs at Heathrow CFL with duty optimisation from our expert customs broker.",
    type: "website",
    images: [
      {
        url: "/customs-clearance-logistics-warehouse-heathrow.jpg",
        width: 1200,
        height: 630,
        alt: "Free Quote for CFL Customs Clearance at Heathrow",
      },
    ],
  },
  alternates: {
    canonical: "/free-quote",
  },
}

export default function FreeQuotePage() {
  return (
    <main className="pt-16">
      <QuoteHero />
      <section className="py-16">
      <ContactInfo />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-1 gap-12">
          <QuoteForm />

        </div>
      </section>
    </main>
  )
}



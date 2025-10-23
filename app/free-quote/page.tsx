import type { Metadata } from "next"
import QuoteHero from "@/components/contact/quote-hero"
import QuoteForm from "@/components/contact/quote-form"
import ContactInfo from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Free Quote - CFL Customs Clearance at Heathrow | Akrolink Solutions",
  description: "Get a free quote for CFL customs clearance services at Heathrow Airport. Expert duty optimization and HS code classification for air courier shipments.",
  keywords: [
    "free quote customs clearance",
    "CFL customs clearance quote",
    "Heathrow customs clearance quote",
    "customs clearance pricing",
    "duty optimization quote",
    "HS code classification quote",
    "air courier customs quote"
  ],
  openGraph: {
    title: "Free Quote - CFL Customs Clearance at Heathrow",
    description: "Get a detailed quote for your CFL customs clearance needs at Heathrow Airport with duty optimization.",
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <QuoteForm />
          <ContactInfo />
        </div>
      </section>
    </main>
  )
}



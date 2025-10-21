import type { Metadata } from "next"
import ServicesHero from "@/components/services/services-hero"
import ServicesList from "@/components/services/services-list"
import ProcessSection from "@/components/services/process-section"
import BenefitsSection from "@/components/services/benefits-section"

export const metadata: Metadata = {
  title: "CFL Customs Clearance Services at Heathrow Airport",
  description: "Comprehensive CFL customs clearance services at Heathrow Airport. Expert HS code classification, duty optimization, CDS submissions, and UK Border Force coordination for air courier shipments.",
  keywords: [
    "CFL customs clearance services",
    "Heathrow customs clearance",
    "air courier customs services",
    "HS code classification service",
    "duty optimization services",
    "CDS import declarations",
    "UK Border Force coordination",
    "customs clearance process",
    "import duty reduction",
    "HMRC compliance services"
  ],
  openGraph: {
    title: "CFL Customs Clearance Services at Heathrow Airport",
    description: "Professional customs clearance services for air courier shipments at Heathrow through CFL. Expert HS code classification and duty optimization.",
    type: "website",
    images: [
      {
        url: "/customs-clearance-logistics-warehouse-heathrow.jpg",
        width: 1200,
        height: 630,
        alt: "CFL Customs Clearance Services at Heathrow Airport",
      },
    ],
  },
  alternates: {
    canonical: "/services",
  },
}

export default function Services() {
  return (
    <main className="pt-16">
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <BenefitsSection />
    </main>
  )
}

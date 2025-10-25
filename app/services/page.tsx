import type { Metadata } from "next"
import ServicesHero from "@/components/services/services-hero"
import ServicesList from "@/components/services/services-list"
import ProcessSection from "@/components/services/process-section"
import BenefitsSection from "@/components/services/benefits-section"

export const metadata: Metadata = {
  title: "UK Customs Broker Services - Heathrow CFL Clearance | Akrolink Solutions",
  description: "Professional UK import clearance service at Heathrow CFL. Expert customs broker for air courier shipments with HS code classification, duty optimisation, CDS declarations, and UK Border Force coordination.",
  keywords: [
    "customs broker Heathrow",
    "UK import clearance service",
    "Heathrow customs clearance services",
    "air courier customs clearance",
    "HS code classification service",
    "duty optimisation services",
    "CDS customs declaration UK",
    "UK Border Force clearance services",
    "courier customs clearance UK",
    "import customs agent Heathrow",
    "UK courier import clearance",
    "customs declaration Heathrow airport"
  ],
  openGraph: {
    title: "UK Customs Broker Services - Heathrow CFL Clearance | Akrolink Solutions",
    description: "Professional UK import clearance service at Heathrow CFL. Expert customs broker for air courier shipments with HS code classification and duty optimisation.",
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

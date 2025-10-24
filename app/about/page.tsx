import type { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import MissionVision from "@/components/about/mission-vision"
import StatsSection from "@/components/about/stats-section"

export const metadata: Metadata = {
  title: "About Akrolink Solutions Limited - CFL Customs Clearance Experts",
  description: "Learn about Akrolink Solutions Limited, specialized customs clearance experts for air courier shipments at Heathrow Airport through CFL. Our team provides hassle-free customs clearance with duty optimization.",
  keywords: [
    "about akrolink solutions",
    "CFL customs clearance experts",
    "Heathrow customs specialists",
    "UK customs broker team",
    "customs clearance company",
    "air courier customs experts",
    "HS code classification specialists",
    "duty optimization experts"
  ],
  openGraph: {
    title: "About Akrolink Solutions Limited - CFL Customs Clearance Experts",
    description: "Learn about our specialized customs clearance services for air courier shipments at Heathrow Airport through CFL.",
    type: "website",
    images: [
      {
        url: "/team-member-1.jpg",
        width: 1200,
        height: 630,
        alt: "Akrolink Solutions Team - CFL Customs Clearance Experts",
      },
    ],
  },
  alternates: {
    canonical: "/about",
  },
}

export default function About() {
  return (
    <main className="pt-16">
      <AboutHero />
      <MissionVision />
      <StatsSection />
    </main>
  )
}

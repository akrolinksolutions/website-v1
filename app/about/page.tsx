import type { Metadata } from "next";
import AboutHero from "@/components/about/about-hero";
import MissionVision from "@/components/about/mission-vision";
import StatsSection from "@/components/about/stats-section";

export const metadata: Metadata = {
  title: "About Us - UK Customs Broker Heathrow | Akrolink Solutions",
  description:
    "Learn about Akrolink Solutions, expert UK customs broker for air courier shipments at Heathrow CFL. Our team provides hassle-free customs clearance with duty optimisation and HS code classification.",
  keywords: [
    "about akrolink solutions",
    "UK customs broker team",
    "Heathrow customs specialists",
    "customs clearance company",
    "air courier customs experts",
    "HS code classification specialists",
    "duty optimisation experts",
    "CFL customs clearance experts",
  ],
  openGraph: {
    title: "About Us - UK Customs Broker Heathrow | Akrolink Solutions",
    description:
      "Learn about our expert UK customs broker services for air courier shipments at Heathrow CFL with duty optimisation.",
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
};

export default function About() {
  return (
    <main className="pt-16">
      <AboutHero />
      <MissionVision />
      <StatsSection />
    </main>
  );
}

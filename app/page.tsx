import HeroSection from "@/components/home/hero-section"
import ServicesOverview from "@/components/home/services-overview"
import WhyChooseUs from "@/components/home/why-choose-us"
import CTASection from "@/components/home/cta-section"

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <CTASection />
    </main>
  )
}

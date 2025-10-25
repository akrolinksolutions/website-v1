import HeroSection from "@/components/home/hero-section"
import ServicesOverview from "@/components/home/services-overview"
import WhyChooseUs from "@/components/home/why-choose-us"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />

      {/* Blog CTA Section */}
      <section className="py-20 bg-linear-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl border border-border p-12 text-center">
            <FileText className="text-primary mx-auto mb-6" size={48} />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Learn More About UK Customs Clearance
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Read our comprehensive guides on how to clear courier shipments at Heathrow, HS code classification for UK imports, and UK import duty calculation.
            </p>
            <Link
              href="/blog/how-to-clear-courier-shipments-heathrow"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Read Our Latest Guide
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"


export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/customs-clearance-logistics-warehouse-heathrow.jpg"
          alt="Logistics background"
          fill
          priority
          loading="eager"
          quality={85}
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className={`aos-fade-up ${isVisible ? 'aos-animate' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6 border border-accent/20">
            <CheckCircle size={16} className="text-accent" />
            <span className="text-sm font-medium text-primary">Trusted by UK Importers</span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Welcome To{" "}
            <span className="text-primary">
            Akrolink Solutions
            </span>
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-4">
            Fast, reliable customs clearance at Heathrow Airport — with duty optimisation built in.
          </p>

          <p className="text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            Leading UK customs clearance specialists for air courier shipments at Heathrow Airport through
            Courier Facility Limited (CFL). We streamline every step from documentation to UK Border Force coordination,
            ensuring your shipments clear customs quickly, cost-effectively, and with complete peace of mind.
          </p>

          {/* Inline CTA Panel (from former CTASection) */}
          <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-primary via-primary/90 to-accent p-8 md:p-10 text-center mx-auto max-w-4xl shadow-xl ">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-3">Ready to Optimize Your Imports?</h2>
              <p className="text-base md:text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Let our expert team handle your customs clearance. Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/free-quote"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-all duration-300 font-medium group"
                >
                  Start Your Free Quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all duration-300 font-medium"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  )
}

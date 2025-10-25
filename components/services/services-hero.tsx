"use client"

import { useEffect, useRef, useState } from "react"
import { LogisticsBackground } from "@/components/ui/logistics-animations"

export default function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section ref={sectionRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-background via-background to-primary/5 pt-20">
      {/* Company Branding */}


      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Logistics animations background */}
      <LogisticsBackground />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className={`aos-fade-up ${isVisible ? 'aos-animate' : ''}`}>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            UK Import Clearance Service{" "}
            <span className="text-primary">
              at Heathrow CFL
            </span>
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-4xl mx-auto mb-8">
            Professional UK customs broker for air courier shipments at Heathrow CFL. Expert HS code classification and duty optimisation to minimize costs and ensure fast, hassle-free customs clearance.
          </p>

          {/* Service highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[200px]">
            <div className="bg-background/80 backdrop-blur-md rounded-xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Documentation</h3>
              <p className="text-sm text-foreground/70">Complete paperwork handling and verification</p>
            </div>

            <div className="bg-background/80 backdrop-blur-md rounded-xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fast Clearance</h3>
              <p className="text-sm text-foreground/70">Quick processing through CFL facilities</p>
            </div>

            <div className="bg-background/80 backdrop-blur-md rounded-xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Cost Optimization</h3>
              <p className="text-sm text-foreground/70">Minimize duties and clearance costs</p>
            </div>

            <div className="bg-background/80 backdrop-blur-md rounded-xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Duty Optimization</h3>
              <p className="text-sm text-foreground/70">Expert HS code classification for optimal duty rates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

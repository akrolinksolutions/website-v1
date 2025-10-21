"use client"

import { useEffect, useRef, useState } from "react"

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
    <section ref={sectionRef} className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-background via-background to-primary/5 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className={`aos-fade-up ${isVisible ? 'aos-animate' : ''}`}>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Our CFL Services</h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Specialized customs clearance services for air courier shipments at Heathrow through CFL, designed to
            minimize costs and ensure hassle-free clearance with our technology-enabled processes.
          </p>
        </div>
      </div>
    </section>
  )
}

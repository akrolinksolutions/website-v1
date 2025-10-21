"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "CFL Shipment Arrival",
    description: "Your air courier shipment arrives at Heathrow and is processed through CFL facility.",
  },
  {
    number: "02",
    title: "Documentation Review",
    description: "Our team reviews all shipment documentation and prepares necessary import declarations for CFL processing.",
  },
  {
    number: "03",
    title: "HS Code Classification",
    description: "We analyze and classify your goods with the most accurate and cost-effective HS code for duty optimization.",
  },
  {
    number: "04",
    title: "CDS Submission to HMRC",
    description: "Submit import declarations (CDS) to HMRC with full compliance, ensuring accurate duty and tax calculations.",
  },
  {
    number: "05",
    title: "UK Border Force Coordination",
    description: "Coordinate with UK Border Force and CFL for expedited customs clearance at Heathrow Airport.",
  },
  {
    number: "06",
    title: "Clearance & Delivery",
    description: "Your goods are cleared through customs and ready for delivery. We provide ongoing support and guidance.",
  },
]

export default function ProcessSection() {
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
        threshold: 0.2,
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
    <section ref={sectionRef} className="py-20 bg-linear-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="aos-fade-up text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Process</h2>
          <p className="aos-fade-up aos-delay-200 text-lg text-foreground/60 max-w-2xl mx-auto">
            A specialized CFL customs clearance process designed for efficiency, compliance, and cost optimization at Heathrow Airport
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative p-8 bg-card rounded-xl border border-border hover:border-accent transition-all duration-300 aos-fade-up ${isVisible ? 'aos-animate' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Step number */}
              <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>

              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{step.description}</p>

              {/* Arrow connector (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <ArrowRight size={24} className="text-accent/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

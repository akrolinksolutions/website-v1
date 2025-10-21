"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, Clock, DollarSign, Headphones } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Average clearance time of 24 hours, getting your goods to market quickly.",
  },
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "Optimized HS codes and duty calculations reduce your import costs significantly.",
  },
  {
    icon: CheckCircle,
    title: "Full Compliance",
    description: "100% HMRC compliant with all UK import regulations and requirements.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated support team available to answer questions and resolve issues.",
  },
]

export default function BenefitsSection() {
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
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="aos-fade-up text-4xl lg:text-5xl font-bold text-foreground mb-4">Key Benefits</h2>
          <p className="aos-fade-up aos-delay-200 text-lg text-foreground/60 max-w-2xl mx-auto">
            Why businesses choose Akrolink Solutions for their customs clearance needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className={`flex gap-6 p-8 bg-linear-to-br from-primary/5 to-accent/5 rounded-xl border border-border hover:border-accent transition-all duration-300 aos-fade-up ${isVisible ? 'aos-animate' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-linear-to-br from-primary to-accent">
                    <Icon size={24} className="text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

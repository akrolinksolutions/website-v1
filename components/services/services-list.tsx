"use client"

import { useEffect, useRef, useState } from "react"
import { Plane, FileText, Zap, Users, Package, Shield } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "CFL Customs Clearance Services",
    description:
      "Specialized customs clearance for air courier shipments arriving at Heathrow through CFL. We handle every step from documentation to UK Border Force coordination, ensuring quick and accurate clearance.",
    features: ["CFL specialist", "Priority processing", "Heathrow expertise"],
  },
  {
    icon: FileText,
    title: "Import Documentation & CDS",
    description:
      "Preparation and submission of import declarations (CDS) to HMRC with full compliance. Our team has in-depth knowledge of UK customs regulations and import duty structures.",
    features: ["HMRC compliant", "CFL documentation", "Full compliance"],
  },
  {
    icon: Zap,
    title: "HS Code Classification & Duty Optimization",
    description:
      "Expert HS code classification to achieve the most accurate and cost-effective duty rates. We help identify the most favorable classification while ensuring compliance and minimizing import duties.",
    features: ["Cost reduction", "Expert classification", "Duty optimization"],
  },
  {
    icon: Users,
    title: "UK Border Force Coordination",
    description:
      "Direct coordination with UK Border Force and CFL for seamless customs clearance. We handle all communications to ensure your shipments clear customs smoothly at Heathrow.",
    features: ["Border Force liaison", "CFL coordination", "Quick resolution"],
  },
  {
    icon: Package,
    title: "Air Courier Shipment Processing",
    description:
      "Specialized handling of air courier shipments through CFL at Heathrow. We understand the unique requirements of courier shipments and ensure efficient processing.",
    features: ["Courier expertise", "CFL processing", "Fast clearance"],
  },
  {
    icon: Shield,
    title: "Compliance & Duty Guidance",
    description:
      "Comprehensive duty, VAT, and compliance guidance for CFL shipments. We provide expert advice on UK customs regulations and help minimize costs while maintaining compliance.",
    features: ["Expert guidance", "Cost minimization", "Regulatory compliance"],
  },
]

export default function ServicesList() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group p-8 bg-card rounded-xl border border-border hover:border-accent hover:shadow-xl transition-all duration-300 aos-fade-up ${isVisible ? 'aos-animate' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-linear-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <Icon size={28} className="text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-6">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

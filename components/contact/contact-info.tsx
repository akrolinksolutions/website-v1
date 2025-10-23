"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8100306576 / +91 9136872044",
    href: "tel:+918100306576",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@akrolinksolutions.com",
    href: "mailto:info@akrolinksolutions.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "167-169 Great Portland Street, 5th Floor, London, United Kingdom, W1W 5PF",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri: 9AM - 6PM",
    href: "#",
  },
]

export default function ContactInfo() {
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
    <div ref={sectionRef} className={`aos-fade-right ${isVisible ? 'aos-animate' : ''}`}>
      <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon
          return (
            <a
              key={index}
              href={detail.href}
              className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group"
            >
              <div className="shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-linear-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <Icon size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground/60">{detail.label}</p>
                <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {detail.value}
                </p>
              </div>
            </a>
          )
        })}
      </div>

      {/* Additional Info */}
      <div className="mt-8 p-6 bg-linear-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
        <h3 className="font-bold text-foreground mb-3">Quick Response</h3>
        <p className="text-sm text-foreground/70 leading-relaxed">
          We typically respond to inquiries within 2 business hours during working hours. For urgent matters, please
          call us directly.
        </p>
      </div>
    </div>
  )
}

"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+44 2075693010",
    href: "tel:+442075693010",
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
    value: "Mon - Fri: 6AM - 6PM",
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
    <div ref={sectionRef} className={`aos-fade-right max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ${isVisible ? 'aos-animate' : ''}`}>
      <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon
          const Component = detail.href !== "#" ? "a" : "div"

          return (
            <Component
              key={index}
              href={detail.href !== "#" ? detail.href : undefined}
              className={`flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group text-center h-full ${detail.href === "#" ? "cursor-default" : "cursor-pointer"}`}
            >
              <div className="mb-3">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-linear-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <Icon size={28} className="text-primary" />
                </div>
              </div>
              <div className="w-full">
                <p className="text-xs font-medium text-foreground/60 uppercase tracking-wide mb-1">{detail.label}</p>
                <p className={`text-sm font-semibold text-foreground leading-tight ${detail.href !== "#" ? "group-hover:text-primary" : ""} transition-colors`}>
                  {detail.value}
                </p>
              </div>
            </Component>
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

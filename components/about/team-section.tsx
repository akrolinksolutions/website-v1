"use client"

import { useEffect, useRef, useState } from "react"

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & Chief Customs Officer",
    image: "/team-member-1.jpg",
  },
  {
    name: "Michael Chen",
    role: "Head of Documentation",
    image: "/team-member-2.jpg",
  },
  {
    name: "Emma Williams",
    role: "Compliance Specialist",
    image: "/team-member-3.jpg",
  },
  {
    name: "David Martinez",
    role: "Client Relations Manager",
    image: "/team-member-4.jpg",
  },
]

export default function TeamSection() {
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
          <h2 className="aos-fade-up text-4xl lg:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="aos-fade-up aos-delay-200 text-lg text-foreground/60 max-w-2xl mx-auto">
            Experienced customs professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group text-center aos-fade-up ${isVisible ? 'aos-animate' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-foreground/60 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client";

import { Plane, FileText, Zap, Users, Ban } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: FileText,
    title: "Custom Clearance using CDS",
    description:
      "We handle the full import declaration through UK’s CDS system so your courier shipment clears without delay.",
  },
  {
    icon: Zap,
    title: "HS Code Classification",
    description:
      "We analyse your product, assign the optimal HS code, and make sure you pay the lowest ethically-valid duty on arrival.",
  },
  {
    icon: Users,
    title: "Border Force Coordination",
    description:
      "We liaise directly with UK Border Force & CFL at Heathrow to manage inspections, release and paperwork — so you don’t get stuck.",
  },
  {
    icon: Ban,
    title: "Prohibited Items",
    description: "Know More",
  },
];

export default function ServicesOverview() {
  const router = useRouter();
  const [animatedElements, setAnimatedElements] = useState<Set<number>>(
    new Set()
  );
  const sectionRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleDiv, setIsVisibleDiv] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setAnimatedElements((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all items
    itemRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisibleDiv(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );
    if (divRef.current) {
      observer.observe(divRef.current);
    }
    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);
  return (
    <section className="pb-20 pt-0 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={divRef}
          className={`text-center mb-16 ${isVisibleDiv ? "aos-animate" : ""}`}
        >
          <h2
            className={`aos-fade-up ${
              isVisibleDiv ? "aos-animate" : ""
            } text-4xl lg:text-5xl font-bold text-foreground mb-4`}
          >
            Our Services
          </h2>
          <p
            className={`aos-fade-up ${
              isVisibleDiv ? "aos-animate" : ""
            } aos-delay-200 text-lg text-foreground/60 max-w-2xl mx-auto`}
          >
            Specialized customs clearance services for CFL shipments at Heathrow
            Airport, designed to minimize costs and maximize efficiency
          </p>
        </div>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isAnimated = animatedElements.has(index);
            const isLastItem = index === services.length - 1;

            return (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`group p-6 bg-card rounded-xl border border-border hover-lift transition-all duration-300 ${
                  isAnimated ? "aos-fade-up aos-animate" : "aos-fade-up"
                } ${isLastItem ? "cursor-pointer" : ""}`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                onClick={
                  isLastItem
                    ? () => router.push("/prohibited-items")
                    : undefined
                }
              >
                <div className="w-12 h-12 bg-linear-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <Icon
                    size={24}
                    className="text-primary transition-colors duration-300 group-hover:text-accent"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p
                  className={`text-foreground/60 text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300${
                    isLastItem ? "cursor-pointer underline" : ""
                  }`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

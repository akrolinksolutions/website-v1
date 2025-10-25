"use client";

import { useEffect, useRef, useState } from "react";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div
            className={`p-8 bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 aos-fade-left ${
              isVisible ? "aos-animate" : ""
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Target size={24} className="text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Our Mission
              </h2>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              To deliver hassle-free customs clearance services for air courier
              shipments at Heathrow Airport through CFL, ensuring shipments are
              cleared quickly, accurately, and without complications. We go
              beyond standard clearance by helping identify the most accurate
              and cost-effective HS codes, minimizing import duties and taxes
              wherever ethically possible.
            </p>
          </div>

          {/* Vision */}
          <div
            className={`p-8 bg-linear-to-br from-accent/10 to-primary/10 rounded-2xl border border-accent/20 aos-fade-right ${
              isVisible ? "aos-animate" : ""
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <Eye size={24} className="text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              To become the leading CFL customs clearance specialist at Heathrow
              Airport, recognized for our technology-enabled processes and
              experienced agents who ensure every shipment is processed
              efficiently. We aim to set new standards in reducing clearance
              delays and unnecessary costs while maintaining the highest levels
              of speed and precision in customs clearance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

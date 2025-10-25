"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedDeliveryPlane, LogisticsBackground } from "@/components/ui/logistics-animations";

export default function AboutHero() {
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
        threshold: 0.1,
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
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-background via-background to-primary/5 pt-20"
    >
      {/* Company Branding */}


      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Logistics animations background */}
      <LogisticsBackground />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className={`aos-fade-up ${isVisible ? "aos-animate" : ""}`}>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About{" "}
            <span className="text-primary">
              Akrolink Solutions
            </span>
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-4xl mx-auto mb-8">
            We specialize in UK customs broker services for air courier shipments arriving at Heathrow Airport, processed through Courier
            Facility Limited (CFL). As a dedicated UK customs broker, we handle
            every step of the import clearance process with expert knowledge
            of UK customs regulations, import duty structures, and HS code classification for duty optimisation.
          </p>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[200px]">
            <div className="bg-background/80 backdrop-blur-md rounded-xl p-6 border border-border/50 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                UK Customs Broker Expertise
              </h3>
              <p className="text-sm text-foreground/70">
                Years of specialized experience in CFL customs clearance at Heathrow
              </p>
            </div>

            <div className="bg-background/80 backdrop-blur-md rounded-xl p-6 border border-border/50 shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Fast UK Import Clearance
              </h3>
              <p className="text-sm text-foreground/70">
                Streamlined processes for quick customs clearance at Heathrow
              </p>
            </div>

            <div className="bg-background/80 backdrop-blur-md rounded-xl p-6 border border-border/50 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Duty Optimisation for UK Imports
              </h3>
              <p className="text-sm text-foreground/70">
                Expert HS code classification for optimal duty rates on courier shipments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

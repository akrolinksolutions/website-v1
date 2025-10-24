"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Circle } from "lucide-react";

// Timeline connector component
const TimelineConnector = ({
  isVisible,
  delay = 0,
  isLast = false,
}: {
  isVisible: boolean;
  delay?: number;
  isLast?: boolean;
}) => {
  return (
    <div className="absolute left-8 top-16 w-0.5 h-full">
      <div
        className="w-full h-full bg-linear-to-b from-accent/30 to-accent/10 rounded-full"
        style={{
          animation: isVisible
            ? `timelineDraw 1.5s ease-in-out forwards`
            : "none",
          animationDelay: `${delay}ms`,
          transform: "scaleY(0)",
          transformOrigin: "top",
        }}
      />
      {!isLast && (
        <div
          className="absolute top-0 left-0 w-full h-0.5 bg-accent/20 rounded-full"
          style={{
            animation: isVisible
              ? `timelineGlow 2s ease-in-out infinite`
              : "none",
            animationDelay: `${delay + 800}ms`,
          }}
        />
      )}
    </div>
  );
};

// Timeline step component
const TimelineStep = ({
  step,
  index,
  isVisible,
  isLast = false,
}: {
  step: any;
  index: number;
  isVisible: boolean;
  isLast?: boolean;
}) => {
  return (
    <div className="relative flex items-start gap-8 group">
      {/* Timeline line and connector */}
      <div className="relative flex flex-col items-center">
        {/* Step circle */}
        <div
          className={`relative z-10 w-16 h-16 rounded-full border-4 border-accent/20 bg-card flex items-center justify-center transition-all duration-500 group-hover:border-accent group-hover:bg-accent/5 ${
            isVisible ? "animate-scale-in" : "opacity-0 scale-0"
          }`}
          style={{
            animationDelay: `${index * 200}ms`,
            transitionDelay: `${index * 200}ms`,
          }}
        >
          <div className="text-2xl font-bold text-accent">{step.number}</div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Timeline connector */}
        {!isLast && (
          <TimelineConnector
            isVisible={isVisible}
            delay={index * 200 + 400}
            isLast={isLast}
          />
        )}
      </div>

      {/* Content card */}
      <div
        className={`flex-1 pb-16 transition-all duration-500 ${
          isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-8"
        }`}
        style={{
          animationDelay: `${index * 200 + 200}ms`,
          transitionDelay: `${index * 200 + 200}ms`,
        }}
      >
        <div className="bg-card rounded-xl border border-border hover:border-accent p-8 shadow-lg hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-card group-hover:to-accent/5">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
            {step.title}
          </h3>
          <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
            {step.description}
          </p>

          {/* Decorative elements */}
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent/40" />
            <div className="w-1 h-1 rounded-full bg-accent/30" />
            <div className="w-1 h-1 rounded-full bg-accent/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

const steps = [
  {
    number: "01",
    title: "CFL Shipment Arrival",
    description:
      "Your air courier shipment arrives at Heathrow and is processed through CFL facility.",
  },
  {
    number: "02",
    title: "Documentation Review",
    description:
      "Our team reviews all shipment documentation and prepares necessary import declarations for CFL processing.",
  },
  {
    number: "03",
    title: "HS Code Classification",
    description:
      "We analyze and classify your goods with the most accurate and cost-effective HS code for duty optimization.",
  },
  {
    number: "04",
    title: "CDS Submission to HMRC",
    description:
      "Submit import declarations (CDS) to HMRC with full compliance, ensuring accurate duty and tax calculations.",
  },
  {
    number: "05",
    title: "UK Border Force Coordination",
    description:
      "Coordinate with UK Border Force and CFL for expedited customs clearance at Heathrow Airport.",
  },
  {
    number: "06",
    title: "Clearance & Delivery",
    description:
      "Your goods are cleared through customs and ready for delivery. We provide ongoing support and guidance.",
  },
];

export default function ProcessSection() {
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
    <section
      ref={sectionRef}
      className="py-20 bg-linear-to-br from-primary/5 to-accent/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Process
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            A specialized CFL customs clearance process designed for efficiency,
            compliance, and cost optimization at Heathrow Airport
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute left-8 top-0 w-0.5 h-full bg-linear-to-b from-accent/20 via-accent/30 to-accent/10 rounded-full" />

          {/* Timeline steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <TimelineStep
                key={index}
                step={step}
                index={index}
                isVisible={isVisible}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Zap, Shield, TrendingUp, Smile } from "lucide-react";
import { useEffect, useState } from "react";

const reasons = [
  {
    icon: Zap,
    title: "CFL Customs Clearance Specialist Heathrow",
    description:
      "Dedicated expertise in CFL customs clearance at Heathrow with technology-enabled processes for fast, accurate processing of air courier shipments.",
  },
  {
    icon: TrendingUp,
    title: "Duty & Cost Optimisation for UK Imports",
    description:
      "We identify the most accurate and cost-effective HS codes for UK imports, minimizing import duties and taxes wherever ethically possible through expert classification.",
  },
  {
    icon: Shield,
    title: "UK Customs Broker Experts",
    description:
      "In-depth knowledge of UK customs regulations, import duty structures, and commodity classification for seamless clearance of courier shipments at Heathrow.",
  },
  {
    icon: Smile,
    title: "Hassle-Free UK Import Clearance",
    description:
      "We handle every step from CDS customs declaration to UK Border Force coordination, ensuring your courier shipments clear customs smoothly and at the lowest possible cost.",
  },
];

export default function WhyChooseUs() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="py-20 bg-linear-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Akrolink Solutions - UK Customs Broker
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            We combine CFL expertise, technology-enabled processes, and
            experienced UK customs broker agents to deliver hassle-free customs clearance at
            Heathrow for air courier shipments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`flex gap-6 p-8 bg-card rounded-xl border border-border hover:border-accent transition-all duration-300 ${isLoaded ? "animate-fade-in-up" : "opacity-0"
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-linear-to-br from-primary to-accent">
                    <Icon size={24} className="text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

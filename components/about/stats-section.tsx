"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Shipments Cleared", value: "576k +" },
  { label: "Years of Experience", value: "5+" },
  { label: "Average Clearance Time", value: "4 hrs" },
];

export default function StatsSection() {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 aos-fade-up flex flex-col items-center justify-center ${
                isVisible ? "aos-animate" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent mb-2 text-center">
                {stat.value}
              </div>
              <p className="text-foreground/60 font-medium text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

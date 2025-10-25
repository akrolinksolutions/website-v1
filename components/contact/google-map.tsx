"use client";

import { useEffect, useRef, useState } from "react";

export default function GoogleMap() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <div
      ref={sectionRef}
      className={`aos-fade-up ${isVisible ? "aos-animate" : ""}`}
    >
      <h3 className="text-xl font-semibold text-foreground mb-4">
        Our Location
      </h3>
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        <div className="h-64 md:h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8988!2d-0.1427!3d51.5194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2b8a8a8a8a%3A0x8a8a8a8a8a8a8a8a!2s167-169%20Great%20Portland%20St%2C%20London%20W1W%205PF%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Akrolink Solutions Location"
            className="rounded-xl"
          ></iframe>
        </div>
        <div className="p-4">
          <h4 className="font-semibold text-foreground mb-2">
            Akrolink Solutions
          </h4>
          <p className="text-sm text-foreground/70 mb-2">
            167-169 Great Portland Street, 5th Floor
          </p>
          <p className="text-sm text-foreground/70 mb-2">
            London, United Kingdom, W1W 5PF
          </p>
          <a
            href="https://maps.google.com/maps?q=167-169+Great+Portland+Street+London+W1W+5PF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-accent transition-colors text-sm font-medium"
          >
            View on Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
}

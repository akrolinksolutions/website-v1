"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    shipmentType: "",
    noOfShipments: "",
    originCountry: "",
    destinationCountry: "",
    goodsDescription: "",
    estimatedValue: "",
    urgency: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Check if all required fields are filled
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.shipmentType.trim() !== "" &&
    formData.noOfShipments.trim() !== "" &&
    formData.originCountry.trim() !== "" &&
    formData.goodsDescription.trim() !== "";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType: "quote",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send quote request");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        shipmentType: "",
        noOfShipments: "",
        originCountry: "",
        destinationCountry: "United Kingdom",
        goodsDescription: "",
        estimatedValue: "",
        urgency: "",
        additionalInfo: "",
      });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
      className={`aos-fade-left ${isVisible ? "aos-animate" : ""}`}
    >
      <h2 className="text-3xl font-bold text-foreground mb-8">
        Get Your Free Quote
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="+91 1234567890"
            />
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Courier Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="Your Company"
            />
          </div>

          {/* Shipment Type */}
          <div>
            <label
              htmlFor="shipmentType"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Shipment Type *
            </label>
            <select
              id="shipmentType"
              name="shipmentType"
              value={formData.shipmentType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <option value="">Select shipment type</option>
              <option value="air-courier">
                Low Value Goods (Gift below 39 GBP)
              </option>
              <option value="sea-freight">
                High Value Goods (Above 39 GBP)
              </option>
              <option value="air-freight">Amazon FBA Goods</option>
              <option value="express">GSP Goods</option>
              <option value="other">Goods Requires PVA</option>
            </select>
          </div>
          {/* Number of Packages */}
          <div>
            <label
              htmlFor="shipmentType"
              className="block text-sm font-medium text-foreground mb-2"
            >
              No of Shipments *
            </label>
            <input
              type="number"
              id="noOfShipments"
              name="noOfShipments"
              value={formData.noOfShipments}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          {/* Origin Country */}
          <div>
            <label
              htmlFor="originCountry"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Origin Country *
            </label>
            <input
              type="text"
              id="originCountry"
              name="originCountry"
              value={formData.originCountry}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="e.g., China, USA, Germany"
            />
          </div>

          {/* Destination Country */}
          <div>
            <label
              htmlFor="destinationCountry"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Destination Country *
            </label>
            <input
              readOnly
              type="text"
              id="destinationCountry"
              name="destinationCountry"
              value={formData.destinationCountry}
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="United Kingdom"
            />
          </div>

          {/* Estimated Value */}
          <div>
            <label
              htmlFor="estimatedValue"
              className="block text-sm font-medium text-foreground mb-2"
            >
              CFL Courier Code
            </label>
            <input
              type="text"
              id="estimatedValue"
              name="estimatedValue"
              value={formData.estimatedValue}
              onChange={handleChange}
              maxLength={3}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="ABC"
            />
          </div>
        </div>

        {/* Goods Description */}
        <div>
          <label
            htmlFor="goodsDescription"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Goods Description *
          </label>
          <textarea
            id="goodsDescription"
            name="goodsDescription"
            value={formData.goodsDescription}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
            placeholder="Please describe your goods in detail (materials, purpose, quantity, etc.)"
          ></textarea>
        </div>

        {/* Urgency */}
        <div>
          <label
            htmlFor="urgency"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Urgency Level
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            <option value="">Select urgency</option>
            <option value="standard">Standard (5-7 business days)</option>
            <option value="express">Express (2-3 business days)</option>
            <option value="urgent">Urgent (Same day)</option>
          </select>
        </div>

        {/* Additional Information */}
        <div>
          <label
            htmlFor="additionalInfo"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
            placeholder="Any special requirements, existing HS codes, or additional notes..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !isFormValid}
          className="w-full px-6 py-3 bg-linear-to-r from-primary to-accent text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting && <Spinner className="size-4" />}
          {isSubmitting ? "Getting Your Quote..." : "Get Free Quote"}
        </button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg aos-fade-up">
            <p className="text-green-800 font-medium">
              Thank you! We'll prepare your quote and get back to you within 24
              hours.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg aos-fade-up">
            <p className="text-red-800 font-medium">
              Something went wrong. Please try again.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

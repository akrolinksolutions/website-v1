"use client"

import React from 'react'

// Animated World Map Component
export function AnimatedWorldMap() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* World map outline */}
        <path
          d="M50 200 Q150 180 250 200 T450 200 Q550 220 650 200 T750 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary/30"
        />

        {/* Shipping routes */}
        <path
          d="M100 180 Q200 160 300 180 T500 180 Q600 200 700 180"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="text-accent/40 animate-pulse"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;10"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>

        {/* Airport markers */}
        <circle cx="200" cy="180" r="4" fill="currentColor" className="text-primary/50">
          <animate
            attributeName="r"
            values="4;8;4"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="400" cy="200" r="4" fill="currentColor" className="text-primary/50">
          <animate
            attributeName="r"
            values="4;8;4"
            dur="3s"
            repeatCount="indefinite"
            begin="1s"
          />
        </circle>
        <circle cx="600" cy="190" r="4" fill="currentColor" className="text-primary/50">
          <animate
            attributeName="r"
            values="4;8;4"
            dur="3s"
            repeatCount="indefinite"
            begin="2s"
          />
        </circle>
      </svg>
    </div>
  )
}

// Animated Delivery Truck Component
export function AnimatedDeliveryTruck() {
  return (
    <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-100">
      <svg
        viewBox="0 0 200 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Truck body */}
        <rect x="20" y="40" width="80" height="40" rx="5" fill="currentColor" className="text-primary/40" />
        {/* Truck cab */}
        <rect x="100" y="30" width="50" height="50" rx="5" fill="currentColor" className="text-primary/40" />
        {/* Wheels */}
        <circle cx="40" cy="85" r="12" fill="currentColor" className="text-foreground/30">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 40 85;360 40 85"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="110" cy="85" r="12" fill="currentColor" className="text-foreground/30">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 110 85;360 110 85"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Movement animation */}
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 20,0; 0,0"
          dur="8s"
          repeatCount="indefinite"
        />
      </svg>
    </div>
  )
}

// Animated Plane Component
export function AnimatedPlane() {
  return (
    <div className="absolute top-1/3 left-1/4 w-24 h-24 opacity-15">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Plane body */}
        <ellipse cx="50" cy="50" rx="25" ry="8" fill="currentColor" className="text-primary/40" />
        {/* Wings */}
        <ellipse cx="50" cy="50" rx="8" ry="20" fill="currentColor" className="text-primary/40" />
        {/* Movement animation */}
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 30,-10; 0,0"
          dur="6s"
          repeatCount="indefinite"
        />
      </svg>
    </div>
  )
}

// Animated Package Component
export function AnimatedPackage() {
  return (
    <div className="absolute bottom-1/3 left-1/3 w-16 h-16 opacity-20">
      <svg
        viewBox="0 0 80 80"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Package */}
        <rect x="20" y="30" width="40" height="30" rx="3" fill="currentColor" className="text-accent/50" />
        {/* Package tape */}
        <rect x="20" y="40" width="40" height="3" fill="currentColor" className="text-foreground/40" />
        {/* Floating animation */}
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,-10; 0,0"
          dur="4s"
          repeatCount="indefinite"
        />
      </svg>
    </div>
  )
}

// Animated Shipping Container Component
export function AnimatedShippingContainer() {
  return (
    <div className="absolute bottom-1/4 right-1/3 w-20 h-20 opacity-15">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Container */}
        <rect x="20" y="40" width="60" height="40" rx="2" fill="currentColor" className="text-primary/40" />
        {/* Container lines */}
        <line x1="35" y1="40" x2="35" y2="80" stroke="currentColor" strokeWidth="2" className="text-foreground/30" />
        <line x1="50" y1="40" x2="50" y2="80" stroke="currentColor" strokeWidth="2" className="text-foreground/30" />
        <line x1="65" y1="40" x2="65" y2="80" stroke="currentColor" strokeWidth="2" className="text-foreground/30" />
        {/* Crane hook */}
        <line x1="50" y1="20" x2="50" y2="40" stroke="currentColor" strokeWidth="3" className="text-foreground/40" />
        <circle cx="50" cy="20" r="3" fill="currentColor" className="text-foreground/40" />
        {/* Lifting animation */}
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,-5; 0,0"
          dur="5s"
          repeatCount="indefinite"
        />
      </svg>
    </div>
  )
}

// Main animated background component
export function LogisticsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatedWorldMap />
      <AnimatedDeliveryTruck />
      <AnimatedPlane />
      <AnimatedPackage />
      <AnimatedShippingContainer />
    </div>
  )
}

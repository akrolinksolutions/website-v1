"use client";

import React from "react";

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
  );
}

// Animated Delivery Plane Component
export function AnimatedDeliveryPlane() {
  return (
    <div className="absolute top-1/2 w-48 h-32 opacity-70">
      <svg
        fill="currentColor"
        width="100%"
        height="100%"
        viewBox="0 0 500 500"
        id="Layer_1"
        version="1.1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="plane_00000063605717015805526360000012662462154323643310_">
          <g>
            <g>
              <g>
                <path
                  d="M478,281.67l-6.1-6.87c-20.94-25.92-51.85-24.47-54.26-24.32l-220.14,1.79l-9.1-15.14h-10.29l4.15,14      c-8.4-2.04-15.94-6.65-21.59-13.29l-59.32-69.72H74.87l6.44,57.14l-45.08-46.85H16.91l44.73,80.84l23.82,3.88l1.31,11.77      c0.93,8.32,6.27,15.39,13.95,18.44c55.44,22.03,131.23,25.63,131.99,25.66l94.76,0v-6h-94.56      c-2.56-0.12-76.18-3.86-129.98-25.24c-5.61-2.23-9.52-7.41-10.2-13.53l-1.81-16.3l-25.44-4.14l-38.39-69.38h6.6l55.58,57.76      l-7.67-68.05h16.99l57.52,67.61c7.65,8.99,18.32,14.74,30.05,16.21l4.55,0.57l-3.45-11.63l6.87,11.42l223.65-1.82l0.19-0.01      c0.3-0.02,29.99-1.81,49.3,22.15l6.25,7.03c1.15,1.29,1.67,3.01,1.44,4.72c-0.23,1.69-1.18,3.2-2.61,4.12      c-19.25,12.47-50.72,16.8-69.65,18.29c0.03,0.52,0.06,1.03,0.06,1.56v0.4c0,1.39-0.13,2.75-0.37,4.08      c40.55-3.06,62.19-12.14,73.22-19.3c2.9-1.88,4.83-4.92,5.3-8.35C481.36,287.73,480.31,284.27,478,281.67z"
                  className="text-primary/80"
                />
              </g>
              <path
                d="M379.63,331.87H339c-3.05,0-5.53-2.48-5.53-5.53v-23.58c0-3.05,2.48-5.53,5.53-5.53h40.63c9.44,0,17.12,7.68,17.12,17.12     v0.4C396.75,324.19,389.07,331.87,379.63,331.87z M339.47,325.87h40.16c6.13,0,11.12-4.99,11.12-11.12v-0.4     c0-6.13-4.99-11.12-11.12-11.12h-40.16V325.87z"
                className="text-primary/80"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M476.96,280.5h-36.43v-7.53c0-2.57,1.02-4.97,2.87-6.75c1.85-1.79,4.29-2.72,6.85-2.63l10.44,0.37l0.77,0.6     c3.84,2.99,7.35,6.44,10.43,10.25L476.96,280.5z M446.53,274.5h17.08c-1.6-1.64-3.3-3.18-5.08-4.62l-8.49-0.3     c-0.93-0.04-1.81,0.3-2.47,0.95c-0.67,0.64-1.04,1.51-1.04,2.44V274.5z"
                className="text-primary/80"
              />
            </g>
            <g>
              <g>
                <path
                  d="M316,283.22h-17.54v-17.54H316V283.22z M304.47,277.22H310v-5.54h-5.54V277.22z"
                  className="text-primary/70"
                />
              </g>
              <g>
                <path
                  d="M316,283.22h-17.54v-17.54H316V283.22z M304.47,277.22H310v-5.54h-5.54V277.22z"
                  className="text-primary/70"
                />
              </g>
              <g>
                <path
                  d="M338.92,283.22h-17.54v-17.54h17.54V283.22z M327.38,277.22h5.54v-5.54h-5.54V277.22z"
                  className="text-primary/70"
                />
              </g>
              <g>
                <path
                  d="M316,283.22h-17.54v-17.54H316V283.22z M304.47,277.22H310v-5.54h-5.54V277.22z"
                  className="text-primary/70"
                />
              </g>
              <g>
                <path
                  d="M338.92,283.22h-17.54v-17.54h17.54V283.22z M327.38,277.22h5.54v-5.54h-5.54V277.22z"
                  className="text-primary/70"
                />
              </g>
              <g>
                <path
                  d="M361.84,283.22H344.3v-17.54h17.54V283.22z M350.3,277.22h5.54v-5.54h-5.54V277.22z"
                  className="text-primary/70"
                />
              </g>
              <g>
                <path
                  d="M316,283.22h-17.54v-17.54H316V283.22z M304.47,277.22H310v-5.54h-5.54V277.22z"
                  className="text-primary/70"
                />
              </g>
              <g>
                <path
                  d="M338.92,283.22h-17.54v-17.54h17.54V283.22z M327.38,277.22h5.54v-5.54h-5.54V277.22z"
                  className="text-primary/70"
                />
              </g>
              <g>
                <path
                  d="M361.84,283.22H344.3v-17.54h17.54V283.22z M350.3,277.22h5.54v-5.54h-5.54V277.22z"
                  className="text-primary/70"
                />
              </g>
              <g>
                <path
                  d="M384.75,283.22h-17.54v-17.54h17.54V283.22z M373.22,277.22h5.54v-5.54h-5.54V277.22z"
                  className="text-primary/70"
                />
              </g>
              <g>
                <path
                  d="M338.92,283.22h-17.54v-17.54h17.54V283.22z M327.38,277.22h5.54v-5.54h-5.54V277.22z"
                  className="text-primary/70"
                />
              </g>
              <g>
                <path
                  d="M361.84,283.22H344.3v-17.54h17.54V283.22z M350.3,277.22h5.54v-5.54h-5.54V277.22z"
                  className="text-primary/70"
                />
              </g>
              <g>
                <path
                  d="M384.75,283.22h-17.54v-17.54h17.54V283.22z M373.22,277.22h5.54v-5.54h-5.54V277.22z"
                  className="text-primary/70"
                />
              </g>
              <g>
                <path
                  d="M407.67,283.22h-17.54v-17.54h17.54V283.22z M396.14,277.22h5.54v-5.54h-5.54V277.22z"
                  className="text-primary/70"
                />
              </g>
            </g>
          </g>
        </g>
        {/* Horizontal movement animation */}
        <animateTransform
          attributeName="transform"
          type="translate"
          values="-500,0; 1500,0; -500,0"
          dur="25s"
          repeatCount="indefinite"
        />
      </svg>
    </div>
  );
}

// Animated Plane Component
export function AnimatedPlane() {
  return (
    <div className="absolute top-0 left-1/4 w-24 h-24 opacity-15">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Plane body */}
        <ellipse
          cx="50"
          cy="50"
          rx="25"
          ry="8"
          fill="currentColor"
          className="text-primary/40"
        />
        {/* Wings */}
        <ellipse
          cx="50"
          cy="50"
          rx="8"
          ry="20"
          fill="currentColor"
          className="text-primary/40"
        />
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
  );
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
        <rect
          x="20"
          y="30"
          width="40"
          height="30"
          rx="3"
          fill="currentColor"
          className="text-accent/50"
        />
        {/* Package tape */}
        <rect
          x="20"
          y="40"
          width="40"
          height="3"
          fill="currentColor"
          className="text-foreground/40"
        />
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
  );
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
        <rect
          x="20"
          y="40"
          width="60"
          height="40"
          rx="2"
          fill="currentColor"
          className="text-primary/40"
        />
        {/* Container lines */}
        <line
          x1="35"
          y1="40"
          x2="35"
          y2="80"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground/30"
        />
        <line
          x1="50"
          y1="40"
          x2="50"
          y2="80"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground/30"
        />
        <line
          x1="65"
          y1="40"
          x2="65"
          y2="80"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground/30"
        />
        {/* Crane hook */}
        <line
          x1="50"
          y1="20"
          x2="50"
          y2="40"
          stroke="currentColor"
          strokeWidth="3"
          className="text-foreground/40"
        />
        <circle
          cx="50"
          cy="20"
          r="3"
          fill="currentColor"
          className="text-foreground/40"
        />
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
  );
}

// Main animated background component
export function LogisticsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatedDeliveryPlane />
      <AnimatedWorldMap />
      <AnimatedPackage />
      <AnimatedShippingContainer />
    </div>
  );
}

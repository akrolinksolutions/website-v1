export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.akrolinksolutions.com/#organization",
    name: "Akrolink Solutions",
    description:
      "Specialized customs clearance services for air courier shipments at Heathrow Airport through CFL",
    url: "https://www.akrolinksolutions.com",
    telephone: "+44 2075693010",
    email: "info@akrolinksolutions.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "167-169 Great Portland Street, 5th Floor",
      addressLocality: "London",
      postalCode: "W1W 5PF",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.47,
      longitude: -0.4543,
    },
    openingHours: "Mo-Fr 08:00-18:00",
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    currenciesAccepted: "GBP",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 51.47,
        longitude: -0.4543,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "CFL Customs Clearance Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CFL Customs Clearance",
            description:
              "Specialized customs clearance for air courier shipments at Heathrow through CFL",
            provider: {
              "@type": "Organization",
              name: "Akrolink Solutions",
            },
            areaServed: {
              "@type": "Country",
              name: "United Kingdom",
            },
          },
          price: "Contact for quote",
          priceCurrency: "GBP",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HS Code Classification",
            description: "Expert HS code classification for duty optimization",
            provider: {
              "@type": "Organization",
              name: "Akrolink Solutions",
            },
          },
          price: "Contact for quote",
          priceCurrency: "GBP",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UK Border Force Coordination",
            description:
              "Direct coordination with UK Border Force for seamless clearance",
            provider: {
              "@type": "Organization",
              name: "Akrolink Solutions",
            },
          },
          price: "Contact for quote",
          priceCurrency: "GBP",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "John Smith",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Excellent CFL customs clearance service at Heathrow. Fast, efficient, and cost-effective.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah Johnson",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Outstanding HS code classification and duty optimization. Saved us significant costs on import duties.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is CFL customs clearance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CFL (Courier Facility Limited) customs clearance is specialized customs processing for air courier shipments arriving at Heathrow Airport. We handle the complete customs clearance process for shipments processed through CFL facilities.",
        },
      },
      {
        "@type": "Question",
        name: "How long does customs clearance take at Heathrow?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our CFL customs clearance services typically process shipments within 24-48 hours, depending on the complexity of the goods and documentation requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help reduce import duties?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our expert HS code classification service helps identify the most accurate and cost-effective classification for your goods, potentially reducing import duties and taxes wherever ethically possible.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle CDS submissions to HMRC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we prepare and submit all necessary import declarations (CDS) to HMRC with full compliance, ensuring accurate duty and tax calculations for your CFL shipments.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

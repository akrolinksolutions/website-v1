import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileSearch, AlertCircle, Target, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "HS Code Classification for UK Imports - Complete Guide",
  description: "Complete guide to HS code classification for UK imports. Learn how to classify products correctly, find the right HS code, and optimize duty rates for your imports at Heathrow.",
  keywords: [
    "HS code classification UK",
    "HS code UK imports",
    "how to classify HS code UK",
    "UK commodity code",
    "HS code finder UK",
    "UK import classification",
    "duty optimization HS codes",
    "best HS code for low duty"
  ],
  openGraph: {
    title: "HS Code Classification for UK Imports - Complete Guide",
    description: "Learn how to correctly classify products under HS codes for UK imports and optimize duty rates at Heathrow.",
    type: "article",
  },
}

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "HS Code Classification for UK Imports: Complete Guide",
    "description": "Complete guide to HS code classification for UK imports. Learn how to classify products correctly, find the right HS code, and optimize duty rates for your imports at Heathrow.",
    "image": "https://www.akrolinksolutions.com/customs-clearance-logistics-warehouse-heathrow.jpg",
    "author": {
      "@type": "Organization",
      "name": "Akrolink Solutions",
      "url": "https://www.akrolinksolutions.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Akrolink Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.akrolinksolutions.com/logoWithBg.png"
      }
    },
    "datePublished": "2025-01-05",
    "dateModified": "2025-01-05",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.akrolinksolutions.com/blog/hs-code-classification-uk-imports"
    }
  };

  return (
    <main className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8"
          aria-label="Return to blog homepage"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            HS Code Classification for UK Imports: Complete Guide
          </h1>

        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-foreground/90 font-medium mb-6">
            HS code classification is crucial for UK imports. The correct code determines duty rates, enables customs clearance, and can significantly impact your import costs. This guide explains everything you need to know about classifying products under HS codes for UK imports.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            What is an HS Code?
          </h2>
          <p>
            The Harmonized System (HS) code is an internationally standardized system of names and numbers used to classify traded products. HS codes are used by customs authorities worldwide to identify products and determine applicable tariffs and duties.
          </p>

          <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
            <div className="flex items-start gap-3">
              <FileSearch className="text-accent mt-1" size={24} />
              <div>
                <h3 className="font-bold text-foreground mb-2">HS Code Structure</h3>
                <p className="text-foreground/80">
                  HS codes are 6-digit numbers. The UK extends this to 8 digits (UK commodity code) for statistical purposes. The first 6 digits are internationally standardized; digits 7-8 are country-specific.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            Why Correct HS Code Classification Matters
          </h2>
          <p>
            Incorrect HS code classification can lead to incorrect duty payments, customs delays, penalties, and compliance issues. Proper classification is essential for smooth customs clearance and optimal import costs.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Consequences of Incorrect Classification:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <AlertCircle className="text-accent shrink-0 mt-1" size={20} />
                <span><strong>Overpayment:</strong> Paying higher duty rates than necessary</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="text-accent shrink-0 mt-1" size={20} />
                <span><strong>Underpayment:</strong> Risk of penalties and back-payment demands</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="text-accent shrink-0 mt-1" size={20} />
                <span><strong>Customs Delays:</strong> Shipments held for classification review</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="text-accent shrink-0 mt-1" size={20} />
                <span><strong>Compliance Issues:</strong> HMRC investigations and audits</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            How to Classify Products Under HS Codes
          </h2>
          <p>
            Product classification follows specific rules and guidelines. The process requires understanding the product's characteristics, composition, function, and use.
          </p>

          <div className="space-y-6 my-8">
            <div className="border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Identify the Product</h3>
                  <p>
                    Determine the product's material composition, function, and end use. Consider specific features like size, weight, and technical specifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Check General Rules</h3>
                  <p>
                    Follow the 6 General Rules of the HS classification system. These rules help determine which code applies when a product could fit multiple categories.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Search HMRC Trade Tariff</h3>
                  <p>
                    Use the UK Trade Tariff tool to search for appropriate codes. Enter product keywords to find relevant classifications and descriptions.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Verify and Document</h3>
                  <p>
                    Cross-reference multiple sources, consult classification databases, and document your classification rationale for compliance purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            Common HS Code Categories
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-accent/10 border border-accent rounded-lg p-6">
              <BookOpen className="text-accent mb-3" size={28} />
              <h3 className="font-bold text-foreground mb-2">Consumer Electronics (85.XX)</h3>
              <p className="text-foreground/80 text-sm">
                Computers, phones, cameras, and electronic equipment. Rates typically 0-3%.
              </p>
            </div>
            <div className="bg-accent/10 border border-accent rounded-lg p-6">
              <BookOpen className="text-accent mb-3" size={28} />
              <h3 className="font-bold text-foreground mb-2">Textiles (50-63)</h3>
              <p className="text-foreground/80 text-sm">
                Clothing, fabrics, and textile products. Rates typically 8-12%.
              </p>
            </div>
            <div className="bg-accent/10 border border-accent rounded-lg p-6">
              <BookOpen className="text-accent mb-3" size={28} />
              <h3 className="font-bold text-foreground mb-2">Footwear (64)</h3>
              <p className="text-foreground/80 text-sm">
                Shoes, boots, and footwear accessories. Rates typically 10-17%.
              </p>
            </div>
            <div className="bg-accent/10 border border-accent rounded-lg p-6">
              <BookOpen className="text-accent mb-3" size={28} />
              <h3 className="font-bold text-foreground mb-2">Vehicles (87)</h3>
              <p className="text-foreground/80 text-sm">
                Cars, motorcycles, and vehicle parts. Rates typically 10%.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            Tips for Finding the Best HS Code
          </h2>
          <p>
            Here are practical tips to help you find the most appropriate HS code classification for your products.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Best Practices:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Target className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Be Specific:</strong> Use detailed product descriptions and specifications when searching for codes</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Check Notes:</strong> Read section and chapter notes in the trade tariff for guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Consider Material:</strong> Primary material composition often determines classification</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Function Matters:</strong> Product function and intended use affect classification</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            Duty Optimization with HS Codes
          </h2>
          <p>
            Proper HS code classification can help optimize your import duty costs. Some product classifications have different duty rates, and choosing the most appropriate code can result in significant savings.
          </p>

          <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
            <div className="flex items-start gap-3">
              <Target className="text-accent mt-1" size={24} />
              <div>
                <h3 className="font-bold text-foreground mb-2">Important Note</h3>
                <p className="text-foreground/80">
                  Always classify products based on their actual nature and use. Incorrectly classifying to obtain lower duty rates is illegal and can result in penalties. Work with experienced UK customs brokers for legitimate duty optimization.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            Benefits of Professional HS Code Classification
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Accuracy</h3>
              <p className="text-foreground/70 text-sm">
                Professional classification ensures correct codes and compliance with UK regulations.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Speed</h3>
              <p className="text-foreground/70 text-sm">
                Experienced brokers classify products quickly, preventing customs delays at Heathrow.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Duty Optimization</h3>
              <p className="text-foreground/70 text-sm">
                Expert knowledge helps identify legitimate duty optimization opportunities.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">Compliance</h3>
              <p className="text-foreground/70 text-sm">
                Proper documentation and classification protect against HMRC investigations.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            How Akrolink Solutions Can Help
          </h2>
          <p>
            Our expert UK customs broker team provides professional HS code classification services for all types of imports. We handle the entire process from product analysis to CDS declaration submission.
          </p>

          <div className="bg-primary/10 border border-primary rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Professional HS Code Classification?
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              Get expert HS code classification services from our UK customs broker team. We ensure accurate classification, duty optimization, and smooth customs clearance at Heathrow CFL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-quote"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Get Free Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

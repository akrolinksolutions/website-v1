import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calculator, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "UK Import Duty Calculation Guide 2024 - HS Codes, VAT & Fees",
  description: "Complete guide to UK import duty calculation including HS code classification, VAT rates, and customs fees. Learn how to calculate import costs for UK shipments.",
  keywords: [
    "UK import duty calculation",
    "import duty UK",
    "UK customs duty",
    "HS code duty rates",
    "UK VAT calculation imports",
    "import duty calculator UK",
    "UK customs fees",
    "duty optimization UK imports"
  ],
  openGraph: {
    title: "UK Import Duty Calculation Guide 2024",
    description: "Complete guide to calculating UK import duty, VAT, and customs fees for your shipments at Heathrow.",
    type: "article",
  },
}

export default function BlogPost() {
  return (
    <main className="pt-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            UK Import Duty Calculation Guide 2024: Complete Breakdown
          </h1>
          <p className="text-lg text-foreground/70 mb-4">
            Published: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-foreground/90 font-medium mb-6">
            Understanding UK import duty calculation is crucial for managing import costs. This comprehensive guide explains how HS code classification, duty rates, VAT, and customs fees work together to determine your total import costs.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            Understanding UK Import Duty Structure
          </h2>
          <p>
            UK import duty consists of three main components: duty rates (based on HS code classification), VAT (20% standard rate), and customs fees. Each component is calculated on specific values and can significantly impact your total import costs.
          </p>

          <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
            <div className="flex items-start gap-3">
              <Calculator className="text-accent mt-1" size={24} />
              <div>
                <h3 className="font-bold text-foreground mb-2">Quick Calculation Formula</h3>
                <p className="text-foreground/80">
                  Total Import Cost = CIF Value + Duty + (CIF + Duty) × VAT + Customs Handling Fees
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            Step 1: Determine CIF Value (Cost, Insurance, Freight)
          </h2>
          <p>
            The CIF value is the starting point for all calculations. It includes the cost of goods, insurance, and freight charges. This value is declared on your commercial invoice and used by HMRC to calculate duty and VAT.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-foreground mb-4">CIF Value Components:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Cost of Goods:</strong> Invoice price of the products</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Insurance:</strong> Shipping insurance costs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Freight:</strong> Shipping and delivery charges</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            Step 2: HS Code Classification and Duty Rates
          </h2>
          <p>
            The HS code determines the duty rate for your products. UK duty rates can range from 0% (duty-free) to over 20% depending on the commodity classification. Proper HS code classification is essential for accurate duty calculation and potential duty optimization.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-accent/10 border border-accent rounded-lg p-6">
              <TrendingUp className="text-accent mb-3" size={28} />
              <h3 className="font-bold text-foreground mb-2">Duty Rate Examples</h3>
              <ul className="space-y-2 text-sm">
                <li>Electronics: 0-3%</li>
                <li>Textiles: 8-12%</li>
                <li>Footwear: 10-17%</li>
                <li>Vehicles: 10%</li>
              </ul>
            </div>
            <div className="bg-accent/10 border border-accent rounded-lg p-6">
              <AlertTriangle className="text-accent mb-3" size={28} />
              <h3 className="font-bold text-foreground mb-2">Common Mistakes</h3>
              <ul className="space-y-2 text-sm">
                <li>Using incorrect HS codes</li>
                <li>Not considering trade agreements</li>
                <li>Overlooking anti-dumping duties</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            Step 3: Calculate Duty Amount
          </h2>
          <p>
            Once you have the CIF value and duty rate, calculate the duty amount by multiplying the CIF value by the duty rate percentage.
          </p>

          <div className="bg-card border border-border rounded-lg p-8 my-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Duty Calculation Example</h3>
            <div className="bg-background p-6 rounded-lg space-y-3">
              <div className="flex justify-between">
                <span className="text-foreground/70">CIF Value:</span>
                <span className="font-bold">£1,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Duty Rate (HS code):</span>
                <span className="font-bold">5%</span>
              </div>
              <hr className="border-border" />
              <div className="flex justify-between text-primary text-lg">
                <span className="font-bold">Duty Amount:</span>
                <span className="font-bold">£50</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            Step 4: Calculate VAT
          </h2>
          <p>
            VAT is calculated at 20% on the combined value of CIF plus duty. This is applied to most goods imported into the UK, with some exceptions for specific product categories.
          </p>

          <div className="bg-card border border-border rounded-lg p-8 my-8">
            <h3 className="text-xl font-bold text-foreground mb-4">VAT Calculation Example</h3>
            <div className="bg-background p-6 rounded-lg space-y-3">
              <div className="flex justify-between">
                <span className="text-foreground/70">CIF Value:</span>
                <span className="font-bold">£1,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">+ Duty Amount:</span>
                <span className="font-bold">£50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Subtotal:</span>
                <span className="font-bold">£1,050</span>
              </div>
              <div className="flex justify-between text-accent text-lg">
                <span className="font-bold">× VAT (20%):</span>
                <span className="font-bold">£210</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            Step 5: Customs Handling Fees
          </h2>
          <p>
            Couriers and customs brokers charge handling fees for processing your import. These fees are typically fixed amounts per shipment and vary by service provider.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Common Fees:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-accent shrink-0 mt-1" size={20} />
                <span><strong>CDS Declaration Fee:</strong> £10-£25 per declaration</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-accent shrink-0 mt-1" size={20} />
                <span><strong>Broker Handling Fee:</strong> £15-£50 per shipment</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-accent shrink-0 mt-1" size={20} />
                <span><strong>Storage Fees:</strong> If held in customs >24 hours</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            Complete Calculation Example
          </h2>
          <div className="bg-primary/10 border border-primary rounded-lg p-8 my-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Total Import Cost Breakdown</h3>
            <div className="bg-background p-6 rounded-lg space-y-4">
              <div className="flex justify-between text-lg">
                <span>CIF Value:</span>
                <span className="font-bold">£1,000.00</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Import Duty (5%):</span>
                <span className="font-bold">£50.00</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>VAT (20% on £1,050):</span>
                <span className="font-bold">£210.00</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Customs Fees:</span>
                <span className="font-bold">£25.00</span>
              </div>
              <hr className="border-primary" />
              <div className="flex justify-between text-2xl font-bold text-primary">
                <span>Total Import Cost:</span>
                <span>£1,285.00</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            How to Reduce UK Import Duty
          </h2>
          <p>
            Proper HS code classification and understanding of trade agreements can help minimize import duty. A professional UK customs broker can provide duty optimization strategies.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-accent/10 border border-accent rounded-lg p-6">
              <CheckCircle className="text-accent mb-3" size={28} />
              <h3 className="font-bold text-foreground mb-2">Expert HS Code Classification</h3>
              <p className="text-foreground/80 text-sm">
                Professional classification ensures accurate duty rates and identifies opportunities for lower-rate alternatives where appropriate.
              </p>
            </div>
            <div className="bg-accent/10 border border-accent rounded-lg p-6">
              <CheckCircle className="text-accent mb-3" size={28} />
              <h3 className="font-bold text-foreground mb-2">Trade Agreement Benefits</h3>
              <p className="text-foreground/80 text-sm">
                Take advantage of preferential rates under trade agreements like EU-UK or other bilateral agreements.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
            How Akrolink Solutions Can Help
          </h2>
          <p>
            Our expert UK customs broker team provides accurate import duty calculations and HS code classification services to help minimize your import costs while ensuring compliance.
          </p>

          <div className="bg-primary/10 border border-primary rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Help Calculating Your Import Duty?
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              Get accurate import duty calculations and HS code classification advice from our UK customs broker experts. We handle all documentation and customs processing at Heathrow CFL.
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

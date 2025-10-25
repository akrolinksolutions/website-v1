import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - UK Customs Clearance Guides & Insights | Akrolink Solutions",
  description: "Expert guides and insights on UK customs clearance, CFL Heathrow customs clearance, HS code classification, and UK import clearance services.",
  keywords: [
    "UK customs clearance blog",
    "CFL customs clearance guides",
    "HS code classification tips",
    "UK import duty advice",
    "customs clearance Heathrow guides"
  ],
}

const blogPosts = [
  {
    slug: "how-to-clear-courier-shipments-heathrow",
    title: "How to Clear Courier Shipments at Heathrow in 2024",
    description: "Complete guide on how to clear courier shipments at Heathrow Airport with CFL customs clearance, CDS declarations, and UK Border Force coordination.",
    date: "January 2024",
    category: "Guide",
  },
  {
    slug: "uk-import-duty-calculation-guide",
    title: "UK Import Duty Calculation Guide 2024",
    description: "Learn how to calculate UK import duty, VAT, and customs fees for your shipments. Complete breakdown of CIF values, HS codes, and duty rates.",
    date: "January 2024",
    category: "Guide",
  },
  {
    slug: "hs-code-classification-uk-imports",
    title: "HS Code Classification for UK Imports",
    description: "Complete guide to HS code classification for UK imports. Learn how to classify products correctly and optimize duty rates for your imports.",
    date: "January 2024",
    category: "Guide",
  },
]

export default function BlogPage() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              UK Customs Clearance{" "}
              <span className="text-primary">Blog & Guides</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Expert guides and insights on UK customs clearance, HS code classification, and UK import clearance services at Heathrow CFL.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-card rounded-xl border border-border hover:border-accent hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                    <FileText size={16} />
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-foreground/70 mb-4">{post.description}</p>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { XCircle, ShieldAlert, Ban } from "lucide-react"

const generalItems: string[] = [
  "Acids",
  "Aftershave",
  "Nail Varnish",
  "Passports",
  "Cash",
  "Compressed Gas",
  "Bleach",
  "Aerosols",
  "Plants",
  "Explosives",
  "Poisons",
  "Seeds",
  "Furs",
  "Ignitable Gas",
  "Incapacitating Sprays",
  "Ink or Toner Cartridges",
  "Ivory and ivory products",
  "Knives or weapons",
  "Live animals",
  "Meat or animal products",
  "Money and negotiable items",
  "Flammable products of any type",
  "Animal skins (non-domesticated)",
  "Batteries containing liquid",
  "Firearms or air rifles",
  "Alcoholic beverages",
  "Pornographic materials",
  "Tobacco and tobacco products",
  "Human remains/ashes",
]

const tntItems: string[] = [
  "Aerosol",
  "Aftershave",
  "Airbag",
  "Alcohol",
  "Ammunition/Ammo",
  "Animals of any form (alive or dead)",
  "Animal Blood",
  "Antique/Antiques",
  "Aromatherapy Oil",
  "Ashes",
  "Basin",
  "Battery",
  "Bed/Bed Frame",
  "Biological Samples",
  "Bicycle",
  "Bike",
  "BSA-Bovine serum albumin",
  "Canoe",
  "Firearm",
  "Firearms",
  "Fish (live or dead)",
  "Flat Screen Television",
  "Fragile Goods",
  "Cheques",
  "Food Items (Perishable Goods)",
  "Fragrance",
  "Gas",
  "Gearbox",
  "Gem",
  "Gun",
  "Hazardous Goods",
  "Herbal Steroids",
  "High Value Goods",
  "Household Furnishings",
  "Human Organs",
  "Infectious Substances",
  "Juice",
  "Lighter",
  "Liquid/Cream/Oil",
  "Meat",
  "Tobacco/Tobacco Products",
  "Ticket",
  "Television",
  "Sofa",
  "Petrol",
  "Paint",
  "Party Popper",
  "Perfumes",
  "Carpet",
  "Cash/Credit Cards/Debit Cards",
  "Chainsaw",
  "Cheque Books",
  "Christmas Crackers",
  "Cistern",
  "Collagen",
  "Combust",
  "Counterfeit Currency",
  "Counterfeit Goods",
  "Crackers",
  "Cream",
  "Currency",
  "Dangerous Goods",
  "Driving Licence",
  "Drugs (including prescription)",
  "Edible insects",
  "Engines",
  "Explosive",
  "Fence",
  "Filth",
  "Fine Art",
  "Fire Extinguisher",
  "Fire Works/Fire Work",
]

const upsItems: string[] = [
  "Electric Scooters",
  "LCD and flat screens TVs of 32 inches or larger are not accepted by UPS (manufacturers require upright position during transport which UPS cannot guarantee)",
  "Perishable goods",
  "Personal effects (suitcases or personal belongings)",
  "Unaccompanied baggage (except via MBE Centres to selected countries)",
  "Watches exceeding the value of 500USD",
]

export default function ProhibitedItemsClient() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative pt-24 pb-20 overflow-hidden">
      {/* Header */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center aos-fade-up ${isVisible ? 'aos-animate' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4 border border-accent/20">
            <ShieldAlert size={16} className="text-accent" />
            <span className="text-sm font-medium text-primary">Important shipping restrictions</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">Prohibited Items</h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            To keep shipments safe, compliant, and moving on time, some items cannot be accepted. Below is a
            comprehensive overview of goods we do not transport and notes on applicable regulations.
          </p>
        </div>
      </div>

      {/* General prohibited items */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className={`aos-fade-up ${isVisible ? 'aos-animate' : ''}`}>
          <div className="bg-background/80 backdrop-blur-md border border-border rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Ban className="text-primary" size={22} />
              <h2 className="text-2xl font-semibold text-foreground">Items not accepted for shipment</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {generalItems.map((item) => (
                <div key={item} className="flex items-start gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <XCircle size={16} className="text-accent mt-1 shrink-0" />
                  <span className="text-foreground/90 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-foreground/70 leading-relaxed">
              <p className="mb-3">
                In addition, we cannot move goods under ATA Carnet or temporary export/import regimes; items moving
                under FCR, FCT or CAD; or shipments with inherent vice likely to soil, impair, or damage other goods or
                equipment. We also cannot carry goods prohibited by law at origin, in transit, or at destination, or
                items that attract excise duties (such as spirits) or require special facilities, permits, or safety
                measures. Some materials are permitted only under prescribed conditions; certain goods are not
                transportable by air (for example, liquids in glass containers).
              </p>
              <p className="mb-3">
                Shippers are responsible for complying with the laws and regulations of every country involved. All
                shipments may be inspected by customs or other authorities, which can result in delays.
              </p>
              <p>
                We reserve the right to refuse any package lacking clear shipper/receiver contact details or that is, in
                our opinion, impractical to transport, insufficiently described or classified, inadequately packed or
                labelled, or missing required documentation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Damaged goods / regulatory note */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className={`aos-fade-up ${isVisible ? 'aos-animate' : ''}`}>
          <div className="bg-background/80 backdrop-blur-md border border-border rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="text-primary" size={22} />
              <h2 className="text-2xl font-semibold text-foreground">Dangerous goods and damaged goods</h2>
            </div>
            <div className="text-sm text-foreground/70 leading-relaxed space-y-3">
              <p>
                We adhere to IATA air-transport and UN ADR road-transport regulations and do not accept Dangerous
                Goods into our network, domestically or internationally. Local national regulations for road transport
                may also apply.
              </p>
              <p>
                Shipping Dangerous Goods without correct labelling, documentation, and packaging can lead to
                significant penalties. If reusing cartons, remove any old hazard labels to prevent holds and delays.
              </p>
              <p>
                If you are sending goods that might be mistaken for Dangerous Goods due to their name or appearance,
                clearly declare that they are not classified as Dangerous Goods on the paperwork to avoid unnecessary
                delay. Any misdeclaration can incur strong penalties for the shipper.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TNT */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className={`aos-fade-up ${isVisible ? 'aos-animate' : ''}`}>
          <div className="bg-background/80 backdrop-blur-md border border-border rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Ban className="text-primary" size={22} />
              <h2 className="text-2xl font-semibold text-foreground">TNT – additional prohibited items</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {tntItems.map((item) => (
                <div key={item} className="flex items-start gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <XCircle size={16} className="text-accent mt-1 shrink-0" />
                  <span className="text-foreground/90 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* UPS */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className={`aos-fade-up ${isVisible ? 'aos-animate' : ''}`}>
          <div className="bg-background/80 backdrop-blur-md border border-border rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Ban className="text-primary" size={22} />
              <h2 className="text-2xl font-semibold text-foreground">UPS – additional prohibited items</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {upsItems.map((item) => (
                <div key={item} className="flex items-start gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <XCircle size={16} className="text-accent mt-1 shrink-0" />
                  <span className="text-foreground/90 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



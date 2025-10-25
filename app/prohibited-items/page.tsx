import type { Metadata } from "next"
import ProhibitedItemsClient from "@/components/prohibited/prohibited-items-client"

export const metadata: Metadata = {
  title: "Prohibited Items - UK Customs Broker | Akrolink Solutions",
  description:
    "Prohibited items and categories we cannot handle for UK courier shipments at Heathrow CFL, plus compliance notes for air courier customs clearance.",
  keywords: [
    "prohibited items UK",
    "customs clearance prohibited items",
    "heathrow CFL restrictions",
    "courier shipment restrictions UK",
    "UK import restrictions"
  ],
}

export default function ProhibitedItemsPage() {
  return <ProhibitedItemsClient />
}



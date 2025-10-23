import type { Metadata } from "next"
import ProhibitedItemsClient from "@/components/prohibited/prohibited-items-client"

export const metadata: Metadata = {
  title: "Prohibited Items",
  description:
    "Items and categories we cannot transport, plus compliance notes for air and road shipments.",
}

export default function ProhibitedItemsPage() {
  return <ProhibitedItemsClient />
}



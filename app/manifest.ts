import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Akrolink Solutions Limited - CFL Customs Clearance at Heathrow",
    short_name: "Akrolink Solutions",
    description:
      "Specialized customs clearance services for air courier shipments at Heathrow Airport through CFL",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/placeholder-logo.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/placeholder-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    categories: ["business", "logistics", "customs"],
    lang: "en-GB",
    orientation: "portrait",
    scope: "/",
  };
}

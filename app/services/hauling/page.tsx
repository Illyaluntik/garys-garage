import type { Metadata } from "next"
import { Header, MobileCallButton } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicePageTemplate } from "@/components/service-page-template"
import { withBasePath } from "@/lib/basePath"

export const metadata: Metadata = {
  title: "Heavy Hauling | Gary's Garage - Albany, NY",
  description: "Professional heavy hauling services for construction equipment, machinery, and oversized loads. Flatbed and lowboy transport across the Northeast and nationwide.",
}

const serviceData = {
  title: "Heavy Hauling",
  description: "Need to move heavy equipment or oversized loads? Our flatbed and lowboy trailers can handle it. From local transport to cross-country hauling, we deliver safely and on time.",
  heroImage: withBasePath("/images1/service-hauling.jpg"),
  capabilities: [
    "Flatbed hauling",
    "Lowboy transport",
    "Oversized load permits",
    "Construction equipment",
    "Industrial machinery",
    "Agricultural equipment",
    "Vehicles & multiple units",
    "Nationwide delivery",
  ],
  whoItIsFor: [
    "Construction companies",
    "Equipment rental companies",
    "Agricultural operations",
    "Manufacturing facilities",
    "Dealerships & auctions",
    "Government & municipalities",
  ],
  whenToCall: [
    "Equipment delivery to job sites",
    "Moving machinery between facilities",
    "Transporting auction purchases",
    "Seasonal equipment relocation",
    "Emergency equipment transport",
    "Long-distance heavy hauling",
  ],
  images: [
    { src: withBasePath("/images1/service-hauling-1.jpg"), alt: "Flatbed hauling heavy equipment" },
    { src: withBasePath("/images1/service-hauling-2.jpg"), alt: "Equipment loading on lowboy" },
    { src: withBasePath("/images1/service-hauling-3.jpg"), alt: "Heavy hauling fleet" },
  ],
}

export default function HaulingServicePage() {
  return (
    <>
      <Header />
      <main>
        <ServicePageTemplate {...serviceData} />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  )
}

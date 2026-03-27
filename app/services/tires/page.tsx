import type { Metadata } from "next"
import { Header, MobileCallButton } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Commercial Tires | Gary's Garage - Albany, NY",
  description: "Commercial truck tire sales, service, and emergency tire repair. All major brands available. 24/7 tire service for semi trucks and heavy equipment.",
}

const serviceData = {
  title: "Tires",
  description: "Keep your fleet rolling with our comprehensive tire services. From new tire sales to emergency roadside tire repair, we've got you covered with all major brands and fast service.",
  heroImage: "/images/service-tires.jpg",
  capabilities: [
    "New tire sales (all major brands)",
    "Tire mounting & balancing",
    "Tire repair & patching",
    "Emergency tire service",
    "Tire pressure monitoring",
    "Wheel alignment",
    "Retreads & recaps",
    "Tire disposal & recycling",
  ],
  whoItIsFor: [
    "Fleet operators",
    "Owner-operators",
    "Trucking companies",
    "Construction companies",
    "Agricultural operations",
    "Commercial vehicle owners",
  ],
  whenToCall: [
    "Flat tire or blowout",
    "Worn tires need replacement",
    "Fleet tire maintenance",
    "New tire purchase",
    "Tire pressure issues",
    "Emergency tire service",
  ],
  images: [
    { src: "/images/service-tires.jpg", alt: "Commercial truck tires" },
    { src: "/images/service-repair.jpg", alt: "Tire service" },
    { src: "/images/service-roadside.jpg", alt: "Emergency tire repair" },
  ],
}

export default function TiresServicePage() {
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

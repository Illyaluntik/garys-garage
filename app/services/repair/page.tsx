import type { Metadata } from "next"
import { Header, MobileCallButton } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Heavy Repair | Gary's Garage - Albany, NY",
  description: "Professional heavy truck repair services. Diesel engines, transmissions, brakes, electrical, and more. Shop and mobile repair available 24/7.",
}

const serviceData = {
  title: "Heavy Repair",
  description: "Our experienced technicians handle all aspects of heavy truck repair. From engine diagnostics to complete overhauls, we get your equipment running right—in our shop or at your location.",
  heroImage: "/images/service-repair.jpg",
  capabilities: [
    "Diesel engine repair & overhaul",
    "Transmission service & repair",
    "Brake systems & ABS",
    "Electrical & wiring",
    "Air systems & suspension",
    "Cooling systems",
    "Hydraulic systems",
    "DOT inspections",
  ],
  whoItIsFor: [
    "Owner-operators",
    "Fleet managers",
    "Trucking companies",
    "Construction contractors",
    "Bus & coach operators",
    "Agricultural operations",
  ],
  whenToCall: [
    "Engine problems or warning lights",
    "Brake or air system issues",
    "Electrical malfunctions",
    "Scheduled maintenance",
    "Pre-trip inspections",
    "DOT compliance needs",
  ],
  images: [
    { src: "/images/service-repair.jpg", alt: "Mechanic working on truck engine" },
    { src: "/images/service-roadside.jpg", alt: "Mobile repair service" },
    { src: "/images1/service-repair-1.jpg", alt: "Repair shop" },
  ],
}

export default function RepairServicePage() {
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

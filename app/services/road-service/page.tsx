import type { Metadata } from "next"
import { Header, MobileCallButton } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicePageTemplate } from "@/components/service-page-template"
import { withBasePath } from "@/lib/basePath"

export const metadata: Metadata = {
  title: "Road Service | Gary's Garage - 24/7 Roadside Assistance",
  description: "24/7 emergency roadside assistance for commercial vehicles. Jump starts, lockouts, fuel delivery, tire changes, and mobile repair throughout the Northeast.",
}

const serviceData = {
  title: "Road Service",
  description: "Stranded on the side of the road? Our mobile service units are dispatched around the clock to get you moving again. Fast response, professional service, any time of day or night.",
  heroImage: withBasePath("/images1/service-roadside.jpg"),
  capabilities: [
    "Jump starts & battery service",
    "Lockouts & key service",
    "Fuel delivery",
    "Tire changes & repair",
    "Air system repairs",
    "Minor mechanical repairs",
    "Winch-outs",
    "Load assistance",
  ],
  whoItIsFor: [
    "Commercial truck drivers",
    "Owner-operators",
    "Fleet vehicles",
    "Bus & coach drivers",
    "RV & motorhome owners",
    "Anyone with a roadside emergency",
  ],
  whenToCall: [
    "Dead battery or won't start",
    "Locked out of your vehicle",
    "Out of fuel",
    "Flat tire or blowout",
    "Minor breakdown",
    "Any roadside emergency",
  ],
  images: [
    { src: withBasePath("/images1/service-roadside.jpg"), alt: "Emergency roadside assistance" },
    { src: withBasePath("/images1/service-roadside-1.jpg"), alt: "Mobile repair service" },
    { src: withBasePath("/images1/service-roadside-2.jpg"), alt: "Road service in action" },
  ],
}

export default function RoadServicePage() {
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

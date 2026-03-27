import type { Metadata } from "next"
import { Header, MobileCallButton } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicePageTemplate } from "@/components/service-page-template"
import { withBasePath } from "@/lib/basePath"

export const metadata: Metadata = {
  title: "Heavy Duty Towing | Gary's Garage - Albany, NY",
  description: "24/7 heavy duty towing for semi trucks, trailers, buses, and heavy equipment. Rotator and heavy wrecker service. Fast response in NY, MA, VT.",
}

const serviceData = {
  title: "Heavy Duty Towing",
  description: "When your heavy equipment breaks down or needs to be moved, our fleet of heavy wreckers and rotators is ready. We handle the biggest towing jobs in the Northeast with speed and precision.",
  heroImage: withBasePath("/images1/service-towing.jpg"),
  capabilities: [
    "Semi trucks & tractor-trailers",
    "Buses & RVs",
    "Construction equipment",
    "Heavy machinery",
    "Overturned vehicles",
    "Accident recovery",
    "Load shifts & cargo recovery",
    "Underground garage & tight space recovery",
  ],
  whoItIsFor: [
    "Semi truck drivers & owner-operators",
    "Fleet & logistics companies",
    "Construction companies",
    "Commercial vehicle operators",
    "Insurance companies",
    "Law enforcement agencies",
  ],
  whenToCall: [
    "Breakdown on the highway",
    "Vehicle accident or rollover",
    "Stuck or off-road recovery",
    "Relocation of heavy equipment",
    "Impound or police-requested towing",
    "Any heavy-duty towing emergency",
  ],
  images: [
    { src: withBasePath("/images1/service-towing-1.jpg"), alt: "Heavy duty rotator tow truck" },
    { src: withBasePath("/images1/service-towing-2.jpg"), alt: "Semi truck recovery" },
    { src: withBasePath("/images1/service-towing.jpg"), alt: "Tow truck fleet" },
  ],
}

export default function TowingServicePage() {
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

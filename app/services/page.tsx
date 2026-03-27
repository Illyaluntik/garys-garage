import type { Metadata } from "next"
import { Header, MobileCallButton } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/services-section"
import { CTABanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Services | Gary's Garage - Heavy Duty Towing & Recovery",
  description: "Heavy duty towing, hauling, repair, roadside service, and tire services. 24/7 emergency service for semi trucks, trailers, buses, and heavy equipment.",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="py-12 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Gary&apos;s Garage
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="mt-4 text-muted-foreground font-[family-name:var(--font-inter)] max-w-2xl">
              From emergency towing to scheduled hauling and repair, we provide comprehensive heavy-duty services for the trucking industry.
            </p>
          </div>
        </div>
        <ServicesSection />
        <CTABanner />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  )
}

import { Header, MobileCallButton } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ServiceAreaSection } from "@/components/service-area-section"
import { GallerySection } from "@/components/gallery-section"
import { CTABanner } from "@/components/cta-banner"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <ServiceAreaSection />
        <GallerySection />
        <CTABanner />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  )
}

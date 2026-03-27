import Image from "next/image"
import Link from "next/link"
import { Phone, CheckCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { phoneFormatted, phoneRaw } from "@/constants/contact-info.const"
import { ServiceAreaSection } from "./service-area-section"

interface ServicePageTemplateProps {
  title: string
  description: string
  heroImage: string
  capabilities: string[]
  whoItIsFor: string[]
  whenToCall: string[]
  images: { src: string; alt: string }[]
}

export function ServicePageTemplate({
  title,
  description,
  heroImage,
  capabilities,
  whoItIsFor,
  whenToCall,
  images,
}: ServicePageTemplateProps) {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6 font-[family-name:var(--font-inter)]"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground">
            {title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed max-w-2xl">
            {description}
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide glow-yellow"
            >
              <a href={`tel:${phoneRaw}`} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call for Service
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 lg:py-20 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* What We Handle */}
            <div>
              <h2 className="text-xl font-bold uppercase tracking-tight text-primary mb-6">
                What We Handle
              </h2>
              <ul className="space-y-3">
                {capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-[family-name:var(--font-inter)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who It's For */}
            <div>
              <h2 className="text-xl font-bold uppercase tracking-tight text-primary mb-6">
                Who It&apos;s For
              </h2>
              <ul className="space-y-3">
                {whoItIsFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-[family-name:var(--font-inter)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* When to Call */}
            <div>
              <h2 className="text-xl font-bold uppercase tracking-tight text-primary mb-6">
                When to Call
              </h2>
              <ul className="space-y-3">
                {whenToCall.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-[family-name:var(--font-inter)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Images Section */}
      {images.length > 0 && (
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-8">
              Our Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image) => (
                <div
                  key={image.src}
                  className="relative h-48 md:h-56 overflow-hidden rounded-lg border border-border"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ServiceAreaSection />

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-secondary-foreground">
            Ready for <span className="text-primary">Immediate Service?</span>
          </h2>
          <p className="mt-4 text-secondary-foreground/80 font-[family-name:var(--font-inter)]">
            Our team is standing by 24/7. Call now for fast, reliable service.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide text-lg px-10 py-6 glow-yellow"
            >
              <a href={`tel:${phoneRaw}`} className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                Call Now: {phoneFormatted}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

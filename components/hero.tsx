import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { phoneRaw } from "@/constants/contact-info.const"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images1/hero-tow-truck.jpg"
          alt="Heavy duty tow truck hauling semi at night"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              24/7 Emergency Service
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-none">
            Heavy Duty{" "}
            <span className="text-primary">Towing</span> &{" "}
            <span className="text-primary">Recovery</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed max-w-xl">
            Serving NY, MA, VT & Beyond. Fast response for semi trucks, trailers, buses, and heavy equipment. Nationwide hauling available.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide text-base px-8 py-6 glow-yellow"
            >
              <a href={`tel:${phoneRaw}`} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-muted font-bold uppercase tracking-wide text-base px-8 py-6"
            >
              <Link href="/services" className="flex items-center gap-2">
                View Services
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-[family-name:var(--font-inter)]">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>Available Now</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              <span>Northeast Coverage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-14 w-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="h-3 w-1 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  )
}

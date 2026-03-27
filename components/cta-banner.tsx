import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { phoneFormatted, phoneRaw } from "@/constants/contact-info.const"

export function CTABanner() {
  return (
    <section className="py-20 lg:py-28 bg-primary/15 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(243, 208, 29, 0.1) 10px,
            rgba(243, 208, 29, 0.1) 20px
          )`
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-secondary-foreground">
          Need a Tow{" "}
          <span className="text-primary">Right Now?</span>
        </h2>
        <p className="mt-6 text-lg text-secondary-foreground/80 font-[family-name:var(--font-inter)] max-w-2xl mx-auto">
          Don&apos;t wait. Our team is standing by 24/7 to get you back on the road. One call does it all.
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide text-lg px-10 py-7 glow-yellow"
          >
            <a href={`tel:${phoneRaw}`} className="flex items-center gap-3">
              <Phone className="h-6 w-6" />
              Call {phoneFormatted}
            </a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-secondary-foreground/60 font-[family-name:var(--font-inter)]">
          24/7 Emergency Service • Fast Response • Heavy-Duty Specialists
        </p>
      </div>
    </section>
  )
}

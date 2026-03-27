import type { Metadata } from "next"
import { Header, MobileCallButton } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Phone, MapPin, Clock } from "lucide-react"
import { serviceAreaLocations } from "@/constants/service-areas.const"
import { phoneFormatted, phoneRaw } from "@/constants/contact-info.const"

export const metadata: Metadata = {
  title: "Contact | Gary's Garage - Heavy Duty Towing Albany, NY",
  description: `Contact Gary's Garage for 24/7 heavy duty towing, hauling, repair, and roadside service. Call ${phoneFormatted} for immediate assistance.`,
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Get in Touch
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground">
              Contact <span className="text-primary">Gary&apos;s Garage</span>
            </h1>
            <p className="mt-4 text-muted-foreground font-[family-name:var(--font-inter)] max-w-2xl">
              Need immediate service? Call us now. For non-urgent inquiries, fill out the form below and we&apos;ll get back to you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-8">
                  Contact Information
                </h2>

                {/* Phone - Primary */}
                <div className="mb-8 p-6 rounded-lg border border-primary bg-primary/5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold uppercase tracking-tight text-foreground">
                        24/7 Emergency Line
                      </h3>
                      <a
                        href={`tel:${phoneRaw}`}
                        className="mt-1 text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                      >
                        {phoneFormatted}
                      </a>
                      <p className="mt-2 text-sm text-muted-foreground font-[family-name:var(--font-inter)]">
                        For immediate assistance, call now. We&apos;re available 24 hours a day, 7 days a week.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted text-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-tight text-foreground">
                      Location
                    </h3>
                    <p className="mt-1 text-muted-foreground font-[family-name:var(--font-inter)]">
                      Albany, NY<br />
                      Serving the Capital Region & Northeast
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="mb-8 flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted text-foreground">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-tight text-foreground">
                      Hours
                    </h3>
                    <p className="mt-1 text-muted-foreground font-[family-name:var(--font-inter)]">
                      Open 24 Hours<br />
                      7 Days a Week
                    </p>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="text-lg font-bold uppercase tracking-tight text-foreground mb-4">
                    Service Areas
                  </h3>
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed">
                    {serviceAreaLocations.map((location) => location.label).join(', ')}
                  </p>
                  <p className="mt-4 text-sm text-primary font-semibold font-[family-name:var(--font-inter)]">
                    Nationwide hauling available
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-8">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallButton />
    </>
  )
}

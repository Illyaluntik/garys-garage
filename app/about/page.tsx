import type { Metadata } from "next"
import Image from "next/image"
import { Header, MobileCallButton } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Shield, Clock, MapPin, Truck, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Gary's Garage - Heavy Duty Specialists Since Day One",
  description: "Learn about Gary's Garage, Albany's trusted heavy duty towing and recovery specialists. 24/7 service, wide coverage, and decades of experience.",
}

const values = [
  {
    icon: Truck,
    title: "Heavy-Duty Focus",
    description: "We specialize in the big stuff. Our equipment and expertise are built for semi trucks, heavy machinery, and complex recovery operations.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Breakdowns don't wait for business hours. Neither do we. Our team is ready 24/7, 365 days a year.",
  },
  {
    icon: MapPin,
    title: "Regional Reach",
    description: "Based in Albany, we serve the entire Capital Region and beyond. Nationwide hauling available for equipment transport.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Every job is done with safety as the top priority. Proper equipment, trained operators, and professional procedures.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our operators have seen it all. Years of experience handling the most challenging towing and recovery situations.",
  },
  {
    icon: Award,
    title: "Trusted Service",
    description: "We've built our reputation on reliability, fair pricing, and getting the job done right the first time.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-card overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  About Us
                </span>
                <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground">
                  Built for the{" "}
                  <span className="text-primary">Heavy Stuff</span>
                </h1>
                <p className="mt-6 text-lg text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed">
                  Gary&apos;s Garage isn&apos;t your average towing company. We specialize in heavy-duty towing and recovery—the kind of work that requires serious equipment and experienced operators.
                </p>
                <p className="mt-4 text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed">
                  When a semi breaks down on I-87 at 2 AM, when construction equipment needs to move across state lines, when a rollover blocks traffic and needs immediate response—that&apos;s when you call Gary&apos;s Garage.
                </p>
                <p className="mt-4 text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed">
                  Based in Albany, NY, we serve the entire Capital Region and beyond. Our fleet of heavy wreckers, rotators, and flatbeds handles everything from routine tows to complex recovery operations.
                </p>
              </div>
              <div className="relative h-80 lg:h-[500px] rounded-lg overflow-hidden border border-border">
                <Image
                  src="/images1/service-repair-1.jpg"
                  alt="Gary's Garage tow truck fleet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                What Sets Us Apart
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground">
                Our <span className="text-primary">Commitment</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card border-y border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary">24/7</div>
                <div className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">Availability</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary">4</div>
                <div className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">States Served</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary">100%</div>
                <div className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">Heavy-Duty Focus</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary">Fast</div>
                <div className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">Response Times</div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  )
}

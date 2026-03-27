import { Shield, Clock, MapPin, Truck } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Heavy-Duty Specialists",
    description: "Purpose-built equipment for semi trucks, trailers, buses, and heavy machinery.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock emergency service. We're ready when you need us most.",
  },
  {
    icon: MapPin,
    title: "Wide Coverage",
    description: "Serving the Capital Region, Northeast, and nationwide hauling available.",
  },
  {
    icon: Shield,
    title: "Reliable Service",
    description: "Fast response times and professional operators you can count on.",
  },
]

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              About Gary&apos;s Garage
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground">
              Built for the{" "}
              <span className="text-primary">Heavy Stuff</span>
            </h2>
            <p className="mt-6 text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed">
              When standard towing won&apos;t cut it, Gary&apos;s Garage answers the call. We specialize in heavy-duty towing and recovery for the trucks and equipment that keep America moving.
            </p>
            <p className="mt-4 text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed">
              Based in Albany, NY, we serve the entire Capital Region and beyond. Our fleet of heavy wreckers, rotators, and flatbeds is ready 24/7 to handle any situation—from roadside breakdowns to complex recovery operations.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-lg border border-border bg-background hover:border-primary/30 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Truck, Container, Wrench, AlertTriangle, CircleDot } from "lucide-react"

const services = [
  {
    title: "Heavy Duty Towing",
    description: "Semi trucks, trailers, buses, and heavy equipment recovery. Rotator and heavy wrecker service.",
    href: "/services/towing",
    image: "/images1/service-towing.jpg",
    icon: Truck,
  },
  {
    title: "Heavy Hauling",
    description: "Flatbed and lowboy hauling for construction equipment, machinery, and oversized loads.",
    href: "/services/hauling",
    image: "/images1/service-hauling.jpg",
    icon: Container,
  },
  {
    title: "Heavy Repair",
    description: "On-site and shop repair for diesel engines, transmissions, brakes, and electrical systems.",
    href: "/services/repair",
    image: "/images/service-repair.jpg",
    icon: Wrench,
  },
  {
    title: "Road Service",
    description: "24/7 emergency roadside assistance. Jump starts, lockouts, fuel delivery, and more.",
    href: "/services/road-service",
    image: "/images1/service-roadside.jpg",
    icon: AlertTriangle,
  },
  {
    title: "Tires",
    description: "Commercial truck tire sales, service, and emergency tire repair. All major brands available.",
    href: "/services/tires",
    image: "/images/service-tires.jpg",
    icon: CircleDot,
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground font-[family-name:var(--font-inter)] max-w-2xl mx-auto">
            From emergency towing to scheduled hauling, we handle the heavy lifting so you can get back on the road.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index === 0 ? "h-64 md:h-80" : "h-48 md:h-56"} overflow-hidden`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-semibold text-primary">
                  <span className="uppercase tracking-wide">Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

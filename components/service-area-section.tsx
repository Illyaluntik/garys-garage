import { MapPin } from "lucide-react"
import { ServiceAreasMap } from "./service-areas-map"
import { serviceAreaLocations } from "@/constants/service-areas.const"

export function ServiceAreaSection() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title, counties list, and paragraph */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Coverage Area
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground">
                Serving New York's Capital Region and Beyond
              </h2>
            </div>

            {/* Counties list in two columns */}
            <div className="grid grid-cols-2 gap-4">
              {serviceAreaLocations.map((location) => (
                <div key={location.label} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground font-[family-name:var(--font-inter)]">
                    {location.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom paragraph */}
            <div className="pt-4">
              <p className="text-muted-foreground text-sm font-[family-name:var(--font-inter)]">
                Our primary service area is highlighted here for 24 hour emergency towing, however we tow to or from anywhere in the Northeast and Mid Atlantic region. Towing and hauling can also be arranged for any destination in the continental United States
              </p>
            </div>
          </div>

          {/* Right side - Map */}
          <div className="lg:sticky lg:top-8">
            <ServiceAreasMap locations={serviceAreaLocations} />
          </div>
        </div>
      </div>
    </section>
  )
}







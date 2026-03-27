import Link from "next/link"
import { Phone, MapPin, Clock } from "lucide-react"
import { serviceAreaLocations } from "@/constants/service-areas.const"
import { phoneFormatted, phoneRaw } from "@/constants/contact-info.const"
import Image from "next/image"
import { withBasePath } from "@/lib/basePath"

const services = [
  { name: "Heavy Duty Towing", href: "/services/towing" },
  { name: "Heavy Hauling", href: "/services/hauling" },
  { name: "Heavy Repair", href: "/services/repair" },
  { name: "Road Service", href: "/services/road-service" },
  { name: "Tires", href: "/services/tires" },
]

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="w-full min-h-[70px] block relative">
              <Image
                src={withBasePath("/images/logo.svg")}
                alt="Gary's Garage - Heavy Duty Towing & Recovery"
                fill
                className="h-auto w-full"
                priority
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed">
              Heavy-duty towing, hauling, repair, and roadside service. Serving the Northeast with fast, reliable service 24/7.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-[family-name:var(--font-inter)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-[family-name:var(--font-inter)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${phoneRaw}`} className="text-sm font-semibold text-foreground hover:text-primary transition-colors font-[family-name:var(--font-inter)]">
                    {phoneFormatted}
                  </a>
                  <p className="text-xs text-muted-foreground font-[family-name:var(--font-inter)]">24/7 Emergency Line</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground font-[family-name:var(--font-inter)]">
                  Albany, NY<br />
                  Serving the Northeast
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground font-[family-name:var(--font-inter)]">
                  Open 24 Hours<br />
                  7 Days a Week
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Service Areas</h3>
          <p className="text-xs text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed">
            {serviceAreaLocations.map((location) => location.label).join(', ')}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center font-[family-name:var(--font-inter)]">
            &copy; {new Date().getFullYear()}&nbsp;Gary&apos;s Garage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

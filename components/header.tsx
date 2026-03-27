"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { phoneFormatted, phoneRaw } from "@/constants/contact-info.const"
import { withBasePath } from "@/lib/basePath"

const navigation = [
  { name: "Heavy Towing", href: "/garys-garage/services/towing" },
  { name: "Heavy Hauling", href: "/services/hauling" },
  { name: "Heavy Repair", href: "/services/repair" },
  { name: "Tires", href: "/services/tires" },
  { name: "Road Service", href: "/services/road-service" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <Image
              src={"/garys-garage/images/logo.svg"}
              alt="Gary's Garage - Heavy Duty Towing & Recovery"
              width={160}
              height={74}
              className="h-14 w-auto lg:h-16"
              priority
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-5 xl:gap-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-semibold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">24/7 Emergency</span>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide glow-yellow">
            <a href={`tel:${phoneRaw}`} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {phoneFormatted}
            </a>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="space-y-1 px-4 pb-4 pt-2">
            <Link
              href="/"
              className="block rounded-lg px-3 py-2 text-base font-semibold uppercase tracking-wide text-muted-foreground hover:bg-muted hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold uppercase tracking-wide text-muted-foreground hover:bg-muted hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4">
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide">
                <a href={`tel:${phoneRaw}`} className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now: {phoneFormatted}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

/* Sticky mobile call button */
export function MobileCallButton() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
      <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide text-lg py-6 glow-yellow">
        <a href={`tel:${phoneRaw}`} className="flex items-center justify-center gap-2">
          <Phone className="h-5 w-5" />
          Call Now
        </a>
      </Button>
    </div>
  )
}

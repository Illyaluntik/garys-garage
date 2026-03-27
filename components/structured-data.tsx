import { phoneRaw } from "@/constants/contact-info.const"

export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://garysgarage.com/#organization",
    "name": "Gary's Garage",
    "alternateName": "Gary's Garage Heavy Duty Towing",
    "description": "24/7 Heavy Duty Towing, Hauling, Repair & Roadside Service serving NY, MA, VT and the entire Northeast.",
    "url": "https://garysgarage.com",
    "logo": "https://garysgarage.com/images/logo.svg",
    "image": "https://garysgarage.com/images/hero-tow-truck.jpg",
    "telephone": phoneRaw,
    "email": "dispatch@garysgarage.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8 Apollo Dr",
      "addressLocality": "Albany",
      "addressRegion": "NY",
      "postalCode": "12205",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.7235952,
      "longitude": -73.8691217
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "New York"
      },
      {
        "@type": "State", 
        "name": "Massachusetts"
      },
      {
        "@type": "State",
        "name": "Vermont"
      },
      {
        "@type": "State",
        "name": "Connecticut"
      },
      {
        "@type": "State",
        "name": "New Jersey"
      },
      {
        "@type": "State",
        "name": "Pennsylvania"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Invoice"],
    "currenciesAccepted": "USD",
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Heavy Duty Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Heavy Duty Towing",
            "description": "24/7 emergency towing for semi-trucks, trailers, buses, and heavy equipment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Heavy Hauling",
            "description": "Transport of heavy equipment, machinery, and oversized loads"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Heavy Truck Repair",
            "description": "On-site and shop repairs for commercial trucks and equipment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Tire Service",
            "description": "Tire sales, repairs, and roadside tire service for commercial vehicles"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Road Service",
            "description": "Mobile roadside assistance including jump starts, fuel delivery, and lockouts"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}

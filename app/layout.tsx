import type { Metadata, Viewport } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { StructuredData } from '@/components/structured-data'
import { withBasePath } from '@/lib/basePath'
import './globals.css'

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700']
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: "Gary's Garage | Heavy Duty Towing & Recovery - Albany, NY",
    template: "%s | Gary's Garage"
  },
  description: "24/7 Heavy Duty Towing, Hauling, Repair & Roadside Service. Serving NY, MA, VT and the entire Northeast. Fast response for semi trucks, trailers, buses & heavy equipment.",
  keywords: "heavy duty towing Albany NY, semi truck towing near me, truck repair Capital Region, 24/7 roadside service Northeast, heavy hauling NY MA VT, heavy equipment hauling, commercial truck repair, tire service trucks",
  generator: 'v0.app',
  metadataBase: new URL('https://garysgarage.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Gary's Garage | Heavy Duty Towing & Recovery",
    description: "24/7 Heavy Duty Towing, Hauling, Repair & Roadside Service. Serving NY, MA, VT and the entire Northeast.",
    url: 'https://garysgarage.com',
    siteName: "Gary's Garage",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: withBasePath('/images/hero-tow-truck.jpg'),
        width: 1200,
        height: 630,
        alt: "Gary's Garage Heavy Duty Towing"
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gary's Garage | Heavy Duty Towing & Recovery",
    description: "24/7 Heavy Duty Towing, Hauling, Repair & Roadside Service in the Northeast.",
    images: [withBasePath('/images/hero-tow-truck.jpg')],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: withBasePath('/images/logo.svg'),
        type: 'image/svg+xml',
      },
    ],
    apple: withBasePath('/apple-icon.png'),
  },
}

export const viewport: Viewport = {
  themeColor: '#1F268E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData />
      </head>
      <body className={`${oswald.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

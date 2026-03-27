import Image from "next/image"

const images = [
  {
    src: "/images1/gallery-1.jpg",
    alt: "Heavy duty tow truck fleet",
  },
  {
    src: "/images1/gallery-3.jpg",
    alt: "Heavy equipment hauling",
  },
  {
    src: "/images1/service-repair-1.jpg",
    alt: "Semi truck recovery operation",
  },
  {
    src: "/images1/service-roadside.jpg",
    alt: "Emergency roadside service",
  },
  {
    src: "/images1/service-hauling-3.jpg",
    alt: "Truck engine repair",
  },
  {
    src: "/images1/gallery-5.jpg",
    alt: "Rotator tow truck in action",
  },
]

export function GallerySection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground">
            See Us in <span className="text-primary">Action</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-[family-name:var(--font-inter)] max-w-2xl mx-auto">
            Real photos from real jobs. Our team handles the toughest recovery and hauling challenges.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-lg border border-border ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "h-64 md:h-96" : "h-32 md:h-48"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

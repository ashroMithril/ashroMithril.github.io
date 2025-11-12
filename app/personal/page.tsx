import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Personal - Apoorva Shrivastava",
  description: "A personal collection of moments chasing the sun on the horizon",
}

const sunsetImages = [
  {
    src: "/images/sunset-train.jpg",
    alt: "Golden sunset view from a train with railroad tracks curving into the distance",
    aspectRatio: "aspect-[3/4]",
  },
  {
    src: "/images/sunset-bulbs.jpg",
    alt: "Silhouetted light bulbs against vibrant orange sunset",
    aspectRatio: "aspect-[3/4]",
  },
  {
    src: "/images/sunset-beach.jpg",
    alt: "Peaceful beach sunset with a silhouette by the water",
    aspectRatio: "aspect-[3/4]",
  },
  {
    src: "/images/sunset-neighborhood.jpg",
    alt: "Suburban golden hour with palm trees and lush greenery",
    aspectRatio: "aspect-[3/4]",
  },
  {
    src: "/images/sunset-architecture.jpg",
    alt: "Ornate architectural details framing a brilliant sunset",
    aspectRatio: "aspect-[3/4]",
  },
  {
    src: "/images/sunset-window.jpg",
    alt: "City coastline at golden hour viewed through a window",
    aspectRatio: "aspect-[3/4]",
  },
]

export default function PersonalPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Chasing Horizons</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            There's something magical about the sun on the horizon - whether it's the gentle promise of sunrise or the
            warm embrace of sunset. Each moment captures the day's transition, a reminder to pause and appreciate the
            beauty in between.
          </p>
        </div>

        {/* Masonry Grid Gallery */}
        <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
          {sunsetImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg break-inside-avoid transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-300 group-hover:brightness-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-12 text-center">
          <p className="text-sm italic text-muted-foreground">
            "Every sunset brings the promise of a new dawn, and every sunrise is a gift of possibility."
          </p>
        </div>
      </div>
    </div>
  )
}

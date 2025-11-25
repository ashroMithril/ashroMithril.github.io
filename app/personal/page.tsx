"use client"

import { Navigation } from "@/components/navigation"
import CellularBackground from "@/components/cellular-background"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Camera, Heart, MapPin, Music, Coffee, Book } from 'lucide-react'
import { FortuneCookie } from "@/components/fortune-cookie"

const PERSONAL_IMAGES = [
  "IMG_0073.jpg", "IMG_0171.jpg", "IMG_0265.jpg", "IMG_0267.jpg",
  "IMG_1750.jpg", "IMG_2032.jpg", "IMG_2563.jpg", "IMG_2843.jpg",
  "IMG_2892.jpg", "IMG_2994.jpg", "IMG_3380.jpg", "IMG_4027.jpg",
  "IMG_5867.jpg", "IMG_6544.jpg", "IMG_6572.jpg", "IMG_8760.jpg",
  "IMG_9898.jpg", "IMG_9963.jpg"
]

export default function PersonalPage() {
  return (
    <CellularBackground>
      <div className="min-h-screen">
        <Navigation />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="space-y-12">

            {/* Header */}
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2 text-sm">
                <Heart className="h-4 w-4 text-orange-500" />
                <span className="font-medium">Life Beyond Work</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Capturing Moments & Memories
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed font-light italic">
                "There's something magical about the sun on the horizon - whether it's the gentle promise of sunrise or the warm embrace of sunset. Each moment captures the day's transition, a reminder to pause and appreciate the beauty in between."
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {PERSONAL_IMAGES.map((img, index) => (
                <div key={index} className={`break-inside-avoid ${img.includes('0171') ? 'md:col-span-2 lg:col-span-2 w-full' : ''}`}>
                  <Card className="border-0 overflow-hidden bg-transparent shadow-none group">
                    <CardContent className="p-0 relative">
                      <div className="relative w-full overflow-hidden rounded-2xl">
                        <Image
                          src={`/images/${img}`}
                          alt={`Personal photo ${index + 1}`}
                          width={img.includes('0171') ? 1200 : 800}
                          height={img.includes('0171') ? 800 : 600}
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="text-center pt-12 pb-8 space-y-12">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Camera className="h-4 w-4" />
                <span>Shot on iPhone 15 Pro Max</span>
              </p>
              <FortuneCookie />
            </div>

          </div>
        </div>
      </div>
    </CellularBackground>
  )
}

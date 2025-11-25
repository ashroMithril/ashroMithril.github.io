import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Space_Grotesk, JetBrains_Mono, Libre_Baskerville, IBM_Plex_Mono, Lora } from 'next/font/google'

// Initialize fonts
const libreBaskerville = Libre_Baskerville({ subsets: ['latin'], weight: ["400", "700"] })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700"] })
const lora = Lora({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Apoorva Shrivastava - Product Leader in AI & GenAI",
  description:
    "Product manager with 5+ years building AI-enabled platforms. Expert in prompt-first agents, integrations, PLG, payments and pricing.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

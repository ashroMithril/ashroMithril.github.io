"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const messages = {
  "/": [
    "AI agents can now autonomously plan multi-step tasks and execute them with minimal human intervention.",
    "The global AI market is projected to reach $1.8 trillion by 2030, with GenAI leading the charge.",
    "GPT-4 has 1.76 trillion parameters, making it one of the largest language models ever created.",
    "Over 70% of enterprises are now investing in AI-powered automation to improve operational efficiency.",
  ],
  "/about": [
    "AI product management requires a unique blend of technical depth and user empathy.",
    "The best AI products solve real problems first, then apply AI as an enabler, not the other way around.",
    "Prompt engineering has emerged as a critical skill for building effective GenAI applications.",
    "Multimodal AI systems can now process text, images, audio, and video simultaneously.",
  ],
  "/experience": [
    "Conversational AI platforms process over 20 billion messages annually across enterprise deployments.",
    "Integration ecosystems are the backbone of modern SaaS platforms, enabling seamless workflows.",
    "Product-led growth strategies have shown 2-3x higher conversion rates compared to traditional sales.",
    "AI agents reduce customer support response times by up to 80% while maintaining quality.",
  ],
  "/projects": [
    "GenAI code assistants like Cursor and Replit have increased developer productivity by 40-55%.",
    "NotebookLM pioneered the concept of personalized AI research assistants grounded in your documents.",
    "V0 and Lovable are revolutionizing how we build UIs with natural language instead of code.",
    "N8N workflow automation shows how no-code AI tools democratize complex integrations.",
  ],
  "/personal": [
    "AI can now generate photorealistic images, but capturing real moments still requires human intuition.",
    "Computer vision models can detect sunrises and sunsets, but they can't feel the emotional impact.",
    "The golden hour has optimal lighting because of atmospheric scattering - physics meets art.",
    "Travel experiences shape product thinking by exposing us to diverse user behaviors and needs.",
  ],
  "/contact": [
    "AI networking tools can suggest connections, but genuine relationships still require human effort.",
    "Scheduling AI like Calendly saves professionals an average of 8 hours per month.",
    "LinkedIn's AI-powered recommendations connect 3 people per second globally.",
    "The future of collaboration is hybrid - AI handling logistics while humans focus on creativity.",
  ],
}

export function ScrollBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    let lastScrollY = window.scrollY
    let messageIndex = 0

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show banner when scrolling down past 100px
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(true)
      } else if (currentScrollY < 50) {
        setIsVisible(false)
      }

      lastScrollY = currentScrollY

      // Change message based on scroll position
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (currentScrollY / pageHeight) * 100

      const messagesForPage = messages[pathname as keyof typeof messages] || messages["/"]
      const newIndex = Math.min(Math.floor(scrollPercent / (100 / messagesForPage.length)), messagesForPage.length - 1)

      if (newIndex !== messageIndex) {
        messageIndex = newIndex
        setCurrentMessage(newIndex)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const messagesForPage = messages[pathname as keyof typeof messages] || messages["/"]

  return (
    <div
      className={cn(
        "fixed top-16 left-0 right-0 z-40 transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
      )}
    >
      <div className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-200 backdrop-blur-sm shadow-lg border-b-2 border-gray-400/30">
        <div className="container py-3 px-4">
          <p className="text-sm md:text-base text-white text-center font-medium animate-in fade-in duration-500">
            {messagesForPage[currentMessage]}
          </p>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Sparkles, RefreshCw } from 'lucide-react'
import { cn } from "@/lib/utils"

const motivationalQuotes = [
  "Stay hungry. Stay foolish. — Steve Jobs",
  "When something is important enough, you do it even if the odds are not in your favor. — Elon Musk",
  "Our industry does not respect tradition. It only respects innovation. — Satya Nadella",
  "Wear your failure as a badge of honor. — Sundar Pichai",
  "Your most unhappy customers are your greatest source of learning. — Bill Gates",
  "AI is the new electricity. — Andrew Ng",
  "The future of AI should be human-centered. — Fei-Fei Li",
  "Build systems that learn — that’s the future. — Yann LeCun",
  "Solve intelligence and we can solve everything else. — Demis Hassabis",
  "It’s exciting when machines learn to think. — Geoffrey Hinton",
  "Don’t find customers for your products; find products for your customers. — Seth Godin",
  "Skills are cheap. Passion is priceless. — Gary Vaynerchuk",
  "Marketing takes a day to learn. Unfortunately it takes a lifetime to master. — Philip Kotler",
  "Content is king — but context is God. — Neil Patel",
  "People don’t buy what you do; they buy why you do it. — Simon Sinek",
  "Success is not a good teacher; failure makes you humble. — Shah Rukh Khan",
  "I don’t mind what you do for a living, as long as you do it with zeal. — Amitabh Bachchan",
  "If you don’t do it with complete dedication, don’t do it at all. — Aamir Khan",
  "You have to believe in yourself. — Deepika Padukone",
  "Dream big, work hard, stay humble. — Priyanka Chopra"
]

export function FortuneCookie() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentQuote, setCurrentQuote] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)

  const handleCrack = () => {
    if (isOpen || isAnimating) return

    setIsAnimating(true)

    // Select random quote
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    setCurrentQuote(randomQuote)

    // Animation sequence
    setTimeout(() => {
      setIsOpen(true)
      setIsAnimating(false)
    }, 600) // Wait for shake to finish before splitting
  }

  const handleReset = () => {
    setIsOpen(false)
    setCurrentQuote("")
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[600px] py-20 w-full">
      {/* Full-page Sparkle Overlay */}
      {isAnimating && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-yellow-400 animate-sparkle-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-5%`,
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                animationDuration: `${Math.random() * 1 + 0.5}s`,
                animationDelay: `${Math.random() * 0.5}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="text-center mb-16 space-y-2 z-10">
        <h3 className="text-2xl font-bold">Need Some Wisdom?</h3>
        <p className="text-muted-foreground">Crack open a cookie for your daily inspiration</p>
      </div>

      <div className="relative flex items-center justify-center w-full max-w-lg h-64">

        {/* The Fortune Paper */}
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg p-6 max-w-xs sm:max-w-sm w-full text-center border border-orange-100 transition-all duration-1000 ease-out z-0",
            isOpen
              ? "opacity-100 transform translate-y-4 rotate-0 scale-100"
              : "opacity-0 transform translate-y-20 rotate-3 scale-50 pointer-events-none"
          )}
          style={{
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 237, 213, 0.5)"
          }}
        >
          <div className="border-2 border-orange-500/20 p-4 h-full flex flex-col items-center justify-center gap-4">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <p className="font-serif text-lg text-orange-950 italic leading-relaxed">
              &quot;{currentQuote}&quot;
            </p>
            <div className="w-full h-px bg-orange-200/50 my-2" />
            <div className="flex gap-2 text-[10px] uppercase tracking-widest text-orange-400 font-semibold">
              <span>Lucky Numbers</span>
              <span>•</span>
              <span>{Math.floor(Math.random() * 99)}</span>
              <span>{Math.floor(Math.random() * 99)}</span>
              <span>{Math.floor(Math.random() * 99)}</span>
            </div>
          </div>
        </div>

        {/* The Cookie Container */}
        <div
          className={cn(
            "relative w-64 h-64 cursor-pointer transition-transform duration-500 z-20",
            isAnimating && "animate-shake",
            isOpen && "pointer-events-none"
          )}
          onClick={handleCrack}
        >
          {/* Left Half */}
          <div
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-out origin-center",
              isOpen ? "-translate-x-16 -rotate-12 opacity-0" : "translate-x-0 rotate-0 opacity-100"
            )}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
              <path
                d="M 100 100 C 60 100 40 140 40 160 C 40 180 80 180 100 160 L 100 100"
                fill="#FDBA74" // orange-300
                stroke="#EA580C" // orange-600
                strokeWidth="2"
              />
              <path
                d="M 100 100 C 60 100 20 60 20 100 C 20 140 60 140 100 100"
                fill="#FED7AA" // orange-200
                stroke="#EA580C" // orange-600
                strokeWidth="2"
              />
              {/* Texture dots */}
              <circle cx="60" cy="110" r="2" fill="#C2410C" opacity="0.3" />
              <circle cx="50" cy="90" r="2" fill="#C2410C" opacity="0.3" />
              <circle cx="80" cy="120" r="2" fill="#C2410C" opacity="0.3" />
            </svg>
          </div>

          {/* Right Half */}
          <div
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-out origin-center",
              isOpen ? "translate-x-16 rotate-12 opacity-0" : "translate-x-0 rotate-0 opacity-100"
            )}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
              <path
                d="M 100 100 C 140 100 160 140 160 160 C 160 180 120 180 100 160 L 100 100"
                fill="#FDBA74" // orange-300
                stroke="#EA580C" // orange-600
                strokeWidth="2"
              />
              <path
                d="M 100 100 C 140 100 180 60 180 100 C 180 140 140 140 100 100"
                fill="#FED7AA" // orange-200
                stroke="#EA580C" // orange-600
                strokeWidth="2"
              />
              {/* Texture dots */}
              <circle cx="140" cy="110" r="2" fill="#C2410C" opacity="0.3" />
              <circle cx="150" cy="90" r="2" fill="#C2410C" opacity="0.3" />
              <circle cx="120" cy="120" r="2" fill="#C2410C" opacity="0.3" />
            </svg>
          </div>

          {/* Center overlap/fold visual to make it look unified when closed */}
          <div
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FDBA74] rounded-full blur-md transition-opacity duration-300",
              isOpen ? "opacity-0" : "opacity-100"
            )}
          />

          {/* Click hint */}
          {!isOpen && !isAnimating && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium text-orange-600 animate-bounce whitespace-nowrap">
              Click to crack open!
            </div>
          )}
        </div>

        {/* Reset Button */}
        {isOpen && (
          <button
            onClick={handleReset}
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700 z-30"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Open Another</span>
          </button>
        )}

      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        @keyframes sparkle-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out infinite;
        }
        .animate-sparkle-fall {
          animation: sparkle-fall linear forwards;
        }
      `}</style>
    </div>
  )
}

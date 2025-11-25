"use client"

import { useState } from "react"
import { Cookie, Sparkles } from 'lucide-react'
import { Card } from "@/components/ui/card"

const motivationalQuotes = [
  "The best way to predict the future is to invent it.",
  "Innovation distinguishes between a leader and a follower.",
  "Your work is going to fill a large part of your life, make it meaningful.",
  "The only way to do great work is to love what you do.",
  "Stay hungry, stay foolish.",
  "Design is not just what it looks like, design is how it works.",
  "Simplicity is the ultimate sophistication.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Don't wait for opportunity. Create it.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The only impossible journey is the one you never begin.",
  "Believe you can and you're halfway there.",
  "Act as if what you do makes a difference. It does.",
  "The secret of getting ahead is getting started.",
  "It always seems impossible until it's done.",
  "Every expert was once a beginner. Keep learning.",
  "Progress is not achieved by luck, it's made by determination.",
  "Turn your wounds into wisdom and your obstacles into opportunities.",
  "The difference between ordinary and extraordinary is that little extra.",
  "Dream big, start small, act now.",
  "Your limitation is only your imagination.",
  "Great things never come from comfort zones.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Don't stop when you're tired. Stop when you're done.",
  "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
]

export function FortuneCookie() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentQuote, setCurrentQuote] = useState("")
  const [crackAnimation, setCrackAnimation] = useState(false)

  const handleClick = () => {
    if (!isOpen) {
      // Trigger crack animation
      setCrackAnimation(true)
      setTimeout(() => {
        setIsOpen(true)
        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
        setCurrentQuote(randomQuote)
        setCrackAnimation(false)
      }, 600)
    } else {
      // Reset cookie for next click
      setIsOpen(false)
      setTimeout(() => {
        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
        setCurrentQuote(randomQuote)
        setIsOpen(true)
      }, 300)
    }
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[400px] py-12">
      <div className="text-center mb-8 space-y-2">
        <h3 className="text-2xl font-bold">Need Some Wisdom?</h3>
        <p className="text-muted-foreground">Click the fortune cookie for inspiration</p>
      </div>

      <div className="relative flex items-center justify-center gap-12 flex-wrap">
        {/* Fortune Cookie */}
        <button
          onClick={handleClick}
          className={`relative group focus:outline-none transition-transform duration-300 ${
            crackAnimation ? "animate-shake" : ""
          } ${isOpen ? "scale-90" : "hover:scale-110"}`}
          disabled={crackAnimation}
        >
          <div
            className={`relative w-40 h-40 transition-all duration-500`}
          >
            {/* Cookie body */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-2xl transition-all duration-500 ${
                crackAnimation ? "crack-animation" : ""
              }`}
            >
              {/* Cookie texture */}
              <div className="absolute inset-4 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full" />
              <div className="absolute inset-8 bg-gradient-to-br from-orange-200 to-orange-400 rounded-full" />

              {/* Cookie icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Cookie className="w-16 h-16 text-white drop-shadow-lg" />
              </div>

              {/* Sparkles */}
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-pulse" />
              <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-yellow-300 animate-pulse delay-150" />
            </div>

            {/* Crack effect */}
            {crackAnimation && (
              <>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-900/40 animate-crack-horizontal" />
                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-orange-900/40 animate-crack-vertical" />
              </>
            )}
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-2xl group-hover:bg-orange-400/40 transition-all duration-300" />
        </button>

        {/* Fortune quote card - Now appears to the right/left of cookie */}
        {isOpen && currentQuote && (
          <Card className="w-96 max-w-[90vw] p-6 animate-slide-in shadow-2xl border-2 border-orange-200">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-orange-600">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Your Fortune</span>
              </div>
              <p className="text-lg leading-relaxed italic text-foreground">&quot;{currentQuote}&quot;</p>
              <div className="pt-4 border-t">
                <button
                  onClick={handleClick}
                  className="text-sm text-orange-600 hover:text-orange-700 font-medium hover:underline"
                >
                  Get another fortune →
                </button>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0) rotate(0deg);
          }
          25% {
            transform: translateX(-10px) rotate(-5deg);
          }
          75% {
            transform: translateX(10px) rotate(5deg);
          }
        }

        @keyframes crack-horizontal {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes crack-vertical {
          from {
            opacity: 0;
            transform: scaleY(0);
          }
          to {
            opacity: 1;
            transform: scaleY(1);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }

        .animate-crack-horizontal {
          animation: crack-horizontal 0.3s ease-out;
        }

        .animate-crack-vertical {
          animation: crack-vertical 0.3s ease-out 0.15s;
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }

        .crack-animation {
          animation: shake 0.3s ease-in-out;
        }

        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </div>
  )
}

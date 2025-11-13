"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StatCard } from "@/components/stat-card"
import { ArrowRight, Sparkles, Users, Rocket, Brain, Zap, Target, TrendingUp, Globe, Shield } from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const imageScale = Math.max(0.7, 1 - scrollY * 0.0005)
  const imageTranslateZ = Math.min(200, scrollY * 0.5) // Move image backwards (into the screen)
  const nameScale = Math.max(0.5, 1 - scrollY * 0.002)
  const imageOpacity = Math.max(0.3, 1 - scrollY * 0.001)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Animated Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center z-0"
          style={{
            transform: `scale(${imageScale}) perspective(1200px) translateZ(-${imageTranslateZ}px)`,
            opacity: imageOpacity,
            transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
          }}
        >
          <div className="relative w-[90vw] h-[90vh] max-w-6xl">
            <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl">
              <div className="absolute inset-4 overflow-hidden rounded-2xl">
                <Image
                  src="/images/apoorva-profile.jpg"
                  alt="Apoorva Shrivastava - Product Leader"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative z-10 text-center space-y-4"
          style={{
            transform: `scale(${nameScale})`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-2xl">
            Apoorva Shrivastava
          </h1>
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md px-6 py-3 text-lg">
            <Sparkles className="h-5 w-5 text-white" />
            <span className="font-medium text-white">Product Leader in AI Agents</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <section className="py-20 relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">Building GenAI-First Products That Transform Workflows</h2>

            <p className="text-2xl text-muted-foreground leading-relaxed">
              Product leader with 7+ years shipping AI-empowered products across SaaS enterprise platforms. Expert at
              turning flow-based systems into prompt-first agent builders.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/experience">
                  View My Work <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <span className="inline-flex items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm">
                <Target className="h-4 w-4 text-primary" />
                Product Strategy
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm">
                <Brain className="h-4 w-4 text-primary" />
                GenAI & Agents
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm">
                <TrendingUp className="h-4 w-4 text-primary" />
                PLG & Growth
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm">
                <Globe className="h-4 w-4 text-primary" />
                Integrations
              </span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y-2 bg-muted/30 py-16 relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 left-0 w-32 h-1 bg-primary" />
          <div className="absolute bottom-0 right-0 w-32 h-1 bg-primary" />
          <div className="container">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard value="7+" label="Years in SaaS & Product" />
              <StatCard value="70+" label="Integrations Launched" />
              <StatCard value="5%" label="Freemium Conversion" />
              <StatCard value="15+" label="Enterprise Clients" />
            </div>
          </div>
        </section>

        {/* Core Strengths */}
        <section className="py-20 relative">
          <div className="absolute top-10 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative">
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm bg-primary/5">
                <Zap className="h-4 w-4 text-primary" />
                <span>What I Bring</span>
              </div>
              <h2 className="text-3xl font-bold">Core Strengths</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <Rocket className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Product Strategy 0→1 & 1→10</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Launching new platforms from scratch and scaling them to enterprise-grade solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <Sparkles className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">GenAI & Prompt Engineering</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Building prompt-first agent experiences that convert complex flows into conversational interfaces.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Data-Driven Growth</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    PLG experiments, freemium funnels, and conversion optimization that drive measurable results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-chart-1 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-chart-1/10 border border-chart-1/20">
                    <Globe className="h-7 w-7 text-chart-1" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Integrations & Marketplaces</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Launched 70+ integrations including CRM, payments, and third-party systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-chart-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-chart-2/10 border border-chart-2/20">
                    <Shield className="h-7 w-7 text-chart-2" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Cross-Functional Leadership</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Collaborating with engineering, design, analytics, and GTM teams to ship impactful products.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-chart-3 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-chart-3/10 border border-chart-3/20">
                    <Brain className="h-7 w-7 text-chart-3" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI & ML Expertise</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Background in molecular simulations, ML, and advanced tech solutions for enterprise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t-2 bg-muted/30 py-20 relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="container text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I design GenAI-first products that convert automation into measurable business outcomes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <a href="https://calendly.com/apoorvakshri/30min" target="_blank" rel="noopener noreferrer">
                  Schedule a Quick Chat
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

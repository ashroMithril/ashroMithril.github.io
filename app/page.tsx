"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatCard } from "@/components/stat-card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Target, Brain, TrendingUp, Globe, Code2, BookOpen, Award, Plane, Sparkle, Zap, Rocket, Lightbulb, Wrench } from 'lucide-react'
import { useEffect, useState } from "react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const imageScale = Math.max(0.7, 1 - scrollY * 0.0003)
  const imageTranslateZ = Math.min(150, scrollY * 0.4)
  const nameScale = Math.max(0.6, 1 - scrollY * 0.0015)
  const imageOpacity = Math.max(0.4, 1 - scrollY * 0.0008)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-black/5 pointer-events-none" />
        
        <div
          className="absolute inset-0 flex items-center justify-center z-0"
          style={{
            transform: `scale(${imageScale}) perspective(1500px) translateZ(-${imageTranslateZ}px)`,
            opacity: imageOpacity,
            transition: "transform 0.05s ease-out, opacity 0.05s ease-out",
          }}
        >
          <div className="relative w-[85vw] h-[85vh] max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <div className="absolute inset-3 overflow-hidden rounded-[1.5rem] ring-1 ring-black/5">
                {!videoError ? (
                  <video
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3289-zUf3JyNeUnmGWdK8NQzRcjKXhkaEZz.mov"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={() => setVideoError(true)}
                  />
                ) : (
                  <Image
                    src="/images/apoorva-profile.jpg"
                    alt="Apoorva Shrivastava"
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative z-10 text-center space-y-6 px-4"
          style={{
            transform: `scale(${nameScale})`,
            transition: "transform 0.05s ease-out",
          }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-xl px-5 py-2 text-sm border border-orange-500/30 shadow-lg">
            <Zap className="h-4 w-4 text-orange-500" />
            <span className="font-medium text-white">Senior Product Manager - GenAI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]">
            Apoorva Shrivastava
          </h1>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-white/60 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-24 relative">
          <div className="space-y-12">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2 text-sm">
                <Rocket className="h-4 w-4 text-orange-500" />
                <span className="font-medium">7+ Years in AI Product Leadership</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                Building GenAI-First Products That Transform Workflows
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                Product leader shipping AI-empowered products across SaaS enterprise platforms. Pioneered the transformation of 
                <span className="text-orange-500 font-medium"> flow-based automation into prompt-first agent experiences</span> at scale.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="group h-12 px-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25">
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 border-2">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Bento grid for skills */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <Card className="border-2 hover:border-orange-500/50 transition-all hover:shadow-lg group">
                <CardContent className="pt-6 pb-6 text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Target className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <p className="font-semibold">Product Strategy</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-orange-500/50 transition-all hover:shadow-lg group">
                <CardContent className="pt-6 pb-6 text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Brain className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <p className="font-semibold">GenAI & Agents</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-orange-500/50 transition-all hover:shadow-lg group">
                <CardContent className="pt-6 pb-6 text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <TrendingUp className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <p className="font-semibold">PLG & Growth</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-orange-500/50 transition-all hover:shadow-lg group">
                <CardContent className="pt-6 pb-6 text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Globe className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <p className="font-semibold">Integrations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent" />
          <div className="relative">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-2 bg-gradient-to-br from-background to-muted/20 hover:shadow-xl transition-all">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="text-5xl font-bold bg-gradient-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">7+</div>
                  <div className="text-sm text-muted-foreground font-medium">Years in SaaS & Product</div>
                </CardContent>
              </Card>
              <Card className="border-2 bg-gradient-to-br from-background to-muted/20 hover:shadow-xl transition-all">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="text-5xl font-bold bg-gradient-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">70+</div>
                  <div className="text-sm text-muted-foreground font-medium">Integrations Launched</div>
                </CardContent>
              </Card>
              <Card className="border-2 bg-gradient-to-br from-background to-muted/20 hover:shadow-xl transition-all">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="text-5xl font-bold bg-gradient-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">5%</div>
                  <div className="text-sm text-muted-foreground font-medium">Freemium Conversion</div>
                </CardContent>
              </Card>
              <Card className="border-2 bg-gradient-to-br from-background to-muted/20 hover:shadow-xl transition-all">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="text-5xl font-bold bg-gradient-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground font-medium">Enterprise Clients</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-24 relative">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2 text-sm mb-4">
                <Sparkles className="h-4 w-4 text-orange-500" />
                <span className="font-medium">Get to know me</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I craft product roadmaps and ship AI-first experiences that help companies automate complex customer journeys
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-center max-w-6xl mx-auto">
              <Card className="md:col-span-3 border-2 p-6 bg-gradient-to-br from-background to-muted/20">
                <CardContent className="space-y-4 pt-0">
                  <p className="text-lg leading-relaxed">
                    I started out in research and molecular simulations, then moved into enterprise product roles where I
                    learned to balance rigor with speed. I love solving product problems end-to-end - from hypothesis and
                    metrics to UX and go-to-market.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Currently, I'm leading the transformation of flow-based automation platforms into conversational,
                    prompt-first agent experiences. This involves rethinking how both technical and non-technical users
                    interact with AI, building robust prompting layers, and enabling multimodal interactions that work
                    across channels.
                  </p>
                </CardContent>
              </Card>

              <div className="md:col-span-2 w-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl hover:shadow-3xl transition-shadow">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6576-jnNKAxNefGCxOdFL1SzARLmBJJzHU5.mov"
                  className="w-full h-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              </div>
            </div>

            {/* Skills */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Tools */}
              <Card className="border-2 bg-gradient-to-br from-background to-muted/20 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30">
                      <Wrench className="h-5 w-5 text-orange-500" />
                    </div>
                    <CardTitle className="text-xl">Tools</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="text-xs py-1.5 px-3 bg-orange-500/10 text-orange-600 border-orange-500/30">Jira</Badge>
                    <Badge className="text-xs py-1.5 px-3 bg-orange-500/10 text-orange-600 border-orange-500/30">Figma</Badge>
                    <Badge className="text-xs py-1.5 px-3 bg-orange-500/10 text-orange-600 border-orange-500/30">Miro</Badge>
                    <Badge className="text-xs py-1.5 px-3 bg-gray-100 text-gray-700 border-gray-300">Notion</Badge>
                    <Badge className="text-xs py-1.5 px-3 bg-gray-100 text-gray-700 border-gray-300">Confluence</Badge>
                    <Badge className="text-xs py-1.5 px-3 bg-gray-100 text-gray-700 border-gray-300">Productboard</Badge>
                    <Badge className="text-xs py-1.5 px-3 bg-gray-100 text-gray-700 border-gray-300">Amplitude</Badge>
                    <Badge className="text-xs py-1.5 px-3 bg-gray-100 text-gray-700 border-gray-300">Mixpanel</Badge>
                    <Badge className="text-xs py-1.5 px-3 bg-orange-500/10 text-orange-600 border-orange-500/30">V0</Badge>
                    <Badge className="text-xs py-1.5 px-3 bg-orange-500/10 text-orange-600 border-orange-500/30">Cursor</Badge>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground italic">
                      One skill I'm letting go of: writing PRDs from scratch. It's either prototypes, research drafts from Perplexity, or templates from Figma now.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Core Capabilities */}
              <Card className="border-2 bg-gradient-to-br from-background to-muted/20 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30">
                      <Lightbulb className="h-5 w-5 text-orange-500" />
                    </div>
                    <CardTitle className="text-xl">Core Capabilities</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs py-1.5 px-3">Product strategy</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">Roadmapping</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">Prioritisation</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">Stakeholder management</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">User research</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">Data analysis</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">SQL</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">A/B testing</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">Technical literacy</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">API knowledge</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">System thinking</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">AI/LLM fundamentals</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">Prompt engineering</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">Integrations architecture</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">UX intuition</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">Storytelling</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">GTM planning</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">Leadership</Badge>
                    <Badge variant="outline" className="text-xs py-1.5 px-3">Execution excellence</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="border-2 bg-gradient-to-br from-background to-muted/20 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30">
                      <BookOpen className="h-5 w-5 text-orange-500" />
                    </div>
                    <CardTitle className="text-xl">Education</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-bold text-lg">IIT Patna</p>
                  <p className="font-medium text-sm">B.Tech in Chemical Sciences</p>
                  <p className="text-sm text-muted-foreground">Minor: AI & Entrepreneurship</p>
                  <p className="text-sm text-muted-foreground">2014-2018 | CGPA: 8.31/10</p>
                </CardContent>
              </Card>

              {/* Beyond Work */}
              <Card className="border-2 bg-gradient-to-br from-background to-muted/20 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30">
                      <Sparkles className="h-5 w-5 text-orange-500" />
                    </div>
                    <CardTitle className="text-xl">Beyond Work</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I love traveling and have been to 5 countries including USA, UAE, Sri Lanka, Georgia, Oman and have touched famous spots in over 20 states in India.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I have become a cleanliness freak lately and have an eye for arrangement and organisation. I think this developed out of practice of looking at UIUX cleanliness over the years which has now become a part of my physical life just as much as my digital life.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 relative rounded-3xl overflow-hidden my-12">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-background to-black/5" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <div className="relative text-center space-y-8 px-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-orange-500" />
              <span className="font-medium">Let's connect</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Chat?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I design GenAI-first products that convert automation into measurable business outcomes.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button asChild size="lg" className="h-12 px-8 group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25">
                <a href="https://calendly.com/apoorvakshri/30min" target="_blank" rel="noopener noreferrer">
                  Schedule a Quick Chat
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 border-2">
                <Link href="/projects">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

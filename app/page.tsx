import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StatCard } from "@/components/stat-card"
import { ArrowRight, Sparkles, Users, Rocket, Brain, Zap, Target, TrendingUp, Globe, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-20 md:py-32 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-primary/5 px-4 py-1.5 text-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="font-medium">Product Leader in AI Agents</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
                Building GenAI-First Products That Transform Workflows
              </h1>

              <p className="text-xl text-muted-foreground text-pretty">
                Product leader with 7+ years shipping AI-empowered products across SaaS enterprise platforms. Expert at
                turning flow-based systems into prompt-first agent builders.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/experience">
                    View My Work <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://www.linkedin.com/in/apoorva-shrivastava-21a415a6/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get in Touch
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-3">
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

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-2xl" />
              <div className="relative border-4 border-primary/10 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/apoorva-profile.jpg"
                  alt="Apoorva Shrivastava - Product Leader"
                  width={600}
                  height={600}
                  className="relative"
                  priority
                />
              </div>
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

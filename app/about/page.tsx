import { Navigation } from "@/components/navigation"
import ShaderBackground from "@/components/shader-background"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Code2, Sparkles, Plane, Sparkle, Brain, Users, Target, TrendingUp, Lightbulb, Layers } from 'lucide-react'

export default function AboutPage() {
  return (
    <ShaderBackground>
      <div className="min-h-screen">
        <Navigation />

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">About Me</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Hi, I&apos;m Apoorva. I craft product roadmaps and ship AI-first experiences that help companies
                  automate complex customer journeys and unlock new revenue streams.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I started out in research and molecular simulations, then moved into enterprise product roles where I
                  learned to balance rigor with speed. I love solving product problems end-to-end - from hypothesis and
                  metrics to UX and go-to-market.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently, I&apos;m leading the transformation of flow-based automation platforms into conversational,
                  prompt-first agent experiences. This involves rethinking how both technical and non-technical users
                  interact with AI, building robust prompting layers, and enabling multimodal interactions that work
                  across channels.
                </p>
              </div>

              <div className="w-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
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
            {/* </CHANGE> */}

            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black border-2 border-primary">
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Core Strengths</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="group hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white group-hover:scale-110 transition-transform">
                      <Brain className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg">Problem Solving</h3>
                    <p className="text-sm text-muted-foreground">
                      Strategic thinking to solve complex product challenges end-to-end
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white group-hover:scale-110 transition-transform">
                      <Layers className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg">Product Roadmap Planning</h3>
                    <p className="text-sm text-muted-foreground">
                      0-1 and 1-10 scaling expertise with data-driven strategy
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white group-hover:scale-110 transition-transform">
                      <Target className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg">Data Analysis & Metrics</h3>
                    <p className="text-sm text-muted-foreground">
                      Metrics-driven decision making with focus on user impact
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white group-hover:scale-110 transition-transform">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg">Cross-Functional Leadership</h3>
                    <p className="text-sm text-muted-foreground">
                      Leading diverse teams to ship complex AI-powered products
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white group-hover:scale-110 transition-transform">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg">User Experience Focus</h3>
                    <p className="text-sm text-muted-foreground">
                      Crafting intuitive interfaces for technical and non-technical users
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white group-hover:scale-110 transition-transform">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg">Strategic Planning</h3>
                    <p className="text-sm text-muted-foreground">
                      Execution excellence from hypothesis to go-to-market
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  With 7+ years in SaaS and product, I&apos;ve independently driven multiple 0-1 and 1-10 products,
                  from freemium growth programs to complex integration marketplaces. My approach combines technical
                  depth with strategic product thinking to deliver measurable business impact.
                </p>
              </CardContent>
            </Card>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Technical & Tool Stack</h2>
              </div>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-sm py-1.5">
                      GenAI / AI / ML
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1.5">
                      Prompt Engineering
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1.5">
                      Figma
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1.5">
                      Miro
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1.5">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1.5">
                      C/C++
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1.5">
                      SQL
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1.5">
                      Microsoft Suite
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1.5">
                      Product Analytics
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1.5">
                      A/B Testing
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <Card className="border-l-4 border-l-chart-1">
                <CardHeader>
                  <CardTitle>Indian Institute of Technology (IIT) Patna</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-medium">B.Tech in Chemical Sciences & Technology</p>
                  <p className="text-sm text-muted-foreground">Minor: AI & Entrepreneurship</p>
                  <p className="text-sm text-muted-foreground">2014 - 2018 | CGPA: 8.31/10</p>
                  <p className="text-sm text-muted-foreground">Batch Representative</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Awards & Recognition</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-l-4 border-l-chart-1 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Customer&apos;s Delight</h3>
                    <p className="text-sm text-muted-foreground">Yellow Messenger</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-chart-2 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Performer of the Year</h3>
                    <p className="text-sm text-muted-foreground">Accenture</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-chart-3 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">2nd Innovation Contest</h3>
                    <p className="text-sm text-muted-foreground">Accenture</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Campus Leadership</h3>
                    <p className="text-sm text-muted-foreground">Debate & Entrepreneurship Awards</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Beyond Work</h2>
              </div>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="pt-6 space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      I&apos;ve held coordinator roles in placement, startup relations, and co-founded a music club at
                      IIT Patna. My experience as a radio jockey and event coordinator taught me the importance of clear
                      communication and community building - skills that translate directly into product work.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-chart-1">
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Plane className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Travel & Exploration</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      I love traveling and have been to 5 countries including USA, UAE, Sri Lanka, Georgia, and Oman.
                      I&apos;ve also touched famous spots in over 20 states across India, constantly seeking new
                      perspectives and experiences that enrich both my personal and professional outlook.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-chart-2">
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkle className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Design Thinking in Life</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      I&apos;ve become a cleanliness freak lately and have an eye for arrangement and organization. I
                      think this developed out of practice of looking at UI/UX cleanliness over the years, which has now
                      become a part of my physical life just as much as my digital life.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShaderBackground>
  )
}

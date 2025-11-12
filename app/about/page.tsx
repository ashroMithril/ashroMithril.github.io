import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Code2, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container py-20 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Hi, I&apos;m Apoorva. I craft product roadmaps and ship AI-first experiences that help companies automate
              complex customer journeys and unlock new revenue streams.
            </p>
          </div>

          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I started out in research and molecular simulations, then moved into enterprise product roles where I
                learned to balance rigor with speed. I love solving product problems end-to-end - from hypothesis and
                metrics to UX and go-to-market.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I&apos;m leading the transformation of flow-based automation platforms into conversational,
                prompt-first agent experiences. This involves rethinking how both technical and non-technical users
                interact with AI, building robust prompting layers, and enabling multimodal interactions that work
                across channels.
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
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;ve held coordinator roles in placement, startup relations, and co-founded a music club at IIT
                  Patna. My experience as a radio jockey and event coordinator taught me the importance of clear
                  communication and community building - skills that translate directly into product work.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

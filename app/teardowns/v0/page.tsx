import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Users, DollarSign, Sparkles, TrendingUp, Target, Eye } from "lucide-react"

export default function V0TeardownPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <Button asChild variant="ghost">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="space-y-4">
            <h1 className="text-5xl font-bold">V0</h1>
            <p className="text-2xl text-muted-foreground">Generative UI by Vercel</p>
            <div className="flex flex-wrap gap-2">
              <Badge>Code Generation</Badge>
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
            </div>
          </div>

          {/* Overview */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <CardTitle>Product Overview</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                V0 by Vercel is a generative UI tool that converts text prompts into production-ready React components.
                It generates clean, accessible code using shadcn/ui and Tailwind CSS, delivering both visual preview and
                editable source code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The product targets developers who want to accelerate UI development without sacrificing code quality or
                flexibility. V0 generates a starting point, then developers refine through conversation or direct code
                editing.
              </p>
            </CardContent>
          </Card>

          {/* Founders */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle>Team & Company</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                V0 is built by Vercel, the company behind Next.js and creator of modern web infrastructure. Led by CEO
                Guillermo Rauch, Vercel has consistently shipped products that define the future of web development.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The V0 team includes experts in AI, React, design systems, and developer tools. This combination of
                infrastructure knowledge and AI capability positions them uniquely to build generative code tools.
              </p>
            </CardContent>
          </Card>

          {/* Funding */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <CardTitle>Company Funding</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Vercel Raised</p>
                  <p className="text-2xl font-bold">$300M+</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Valuation</p>
                  <p className="text-lg font-semibold">$2.5B+</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vercel's strong financial backing enables experimentation with products like V0. They can invest in AI
                infrastructure and iterate quickly without immediate revenue pressure.
              </p>
            </CardContent>
          </Card>

          {/* Best Features */}
          <Card className="border-t-4 border-t-primary">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <CardTitle>Best Features</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary">→</span> Prompt-to-Component Generation
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    Natural language descriptions become functional React components with proper TypeScript types,
                    accessibility, and responsive design built in.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary">→</span> Iterative Refinement
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    Users can refine components through chat without starting over. "Make it darker" or "add a loading
                    state" works seamlessly.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary">→</span> Production-Ready Code
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    Generated code uses modern patterns, shadcn/ui components, and follows React best practices. It's
                    actually usable in production.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary">→</span> Live Preview with Hot Reload
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    See changes instantly in the preview pane as the AI generates code. No build step or deployment
                    needed.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary">→</span> Version History
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    Every iteration is saved. Users can roll back to previous versions if the AI takes a wrong turn.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Growth Reasons */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <CardTitle>Reasons for Growth</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Developer Trust in Vercel Brand</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Vercel has proven track record with Next.js. Developers trust them to build quality tools.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Actual Production Quality Code</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Unlike other AI code generators, V0's output is genuinely usable. This drives word-of-mouth among
                    developers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Built on Popular Stack</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Using Next.js, React, and Tailwind means generated code fits into existing projects without
                    friction.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Strong Community Sharing</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Developers share impressive V0 generations on Twitter/X, driving viral discovery and trial.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Growth Levers */}
          <Card className="bg-muted/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <CardTitle>Growth Levers</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Integration with Vercel Deployment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    One-click deploy to Vercel creates seamless funnel from V0 to hosting revenue.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Public Generation Gallery</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Users can browse and remix public generations, creating discovery loop and SEO value.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Developer Community Content</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    YouTube tutorials and blog posts from community create continuous top-of-funnel traffic.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Credit System Psychology</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Free credits get users hooked, then paid plans feel natural for continued use.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Future Perspective */}
          <Card className="border-2 border-primary">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                <CardTitle>Future Perspective & Opinions</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Opportunities</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>
                      Expand to full-stack generation including API routes, database schemas, and backend logic
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Add collaboration features for teams to iterate on components together</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Build component marketplace where users can sell or share high-quality generations</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Create enterprise tier with company design systems and brand guidelines integration</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Challenges Ahead</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>GitHub Copilot and Cursor are moving into the same space with IDE-native experience</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Need to prove sustained value beyond initial component generation for retention</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Risk of becoming a discovery tool rather than a daily driver for developers</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">My Take</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  V0 represents Vercel's bet that AI code generation works best as a dedicated tool rather than an IDE
                  extension. They're right that the web-based experience enables faster iteration and better
                  collaboration. The key challenge is proving that developers want a separate tool rather than inline
                  generation in their existing workflow. I believe V0's future is as a design-to-code bridge that sits
                  between design tools (Figma) and development environments (VS Code). If they can nail the handoff
                  between designers and developers, they'll own a critical part of the product development workflow. The
                  integration with Vercel's deployment platform creates a compelling end-to-end story.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center pt-8">
            <Button asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View All Teardowns
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

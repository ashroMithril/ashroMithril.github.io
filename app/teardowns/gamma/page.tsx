import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Users, DollarSign, Sparkles, TrendingUp, Target, Eye } from "lucide-react"

export default function GammaTeardownPage() {
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
            <h1 className="text-5xl font-bold">Gamma</h1>
            <p className="text-2xl text-muted-foreground">AI-Powered Presentation Builder</p>
            <div className="flex flex-wrap gap-2">
              <Badge>Presentation</Badge>
              <Badge>GenAI</Badge>
              <Badge>Collaboration</Badge>
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
                Gamma transforms how people create presentations by enabling prompt-to-deck generation. Users describe
                what they want, and Gamma generates beautiful, structured presentations with minimal manual formatting.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The product eliminates the tedious parts of presentation creation while maintaining creative control,
                positioning itself as a "new medium" rather than just a better PowerPoint.
              </p>
            </CardContent>
          </Card>

          {/* Founders */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle>Founders & Team</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Grant Lee (CEO)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Former product designer at Google and Medium. Deep expertise in design tools and collaborative
                  software.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Jon Noronha (CTO)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ex-Google engineer with experience building large-scale collaborative platforms.
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The founding team's combination of design sensibility and engineering depth is evident in the product's
                polish and performance.
              </p>
            </CardContent>
          </Card>

          {/* Funding */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <CardTitle>Funding & Traction</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Total Raised</p>
                  <p className="text-2xl font-bold">$20M+</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Key Investors</p>
                  <p className="text-lg font-semibold">Accel, Bloomberg Beta</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Strong backing from top-tier VCs validates the market opportunity. The company raised during peak AI
                interest, positioning itself well for the generative AI wave.
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
                    <span className="text-primary">→</span> Prompt-to-Deck Generation
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    Users simply describe their presentation topic, and Gamma generates a complete deck with structure,
                    content, and design. The AI understands context and creates logical flow.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary">→</span> Smart Templates
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    Pre-designed themes that adapt to content automatically. Users don't need to worry about spacing,
                    alignment, or color schemes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary">→</span> Inline Editing with AI
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    Users can refine content through conversational prompts rather than manual editing. "Make this more
                    concise" or "add a section about ROI" work seamlessly.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary">→</span> Real-Time Collaboration
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    Multiple team members can work on the same presentation simultaneously with live cursors and
                    comments.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary">→</span> Export Flexibility
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    Native web experience with options to export to PDF or PowerPoint for traditional workflows.
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
                  <h3 className="font-semibold mb-2">Perfect Timing with GenAI Wave</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Launched when ChatGPT made generative AI mainstream. Users were primed to try AI-powered creative
                    tools.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Solving Real Pain</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Presentations are time-consuming and frustrating. Gamma reduces a 2-hour task to 10 minutes without
                    sacrificing quality.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Viral Product-Led Growth</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Beautiful outputs shared on social media drive organic discovery. Each presentation created is
                    marketing for Gamma.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Freemium Model Drives Adoption</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Users can create presentations for free, experiencing value immediately before hitting limits.
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
                  <h3 className="font-semibold mb-2 text-primary">Viral Sharing Mechanics</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Presentations are shared publicly by default with Gamma branding. Each viewer becomes a potential
                    user.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Template Marketplace</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    User-generated templates create network effects and SEO value while reducing content creation load.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Team Collaboration Upsell</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Individual users invite team members, creating organic expansion within organizations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">AI Feature Updates</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Regular AI improvements give reason for press coverage and user re-engagement.
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
                      Expand beyond presentations into documents, reports, and other content formats using the same AI
                      engine
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>
                      Build enterprise features like brand kits, compliance templates, and analytics to increase ACV
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Create API access for developers to embed Gamma generation in their own products</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Add data visualization and chart generation powered by AI for business use cases</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Challenges Ahead</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Microsoft and Google will integrate similar AI features into PowerPoint and Slides</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Risk of becoming a "feature" rather than maintaining platform status</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Need to prove sustained value beyond initial wow factor of AI generation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">My Take</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Gamma has successfully established itself as the AI-native presentation tool, but the moat is in
                  execution speed and taste rather than technology. The key to long-term success is expanding the
                  platform into a full content creation suite while maintaining the design quality that differentiates
                  it from incumbents. The team's design DNA is their strongest asset. If they can continue shipping
                  beautiful, intuitive experiences faster than Microsoft and Google, they'll own the creative
                  professional market.
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

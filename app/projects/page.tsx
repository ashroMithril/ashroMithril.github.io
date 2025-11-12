import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">Projects & Case Studies</h1>
            <p className="text-xl text-muted-foreground">Deep dives into key products and initiatives I&apos;ve led</p>
          </div>

          {/* Prompt-First Agent Builder */}
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Prompt-First Agent Builder</CardTitle>
              <CardDescription className="text-base">
                Transforming flow-based automation into conversational AI agents
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">The Problem</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Traditional flow-based builders created fragmentation and required technical expertise. Customers
                    struggled to maintain complex conversation flows, and non-technical users couldn&apos;t easily adapt
                    agents to changing needs.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">My Role</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Led the product vision and roadmap to convert Yellow.ai&apos;s core platform into a prompt-first
                    agent builder. Defined user journeys, acceptance criteria, and worked closely with engineering and
                    design to ship the new experience.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Approach</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      Conducted user research with 20+ customers to understand pain points
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      Designed prompt templates with safety guardrails and orchestration layer
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      Built multimodal capabilities for text, voice, and future channels
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      Created comprehensive testing framework and rollout plan
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Outcome</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Successfully launched the new agent builder as the core SaaS capability. Reduced time-to-value for
                    customers and improved agent maintainability. The platform now supports prompt-first interactions
                    across multiple channels.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge>GenAI</Badge>
                <Badge>Product Strategy</Badge>
                <Badge>UX Design</Badge>
                <Badge>Prompt Engineering</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Integrations & Marketplace */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Integrations & Marketplace Scale</CardTitle>
              <CardDescription className="text-base">
                Launching 70+ integrations to connect AI agents with revenue systems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">The Problem</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Customers needed to connect their AI agents to existing CRM, payments, and data systems. Without
                    these integrations, agents existed in isolation and couldn&apos;t drive real business outcomes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Execution</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      Orchestrated roadmap for 70+ marketplace integrations
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      Prioritized based on customer demand and revenue potential
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      Built standardized integration framework for rapid deployment
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      Created marketplace UI and developer documentation
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Outcome</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Enabled customers to connect automation to their existing revenue and data systems, significantly
                    increasing platform stickiness and customer lifetime value.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Integrations</Badge>
                <Badge variant="secondary">API Design</Badge>
                <Badge variant="secondary">Marketplace</Badge>
                <Badge variant="secondary">Partnerships</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Freemium & PLG */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Freemium & Product-Led Growth</CardTitle>
              <CardDescription className="text-base">
                5% conversion from inbound traffic to paying customers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">The Challenge</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The platform relied heavily on sales-led motion. We needed to create a self-serve path that would
                    convert inbound interest into paying customers without sales intervention.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Strategy</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      Designed freemium tier with strategic feature gating
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      Created optimized onboarding flows with time-to-value focus
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      Built analytics to track conversion funnels and identify drop-offs
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      Implemented trial mechanics with clear upgrade prompts
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Results</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Achieved 5% conversion rate from inbound traffic to paying customers, seeding ongoing PLG motion for
                    the platform and reducing customer acquisition costs.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">PLG</Badge>
                <Badge variant="secondary">Freemium</Badge>
                <Badge variant="secondary">Growth</Badge>
                <Badge variant="secondary">Analytics</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Payments & Pricing */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Payments & Pricing Strategy</CardTitle>
              <CardDescription className="text-base">
                End-to-end payments automation and revenue optimization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Scope</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Led comprehensive work on pricing and packaging strategy, payments infrastructure, and billing
                    automation. Connected product usage to revenue through telemetry and analytics.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Key Deliverables</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      Pricing model based on usage patterns and customer segments
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      Automated billing and payments infrastructure
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      Revenue telemetry and reporting dashboards
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      Self-serve upgrade and payment flows
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Pricing</Badge>
                <Badge variant="secondary">Payments</Badge>
                <Badge variant="secondary">Revenue</Badge>
                <Badge variant="secondary">Automation</Badge>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-muted/50">
            <CardContent className="pt-6 text-center space-y-4">
              <h3 className="text-xl font-semibold">Want to Learn More?</h3>
              <p className="text-muted-foreground">
                These case studies represent a fraction of my product work. Let&apos;s discuss how I can help your team.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

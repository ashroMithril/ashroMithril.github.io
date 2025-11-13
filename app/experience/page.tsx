import { Navigation } from "@/components/navigation"
import ShaderBackground from "@/components/shader-background"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, Briefcase, BookOpen } from "lucide-react"

export default function ExperiencePage() {
  return (
    <ShaderBackground>
      <div className="min-h-screen">
        <Navigation />

        <div className="container py-20 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h1 className="text-4xl font-bold">Experience</h1>
              </div>
              <p className="text-xl text-muted-foreground">
                7+ years building AI-enabled platforms and shipping products that matter
              </p>
            </div>

            {/* Yellow.ai - Sr. PM */}
            <Card className="border-2 border-primary/30 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-chart-1 to-chart-2" />
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">Sr. Product Manager - GenAI</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base">
                      <Building2 className="h-4 w-4" />
                      Yellow.ai, Abu Dhabi
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground border rounded-lg px-3 py-1.5 bg-muted/50">
                    <Calendar className="h-4 w-4" />
                    April 2021 - Present
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Leading the transformation from flow-based builders to conversational, prompt-first agent experiences
                  that form the new core of the SaaS platform.
                </p>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="h-1 w-8 bg-primary rounded" />
                    Key Initiatives & Outcomes
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3 p-3 rounded-lg border bg-muted/30">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Prompt-First Agent Builder:</strong> Defined product
                        requirements, user journeys, and acceptance metrics for an agent-first UX. Focused on lowering
                        time-to-value for customers and improving maintainability for ops teams.
                      </span>
                    </li>
                    <li className="flex gap-3 p-3 rounded-lg border bg-muted/30">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">70+ Integrations & Marketplace:</strong> Orchestrated the
                        roadmap and launch of CRM, payments, and multiple third-party systems, enabling customers to
                        connect automation to their existing revenue and data systems.
                      </span>
                    </li>
                    <li className="flex gap-3 p-3 rounded-lg border bg-muted/30">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Payments & Pricing:</strong> Led end-to-end work on pricing
                        and packaging, and entire payments automation - from product definition to launch and telemetry
                        to measure revenue impact.
                      </span>
                    </li>
                    <li className="flex gap-3 p-3 rounded-lg border bg-muted/30">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Omnichannel & Multimodal:</strong> Shipped capabilities to
                        support text, voice, and other modalities so the same agent could be used across chat, voice,
                        and future channels.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge className="text-sm py-1">Product Strategy</Badge>
                  <Badge className="text-sm py-1">GenAI</Badge>
                  <Badge className="text-sm py-1">Agent Builder</Badge>
                  <Badge className="text-sm py-1">Integrations</Badge>
                  <Badge className="text-sm py-1">Payments</Badge>
                  <Badge className="text-sm py-1">Omnichannel</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Yellow Messenger - PM Growth */}
            <Card className="border-l-4 border-l-chart-1 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">Product Manager - Growth & Integration</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base">
                      <Building2 className="h-4 w-4" />
                      Yellow Messenger, Bangalore
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground border rounded-lg px-3 py-1.5 bg-muted/50">
                    <Calendar className="h-4 w-4" />
                    April 2020 - April 2021
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Created the bridge between product-led acquisition and paid adoption.
                </p>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="h-1 w-8 bg-chart-1 rounded" />
                    Key Achievement
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3 p-3 rounded-lg border bg-muted/30">
                      <span className="text-chart-1 mt-1">•</span>
                      <span>
                        Initiated and managed the freemium and free trial programs to drive product-led acquisition.
                        Created funnels, onboarding flows, feature gating and trial analytics.
                      </span>
                    </li>
                    <li className="flex gap-3 p-3 rounded-lg border bg-muted/30">
                      <span className="text-chart-1 mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Achieved 5% conversion</strong> from inbound traffic to
                        paying customers through targeted freemium mechanics and trial-to-paid flows.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-sm py-1">
                    PLG
                  </Badge>
                  <Badge variant="secondary" className="text-sm py-1">
                    Freemium
                  </Badge>
                  <Badge variant="secondary" className="text-sm py-1">
                    Conversion
                  </Badge>
                  <Badge variant="secondary" className="text-sm py-1">
                    Growth
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Accenture */}
            <Card className="border-l-4 border-l-chart-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">Business Analyst</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base">
                      <Building2 className="h-4 w-4" />
                      Accenture Innovation Hub, Bangalore
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground border rounded-lg px-3 py-1.5 bg-muted/50">
                    <Calendar className="h-4 w-4" />
                    Sep 2018 - Mar 2020
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Delivered advanced technology solutions for enterprise clients.
                </p>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="h-1 w-8 bg-chart-2 rounded" />
                    Key Contributions
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3 p-3 rounded-lg border bg-muted/30">
                      <span className="text-chart-2 mt-1">•</span>
                      <span>
                        Delivered advanced technology solutions for{" "}
                        <strong className="text-foreground">15+ high-value clients</strong> in Natural Resources and
                        other industries.
                      </span>
                    </li>
                    <li className="flex gap-3 p-3 rounded-lg border bg-muted/30">
                      <span className="text-chart-2 mt-1">•</span>
                      <span>
                        Led discovery, solution scoping, and tech evaluation using AI and AR/VR, producing measurable
                        operational savings and strategic value.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-sm py-1">
                    AI Solutions
                  </Badge>
                  <Badge variant="secondary" className="text-sm py-1">
                    AR/VR
                  </Badge>
                  <Badge variant="secondary" className="text-sm py-1">
                    Enterprise
                  </Badge>
                  <Badge variant="secondary" className="text-sm py-1">
                    Innovation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Research Experience */}
            <div className="pt-8 space-y-6">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Research Experience</h2>
              </div>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-chart-3 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div>
                        <CardTitle>Research Assistant</CardTitle>
                        <CardDescription>IIT Kanpur</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground border rounded-lg px-3 py-1 bg-muted/50">
                        May - Aug 2018
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Molecular simulations and ML for material properties. Comprehensive data analysis and created ML
                      methods to quantify surface tension for industrial materials.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-chart-3 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div>
                        <CardTitle>Summer Research Intern</CardTitle>
                        <CardDescription>OHSU, Portland</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground border rounded-lg px-3 py-1 bg-muted/50">
                        May - July 2017
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Protein flexibility and mixed resolution Monte Carlo simulations. Applied hierarchical clustering
                      and ML to create new ranking schemes for ligand-protein docking poses.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-chart-3 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div>
                        <CardTitle>Summer Research Intern</CardTitle>
                        <CardDescription>JNCASR, Bangalore</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground border rounded-lg px-3 py-1 bg-muted/50">
                        May - June 2016
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Dissipative particle dynamics to study self-assembly of surfactant molecules. Tools included
                      LAMMPS, VMD and domain-specific simulation stacks.
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

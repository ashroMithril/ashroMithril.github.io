import { Navigation } from "@/components/navigation"
import ShaderBackground from "@/components/shader-background"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Microscope } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <ShaderBackground>
      <div className="min-h-screen relative">
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
        <div className="relative z-10">
          <Navigation />

          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="space-y-12">
              <div>
                <h1 className="text-4xl font-bold mb-4">Projects & Case Studies</h1>
                <p className="text-xl text-muted-foreground">
                  Deep dives into key products and initiatives I&apos;ve led
                </p>
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
                        Traditional flow-based builders created fragmentation and required technical expertise.
                        Customers struggled to maintain complex conversation flows, and non-technical users
                        couldn&apos;t easily adapt agents to changing needs.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">My Role</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Led the product vision and roadmap to convert Yellow.ai&apos;s core platform into a prompt-first
                        agent builder. Defined user journeys, acceptance criteria, and worked closely with engineering
                        and design to ship the new experience.
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
                        Successfully launched the new agent builder as the core SaaS capability. Reduced time-to-value
                        for customers and improved agent maintainability. The platform now supports prompt-first
                        interactions across multiple channels.
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
                        Enabled customers to connect automation to their existing revenue and data systems,
                        significantly increasing platform stickiness and customer lifetime value.
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
                        The platform relied heavily on sales-led motion. We needed to create a self-serve path that
                        would convert inbound interest into paying customers without sales intervention.
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
                        Achieved 5% conversion rate from inbound traffic to paying customers, seeding ongoing PLG motion
                        for the platform and reducing customer acquisition costs.
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

              {/* Agent Assist */}
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-2xl">Customizable Agent Assist Platform</CardTitle>
                  <CardDescription className="text-base">
                    Real-time AI assistance for support agents across Yellow.ai and third-party CRMs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Overview</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Productized a fully customizable agent-assist layer that plugs into Yellow.ai and third-party CRMs
                        (Salesforce, Zendesk, ServiceNow) via lightweight connector SDKs and webhook APIs.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Key Features</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Multilayer suggestion engine with configurable confidence thresholds for auto-apply vs. soft suggestions
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Inline UI overlay and agent sidebar supporting rich cards, attachments, and one-click CRM actions
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Human-in-the-loop controls: whisper mode, suggested-reply approval, editable responses, and audit logs
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Security features: RBAC, PII redaction, session encryption, and configurable data residency
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Partner SDK ecosystem with sample apps and certification program reducing integration time by 60%
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Impact</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Pilot deployments reported 25-40% reduction in average handle time and 10-20 point improvement in
                        agent satisfaction, enabling enterprise customers to realize significant cost savings through higher
                        automation confidence.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge>AI Assistance</Badge>
                    <Badge>CRM Integration</Badge>
                    <Badge>Real-time</Badge>
                    <Badge>Compliance</Badge>
                    <Badge>Partner SDKs</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Email Automation for Support - Multithreaded, Multimodal Orchestration */}
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-2xl">Email Automation for Support - Multithreaded, Multimodal Orchestration</CardTitle>
                  <CardDescription className="text-base">
                    80%+ resolution rate within 1 week of launch, driving 30% of annual revenue
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Context & Role</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Automate support conversations over email - one of the most used channels by enterprise support systems. Over 50% of support conversations were either happening in email directly or converted into email tickets from support portals. Led as PM with one senior dev for MVP, then 2 SDEs, designer, and shared QA for full product.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Problem & Opportunity</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Huge bulky emails with massive volumes - companies with 100 agents and 50k monthly tickets ended up with 500 emails per agent. This led to delayed responses, inconsistent handling, and poor customer experience. Before LLMs, extracting entities from emails was nearly impossible.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Constraints & Hypothesis</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Half a quarter to experiment and prove results or discontinue. Competitor research showed this wasn&apos;t a proven use case yet. User interviews revealed additional needs: analytics on emails, no full automation initially - just analytics and draft email responses for agents. Hypothesis: KB-based automation could achieve 80%+ resolution rate.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Actions Taken</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Built MVP in one month: KB-based automation tackling huge multi-intent emails, noise clearing, segmenting
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Added multi-thread responses, API-based responses, sentiment analysis, draft creation
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Implemented reading attachments with OCR, transfer to agents functionality
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Designed minimalistic setup UI to fit into existing flow builder for enterprise builders
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Launched marketing campaigns specifically for email automation
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Results & Impact</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Achieved 80%+ resolution rate within 1 week of launch.</strong> Secured first million-dollar deals signed. Today, approximately <strong className="text-foreground">30% of company revenue</strong> comes from this channel. Feature set expanded to include multi-thread handling, multi-intent processing, OCR for attachments, and seamless agent handoffs.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Learnings & Next Steps</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        User research uncovered that customers initially wanted analytics and drafting rather than full automation. Starting with KB-based automation proved the concept quickly, then iteratively added multimodal capabilities. The minimalistic setup approach ensured adoption by fitting into existing workflows rather than requiring separate training.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge>Email Automation</Badge>
                    <Badge>Multimodal AI</Badge>
                    <Badge>80%+ Resolution</Badge>
                    <Badge>30% Revenue Driver</Badge>
                    <Badge>Thread Management</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Orchestrator LLM */}
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-2xl">Orchestrator LLM - Conversation Experience Revolution</CardTitle>
                  <CardDescription className="text-base">
                    Increased deflection rate from 60% to 80%+, now powering 100% of platform bots
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Context & Role</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Led the technology shift from NLP to LLM-based workflow identification to dramatically improve conversation quality and ticket deflection rates. This was a platform-wide transformation affecting all customer bots.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Problem & Opportunity</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Around 40%+ undeflected tickets were going to fallback due to poor intent identification, inability to handle context switching, and irrelevant small talk responses. Analysis of multiple bot conversations revealed massive UX gaps: flows didn&apos;t switch properly, buttons for switching were almost impossible in current setup, and small talk responses were horribly irrelevant to conversation context.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Constraints & Hypothesis</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Timing coincided with ChatGPT launch, which demonstrated enormous power for creating personalized conversations. Instead of building a complex design mode for business analysts, hypothesized that LLM-based orchestration could handle intent identification, context switching, and personalized small talk automatically.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Actions Taken</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Interviewed analysts and implementation engineers, documenting UX failures with screenshots
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Prioritized intent identification and relevant small talk identification as most critical
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Designed Dynamic Chat Node as another node in existing builder for quick deployment
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Built Orchestrator LLM layer to intelligently route between intents and handle context
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Shipped initial version in weeks by leveraging existing node architecture
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Results & Impact</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Increased deflection rate to 80%+ from existing 60%.</strong> Saw immediate increase in customer CSAT scores and brand NPS. Today, <strong className="text-foreground">100% of platform bots run on Orchestrator LLM</strong> - both old bots migrated from NLP and all new bots built on this foundation.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Learnings & Next Steps</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        The combination of Dynamic Chat Node for personalized messaging and Orchestrator LLM for intelligent routing created a step-function improvement in conversation quality. Rapid deployment by fitting into existing node architecture accelerated adoption and reduced training requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge>Orchestrator LLM</Badge>
                    <Badge>80%+ Deflection</Badge>
                    <Badge>NLP → LLM Migration</Badge>
                    <Badge>Platform-wide</Badge>
                    <Badge>CSAT Improvement</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Templatized Integration Framework & Marketplace Scale */}
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-2xl">Templatized Integration Framework & Marketplace Scale</CardTitle>
                  <CardDescription className="text-base">
                    Scaled from manual integrations to 70+ marketplace products with wrapper-based approach
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Context & Role</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Led the creation of templatized integration framework and marketplace product roadmap to enable rapid integration additions across CRM, Payments, Notifications, Live Agent, and third-party Agent Assist platforms.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Problem & Opportunity</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Every new integration required custom development work, limiting quantity and speed of integration additions needed for enterprise growth across different customer segments. Customers needed to connect AI agents to existing business systems to drive real outcomes.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Actions Taken</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Designed wrapper-based integration approach to templatize new integration additions
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Built integration action node with search-based entity addition for ease of use
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Implemented automated authentication to reduce integration failure rates
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Added multi-account integration support for enterprises with segmented support tools
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Created marketplace UI and prioritization framework based on customer demand
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Results & Impact</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Dramatically reduced time to add new integrations through templatized approach. Enabled support for bigger enterprises with multiple accounts for different customer segments. Launched 70+ integrations covering Notifications, Live Agent systems, Payments, CRM, and Agent Assist for third parties.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Learnings & Next Steps</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Wrapper-based templatization was key to scaling integration quantity. Automated authentication significantly reduced failure rates and improved customer experience. Multi-account support opened up larger enterprise opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge>Integrations</Badge>
                    <Badge>70+ Products</Badge>
                    <Badge>Templatized Framework</Badge>
                    <Badge>Multi-account</Badge>
                    <Badge>Enterprise Scale</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Payments Automation */}
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-2xl">Payments Automation - Strategic Revenue Infrastructure</CardTitle>
                  <CardDescription className="text-base">
                    500 demo requests and 50+ direct upgrade requests monthly drove automated payment system
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Context & Role</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Led strategic decision and full execution to add automated payment collection mechanism across the platform. Worked with finance team, partner billing POCs, and paying customers to understand current process and design optimal flows.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Problem & Opportunity</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        With 500 demo requests and around 50 direct requests to upgrade and pay per month, manual payment processes were creating bottlenecks. Main challenges: tracking paid vs unpaid bots, linking paid subscriptions for smaller payments, managing partner billing, and getting pricing/packaging right for every region.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Constraints & Hypothesis</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Manual payments through PO billing went through multiple touchpoints, slowing conversion. Hypothesis: automated mechanism would significantly reduce friction and improve conversion rates, especially for SME brands and partner channels.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Actions Taken</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Conducted user research with finance team, partner billing POCs, and paying customers
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Built POC using direct link sharing to validate approach before full integration
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Solved pricing and packaging complexity across different regions and customer segments
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          {'Integrated platform > subscription > bots to Salesforce to backend to NetSuite, Stripe, etc.'}
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Maintained manual PO billing path for enterprise customers requiring it
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Results & Impact</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Successfully automated payment collection for high-volume smaller transactions while maintaining enterprise PO workflows. Enabled tracking of paid/unpaid bots with subscription linkage. Reduced payment friction for SME and partner segments.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Learnings & Next Steps</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Regional pricing/packaging complexity was the biggest challenge. POC validation before full integration prevented costly mistakes. Maintaining dual paths (automated + manual PO) served different customer segments effectively.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge>Payments Automation</Badge>
                    <Badge>500+ Monthly Demos</Badge>
                    <Badge>Multi-region Pricing</Badge>
                    <Badge>Subscription Management</Badge>
                    <Badge>Revenue Infrastructure</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Onboarding + Marketplace for Product-Led Growth */}
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-2xl">Onboarding + Marketplace for Product-Led Growth</CardTitle>
                  <CardDescription className="text-base">
                    Strategic shift from sales-led to product-led growth for long-term scalability
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Context & Role</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Led strategy to transition company from mostly sales-led with longer sales cycles to product-led sales and product-led growth motion. This was needed for long-term sustainable growth.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Problem & Opportunity</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Company relied heavily on sales-led motion with longer cycles. To scale efficiently and reduce customer acquisition costs, needed self-serve path that would convert inbound interest into paying customers without sales intervention.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Actions Taken</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Designed freemium tier with strategic feature gating to drive upgrades
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Created optimized onboarding flows focused on rapid time-to-value
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Built marketplace to showcase integrations and accelerate customer value realization
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Implemented analytics to track conversion funnels and identify drop-off points
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Added trial mechanics with clear upgrade prompts at friction points
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Results & Impact</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Achieved 5% conversion rate</strong> from inbound traffic to paying customers, seeding ongoing PLG motion for the platform. Significantly reduced customer acquisition costs while maintaining deal quality.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Learnings & Next Steps</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Time-to-value focus in onboarding was critical to conversion. Marketplace showcase helped customers understand integration possibilities quickly. Analytics-driven iteration on funnel drop-offs continuously improved conversion rates.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge>PLG Strategy</Badge>
                    <Badge>5% Conversion</Badge>
                    <Badge>Freemium</Badge>
                    <Badge>Marketplace</Badge>
                    <Badge>Growth</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Multithreaded, Multimodal Omnichannel Platform */}
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-2xl">Multithreaded, Multimodal Omnichannel Platform</CardTitle>
                  <CardDescription className="text-base">
                    True omnichannel architecture with unified conversation continuity across all channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Core Architecture</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Architected the core omnichannel model: unified conversation ID, per-channel events store, and
                        thread-level state so users can seamlessly continue any thread across email, chat, voice, and
                        attachments without losing context.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Multimodal NLU Stack</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Merged embeddings from text, OCR, and voice transcripts into a single semantic layer enabling
                        cross-modal retrieval, intent detection, and similarity search for rapid KB responses.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Key Capabilities</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Channel continuity and session transfer: single-session continuity for chat-to-voice and email-to-chat handoffs
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Session transfer APIs, conversation reconciliation, and conflict resolution to avoid duplicated actions
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Thread-level telemetry, SLA heatmaps, inbox views for multithread queues
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Automated alerts for threads nearing SLA breaches or needing human review
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Enterprise controls: feature flags per-channel, policy-driven routing, RBAC, tenant-level configuration
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Business Impact</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Enabled truly omnichannel support journeys that reduce customer friction, reduce redundant follow-ups,
                        and let automation operate safely at thread granularity. Customers can run concurrent threads across
                        multiple channels while preserving context, SLAs, and compliance.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge>Omnichannel</Badge>
                    <Badge>Thread Management</Badge>
                    <Badge>Multimodal NLU</Badge>
                    <Badge>Session Transfer</Badge>
                    <Badge>Enterprise Architecture</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Chat + Voice Widget */}
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-2xl">Functional Chat + Voice Widget for Enterprises</CardTitle>
                  <CardDescription className="text-base">
                    Unified omnichannel widget with seamless chat-to-voice continuity
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Product Vision</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Led design and release of a unified enterprise chat+voice widget (web + mobile) with single-session
                        continuity so users can switch channels without losing context (chat → voice → chat). Implemented via
                        WebRTC with robust carrier fallback and SIP integration for legacy telephony.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Feature Set</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Proactive messaging, co-browse, file transfer, rich card actions (payments, forms)
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Callback scheduling, voicemail-to-transcript, agent whisper/coaching, soft handoff
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Local language TTS/STT, themeable design, A11y-compliant, custom branding support
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">→</span>
                          Developer-first: single NPM/SDK bundle, embeddable iframe, one-line install for rapid POC
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Quality & Reliability</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Adaptive bitrate, jitter buffering, QoS signals with automatic codec fallback to preserve call quality
                        on poor networks. Built telemetry dashboard for real-time call quality, latency, and session health.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Enterprise Controls</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Call recording opt-in, consent flows, PII masking at ingestion, SSO, SAML, and fine-grained RBAC for
                        widget features.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Impact</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Reduced time-to-integrate voice channels from weeks to days for enterprise clients, improved containment
                        and CSAT in omnichannel journeys, and increased usage of self-serve flows via rich actions.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge>Omnichannel</Badge>
                    <Badge>WebRTC</Badge>
                    <Badge>Voice</Badge>
                    <Badge>Widget SDK</Badge>
                    <Badge>Enterprise</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* AI Product Teardowns */}
              <div className="pt-12 border-t-2 border-primary/20">
                <div className="flex items-center gap-3 mb-8">
                  <Microscope className="h-8 w-8 text-primary" />
                  <div>
                    <h2 className="text-3xl font-bold">AI Product Teardowns</h2>
                    <p className="text-muted-foreground">Analyzing the best AI products in the market</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Gamma */}
                  <Link href="/teardowns/gamma">
                    <Card className="border-l-4 border-l-orange-500 hover:shadow-xl transition-all h-full cursor-pointer bg-gradient-to-br from-orange-50 to-white group">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">Gamma</CardTitle>
                          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            G
                          </div>
                        </div>
                        <CardDescription className="text-sm">AI-powered presentation builder</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Deep analysis of prompt-to-presentation flow, template system, and collaboration features.
                        </p>
                        <Button
                          variant="ghost"
                          className="mt-4 p-0 h-auto font-semibold text-orange-600 hover:text-orange-700"
                        >
                          Read Full Teardown <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>

                  {/* V0 */}
                  <Link href="/teardowns/v0">
                    <Card className="border-l-4 border-l-black hover:shadow-xl transition-all h-full cursor-pointer bg-gradient-to-br from-gray-50 to-white group">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg group-hover:text-gray-700 transition-colors">V0</CardTitle>
                          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            V
                          </div>
                        </div>
                        <CardDescription className="text-sm">Generative UI by Vercel</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Examining code generation patterns, component architecture, and iterative refinement
                          mechanics.
                        </p>
                        <Button
                          variant="ghost"
                          className="mt-4 p-0 h-auto font-semibold text-black hover:text-gray-700"
                        >
                          Read Full Teardown <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>

                  {/* Lovable */}
                  <Card className="border-l-4 border-l-orange-400 hover:shadow-xl transition-all bg-gradient-to-br from-orange-100/40 to-white opacity-60">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Lovable</CardTitle>
                        <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                          L
                        </div>
                      </div>
                      <CardDescription className="text-sm">AI full-stack app builder</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Analysis of end-to-end app generation, deployment flow, and developer experience.
                      </p>
                      <Badge variant="secondary" className="mt-4">
                        Coming Soon
                      </Badge>
                    </CardContent>
                  </Card>

                  {/* Cursor */}
                  <Card className="border-l-4 border-l-gray-800 hover:shadow-xl transition-all bg-gradient-to-br from-gray-100/40 to-white opacity-60">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Cursor</CardTitle>
                        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                          C
                        </div>
                      </div>
                      <CardDescription className="text-sm">AI-first code editor</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Studying inline code suggestions, chat-based editing, and codebase understanding capabilities.
                      </p>
                      <Badge variant="secondary" className="mt-4">
                        Coming Soon
                      </Badge>
                    </CardContent>
                  </Card>

                  {/* ChatGPT */}
                  <Card className="border-l-4 border-l-orange-600 hover:shadow-xl transition-all bg-gradient-to-br from-orange-50/50 to-white opacity-60">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">ChatGPT</CardTitle>
                        <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                          G
                        </div>
                      </div>
                      <CardDescription className="text-sm">Conversational AI platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Breakdown of conversation design, memory management, and multi-modal interaction patterns.
                      </p>
                      <Badge variant="secondary" className="mt-4">
                        Coming Soon
                      </Badge>
                    </CardContent>
                  </Card>

                  {/* Gemini */}
                  <Card className="border-l-4 border-l-gray-700 hover:shadow-xl transition-all bg-gradient-to-br from-gray-50/50 to-white opacity-60">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Gemini</CardTitle>
                        <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                          G
                        </div>
                      </div>
                      <CardDescription className="text-sm">Google&apos;s AI assistant</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Evaluating multi-modal capabilities, integration with Google ecosystem, and reasoning features.
                      </p>
                      <Badge variant="secondary" className="mt-4">
                        Coming Soon
                      </Badge>
                    </CardContent>
                  </Card>

                  {/* NotebookLM */}
                  <Card className="border-l-4 border-l-orange-500 hover:shadow-xl transition-all bg-gradient-to-br from-orange-100/30 to-white opacity-60">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">NotebookLM</CardTitle>
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                          N
                        </div>
                      </div>
                      <CardDescription className="text-sm">AI research assistant</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Analysis of document understanding, source grounding, and knowledge synthesis workflows.
                      </p>
                      <Badge variant="secondary" className="mt-4">
                        Coming Soon
                      </Badge>
                    </CardContent>
                  </Card>

                  {/* N8N */}
                  <Card className="border-l-4 border-l-gray-900 hover:shadow-xl transition-all bg-gradient-to-br from-gray-100/30 to-white opacity-60">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">N8N</CardTitle>
                        <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                          N
                        </div>
                      </div>
                      <CardDescription className="text-sm">Workflow automation platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Studying AI-enhanced automation, node-based builder, and integration ecosystem design.
                      </p>
                      <Badge variant="secondary" className="mt-4">
                        Coming Soon
                      </Badge>
                    </CardContent>
                  </Card>

                  {/* Replit */}
                  <Card className="border-l-4 border-l-orange-700 hover:shadow-xl transition-all bg-gradient-to-br from-orange-50/40 to-white opacity-60">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Replit</CardTitle>
                        <div className="w-10 h-10 bg-orange-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                          R
                        </div>
                      </div>
                      <CardDescription className="text-sm">Collaborative coding platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Examining AI agent integration, collaborative features, and deployment simplicity.
                      </p>
                      <Badge variant="secondary" className="mt-4">
                        Coming Soon
                      </Badge>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    These teardowns represent my continuous learning approach to understanding AI product design
                    patterns, UX decisions, and market positioning. Each analysis informs how I approach product
                    strategy and feature prioritization.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Card className="bg-muted/50">
                <CardContent className="pt-6 text-center space-y-4">
                  <h3 className="text-xl font-semibold">Want to Learn More?</h3>
                  <p className="text-muted-foreground">
                    These case studies represent a fraction of my product work. Let&apos;s discuss how I can help your
                    team.
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
      </div>
    </ShaderBackground>
  )
}

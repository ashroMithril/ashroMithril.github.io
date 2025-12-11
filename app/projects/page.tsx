"use client"

import { Navigation } from "@/components/navigation"
import CellularBackground from "@/components/cellular-background"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Microscope, Building2, Calendar, Briefcase, Bot, Network, Rocket, CreditCard, Cpu, Mail, Layers, Zap, Handshake, Users } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <CellularBackground>
      <div className="min-h-screen relative">
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
        <div className="relative z-10">
          <Navigation />

          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="space-y-12">
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Projects & Experience</h1>
                <p className="text-xl text-muted-foreground font-light">
                  7+ years shipping GenAI-first products across enterprise SaaS platforms
                </p>
              </div>

              {/* Experience Section using Accordion */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 border-b pb-4">
                  <Briefcase className="h-6 w-6 text-orange-500" />
                  <h2 className="text-2xl font-bold">Professional Experience</h2>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">

                  {/* Yellow.ai - Sr. PM */}
                  <AccordionItem value="yellow-sr-pm" className="border rounded-xl bg-white/50 px-4 shadow-sm hover:shadow-md transition-all data-[state=open]:border-orange-500/50 data-[state=open]:bg-orange-50/30">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 text-left pr-4">
                        <div className="space-y-1">
                          <h3 className="text-lg font-bold">Senior Product Manager - GenAI</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Building2 className="h-3.5 w-3.5" />
                            <span>Yellow.ai, Abu Dhabi</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium bg-secondary/50 px-2.5 py-1 rounded-full whitespace-nowrap">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>Apr 2021 - Present</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-6 space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        Leading the transformation from flow-based builders to conversational, prompt-first agent experiences
                        that form the new core of the SaaS platform.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-sm uppercase tracking-wider text-orange-600">Key Achievements</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                              <span className="text-orange-500">•</span>
                              <span>Transformed core platform to prompt-first agent builder</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-orange-500">•</span>
                              <span>Increased deflection rate to 80%+ with Orchestrator LLM</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-orange-500">•</span>
                              <span>Launched 70+ marketplace integrations</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-semibold text-sm uppercase tracking-wider text-orange-600">Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-white">Product Strategy</Badge>
                            <Badge variant="outline" className="bg-white">GenAI</Badge>
                            <Badge variant="outline" className="bg-white">Agent Builder</Badge>
                            <Badge variant="outline" className="bg-white">Integrations</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Yellow Messenger - PM Growth */}
                  <AccordionItem value="yellow-pm-growth" className="border rounded-xl bg-white/50 px-4 shadow-sm hover:shadow-md transition-all data-[state=open]:border-orange-500/50 data-[state=open]:bg-orange-50/30">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 text-left pr-4">
                        <div className="space-y-1">
                          <h3 className="text-lg font-bold">Product Manager - Growth & Integration</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Building2 className="h-3.5 w-3.5" />
                            <span>Yellow Messenger, Bangalore</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium bg-secondary/50 px-2.5 py-1 rounded-full whitespace-nowrap">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>Apr 2020 - Apr 2021</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-6 space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        Achieved 5% conversion from inbound traffic to paying customers through targeted freemium mechanics and trial-to-paid flows.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-sm uppercase tracking-wider text-orange-600">Key Achievements</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                              <span className="text-orange-500">•</span>
                              <span>5% conversion from inbound to paid</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-orange-500">•</span>
                              <span>Implemented automated payment collection</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-semibold text-sm uppercase tracking-wider text-orange-600">Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-white">PLG</Badge>
                            <Badge variant="outline" className="bg-white">Freemium</Badge>
                            <Badge variant="outline" className="bg-white">Growth</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Accenture */}
                  <AccordionItem value="accenture" className="border rounded-xl bg-white/50 px-4 shadow-sm hover:shadow-md transition-all data-[state=open]:border-orange-500/50 data-[state=open]:bg-orange-50/30">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 text-left pr-4">
                        <div className="space-y-1">
                          <h3 className="text-lg font-bold">Business Analyst</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Building2 className="h-3.5 w-3.5" />
                            <span>Accenture Innovation Hub, Bangalore</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium bg-secondary/50 px-2.5 py-1 rounded-full whitespace-nowrap">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>Sep 2018 - Mar 2020</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-6 space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        Delivered advanced technology solutions for 15+ high-value clients using AI and AR/VR.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-sm uppercase tracking-wider text-orange-600">Key Achievements</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                              <span className="text-orange-500">•</span>
                              <span>Delivered solutions for 15+ enterprise clients</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-orange-500">•</span>
                              <span>Worked with AI and AR/VR technologies</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-semibold text-sm uppercase tracking-wider text-orange-600">Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-white">AI Solutions</Badge>
                            <Badge variant="outline" className="bg-white">Enterprise</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>
              </div>

              {/* Detailed Case Studies Accordion */}
              <div className="space-y-8 pt-8">
                <div className="flex items-center gap-3 border-b pb-4">
                  <Microscope className="h-6 w-6 text-orange-500" />
                  <h2 className="text-2xl font-bold">Detailed Case Studies</h2>
                </div>

                {/* ========== SEGMENT 1: AI Agent Builder ========== */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pl-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">AI Agent Builder</h3>
                      <p className="text-sm text-muted-foreground">Core platform capabilities & intelligent automation</p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="w-full space-y-3">

                    {/* Prompt-First Agent Builder */}
                    <AccordionItem value="prompt-first" className="border rounded-xl bg-white/50 px-4 shadow-sm hover:shadow-md transition-all data-[state=open]:border-violet-500/50 data-[state=open]:bg-violet-50/30">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 text-left pr-4">
                          <div className="space-y-1">
                            <h3 className="text-lg font-bold">Prompt-First Agent Builder</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Bot className="h-3.5 w-3.5" />
                              <span>Transforming flow-based automation into conversational AI agents</span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="w-fit bg-violet-100 text-violet-700">GenAI</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-6 space-y-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                              Problem
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Traditional flow-based bot builders required complex, manual logic mapping, making it difficult for non-technical users to create sophisticated agents. The learning curve was steep, and maintenance was time-consuming.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                              Solution
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Conceptualized and launched a 'Prompt-First' interface where users describe the agent's purpose in natural language. The system then auto-generates the necessary flows, intents, and logic using LLMs, while retaining the ability to fine-tune manually.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                              Impact
                            </h4>
                            <p className="text-sm font-medium text-foreground leading-relaxed">
                              Reduced initial bot setup time by 40%. Empowered non-technical domain experts to build agents directly, expanding the user base and increasing platform adoption.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-violet-100">
                          <Badge variant="outline" className="bg-white">GenAI</Badge>
                          <Badge variant="outline" className="bg-white">Product Strategy</Badge>
                          <Badge variant="outline" className="bg-white">UX Design</Badge>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Orchestrator LLM */}
                    <AccordionItem value="orchestrator-llm" className="border rounded-xl bg-white/50 px-4 shadow-sm hover:shadow-md transition-all data-[state=open]:border-violet-500/50 data-[state=open]:bg-violet-50/30">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 text-left pr-4">
                          <div className="space-y-1">
                            <h3 className="text-lg font-bold">Orchestrator LLM</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Cpu className="h-3.5 w-3.5" />
                              <span>Increased deflection rate from 60% to 80%+</span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="w-fit bg-violet-100 text-violet-700">LLM</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-6 space-y-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                              Problem
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Rule-based intent recognition systems struggled with complex, multi-turn user queries, leading to frequent fallbacks to human agents and lower deflection rates.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                              Solution
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Implemented an Orchestrator LLM architecture that dynamically evaluates user intent against available tools and flows. This allows for more fluid, context-aware routing without rigid pre-defined paths.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                              Impact
                            </h4>
                            <p className="text-sm font-medium text-foreground leading-relaxed">
                              Achieved a significant jump in deflection rate from 60% to over 80%. The system can now handle ambiguous queries and context switching with near-human accuracy.
                            </p>
                          </div>
                        </div>
                        <div className="pt-6 border-t border-violet-100">
                          <h4 className="text-sm font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2 mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                            Learnings & Retrospective
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Latency was a major challenge with LLMs. We learned to implement aggressive caching and hybrid routing (using lightweight models for simple queries) to keep response times under acceptable limits. Prompt engineering also proved to be an iterative process that required constant monitoring of production logs.
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-violet-100">
                          <Badge variant="outline" className="bg-white">LLM</Badge>
                          <Badge variant="outline" className="bg-white">Orchestration</Badge>
                          <Badge variant="outline" className="bg-white">Platform</Badge>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Omnichannel Platform */}
                    <AccordionItem value="omnichannel" className="border rounded-xl bg-white/50 px-4 shadow-sm hover:shadow-md transition-all data-[state=open]:border-violet-500/50 data-[state=open]:bg-violet-50/30">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 text-left pr-4">
                          <div className="space-y-1">
                            <h3 className="text-lg font-bold">Omnichannel Platform</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Layers className="h-3.5 w-3.5" />
                              <span>Unified conversation continuity across all channels</span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="w-fit bg-violet-100 text-violet-700">Architecture</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-6 space-y-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                              Problem
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Customer conversations were siloed by channel (email, chat, voice), causing context loss when users switched mediums. Agents had to ask for repeated information, frustrating customers.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                              Solution
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Architected a unified conversation data model that persists state across all channels. A single 'Conversation ID' tracks the user journey, allowing an agent to pick up a voice call exactly where the chat left off.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                              Impact
                            </h4>
                            <p className="text-sm font-medium text-foreground leading-relaxed">
                              Delivered a seamless 'continue-anywhere' experience. Reduced average handle time (AHT) by eliminating the need for context recap and improved customer satisfaction scores (CSAT).
                            </p>
                          </div>
                        </div>
                        <div className="pt-6 border-t border-violet-100">
                          <h4 className="text-sm font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2 mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                            Learnings & Retrospective
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Data consistency across distributed systems was harder than anticipated. We had to implement robust event sourcing to ensure that conversation state was synchronized in real-time. We also learned the importance of designing UI components that are channel-agnostic but can adapt to channel-specific constraints.
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-violet-100">
                          <Badge variant="outline" className="bg-white">Omnichannel</Badge>
                          <Badge variant="outline" className="bg-white">Architecture</Badge>
                          <Badge variant="outline" className="bg-white">Multimodal</Badge>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Email Automation */}
                    <AccordionItem value="email-automation" className="border rounded-xl bg-white/50 px-4 shadow-sm hover:shadow-md transition-all data-[state=open]:border-violet-500/50 data-[state=open]:bg-violet-50/30">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 text-left pr-4">
                          <div className="space-y-1">
                            <h3 className="text-lg font-bold">Email Automation</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Mail className="h-3.5 w-3.5" />
                              <span>80%+ resolution rate within 1 week of launch</span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="w-fit bg-violet-100 text-violet-700">Automation</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-6 space-y-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                              Problem
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Email support was largely manual, with agents spending hours on repetitive queries like order status or refund requests. Response times were slow.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                              Solution
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Deployed an LLM-powered email automation agent that reads incoming emails, queries the knowledge base and backend systems, and drafts or sends responses automatically for high-confidence cases.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                              Impact
                            </h4>
                            <p className="text-sm font-medium text-foreground leading-relaxed">
                              Achieved an 80% resolution rate for standard queries within the first week. Drastically reduced backlog and allowed human agents to focus on complex, sensitive issues.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-violet-100">
                          <Badge variant="outline" className="bg-white">Automation</Badge>
                          <Badge variant="outline" className="bg-white">Email</Badge>
                          <Badge variant="outline" className="bg-white">LLM</Badge>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                  </Accordion>
                </div>

                {/* ========== SEGMENT 2: Integrations & Partnerships ========== */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pl-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                      <Handshake className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Integrations & Partnerships</h3>
                      <p className="text-sm text-muted-foreground">Ecosystem expansion & enterprise connectivity</p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="w-full space-y-3">

                    {/* Agent Assist */}
                    <AccordionItem value="agent-assist" className="border rounded-xl bg-white/50 px-4 shadow-sm hover:shadow-md transition-all data-[state=open]:border-emerald-500/50 data-[state=open]:bg-emerald-50/30">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 text-left pr-4">
                          <div className="space-y-1">
                            <h3 className="text-lg font-bold">Agent Assist Platform</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Zap className="h-3.5 w-3.5" />
                              <span>Real-time AI assistance for support agents across CRMs</span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="w-fit bg-emerald-100 text-emerald-700">AI Assist</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-6 space-y-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              Problem
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Support agents struggled to find the right information quickly across scattered knowledge bases, leading to long hold times and inconsistent answers.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              Solution
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Built a real-time Agent Assist sidebar that integrates with CRMs (Salesforce, Zendesk, ServiceNow). It listens to the conversation (voice or chat) and proactively suggests answers, articles, and next-best actions.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              Impact
                            </h4>
                            <p className="text-sm font-medium text-foreground leading-relaxed">
                              Reduced Average Handle Time (AHT) by 25-40% in pilot deployments. Accelerated onboarding for new agents by providing them with an 'always-on' expert guide.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-emerald-100">
                          <Badge variant="outline" className="bg-white">AI Assist</Badge>
                          <Badge variant="outline" className="bg-white">CRM Integration</Badge>
                          <Badge variant="outline" className="bg-white">Real-time</Badge>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Integrations Marketplace */}
                    <AccordionItem value="integrations" className="border rounded-xl bg-white/50 px-4 shadow-sm hover:shadow-md transition-all data-[state=open]:border-emerald-500/50 data-[state=open]:bg-emerald-50/30">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 text-left pr-4">
                          <div className="space-y-1">
                            <h3 className="text-lg font-bold">Marketplace Scale</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Network className="h-3.5 w-3.5" />
                              <span>Launching 70+ integrations</span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="w-fit bg-emerald-100 text-emerald-700">Integrations</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-6 space-y-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              Problem
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              The platform lacked native connectivity to many popular enterprise tools, forcing customers to build custom middleware or choose competitors with better ecosystems.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              Solution
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Led the strategy and execution of a rapid integration roadmap. Standardized the connector framework to allow internal and external developers to build integrations easily.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              Impact
                            </h4>
                            <p className="text-sm font-medium text-foreground leading-relaxed">
                              Launched over 70 integrations (Salesforce, Zendesk, Shopify, etc.) in a year. This ecosystem play significantly increased platform stickiness and opened up upmarket enterprise opportunities.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-emerald-100">
                          <Badge variant="outline" className="bg-white">Integrations</Badge>
                          <Badge variant="outline" className="bg-white">Marketplace</Badge>
                          <Badge variant="outline" className="bg-white">API</Badge>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Partner Onboarding & Billing */}
                    <AccordionItem value="partner-billing" className="border rounded-xl bg-white/50 px-4 shadow-sm hover:shadow-md transition-all data-[state=open]:border-emerald-500/50 data-[state=open]:bg-emerald-50/30">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 text-left pr-4">
                          <div className="space-y-1">
                            <h3 className="text-lg font-bold">Partner Onboarding & Billing Automation</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CreditCard className="h-3.5 w-3.5" />
                              <span>Streamlining operations for partner scale</span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="w-fit bg-emerald-100 text-emerald-700">Operations</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-6 space-y-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              Problem
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Manual partner onboarding and complex PO-based billing reconciliation were prone to errors and consumed significant operational resources, creating a bottleneck for partnership expansion.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              Solution
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Automated the end-to-end partner onboarding workflow and built a robust PO billing automation system. This ensured accurate invoicing and seamless provisioning of partner accounts.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              Impact
                            </h4>
                            <p className="text-sm font-medium text-foreground leading-relaxed">
                              Drastically reduced onboarding time and billing discrepancies. Enabled the operations team to support a growing partner network without proportional headcount increase.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-emerald-100">
                          <Badge variant="outline" className="bg-white">Automation</Badge>
                          <Badge variant="outline" className="bg-white">Partner Ops</Badge>
                          <Badge variant="outline" className="bg-white">Billing</Badge>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                  </Accordion>
                </div>

                {/* ========== SEGMENT 3: Self-Serve / PLG ========== */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pl-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Self-Serve / PLG</h3>
                      <p className="text-sm text-muted-foreground">Product-led growth & monetization</p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="w-full space-y-3">

                    {/* Self-Serve Platform & PLG */}
                    <AccordionItem value="self-serve-plg" className="border rounded-xl bg-white/50 px-4 shadow-sm hover:shadow-md transition-all data-[state=open]:border-amber-500/50 data-[state=open]:bg-amber-50/30">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 text-left pr-4">
                          <div className="space-y-1">
                            <h3 className="text-lg font-bold">Self-Serve Platform & PLG</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Rocket className="h-3.5 w-3.5" />
                              <span>5% conversion from inbound to paid customers</span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="w-fit bg-amber-100 text-amber-700">Growth</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-6 space-y-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              Problem
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Reliance on a purely sales-led motion limited growth in the SMB segment. Smaller prospects faced high friction and long sales cycles, resulting in missed revenue opportunities.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              Solution
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Launched a comprehensive Self-Serve platform enabling users to sign up, onboard, and purchase subscriptions without sales intervention. Implemented PLG mechanics like freemium tiers and in-product upsells.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              Impact
                            </h4>
                            <p className="text-sm font-medium text-foreground leading-relaxed">
                              Successfully opened a new revenue stream, contributing 5% to the company's total revenue. Reduced customer acquisition cost (CAC) and accelerated adoption in the mid-market segment.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-amber-100">
                          <Badge variant="outline" className="bg-white">PLG</Badge>
                          <Badge variant="outline" className="bg-white">Growth Strategy</Badge>
                          <Badge variant="outline" className="bg-white">Monetization</Badge>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Freemium & Trial Optimization */}
                    <AccordionItem value="freemium" className="border rounded-xl bg-white/50 px-4 shadow-sm hover:shadow-md transition-all data-[state=open]:border-amber-500/50 data-[state=open]:bg-amber-50/30">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 text-left pr-4">
                          <div className="space-y-1">
                            <h3 className="text-lg font-bold">Freemium & Trial Optimization</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Zap className="h-3.5 w-3.5" />
                              <span>Optimized trial-to-paid conversion funnels</span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="w-fit bg-amber-100 text-amber-700">Conversion</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-6 space-y-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              Problem
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Initial freemium offering had low conversion rates due to unclear value proposition and friction in the upgrade path. Users didn't understand what they were missing.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              Solution
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Redesigned the freemium tier with strategic feature gating, clear upgrade prompts at moments of value realization, and optimized onboarding flows focused on time-to-value.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              Impact
                            </h4>
                            <p className="text-sm font-medium text-foreground leading-relaxed">
                              Achieved 5% conversion rate from inbound traffic to paying customers. Built analytics infrastructure to continuously monitor and optimize conversion funnels.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-amber-100">
                          <Badge variant="outline" className="bg-white">Freemium</Badge>
                          <Badge variant="outline" className="bg-white">Conversion</Badge>
                          <Badge variant="outline" className="bg-white">Analytics</Badge>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Payments Automation */}
                    <AccordionItem value="payments-automation" className="border rounded-xl bg-white/50 px-4 shadow-sm hover:shadow-md transition-all data-[state=open]:border-amber-500/50 data-[state=open]:bg-amber-50/30">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 text-left pr-4">
                          <div className="space-y-1">
                            <h3 className="text-lg font-bold">Payments Automation</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CreditCard className="h-3.5 w-3.5" />
                              <span>500+ monthly demo requests driving automated payments</span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="w-fit bg-amber-100 text-amber-700">Revenue</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-6 space-y-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              Problem
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              With 500 demo requests and ~50 direct upgrade requests monthly, manual payment processes created bottlenecks. Tracking paid vs unpaid bots and managing regional pricing was complex.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              Solution
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Built end-to-end payment automation integrating platform subscriptions to Salesforce, backend systems, NetSuite, and Stripe. Maintained manual PO billing for enterprise while automating SMB payments.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              Impact
                            </h4>
                            <p className="text-sm font-medium text-foreground leading-relaxed">
                              Automated payment collection for high-volume transactions. Enabled accurate tracking of paid/unpaid subscriptions and reduced payment friction for SMB and partner segments.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-amber-100">
                          <Badge variant="outline" className="bg-white">Payments</Badge>
                          <Badge variant="outline" className="bg-white">Automation</Badge>
                          <Badge variant="outline" className="bg-white">Revenue Ops</Badge>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                  </Accordion>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </CellularBackground>
  )
}

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Download, Calendar } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container py-20">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              I&apos;m always interested in discussing AI product strategy, consulting opportunities, or potential
              collaborations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Email</CardTitle>
                <CardDescription>Send me a message</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:apoorvakshri@gmail.com" className="text-primary hover:underline">
                  apoorvakshri@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Phone</CardTitle>
                <CardDescription>Call or WhatsApp</CardDescription>
              </CardHeader>
              <CardContent className="space-y-1">
                <p className="text-sm">India: +91 9006742981</p>
                <p className="text-sm">UAE: +971 551424959</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Linkedin className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>LinkedIn</CardTitle>
                <CardDescription>Connect professionally</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.linkedin.com/in/apoorva-shrivastava-21a415a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  /apoorva-shrivastava-21a415a6
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Download className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Resume</CardTitle>
                <CardDescription>Download full CV</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="/resume/apoorva-shrivastava-resume.pdf" download>
                  <Button variant="outline" className="w-full bg-transparent">
                    Download PDF Resume
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Schedule a Call</CardTitle>
                <CardDescription>Book a 30-minute meeting</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://calendly.com/apoorvakshri/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  calendly.com/apoorvakshri/30min
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Linkedin className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>LinkedIn</CardTitle>
                <CardDescription>Connect & get in touch</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.linkedin.com/in/apoorva-shrivastava-21a415a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full bg-transparent">
                    Connect on LinkedIn
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>What I Can Help With</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>AI agent strategy and implementation for enterprise products</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Product-led growth and freemium conversion optimization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Integration and marketplace strategy for SaaS platforms</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Pricing, packaging, and monetization for AI products</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>0→1 product development and go-to-market</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center space-y-4 pt-8">
            <p className="text-muted-foreground">Based in Abu Dhabi, UAE • Open to remote consulting opportunities</p>
          </div>
        </div>
      </div>
    </div>
  )
}

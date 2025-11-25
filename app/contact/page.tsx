import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Download, Calendar } from "lucide-react"
import Image from "next/image"
import { InfiniteGallery } from "@/components/infinite-gallery"

export default function ContactPage() {
  const galleryImages = [
    "/images/IMG_0073.jpg",
    "/images/IMG_0171.jpg",
    "/images/IMG_0265.jpg",
    "/images/IMG_0267.jpg",
    "/images/IMG_1750.jpg",
    "/images/IMG_2032.jpg",
    "/images/IMG_2563.jpg",
    "/images/IMG_2843.jpg",
    "/images/IMG_2892.jpg",
    "/images/IMG_2994.jpg",
    "/images/IMG_3380.jpg",
    "/images/IMG_4027.jpg",
    "/images/IMG_5867.jpg",
    "/images/IMG_6544.jpg",
    "/images/IMG_6572.jpg",
    "/images/IMG_8760.jpg",
    "/images/IMG_9898.jpg",
    "/images/IMG_9963.jpg",
    "/images/sunset-train.jpg",
    "/images/sunset-bulbs.jpg",
    "/images/sunset-beach.jpg",
    "/images/sunset-neighborhood.jpg",
    "/images/sunset-architecture.jpg",
    "/images/sunset-window.jpg",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <Image
                  src="/images/apoorva-contact.jpg"
                  alt="Apoorva Shrivastava"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              I&apos;m always interested in discussing AI product strategy, consulting opportunities, or potential
              collaborations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
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

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Phone</CardTitle>
                <CardDescription>Call or WhatsApp</CardDescription>
              </CardHeader>
              <CardContent className="space-y-1">
                <p className="text-sm">India: +91 9006742981</p>
                <p className="text-sm">UAE: +971 551424959</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
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

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
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

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
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

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
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

          <Card className="bg-muted/50 text-center">
            <CardHeader>
              <CardTitle>What I Can Help With</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground inline-block text-left max-w-md mx-auto">
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

      <div className="mt-20">
        <InfiniteGallery images={galleryImages} />
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Star,
  Download,
  Zap,
  Folder,
  Palette,
  Code2,
  Shield,
  Layers,
  Settings,
  Rocket,
  Terminal,
  Copy,
  CheckCircle,
  Heart,
  Users,
  BookOpen,
  ArrowRight,
  Check,
  X,
} from "lucide-react"
import { useState } from "react"

const features = [
  {
    icon: Folder,
    title: "Professional Structure",
    description: "Clean, scalable folder organization following Next.js best practices and industry standards.",
  },
  {
    icon: Code2,
    title: "TypeScript Ready",
    description:
      "Full TypeScript configuration with strict mode enabled for better code quality and developer experience.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS + shadcn/ui",
    description: "Pre-configured with Tailwind CSS and shadcn/ui components for rapid UI development.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Setup your entire project in under 30 seconds with all dependencies and configurations ready.",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Includes ESLint, Prettier, and other essential tools for maintaining code quality.",
  },
  {
    icon: Layers,
    title: "Modern Stack",
    description: "Latest versions of Next.js 15, React 18, and all modern web development tools.",
  },
  {
    icon: Settings,
    title: "Zero Configuration",
    description: "Everything works out of the box with sensible defaults and best practice configurations.",
  },
  {
    icon: Rocket,
    title: "Deploy Ready",
    description: "Optimized for deployment on Vercel, Netlify, and other modern hosting platforms.",
  },
]

const testimonials = [
  {
    name: "Ahmed Rahman",
    role: "Senior Frontend Developer",
    company: "TechCorp",
    content:
      "ontonim saved me hours of setup time. The folder structure is exactly what I would create manually, but automated perfectly.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Sarah Johnson",
    role: "Full Stack Developer",
    company: "StartupXYZ",
    content: "Best CLI tool I've used for Next.js. Everything just works out of the box with professional standards.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Mohammad Ali",
    role: "Tech Lead",
    company: "DevStudio",
    content: "Our team adopted ontonim for all new projects. Consistent structure across all our applications.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const comparisonData = [
  { feature: "TypeScript Setup", ontonim: true, createNextApp: false, others: false },
  { feature: "Tailwind CSS", ontonim: true, createNextApp: false, others: true },
  { feature: "shadcn/ui Components", ontonim: true, createNextApp: false, others: false },
  { feature: "Professional Structure", ontonim: true, createNextApp: false, others: false },
  { feature: "ESLint + Prettier", ontonim: true, createNextApp: true, others: false },
  { feature: "Production Ready", ontonim: true, createNextApp: false, others: false },
  { feature: "Zero Configuration", ontonim: true, createNextApp: false, others: false },
]

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const installCommand = "npx create-next-base"

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              <Star className="mr-2 h-4 w-4" />
              Open Source CLI Tool
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                create-next-base
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium">Professional Next.js Project Setup CLI</p>

            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Create production-ready Next.js applications with professional folder structure, TypeScript, Tailwind CSS,
              shadcn/ui, and all essential dependencies in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3">
                <Download className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center">
                <Zap className="mr-2 h-4 w-4 text-yellow-400" />
                Lightning Fast Setup
              </div>
              <div className="flex items-center">
                <Star className="mr-2 h-4 w-4 text-yellow-400" />
                Production Ready
              </div>
              <div className="flex items-center">
                <Github className="mr-2 h-4 w-4 text-yellow-400" />
                Open Source
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Watch how <span className="text-blue-400 font-semibold">cerate-next-base</span> creates a complete Next.js project
              in seconds
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gray-800">
              <CardHeader className="bg-gray-900 text-white rounded-t-lg">
                <CardTitle className="flex items-center text-lg">
                  <Terminal className="mr-2 h-5 w-5" />
                  Terminal Demo
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-gray-900 text-green-400 font-mono p-6 rounded-b-lg">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-blue-400">$</span>
                    <span className="ml-2">{installCommand}</span>
                  </div>
                  <div className="text-yellow-400">✨ Creating your Next.js project...</div>
                  <div className="text-green-400">✅ Installing dependencies...</div>
                  <div className="text-green-400">✅ Setting up TypeScript...</div>
                  <div className="text-green-400">✅ Configuring Tailwind CSS...</div>
                  <div className="text-green-400">✅ Adding shadcn/ui components...</div>
                  <div className="text-green-400">🎉 Project created successfully!</div>
                  <div className="text-white mt-4">
                    <div>cd my-app</div>
                    <div>npm run dev</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">create-next-base</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built by developers, for developers. Save hours of setup time and focus on what matters most - building
              amazing applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Started in Seconds</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              One command is all you need to create a professional Next.js application with everything configured.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="bg-gray-900 text-white rounded-t-lg">
                <CardTitle className="flex items-center text-lg">
                  <Terminal className="mr-2 h-5 w-5" />
                  Terminal
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-gray-900 text-green-400 font-mono p-6 rounded-b-lg">
                <div className="flex items-center justify-between">
                  <code className="text-lg">{installCommand}</code>
                  <Button variant="ghost" size="sm" onClick={handleCopy} className="text-white hover:bg-gray-800">
                    {copied ? <CheckCircle className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2">Install CLI</h3>
                <p className="text-gray-600">Run the npx command to install ontonim globally</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2">Create Project</h3>
                <p className="text-gray-600">Choose your project name and configuration options</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2">Start Building</h3>
                <p className="text-gray-600">Your professional Next.js app is ready to go!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Structure Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Folder Structure</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              <span className="font-semibold text-blue-600">ontonim</span> creates a clean, scalable project structure
              following industry best practices.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center justify-between">
                  <span>Project Structure</span>
                  <Badge variant="secondary">Generated</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <pre className="text-sm p-6 overflow-x-auto">
                  {`my-app/
├── app/
│   ├── (auth)
│   ├── (dashboard)
│   ├── (route)
│   └── (api)
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   └── navbar.tsx
├── lib/
│   └── utils.ts
├── hooks/
│   └── use-mobile.tsx
├── public/
├── tailwind.config.ts
├── next.config.js
├── package.json
└── tsconfig.json`}
                </pre>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center justify-between">
                  <span>Included Dependencies</span>
                  <Badge variant="secondary">Pre-installed</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Core Framework</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Next.js 15</Badge>
                      <Badge variant="outline">React 18</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Styling</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Tailwind CSS</Badge>
                      <Badge variant="outline">shadcn/ui</Badge>
                      <Badge variant="outline">Lucide Icons</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Development Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">ESLint</Badge>
                      <Badge variant="outline">Prettier</Badge>
                      <Badge variant="outline">Husky</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Compare</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See why <span className="font-semibold text-blue-600">create-next-base</span> is the best choice for professional
              Next.js development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Feature</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-600">create-next-base</th>
                      <th className="px-6 py-4 text-center font-semibold">create-next-app</th>
                      <th className="px-6 py-4 text-center font-semibold">Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-6 py-4 font-medium">{row.feature}</td>
                        <td className="px-6 py-4 text-center">
                          {row.ontonim ? (
                            <Check className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.createNextApp ? (
                            <Check className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.others ? (
                            <Check className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Documentation Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Documentation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know to get the most out of{" "}
              <span className="font-semibold text-blue-600">ontonim</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Quick Start</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  Get up and running in minutes with our step-by-step guide
                </p>
                <Button variant="outline" className="w-full">
                  Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">Customize ontonim to fit your development workflow</p>
                <Button variant="outline" className="w-full">
                  View Config <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Code2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>API Reference</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">Complete API documentation for advanced usage</p>
                <Button variant="outline" className="w-full">
                  View API <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">Join our community for support and discussions</p>
                <Button variant="outline" className="w-full">
                  Join Discord <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

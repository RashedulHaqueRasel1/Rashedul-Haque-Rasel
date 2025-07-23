"use client"

import { useRouter } from "next/navigation"
import Navbar from "@/components/shared/Navbar/Navbar"
import ProjectsGrid from "@/components/ui/projects-grid"
import ScrollToTop from "@/components/ui/scroll-to-top"
import ThemeBackground from "@/components/ui/theme-background"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ProjectsPage() {
  const router = useRouter()

  return (
    <ThemeBackground>
      <Navbar />
      <main className="relative z-10 min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">

          {/* Back Button */}
          <div className="mb-8">
            <Button
              variant="outline"
              className="group bg-transparent text-white border-white hover:bg-white hover:text-gray-900 transition-colors hover:cursor-pointer"
              onClick={() => router.back()}
            >
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Back
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-4">All Projects</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore my complete portfolio of web applications, full-stack projects, and creative solutions.
            </p>
          </div>
          <ProjectsGrid showAll={true} />
        </div>
      </main>
      <ScrollToTop />
    </ThemeBackground>
  )
}

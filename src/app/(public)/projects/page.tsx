// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import ScrollToTop from "@/components/scroll-to-top"
// import ThemeBackground from "@/components/theme-background"
// import ProjectsGrid from "@/components/projects-grid"
import Footer from "@/components/shared/Footer/Footer"
import Navbar from "@/components/shared/Navbar/Navbar"
import ProjectsGrid from "@/components/ui/projects-grid"
import ScrollToTop from "@/components/ui/scroll-to-top"
import ThemeBackground from "@/components/ui/theme-background"

export default function ProjectsPage() {
  return (
    <ThemeBackground>
      <Navbar />
      <main className="relative z-10 min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">All Projects</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore my complete portfolio of web applications, full-stack projects, and creative solutions.
            </p>
          </div>
          <ProjectsGrid showAll={true} />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeBackground>
  )
}

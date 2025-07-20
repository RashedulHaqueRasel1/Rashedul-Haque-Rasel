
import Navbar from "@/components/shared/Navbar/Navbar"
import ScrollToTop from "@/components/ui/scroll-to-top"
import ThemeBackground from "@/components/ui/theme-background"
import BlogsGrid from "@/components/ui/blogs-grid"

export default function BlogsPage() {
  return (
    <ThemeBackground>
      <Navbar />
      <main className="relative z-10 min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-4">All Articles</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Read my thoughts on web development, programming tips, and technology insights.
            </p>
          </div>
          <BlogsGrid showAll={true} />
        </div>
      </main>
      <ScrollToTop />
    </ThemeBackground>
  )
}

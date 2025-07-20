 
import { getBlogBySlug, getAllBlogs, getBlogs } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ThemeBackground from "@/components/ui/theme-background"
import Navbar from "@/components/shared/Navbar/Navbar"
import Footer from "@/components/shared/Footer/Footer"
import ScrollToTop from "@/components/ui/scroll-to-top"
import RecentBlogs from "@/components/ui/recent-blogs"

export async function generateStaticParams() {
  const blogs = getAllBlogs()
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug)
  const recentBlogs = getBlogs()
    .filter((b) => b.slug !== params.slug)
    .slice(0, 4)

  if (!blog) {
    notFound()
  }

  return (
    <ThemeBackground>
      <Navbar />
      <main className="relative z-10 min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <Link href="/blogs">
            <Button variant="ghost" className="mb-8 text-gray-300 hover:text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Button>
          </Link>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/10">
                <div className="aspect-video relative">
                  <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-full object-cover" />
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {blog.readTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      {blog.category}
                    </div>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{blog.title}</h1>

                  <div className="prose prose-lg prose-invert max-w-none">
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">{blog.excerpt}</p>

                    <div className="space-y-6 text-gray-300 leading-relaxed">
                      <p>
                        This is where the full blog content would go. In a real application, you would store the full
                        content in your data source and render it here. The content could be in Markdown format and
                        rendered using a library like react-markdown or stored as HTML.
                      </p>

                      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Key Points</h2>

                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Understanding the fundamentals is crucial for long-term success</li>
                        <li>Practice regularly to improve your skills</li>
                        <li>Stay updated with the latest trends and technologies</li>
                        <li>Build projects to apply what you learn</li>
                      </ul>

                      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Conclusion</h2>

                      <p>
                        This article provides valuable insights into the topic. Continue learning and applying these
                        concepts in your projects. Feel free to reach out if you have any questions or would like to
                        discuss further.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <RecentBlogs blogs={recentBlogs} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeBackground>
  )
}

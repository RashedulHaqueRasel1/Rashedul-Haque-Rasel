"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Tag } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { getBlogs } from "@/lib/blog-data"

const categories = ["All", "JavaScript", "React", "Next.js", "Tips", "Career"]

interface BlogsGridProps {
  showAll: boolean
}

export default function BlogsGrid({ showAll }: BlogsGridProps) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const allBlogs = getBlogs()
  const blogs = showAll ? allBlogs : allBlogs.slice(0, 3)

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div>
      {showAll && (
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog, index) => (
          <motion.article
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group border border-white/10 hover:border-white/20"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={blog.image || "/placeholder.svg"}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {blog.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blog.readTime}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {blog.title}
              </h3>

              <p className="text-gray-300 mb-4">{blog.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-purple-400">
                  <Tag className="w-4 h-4" />
                  {blog.category}
                </div>

                <Link href={`/blogs/${blog.slug}`}>
                  <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 hover:bg-white/10">
                    Read More
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {blog.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/10 text-gray-200 rounded text-xs border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

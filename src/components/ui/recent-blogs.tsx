"use client"

import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import type { Blog } from "@/lib/blog-data"

interface RecentBlogsProps {
  blogs: Blog[]
}

export default function RecentBlogs({ blogs }: RecentBlogsProps) {
  return (
    <div className="sticky top-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
      >
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          Recent Articles
        </h3>

        <div className="space-y-4">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blogs/${blog.slug}`}>
                <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                  <div className="flex-shrink-0">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium text-sm leading-tight mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                      {blog.title}
                    </h4>

                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {blog.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {blog.readTime}
                      </div>
                    </div>

                    <span className="inline-block px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30">
                      {blog.category}
                    </span>
                  </div>

                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors flex-shrink-0 mt-2" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-white/10">
          <Link href="/blogs">
            <div className="flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

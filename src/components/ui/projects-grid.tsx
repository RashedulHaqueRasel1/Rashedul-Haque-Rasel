"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { getProjects } from "../../lib/project-data"

const filterOptions = ["All", "Fullstack", "Frontend", "API", "UI/UX"]

interface ProjectsGridProps {
  showAll: boolean
}

export default function ProjectsGrid({ showAll }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState("All")
  const allProjects = getProjects()
  const projects = showAll ? allProjects : allProjects.slice(0, 3)

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div>
      {showAll && (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterOptions.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              {filter}
            </Button>
          ))}
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group border border-white/10 hover:border-white/20"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                <Button size="sm" variant="secondary">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button size="sm" variant="secondary">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm border border-purple-500/30">
                  {project.category}
                </span>
              </div>

              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/10 text-gray-200 rounded text-sm border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

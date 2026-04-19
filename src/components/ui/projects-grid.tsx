"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { getProjects } from "../../lib/project-data";
import Image from "next/image";
import Link from "next/link";
import { generateSlug } from "@/lib/seo-utils";

const filterOptions = ["All", "Fullstack", "Frontend"];

interface ProjectsGridProps {
  showAll: boolean;
}

export default function ProjectsGrid({ showAll }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const allProjects = getProjects();
  const projects = showAll ? allProjects : allProjects.slice(0, 6);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div>
      {showAll && (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterOptions.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "bg-purple-600 hover:bg-purple-700"
                  : ""
              }
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
            className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group border border-white/10 hover:border-white/20 flex flex-col"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`Screenshot of ${project.title} project`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center space-y-3 p-4">
                <Link
                  href={`/projects/${generateSlug(project.title)}`}
                  className="w-full max-w-[200px]"
                >
                  <Button variant="default" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    View Details
                  </Button>
                </Link>
                <div className="flex space-x-3 w-full max-w-[200px] justify-between">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-1.5 bg-white/20 text-white rounded hover:bg-white/40 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-1.5" />
                      Live App
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-1.5 bg-white/20 text-white rounded hover:bg-white/40 transition-colors text-sm"
                    >
                      <Github className="w-4 h-4 mr-1.5" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-3">
                <Link href={`/projects/${generateSlug(project.title)}`} className="group-hover:text-purple-300 transition-colors">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </Link>
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
  );
}

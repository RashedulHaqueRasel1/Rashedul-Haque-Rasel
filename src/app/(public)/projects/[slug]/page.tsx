import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjects } from "@/lib/project-data";
import { generateSlug, generateProjectSchema } from "@/lib/seo-utils";
import ThemeBackground from "@/components/ui/theme-background";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: generateSlug(project.title),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projects = getProjects();
  const project = projects.find((p) => generateSlug(p.title) === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Projects`,
    description: project.description,
    keywords: [...project.technologies, "Project", "Portfolio", "Rashedul Haque Rasel"],
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projects = getProjects();
  const project = projects.find((p) => generateSlug(p.title) === slug);

  if (!project) return notFound();

  return (
    <ThemeBackground>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateProjectSchema(project)) }}
      />
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/projects">
            <Button
              variant="outline"
              className="mb-8 group bg-transparent text-white border-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Button>
          </Link>

          <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="relative aspect-video w-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`Screenshot of ${project.title}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {project.title}
                  </h1>
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                    {project.category}
                  </span>
                </div>
                
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="text-gray-900">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <div className="prose prose-invert max-w-none mb-12">
                <h2 className="text-xl font-semibold text-gray-200 mb-4">About this project</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-200 mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 text-gray-200 rounded-lg border border-white/10 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeBackground>
  );
}

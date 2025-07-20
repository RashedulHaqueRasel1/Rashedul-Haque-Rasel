export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  liveUrl?: string
  githubUrl?: string
}

export function getProjects(): Project[] {
  return [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "Fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      category: "Fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application that displays current weather conditions and forecasts using external APIs with beautiful visualizations.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Chart.js", "OpenWeather API", "TailwindCSS"],
      category: "Frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Blog CMS",
      description:
        "A content management system for bloggers with markdown support, SEO optimization, and social media integration.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "MDX", "Supabase", "Vercel"],
      category: "Fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A modern portfolio website with smooth animations, dark mode support, and responsive design showcasing projects and skills.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Framer Motion", "TailwindCSS"],
      category: "Frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 6,
      title: "REST API Service",
      description:
        "A robust RESTful API service with authentication, rate limiting, and comprehensive documentation for a social media platform.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      category: "API",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 7,
      title: "Mobile App UI",
      description:
        "Modern mobile application UI design with intuitive user experience, created using Figma with a focus on accessibility.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Figma", "Adobe XD", "Principle"],
      category: "UI/UX",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 8,
      title: "Real-time Chat App",
      description:
        "A real-time messaging application with Socket.io, featuring group chats, file sharing, and emoji reactions.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "Fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ]
}

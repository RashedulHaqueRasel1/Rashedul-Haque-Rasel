export interface Blog {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  readTime: string
  category: string
  tags: string[]
  slug: string
}

export function getBlogs(): Blog[] {
  return [
    {
      id: 1,
      title: "Getting Started with Next.js 15: New Features and Improvements",
      excerpt:
        "Explore the latest features in Next.js 15 including improved performance, new APIs, and enhanced developer experience.",
      content: "Full blog content would go here...",
      image: "/placeholder.svg?height=300&width=400",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Next.js",
      tags: ["Next.js", "React", "Web Development", "JavaScript"],
      slug: "getting-started-nextjs-15",
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt:
        "Learn best practices for creating robust and scalable REST APIs using Node.js, Express, and modern development patterns.",
      content: "Full blog content would go here...",
      image: "/placeholder.svg?height=300&width=400",
      date: "Dec 10, 2024",
      readTime: "8 min read",
      category: "JavaScript",
      tags: ["Node.js", "Express", "API", "Backend"],
      slug: "building-scalable-apis-nodejs",
    },
    {
      id: 3,
      title: "React Performance Optimization Techniques",
      excerpt:
        "Discover advanced techniques to optimize your React applications for better performance and user experience.",
      content: "Full blog content would go here...",
      image: "/placeholder.svg?height=300&width=400",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "React",
      tags: ["React", "Performance", "Optimization", "JavaScript"],
      slug: "react-performance-optimization",
    },
    {
      id: 4,
      title: "My Journey as a Self-Taught Developer",
      excerpt:
        "Sharing my personal experience and lessons learned while transitioning into web development as a self-taught programmer.",
      content: "Full blog content would go here...",
      image: "/placeholder.svg?height=300&width=400",
      date: "Nov 28, 2024",
      readTime: "4 min read",
      category: "Career",
      tags: ["Career", "Learning", "Self-taught", "Motivation"],
      slug: "journey-self-taught-developer",
    },
    {
      id: 5,
      title: "Essential VS Code Extensions for Web Developers",
      excerpt: "A curated list of must-have VS Code extensions that will boost your productivity as a web developer.",
      content: "Full blog content would go here...",
      image: "/placeholder.svg?height=300&width=400",
      date: "Nov 20, 2024",
      readTime: "3 min read",
      category: "Tips",
      tags: ["VS Code", "Extensions", "Productivity", "Tools"],
      slug: "essential-vscode-extensions",
    },
    {
      id: 6,
      title: "Understanding MongoDB Aggregation Pipeline",
      excerpt:
        "Deep dive into MongoDB's aggregation framework and learn how to perform complex data operations efficiently.",
      content: "Full blog content would go here...",
      image: "/placeholder.svg?height=300&width=400",
      date: "Nov 15, 2024",
      readTime: "7 min read",
      category: "JavaScript",
      tags: ["MongoDB", "Database", "Aggregation", "Backend"],
      slug: "mongodb-aggregation-pipeline",
    },
  ]
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return getBlogs().find((blog) => blog.slug === slug)
}

export function getAllBlogs(): Blog[] {
  return getBlogs()
}

import { MetadataRoute } from "next";
import { getProjects } from "@/lib/project-data";
import { generateSlug } from "@/lib/seo-utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rashedul-haque-rasel.vercel.app";
  const projects = getProjects();

  // Project URLs
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${generateSlug(project.title)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectUrls,
  ];
}

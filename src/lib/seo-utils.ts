export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Person JSON-LD Schema
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rashedul Haque Rasel",
    url: "https://rashedul-haque-rasel.vercel.app",
    jobTitle: "Full Stack Developer",
    worksFor: [
      {
        "@type": "Organization",
        name: "ScaleUp IT Company",
      },
      {
        "@type": "Organization",
        name: "ScaleUp Ads Agency",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Bangladesh",
    },
    sameAs: [
      "https://github.com/RashedulHaqueRasel1",
      // Add other social media links like LinkedIn or Twitter here
    ],
    knowsAbout: [
      "MERN Stack",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Web Development",
    ],
  };
}

// SoftwareApplication / Project JSON-LD Schema
export function generateProjectSchema(project: any) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    applicationCategory: "WebApplication",
    about: project.description,
    url: project.liveUrl || `https://rashedul-haque-rasel.vercel.app/projects/${generateSlug(project.title)}`,
    author: {
      "@type": "Person",
      name: "Rashedul Haque Rasel",
    },
    requirements: project.technologies.join(", "),
  };
}

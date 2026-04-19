import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://rashedul-haque-rasel.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/dashboard/", 
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

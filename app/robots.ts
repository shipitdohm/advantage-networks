import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/shop",
    },
    sitemap: "https://www.advantage-net.com/sitemap.xml",
  };
}

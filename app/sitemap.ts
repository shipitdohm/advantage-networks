import type { MetadataRoute } from "next";

const ROUTES = ["", "/channels", "/consulting", "/events", "/about", "/contact", "/imprint", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.advantage-net.com";
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${base}${route}`,
    lastModified,
  }));
}

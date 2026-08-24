import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { site } from "@/content/site";

const routes = ["", "/services", ...services.map((service) => `/services/${service.slug}`), "/about", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

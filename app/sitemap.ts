import type { MetadataRoute } from "next";
import { learningLogs } from "@/data/learning";
import { projects } from "@/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const now = new Date();

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.85 },
  { path: "/learning", priority: 0.9 },
  { path: "/roadmap", priority: 0.75 },
  { path: "/projects", priority: 0.95 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));

  const learningPages = learningLogs.map((log) => ({
    url: `${siteUrl}/learning/${log.slug}`,
    lastModified: new Date(log.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectPages = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(project.dateCompleted || project.dateStarted || now),
    changeFrequency: "monthly" as const,
    priority: 0.82,
  }));

  return [...staticPages, ...learningPages, ...projectPages];
}

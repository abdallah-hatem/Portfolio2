import type { MetadataRoute } from "next";
import { getAbsoluteUrl } from "./site";
import { workProjects } from "./work/work-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: getAbsoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: getAbsoluteUrl("/work"), changeFrequency: "monthly", priority: 0.8 },
    ...workProjects.map((project) => ({
      url: getAbsoluteUrl(`/work/${project.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}

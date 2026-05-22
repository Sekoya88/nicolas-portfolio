import generated from "./projects.generated.json";
import meta from "./project-images.json";
import type { Project } from "./portfolio.types";

type ProjectMeta = {
  image: string;
  category: string;
  tools: string;
};

const metaMap = meta as Record<string, ProjectMeta>;

export function getProjects(): Project[] {
  return (generated.projects as Project[]).map((p) => {
    const m = metaMap[p.name];
    if (!m) return p;
    return {
      ...p,
      image: m.image,
      category: m.category,
      tools: m.tools,
    };
  });
}

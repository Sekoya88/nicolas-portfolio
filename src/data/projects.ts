import generated from "./projects.generated.json";
import meta from "./project-images.json";
import type { Locale, Project } from "./portfolio.types";

type ProjectMeta = {
  image: string;
  category: { fr: string; en: string };
  tools: string;
};

const metaMap = meta as Record<string, ProjectMeta>;

function enrich(projects: Project[], locale: Locale): Project[] {
  return projects.map((p) => {
    const m = metaMap[p.name];
    if (!m) return p;
    return {
      ...p,
      image: m.image,
      category: m.category[locale],
      tools: m.tools,
    };
  });
}

export function getProjects(locale: Locale): Project[] {
  return enrich(generated[locale] as Project[], locale);
}

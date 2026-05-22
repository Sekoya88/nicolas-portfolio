import type { PortfolioContent } from "./portfolio.types";
import { portfolio } from "./portfolio";
import { getProjects } from "./projects";

export function getPortfolioContent(): PortfolioContent {
  return {
    ...portfolio,
    work: { ...portfolio.work, projects: getProjects() },
  };
}

export type { PortfolioContent, Project, Job } from "./portfolio.types";

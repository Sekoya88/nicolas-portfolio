import type { Locale, PortfolioContent } from "./portfolio.types";
import { portfolioEn } from "./portfolio.en";
import { portfolioFr } from "./portfolio.fr";
import { getProjects } from "./projects";

const contentByLocale: Record<Locale, PortfolioContent> = {
  fr: portfolioFr,
  en: portfolioEn,
};

export function getPortfolioContent(locale: Locale): PortfolioContent {
  const base = contentByLocale[locale];
  return {
    ...base,
    work: { ...base.work, projects: getProjects(locale) },
  };
}

export type { Locale, PortfolioContent, Project, Job } from "./portfolio.types";

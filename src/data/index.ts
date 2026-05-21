import type { Locale, PortfolioContent } from "./portfolio.types";
import { portfolioEn } from "./portfolio.en";
import { portfolioFr } from "./portfolio.fr";

const contentByLocale: Record<Locale, PortfolioContent> = {
  fr: portfolioFr,
  en: portfolioEn,
};

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return contentByLocale[locale];
}

export type { Locale, PortfolioContent, Project, Job } from "./portfolio.types";

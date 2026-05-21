export type Locale = "fr" | "en";

export interface Project {
  name: string;
  category: string;
  tools: string;
  href: string;
  image?: string;
}

export interface Job {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface PortfolioContent {
  meta: { title: string; description: string };
  landing: {
    greeting: string;
    name: string;
    nameLine2?: string;
    roles: [string, string];
    tagline: string;
  };
  nav: {
    logo: string;
    email: string;
    sections: { id: string; label: string }[];
  };
  about: { title: string; body: string };
  whatIDo: {
    titleLine1: { first: string; rest: string };
    titleLine2: { first: string; rest: string };
    pillars: {
      id: "agentic" | "ml";
      title: string;
      descriptionLabel: string;
      description: string;
      skillsLabel: string;
      skills: string[];
    }[];
  };
  work: { title: string; titleHighlight: string; projects: Project[] };
  career: { title: string; titleSpan: string; titleBreak: string; jobs: Job[] };
  contact: {
    sectionTitle: string;
    emailLabel: string;
    phoneLabel: string;
    socialLabel: string;
    email: string;
    phone?: string;
    social: { id: string; label: string; url: string }[];
    footerLine1: string;
    footerName: string;
    footerCreditLabel: string;
    footerCreditUrl: string;
    footerCreditName: string;
    copyrightYear: string;
  };
  loading: {
    logo: string;
    marquee: string[];
    loadingLabel: string;
    welcome: string;
  };
}

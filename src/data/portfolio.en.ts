import type { PortfolioContent } from "./portfolio.types";
import projects from "./projects.generated.json";

export const portfolioEn: PortfolioContent = {
  meta: {
    title: "Nicolas Edmond — AI/ML · Agentic Systems",
    description:
      "Portfolio of Nicolas Edmond: ML engineering, agents, RAG, MLOps, and agentic systems.",
  },
  landing: {
    greeting: "Hello! I'm",
    name: "NICOLAS",
    nameLine2: "EDMOND",
    roles: ["Agentic Engineer", "AI/ML"],
    tagline: "Systems",
  },
  nav: {
    logo: "NE",
    email: "contact@nicolasedmond.dev",
    sections: [
      { id: "#about", label: "ABOUT" },
      { id: "#work", label: "WORK" },
      { id: "#contact", label: "CONTACT" },
    ],
  },
  about: {
    title: "About Me",
    body: "AI/ML engineer focused on agentic systems: agent orchestration, MCP tools, RAG pipelines, and model evaluation. I build products where the LLM is a dependable layer — with observability, guardrails, and production deployment. Full-stack and MLOps background from research to shipped features.",
  },
  whatIDo: {
    titleLine1: { first: "W", rest: "HAT" },
    titleLine2: { first: "I", rest: " DO" },
    pillars: [
      {
        id: "agentic",
        title: "AGENTIC",
        descriptionLabel: "Description",
        description:
          "Agent architectures, tool calling, durable workflows, and MCP integrations to automate complex tasks with human oversight.",
        skillsLabel: "Skillset & tools",
        skills: [
          "LangChain",
          "OpenAI SDK",
          "MCP",
          "RAG",
          "Evals",
          "TypeScript",
          "Python",
          "FastAPI",
        ],
      },
      {
        id: "ml",
        title: "ML / MLOPS",
        descriptionLabel: "Description",
        description:
          "Fine-tuning, serving, feature pipelines, and monitoring — from notebooks to scalable cloud or on-prem deployment.",
        skillsLabel: "Skillset & tools",
        skills: [
          "PyTorch",
          "HuggingFace",
          "MLflow",
          "Docker",
          "Kubernetes",
          "PostgreSQL",
          "Ray",
          "Weights & Biases",
        ],
      },
    ],
  },
  work: {
    title: "My",
    titleHighlight: "Work",
    projects: projects.en,
  },
  career: {
    title: "My career",
    titleSpan: "&",
    titleBreak: "experience",
    jobs: [
      {
        role: "AI/ML Engineer — Agentic Systems",
        company: "Independent / R&D",
        period: "2024 — Present",
        description:
          "Multi-tool agents, RAG pipelines, and evaluation harnesses for scientific and product applications.",
      },
      {
        role: "Senior Software Engineer",
        company: "Platform & product",
        period: "2020 — 2024",
        description:
          "Full-stack architecture, typed APIs, CI/CD, and production ML service integration.",
      },
      {
        role: "Software Engineer",
        company: "Startup / consulting",
        period: "2017 — 2020",
        description:
          "Web development, data pipelines, and early model deployments in client environments.",
      },
    ],
  },
  contact: {
    sectionTitle: "Contact",
    emailLabel: "Email",
    phoneLabel: "Phone",
    socialLabel: "Social",
    email: "contact@nicolasedmond.dev",
    social: [
      {
        id: "github",
        label: "Github",
        url: "https://github.com/Sekoya88",
      },
      {
        id: "linkedin",
        label: "Linkedin",
        url: "https://www.linkedin.com/in/nicolasedmond",
      },
    ],
    footerLine1: "Designed and Developed",
    footerName: "Nicolas Edmond",
    footerCreditLabel: "Inspired by",
    footerCreditUrl: "https://github.com/MoncyDev/Portfolio-Website",
    footerCreditName: "Moncy Yohannan",
    copyrightYear: "2026",
  },
  loading: {
    logo: "NE",
    marquee: [
      " Agentic Systems ",
      " AI/ML Engineer ",
      " Agentic Systems ",
      " AI/ML Engineer ",
    ],
    loadingLabel: "Loading",
    welcome: "Welcome",
  },
};

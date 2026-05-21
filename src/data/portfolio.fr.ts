import type { PortfolioContent } from "./portfolio.types";
import projects from "./projects.generated.json";

export const portfolioFr: PortfolioContent = {
  meta: {
    title: "Nicolas Edmond — AI/ML · Agentic Systems",
    description:
      "Portfolio de Nicolas Edmond : ingénierie ML, agents, RAG, MLOps et systèmes agentiques.",
  },
  landing: {
    greeting: "Bonjour, je suis",
    name: "NICOLAS",
    nameLine2: "EDMOND",
    roles: ["Ingénieur Agentic", "AI/ML"],
    tagline: "Systems",
  },
  nav: {
    logo: "NE",
    email: "contact@nicolasedmond.dev",
    sections: [
      { id: "#about", label: "À PROPOS" },
      { id: "#work", label: "PROJETS" },
      { id: "#contact", label: "CONTACT" },
    ],
  },
  about: {
    title: "À propos",
    body: "Ingénieur AI/ML orienté systèmes agentiques : orchestration d'agents, outils MCP, pipelines RAG et évaluation de modèles. Je conçois des produits où le LLM est une brique fiable — observabilité, garde-fous et déploiement inclus. Expérience full-stack et MLOps pour livrer de la recherche à la production.",
  },
  whatIDo: {
    titleLine1: { first: "CE", rest: " QUE" },
    titleLine2: { first: "JE", rest: " FAIS" },
    pillars: [
      {
        id: "agentic",
        title: "AGENTIC",
        descriptionLabel: "Description",
        description:
          "Architecture d'agents, tool calling, workflows durables et intégrations MCP pour automatiser des tâches complexes avec supervision humaine.",
        skillsLabel: "Compétences & outils",
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
          "Fine-tuning, serving, feature pipelines et monitoring — du notebook au déploiement scalable sur cloud ou on-prem.",
        skillsLabel: "Compétences & outils",
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
    title: "Mes",
    titleHighlight: "projets",
    projects: projects.fr,
  },
  career: {
    title: "Parcours",
    titleSpan: "&",
    titleBreak: "expérience",
    jobs: [
      {
        role: "AI/ML Engineer — Agentic Systems",
        company: "Indépendant / R&D",
        period: "2024 — Auj.",
        description:
          "Conception d'agents multi-outils, pipelines RAG et harness d'évaluation pour des applications scientifiques et produit.",
      },
      {
        role: "Senior Software Engineer",
        company: "Plateforme & produit",
        period: "2020 — 2024",
        description:
          "Architecture full-stack, APIs typées, CI/CD et intégration de services ML en production.",
      },
      {
        role: "Ingénieur logiciel",
        company: "Startup / conseil",
        period: "2017 — 2020",
        description:
          "Développement web, data pipelines et premiers déploiements de modèles en environnement client.",
      },
    ],
  },
  contact: {
    sectionTitle: "Contact",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
    socialLabel: "Réseaux",
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
    footerLine1: "Conçu et développé",
    footerName: "Nicolas Edmond",
    footerCreditLabel: "Inspiré par",
    footerCreditUrl: "https://github.com/MoncyDev/Portfolio-Website",
    footerCreditName: "Moncy Yohannan",
    copyrightYear: "2026",
  },
  loading: {
    logo: "NE",
    marquee: [
      " Ingénieur Agentic ",
      " AI/ML ",
      " Ingénieur Agentic ",
      " AI/ML ",
    ],
    loadingLabel: "Chargement",
    welcome: "Bienvenue",
  },
};

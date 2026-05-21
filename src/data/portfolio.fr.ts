import type { PortfolioContent } from "./portfolio.types";

export const portfolioFr: PortfolioContent = {
  meta: {
    title: "Nicolas Edmond — Ingénieur ML / IA",
    description:
      "Portfolio de Nicolas Edmond — systèmes agentiques, RAG hybride et pipelines ML en production. Bordeaux, France.",
  },
  landing: {
    greeting: "Bonjour, je suis",
    name: "NICOLAS",
    nameLine2: "EDMOND",
    roles: ["Ingénieur ML / IA", "Systèmes agentiques"],
    tagline: "Bordeaux",
  },
  nav: {
    logo: "NE",
    email: "nicolasedmond8@gmail.com",
    sections: [
      { id: "#about", label: "À PROPOS" },
      { id: "#work", label: "PROJETS" },
      { id: "#contact", label: "CONTACT" },
    ],
  },
  about: {
    title: "À propos",
    body: "Ingénieur IA spécialisé dans l'architecture de systèmes agentiques robustes et prêts pour la production. Je conçois des workflows multi-agents, des pipelines RAG hybrides et des backends haute performance, en restant à la pointe de la recherche IA pour résoudre des problèmes complexes. Forgé par l'endurance sportive, je privilégie la pureté architecturale, la fiabilité système et la latence minimale des infrastructures LLM.",
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
          "Workflows multi-agents déterministes (LangGraph), tool calling, RAG hybride avec RRF et orchestration cloud (AWS Lambda, GCP Vertex AI) pour documents juridiques et pipelines décisionnels.",
        skillsLabel: "Compétences & outils",
        skills: [
          "LangGraph",
          "LangChain",
          "Vertex AI",
          "AWS Lambda",
          "Redis",
          "pgvector",
          "FastAPI",
          "Docker",
        ],
      },
      {
        id: "ml",
        title: "ML / DATA",
        descriptionLabel: "Description",
        description:
          "De la prévision séries temporelles et ETL à grande échelle au fine-tuning VLM (QLoRA, DPO) et ensembles ML — du notebook à la prod monitorée, avec clean architecture et évaluation rigoureuse.",
        skillsLabel: "Compétences & outils",
        skills: [
          "PyTorch",
          "Hugging Face",
          "Unsloth",
          "scikit-learn",
          "PostgreSQL",
          "XGBoost",
          "Pandas",
          "MLflow",
        ],
      },
    ],
  },
  work: {
    title: "Mes",
    titleHighlight: "projets",
    projects: [],
  },
  cv: {
    href: "/CV-Nicolas-Edmond.pdf",
    label: "Télécharger le CV",
    fileName: "CV-Nicolas-Edmond.pdf",
  },
  career: {
    title: "Parcours",
    titleSpan: "&",
    titleBreak: "expérience",
    experienceTitle: "Expérience professionnelle",
    educationTitle: "Formation",
    experience: [
      {
        role: "Co-CTO — Ingénieur IA & Agentic",
        company: "Formalis.IA · Bordeaux",
        period: "Sep 2025 — Auj.",
        description:
          "Pipeline LangGraph + Vertex AI (Classifier, Detector, Mapper, Validator) pour automatiser des PDF juridiques. Orchestrateur AWS Lambda (AWS ↔ GCP), observabilité DynamoDB, extraction S3 parallèle, soumissions API INPI/RNE — remplacement des processus manuels.",
      },
      {
        role: "Data Engineer",
        company: "RTE · Lille",
        period: "Sep 2022 — Sep 2025",
        description:
          "FIDEL (Shiny/R) : prévisions vent ARIMA/SARIMA + ML pour 300+ parcs (+15 % équilibrage réseau). ETL PostgreSQL/Oracle à grande échelle — 200+ h/an de traitement manuel supprimées.",
      },
    ],
    education: [
      {
        role: "Master Spécialisé Big Data",
        company: "GEM & Ensimag — Grenoble",
        period: "2025 — 2026",
        description:
          "ML, deep learning, traitement de données à grande échelle, connaissance client & marketing.",
      },
      {
        role: "Ingénieur (Électrique & Énergie)",
        company: "ESME — Lille",
        period: "2022 — 2025",
        description:
          "Génie électrique, vision par ordinateur, assemblage.",
      },
      {
        role: "BA1 — Bachelor",
        company: "EPFL — Lausanne",
        period: "2021 — 2022",
        description: "Génie mécanique.",
      },
      {
        role: "Classes préparatoires (CPGE)",
        company: "Lycée Faidherbe — Lille",
        period: "2019 — 2021",
        description: "Physique, chimie, mathématiques (PCSI/PC).",
      },
      {
        role: "Baccalauréat scientifique",
        company: "LFIB — Bangkok, Thaïlande",
        period: "2016 — 2019",
        description: "",
      },
    ],
  },
  contact: {
    sectionTitle: "Contact",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
    socialLabel: "Réseaux",
    cvLabel: "CV",
    email: "nicolasedmond8@gmail.com",
    phone: "+33 7 83 26 53 18",
    social: [
      {
        id: "github",
        label: "Github",
        url: "https://github.com/Sekoya88",
      },
      {
        id: "linkedin",
        label: "Linkedin",
        url: "https://www.linkedin.com/in/nicolas-edmond8/",
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
      " Ingénieur ML / IA ",
      " Systèmes agentiques ",
      " Ingénieur ML / IA ",
      " Systèmes agentiques ",
    ],
    loadingLabel: "Chargement",
    welcome: "Bienvenue",
  },
};

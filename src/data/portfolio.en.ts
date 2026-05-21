import type { PortfolioContent } from "./portfolio.types";

export const portfolioEn: PortfolioContent = {
  meta: {
    title: "Nicolas Edmond — ML / AI Engineer",
    description:
      "Portfolio of Nicolas Edmond — production-grade agentic systems, hybrid RAG, and ML pipelines. Bordeaux, France.",
  },
  landing: {
    greeting: "Hello! I'm",
    name: "NICOLAS",
    nameLine2: "EDMOND",
    roles: ["ML / AI Engineer", "Agentic Systems"],
    tagline: "Bordeaux",
  },
  nav: {
    logo: "NE",
    email: "nicolasedmond8@gmail.com",
    sections: [
      { id: "#about", label: "ABOUT" },
      { id: "#work", label: "WORK" },
      { id: "#contact", label: "CONTACT" },
    ],
  },
  about: {
    title: "About Me",
    body: "AI Engineer focused on architecting robust, production-grade agentic systems. I specialize in designing multi-agent workflows, hybrid RAG pipelines, and high-performance backends — staying at the forefront of AI research to solve complex real-world problems. Forged by endurance sports, I prioritize architectural purity, system reliability, and minimizing latency in LLM-powered infrastructures.",
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
          "Deterministic multi-agent workflows (LangGraph), tool calling, hybrid RAG with RRF, and cloud orchestration (AWS Lambda, GCP Vertex AI) for complex document and decision pipelines.",
        skillsLabel: "Skillset & tools",
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
          "From time-series forecasting and ETL at scale to fine-tuning VLMs (QLoRA, DPO) and ensemble ML — notebooks to monitored production with clean architecture and rigorous evaluation.",
        skillsLabel: "Skillset & tools",
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
    title: "My",
    titleHighlight: "Work",
    projects: [],
  },
  cv: {
    href: "/CV-Nicolas-Edmond.pdf",
    label: "Download CV",
    fileName: "CV-Nicolas-Edmond.pdf",
  },
  career: {
    title: "My career",
    titleSpan: "&",
    titleBreak: "experience",
    experienceTitle: "Professional experience",
    educationTitle: "Education",
    experience: [
      {
        role: "Co-CTO — AI & Agentic Engineer",
        company: "Formalis.IA · Bordeaux",
        period: "Sep 2025 — Present",
        description:
          "LangGraph + Vertex AI pipeline (Classifier, Detector, Mapper, Validator) for legal PDF automation. AWS Lambda orchestrator (AWS ↔ GCP), DynamoDB observability, parallel S3 extraction, INPI/RNE API submissions — replacing legacy manual review.",
      },
      {
        role: "Data Engineer",
        company: "RTE · Lille",
        period: "Sep 2022 — Sep 2025",
        description:
          "Built FIDEL (Shiny/R): ARIMA/SARIMA + ML wind forecasts for 300+ farms (+15% grid balancing). Large-scale ETL on PostgreSQL/Oracle — 200+ hours/year of manual wrangling eliminated.",
      },
    ],
    education: [
      {
        role: "Specialized Master in Big Data",
        company: "GEM & Ensimag — Grenoble",
        period: "2025 — 2026",
        description:
          "ML, deep learning, large-scale data processing, customer knowledge & marketing.",
      },
      {
        role: "Engineering (Electrical & Energy)",
        company: "ESME — Lille",
        period: "2022 — 2025",
        description: "Electrical engineering, computer vision, assembly.",
      },
      {
        role: "BA1 — Bachelor",
        company: "EPFL — Lausanne",
        period: "2021 — 2022",
        description: "Mechanical engineering.",
      },
      {
        role: "Intensive Preparatory Classes (CPGE)",
        company: "Lycée Faidherbe — Lille",
        period: "2019 — 2021",
        description: "Physics, chemistry, mathematics (PCSI/PC).",
      },
      {
        role: "High School Diploma (Scientific)",
        company: "LFIB — Bangkok, Thailand",
        period: "2016 — 2019",
        description: "",
      },
    ],
  },
  contact: {
    sectionTitle: "Contact",
    emailLabel: "Email",
    phoneLabel: "Phone",
    socialLabel: "Social",
    cvLabel: "Resume",
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
      " ML / AI Engineer ",
      " Agentic Systems ",
      " ML / AI Engineer ",
      " Agentic Systems ",
    ],
    loadingLabel: "Loading",
    welcome: "Welcome",
  },
};

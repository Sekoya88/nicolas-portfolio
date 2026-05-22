import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const META = JSON.parse(
  readFileSync(join(ROOT, "src/data/project-images.json"), "utf8")
);

const USER = "Sekoya88";
const EXCLUDE = new Set([
  "portfolio-website",
  "nicolas-portfolio",
  "Portfolio-Website",
]);
const MAX = 6;
const OUT = join(dirname(fileURLToPath(import.meta.url)), "../src/data/projects.generated.json");

const headers = { Accept: "application/vnd.github+json" };
if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

const res = await fetch(
  `https://api.github.com/users/${USER}/repos?sort=updated&per_page=30`,
  { headers }
);

if (!res.ok) {
  console.error("GitHub API error:", res.status, await res.text());
  process.exit(1);
}

const repos = await res.json();

const filtered = repos
  .filter(
    (r) =>
      !r.fork &&
      !r.archived &&
      !EXCLUDE.has(r.name) &&
      r.name !== "portfolio-website"
  )
  .slice(0, MAX);

function toProject(repo) {
  const topics = (repo.topics ?? []).slice(0, 4);
  const tools = [repo.language, ...topics].filter(Boolean).join(" · ");
  const custom = META[repo.name];
  return {
    name: repo.name,
    category: repo.language ?? topics[0] ?? "Open source",
    tools: tools || "—",
    href: repo.html_url,
    image: custom?.image ?? "/images/placeholder.webp",
  };
}

const projects = filtered.map(toProject);

const payload = { projects };

writeFileSync(OUT, JSON.stringify(payload, null, 2) + "\n");
console.log(`Wrote ${projects.length} projects to ${OUT}`);

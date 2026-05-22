# Nicolas Edmond — Portfolio

Personal portfolio for **Nicolas Edmond** (AI/ML Engineer · Agentic Systems). English only.

## Attribution

Inspired by and built from the open learning release of [Moncy Yohannan's portfolio](https://github.com/MoncyDev/Portfolio-Website) ([fork](https://github.com/Sekoya88/portfolio-website)). Original design by Moncy Yohannan — see [PPL v1.0](LICENSE).

## Stack

React · TypeScript · Vite · GSAP · Three.js · React Three Fiber

## Setup

```bash
npm install
npm run dev
```

## Sync GitHub projects (Work section)

```bash
npm run sync:projects
```

Optional: `GITHUB_TOKEN` for higher API rate limits.

## Deploy

- **GitHub:** source of truth
- **Railway:** static deploy from `dist/` after `npm run build`

## GSAP note

`gsap-trial` (ScrollSmoother, SplitText) is for local learning. For production without a GSAP Club license, replace trial plugins per [GSAP installation docs](https://gsap.com/docs/v3/Installation/).

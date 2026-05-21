# Deploy — GitHub + Railway

## GitHub

```bash
cd ~/Documents/nicolas-portfolio
gh repo create nicolas-portfolio --public --source=. --remote=origin --push
```

If the repo already exists:

```bash
git remote set-url origin https://github.com/Sekoya88/nicolas-portfolio.git
git push -u origin main
```

## Railway

1. [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo** → `Sekoya88/nicolas-portfolio`
2. Build uses `railway.json`: `npm install && npm run build`
3. Start: `npm start` (serves `dist/` on `$PORT`)
4. Optional env: `NODE_VERSION=20`, `GITHUB_TOKEN` (only if you add build-time `sync:projects`)

## GSAP before public URL

Read [docs/GSAP.md](docs/GSAP.md). Trial plugins are fine for local dev; confirm Club license or implement fallback before sharing widely.

## Local

```bash
npm install
npm run dev
```

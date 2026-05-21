# GSAP production decision

This project uses **gsap-trial** plugins:

- `ScrollSmoother` — [`src/components/Navbar.tsx`](../src/components/Navbar.tsx)
- `SplitText` — [`src/components/utils/splitText.ts`](../src/components/utils/splitText.ts), [`src/components/utils/initialFX.ts`](../src/components/utils/initialFX.ts)

Trial plugins are **not licensed for public production** without [GSAP Club](https://gsap.com/pricing/).

## Options

| Option | Action |
|--------|--------|
| **A — Club** | Install official Club packages; remove `gsap-trial` from `package.json`. |
| **B — No Club** | Remove ScrollSmoother (native scroll + ScrollTrigger); replace SplitText with CSS/GSAP core fades. |
| **C — Dev only** | Do not deploy until A or B is done. |

Current status: **Option C for Railway** until you confirm A or B.

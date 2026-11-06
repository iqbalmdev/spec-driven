# Spec-Driven Development — Learning Project

A version-controlled knowledge base and **interactive showcase app** for learning *Spec-Driven Development: From Vibe-Coding to AI Engineering*.

## Live App

🌐 **Production:** [https://spec-driven-two.vercel.app](https://spec-driven-two.vercel.app)

📦 **GitHub:** [https://github.com/iqbalmdev/spec-driven](https://github.com/iqbalmdev/spec-driven)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### If styles disappear (no Tailwind / plain HTML)

This happens when the `.next` cache is corrupted — usually **`npm run build` ran while `npm run dev` was still running**.

1. Stop all dev servers (Ctrl+C).
2. Run **`npm run dev`** again — it clears `.next` automatically before starting.
3. Hard refresh the browser (**Cmd+Shift+R**). Use **http://localhost:3000** (same URL every time, not mixing LAN IP and localhost).

Do not run `npm run build` until dev is stopped. Production builds on Vercel are unaffected.


```
Spec-driven/
├── src/app/          # Next.js showcase app
├── src/content/      # Structured course content
├── docs/             # Source markdown documentation
├── templates/        # Reusable spec templates
└── requirements.md   # Living requirements (Clarification Gate)
```

## Course Progress

| Section | Title | Status |
|---------|-------|--------|
| 1 | Foundations — From Vibe-Coding to Structured Specs | ✅ Documented + App |
| 2 | Task Implementation — From Spec to Tasks | ✅ Documented + App |
| 3 | Code Implementation — From Tasks to Verified Code | ✅ Documented + App |
| 4 | AI Understanding — Clarity Before Code | ✅ Documented + App + 3D Journey |
| 5 | Module 5: Tooling and Ecosystem | ✅ Documented + App |
| 6 | Living Specs & AgentOS | ✅ Documented + App |
| 7 | Advanced SDD Use Cases | ✅ Documented + App |

## Key Concepts

> **What does the spec say should happen — not what does the code happen to do.**

- **shape-spec** — Structured conversations before code
- **Clarification Gate** — Zero open items in `requirements.md`
- **/create-tasks** — Clarified spec → atomic tasks.md
- **Atomic decomposition** — Smallest verifiable units linked to requirements
- **Executable intent** — Specs generate tasks, plans, and AI prompts
- **Historical lineage** — SDLC → PRDs → TDD → BDD → SDD

## Docs

- [Section 1](./docs/course/section-01-foundations/README.md)
- [Section 2](./docs/course/section-02-task-implementation/README.md)
- [Section 3](./docs/course/section-03-implementation/README.md)
- [Section 4](./docs/course/section-04-ai-understanding/README.md)
- [Section 5](./docs/course/section-05-tooling-ecosystem/README.md)
- [Section 6](./docs/course/section-06-agentos/README.md)
- [Section 7](./docs/course/section-07-advanced-sdd/README.md)
- [requirements.md](./requirements.md)

# Kiro spec triad + steering — execution spine

Interactive guide: `/course/section-05/spec-files`

## steering.md vs requirements.md

| File | Purpose | Scope |
|------|---------|--------|
| **steering.md** | Persistent project memory (tech stack, coding standards) | Whole repo, every session |
| **requirements.md** | The “what” for a single feature (execution spine) | One feature / change |

Template: [`templates/steering.md`](../../templates/steering.md)

## Workflow order

0. **steering.md** — load persistent memory  
1. **requirements.md** — shape-spec, gate  
2. **design.md** — architecture  
3. **tasks.md** — /create-tasks  
4. **Code + MCP** — implement with verifiable evidence  

## requirements.md (What)

Per-feature contract — read steering first. Gate must pass before design/tasks.

## design.md (How)

Architecture after requirements gate.

## tasks.md (Steps)

Atomic checklist from /create-tasks.

## MCP (Lesson 3)

Diagnostic bridge: bounded autonomy, JSON-RPC, Playwright journeys, LCP and runtime evidence. See `/course/section-05/mcp`.

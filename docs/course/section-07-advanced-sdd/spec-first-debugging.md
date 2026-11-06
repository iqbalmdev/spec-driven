# Section 7 · Lesson 1 — Spec-First Debugging

Evidence-driven debugging — not guesswork.

## Arc

1. **Detective mindset** — reproducible procedure vs “I think”
2. **Case file** — requirements.md defines what “right” means
3. **Clues** — user journeys, LCP budgets (e.g. under 2.5s), observable acceptance criteria
4. **Team** — MCP agent, Playwright reenactment, Chrome DevTools traces
5. **Six-step runbook** — spec → reenact → trace → analyze → map to spec → update spec
6. **Case 1: LCP** — 4.1s vs 2.5s budget; long main-thread task
7. **Case 2: Jank** — forced reflow / layout thrashing in a loop
8. **Feedback loop** — incident strengthens spec and CI

## App

`/course/section-07/spec-first-debugging`

## Related

- Section 5 — MCP, Runtime Gateflow
- Section 6 — living specs, runtime verification gates

# Section 5 — Module 5: Tooling and Ecosystem

> **Course module:** 3 lessons · ~19 min — Agent OS, Amazon Kiro, Model Context Protocol (MCP).

Tooling turns SDD from theory into repeatable practice: an **operating system** for features, **rigor in the IDE**, and **runtime bridges** so agents diagnose with live context.

---

## Lesson 1 — Agent OS: Managing the Feature Lifecycle

Treat each feature as the same pipeline:

| Stage | SDD anchor |
|-------|------------|
| Understand | shape-spec |
| Gate | Clarification Gate |
| Plan | /create-tasks |
| Build | /implement + constitution tiers |
| Verify | Acceptance criteria + exact commands |

Agents and humans share these states — no skipping clarity.

---

## Lesson 2 — Amazon Kiro: The High-Rigor Agentic IDE

High-rigor agentic IDEs keep **specs and guardrails in the editing surface**:

- Spec in the loop while coding
- Guardrailed automation (team rules before wide edits)
- Traceable, task-sized changes

Contrast with vibe-coding: speed without an OS produces drift.

---

## Lesson 3 — MCP: The Runtime Diagnostic Bridge

**Model Context Protocol** standardizes tool calls at execution time:

| Bridge | Role |
|--------|------|
| Repository | Specs, diffs, structure |
| Runtime / logs | Failures with live context |
| External APIs | Docs, issues, data |
| Custom servers | Team-specific observability |

MCP connects “what the spec says” to “what the system is doing now.”

---

## Practical Takeaways

1. **Agent OS** — same lifecycle for every feature.
2. **Kiro-class IDEs** — rigor where agents work.
3. **MCP** — diagnostic bridge at runtime.
4. Tooling should reinforce the Clarification Gate and task order.
5. Use MCP for repos, logs, and APIs — not one-off paste context.

---

## Files

| File | Description |
|------|-------------|
| [README.md](./README.md) | Module overview |
| [agent-os.md](./agent-os.md) | Feature lifecycle OS |
| [mcp.md](./mcp.md) | MCP bridge notes |

# Section 6 — Living Specs & AgentOS

## Lesson 1 — Living Specs & Executable Guardrails

See [living-guardrails.md](./living-guardrails.md). App: `/course/section-06/living-guardrails`.

---

## Lesson 2+ — AgentOS: Persistent Project Memory

> **Problem:** AI assistants lose project context between sessions — productivity drops and decisions repeat.

**AgentOS** is a structured workflow that keeps **persistent memory** in the repository so humans and AI share the same focus, priorities, and stack.

---

## Persistent memory files

| File | Role |
|------|------|
| **plan.md** | Prevents feature drift — current feature and tasks in focus |
| **roadmap.md** | Clarifies project priorities and sequencing |
| **techstack.md** | Shared technology stack — versions, frameworks, conventions |

Templates: [`templates/plan.md`](../../templates/plan.md), [`templates/roadmap.md`](../../templates/roadmap.md), [`templates/techstack.md`](../../templates/techstack.md)

---

## Commands in the workflow

### shape-spec

Dialogue between developer and AI until the feature is understood. Output lands in **requirements.md** with ambiguity removed (Clarification Gate).

### /create-tasks

Decomposes the clarified spec into **small tasks** in **tasks.md** — ordered by **dependencies**, forming an executable checklist.

---

## Implementation paths

| Path | Emphasis |
|------|----------|
| **Implement tasks** | High control — sequential execution, tight review |
| **Orchestrate tasks** | Speed — specialist agents in parallel when tasks are isolated |

Pick control when risk is high; pick orchestration when specs are mature and boundaries are clear.

---

## Benefits

- **Speed** — less time re-explaining the project
- **Consistency** — one written source for plan, roadmap, stack
- **Reliability** — tasks and requirements as contract
- **Focus** — you steer strategy; AI handles implementation within AgentOS

---

## Reflection

> If your AI assistant had perfect memory of plan, roadmap, stack, and specs — what would you delegate first?

---

## Key Terms

| Term | Definition |
|------|------------|
| **AgentOS** | Workflow combining persistent memory files + shape-spec + tasks + implement/orchestrate |
| **Persistent memory** | Version-controlled project context files, not chat |
| **Feature drift** | Building beyond current plan scope without updating specs |
| **Orchestrate** | Parallel agent execution on well-bounded tasks |

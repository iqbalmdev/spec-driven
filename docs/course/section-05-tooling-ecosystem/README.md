# Section 5 — Module 5: Tooling and Ecosystem

Three lessons (~19 min): **Agent OS**, **Amazon Kiro**, **MCP**.

---

## Lesson 1 — AgentOS: Persistent Memory & Feature Lifecycle

Lesson follows the **Builder Methods AgentOS** narrative: `/plan product`, three memory files, `shape-spec`, clarification gate, `/create-tasks`, implement vs orchestrate.

### Persistent memory (`/plan product`)

| File | Problem it prevents |
|------|---------------------|
| `plan.md` | Feature drift |
| `roadmap.md` | Priority hallucinations |
| `techstack.md` | Stack guessing |

Run once at project start; context reloads every session. See also [Section 6](../section-06-agentos/).

### shape-spec & clarification gate

Structured questions → `requirements.md`. **No next step until open items = 0.**

### /create-tasks

Atomic, dependency-ordered `tasks.md` linked to requirements with verification steps.

### Implement vs orchestrate

**Implement tasks** — sequential, high control. **Orchestrate tasks** — parallel specialists with scoped context.

### Documentation maintenance

Use **exact commands** in docs — e.g. `pnpm test && pnpm lint`, not “make sure tests pass.”

### Tier Two approval gates

Schema changes, dependencies, public API — **human sanity check** before the agent proceeds. → [Section 4 approval gates](../section-04-ai-understanding/approval-gates.md)

### Five clarification buckets

| Bucket | Focus |
|--------|--------|
| Users & roles | Who can do what |
| Data lifecycle | CRUD, retention |
| Consistency | Cross-session truth |
| Error contracts | Failures, retries |
| Security & privacy | PII, auth, logging |

### Formal checklist

Spec ready when: clarification resolved, measurable success, roles/behaviors defined, constraints applied — verify **intent**, not mystery code.

### Atomic decomposition

`tasks.md` — smallest verifiable units, dependency order, links to requirements.

### Control vs speed

**Implement tasks** vs **orchestrate tasks** — see lesson page for specialist scope and when to choose each.

### Artifact files (Kiro / steering)

Some teams use `mission.md` alongside or instead of `plan.md` for product focus — same anti-drift role.

| File | Problem it prevents |
|------|---------------------|
| `plan.md` / `mission.md` | Feature drift |
| `roadmap.md` | Priority hallucinations |
| `techstack.md` | Stack guessing |

---

## Lesson 2 — Amazon Kiro: High-Rigor Agentic IDE

- **Not** a chaotic intern — **seasoned engineer**: plan first, paper trail, less debt.
- **Three workflow files:** `requirements.md` (what), `design.md` (how), `tasks.md` (steps).
- **EARS** requirements — precise, testable.
- **Enforcement + evidence** — durable artifacts before code dumps.

Templates: [`templates/mission.md`](../../templates/mission.md), [`templates/design.md`](../../templates/design.md), [`templates/roadmap.md`](../../templates/roadmap.md), [`templates/techstack.md`](../../templates/techstack.md) (tech-stack)

---

## Lesson 3 — MCP: Runtime Diagnostic Bridge

- **Diagnostic bridge** — models ↔ permitted tools/data.
- **Bounded autonomy** — only configured MCP servers.
- **JSON-RPC** — structured client ↔ host messages.
- **Toolkit:** Playwright (user journeys), performance metrics (e.g. LCP), repo/runtime servers.

---

## App routes

- `/course/section-05` — module hub
- `/course/section-05/agent-os` — Lesson 1
- `/course/section-05/kiro` — Lesson 2
- `/course/section-05/mcp` — Lesson 3

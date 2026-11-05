# Section 4 — AI Understanding: Clarity Before Code

**Course:** Spec-Driven Development: From Vibe-Coding to AI Engineering  
**Status:** ✅ Documented  
**Added:** 2026-09-10

---

## Overview

Section 4 ensures **AI comprehensively understands a feature before any coding begins**. It deepens the practices from Section 1 with constitution.md, documentation discipline, and Tier Two approval gates — establishing a robust framework for clarity and efficient AI execution.

> **Misassumptions are expensive. Clarity is the bottleneck — not typing speed.**

---

## 1. Understanding Requirements

Before implementation, requirements must be **thoroughly clarified**.

### shape-spec

The `shape-spec` command forces a **structured conversation** between AI and developers:

| Phase | Focus |
|-------|--------|
| Frame | Problem, user, success, out-of-scope |
| Journey | Trigger → steps → end state |
| Contracts | Inputs, outputs, acceptance criteria |
| Open items | Anything still unclear → requirements.md |

**What it prevents:** AI filling gaps with guesses, lost context, rework from misunderstood intent.

→ See [shape-spec deep dive](./shape-spec.md)

### EARS — Easy Approach to Requirements Syntax

Write requirements in **predictable sentence patterns** so AI and humans parse intent the same way:

| Pattern Type | Template |
|--------------|----------|
| **Ubiquitous** | The system shall… |
| **Event-Driven** | When \<trigger\>, the system shall… |
| **State-Driven** | While \<in a specific state\>, the system shall… |
| **Optional Feature** | Where \<feature is included\>, the system shall… |
| **Unwanted Behavior** | If \<condition\>, then the system shall… |

Use EARS during shape-spec when drafting acceptance criteria in requirements.md — each requirement should map to exactly one pattern.

---

## 2. Clarification Gate

Remove **all ambiguity** before advancing.

| Rule | Meaning |
|------|---------|
| Open items = 0 | Gate passes — proceed to tasks/implementation |
| Open items > 0 | Stop. Clarify. Document decisions. |
| Every resolution | Logged in requirements.md with date and rationale |

Each decision made during shaping is **documented** — locking in clarity and shared understanding.

### Ready for Plan Checklist

Before advancing to `/create-tasks`, confirm every item passes:

| Check | Meaning |
|-------|---------|
| No `[NEEDS CLARIFICATION]` items remain | Every open question resolved or explicitly deferred with rationale |
| Success criteria are measurable | Observable outcomes — not subjective "feels done" |
| Roles and permissions are explicit | Who can do what — no assumed access |
| Error behavior is explicit | What happens on failure — messages, retries, fallbacks |
| Data lifecycle is explicit | Create, update, delete, retention — all defined |
| `DO NOT` constraints are present | Hard boundaries the AI must not cross |

If any item fails, return to shape-spec. The Clarification Gate stays closed until the checklist is green.

---

## 3. Consistency vs Flexibility — constitution.md

Create a `constitution.md` that balances:

| Layer | Purpose | Examples |
|-------|---------|----------|
| **Organization** | Consistency across all projects | Never log PII, PR reviews required |
| **Project** | Flexibility for this repo | Stack, commands, folder structure |

**Why it matters:** Teams need shared guardrails without killing project-specific pragmatism. The constitution articulates what is **always true**, what **needs approval**, and what is **never allowed**.

→ Template: [`templates/constitution.md`](../../../templates/constitution.md)

---

## 4. Documentation Maintenance

Docs must stay **relevant and practical** — version-controlled like code.

### File roles

| File | Audience | Purpose |
|------|----------|---------|
| README.md | Human | Product overview |
| requirements.md | Human + AI | Feature intent (SPEC) |
| constitution.md | Human + AI | Team rules |
| tasks.md | Human + AI | Atomic work units |
| AGENTS.md | AI | Operational rules |

### Exact commands — not vague suggestions

| ❌ Vague | ✅ Exact |
|---------|---------|
| "Run tests" | `npm run build` |
| "Install deps" | `npm install` |
| "Check quality" | `npm run lint` |

Vague docs produce vague AI behaviour. **Exact commands enable exact execution.**

### Minimal "Living Docs" Checklist

Before merge or feature sign-off, confirm:

- [ ] **Spec reflects final behavior.** — requirements.md matches what shipped
- [ ] **Plan reflects final architecture.** — plan / architecture docs match the built system
- [ ] **Tasks are checked off & linked.** — tasks.md complete and tied to requirements
- [ ] **Verification evidence exists.** — tests, build, lint, or recorded acceptance proof

If any item fails, update docs in the same PR as the code — do not merge with drift.

---

## 5. Approval Gates (Tier Two)

A system of checks for actions that are **significant but not clearly wrong** — requiring **human verification** before proceeding.

### Three tiers

| Tier | Label | Action |
|------|-------|--------|
| **One** | Always Do | Proceed — run tests, update docs, follow constitution |
| **Two** | Ask First | Human approval — dependencies, schema, public API |
| **Three** | Never Do | Block — secrets, bypass auth, log sensitive data |

### Tier Two examples

- Add third-party dependency (affects bundle, security, maintenance)
- Change database schema (structural impact)
- Change public API contract (breaks consumers)
- Refactor core/shared modules (wide blast radius)

---

## Workflow

```
Feature idea
    ↓
shape-spec (structured conversation)
    ↓
requirements.md (open items captured)
    ↓
Clarification Gate (open items = 0)
    ↓
constitution.md (tier rules loaded)
    ↓
/create-tasks → tasks.md
    ↓
/implement (Tier One proceeds, Tier Two asks, Tier Three blocks)
    ↓
Verify → feature complete
```

---

## Practical Takeaways

1. **shape-spec before code.** Structured conversation prevents misassumptions.
2. **Clarification Gate.** Zero open items — decisions documented.
3. **constitution.md.** Balance org consistency with project flexibility.
4. **Exact commands.** `npm run build`, not "make sure it works."
5. **Tier Two gates.** Dependencies, schema, API — human approves first.
6. **Living docs.** Evolve with the project — always in git.

---

## Key Terms

| Term | Definition |
|------|------------|
| **shape-spec** | Structured conversation to clarify requirements before code |
| **EARS** | Easy Approach to Requirements Syntax — standardized sentence patterns for requirements |
| **Clarification Gate** | Zero open items in requirements.md before proceeding |
| **Ready for Plan Checklist** | Six checks before advancing to task creation |
| **Minimal Living Docs Checklist** | Four checks before merge — spec, plan, tasks, verification evidence |
| **constitution.md** | Team rules balancing consistency and flexibility |
| **Tier One** | Always Do — safe defaults, proceed without asking |
| **Tier Two** | Ask First — approval gates for significant changes |
| **Tier Three** | Never Do — hard bans, block immediately |
| **Exact commands** | Specific CLI commands in docs, not vague instructions |

---

## Files

| File | Description |
|------|-------------|
| [README.md](./README.md) | This overview |
| [shape-spec.md](./shape-spec.md) | shape-spec deep dive |
| [approval-gates.md](./approval-gates.md) | Tier system guide |

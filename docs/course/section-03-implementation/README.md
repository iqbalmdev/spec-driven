# Section 3 — Implementation: From Tasks to Verified Code

**Course:** Spec-Driven Development: From Vibe-Coding to AI Engineering  
**Status:** ✅ Documented  
**Added:** 2026-09-02

---

## Overview

Section 3 covers the **Code** and **Verify** development stages. After Section 2 produces a clarified `requirements.md` and atomic `tasks.md`, this section focuses on **executing tasks in order**, implementing against the spec, and verifying each unit before moving on.

> **What does the spec say should happen — not what does the code happen to do.**

Implementation is not vibe-coding with a task list nearby — it is disciplined execution where every line traces to a task, every task traces to a requirement, and nothing is marked done until verification passes.

---

## Prerequisites

Before implementing:

- [x] `requirements.md` clarified — Clarification Gate passed (Section 1)
- [x] `tasks.md` generated via `/create-tasks` (Section 2)
- [x] Tasks ordered by dependency
- [x] Each task has requirement links and verification steps
- [x] Risk matrix documented for infrastructure/API tasks (Section 2)

**Do not start Task 2 until Task 1's verification checkboxes pass.**

---

## Project Constitution

Non-negotiable rules that govern every implementation task. Apply these on every `/implement` run.

| Always Do ✓ | Ask First ? | Never Do ✕ |
|-------------|-------------|------------|
| **Follow naming** — Use established naming conventions for variables, functions, files, and APIs | **Change schema** — Discuss database or data-structure changes before implementing | **Bypass auth checks** — Never skip authentication or authorization |
| **Keep PRs small** — Ship focused pull requests that map to a single task | **Refactor core modules** — Get alignment before changing foundational modules | **Log sensitive data** — Never log passwords, tokens, PII, or secrets |

**How to use:**
- **Always Do** — defaults on every task and PR
- **Ask First** — high-impact changes that need discussion before code
- **Never Do** — hard security and safety bans, no exceptions

---

## Key Concepts

### 1. Task-Ordered Execution

Pick tasks **strictly in dependency order** from `tasks.md`. Never skip ahead because a later task seems more interesting.

```
Task 1 ✓ verified → Task 2 ✓ verified → Task 3 ✓ verified → Task 4 ✓ verified
```

**Anti-pattern:** Implementing the send function before the data structure exists.

---

### 2. `/implement` — One Task at a Time

The `/implement` command (or workflow) directs AI or developers to execute **a single atomic task** against its linked requirement — not the whole feature at once.

**What it does:**
- Reads the next unverified task from `tasks.md`
- Pulls the linked REQ-XXX from `requirements.md`
- Generates focused implementation scoped to that task only
- Runs verification steps before marking complete

**When to use:** After `/create-tasks` — for each task in dependency order.

→ See [implement workflow](./implement-tasks.md)

---

### 3. Spec-Aligned Code

Every implementation decision resolves against the spec:

| Question | Source of truth |
|----------|-----------------|
| What fields does the message have? | REQ-002 in requirements.md |
| When is a message persisted? | REQ-003 error behaviour spec |
| Who can send? | REQ-001 user roles |

If code diverges from spec — **fix the code**, not the spec (unless the spec was wrong and open items are resolved first).

---

### 4. Per-Task Verification

Each task in `tasks.md` has verification checkboxes. **All must pass** before the task is complete and the next task begins.

**Verification is not optional QA at the end** — it is the gate between tasks, just as the Clarification Gate sits between spec and tasks.

---

### 5. Traceability Through Implementation

Link every change back to intent:

```markdown
Task 2: Implement send message function
Requirement: REQ-001 — User roles
Commit: feat(messaging): implement send message (Task 2, REQ-001)
```

Traceability chain: **Code → Task → Requirement → User Story**

---

## Workflow — Tasks to Verified Code

```
tasks.md (ordered, linked, verified steps defined)
         │
         ▼
   Pick next task (dependency order)
         │
         ▼
      /implement
         │
         ▼
   Write code (scoped to task + REQ)
         │
         ▼
   Run verification checkboxes
         │
         ├── fail → fix code, re-verify
         │
         └── pass → mark task complete
         │
         ▼
   More tasks? ──yes──→ Pick next task
         │
         no
         ▼
   Feature complete — all acceptance criteria pass
```

---

## Example — Messaging Application Implementation

Building on the Section 2 messaging spec and tasks:

### Task 1: Design the message data structure

**Requirement:** REQ-002 — Data lifecycle  
**Implementation:**
- Define TypeScript types / DB schema: `id`, `senderId`, `receiverId`, `body`, `status`, `createdAt`, `deletedAt`
- Status enum: `pending | sent | failed | deleted`

**Verification:**
- [x] Schema includes all fields from data lifecycle spec
- [x] Status enum covers required states
- [x] Soft-delete sets `deletedAt` without removing record

---

### Task 2: Implement the send message function

**Requirement:** REQ-001 — User roles  
**Depends on:** Task 1  
**Implementation:**
- Sender creates message with `receiverId` and `body`
- Persist only on confirmed delivery
- Receiver can fetch after send

**Verification:**
- [x] Sender can create a message
- [x] Message not persisted until delivery confirmed
- [x] Receiver can fetch the message

---

### Task 3: Create error handling for failed messages

**Requirement:** REQ-003 — Error behaviour  
**Depends on:** Task 2  
**Implementation:**
- Failed send surfaces retry UI
- No orphan records on failure
- Retry without duplicate

**Verification:**
- [x] Failed send shows retry option
- [x] No orphan records on failure
- [x] Retry succeeds without duplicates

---

### Task 4: Write unit tests for message sending

**Requirement:** REQ-001, REQ-002, REQ-003  
**Depends on:** Tasks 1–3  
**Implementation:**
- Test happy path, soft-delete, failed send + retry

**Verification:**
- [x] Happy path passes
- [x] Soft-delete behaviour correct
- [x] Retry flow without duplicate

---

## Feature Completion Criteria

A feature is **complete** when:

- [ ] All tasks in `tasks.md` verified
- [ ] All verification checkboxes checked
- [ ] All user story acceptance criteria from `requirements.md` pass
- [ ] Implementation matches spec — not retrofitted spec matching code

---

## Practical Takeaways

1. **Follow the Project Constitution.** Always Do · Ask First · Never Do — on every task.
2. **One task at a time.** Dependency order is not a suggestion.
3. **Verify before advancing.** Failed verification blocks the next task.
4. **Spec over code.** Fix code when it diverges from requirements.
5. **Scope AI prompts to one task.** Never "build the whole feature."
6. **Trace commits to tasks and requirements.** Auditability matters.
7. **Tests are Task 4, not an afterthought.** Verification stage is built into the task list.

---

## Key Terms

| Term | Definition |
|------|------------|
| **Project Constitution** | Always Do · Ask First · Never Do — rules that govern every implementation |
| **/implement** | Workflow/command to execute a single task against its linked requirement |
| **Task-ordered execution** | Implementing tasks strictly in dependency order from tasks.md |
| **Per-task verification** | Running checkbox criteria before marking a task complete |
| **Spec-aligned code** | Implementation that matches requirements.md, not accidental behaviour |
| **Traceability chain** | Code → Task → Requirement → User Story |
| **Feature completion** | All tasks verified + all acceptance criteria pass |

---

## Files in This Section

| File | Description |
|------|-------------|
| [README.md](./README.md) | This overview |
| [implement-tasks.md](./implement-tasks.md) | `/implement` workflow |

---

## Next Steps

- Apply `/implement` to each task in your project's `tasks.md`
- Proceed to Section 4 when available (advanced patterns)

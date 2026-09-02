# Section 2 — Specification Plan: Task Implementation

**Course:** Spec-Driven Development: From Vibe-Coding to AI Engineering  
**Status:** ✅ Documented  
**Added:** 2026-09-02

---

## Overview

Section 2 focuses on what happens **after** the Clarification Gate passes. A well-defined specification must be translated into **actionable, atomic tasks** that AI or developers can implement systematically — not vague prompts like "build the feature."

> **A spec that cannot generate a task list is not executable — it is a wish.**

This section bridges **Specification** (Section 1) and **Code** by introducing the **Plan** and **Tasks** development stages in detail.

---

## Prerequisites

Before creating tasks:

- [x] `requirements.md` is fully clarified
- [x] **Zero unresolved items** in the Clarification Gate
- [x] User stories, acceptance criteria, and data contracts are defined
- [x] Feature scope and error behaviours are documented

**Do not run `/create-tasks` until the spec is complete.** Tasks derived from ambiguous requirements multiply errors downstream.

---

## Key Concepts

### 1. Clarified Specification

The foundation for successful task implementation. Every requirement must be resolved before decomposition begins.

| Check | Meaning |
|-------|---------|
| Open items = 0 | Clarification Gate passed |
| User roles defined | Who interacts with the feature |
| Data lifecycle documented | Create, read, update, delete behaviours |
| Error behaviours specified | What happens when things fail |

---

### 2. `/create-tasks` Command

The `/create-tasks` command converts **clarified specifications** into an implementable **tasks.md** file.

**What it does:**
- Reads the approved `requirements.md`
- Applies atomic decomposition to each user story
- Organises tasks by dependency order
- Links every task back to a requirement ID
- Adds verification steps per task

**When to use:** Immediately after the Clarification Gate passes — before writing feature code.

→ See [create-tasks workflow](./create-tasks.md)

---

### 3. Atomic Decomposition

Split features into the **smallest verifiable units of work**.

**Why atomic tasks matter:**

| Benefit | Explanation |
|---------|-------------|
| Easier to review | Small tasks have clear, reviewable diffs |
| Easier to test | Each task maps to a verifiable outcome |
| Easier to implement | AI and developers pick up one unit at a time |
| Fewer errors | Large vague tasks hide ambiguity until late |

**Rule of thumb:** If a task cannot be verified in isolation, it is not atomic enough — split it.

**Bad (too large):**
> Implement messaging feature

**Good (atomic):**
> Design the message data structure (linked to REQ-003 data lifecycle)

---

### 4. `tasks.md` File Structure

Tasks live in the repository alongside `requirements.md` — version-controlled and traceable.

#### Groups by Dependency

Tasks are ordered so dependencies are explicit. Task 2 cannot start until Task 1 is verified complete.

```
Group A (Foundation)  →  Group B (Core logic)  →  Group C (Verification)
```

#### Link Back to Requirements

Every task references a requirement ID from `requirements.md`:

```markdown
**Requirement:** REQ-002 — User roles (sender, receiver)
```

Traceability ensures nothing is built without spec backing.

#### Verification Steps

Each task includes **how to confirm it is done** — not subjective "looks good":

```markdown
### Verification
- [ ] Message schema validates required fields
- [ ] Timestamps auto-set on create
- [ ] Soft-delete flag defaults to false
```

---

## Workflow — Spec to Tasks

```
requirements.md (clarified, gate passed)
         │
         ▼
   /create-tasks
         │
         ▼
      tasks.md
   ┌─────┴─────┐
   │           │
Dependency   Requirement
  order        links
   │           │
   └─────┬─────┘
         ▼
  Verification steps
         │
         ▼
   Implementation (Section 3+)
```

---

## Example — Messaging Application

### Clarified Specification (`requirements.md`)

**Feature:** Send messages between users

| Area | Specification |
|------|---------------|
| **User roles** | Sender composes and sends; receiver reads incoming messages |
| **Data lifecycle** | Messages stored on send; soft-deleted by sender; hard-deleted after 30 days |
| **Error behaviour** | Failed send shows retry UI; message not persisted until delivery confirmed |

**Requirement IDs:**
- `REQ-001` — User roles (sender, receiver)
- `REQ-002` — Data lifecycle (store, soft-delete, hard-delete)
- `REQ-003` — Error behaviour (failed send, retry)

---

### Generated Tasks (`tasks.md` via `/create-tasks`)

#### Group A — Data Foundation

**Task 1: Design the message data structure**

| Field | Value |
|-------|-------|
| **Requirement** | REQ-002 — Data lifecycle |
| **Depends on** | — |
| **Description** | Define message schema: id, senderId, receiverId, body, status, createdAt, deletedAt |

**Verification:**
- [ ] Schema includes all fields from data lifecycle spec
- [ ] Status enum covers: pending, sent, failed, deleted
- [ ] Soft-delete sets deletedAt without removing record

---

**Task 2: Implement the send message function**

| Field | Value |
|-------|-------|
| **Requirement** | REQ-001 — User roles |
| **Depends on** | Task 1 |
| **Description** | Sender can compose and dispatch a message to a receiver; message persisted only on confirmed delivery |

**Verification:**
- [ ] Sender can create a message with receiverId and body
- [ ] Message not persisted until delivery confirmed
- [ ] Receiver can fetch the message after send

---

#### Group B — Error Handling

**Task 3: Create error handling for failed messages**

| Field | Value |
|-------|-------|
| **Requirement** | REQ-003 — Error behaviour |
| **Depends on** | Task 2 |
| **Description** | On send failure, surface retry UI; do not persist failed message; allow retry without duplicate |

**Verification:**
- [ ] Failed send shows user-facing retry option
- [ ] No orphan records in database on failure
- [ ] Retry succeeds without creating duplicates

---

#### Group C — Verification

**Task 4: Write unit tests for message sending functionality**

| Field | Value |
|-------|-------|
| **Requirement** | REQ-001, REQ-002, REQ-003 |
| **Depends on** | Tasks 1–3 |
| **Description** | Test happy path send, soft-delete, failed send + retry |

**Verification:**
- [ ] Happy path: send → persist → receiver reads
- [ ] Soft-delete hides message from sender view
- [ ] Failed send triggers retry flow without duplicate

---

## Dependency Graph

```
Task 1: Data structure
    │
    ▼
Task 2: Send message function
    │
    ▼
Task 3: Error handling
    │
    ▼
Task 4: Unit tests
```

---

## Example — Risk Planning Matrix

During the **Plan** stage — before or alongside `/create-tasks` — document what can go wrong, how you will detect it, and how you will mitigate it. This keeps risks out of vibe-coded surprises.

| What can go wrong? | How do we detect it? | Mitigation Strategy |
|--------------------|----------------------|---------------------|
| Database failure | Metrics / Alerts | Rollback migration |
| Latency spike | Monitoring signals | Disable via flag |
| API misuse | Logs | Rate limit |

**Why this belongs in Section 2:** Task implementation is not just breaking work into chunks — it is planning for failure modes that affect those tasks. A database migration task (Task 1 in the messaging example) should reference rollback strategy before code is written.

**When to create:**
- During Plan stage, after spec is clarified
- Before implementing infrastructure or API tasks
- Commit alongside `tasks.md` in the repo

---

## Practical Takeaways

1. **Gate before tasks.** Never `/create-tasks` on an unclear spec.
2. **Atomic wins.** Smallest verifiable unit — not "build the feature."
3. **Trace everything.** Every task links to a requirement ID.
4. **Verify each task.** Checkboxes, not vibes.
5. **Dependency order matters.** Foundation before logic before tests.
6. **Plan for failure.** Document risks, detection, and mitigations before coding.
7. **tasks.md lives in the repo.** Version-controlled like requirements.md.

---

## Key Terms

| Term | Definition |
|------|------------|
| **Clarified specification** | requirements.md with zero open items — Clarification Gate passed |
| **/create-tasks** | Command that converts clarified specs into tasks.md |
| **Atomic decomposition** | Splitting features into smallest verifiable units of work |
| **tasks.md** | Version-controlled task file with dependencies, requirement links, and verification |
| **Traceability** | Every task maps back to a specific requirement |
| **Verification steps** | Objective checkboxes that define task completion |
| **Risk planning matrix** | What can go wrong, detection signals, and mitigation — documented during Plan stage |

---

## Files in This Section

| File | Description |
|------|-------------|
| [README.md](./README.md) | This overview |
| [create-tasks.md](./create-tasks.md) | `/create-tasks` command workflow |

---

## Next Steps

- Apply `/create-tasks` to the next feature in your project
- Use [`templates/tasks.md`](../../../templates/tasks.md) as a starting point
- Proceed to Section 3 when available (implementation from tasks)

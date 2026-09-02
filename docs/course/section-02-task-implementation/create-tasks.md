# `/create-tasks` — From Spec to Actionable Tasks

The `/create-tasks` command transforms a **clarified specification** into an ordered, traceable **tasks.md** file ready for implementation.

---

## When to Use

Run `/create-tasks` when:

- [x] `requirements.md` exists and is up to date
- [x] Clarification Gate passed — **zero open items**
- [x] User stories and acceptance criteria are written
- [x] You are ready to move from **Specification** to **Tasks** stage

**Do not use when:**

- Open items remain in requirements.md
- Spec is still being shaped (`shape-spec` not complete)
- You want to vibe-code directly from a prompt

---

## Command Workflow

### Step 1 — Validate the spec

```
Clarification Gate: open items = 0 ?
```

If not → stop. Return to `shape-spec` and resolve open items.

### Step 2 — Identify user stories

Extract each user story and acceptance criterion from `requirements.md`. Each story becomes one or more task groups.

### Step 3 — Apply atomic decomposition

For each story, ask:

1. What is the **smallest verifiable unit** of work?
2. Can this task be **reviewed and tested in isolation**?
3. Does this task map to a **single requirement**?

Split until all three answers are yes.

### Step 4 — Order by dependency

```
Foundation (schemas, types)
    → Core logic (functions, APIs)
        → Edge cases (errors, retries)
            → Verification (tests, acceptance)
```

Tasks that depend on others must list their dependencies explicitly.

**Plan for risks:** Document a risk matrix — what can go wrong, how to detect it, mitigation strategy — especially for database, API, and infrastructure tasks.

| What can go wrong? | How do we detect it? | Mitigation Strategy |
|--------------------|----------------------|---------------------|
| Database failure | Metrics / Alerts | Rollback migration |
| Latency spike | Monitoring signals | Disable via flag |
| API misuse | Logs | Rate limit |

### Step 5 — Link to requirements

Every task gets a **Requirement** field:

```markdown
**Requirement:** REQ-002 — Data lifecycle
```

No orphan tasks. No work without spec backing.

### Step 6 — Add verification steps

Each task ends with checkboxes:

```markdown
### Verification
- [ ] Criterion 1 — objective, testable
- [ ] Criterion 2
```

### Step 7 — Write tasks.md

Commit `tasks.md` to the repository — version-controlled alongside `requirements.md`.

---

## tasks.md Template Structure

```markdown
# Tasks — [Feature Name]

**Source:** requirements.md
**Created:** YYYY-MM-DD
**Status:** Ready | In progress | Complete

---

## Group A — [Dependency group name]

### Task 1: [Title]

| Field | Value |
|-------|-------|
| **Requirement** | REQ-XXX — [title] |
| **Depends on** | — or Task N |
| **Description** | [What to build] |

**Verification:**
- [ ] [Checkable criterion]

---

## Dependency Graph

Task 1 → Task 2 → Task 3 → Task 4
```

→ Full template: [`templates/tasks.md`](../../../templates/tasks.md)

---

## Atomic Decomposition Checklist

Use when breaking down a feature:

- [ ] Task title describes one outcome, not a whole feature
- [ ] Task can be verified without completing other tasks (or lists dependency)
- [ ] Task links to exactly one primary requirement
- [ ] Verification steps are checkboxes, not prose
- [ ] Task is small enough for one PR or one AI session

---

## Anti-Patterns

| ❌ Avoid | ✅ Instead |
|---------|-----------|
| "Build messaging feature" | "Design message data structure" |
| Tasks with no requirement link | Every task → REQ-XXX |
| No verification steps | Checkbox criteria per task |
| Flat unordered list | Groups by dependency |
| tasks.md in chat only | Commit tasks.md to repo |
| `/create-tasks` before gate passes | Resolve open items first |

---

## Output Artifacts

After a successful `/create-tasks` run:

| Artifact | Location |
|----------|----------|
| Task list | `tasks.md` at repo root or feature folder |
| Requirement links | Each task → REQ-XXX in requirements.md |
| Dependency order | Group A → B → C in tasks.md |
| Verification steps | Per-task checkboxes |

---

## Connection to Development Stages

| Stage | Section 2 role |
|-------|----------------|
| **Specification** | Input — clarified requirements.md (Section 1) |
| **Plan** | Implicit in dependency grouping |
| **Tasks** | Output — tasks.md via `/create-tasks` |
| **Code** | Next — pick tasks in order (Section 3+) |
| **Verify** | Run each task's verification steps |

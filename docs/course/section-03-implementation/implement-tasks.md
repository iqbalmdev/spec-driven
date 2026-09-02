# `/implement` — Executing Tasks Against the Spec

The `/implement` workflow executes **one atomic task at a time** from `tasks.md` — scoped to its linked requirement, verified before moving on.

---

## When to Use

Run `/implement` when:

- [x] `tasks.md` exists with ordered, linked tasks (Section 2 complete)
- [x] Previous task verification checkboxes all pass
- [x] You know which task is next in dependency order

**Do not use when:**

- Clarification Gate or `/create-tasks` not yet complete
- Previous task verification failed
- You want to "build the whole feature" in one prompt

---

## Command Workflow

### Step 1 — Identify next task

Open `tasks.md`. Find the first task where:
- All dependency tasks are verified complete
- Verification checkboxes are not yet all checked

### Step 2 — Load context

For the active task, load:
- Task description and verification steps from `tasks.md`
- Linked REQ-XXX from `requirements.md`
- Relevant user story and acceptance criteria

### Step 3 — Scope the implementation

**Prompt AI (or yourself) with only this task:**

```markdown
Implement Task 2 from tasks.md:
- Requirement: REQ-001 — User roles
- Description: Sender can compose and dispatch a message...
- Do NOT implement Task 3 or beyond.
- Verification steps: [list from tasks.md]
```

### Step 4 — Write code

Implement the minimum code to satisfy the task and its requirement. Commit with traceability:

```
feat(messaging): implement send message (Task 2, REQ-001)
```

### Step 5 — Run verification

Execute every checkbox in the task's verification section:

```markdown
### Verification
- [ ] Sender can create a message with receiverId and body
- [ ] Message not persisted until delivery confirmed
- [ ] Receiver can fetch the message after send
```

### Step 6 — Pass or fix

| Result | Action |
|--------|--------|
| All checkboxes pass | Mark task complete in tasks.md → go to Step 1 for next task |
| Any checkbox fails | Fix code → re-run verification. Do not start next task. |

### Step 7 — Feature complete

When all tasks verified, run full acceptance criteria from `requirements.md` user stories.

---

## Implementation Checklist

- [ ] Next task identified by dependency order
- [ ] Linked requirement loaded from requirements.md
- [ ] Implementation scoped to single task only
- [ ] Code committed with Task + REQ reference
- [ ] All verification checkboxes run
- [ ] Task marked complete before advancing
- [ ] Feature acceptance criteria pass at the end

---

## Anti-Patterns

| ❌ Avoid | ✅ Instead |
|---------|-----------|
| "Build the messaging feature" | "Implement Task 2: send message function" |
| Skip Task 1 verification | Verify before Task 2 |
| Change spec to match buggy code | Fix code to match spec |
| One giant AI prompt for all tasks | One prompt per atomic task |
| Tests "later" | Task 4 is tests — in dependency order |
| No commit traceability | `Task N, REQ-XXX` in commit message |

---

## Connection to Development Stages

| Stage | Section 3 role |
|-------|----------------|
| **Specification** | Input via requirements.md (Section 1) |
| **Tasks** | Input via tasks.md (Section 2) |
| **Code** | **This section** — execute tasks in order |
| **Verify** | **This section** — per-task + acceptance criteria |

---

## Output Artifacts

After successful implementation:

| Artifact | Location |
|----------|----------|
| Source code | Repo — traceable to tasks |
| Verified tasks.md | All checkboxes checked |
| Passing tests | Task 4 verification |
| Feature sign-off | All acceptance criteria from requirements.md |

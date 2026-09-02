# Tasks — [Feature Name]

> **Source:** [`requirements.md`](./requirements.md)  
> **Status:** 🟡 Draft | 🟢 Ready | 🔵 In progress | ✅ Complete  
> **Created:** YYYY-MM-DD

Run `/create-tasks` only after Clarification Gate passes (zero open items in requirements.md).

---

## Group A — [Foundation / first dependency group]

### Task 1: [Short title]

| Field | Value |
|-------|-------|
| **Requirement** | REQ-XXX — [requirement title from requirements.md] |
| **Depends on** | — |
| **Description** | [Single, atomic unit of work] |

**Verification:**
- [ ] [Objective, testable criterion]
- [ ] [Objective, testable criterion]

---

### Task 2: [Short title]

| Field | Value |
|-------|-------|
| **Requirement** | REQ-XXX — [requirement title] |
| **Depends on** | Task 1 |
| **Description** | [Single, atomic unit of work] |

**Verification:**
- [ ] [Objective, testable criterion]

---

## Group B — [Next dependency group]

### Task 3: [Short title]

| Field | Value |
|-------|-------|
| **Requirement** | REQ-XXX — [requirement title] |
| **Depends on** | Task 2 |
| **Description** | [Single, atomic unit of work] |

**Verification:**
- [ ] [Objective, testable criterion]

---

## Dependency Graph

```
Task 1 → Task 2 → Task 3 → ...
```

---

## Completion

Feature is complete when:

- [ ] All tasks verified
- [ ] All verification checkboxes checked
- [ ] Implementation matches requirements.md (not just what code happens to do)

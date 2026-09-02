# shape-spec — Structured Feature Shaping

The `shape-spec` process ensures the AI (and team) fully understands a feature **before** writing code. It replaces assumption-driven vibe-coding with structured clarification.

---

## When to Use

Run `shape-spec` (or follow this checklist) whenever:

- Starting a new feature or section
- Scope feels fuzzy or "we'll figure it out as we go"
- Multiple stakeholders need alignment
- AI has been guessing or producing inconsistent output

---

## Conversation Structure

### Phase 1 — Frame the Feature

Answer these before any detail:

1. **What problem does this solve?** (user pain, not technical solution)
2. **Who is the user?** (specific role, not "everyone")
3. **What does success look like?** (measurable outcome)
4. **What is explicitly out of scope?** (boundaries prevent creep)

### Phase 2 — Map the Journey

Walk through the user's path:

1. **Trigger** — What causes the user to need this?
2. **Steps** — What do they do, in order?
3. **Decision points** — Where might paths branch?
4. **End state** — What changed for the user when done?

### Phase 3 — Define Contracts

Make intent executable:

1. **Inputs** — What data enters the system?
2. **Outputs** — What must be produced?
3. **Acceptance criteria** — How do we know it works?
4. **Edge cases** — What happens when things go wrong?

### Phase 4 — Capture Open Items

List anything still unclear:

```markdown
| ID | Question | Status |
|----|----------|--------|
| OI-001 | Should X or Y? | [OPEN] |
```

**Do not proceed until all items are `[RESOLVED]`.**

---

## shape-spec Checklist

Use this when shaping any feature:

- [ ] Problem statement written (1–2 sentences)
- [ ] User role identified
- [ ] Success criteria defined (checkboxes, not vibes)
- [ ] User journey mapped (trigger → steps → end state)
- [ ] Out-of-scope items listed
- [ ] Acceptance criteria written
- [ ] Data contracts sketched (if applicable)
- [ ] Open items logged in `requirements.md`
- [ ] All open items resolved (Clarification Gate passed)

---

## Example — Shaping Section Storage (This Project)

**Problem:** Course learnings scattered across chat sessions are lost and unsearchable.

**User:** Learner progressing through the SDD course.

**Success:** Each section retrievable from the repo without chat history.

**Journey:**
1. Complete a course section
2. Document concepts in `docs/course/section-XX/`
3. Update course index in README
4. Log any new open items in `requirements.md`

**Out of scope (v0.1):** Web UI, database, authentication.

**Open items:** See OI-001 through OI-003 in [`requirements.md`](../../../requirements.md).

---

## Output Artifacts

After a successful `shape-spec` session, you should have:

| Artifact | Location |
|----------|----------|
| User stories | `requirements.md` or section PRD |
| Open items | `requirements.md` → Open Items table |
| User journey | Section docs or PRD |
| Acceptance criteria | Per user story |
| Templates applied | `templates/` |

---

## Anti-Patterns

| ❌ Avoid | ✅ Instead |
|---------|-----------|
| "Just build it and we'll iterate" | Shape first, then build |
| Specs in chat only | Commit specs to the repo |
| "Looks good to me" as done criteria | Write checkboxes |
| Implementation details in user stories | Focus on user goals |
| Skipping open items | Log and resolve every ambiguity |

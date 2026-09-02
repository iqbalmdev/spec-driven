# Course — Spec-Driven Development

**From Vibe-Coding to AI Engineering**

Track progress through each section. Document concepts here; enforce the Clarification Gate in [`requirements.md`](../../requirements.md) before building.

---

## Sections

| # | Title | Folder | Status |
|---|-------|--------|--------|
| 1 | Foundations — From Vibe-Coding to Structured Specs | [section-01-foundations](./section-01-foundations/) | ✅ Done |
| 2 | Task Implementation — From Spec to Tasks | [section-02-task-implementation](./section-02-task-implementation/) | ✅ Done |
| 3 | _TBD_ | — | ⏳ Pending |

---

## Section 1 — Quick Reference

> **What does the spec say should happen — not what does the code happen to do.**

| Concept | Summary |
|---------|---------|
| **Historical lineage** | SDLC → PRDs → TDD → BDD → SDD — each era made specs more executable and aligned |
| **shape-spec** | Structured conversations before code — no assumptions |
| **Clarification Gate** | Zero open items in `requirements.md` before implementation |
| **Version-controlled specs** | Requirements live in the repo, not in chat |
| **Executable intent** | Specs generate tasks, plans, and AI prompts |
| **Development stages** | Specification → Plan → Tasks → Code → Verify |
| **/create-tasks** | Converts clarified specs into atomic tasks.md |
| **Atomic decomposition** | Smallest verifiable units — linked to requirements |
| **User stories** | Goals over implementation; success criteria define "done" |

→ [Full Section 1 docs](./section-01-foundations/README.md)

---

## Adding a New Section

When you complete the next part of the course:

1. Create `docs/course/section-XX-[slug]/`
2. Add `README.md` with concepts, terms, and takeaways
3. Update this index and the root `README.md` progress table
4. Log any new open items in `requirements.md`
5. Resolve open items before implementing related features

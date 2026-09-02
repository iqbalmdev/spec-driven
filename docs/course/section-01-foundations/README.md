# Section 1 — Foundations: From Vibe-Coding to Structured Specs

**Course:** Spec-Driven Development: From Vibe-Coding to AI Engineering  
**Status:** ✅ Documented  
**Added:** 2026-09-02

---

## Overview

Section 1 establishes the foundational mindset shift from **vibe-coding** (prompting AI and hoping for the best) to **AI engineering** (directing AI with clear, executable specifications). The goal is alignment, traceability, and predictable outcomes — not faster guessing.

> **What does the spec say should happen — not what does the code happen to do.**

This is the north star of spec-driven development. Code describes what was built; the spec describes what *must* be built. When they diverge, the spec wins — you fix the code, not rewrite the intent to match accidents.

---



## Historical Lineage — SDLC → PRDs → TDD → BDD → SDD

Spec-Driven Development did not appear in a vacuum. It is the latest step in a long evolution: each era tried to solve the same core problem — **how do we build the right software, prove it works, and keep everyone aligned?** SDD inherits the best of each predecessor and adapts them for the AI era.

### The Line at a Glance

```
SDLC (1960s–)     What process should we follow?
    ↓
PRDs (1990s–)     What should the product do?
    ↓
TDD (1990s–)      Does the code behave correctly?
    ↓
BDD (2000s–)      Does it behave correctly for the user?
    ↓
SDD (2020s–)      Can the spec itself drive AI to build it?
```

---



### 1. SDLC — Software Development Life Cycle

**Era:** 1960s onward (Waterfall formalized ~1970; Agile reactions in 2000s)

SDLC is the **process framework** — the phases software moves through from idea to production.


| Phase (classic) | Purpose                         |
| --------------- | ------------------------------- |
| Requirements    | Capture what is needed          |
| Design          | Plan architecture and structure |
| Implementation  | Write the code                  |
| Testing         | Verify it works                 |
| Deployment      | Ship to users                   |
| Maintenance     | Fix and evolve                  |


**What it solved:** Chaos. Before SDLC, projects had no repeatable process — deadlines slipped, scope ballooned, and nobody knew who decided what.

**Limitations:**

- Heavy upfront planning (Waterfall) could not adapt to change
- Requirements lived in documents **outside** the codebase
- "Working software" and "documented intent" drifted apart over time
- Process described *when* to spec — not *how* to make specs executable

**Legacy SDD inherits:** Phased thinking — understand before you build. The Clarification Gate is SDLC's requirements phase, enforced as a hard stop.

---



### 2. PRDs — Product Requirements Documents

**Era:** 1990s–2000s, popularized by product-led companies (Microsoft, Amazon, etc.)

PRDs answer: **What problem are we solving, for whom, and how do we know we succeeded?**

Typical PRD contents:

- Problem statement and target users
- Goals and non-goals (scope boundaries)
- User stories and use cases
- Success metrics
- Dependencies and open questions

**What it solved:** The "telephone game" between product, design, and engineering. One document became the shared source of truth for *what* to build.

**Limitations:**

- PRDs often lived in **wikis, Notion, or Google Docs** — disconnected from code
- Updated once, then ignored; code evolved, PRD did not
- Written for humans to read, not for machines (or AI) to execute
- Could become long narrative documents with buried acceptance criteria

**Legacy SDD inherits:** Structured intent — problem, users, scope, success criteria. In this repo, `docs/prd/` and `requirements.md` carry that forward, but **inside version control**.

---



### 3. TDD — Test-Driven Development

**Era:** Popularized late 1990s (Kent Beck, *Extreme Programming*)

TDD inverts the build order: **write a failing test first, then write code to pass it.**

```
Red   → Write a test that fails (defines expected behavior)
Green → Write minimal code to pass the test
Refactor → Clean up without breaking the test
```

**What it solved:** "Does the code do what we think?" Tests became **executable specifications at the unit level** — if the test passes, the behavior is proven (for that scope).

**Limitations:**

- Tests describe **implementation behavior**, not always **user intent**
- Easy to write tests that mirror bad code rather than good requirements
- Does not help with *what* to build — only whether a small piece works
- Test suites can become brittle without higher-level spec alignment

**Legacy SDD inherits:** The idea that specs should be **executable**, not just prose. SDD extends executability from unit tests upward — to tasks, plans, and AI prompts.

---



### 4. BDD — Behavior-Driven Development

**Era:** Mid-2000s (Dan North, Chris Matts; tools like Cucumber, SpecFlow)

BDD bridges the gap between business language and code. Specs are written in **given / when / then** scenarios that describe observable user behavior:

```gherkin
Given a learner has completed Section 1
When they open the course index
Then Section 1 appears as documented with status "Done"
```

**What it solved:** TDD's tests were too technical for stakeholders. BDD made specs **readable by product owners** while remaining automatable.

**Limitations:**

- Gherkin files still require tooling and discipline to keep in sync with product intent
- Often focused on acceptance tests, not the full shaping conversation
- Did not anticipate AI as the primary implementer
- Behavior specs could lag behind fast AI-generated code churn

**Legacy SDD inherits:** User-facing language, acceptance criteria, and scenarios. SDD's user stories and success criteria echo BDD — but live in `requirements.md` and feed AI directly.

---



### 5. SDD — Spec-Driven Development

**Era:** 2020s — rise of AI coding assistants and "vibe-coding"

SDD is the response to a new failure mode: **prompting AI without structured specs** and accepting whatever code "happens" to emerge.


| Prior era | Primary question                                                                                     |
| --------- | ---------------------------------------------------------------------------------------------------- |
| SDLC      | What process do we follow?                                                                           |
| PRD       | What should the product do?                                                                          |
| TDD       | Does this unit behave correctly?                                                                     |
| BDD       | Does the user-visible behavior match intent?                                                         |
| **SDD**   | **Is the spec clear, complete, and executable enough for AI (and humans) to build the right thing?** |


**What SDD adds:**

1. **Specs in the repo** — version-controlled alongside code (PRD lesson, fixed)
2. **Clarification Gate** — zero open items before implementation (SDLC requirements phase, enforced)
3. **Executable intent** — specs generate tasks, plans, and prompts (TDD/BDD executability, scaled up)
4. **shape-spec** — structured shaping conversations before any code (fills PRD + BDD gap for AI workflows)
5. **AI as implementer** — the spec is the primary interface to the builder, not just to testers

**The vibe-coding problem SDD solves:**

```
Vibe-coding:  Prompt → Code → "Looks okay?" → Ship → Drift
SDD:          shape-spec → requirements.md → Gate → Tasks → Code → Verify against spec
```

Without SDD, AI accelerates the wrong thing — you get code faster, but not necessarily the *right* code. SDD makes AI speed safe by making intent the bottleneck, not typing.

---



### Evolution Summary


| Approach                          | Artifact                           | Executable?                        | Lives in repo? | Audience              |
| --------------------------------- | ---------------------------------- | ---------------------------------- | -------------- | --------------------- |
| SDLC                              | Process phases                     | No                                 | No             | Project managers      |
| PRD                               | Product document                   | Partially                          | Rarely         | Product + engineering |
| TDD(Test driven development)      | Unit tests                         | Yes (tests)                        | Yes            | Developers            |
| BDD(Behaviour driven development) | Scenario files                     | Yes (scenarios)                    | Yes            | Product + QA + dev    |
| **SDD**                           | **requirements.md + shaped specs** | **Yes (tasks, prompts, criteria)** | **Yes**        | **Humans + AI**       |


SDD is not a rejection of SDLC, PRDs, TDD, or BDD — it **composes** them. You still need process (SDLC), product intent (PRD), provable behavior (TDD/BDD). SDD ensures that intent is captured early, stored where AI and humans can both read it, and enforced before a single line of vibe-coded output ships.

---



## Core Concepts



### 1. Understanding Features First (`shape-spec`)

Before any code is written, the AI must **comprehensively understand the feature**. The `shape-spec` command promotes structured conversations that clarify requirements instead of allowing assumptions.

**What it prevents:**

- AI filling gaps with guesses
- Lost context from unstructured chat
- Rework from misunderstood intent

**What it produces:**

- Documented developer insights and decisions
- Shared understanding among stakeholders
- A spec ready for the Clarification Gate

→ See [shape-spec workflow](./shape-spec.md)

---



### 2. The Clarification Gate

A hard rule: **zero unresolved items** in `requirements.md` before moving forward.


| Gate condition | Meaning                                    |
| -------------- | ------------------------------------------ |
| Open items = 0 | Requirements are clear enough to implement |
| Open items > 0 | Stop. Clarify. Do not code.                |


This eliminates ambiguity and solidifies understanding. It is not bureaucracy — it is the difference between building the right thing and building something fast that misses the point.

**In this repo:** Track open items in `[requirements.md](../../../requirements.md)` under "Open Items (Clarification Gate)".

---



### 3. Version-Controlled Specifications

`requirements.md` is a **living document inside the repository**, version-controlled like any other code file.

**Why it matters:**

- Specs are the system of record — not chat logs, not Slack threads
- Changes are auditable via git history
- Team members (and future you) always know *what* the software should do
- AI assistants can read the repo and align with documented intent

---



### 4. Executable Intent

Specifications must be **thorough enough to drive action automatically**:

- Generate task lists
- Create project plans
- Produce AI prompts that execute rather than guess

**Requirements for executable specs:**


| Element             | Purpose                                |
| ------------------- | -------------------------------------- |
| User journeys       | Map how users move through the feature |
| Acceptance criteria | Define "done" objectively              |
| Data contracts      | Specify inputs, outputs, and schemas   |
| Success criteria    | Measure completion without ambiguity   |


A spec that cannot generate a task list is not executable — it is a wish.

---



### 5. User Stories and Success Criteria

**User stories** focus on **goals**, not implementation:

```markdown
As a [role],
I want [capability],
So that [outcome/benefit].
```

**Bad (implementation-focused):**

> As a user, I want a React modal with a form so that I can submit data.

**Good (goal-focused):**

> As a learner, I want to capture section notes in a structured format so that I can revisit concepts without searching chat history.

**Success criteria** define when a feature is **complete** — checkboxes, measurable outcomes, no subjective "looks good."

→ See `[templates/user-story.md](../../../templates/user-story.md)`

---



## Workflow Summary

```
┌─────────────────┐
│  Feature idea   │
└────────┬────────┘
         ▼
┌─────────────────┐
│   shape-spec    │  Structured conversation — clarify, don't assume
└────────┬────────┘
         ▼
┌─────────────────┐
│ requirements.md │  Living doc — user stories, criteria, open items
└────────┬────────┘
         ▼
┌─────────────────┐
│ Clarification   │  Gate: open items = 0 ?
│     Gate        │
└────────┬────────┘
         │ yes
         ▼
┌─────────────────┐
│  Generate tasks │  Plans, prompts, implementation
│  & implement    │
└─────────────────┘
```

---



## Key Terms


| Term                   | Definition                                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------------------------- |
| **SDLC**               | Software Development Life Cycle — phased process from requirements to maintenance                     |
| **PRD**                | Product Requirements Document — structured description of what to build and why                       |
| **TDD**                | Test-Driven Development — write failing tests first, then code to pass them                           |
| **BDD**                | Behavior-Driven Development — user-facing given/when/then scenarios as executable specs               |
| **SDD**                | Spec-Driven Development — version-controlled, executable specs that drive AI and human implementation |
| **Vibe-coding**        | Prompting AI without structured specs; outcomes depend on luck and iteration                          |
| **AI Engineering**     | Directing AI with clear, executable specifications for predictable results                            |
| **shape-spec**         | Structured conversation command/process to clarify feature requirements                               |
| **Clarification Gate** | Blocker requiring zero open items in requirements before implementation                               |
| **Executable intent**  | Specs detailed enough to auto-generate tasks, plans, and prompts                                      |
| **Living document**    | A spec that evolves with the project, tracked in version control                                      |


---



## Practical Takeaways

1. **Spec over code.** Ask what the spec says should happen — not what the code happens to do.
2. **SDD stands on shoulders.** SDLC, PRDs, TDD, and BDD each solved part of the problem — SDD composes them for the AI era.
3. **Never skip shaping.** A 15-minute spec conversation saves hours of rework.
4. **Specs live in the repo.** If it is not in git, it does not exist.
5. **Open items are stop signs.** Resolve them before coding.
6. **Write for execution.** If AI cannot generate a task from your spec, rewrite it.
7. **Stories describe goals.** Let implementation emerge from clear intent.

---



## Files in This Section


| File                             | Description                       |
| -------------------------------- | --------------------------------- |
| [README.md](./README.md)         | This overview                     |
| [shape-spec.md](./shape-spec.md) | shape-spec workflow and checklist |


---



## Next Steps

- Resolve open items in `[requirements.md](../../../requirements.md)`
- Proceed to Section 2 when available
- Apply templates when shaping the next feature


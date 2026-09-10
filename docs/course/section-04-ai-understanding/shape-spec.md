# shape-spec — Deep Dive (Section 4)

Section 4 reinforces shape-spec as the **mandatory first step** before AI writes code.

---

## The Problem

Without shape-spec, AI:
- Fills requirement gaps with assumptions
- Loses context between chat sessions
- Produces code that "happens" to work but misses intent

---

## Structured Conversation Flow

### 1. Frame the feature
- What problem? (user pain)
- Who is the user? (specific role)
- What does success look like? (measurable)
- What is out of scope?

### 2. Map the journey
- Trigger → steps → decision points → end state

### 3. Define contracts
- Inputs, outputs, acceptance criteria, edge cases
- Draft acceptance criteria using **EARS** patterns:

| Pattern Type | Template |
|--------------|----------|
| Ubiquitous | The system shall… |
| Event-Driven | When \<trigger\>, the system shall… |
| State-Driven | While \<in a specific state\>, the system shall… |
| Optional Feature | Where \<feature is included\>, the system shall… |
| Unwanted Behavior | If \<condition\>, then the system shall… |

### 4. Capture open items
- Log in requirements.md with `[OPEN]`
- Do not proceed until `[RESOLVED]`

---

## Output

After shape-spec:
- Updated requirements.md
- Zero open items (Clarification Gate ready)
- Documented decisions — not chat-only context

---

## Anti-patterns

| Avoid | Instead |
|-------|---------|
| "Just build it" | Run shape-spec first |
| Decisions in Slack only | Commit to requirements.md |
| Subjective "done" | Checkbox acceptance criteria |

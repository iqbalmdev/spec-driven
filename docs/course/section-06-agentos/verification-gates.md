# Section 6 · Lesson 2 — Verification Gates

Transcript: harness AI coding speed without sacrificing quality or safety.

## Arc

1. **Agent's dilemma** — speed vs correctness; misunderstood intent accelerates the wrong direction.
2. **Philosophy of gates** — hard stops, not suggestions; conditions before progress.
3. **Roles** — human architect; AI executor within boundaries.
4. **Upstream** — **Spec gate** (checklist below). **Plan gate** (constitution, simplicity, contracts, local test plan).

### Spec Gate Checklist

- All acceptance criteria have verification
- All success metrics are measurable
- All assumptions are explicit
- No `[NEEDS CLARIFICATION]` markers remain
- All "do not" constraints are listed

5. **Downstream** — **Task gate** (atomic micro-PRs, verifiable, traceable). **Runtime gate** (continuous drift vs spec).
6. **Spec-first on drift** — update spec before patching code.
7. **CI** — merge blockers for traceability and verification.

## App

`/course/section-06/verification-gates`

## Related

- Section 4 — Clarification Gate, constitution, approval tiers
- Section 5 — MCP runtime evidence
- Section 2 — Atomic tasks

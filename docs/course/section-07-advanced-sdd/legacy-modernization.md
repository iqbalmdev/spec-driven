# Section 7 · Lesson 3 — Legacy Modernization

Recover lost intent, then replace the system incrementally.

## Arc

1. **The scare** — critical legacy nobody will touch; rewrites often fail
2. **Modernization trap** — energy on the how (code) without the what and why
3. **Intent decay** — people leave, docs stale, only code remains; patch culture
4. **AI rewrite illusion** — new code that demos well and collapses in production
5. **Flip the record** — spec, not code, is the system of record (SDD)
6. **Archaeology** — map behaviour → characterization tests → spec.md
7. **Spec contents** — invariants (when/then), scenarios, do-not list
8. **Strangler Fig** — surround, reroute, strangle, turn off
9. **Agent pipeline** — draft spec → plan & contracts → tasks → implement with guardrails
10. **Cases** — Airbnb ~18 months estimated → 6 weeks; Google ~50% time reduction
11. **Done** — contract tests, golden tests, traffic replay; conformance, not compile

## App

`/course/section-07/legacy-modernization`

## Related

- Section 6 — living specs, verification gates, expert crew
- Section 7 Lesson 1 — spec-first debugging (evidence before guesswork)

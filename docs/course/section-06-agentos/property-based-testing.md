# Section 6 · Lesson 3 — Property-Based Testing

Transcript: prove logic holds for any valid input — not just hand-picked examples.

## Topics

1. **Example-based limits** — coverage ≠ correctness; spot-checking vs universal rules
2. **Properties** — invariants that must never break
3. **Counter-example engine** — empty strings, emoji, limits, thousands of trials
4. **EARS → invariant** — precise when/then → always-true rule (e.g. unauthenticated → 401)
5. **Shrinking** — minimal failing input (e.g. order quantity 0)
6. **Six-step recipe** — EARS criteria → group invariants → generators → Hypothesis/FastCheck → shrink/replay → CI gate

## App

`/course/section-06/property-based-testing`

## Related

- Lesson 1 — test-first gate, example vs property intro
- Lesson 2 — CI enforcement
- Section 5 — EARS in Kiro

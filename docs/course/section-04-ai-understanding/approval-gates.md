# Approval Gates — Tier System

Three tiers govern what AI and developers can do autonomously vs what needs human approval.

---

## Tier One — Always Do

Safe defaults. Proceed without asking.

- Run unit tests / build verification
- Update spec, plan, or tasks.md after verified work
- Follow constitution and naming conventions
- Keep PRs small and scoped to one task

---

## Tier Two — Ask First (Approval Gates)

Significant but not clearly wrong. **Human verification required.**

| Action | Why it needs approval |
|--------|----------------------|
| Add dependencies | Bundle, security, maintenance impact |
| Change DB schema | Structural, migration risk |
| Change public API | Breaks consumers |
| Refactor core modules | Wide blast radius |

**Process:**
1. Identify Tier Two action
2. Document rationale (PR description or open item)
3. Human reviews and approves
4. Proceed only after explicit approval

---

## Tier Three — Never Do

Hard bans. Block immediately — no approval overrides.

- Read or expose secrets
- Bypass authentication
- Log sensitive data (passwords, tokens, PII)

---

## Decision flow

```
Action proposed
    ↓
Tier Three? → BLOCK
    ↓
Tier Two? → ASK HUMAN → approved? → proceed : wait
    ↓
Tier One → PROCEED
```

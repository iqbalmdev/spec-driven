# constitution.md — Team Rules

> Balances **organizational consistency** with **project-level flexibility**.  
> Version-controlled in the repository alongside requirements.md.

**Last updated:** YYYY-MM-DD

---

## Organization Rules (Consistency)

Rules that apply across all projects in the organization.

| Rule | Tier |
|------|------|
| Never log passwords, tokens, or PII | Never Do |
| All PRs require at least one review | Always Do |
| Use conventional commit messages | Always Do |
| Add dependencies only with approval | Ask First (Tier Two) |

---

## Project Rules (Flexibility)

Rules specific to this repository.

| Rule | Value |
|------|-------|
| Stack | Next.js + TypeScript + Tailwind |
| Verify build | `npm run build` |
| Dev server | `npm run dev` |
| Spec file | `requirements.md` |
| Task file | `tasks.md` |

---

## Tier System

### Tier One — Always Do
- Run tests after implementation
- Update spec/plan when scope changes
- Follow naming conventions
- Keep PRs small and task-scoped

### Tier Two — Ask First (Approval Gates)
- Add dependencies
- Change database schema
- Change public API contracts
- Refactor core/shared modules

### Tier Three — Never Do
- Read or expose secrets
- Bypass authentication checks
- Log sensitive data

---

## Approval Process (Tier Two)

1. AI or developer identifies Tier Two action
2. Document rationale in PR or open item
3. Human reviews and approves
4. Proceed only after explicit approval

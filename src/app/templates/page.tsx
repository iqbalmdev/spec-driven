import { PageHeader, Card } from "@/components/ui/layout";

const userStoryTemplate = `## US-XXX — [Short title]

**As a** [specific role],
**I want** [capability or outcome],
**So that** [benefit — why this matters].

### Acceptance Criteria
- [ ] Criterion 1 — objective, testable
- [ ] Criterion 2

### Out of Scope
- Explicitly excluded items`;

const requirementsTemplate = `# Requirements — [Project / Feature Name]

> Living document. Zero open items before implementation.

## Vision
One paragraph: what this is and why it exists.

## Open Items (Clarification Gate)
| ID | Question | Status |
|----|----------|--------|
| OI-001 | _Question_ | [OPEN] |

## User Stories
<!-- Copy from user-story template -->`;

export default function TemplatesPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Reusable"
        title="Templates"
        description="Start every feature with structured intent. Copy these into requirements.md or a section PRD."
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">User Story</h2>
        <p className="text-sm text-muted">Goals, not implementation. Checkboxes for done.</p>
        <Card className="overflow-x-auto">
          <pre className="text-xs font-mono leading-relaxed text-muted whitespace-pre-wrap">{userStoryTemplate}</pre>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Requirements</h2>
        <p className="text-sm text-muted">Living document with Clarification Gate built in.</p>
        <Card className="overflow-x-auto">
          <pre className="text-xs font-mono leading-relaxed text-muted whitespace-pre-wrap">{requirementsTemplate}</pre>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tasks (Section 2)</h2>
        <p className="text-sm text-muted">Atomic tasks with dependency order, requirement links, and verification — after Clarification Gate passes.</p>
        <Card className="overflow-x-auto">
          <pre className="text-xs font-mono leading-relaxed text-muted whitespace-pre-wrap">{`### Task 1: [Title]

| Field | Value |
|-------|-------|
| **Requirement** | REQ-XXX — [title] |
| **Depends on** | — or Task N |
| **Description** | [Atomic unit of work] |

**Verification:**
- [ ] [Objective criterion]`}</pre>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Guidelines</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Write goals, not implementation details",
            "One story, one outcome — split large features",
            "Checkboxes for done — no subjective completion",
            "Log open items — unresolved questions block the gate",
          ].map((g) => (
            <Card key={g} className="text-sm leading-relaxed">
              {g}
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">AgentOS memory (Section 6)</h2>
        <p className="text-sm text-muted">
          Persistent project context — plan, roadmap, and stack — so AI assistants reload focus every session.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {["plan.md", "roadmap.md", "techstack.md"].map((file) => (
            <Card key={file} className="text-sm">
              <code className="font-mono text-accent">{file}</code>
              <p className="text-muted mt-2 text-xs">See templates/{file} in the repo</p>
            </Card>
          ))}
        </div>
      </section>

      <Card className="text-sm text-muted">
        Full templates also live in the repo at{" "}
        <code className="font-mono text-foreground">templates/user-story.md</code>,{" "}
        <code className="font-mono text-foreground">templates/requirements.md</code>,{" "}
        <code className="font-mono text-foreground">templates/tasks.md</code>, and AgentOS{" "}
        <code className="font-mono text-foreground">templates/plan.md</code>,{" "}
        <code className="font-mono text-foreground">roadmap.md</code>,{" "}
        <code className="font-mono text-foreground">techstack.md</code>.
      </Card>
    </div>
  );
}

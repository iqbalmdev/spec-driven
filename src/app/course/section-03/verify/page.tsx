import Link from "next/link";
import { featureCompletionCriteria, messagingImplementationTasks } from "@/content/section-03";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Badge, Card } from "@/components/ui/layout";

export default function VerifyPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 3 · Verify"
        title="Per-Task Verification & Feature Sign-Off"
        description="Verification is the gate between tasks — not optional QA at the end. Every checkbox must pass before advancing."
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Two Levels of Verification</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="space-y-2">
            <Badge variant="accent">Per-task</Badge>
            <h3 className="font-semibold">Task verification checkboxes</h3>
            <p className="text-sm text-muted leading-relaxed">
              Defined in tasks.md for each atomic task. Must pass before the next task unlocks. Run after every implementation.
            </p>
          </Card>
          <Card className="space-y-2">
            <Badge variant="success">Feature-level</Badge>
            <h3 className="font-semibold">Acceptance criteria</h3>
            <p className="text-sm text-muted leading-relaxed">
              From user stories in requirements.md. Run once all tasks are verified. Defines feature complete.
            </p>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Verification Flow</h2>
        <Card className="overflow-x-auto">
          <pre className="text-xs font-mono leading-relaxed text-muted whitespace-pre-wrap">{`Implement Task N
    ↓
Run task verification checkboxes
    ↓
All pass? ──no──→ Fix code → re-verify
    │
   yes
    ↓
Mark Task N complete
    ↓
More tasks? ──yes──→ Task N+1
    │
   no
    ↓
Run acceptance criteria from requirements.md
    ↓
Feature complete ✓`}</pre>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Messaging Example — All Task Verifications</h2>
        <div className="space-y-4">
          {messagingImplementationTasks.map((task) => (
            <Card key={task.id} className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="accent">Task {task.id}</Badge>
                <span className="text-sm font-medium">{task.title}</span>
              </div>
              <ul className="space-y-1.5">
                {task.verification.map((v) => (
                  <li key={v} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-0.5 h-4 w-4 shrink-0 rounded border border-border" aria-hidden />
                    {v}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Feature Completion Criteria</h2>
        <Card>
          <ul className="space-y-2">
            {featureCompletionCriteria.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded border border-border" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <Card className="bg-accent-soft border-accent/20">
        <p className="text-sm font-medium leading-relaxed">
          What does the spec say should happen — not what does the code happen to do.
          If verification fails, fix the code. Never rewrite the spec to match accidents.
        </p>
      </Card>

      <Card className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/course/section-03/implement" className="text-sm text-accent hover:underline">
          ← /implement workflow
        </Link>
        <Link href="/course/section-03" className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background">
          Back to Section 3
        </Link>
      </Card>

      <SectionPager slug="section-03" />
    </div>
  );
}

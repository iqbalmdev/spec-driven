import Link from "next/link";
import { tasksMdStructure, messagingExampleTasks } from "@/content/section-02";
import { TaskDecompositionDemo } from "@/components/task-decomposition";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Badge, Card } from "@/components/ui/layout";

export default function TasksMdPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 2 · tasks.md"
        title="tasks.md Structure"
        description="Version-controlled task file — grouped by dependency, linked to requirements, with verification steps per task."
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Three Pillars</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {tasksMdStructure.map((pillar) => (
            <Card key={pillar.id} className="space-y-3">
              <h3 className="font-semibold">{pillar.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{pillar.description}</p>
              <code className="block text-xs font-mono bg-surface-elevated rounded-lg px-3 py-2 text-muted">
                {pillar.example}
              </code>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Full Task List — Messaging Example</h2>
        <div className="space-y-4">
          {messagingExampleTasks.map((task) => (
            <Card key={task.id} className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent">Task {task.id}</Badge>
                <span className="text-xs text-muted">{task.group}</span>
              </div>
              <h3 className="font-semibold">{task.title}</h3>
              <div className="grid gap-2 sm:grid-cols-2 text-sm">
                <p><span className="text-muted">Requirement:</span> {task.requirement}</p>
                <p><span className="text-muted">Depends on:</span> {task.dependsOn ?? "—"}</p>
              </div>
              <p className="text-sm text-muted">{task.description}</p>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted mb-2">Verification</p>
                <ul className="space-y-1">
                  {task.verification.map((v) => (
                    <li key={v} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 h-4 w-4 shrink-0 rounded border border-border" aria-hidden />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <TaskDecompositionDemo />

      <Card className="text-sm text-muted">
        Template available at{" "}
        <code className="font-mono text-foreground">templates/tasks.md</code> in the repository.
      </Card>

      <Card className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/course/section-02" className="text-sm text-accent hover:underline">
          ← Back to Section 2
        </Link>
        <Link href="/templates" className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background">
          View all templates →
        </Link>
      </Card>

      <SectionPager slug="section-02" />
    </div>
  );
}

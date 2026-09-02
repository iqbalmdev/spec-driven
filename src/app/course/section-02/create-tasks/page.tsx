import Link from "next/link";
import { createTasksSteps } from "@/content/section-02";
import { RiskMatrix } from "@/components/risk-matrix";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Card } from "@/components/ui/layout";

const antiPatterns = [
  { bad: '"Build messaging feature"', good: '"Design message data structure"' },
  { bad: "Tasks with no requirement link", good: "Every task → REQ-XXX" },
  { bad: "No verification steps", good: "Checkbox criteria per task" },
  { bad: "Flat unordered list", good: "Groups by dependency" },
  { bad: "tasks.md in chat only", good: "Commit tasks.md to repo" },
  { bad: "/create-tasks before gate passes", good: "Resolve open items first" },
];

export default function CreateTasksPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 2 · /create-tasks"
        title="From Spec to Actionable Tasks"
        description="The /create-tasks command transforms a clarified specification into an ordered, traceable tasks.md file ready for implementation."
      />

      <Card className="bg-amber-500/5 border-amber-500/20">
        <p className="text-sm font-medium">Prerequisite</p>
        <p className="text-sm text-muted mt-1 leading-relaxed">
          Clarification Gate passed — zero open items in requirements.md. User stories and acceptance criteria written.
        </p>
      </Card>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Command Workflow</h2>
        {createTasksSteps.map((s) => (
          <Card key={s.step} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
              {s.step}
            </span>
            <div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted leading-relaxed">{s.detail}</p>
            </div>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Atomic Decomposition Checklist</h2>
        <Card>
          <ul className="space-y-2 text-sm">
            {[
              "Task title describes one outcome, not a whole feature",
              "Task can be verified without completing other tasks (or lists dependency)",
              "Task links to exactly one primary requirement",
              "Verification steps are checkboxes, not prose",
              "Task is small enough for one PR or one AI session",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 py-1.5">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded border border-border" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <RiskMatrix />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Anti-Patterns</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-elevated/50">
                <th className="px-4 py-3 text-left font-medium text-red-600/80 dark:text-red-400">Avoid</th>
                <th className="px-4 py-3 text-left font-medium text-emerald-700 dark:text-emerald-400">Instead</th>
              </tr>
            </thead>
            <tbody>
              {antiPatterns.map((row) => (
                <tr key={row.bad} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 text-muted">{row.bad}</td>
                  <td className="px-4 py-3">{row.good}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Card className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/course/section-02" className="text-sm text-accent hover:underline">
          ← Back to Section 2
        </Link>
        <Link href="/course/section-02/tasks" className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background">
          View tasks.md example →
        </Link>
      </Card>

      <SectionPager slug="section-02" />
    </div>
  );
}

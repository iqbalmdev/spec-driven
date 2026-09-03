import Link from "next/link";
import { implementWorkflowSteps, implementationAntiPatterns } from "@/content/section-03";
import { ProjectConstitution } from "@/components/project-constitution";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Card } from "@/components/ui/layout";

export default function ImplementPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 3 · /implement"
        title="Executing Tasks Against the Spec"
        description="One atomic task at a time — scoped to its linked requirement, verified before advancing to the next."
      />

      <Card className="bg-accent-soft border-accent/20">
        <p className="text-sm font-medium">Scope rule</p>
        <p className="text-sm text-muted mt-1 leading-relaxed">
          Never prompt AI with &quot;build the whole feature.&quot; Always: &quot;Implement Task N from tasks.md, Requirement REQ-XXX.&quot;
        </p>
      </Card>

      <ProjectConstitution />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Workflow</h2>
        {implementWorkflowSteps.map((s) => (
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
        <h2 className="text-xl font-semibold">Example Prompt (Task 2)</h2>
        <Card className="overflow-x-auto">
          <pre className="text-xs font-mono leading-relaxed text-muted whitespace-pre-wrap">{`Implement Task 2 from tasks.md:
- Requirement: REQ-001 — User roles
- Description: Sender can compose and dispatch a message...
- Do NOT implement Task 3 or beyond.
- Verification steps:
  - [ ] Sender can create a message with receiverId and body
  - [ ] Message not persisted until delivery confirmed
  - [ ] Receiver can fetch the message after send

Commit as: feat(messaging): implement send message (Task 2, REQ-001)`}</pre>
        </Card>
      </section>

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
              {implementationAntiPatterns.map((row) => (
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
        <Link href="/course/section-03" className="text-sm text-accent hover:underline">
          ← Back to Section 3
        </Link>
        <Link href="/course/section-03/verify" className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background">
          Verification guide →
        </Link>
      </Card>

      <SectionPager slug="section-03" />
    </div>
  );
}

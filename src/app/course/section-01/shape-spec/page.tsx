import Link from "next/link";
import { shapeSpecPhases } from "@/content/course";
import { PageHeader, Badge, Card } from "@/components/ui/layout";

const checklist = [
  "Problem statement written (1–2 sentences)",
  "User role identified",
  "Success criteria defined (checkboxes, not vibes)",
  "User journey mapped (trigger → steps → end state)",
  "Out-of-scope items listed",
  "Acceptance criteria written",
  "Data contracts sketched (if applicable)",
  "Open items logged in requirements.md",
  "All open items resolved (Clarification Gate passed)",
];

const antiPatterns = [
  { bad: "Just build it and we'll iterate", good: "Shape first, then build" },
  { bad: "Specs in chat only", good: "Commit specs to the repo" },
  { bad: '"Looks good to me" as done criteria', good: "Write checkboxes" },
  { bad: "Implementation details in user stories", good: "Focus on user goals" },
  { bad: "Skipping open items", good: "Log and resolve every ambiguity" },
];

export default function ShapeSpecPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 1 · shape-spec"
        title="Structured Feature Shaping"
        description="Ensure the AI and team fully understand a feature before writing code. Replace assumption-driven vibe-coding with structured clarification."
      />

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Conversation Phases</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {shapeSpecPhases.map((phase) => (
            <Card key={phase.phase} className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="accent">Phase {phase.phase}</Badge>
                <h3 className="font-semibold">{phase.title}</h3>
              </div>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted leading-relaxed">
                    <span className="text-accent shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Checklist</h2>
        <Card>
          <ul className="space-y-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 py-2 border-b border-border last:border-0 text-sm">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded border border-border" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
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
        <Link href="/course/section-01" className="text-sm text-accent hover:underline">
          ← Back to Section 1
        </Link>
        <Link
          href="/requirements"
          className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background"
        >
          Open requirements.md →
        </Link>
      </Card>
    </div>
  );
}

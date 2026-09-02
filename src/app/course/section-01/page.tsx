import Link from "next/link";
import { practicalTakeaways, keyTerms, NORTH_STAR } from "@/content/course";
import { LineageTimeline } from "@/components/lineage-timeline";
import { DevelopmentStages } from "@/components/development-stages";
import { WorkflowDiagram } from "@/components/workflow-diagram";
import { PageHeader, QuoteBlock, Badge, Card } from "@/components/ui/layout";

export default function SectionOnePage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Section 1"
        title="Foundations"
        description="From Vibe-Coding to Structured Specs — the mindset shift, historical lineage, and core practices of Spec-Driven Development."
      />

      <QuoteBlock>{NORTH_STAR}</QuoteBlock>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-muted leading-relaxed max-w-3xl">
          Section 1 establishes the foundational mindset shift from vibe-coding (prompting AI and hoping
          for the best) to AI engineering (directing AI with clear, executable specifications). The goal
          is alignment, traceability, and predictable outcomes — not faster guessing.
        </p>
        <p className="text-sm text-muted leading-relaxed max-w-3xl">
          When spec and code diverge, the spec wins — you fix the code, not rewrite the intent to match accidents.
        </p>
      </section>

      <LineageTimeline />

      <DevelopmentStages />

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Core Concepts</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "shape-spec",
              body: "Structured conversations before code. Clarify requirements — no assumptions.",
              href: "/course/section-01/shape-spec",
            },
            {
              title: "Clarification Gate",
              body: "Zero unresolved items in requirements.md before implementation begins.",
              href: "/requirements",
            },
            {
              title: "Version-Controlled Specs",
              body: "requirements.md lives in the repo — the system of record, not chat logs.",
              href: "/requirements",
            },
            {
              title: "Executable Intent",
              body: "Specs generate tasks, plans, and AI prompts — not wishes.",
              href: "/workflow",
            },
            {
              title: "User Stories",
              body: "Goals over implementation. Success criteria define done objectively.",
              href: "/templates",
            },
          ].map((c) => (
            <Link key={c.title} href={c.href} className="group">
              <Card hover className="h-full space-y-2">
                <h3 className="font-semibold group-hover:text-accent transition-colors">{c.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.body}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">User Story Example</h2>
        <Card className="space-y-4 font-mono text-sm">
          <div className="space-y-1 text-muted">
            <p className="text-red-600/80 dark:text-red-400 line-through">
              Bad: As a user, I want a React modal with a form so that I can submit data.
            </p>
            <p className="text-emerald-700 dark:text-emerald-400">
              Good: As a learner, I want to capture section notes in a structured format so that I can revisit concepts without searching chat history.
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Workflow</h2>
        <Card>
          <WorkflowDiagram interactive />
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Key Terms</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-elevated/50">
                <th className="px-4 py-3 text-left font-medium">Term</th>
                <th className="px-4 py-3 text-left font-medium">Definition</th>
              </tr>
            </thead>
            <tbody>
              {keyTerms.map((t, i) => (
                <tr key={t.term} className={i % 2 === 0 ? "" : "bg-surface-elevated/30"}>
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{t.term}</td>
                  <td className="px-4 py-3 text-muted">{t.definition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Practical Takeaways</h2>
        <ol className="space-y-3">
          {practicalTakeaways.map((t, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                {i + 1}
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ol>
      </section>

      <Card className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-medium">Next: shape-spec workflow</p>
          <p className="text-sm text-muted">Structured feature shaping checklist and phases.</p>
        </div>
        <Link
          href="/course/section-01/shape-spec"
          className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background"
        >
          Open shape-spec →
        </Link>
      </Card>
    </div>
  );
}

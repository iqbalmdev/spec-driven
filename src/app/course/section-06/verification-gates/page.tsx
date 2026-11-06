import Link from "next/link";
import {
  agentsDilemmaTradeoffs,
  ciGateEnforcement,
  planGateChecklist,
  runtimeDriftSteps,
  section06Lesson2Sections,
  specGateChecklist,
  taskGateChecklist,
  verificationGatesOverview,
} from "@/content/section-06";
import { SectionPager } from "@/components/course-nav";
import { LessonPractice } from "@/components/practice/lesson-practice";
import { PageHeader, Badge, Card, QuoteBlock } from "@/components/ui/layout";
import { CheckCircle2 } from "lucide-react";

export default function VerificationGatesPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 6 · Lesson 2"
        title="Verification Gates — Speed Without Sacrificing Safety"
        description="Harness AI velocity with hard-stop checkpoints: upstream spec and plan gates, downstream task and runtime gates, spec-first drift correction, and CI that makes quality mandatory."
      />

      <QuoteBlock>
        Your AI is unbelievably fast — but is it right? Gates turn governance from afterthought into guarantee.
      </QuoteBlock>

      {section06Lesson2Sections.map((section) => (
        <section key={section.id} className="space-y-3 max-w-3xl">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <p className="text-muted leading-relaxed">{section.body}</p>
        </section>
      ))}

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">The agent&apos;s dilemma</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-elevated/50">
                <th className="px-4 py-3 text-left font-medium">Strength</th>
                <th className="px-4 py-3 text-left font-medium">Hidden cost</th>
              </tr>
            </thead>
            <tbody>
              {agentsDilemmaTradeoffs.map((row, i) => (
                <tr key={row.strength} className={i % 2 === 0 ? "" : "bg-surface-elevated/30"}>
                  <td className="px-4 py-3 font-medium">{row.strength}</td>
                  <td className="px-4 py-3 text-muted">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Four verification gates</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {verificationGatesOverview.map((gate) => (
            <Card key={gate.id} className="space-y-2 h-full">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={gate.phase === "Upstream" ? "accent" : "default"}>{gate.phase}</Badge>
                <p className="font-medium text-sm">{gate.name}</p>
              </div>
              <p className="text-sm text-muted leading-relaxed">{gate.purpose}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Gate checklists</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="space-y-3">
            <p className="font-medium text-sm">Spec gate</p>
            <p className="text-xs text-muted">First line of defense — freeze intent before architecture (Spec Gate Checklist).</p>
            <ul className="space-y-2">
              {specGateChecklist.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/course/section-04/gate" className="text-xs font-medium text-accent hover:underline">
              Clarification Gate (Section 4) →
            </Link>
          </Card>
          <Card className="space-y-3">
            <p className="font-medium text-sm">Plan gate</p>
            <p className="text-xs text-muted">Architectural review before any implementation code.</p>
            <ul className="space-y-2">
              {planGateChecklist.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/course/section-04/constitution" className="text-xs font-medium text-accent hover:underline">
              constitution.md (Section 4) →
            </Link>
          </Card>
          <Card className="space-y-3">
            <p className="font-medium text-sm">Task gate</p>
            <p className="text-xs text-muted">Every agent-produced chunk — micro PRs only.</p>
            <ul className="space-y-2">
              {taskGateChecklist.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/course/section-02/create-tasks" className="text-xs font-medium text-accent hover:underline">
              /create-tasks (Section 2) →
            </Link>
          </Card>
        </div>
      </section>

      <Card className="border-amber-500/25 bg-amber-500/5 space-y-3 max-w-3xl">
        <p className="font-medium text-sm">Runtime gate — drift detection loop</p>
        <ol className="space-y-2 list-decimal list-inside text-sm text-muted leading-relaxed">
          {runtimeDriftSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <Link href="/course/section-05/mcp" className="text-sm font-medium text-accent hover:underline">
          Runtime evidence with MCP (Section 5) →
        </Link>
      </Card>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Enforce gates in CI</h2>
        <ul className="grid gap-2 sm:grid-cols-2 max-w-4xl">
          {ciGateEnforcement.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted leading-relaxed">
              <span className="text-accent">▸</span>
              {item}
            </li>
          ))}
        </ul>
        <Link href="/course/section-04/approval-gates" className="text-sm font-medium text-accent hover:underline">
          Tier Two approval gates →
        </Link>
      </section>

      <LessonPractice lessonId="section-06/verification-gates" />

      <SectionPager slug="section-06" />
    </div>
  );
}

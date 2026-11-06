import Link from "next/link";
import {
  earsToInvariantExamples,
  exampleVsPropertyMindset,
  pbtCounterExampleExample,
  pbtFrameworks,
  pbtSixStepRecipe,
  section06Lesson3Sections,
} from "@/content/section-06";
import { SectionPager } from "@/components/course-nav";
import { LessonPractice } from "@/components/practice/lesson-practice";
import { PageHeader, Badge, Card, QuoteBlock } from "@/components/ui/layout";

export default function PropertyBasedTestingPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 6 · Lesson 3"
        title="Property-Based Testing — Prove the Rules"
        description="Go beyond example tests — define system invariants from EARS requirements, let counter-example engines and shrinking find the bugs you would never write by hand."
      />

      <QuoteBlock>What are your system&apos;s non-negotiable truths — and are you ready to prove them?</QuoteBlock>

      {section06Lesson3Sections.map((section) => (
        <section key={section.id} className="space-y-3 max-w-3xl">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <p className="text-muted leading-relaxed">{section.body}</p>
        </section>
      ))}

      <section className="grid gap-4 sm:grid-cols-2 max-w-4xl">
        <Card className="border-border space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">Example-based</p>
          <p className="text-sm text-muted leading-relaxed">{exampleVsPropertyMindset.example}</p>
        </Card>
        <Card className="border-accent/20 bg-accent/5 space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">Property-based</p>
          <p className="text-sm text-muted leading-relaxed">{exampleVsPropertyMindset.property}</p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">EARS → system invariant</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-elevated/50">
                <th className="px-4 py-3 text-left font-medium">Theme</th>
                <th className="px-4 py-3 text-left font-medium">EARS requirement</th>
                <th className="px-4 py-3 text-left font-medium">Invariant</th>
              </tr>
            </thead>
            <tbody>
              {earsToInvariantExamples.map((row, i) => (
                <tr key={row.theme} className={i % 2 === 0 ? "" : "bg-surface-elevated/30"}>
                  <td className="px-4 py-3">
                    <Badge variant="accent">{row.theme}</Badge>
                  </td>
                  <td className="px-4 py-3 text-muted leading-relaxed">{row.ears}</td>
                  <td className="px-4 py-3 leading-relaxed">{row.invariant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href="/course/section-05/kiro" className="text-sm font-medium text-accent hover:underline">
          EARS in Amazon Kiro (Section 5) →
        </Link>
      </section>

      <Card className="border-red-500/15 bg-red-500/5 space-y-3 max-w-3xl">
        <p className="font-medium text-sm">Counter-example found</p>
        <p className="text-sm text-muted">
          <span className="font-medium text-foreground">Rule:</span> {pbtCounterExampleExample.rule}
        </p>
        <p className="text-sm text-muted leading-relaxed">{pbtCounterExampleExample.finding}</p>
        <p className="text-sm text-muted leading-relaxed">{pbtCounterExampleExample.shrunk}</p>
      </Card>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Six-step recipe</h2>
        <ol className="space-y-3 max-w-3xl">
          {pbtSixStepRecipe.map((item) => (
            <li key={item.step}>
              <Card className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {item.step}
                </span>
                <div className="space-y-1">
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Frameworks</h2>
        <div className="grid gap-3 sm:grid-cols-2 max-w-3xl">
          {pbtFrameworks.map((row) => (
            <Card key={row.tool} className="space-y-1">
              <p className="font-mono text-sm text-accent">{row.tool}</p>
              <p className="text-xs text-muted">{row.language}</p>
              <p className="text-sm text-muted leading-relaxed">{row.note}</p>
            </Card>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/course/section-06/living-guardrails" className="font-medium text-accent hover:underline">
            Lesson 1 · Test-first gate →
          </Link>
          <Link href="/course/section-06/verification-gates" className="font-medium text-accent hover:underline">
            Lesson 2 · CI gates →
          </Link>
          <Link href="/course/section-04/gate" className="font-medium text-accent hover:underline">
            Clarification Gate (Section 4) →
          </Link>
        </div>
      </section>

      <LessonPractice lessonId="section-06/property-based-testing" />

      <SectionPager slug="section-06" />
    </div>
  );
}

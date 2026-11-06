import Link from "next/link";
import {
  exampleVsPropertyTests,
  givenWhenThenParts,
  requirementTraceabilityTemplate,
  section06Lesson1Sections,
  specScenarioTypes,
  testFirstGateChecklist,
} from "@/content/section-06";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Badge, Card, QuoteBlock } from "@/components/ui/layout";
import { CheckCircle2 } from "lucide-react";

export default function LivingGuardrailsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 6 · Lesson 1"
        title="Living Specs & Executable Guardrails"
        description="Transform specs from static documents into active guardrails — test-driven specs, structured scenarios, a test-first gate, and an objective, auditable definition of done."
      />

      <QuoteBlock>
        When your team says a feature is done — is that an opinion, or a verifiable fact?
      </QuoteBlock>

      {section06Lesson1Sections.map((section) => (
        <section key={section.id} className="space-y-3 max-w-3xl">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <p className="text-muted leading-relaxed">{section.body}</p>
        </section>
      ))}

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Three scenario types</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {specScenarioTypes.map((row) => (
            <Card key={row.type} className="space-y-2 h-full">
              <Badge variant="accent">{row.type}</Badge>
              <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Given · When · Then</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {givenWhenThenParts.map((row) => (
            <Card key={row.part} className="space-y-2">
              <p className="font-mono text-sm text-accent">{row.part}</p>
              <p className="text-xs font-medium text-muted uppercase tracking-widest">{row.role}</p>
              <p className="text-sm text-muted leading-relaxed italic">{row.example}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Test-first gate</h2>
        <p className="text-sm text-muted max-w-2xl leading-relaxed">
          Run this checklist before any implementation. Only when every item passes should development begin.
        </p>
        <ul className="space-y-2 max-w-3xl">
          {testFirstGateChecklist.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <Link href="/course/section-04/gate" className="text-sm font-medium text-accent hover:underline">
          Clarification Gate (Section 4) →
        </Link>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 max-w-4xl">
        <Card className="border-border space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">Example-based</p>
          <p className="text-sm text-muted leading-relaxed">{exampleVsPropertyTests.example}</p>
        </Card>
        <Card className="border-accent/20 bg-accent/5 space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">Property-based (PBT)</p>
          <p className="text-sm text-muted leading-relaxed">{exampleVsPropertyTests.property}</p>
        </Card>
      </section>

      <p className="text-sm max-w-2xl">
        <Link href="/course/section-06/property-based-testing" className="font-medium text-accent hover:underline">
          Deep dive: Property-based testing (Section 6 · Lesson 3) →
        </Link>
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Requirement traceability template</h2>
        <p className="text-sm text-muted max-w-2xl leading-relaxed">
          A living audit trail from requirement ID to scenario, exact verification command, and pull request — transparent
          and rigorous.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-elevated/50">
                <th className="px-4 py-3 text-left font-medium">Requirement</th>
                <th className="px-4 py-3 text-left font-medium">Scenario</th>
                <th className="px-4 py-3 text-left font-medium">Verification</th>
                <th className="px-4 py-3 text-left font-medium">PR</th>
              </tr>
            </thead>
            <tbody>
              {requirementTraceabilityTemplate.map((row, i) => (
                <tr key={`${row.requirementId}-${i}`} className={i % 2 === 0 ? "" : "bg-surface-elevated/30"}>
                  <td className="px-4 py-3 font-mono text-xs">{row.requirementId}</td>
                  <td className="px-4 py-3 text-muted">{row.scenario}</td>
                  <td className="px-4 py-3">
                    <code className="font-mono text-xs">{row.verificationCommand}</code>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs">{row.pullRequest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href="/course/section-03/verify" className="text-sm font-medium text-accent hover:underline">
          Feature verification (Section 3) →
        </Link>
      </section>

      <SectionPager slug="section-06" />
    </div>
  );
}

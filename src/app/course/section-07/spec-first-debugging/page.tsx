import Link from "next/link";
import {
  debugCaseStudies,
  debuggingForensicsKit,
  guessworkVsEvidence,
  section07Lesson1Sections,
  specDebugFeedbackLoop,
  specDiagnosticClues,
  specFirstDebugRunbook,
} from "@/content/section-07";
import { RuntimeGateflow } from "@/components/runtime-gateflow";
import { McpBridgeScene } from "@/components/three/lazy-three-scenes";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Badge, Card, QuoteBlock } from "@/components/ui/layout";

export default function SpecFirstDebuggingPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 7 · Lesson 1"
        title="Spec-First Debugging — Evidence, Not Guesswork"
        description="Leave ‘I think’ behind — the spec is your case file, MCP is your detective badge, Playwright reenacts the scene, DevTools gathers forensics, and the runbook closes the case."
      />

      <QuoteBlock>I know — and here is the proof.</QuoteBlock>

      {section07Lesson1Sections.map((section) => (
        <section key={section.id} className="space-y-3 max-w-3xl">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <p className="text-muted leading-relaxed">{section.body}</p>
        </section>
      ))}

      <section className="grid gap-4 sm:grid-cols-2 max-w-4xl">
        <Card className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">Old way</p>
          <p className="text-sm text-muted leading-relaxed">{guessworkVsEvidence.guesswork}</p>
        </Card>
        <Card className="border-accent/20 bg-accent/5 space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">Evidence-driven</p>
          <p className="text-sm text-muted leading-relaxed">{guessworkVsEvidence.evidence}</p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Clues in the spec (case file)</h2>
        <ul className="space-y-2 max-w-3xl">
          {specDiagnosticClues.map((item) => (
            <li key={item} className="text-sm text-muted leading-relaxed flex gap-2">
              <span className="text-accent">▸</span>
              {item}
            </li>
          ))}
        </ul>
        <Link href="/requirements" className="text-sm font-medium text-accent hover:underline">
          Living requirements.md →
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Detective & forensics kit</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {debuggingForensicsKit.map((row) => (
            <Card key={row.tool} className="space-y-2 h-full">
              <Badge variant="accent">{row.tool}</Badge>
              <p className="text-xs font-medium text-muted">{row.role}</p>
              <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
            </Card>
          ))}
        </div>
        <McpBridgeScene />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Six-step runbook</h2>
        <p className="text-sm text-muted max-w-2xl">
          Standard procedure every time — no “maybe it is this” debugging.
        </p>
        <ol className="space-y-3 max-w-3xl">
          {specFirstDebugRunbook.map((row) => (
            <li key={row.step}>
              <Card className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {row.step}
                </span>
                <div>
                  <p className="font-medium text-sm">{row.title}</p>
                  <p className="text-sm text-muted">{row.action}</p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <RuntimeGateflow />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Case studies</h2>
        <div className="space-y-4 max-w-3xl">
          {debugCaseStudies.map((c) => (
            <Card key={c.id} className="space-y-3">
              <p className="font-medium">{c.title}</p>
              <p className="text-sm text-muted">{c.symptom}</p>
              <dl className="grid gap-2 text-sm sm:grid-cols-1">
                <div>
                  <dt className="text-xs font-medium text-muted uppercase tracking-widest">Spec fact</dt>
                  <dd>{c.specFact}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-muted uppercase tracking-widest">Evidence</dt>
                  <dd className="text-muted">{c.evidence}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-muted uppercase tracking-widest">Root cause</dt>
                  <dd className="text-muted">{c.rootCause}</dd>
                </div>
              </dl>
              <p className="text-sm font-medium text-accent">{c.outcome}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Spec feedback loop</h2>
        <ol className="space-y-2 max-w-3xl list-decimal list-inside text-sm text-muted leading-relaxed">
          {specDebugFeedbackLoop.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <Link href="/course/section-06/living-guardrails" className="text-sm font-medium text-accent hover:underline">
          Living specs (Section 6 · Lesson 1) →
        </Link>
      </section>

      <div className="flex flex-wrap gap-4 text-sm">
        <Link href="/course/section-05/mcp" className="font-medium text-accent hover:underline">
          MCP lesson (Section 5) →
        </Link>
        <Link href="/course/section-06/verification-gates" className="font-medium text-accent hover:underline">
          Runtime gate (Section 6 · Lesson 2) →
        </Link>
      </div>

      <SectionPager slug="section-07" />
    </div>
  );
}

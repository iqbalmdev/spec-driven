import Link from "next/link";
import {
  codeVsSpecTruth,
  compileVsConformance,
  conformanceValidation,
  intentArchaeologySteps,
  intentDecayStages,
  legacySpecContents,
  modernizationAgentPipeline,
  modernizationCaseStudies,
  modernizationTrap,
  section07Lesson3Sections,
  stranglerFigSteps,
} from "@/content/section-07";
import { WorkflowPipelineScene } from "@/components/three/lazy-three-scenes";
import { SectionPager } from "@/components/course-nav";
import { LessonPractice } from "@/components/practice/lesson-practice";
import { PageHeader, Badge, Card, QuoteBlock } from "@/components/ui/layout";

export default function LegacyModernizationPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 7 · Lesson 3"
        title="Legacy Modernization — Recover Intent, Then Replace"
        description="The modernization trap is rewriting the how without recovering the why. Spec-driven development treats recovered intent as the system of record, then strangles the old system incrementally."
      />

      <QuoteBlock>Compiling is the beginning. Done is conformance.</QuoteBlock>

      {section07Lesson3Sections.map((section) => (
        <section key={section.id} className="space-y-3 max-w-3xl">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <p className="text-muted leading-relaxed">{section.body}</p>
        </section>
      ))}

      <section className="grid gap-4 sm:grid-cols-2 max-w-4xl">
        <Card className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">The trap</p>
          <p className="text-sm text-muted leading-relaxed">{modernizationTrap.trap}</p>
        </Card>
        <Card className="border-accent/20 bg-accent/5 space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">What it produces</p>
          <p className="text-sm text-muted leading-relaxed">{modernizationTrap.result}</p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">How intent decays</h2>
        <ol className="space-y-3 max-w-3xl">
          {intentDecayStages.map((row, index) => (
            <li key={row.stage}>
              <Card className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-sm">{row.stage}</p>
                  <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 max-w-4xl">
        <Card className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">Code as truth</p>
          <p className="text-sm text-muted leading-relaxed">{codeVsSpecTruth.code}</p>
        </Card>
        <Card className="border-accent/20 bg-accent/5 space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">Spec as record</p>
          <p className="text-sm text-muted leading-relaxed">{codeVsSpecTruth.spec}</p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Archaeology before code</h2>
        <p className="text-sm text-muted max-w-2xl">
          Phase one writes no new product code. Recover lost intent, then lock it.
        </p>
        <ol className="space-y-3 max-w-3xl">
          {intentArchaeologySteps.map((row) => (
            <li key={row.step}>
              <Card className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {row.step}
                </span>
                <div>
                  <p className="font-medium text-sm">{row.title}</p>
                  <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">What goes in spec.md</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {legacySpecContents.map((row) => (
            <Card key={row.part} className="space-y-2 h-full">
              <Badge variant="accent">{row.part}</Badge>
              <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
            </Card>
          ))}
        </div>
        <Link href="/course/section-06/living-guardrails" className="text-sm font-medium text-accent hover:underline">
          Living specs &amp; executable guardrails →
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Strangler Fig Pattern</h2>
        <p className="text-sm text-muted max-w-2xl">
          Surround the old system. Do not blow it up.
        </p>
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-[640px] items-stretch gap-0">
            {stranglerFigSteps.map((row, i) => (
              <div key={row.title} className="flex flex-1 items-stretch">
                <Card className="flex-1 space-y-2 rounded-xl border-accent/15">
                  <p className="font-mono text-xs font-bold text-accent">Step {row.step}</p>
                  <p className="font-medium text-sm leading-snug">{row.title}</p>
                  <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
                </Card>
                {i < stranglerFigSteps.length - 1 && (
                  <div className="flex w-6 shrink-0 items-center justify-center text-muted" aria-hidden>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 max-w-4xl md:hidden">
          {stranglerFigSteps.map((row) => (
            <li key={row.title} className="text-sm text-muted">
              <span className="font-mono font-medium text-accent">{row.step}.</span> {row.title} — {row.detail}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">AI-assisted rebuild pipeline</h2>
        <p className="text-sm text-muted max-w-2xl">
          Agents draft, plan, task, and implement — only after the spec exists. Guardrails, not a one-shot rewrite.
        </p>
        <ol className="space-y-3 max-w-3xl">
          {modernizationAgentPipeline.map((row) => (
            <li key={row.step}>
              <Card className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {row.step}
                </span>
                <div>
                  <p className="font-medium text-sm">{row.agent}</p>
                  <p className="text-sm text-muted leading-relaxed">{row.output}</p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
        <WorkflowPipelineScene />
        <Link href="/course/section-06/expert-crew" className="text-sm font-medium text-accent hover:underline">
          Expert AI crew (Section 6 · Lesson 4) →
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">What this looks like in practice</h2>
        <div className="grid gap-4 sm:grid-cols-2 max-w-4xl">
          {modernizationCaseStudies.map((row) => (
            <Card key={row.org} className="space-y-2 h-full">
              <Badge variant="accent">{row.org}</Badge>
              <p className="font-medium text-sm">{row.claim}</p>
              <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Mandatory validation</h2>
        <p className="text-sm text-muted max-w-2xl">
          Shipping code is not the definition of done. These checks prove the new system matches the spec.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {conformanceValidation.map((row) => (
            <Card key={row.tool} className="space-y-2 h-full">
              <p className="font-medium text-sm">{row.tool}</p>
              <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
            </Card>
          ))}
        </div>
        <Link href="/course/section-06/verification-gates" className="text-sm font-medium text-accent hover:underline">
          Verification gates (Section 6 · Lesson 2) →
        </Link>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 max-w-4xl">
        <Card className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">Old relief</p>
          <p className="text-sm text-muted leading-relaxed">{compileVsConformance.compile}</p>
        </Card>
        <Card className="border-accent/20 bg-accent/5 space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">SDD done</p>
          <p className="text-sm text-muted leading-relaxed">{compileVsConformance.conform}</p>
        </Card>
      </section>

      <div className="flex flex-wrap gap-4 text-sm">
        <Link href="/course/section-07/spec-first-debugging" className="font-medium text-accent hover:underline">
          Spec-first debugging (Lesson 1) →
        </Link>
        <Link href="/course/section-06/living-guardrails" className="font-medium text-accent hover:underline">
          Executable guardrails →
        </Link>
      </div>

      <LessonPractice lessonId="section-07/legacy-modernization" />

      <SectionPager slug="section-07" />
    </div>
  );
}

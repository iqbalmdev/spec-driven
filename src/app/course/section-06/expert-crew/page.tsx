import { Lock } from "lucide-react";
import Link from "next/link";
import {
  contractFirstHandoff,
  curseOfInstructions,
  expertCrewBenefits,
  expertCrewRoles,
  humanReviewGatesABCD,
  section06Lesson4Sections,
  specialistTaskFields,
} from "@/content/section-06";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Badge, Card, QuoteBlock } from "@/components/ui/layout";

export default function ExpertCrewPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 6 · Lesson 4"
        title="Expert AI Crew — Orchestration Without Chaos"
        description="Replace one overloaded assistant with an orchestrator and specialists — shared job board, strict task boundaries, contract-first handoffs, and human review gates."
      />

      <QuoteBlock>
        The breakthrough is not a super-genius AI — it is delegation, contracts, and a crew that stays in sync.
      </QuoteBlock>

      {section06Lesson4Sections.map((section) => (
        <section key={section.id} className="space-y-3 max-w-3xl">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <p className="text-muted leading-relaxed">{section.body}</p>
        </section>
      ))}

      <Card className="border-amber-500/20 bg-amber-500/5 space-y-2 max-w-3xl">
        <p className="font-medium text-sm">{curseOfInstructions.name}</p>
        <p className="text-sm text-muted leading-relaxed">{curseOfInstructions.definition}</p>
        <p className="text-sm leading-relaxed">
          <span className="font-medium">Fix:</span> {curseOfInstructions.fix}
        </p>
      </Card>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Specialist roles</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {expertCrewRoles.map((row) => (
            <Card key={row.role} className="space-y-2 h-full">
              <Badge variant="accent">{row.role}</Badge>
              <p className="text-sm text-muted leading-relaxed">{row.focus}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Task structure (job board)</h2>
        <p className="text-sm text-muted max-w-2xl">
          Central shared document — each task is specific, not a vague to-do.
        </p>
        <ul className="space-y-2 max-w-3xl">
          {specialistTaskFields.map((row) => (
            <li key={row.field} className="text-sm leading-relaxed">
              <span className="font-medium">{row.field}</span>
              <span className="text-muted"> — {row.detail}</span>
            </li>
          ))}
        </ul>
        <Link href="/course/section-02/create-tasks" className="text-sm font-medium text-accent hover:underline">
          tasks.md structure (Section 2) →
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Contract-first handoffs</h2>
        <ol className="space-y-3 max-w-3xl">
          {contractFirstHandoff.map((row) => (
            <li key={row.step}>
              <Card className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {row.step}
                </span>
                <div>
                  <p className="font-medium text-sm">{row.agent}</p>
                  <p className="text-sm text-muted">{row.output}</p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Human review gates</h2>
        <p className="text-sm text-muted max-w-2xl">
          Your safety net from orchestration plan through final audit — each gate blocks the pipeline until you sign off.
        </p>
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-[640px] items-stretch gap-0">
            {humanReviewGatesABCD.map((row, i) => (
              <div key={row.gate} className="flex flex-1 items-stretch">
                <Card className="flex-1 space-y-2 border-accent/15 rounded-xl">
                  <p className="font-mono text-xs font-bold text-accent">Gate {row.gate}</p>
                  <p className="font-medium text-sm leading-snug">{row.title}</p>
                  <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
                </Card>
                {i < humanReviewGatesABCD.length - 1 && (
                  <div className="flex w-6 shrink-0 items-center justify-center text-muted" aria-hidden>
                    →
                  </div>
                )}
              </div>
            ))}
            <div
              className="flex w-10 shrink-0 items-center justify-center pl-2 text-accent"
              title="Merge / release locked until Gate D passes"
            >
              <Lock className="h-5 w-5" aria-hidden />
            </div>
          </div>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 max-w-4xl md:hidden">
          {humanReviewGatesABCD.map((row) => (
            <li key={row.gate} className="text-sm text-muted">
              <span className="font-mono font-medium text-accent">Gate {row.gate}:</span> {row.title} — {row.detail}
            </li>
          ))}
        </ul>
        <Link href="/course/section-06/verification-gates" className="text-sm font-medium text-accent hover:underline">
          Verification gates (Lesson 2) →
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Benefits</h2>
        <ul className="grid gap-2 sm:grid-cols-2 max-w-4xl">
          {expertCrewBenefits.map((item) => (
            <li key={item} className="text-sm text-muted flex gap-2 leading-relaxed">
              <span className="text-accent">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <Link href="/course/section-06/implementation-paths" className="text-sm font-medium text-accent hover:underline">
          Implement vs orchestrate (Lesson 9) →
        </Link>
      </section>

      <SectionPager slug="section-06" />
    </div>
  );
}

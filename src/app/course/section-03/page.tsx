import Link from "next/link";
import { section03Concepts, section03Takeaways, featureCompletionCriteria } from "@/content/section-03";
import { TaskImplementationDemo } from "@/components/task-implementation-demo";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, QuoteBlock, Badge, Card } from "@/components/ui/layout";
import { ArrowRight, Lock } from "lucide-react";
import { NORTH_STAR } from "@/content/course";

export default function SectionThreePage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Section 3"
        title="Implementation: From Tasks to Verified Code"
        description="Execute atomic tasks in dependency order, implement against the spec, and verify each unit before advancing — the Code and Verify development stages."
      />

      <QuoteBlock>{NORTH_STAR}</QuoteBlock>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-muted leading-relaxed max-w-3xl">
          Section 3 begins where Section 2 ends. With <code className="text-xs font-mono bg-surface-elevated px-1.5 py-0.5 rounded">tasks.md</code> ready,
          use the <code className="text-xs font-mono bg-surface-elevated px-1.5 py-0.5 rounded">/implement</code> workflow to execute one task at a time —
          scoped to its requirement, verified before the next task unlocks.
        </p>
      </section>

      <Card className="flex gap-4 border-emerald-500/20 bg-emerald-500/5">
        <Lock className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
        <div>
          <p className="font-medium text-sm">Prerequisites from Sections 1 & 2</p>
          <p className="text-sm text-muted mt-1 leading-relaxed">
            Clarification Gate passed · tasks.md generated via /create-tasks · tasks ordered with requirement links and verification steps.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <Link href="/course/section-02" className="text-xs font-medium text-accent hover:underline">
              Review Section 2 →
            </Link>
            <Link href="/course/section-02/tasks" className="text-xs font-medium text-accent hover:underline">
              View tasks.md example →
            </Link>
          </div>
        </div>
      </Card>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Key Concepts</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {section03Concepts.map((c) => (
            <Link key={c.id} href={c.href} className="group">
              <Card hover className="h-full space-y-2">
                <p className="text-xs font-medium uppercase tracking-widest text-accent">{c.subtitle}</p>
                <h3 className="font-semibold group-hover:text-accent transition-colors">{c.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <TaskImplementationDemo />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Feature Completion Criteria</h2>
        <Card>
          <ul className="space-y-2">
            {featureCompletionCriteria.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded border border-border" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Practical Takeaways</h2>
        <ol className="space-y-3">
          {section03Takeaways.map((t, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                {i + 1}
              </span>
              {t}
            </li>
          ))}
        </ol>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="flex flex-col gap-3">
          <p className="font-medium text-sm">/implement workflow</p>
          <p className="text-sm text-muted">7-step process from next task to verified feature.</p>
          <Link href="/course/section-03/implement" className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-auto">
            Open workflow <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>
        <Card className="flex flex-col gap-3">
          <p className="font-medium text-sm">Verification deep dive</p>
          <p className="text-sm text-muted">Per-task gates and acceptance criteria sign-off.</p>
          <Link href="/course/section-03/verify" className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-auto">
            View verification → <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>
      </div>

      <SectionPager slug="section-03" />
    </div>
  );
}

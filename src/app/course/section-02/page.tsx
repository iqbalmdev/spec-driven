import Link from "next/link";
import { section02Concepts, section02Takeaways, messagingExampleSpec } from "@/content/section-02";
import { TaskDecompositionDemo } from "@/components/task-decomposition";
import { PageHeader, QuoteBlock, Badge, Card } from "@/components/ui/layout";
import { ArrowRight, Lock } from "lucide-react";

export default function SectionTwoPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Section 2"
        title="Specification Plan: Task Implementation"
        description="Take a well-defined specification and translate it into actionable, atomic tasks — systematic, traceable, and ready for implementation."
      />

      <QuoteBlock>
        A spec that cannot generate a task list is not executable — it is a wish.
      </QuoteBlock>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-muted leading-relaxed max-w-3xl">
          Section 2 begins after the Clarification Gate passes. A clarified <code className="text-xs font-mono bg-surface-elevated px-1.5 py-0.5 rounded">requirements.md</code> becomes
          an ordered <code className="text-xs font-mono bg-surface-elevated px-1.5 py-0.5 rounded">tasks.md</code> via the{" "}
          <code className="text-xs font-mono bg-surface-elevated px-1.5 py-0.5 rounded">/create-tasks</code> command —
          breaking features into the smallest verifiable units of work.
        </p>
      </section>

      {/* Prerequisite gate */}
      <Card className="flex gap-4 border-emerald-500/20 bg-emerald-500/5">
        <Lock className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
        <div>
          <p className="font-medium text-sm">Prerequisite: Clarified Specification</p>
          <p className="text-sm text-muted mt-1 leading-relaxed">
            Zero open items in requirements.md. User roles, data lifecycle, and error behaviours defined.
            Do not run /create-tasks until the gate passes.
          </p>
          <Link href="/requirements" className="text-xs font-medium text-accent hover:underline mt-2 inline-block">
            Review Clarification Gate →
          </Link>
        </div>
      </Card>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Key Concepts</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {section02Concepts.map((c) => (
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

      {/* Messaging spec summary */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Example Specification</h2>
        <p className="text-sm text-muted">Feature: {messagingExampleSpec.feature}</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {messagingExampleSpec.requirements.map((req) => (
            <Card key={req.id} className="space-y-2">
              <Badge variant="accent">{req.id}</Badge>
              <h3 className="font-medium text-sm">{req.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{req.detail}</p>
            </Card>
          ))}
        </div>
      </section>

      <TaskDecompositionDemo />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Practical Takeaways</h2>
        <ol className="space-y-3">
          {section02Takeaways.map((t, i) => (
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
          <p className="font-medium text-sm">/create-tasks workflow</p>
          <p className="text-sm text-muted">7-step process from validated spec to committed tasks.md.</p>
          <Link href="/course/section-02/create-tasks" className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-auto">
            Open workflow <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>
        <Card className="flex flex-col gap-3">
          <p className="font-medium text-sm">tasks.md deep dive</p>
          <p className="text-sm text-muted">Structure, template, and messaging example in full.</p>
          <Link href="/course/section-02/tasks" className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-auto">
            View tasks.md <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>
      </div>
    </div>
  );
}

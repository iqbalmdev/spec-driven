import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { NORTH_STAR } from "@/content/course";
import { LineageTimeline } from "@/components/lineage-timeline";
import { ConceptGrid } from "@/components/concept-grid";
import { WorkflowDiagram } from "@/components/workflow-diagram";
import { QuoteBlock, Badge, Card } from "@/components/ui/layout";

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="animate-fade-up pt-4 sm:pt-8">
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="accent">
            <Sparkles className="inline h-3 w-3 mr-1 -mt-0.5" />
            Section 1 — Foundations
          </Badge>
          <Badge>Living spec showcase</Badge>
        </div>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
          Spec-Driven Development
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted leading-relaxed">
          From vibe-coding to AI engineering — learn how structured specifications
          turn AI speed into predictable, aligned outcomes.
        </p>

        <div className="mt-8 max-w-2xl">
          <QuoteBlock>{NORTH_STAR}</QuoteBlock>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/course/section-01"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            <BookOpen className="h-4 w-4" />
            Explore Section 1
          </Link>
          <Link
            href="/requirements"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-elevated"
          >
            View Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Vibe vs SDD */}
      <section className="animate-fade-up-delay-1">
        <h2 className="sr-only">Vibe-coding vs SDD</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-red-500/20 bg-red-500/5">
            <p className="text-xs font-medium uppercase tracking-widest text-red-600 dark:text-red-400 mb-2">
              Vibe-coding
            </p>
            <code className="block text-sm font-mono text-muted leading-relaxed">
              Prompt → Code → &quot;Looks okay?&quot; → Ship → Drift
            </code>
          </Card>
          <Card className="border-emerald-500/20 bg-emerald-500/5">
            <p className="text-xs font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
              Spec-Driven Development
            </p>
            <code className="block text-sm font-mono text-muted leading-relaxed">
              shape-spec → requirements.md → Gate → Tasks → Code → Verify
            </code>
          </Card>
        </div>
      </section>

      {/* Lineage */}
      <div className="animate-fade-up-delay-2">
        <LineageTimeline />
      </div>

      {/* Concepts */}
      <div className="animate-fade-up-delay-3">
        <ConceptGrid />
      </div>

      {/* Workflow preview */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">SDD Workflow</h2>
          <p className="mt-2 text-sm text-muted">The path from feature idea to verified implementation.</p>
        </div>
        <Card>
          <WorkflowDiagram />
        </Card>
        <div className="text-center">
          <Link href="/workflow" className="text-sm font-medium text-accent hover:underline">
            View interactive workflow →
          </Link>
        </div>
      </section>
    </div>
  );
}

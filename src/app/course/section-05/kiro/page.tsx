import { kiroRigorPoints } from "@/content/section-05";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Card } from "@/components/ui/layout";

export default function KiroPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 5 · Lesson 2"
        title="Amazon Kiro — The High-Rigor Agentic IDE"
        description="An agentic IDE built for rigor: specs, constraints, and structured workflows stay in the editing surface — not lost after one chat session."
      />

      <section className="space-y-4 max-w-3xl">
        <p className="text-muted leading-relaxed">
          Vibe-coding IDEs optimize for speed. High-rigor agentic IDEs optimize for{" "}
          <strong className="font-medium text-foreground">correct intent</strong> — tying agent actions to requirements,
          tasks, and team rules before large refactors land.
        </p>
      </section>

      <div className="grid gap-4 sm:grid-cols-3">
        {kiroRigorPoints.map((point) => (
          <Card key={point.title} className="space-y-2">
            <p className="font-medium text-sm">{point.title}</p>
            <p className="text-sm text-muted leading-relaxed">{point.detail}</p>
          </Card>
        ))}
      </div>

      <Card className="bg-accent-soft border-accent/20">
        <p className="text-sm font-medium">Parallel in this repo</p>
        <p className="text-sm text-muted mt-1 leading-relaxed">
          Cursor + in-repo specs (<code className="font-mono text-xs">requirements.md</code>, course docs, constitution
          tiers) play a similar role: agents read project law before they edit.
        </p>
      </Card>

      <SectionPager slug="section-05" />
    </div>
  );
}

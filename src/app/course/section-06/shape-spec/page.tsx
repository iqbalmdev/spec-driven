import Link from "next/link";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Card } from "@/components/ui/layout";

export default function SectionSixShapeSpecPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 6 · shape-spec"
        title="Dialogue Before Code"
        description="shape-spec is a structured conversation with AI until the feature is understood — then capture outcomes in requirements.md and clear ambiguity."
      />

      <Card className="space-y-2 max-w-3xl">
        <p className="text-sm text-muted leading-relaxed">
          AgentOS does not skip understanding. shape-spec produces a clarified requirements.md that feeds the
          Clarification Gate and /create-tasks.
        </p>
        <Link href="/course/section-04/shape-spec" className="text-sm font-medium text-accent hover:underline">
          Section 4 shape-spec deep dive →
        </Link>
        <Link href="/requirements" className="block text-sm font-medium text-accent hover:underline">
          Live requirements.md in this repo →
        </Link>
      </Card>

      <SectionPager slug="section-06" />
    </div>
  );
}

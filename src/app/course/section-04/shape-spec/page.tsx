import Link from "next/link";
import { ShapeSpecSimulator } from "@/components/shape-spec-simulator";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Card } from "@/components/ui/layout";

export default function ShapeSpecDeepDivePage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 4 · shape-spec"
        title="Understanding Requirements"
        description="Structured conversation between AI and developers — preventing misassumptions before any code is written."
      />

      <Card className="bg-accent-soft border-accent/20">
        <p className="text-sm leading-relaxed">
          shape-spec is not optional. It forces clarity on problem, user, success criteria, and open items —
          every decision documented in requirements.md.
        </p>
      </Card>

      <ShapeSpecSimulator />

      <SectionPager slug="section-04" />
    </div>
  );
}

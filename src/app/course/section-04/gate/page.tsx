import { ClarificationGateDemo } from "@/components/clarification-gate";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Card } from "@/components/ui/layout";

export default function GatePage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 4 · Clarification Gate"
        title="Removing Ambiguity"
        description="Resolve every open item in requirements.md. Document each decision — lock in clarity before tasks or code."
      />

      <ClarificationGateDemo />

      <Card>
        <p className="text-sm text-muted leading-relaxed">
          Each resolved item should include: question, resolution, date, and who decided.
          Ambiguity carried forward multiplies errors in tasks and implementation.
        </p>
      </Card>

      <SectionPager slug="section-04" />
    </div>
  );
}

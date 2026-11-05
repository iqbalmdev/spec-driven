import { ImplementationPathPicker } from "@/components/agentos-path-picker";
import { SectionPager } from "@/components/course-nav";
import { PageHeader } from "@/components/ui/layout";

export default function ImplementationPathsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 6 · Lesson 6"
        title="Implement vs Orchestrate"
        description="Implement tasks when you need control; orchestrate when specs are tight and parallel specialists maximize speed."
      />

      <ImplementationPathPicker />

      <SectionPager slug="section-06" />
    </div>
  );
}

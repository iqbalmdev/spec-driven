import Link from "next/link";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Card } from "@/components/ui/layout";

export default function SectionSixCreateTasksPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 6 · Lesson 5"
        title="Decompose Into a Checklist"
        description="/create-tasks breaks a clarified feature into small tasks in tasks.md — ordered by dependencies with verification steps."
      />

      <Card className="space-y-2 max-w-3xl">
        <p className="text-sm text-muted leading-relaxed">
          Each task should be atomic and traceable to requirements. The result is a checklist agents and humans execute
          in order — or orchestrate in parallel when safe.
        </p>
        <Link href="/course/section-02/create-tasks" className="text-sm font-medium text-accent hover:underline">
          Section 2 /create-tasks →
        </Link>
      </Card>

      <SectionPager slug="section-06" />
    </div>
  );
}

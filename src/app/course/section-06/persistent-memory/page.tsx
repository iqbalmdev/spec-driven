import { SectionPager } from "@/components/course-nav";
import { PageHeader, Card } from "@/components/ui/layout";

export default function PersistentMemoryPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 6"
        title="Persistent Project Memory"
        description="AI assistants forget chat context. AgentOS stores project memory in the repo — reloaded every session — so focus and decisions persist."
      />

      <Card className="space-y-2 max-w-3xl">
        <p className="font-medium text-sm">The problem</p>
        <p className="text-sm text-muted leading-relaxed">
          Re-explaining stack, priorities, and half-finished features each session wastes time and reintroduces
          inconsistency. Persistent memory turns the repository into the assistant&apos;s long-term memory.
        </p>
      </Card>

      <SectionPager slug="section-06" />
    </div>
  );
}

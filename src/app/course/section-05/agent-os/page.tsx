import { AgentOsLifecycle } from "@/components/agent-os-lifecycle";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Card } from "@/components/ui/layout";

export default function AgentOsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 5 · Lesson 1"
        title="Agent OS — Managing the Feature Lifecycle"
        description="Treat spec-driven stages as an operating system: predictable states, entry criteria, and handoffs so agents (and humans) do not skip clarity."
      />

      <AgentOsLifecycle />

      <Card className="space-y-2">
        <p className="font-medium text-sm">Why an “OS”?</p>
        <p className="text-sm text-muted leading-relaxed">
          Ad-hoc prompting is like running programs without a kernel — no scheduling, no permissions, no audit trail.
          Agent OS maps each feature to the same pipeline you practiced in Sections 1–4: understand, gate, plan, build,
          verify.
        </p>
      </Card>

      <SectionPager slug="section-05" />
    </div>
  );
}

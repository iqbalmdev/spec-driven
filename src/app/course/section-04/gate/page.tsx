import Image from "next/image";
import { ClarificationGateDemo } from "@/components/clarification-gate";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Card } from "@/components/ui/layout";
import { readyForPlanChecklist } from "@/content/section-04";
import { CheckCircle2 } from "lucide-react";

export default function GatePage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 4 · Clarification Gate"
        title="Removing Ambiguity"
        description="Resolve every open item in requirements.md. Document each decision — lock in clarity before tasks or code."
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Ready for Plan Checklist</h2>
        <p className="text-sm text-muted leading-relaxed max-w-2xl">
          Before advancing to <code className="text-xs font-mono bg-surface-elevated px-1.5 py-0.5 rounded">/create-tasks</code>,
          confirm every item passes. If any fails, return to shape-spec.
        </p>
        <div className="overflow-hidden rounded-xl border border-border">
          <Image
            src="/course/section-04/ready-for-plan-checklist.png"
            alt="Ready for Plan Checklist: no NEEDS CLARIFICATION items, measurable success criteria, explicit roles, error behavior, data lifecycle, and DO NOT constraints"
            width={1200}
            height={675}
            className="w-full"
          />
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {readyForPlanChecklist.map((item) => (
            <li key={item.id} className="flex gap-3 text-sm leading-relaxed">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

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

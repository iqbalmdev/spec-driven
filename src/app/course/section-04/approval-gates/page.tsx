import { ApprovalGatesGame } from "@/components/approval-gates-game";
import { tierSystem } from "@/content/section-04";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Badge, Card } from "@/components/ui/layout";

export default function ApprovalGatesPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 4 · Approval Gates"
        title="Tier Two — Human Verification"
        description="Significant but not clearly wrong actions require human approval before proceeding."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {Object.values(tierSystem).map((tier) => (
          <Card key={tier.label} className="space-y-3">
            <Badge variant={tier.color === "emerald" ? "success" : tier.color === "amber" ? "warning" : "default"}>
              {tier.label}
            </Badge>
            <p className="text-sm text-muted">{tier.description}</p>
            <ul className="space-y-1">
              {tier.examples.map((ex) => (
                <li key={ex} className="text-xs text-muted">· {ex}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <ApprovalGatesGame />

      <SectionPager slug="section-04" />
    </div>
  );
}

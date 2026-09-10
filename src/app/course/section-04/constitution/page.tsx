import Link from "next/link";
import { constitutionLayers, tierSystem } from "@/content/section-04";
import { ProjectConstitution } from "@/components/project-constitution";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Card, Badge } from "@/components/ui/layout";

export default function ConstitutionPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 4 · constitution.md"
        title="Consistency vs Flexibility"
        description="Balance organizational consistency with project-level flexibility — articulate clear guidelines your team and AI follow."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {Object.values(constitutionLayers).map((layer) => (
          <Card key={layer.title} className="space-y-3">
            <h3 className="font-semibold">{layer.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{layer.description}</p>
            <ul className="space-y-1.5">
              {layer.examples.map((ex) => (
                <li key={ex} className="flex items-start gap-2 text-sm">
                  <span className="text-accent">·</span>
                  {ex}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <ProjectConstitution />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Three-Tier System</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {Object.values(tierSystem).map((tier) => (
            <Card key={tier.label} className="space-y-2">
              <Badge variant={tier.color === "emerald" ? "success" : tier.color === "amber" ? "warning" : "default"}>
                {tier.label.split("—")[0].trim()}
              </Badge>
              <p className="text-sm text-muted">{tier.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <Card className="text-sm text-muted">
        Template: <code className="font-mono text-foreground">templates/constitution.md</code>
      </Card>

      <SectionPager slug="section-04" />
    </div>
  );
}

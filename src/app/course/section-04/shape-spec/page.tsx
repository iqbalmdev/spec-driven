import Image from "next/image";
import { ShapeSpecSimulator } from "@/components/shape-spec-simulator";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Card } from "@/components/ui/layout";
import { earsPatterns } from "@/content/section-04";

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

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">EARS — Easy Approach to Requirements Syntax</h2>
        <p className="text-sm text-muted leading-relaxed max-w-2xl">
          Use predictable sentence patterns when drafting acceptance criteria in requirements.md.
          Each requirement should map to exactly one EARS pattern.
        </p>
        <div className="overflow-hidden rounded-xl border border-border">
          <Image
            src="/course/section-04/ears-patterns.png"
            alt="EARS pattern types and templates: Ubiquitous, Event-Driven, State-Driven, Optional Feature, and Unwanted Behavior"
            width={1200}
            height={675}
            className="w-full"
          />
        </div>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-elevated/50">
                <th className="px-4 py-3 text-left font-medium">Pattern Type</th>
                <th className="px-4 py-3 text-left font-medium">Template</th>
              </tr>
            </thead>
            <tbody>
              {earsPatterns.map((row, i) => (
                <tr key={row.type} className={i % 2 === 0 ? "" : "bg-surface-elevated/30"}>
                  <td className="px-4 py-3 font-medium">{row.type}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">{row.template}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ShapeSpecSimulator />

      <SectionPager slug="section-04" />
    </div>
  );
}

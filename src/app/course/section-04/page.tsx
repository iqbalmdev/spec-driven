import Link from "next/link";
import { section04Topics, section04Takeaways, documentationFiles } from "@/content/section-04";
import { ShapeSpecSimulator } from "@/components/shape-spec-simulator";
import { ApprovalGatesGame } from "@/components/approval-gates-game";
import { SddJourneyScene } from "@/components/sdd-journey-scene";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, QuoteBlock, Badge, Card } from "@/components/ui/layout";
import { ArrowRight } from "lucide-react";
import { NORTH_STAR } from "@/content/course";

export default function SectionFourPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Section 4"
        title="AI Understanding: Clarity Before Code"
        description="Ensure AI comprehensively understands a feature before coding — shape-spec, Clarification Gate, constitution.md, living docs, and Tier Two approval gates."
      />

      <QuoteBlock>{NORTH_STAR}</QuoteBlock>

      <SddJourneyScene />

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Core Topics</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section04Topics.map((topic) => (
            <Link key={topic.id} href={topic.href} className="group">
              <Card hover className="h-full space-y-2">
                <p className="text-xs font-medium uppercase tracking-widest text-accent">{topic.subtitle}</p>
                <h3 className="font-semibold group-hover:text-accent transition-colors">{topic.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{topic.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <ShapeSpecSimulator />

      <ApprovalGatesGame />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Documentation Files</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-elevated/50">
                <th className="px-4 py-3 text-left font-medium">File</th>
                <th className="px-4 py-3 text-left font-medium">Audience</th>
                <th className="px-4 py-3 text-left font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {documentationFiles.map((row, i) => (
                <tr key={row.file} className={i % 2 === 0 ? "" : "bg-surface-elevated/30"}>
                  <td className="px-4 py-3 font-mono text-xs">{row.file}</td>
                  <td className="px-4 py-3"><Badge>{row.audience}</Badge></td>
                  <td className="px-4 py-3 text-muted">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Practical Takeaways</h2>
        <ol className="space-y-3">
          {section04Takeaways.map((t, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                {i + 1}
              </span>
              {t}
            </li>
          ))}
        </ol>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="flex flex-col gap-3">
          <p className="font-medium text-sm">constitution.md</p>
          <p className="text-sm text-muted">Consistency vs flexibility — org rules and project rules.</p>
          <Link href="/course/section-04/constitution" className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-auto">
            Open constitution <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>
        <Card className="flex flex-col gap-3">
          <p className="font-medium text-sm">Approval gates</p>
          <p className="text-sm text-muted">Tier One · Tier Two · Tier Three decision guide.</p>
          <Link href="/course/section-04/approval-gates" className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-auto">
            Tier system <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>
      </div>

      <SectionPager slug="section-04" />
    </div>
  );
}

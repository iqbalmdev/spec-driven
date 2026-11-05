import Link from "next/link";
import {
  highRigorArtifactFiles,
  kiroRigorPoints,
  kiroVsTraditional,
} from "@/content/section-05";
import { earsPatterns } from "@/content/section-04";
import { KiroSpecTriadGuide } from "@/components/kiro-spec-triad-guide";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Badge, Card } from "@/components/ui/layout";
import { ArrowRight } from "lucide-react";

export default function KiroPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 5 · Lesson 2"
        title="Amazon Kiro — The High-Rigor Agentic IDE"
        description="Three markdown files — requirements.md, design.md, tasks.md — with clear needs, must-include rules, and readiness criteria."
      />

      <section className="grid gap-4 sm:grid-cols-2 max-w-4xl">
        {kiroVsTraditional.map((item) => (
          <Card key={item.label} className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">{item.metaphor}</p>
            <p className="font-semibold text-sm">{item.label}</p>
            <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">requirements.md · design.md · tasks.md</h2>
        <p className="text-sm text-muted max-w-2xl leading-relaxed">
          Each file has a distinct job in the Kiro workflow. Follow the order: clarify requirements, lock design, then
          generate tasks — never skip ahead while the gate is open.
        </p>
        <Link
          href="/course/section-05/spec-files"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent"
        >
          Open printable spec-files guide <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <KiroSpecTriadGuide />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Durable artifacts — problems they prevent</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-elevated/50">
                <th className="px-4 py-3 text-left font-medium">File</th>
                <th className="px-4 py-3 text-left font-medium">Problem it prevents</th>
              </tr>
            </thead>
            <tbody>
              {highRigorArtifactFiles.map((row, i) => (
                <tr key={row.file} className={i % 2 === 0 ? "" : "bg-surface-elevated/30"}>
                  <td className="px-4 py-3 font-mono text-xs">{row.file}</td>
                  <td className="px-4 py-3 font-medium capitalize">{row.problem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href="/templates" className="text-sm font-medium text-accent hover:underline">
          Templates: mission.md, roadmap.md, tech-stack.md, design.md →
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">EARS — requirements format</h2>
        <p className="text-sm text-muted max-w-2xl">
          Kiro enforces precise, testable requirements — unambiguous sentences AI and humans parse the same way.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-elevated/50">
                <th className="px-4 py-3 text-left font-medium">Pattern</th>
                <th className="px-4 py-3 text-left font-medium">Template</th>
              </tr>
            </thead>
            <tbody>
              {earsPatterns.map((row) => (
                <tr key={row.type} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium">{row.type}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">{row.template}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href="/course/section-04/shape-spec" className="text-sm font-medium text-accent hover:underline">
          EARS in Section 4 shape-spec →
        </Link>
      </section>

      <div className="grid gap-4 sm:grid-cols-3">
        {kiroRigorPoints.map((point) => (
          <Card key={point.title} className="space-y-2">
            <p className="font-medium text-sm">{point.title}</p>
            <p className="text-sm text-muted leading-relaxed">{point.detail}</p>
          </Card>
        ))}
      </div>

      <Card className="bg-accent-soft border-accent/20">
        <p className="text-sm font-medium">This learning repo</p>
        <p className="text-sm text-muted mt-1 leading-relaxed">
          We mirror Kiro-style rigor with <code className="font-mono text-xs">requirements.md</code>, course docs, and
          Tier gates in Cursor — durable artifacts in git, not chat-only context.
        </p>
      </Card>

      <SectionPager slug="section-05" />
    </div>
  );
}

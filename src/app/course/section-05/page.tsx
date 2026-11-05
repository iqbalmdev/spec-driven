import Link from "next/link";
import {
  section05Topics,
  section05Takeaways,
  section05ModuleMeta,
  highRigorArtifactFiles,
  kiroWorkflowFiles,
} from "@/content/section-05";
import { AgentOsLifecycle } from "@/components/agent-os-lifecycle";
import { AgentOsMemoryScene } from "@/components/three/lazy-three-scenes";
import { ScrollReveal } from "@/components/immersive/scroll-reveal";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, QuoteBlock, Badge, Card } from "@/components/ui/layout";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function SectionFivePage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Section 5"
        title="Module 5: Tooling and Ecosystem"
        description="Agent OS for the feature lifecycle, high-rigor agentic IDEs like Amazon Kiro, and MCP as the runtime bridge to your stack."
      />

      <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
        <Badge variant="accent">{section05ModuleMeta.module}</Badge>
        <span>
          {section05ModuleMeta.lessonCount} lessons · ~{section05ModuleMeta.estimatedMinutes} min
        </span>
      </div>

      <QuoteBlock>
        Specs define intent. Tooling enforces the lifecycle and connects agents to reality at runtime.
      </QuoteBlock>

      <ScrollReveal>
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Lessons</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {section05Topics.map((topic, i) => (
              <Link key={topic.id} href={topic.href} className="group">
                <Card hover className="h-full space-y-3 transition-transform hover:-translate-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-muted">Lesson {i + 1}</span>
                    <PlayCircle className="h-4 w-4 text-muted group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-widest text-accent">{topic.subtitle}</p>
                  <h3 className="font-semibold group-hover:text-accent transition-colors">{topic.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{topic.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <section className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold">Kiro spec triad</h2>
            <p className="text-sm text-muted mt-1 max-w-2xl">
              requirements.md (what), design.md (how), tasks.md (steps) — each with clear must-include rules.
            </p>
          </div>
          <Link
            href="/course/section-05/spec-files"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent"
          >
            Full needs & requirements <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {kiroWorkflowFiles.map((row) => (
            <Card key={row.file} className="space-y-2">
              <code className="text-sm font-mono text-accent">{row.file}</code>
              <Badge variant="accent">{row.role}</Badge>
              <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
            </Card>
          ))}
        </div>
      </section>

      <AgentOsLifecycle />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">High-rigor documentation artifacts</h2>
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
        <AgentOsMemoryScene />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Practical Takeaways</h2>
        <ol className="space-y-3">
          {section05Takeaways.map((t, i) => (
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
          <p className="font-medium text-sm">Model Context Protocol</p>
          <p className="text-sm text-muted">How MCP bridges agents to repos, logs, and APIs.</p>
          <Link
            href="/course/section-05/mcp"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-auto"
          >
            Open MCP lesson <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>
        <Card className="flex flex-col gap-3">
          <p className="font-medium text-sm">SDD workflow map</p>
          <p className="text-sm text-muted">See shape-spec through verify in one view.</p>
          <Link href="/workflow" className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-auto">
            Interactive workflow <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>
      </div>

      <SectionPager slug="section-05" />
    </div>
  );
}

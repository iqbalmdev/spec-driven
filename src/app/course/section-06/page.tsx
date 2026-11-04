import Link from "next/link";
import {
  section06Topics,
  section06Takeaways,
  section06Benefits,
  agentOsMemoryFiles,
  agentOsWorkflow,
} from "@/content/section-06";
import { ImplementationPathPicker } from "@/components/agentos-path-picker";
import { ScrollReveal } from "@/components/immersive/scroll-reveal";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, QuoteBlock, Card } from "@/components/ui/layout";
import { ArrowRight } from "lucide-react";

export default function SectionSixPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Section 6"
        title="AgentOS — Persistent Project Memory"
        description="Structure AI-assisted development with memory files, shape-spec, /create-tasks, and implement or orchestrate paths — faster, consistent, reliable delivery."
      />

      <QuoteBlock>
        If your assistant remembered plan, roadmap, stack, and specs every session — what would you delegate first?
      </QuoteBlock>

      <ScrollReveal>
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Topics</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section06Topics.map((topic) => (
              <Link key={topic.id} href={topic.href} className="group">
                <Card hover className="h-full space-y-2 transition-transform hover:-translate-y-0.5">
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
        <h2 className="text-xl font-semibold">Three memory files</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {agentOsMemoryFiles.map((row) => (
            <Card key={row.file} className="space-y-2">
              <code className="text-sm font-mono text-accent">{row.file}</code>
              <p className="font-medium text-sm">{row.purpose}</p>
              <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
            </Card>
          ))}
        </div>
        <Link href="/templates" className="inline-flex items-center gap-1 text-sm font-medium text-accent">
          Copy templates <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">AgentOS workflow</h2>
        <div className="space-y-3">
          {agentOsWorkflow.map((row) => (
            <Card key={row.step} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-xs font-mono text-muted">{row.step}</span>
                <p className="font-medium text-sm">{row.action}</p>
              </div>
              <code className="text-xs font-mono text-accent">{row.files}</code>
            </Card>
          ))}
        </div>
      </section>

      <ImplementationPathPicker />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Benefits</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {section06Benefits.map((b) => (
            <li key={b} className="text-sm text-muted flex gap-2">
              <span className="text-accent">✓</span>
              {b}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Practical Takeaways</h2>
        <ol className="space-y-3">
          {section06Takeaways.map((t, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                {i + 1}
              </span>
              {t}
            </li>
          ))}
        </ol>
      </section>

      <SectionPager slug="section-06" />
    </div>
  );
}

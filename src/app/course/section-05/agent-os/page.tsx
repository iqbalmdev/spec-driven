import Link from "next/link";
import {
  agentOsExactCommands,
  agentOsFormalChecklist,
  agentOsLessonSections,
  clarificationBuckets,
  highRigorArtifactFiles,
} from "@/content/section-05";
import { AgentOsLifecycle } from "@/components/agent-os-lifecycle";
import { AgentOsMemoryScene } from "@/components/three/lazy-three-scenes";
import { ImplementationPathPicker } from "@/components/agentos-path-picker";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Badge, Card, QuoteBlock } from "@/components/ui/layout";
import { CheckCircle2 } from "lucide-react";

export default function AgentOsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 5 · Lesson 1"
        title="AgentOS — Persistent Memory & the Feature Lifecycle"
        description="Builder Methods AgentOS: /plan product for a project brain that survives every session, shape-spec and the requirements gate, atomic tasks, then implement or orchestrate with intention."
      />

      <QuoteBlock>
        How would your daily work change if your AI assistant never forgot the mission, roadmap, or stack?
      </QuoteBlock>

      {agentOsLessonSections.map((section) => (
        <section key={section.id} className="space-y-3 max-w-3xl">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <p className="text-muted leading-relaxed">{section.body}</p>
        </section>
      ))}

      <AgentOsLifecycle />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Documentation maintenance</h2>
        <p className="text-sm text-muted max-w-3xl leading-relaxed">
          Keep docs current and executable. Vague instructions produce vague agent behavior — use exact commands.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {agentOsExactCommands.map((row) => (
            <Card key={row.vague} className="space-y-2">
              <p className="text-xs text-red-600/70 dark:text-red-400 line-through">{row.vague}</p>
              <code className="block text-xs font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded px-2 py-1.5">
                {row.exact}
              </code>
            </Card>
          ))}
        </div>
      </section>

      <Card className="border-amber-500/20 bg-amber-500/5">
        <p className="font-medium text-sm">Approval gates (Tier Two)</p>
        <p className="text-sm text-muted mt-2 leading-relaxed">
          Actions that may be valid but have significant blast radius — schema changes, new dependencies, public API
          changes — need a human sanity check before the agent proceeds.
        </p>
        <Link href="/course/section-04/approval-gates" className="text-sm font-medium text-accent mt-3 inline-block hover:underline">
          Tier system in Section 4 →
        </Link>
      </Card>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Clarification — five buckets</h2>
        <p className="text-sm text-muted max-w-2xl">
          Agents ask across these categories so requirements are complete before implementation.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {clarificationBuckets.map((bucket) => (
            <li key={bucket.id}>
              <Card className="space-y-1 h-full">
                <Badge>{bucket.title}</Badge>
                <p className="text-sm text-muted leading-relaxed">{bucket.prompt}</p>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Formal checklist — ready for implementation</h2>
        <p className="text-sm text-muted max-w-2xl">
          The spec is ready only when clarification is done and intent is verifiable — shift effort from debugging code
          to correcting specifications.
        </p>
        <ul className="space-y-2">
          {agentOsFormalChecklist.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <Link href="/course/section-04/gate" className="text-sm font-medium text-accent hover:underline">
          Ready for Plan Checklist (Section 4) →
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Atomic decomposition</h2>
        <Card className="space-y-2">
          <p className="text-sm text-muted leading-relaxed">
            Break features into the smallest verifiable tasks. Document them in{" "}
            <code className="font-mono text-xs">tasks.md</code> — grouped by dependencies, each linked to specific
            requirements — so review, test, and implementation stay traceable.
          </p>
          <Link href="/course/section-02/create-tasks" className="text-sm font-medium text-accent hover:underline">
            /create-tasks (Section 2) →
          </Link>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Control vs speed</h2>
        <ImplementationPathPicker />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Persistent memory files</h2>
        <p className="text-sm text-muted max-w-2xl leading-relaxed">
          Created by <code className="font-mono text-xs">/plan product</code> — reload every session. Deeper walkthrough
          in{" "}
          <Link href="/course/section-06" className="text-accent font-medium hover:underline">
            Section 6
          </Link>
          . Kiro workflows may also use <code className="font-mono text-xs">mission.md</code> for the same product-focus
          role.
        </p>
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
                  <td className="px-4 py-3">
                    <span className="font-medium">{row.problem}</span>
                    <p className="text-muted text-xs mt-0.5">{row.detail}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <AgentOsMemoryScene />
      </section>

      <SectionPager slug="section-05" />
    </div>
  );
}

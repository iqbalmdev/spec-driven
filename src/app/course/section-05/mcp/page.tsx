import {
  mcpBridgeExamples,
  mcpDiagnosticToolkit,
  mcpGovernanceTiers,
  mcpLessonSections,
  mcpSpeculationVsObservation,
} from "@/content/section-05";
import { RuntimeGateflow } from "@/components/runtime-gateflow";
import { McpBridgeScene } from "@/components/three/lazy-three-scenes";
import { SectionPager } from "@/components/course-nav";
import { LessonPractice } from "@/components/practice/lesson-practice";
import { PageHeader, Card } from "@/components/ui/layout";

export default function McpPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 5 · Lesson 3"
        title="Model Context Protocol (MCP) — The Runtime Diagnostic Bridge"
        description="Turn AI from a glorified guesser into an evidence-driven partner — open protocol, bounded autonomy, and the Runtime Gateflow loop."
      />

      {mcpLessonSections.map((section) => (
        <section key={section.id} className="space-y-3 max-w-3xl">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <p className="text-muted leading-relaxed">{section.body}</p>
        </section>
      ))}

      <section className="grid gap-4 sm:grid-cols-2 max-w-4xl">
        <Card className="border-red-500/15 bg-red-500/5 space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-red-700 dark:text-red-400">Speculation</p>
          <p className="text-sm text-muted leading-relaxed">{mcpSpeculationVsObservation.speculation}</p>
        </Card>
        <Card className="border-emerald-500/15 bg-emerald-500/5 space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
            Observation
          </p>
          <p className="text-sm text-muted leading-relaxed">{mcpSpeculationVsObservation.observation}</p>
        </Card>
      </section>

      <McpBridgeScene />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Evidence-gathering toolkit</h2>
        <p className="text-sm text-muted max-w-2xl">
          Specialized MCP servers on the other side of the bridge — each gives the agent a different diagnostic superpower.
        </p>
        <ul className="space-y-3">
          {mcpDiagnosticToolkit.map((item) => (
            <li key={item.tool}>
              <Card className="space-y-1">
                <p className="font-medium text-sm">{item.tool}</p>
                <p className="text-sm text-muted leading-relaxed">{item.use}</p>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <RuntimeGateflow />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">MCP governance (three tiers)</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {mcpGovernanceTiers.map((item) => (
            <Card key={item.tier} className="space-y-2">
              <p className="font-medium text-sm">{item.tier}</p>
              <p className="text-sm text-muted leading-relaxed">{item.rule}</p>
            </Card>
          ))}
        </div>
        <p className="text-sm text-muted">
          Aligns with constitution tiers in Section 4 — record evidence, ask before risky state changes, never touch
          undeclared secrets.
        </p>
      </section>

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-elevated/50">
              <th className="px-4 py-3 text-left font-medium">Bridge</th>
              <th className="px-4 py-3 text-left font-medium">Runtime role</th>
            </tr>
          </thead>
          <tbody>
            {mcpBridgeExamples.map((row, i) => (
              <tr key={row.tool} className={i % 2 === 0 ? "" : "bg-surface-elevated/30"}>
                <td className="px-4 py-3 font-medium">{row.tool}</td>
                <td className="px-4 py-3 text-muted">{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Card className="bg-accent-soft border-accent/20">
        <p className="text-sm font-medium">Partner, not guesser</p>
        <p className="text-sm text-muted mt-2 leading-relaxed">
          With MCP, the question shifts from whether AI can help debug — to how you collaborate with evidence, specs, and
          bounded tools. Configure servers in Cursor and run Runtime Gateflow against{" "}
          <code className="font-mono text-xs">requirements.md</code>.
        </p>
      </Card>

      <LessonPractice lessonId="section-05/mcp" />

      <SectionPager slug="section-05" />
    </div>
  );
}

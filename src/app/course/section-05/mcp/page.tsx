import { mcpBridgeExamples } from "@/content/section-05";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Card } from "@/components/ui/layout";

export default function McpPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 5 · Lesson 3"
        title="Model Context Protocol (MCP) — The Runtime Diagnostic Bridge"
        description="MCP standardizes how AI assistants call tools at runtime — repositories, logs, APIs, and custom servers — so diagnostics use live context."
      />

      <section className="space-y-4 max-w-3xl">
        <p className="text-muted leading-relaxed">
          Specs say what should happen. MCP helps agents see what{" "}
          <em>is</em> happening: failing checks, database state, deployment status, or documentation — without pasting
          secrets or stale screenshots into chat.
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

      <Card className="space-y-2">
        <p className="font-medium text-sm">In Cursor</p>
        <p className="text-sm text-muted leading-relaxed">
          MCP servers (e.g. GitHub, Supabase, library docs) extend the agent at execution time — the “diagnostic bridge”
          between your spec-driven repo and the outside world.
        </p>
      </Card>

      <SectionPager slug="section-05" />
    </div>
  );
}

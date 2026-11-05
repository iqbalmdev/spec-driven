import { LivingDocsChecklist } from "@/components/living-docs-checklist";
import { documentationFiles, exactCommandsExample } from "@/content/section-04";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Badge, Card } from "@/components/ui/layout";

export default function DocumentationPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 4 · Documentation"
        title="Living Docs & Exact Commands"
        description="Keep documentation relevant and practical. Give AI exact commands — not vague suggestions."
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Minimal Living Docs Checklist</h2>
        <p className="text-sm text-muted leading-relaxed max-w-2xl">
          Before you merge or sign off a feature, confirm documentation matches reality — not what you intended at the
          start of the sprint.
        </p>
        <LivingDocsChecklist />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">File Roles</h2>
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
              {documentationFiles.map((row) => (
                <tr key={row.file} className="border-b border-border last:border-0">
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
        <h2 className="text-xl font-semibold">Exact Commands — Not Vague Suggestions</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {exactCommandsExample.map((row) => (
            <Card key={row.task} className="space-y-2">
              <p className="font-medium text-sm">{row.task}</p>
              <p className="text-xs text-red-600/70 dark:text-red-400 line-through">{row.vague}</p>
              <code className="block text-xs font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded px-2 py-1">
                {row.exact}
              </code>
            </Card>
          ))}
        </div>
      </section>

      <Card className="bg-accent-soft border-accent/20">
        <p className="text-sm font-medium">Maintenance rule</p>
        <p className="text-sm text-muted mt-1 leading-relaxed">
          When scope changes, update requirements.md and tasks.md in the same PR.
          Docs that drift from code are worse than no docs.
        </p>
      </Card>

      <SectionPager slug="section-04" />
    </div>
  );
}

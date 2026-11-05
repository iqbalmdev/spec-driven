import {
  executionSpineDocs,
  steeringFileGuide,
  kiroSpecFileGuide,
  kiroSpecWorkflowOrder,
} from "@/content/section-05-spec-files";
import { Card, Badge } from "@/components/ui/layout";

type DocGuide = {
  file: string;
  role: string;
  need: string;
  audience: string;
  summary: string;
  mustInclude: readonly string[];
  mustNot: readonly string[];
  readyWhen: readonly string[];
  whenToUpdate: string;
};

function SpecFileSection({ doc }: { doc: DocGuide }) {
  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <code className="text-lg font-mono text-accent">{doc.file}</code>
          <Badge variant="accent">{doc.role}</Badge>
          <span className="text-xs text-muted">Audience: {doc.audience}</span>
        </div>
        <p className="text-sm font-medium leading-relaxed">{doc.need}</p>
        <p className="text-sm text-muted leading-relaxed">{doc.summary}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="space-y-3">
          <p className="text-sm font-semibold">Must include</p>
          <ul className="space-y-2 text-sm text-muted list-disc pl-5">
            {doc.mustInclude.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
        <Card className="space-y-3 border-amber-500/15">
          <p className="text-sm font-semibold">Must not</p>
          <ul className="space-y-2 text-sm text-muted list-disc pl-5">
            {doc.mustNot.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="space-y-2 bg-emerald-500/5 border-emerald-500/15">
          <p className="text-sm font-semibold">Ready when</p>
          <ul className="space-y-1.5 text-sm text-muted">
            {doc.readyWhen.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-emerald-600 dark:text-emerald-400">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </Card>
        <Card className="space-y-2">
          <p className="text-sm font-semibold">When to update</p>
          <p className="text-sm text-muted leading-relaxed">{doc.whenToUpdate}</p>
        </Card>
      </div>
    </section>
  );
}

export function KiroSpecTriadGuide() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Execution spine — steering vs requirements</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-elevated/50">
                <th className="px-4 py-3 text-left font-medium">File</th>
                <th className="px-4 py-3 text-left font-medium">Purpose</th>
                <th className="px-4 py-3 text-left font-medium">Scope</th>
              </tr>
            </thead>
            <tbody>
              {executionSpineDocs.map((row, i) => (
                <tr key={row.file} className={i % 2 === 0 ? "" : "bg-surface-elevated/30"}>
                  <td className="px-4 py-3 font-mono text-xs">{row.file}</td>
                  <td className="px-4 py-3">{row.purpose}</td>
                  <td className="px-4 py-3 text-muted">{row.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <SpecFileSection doc={steeringFileGuide} />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Workflow order</h2>
        <p className="text-sm text-muted max-w-2xl leading-relaxed">
          Load steering first, then shape this feature’s requirements. Do not skip to tasks or code while the
          Clarification Gate is open.
        </p>
        <ol className="space-y-2">
          {kiroSpecWorkflowOrder.map((row) => (
            <li key={row.step}>
              <Card className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between py-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    {row.step}
                  </span>
                  <code className="text-sm font-mono text-accent">{row.file}</code>
                </div>
                <p className="text-sm text-muted sm:text-right">{row.action}</p>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      {kiroSpecFileGuide.map((doc) => (
        <SpecFileSection key={doc.file} doc={doc} />
      ))}
    </div>
  );
}

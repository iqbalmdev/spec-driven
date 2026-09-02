import { riskManagementExample } from "@/content/section-02";

export function RiskMatrix() {
  const { title, description, rows } = riskManagementExample;

  return (
    <section aria-labelledby="risk-matrix-heading" className="space-y-4">
      <div>
        <h2 id="risk-matrix-heading" className="text-xl font-semibold">
          {title}
        </h2>
        <p className="mt-2 text-sm text-muted leading-relaxed max-w-2xl">{description}</p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
        <table className="w-full min-w-[480px] text-sm">
          <thead>
            <tr className="bg-rose-100/80 dark:bg-rose-950/40">
              <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">
                What can go wrong?
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-l border-border">
                How do we detect it?
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-l border-border">
                Mitigation Strategy
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.risk}
                className={i % 2 === 0 ? "bg-surface" : "bg-surface-elevated/30"}
              >
                <td className="px-4 py-3.5 font-medium border-b border-border last:border-b-0">
                  {row.risk}
                </td>
                <td className="px-4 py-3.5 text-muted border-b border-l border-border last:border-b-0">
                  {row.detection}
                </td>
                <td className="px-4 py-3.5 text-muted border-b border-l border-border last:border-b-0">
                  {row.mitigation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted leading-relaxed">
        Include a risk matrix in your plan alongside tasks — especially for features touching databases, APIs, or external services.
      </p>
    </section>
  );
}

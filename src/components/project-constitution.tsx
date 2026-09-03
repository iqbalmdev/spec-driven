import { Check, HelpCircle, X } from "lucide-react";
import { projectConstitution } from "@/content/section-03";
import { cn } from "@/lib/utils";

const toneStyles = {
  success: {
    header: "bg-emerald-500/10 border-emerald-500/25 text-emerald-800 dark:text-emerald-300",
    icon: "bg-emerald-500 text-white",
    bullet: "text-emerald-600 dark:text-emerald-400",
  },
  warning: {
    header: "bg-amber-500/10 border-amber-500/25 text-amber-800 dark:text-amber-300",
    icon: "bg-amber-500 text-white",
    bullet: "text-amber-600 dark:text-amber-400",
  },
  danger: {
    header: "bg-rose-500/10 border-rose-500/25 text-rose-800 dark:text-rose-300",
    icon: "bg-rose-500 text-white",
    bullet: "text-rose-600 dark:text-rose-400",
  },
} as const;

const columnIcons = {
  "always-do": Check,
  "ask-first": HelpCircle,
  "never-do": X,
} as const;

export function ProjectConstitution() {
  const { title, description, columns } = projectConstitution;

  return (
    <section aria-labelledby="constitution-heading" className="space-y-6">
      <div className="text-center sm:text-left">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">Governing rules</p>
        <h2 id="constitution-heading" className="mt-1 text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted leading-relaxed">{description}</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
        <div className="grid sm:grid-cols-3">
          {columns.map((column, colIndex) => {
            const Icon = columnIcons[column.id];
            const styles = toneStyles[column.tone];
            return (
              <div
                key={column.id}
                className={cn(
                  "flex flex-col",
                  colIndex < columns.length - 1 && "border-b sm:border-b-0 sm:border-r border-border"
                )}
              >
                <div className={cn("flex items-center gap-2.5 border-b px-4 py-3.5", styles.header)}>
                  <span className={cn("flex h-6 w-6 items-center justify-center rounded-full", styles.icon)}>
                    <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <h3 className="text-sm font-semibold">{column.title}</h3>
                </div>
                <ul className="flex flex-1 flex-col divide-y divide-border">
                  {column.items.map((item) => (
                    <li key={item.rule} className="px-4 py-4 space-y-1">
                      <p className={cn("text-sm font-semibold", styles.bullet)}>{item.rule}</p>
                      <p className="text-xs text-muted leading-relaxed">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-muted leading-relaxed">
        Apply the Constitution on every <code className="font-mono text-foreground">/implement</code> run —
        Always Do by default, Ask First for high-impact changes, Never Do under any circumstance.
      </p>
    </section>
  );
}

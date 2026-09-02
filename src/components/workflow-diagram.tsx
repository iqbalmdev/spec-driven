import { workflowSteps } from "@/content/course";
import { cn } from "@/lib/utils";

export function WorkflowDiagram({ interactive }: { interactive?: boolean }) {
  return (
    <div className="overflow-x-auto pb-2">
      <ol className="flex min-w-max flex-col gap-0 sm:min-w-0 sm:flex-row sm:items-stretch">
        {workflowSteps.map((step, i) => (
          <li key={step.id} className="flex sm:flex-1 sm:flex-col sm:items-center">
            <div className="flex items-center gap-3 sm:flex-col sm:gap-2 sm:text-center sm:px-2">
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ring-2 ring-offset-2 ring-offset-background",
                  step.id === "gate"
                    ? "bg-amber-500/15 text-amber-700 ring-amber-500/40 dark:text-amber-400"
                    : step.id === "implement"
                      ? "bg-emerald-500/15 text-emerald-700 ring-emerald-500/40 dark:text-emerald-400"
                      : "bg-surface text-foreground ring-border"
                )}
              >
                {i + 1}
              </div>
              <div className="sm:space-y-1">
                <p className="text-sm font-semibold">{step.label}</p>
                <p className="text-xs text-muted leading-relaxed max-w-[140px] sm:max-w-none">
                  {step.description}
                </p>
              </div>
            </div>
            {i < workflowSteps.length - 1 && (
              <div
                className="ml-5 my-2 h-6 w-px bg-border sm:ml-0 sm:my-0 sm:mt-3 sm:h-px sm:w-full sm:flex-1"
                aria-hidden
              />
            )}
          </li>
        ))}
      </ol>
      {interactive && (
        <p className="mt-6 text-xs text-muted text-center">
          Gate condition: open items = 0 → then generate tasks & implement
        </p>
      )}
    </div>
  );
}

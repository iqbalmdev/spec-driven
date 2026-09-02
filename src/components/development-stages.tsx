"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { developmentStages } from "@/content/course";
import { Badge, Card } from "@/components/ui/layout";
import { FileText, ListChecks, ClipboardList, Code2, ShieldCheck } from "lucide-react";

const stageIcons = {
  specification: FileText,
  plan: ClipboardList,
  tasks: ListChecks,
  code: Code2,
  verify: ShieldCheck,
} as const;

export function DevelopmentStages() {
  const [activeId, setActiveId] = useState<string>("specification");
  const active = developmentStages.find((s) => s.id === activeId) ?? developmentStages[0];
  const ActiveIcon = stageIcons[active.id as keyof typeof stageIcons];

  return (
    <section aria-labelledby="stages-heading" className="space-y-8">
      <div>
        <h2 id="stages-heading" className="text-2xl font-semibold tracking-tight">
          Development Stages
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted leading-relaxed">
          From intent to verified software — each stage has a clear question, artifact, and output.
          Never skip ahead: spec before plan, plan before tasks, tasks before code.
        </p>
      </div>

      {/* Stage pipeline */}
      <div className="relative overflow-x-auto pb-2">
        <div className="flex min-w-max items-center gap-1 sm:min-w-0 sm:w-full">
          {developmentStages.map((stage, i) => {
            const Icon = stageIcons[stage.id as keyof typeof stageIcons];
            const isActive = activeId === stage.id;
            return (
              <div key={stage.id} className="flex items-center sm:flex-1">
                <button
                  type="button"
                  onClick={() => setActiveId(stage.id)}
                  className={cn(
                    "group flex flex-col items-center gap-2 rounded-xl px-3 py-4 transition-all w-full min-w-[88px]",
                    isActive
                      ? "bg-accent/5 ring-1 ring-accent/30"
                      : "hover:bg-surface"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full transition-all",
                      isActive
                        ? "bg-accent text-white shadow-sm"
                        : "bg-surface-elevated text-muted ring-1 ring-border group-hover:text-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[10px] font-mono text-muted">Stage {stage.stage}</span>
                  <span className={cn("text-xs font-semibold text-center", isActive && "text-accent")}>
                    {stage.name}
                  </span>
                </button>
                {i < developmentStages.length - 1 && (
                  <div className="hidden sm:block h-px flex-1 bg-border mx-1 min-w-[12px]" aria-hidden />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Active stage detail */}
      <Card className="space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <ActiveIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted">
                Stage {active.stage}
              </p>
              <h3 className="mt-0.5 text-xl font-semibold">{active.name}</h3>
            </div>
          </div>
          <Badge variant="accent">{active.question}</Badge>
        </div>

        <p className="text-sm leading-relaxed text-muted">{active.description}</p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">Artifact</p>
            <code className="block rounded-lg bg-surface-elevated px-3 py-2 text-xs font-mono">
              {active.artifact}
            </code>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">Anti-pattern</p>
            <p className="text-sm text-red-600/80 dark:text-red-400 leading-relaxed">
              {active.antiPattern}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">Outputs</p>
          <ul className="space-y-1.5">
            {active.outputs.map((output) => (
              <li key={output} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {output}
              </li>
            ))}
          </ul>
        </div>
      </Card>

      {/* Compact pipeline summary */}
      <div className="rounded-xl border border-border bg-surface-elevated/30 px-4 py-3">
        <code className="block text-xs font-mono text-muted text-center sm:text-left leading-relaxed">
          Specification → Plan → Tasks → Code → Verify
        </code>
      </div>
    </section>
  );
}

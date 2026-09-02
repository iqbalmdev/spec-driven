"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { messagingExampleTasks } from "@/content/section-02";
import { Badge, Card } from "@/components/ui/layout";
import { Check, Link2, ArrowDown } from "lucide-react";

export function TaskDecompositionDemo() {
  const [activeTask, setActiveTask] = useState(1);
  const [checked, setChecked] = useState<Record<number, boolean[]>>(() =>
    Object.fromEntries(messagingExampleTasks.map((t) => [t.id, t.verification.map(() => false)]))
  );

  const task = messagingExampleTasks.find((t) => t.id === activeTask) ?? messagingExampleTasks[0];

  const toggleCheck = (taskId: number, index: number) => {
    setChecked((prev) => ({
      ...prev,
      [taskId]: prev[taskId].map((v, i) => (i === index ? !v : v)),
    }));
  };

  const taskComplete = (taskId: number) => checked[taskId]?.every(Boolean) ?? false;

  return (
    <section aria-labelledby="tasks-demo-heading" className="space-y-8">
      <div>
        <h2 id="tasks-demo-heading" className="text-2xl font-semibold tracking-tight">
          Example — Messaging App Tasks
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted leading-relaxed">
          After clarifying the send-message spec, <code className="text-xs font-mono bg-surface-elevated px-1.5 py-0.5 rounded">/create-tasks</code> produces
          atomic, dependency-ordered tasks linked to requirements.
        </p>
      </div>

      {/* Dependency pipeline */}
      <div className="flex flex-wrap items-center gap-2">
        {messagingExampleTasks.map((t, i) => (
          <div key={t.id} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTask(t.id)}
              className={cn(
                "rounded-lg px-3 py-2 text-left transition-all ring-1",
                activeTask === t.id
                  ? "bg-accent/5 ring-accent/40"
                  : "bg-surface ring-border hover:ring-accent/20",
                taskComplete(t.id) && "border-emerald-500/30"
              )}
            >
              <span className="text-[10px] font-mono text-muted">Task {t.id}</span>
              <p className="text-xs font-medium mt-0.5 max-w-[120px] leading-tight">{t.title}</p>
              {taskComplete(t.id) && (
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1 block">Verified ✓</span>
              )}
            </button>
            {i < messagingExampleTasks.length - 1 && (
              <ArrowDown className="h-3 w-3 text-border rotate-[-90deg] hidden sm:block" aria-hidden />
            )}
          </div>
        ))}
      </div>

      {/* Active task detail */}
      <Card className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">{task.group}</p>
            <h3 className="mt-1 text-lg font-semibold">Task {task.id}: {task.title}</h3>
          </div>
          {taskComplete(task.id) && <Badge variant="success">Complete</Badge>}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 text-sm">
          <div className="flex items-start gap-2">
            <Link2 className="h-4 w-4 shrink-0 text-accent mt-0.5" />
            <div>
              <p className="text-xs text-muted">Requirement</p>
              <p className="font-medium">{task.requirement}</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted">Depends on</p>
            <p className="font-medium">{task.dependsOn ?? "—"}</p>
          </div>
        </div>

        <p className="text-sm text-muted leading-relaxed">{task.description}</p>

        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">Verification</p>
          {task.verification.map((v, i) => (
            <button
              key={v}
              type="button"
              onClick={() => toggleCheck(task.id, i)}
              className="flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-surface-elevated"
            >
              <span
                className={cn(
                  "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors",
                  checked[task.id][i]
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-border"
                )}
              >
                {checked[task.id][i] && <Check className="h-3 w-3" />}
              </span>
              {v}
            </button>
          ))}
        </div>
      </Card>
    </section>
  );
}

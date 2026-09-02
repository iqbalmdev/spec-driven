"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { messagingImplementationTasks } from "@/content/section-03";
import { Badge, Card } from "@/components/ui/layout";
import { Check, Circle, Lock, Play } from "lucide-react";

type TaskStatus = "complete" | "in_progress" | "pending" | "locked";

function getTaskStatus(
  task: (typeof messagingImplementationTasks)[number],
  completedIds: Set<number>
): TaskStatus {
  if (completedIds.has(task.id)) return "complete";
  if (task.dependsOn) {
    const depNum = parseInt(task.dependsOn.replace("Task ", ""), 10);
    if (!completedIds.has(depNum)) return "locked";
  }
  const firstIncomplete = messagingImplementationTasks.find((t) => !completedIds.has(t.id));
  if (firstIncomplete?.id === task.id) return "in_progress";
  return "pending";
}

export function TaskImplementationDemo() {
  const [completedIds, setCompletedIds] = useState<Set<number>>(new Set([1, 2]));
  const [activeTask, setActiveTask] = useState(3);
  const [checked, setChecked] = useState<Record<number, boolean[]>>(() =>
    Object.fromEntries(
      messagingImplementationTasks.map((t) => [
        t.id,
        t.verification.map((_, i) => t.id <= 2 ? true : false),
      ])
    )
  );

  const toggleCheck = (taskId: number, index: number) => {
    const status = getTaskStatus(
      messagingImplementationTasks.find((t) => t.id === taskId)!,
      completedIds
    );
    if (status === "locked") return;
    setChecked((prev) => ({
      ...prev,
      [taskId]: prev[taskId].map((v, i) => (i === index ? !v : v)),
    }));
  };

  const markComplete = (taskId: number) => {
    if (!checked[taskId]?.every(Boolean)) return;
    setCompletedIds((prev) => new Set([...prev, taskId]));
    const next = messagingImplementationTasks.find(
      (t) => !completedIds.has(t.id) && t.id !== taskId
    );
    if (next) setActiveTask(next.id);
  };

  const task = messagingImplementationTasks.find((t) => t.id === activeTask)!;
  const status = getTaskStatus(task, completedIds);
  const allComplete = messagingImplementationTasks.every((t) => completedIds.has(t.id));

  return (
    <section aria-labelledby="implement-demo-heading" className="space-y-8">
      <div>
        <h2 id="implement-demo-heading" className="text-2xl font-semibold tracking-tight">
          Example — Implementing Messaging Tasks
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted leading-relaxed">
          Execute tasks in dependency order. Verify each before advancing. Task 3 is in progress — complete its verification to unlock Task 4.
        </p>
      </div>

      {/* Task pipeline status */}
      <div className="flex flex-wrap gap-2">
        {messagingImplementationTasks.map((t) => {
          const s = getTaskStatus(t, completedIds);
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => s !== "locked" && setActiveTask(t.id)}
              disabled={s === "locked"}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-left text-xs ring-1 transition-all",
                s === "complete" && "bg-emerald-500/10 ring-emerald-500/30 text-emerald-700 dark:text-emerald-400",
                s === "in_progress" && "bg-accent/10 ring-accent/40 text-accent",
                s === "pending" && "bg-surface ring-border text-muted hover:ring-accent/20",
                s === "locked" && "bg-surface ring-border text-muted opacity-50 cursor-not-allowed"
              )}
            >
              {s === "complete" && <Check className="h-3.5 w-3.5" />}
              {s === "in_progress" && <Play className="h-3.5 w-3.5" />}
              {s === "locked" && <Lock className="h-3.5 w-3.5" />}
              {s === "pending" && <Circle className="h-3.5 w-3.5" />}
              Task {t.id}
            </button>
          );
        })}
      </div>

      {allComplete && (
        <Card className="border-emerald-500/30 bg-emerald-500/5 text-center py-6">
          <p className="font-semibold text-emerald-700 dark:text-emerald-400">Feature complete</p>
          <p className="text-sm text-muted mt-1">All tasks verified — acceptance criteria ready to run.</p>
        </Card>
      )}

      {/* Active task */}
      <Card className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={status === "complete" ? "success" : status === "locked" ? "default" : "accent"}>
            Task {task.id} — {status === "complete" ? "Verified" : status === "locked" ? "Locked" : "Implement"}
          </Badge>
          <span className="text-xs text-muted">{task.requirement}</span>
        </div>

        <h3 className="font-semibold">{task.title}</h3>
        {task.dependsOn && (
          <p className="text-xs text-muted">Depends on: {task.dependsOn}</p>
        )}

        <div className="rounded-lg bg-surface-elevated px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-wide text-muted mb-1">Implementation</p>
          <p className="text-sm leading-relaxed">{task.implementation}</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">Verification</p>
          {task.verification.map((v, i) => (
            <button
              key={v}
              type="button"
              onClick={() => toggleCheck(task.id, i)}
              disabled={status === "locked" || status === "complete"}
              className={cn(
                "flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                status !== "locked" && status !== "complete" && "hover:bg-surface-elevated",
                (status === "locked" || status === "complete") && "opacity-60 cursor-default"
              )}
            >
              <span
                className={cn(
                  "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors",
                  checked[task.id]?.[i]
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-border"
                )}
              >
                {checked[task.id]?.[i] && <Check className="h-3 w-3" />}
              </span>
              {v}
            </button>
          ))}
        </div>

        {status === "in_progress" && (
          <button
            type="button"
            onClick={() => markComplete(task.id)}
            disabled={!checked[task.id]?.every(Boolean)}
            className={cn(
              "w-full rounded-lg py-2.5 text-sm font-medium transition-opacity",
              checked[task.id]?.every(Boolean)
                ? "bg-foreground text-background hover:opacity-90"
                : "bg-surface-elevated text-muted cursor-not-allowed"
            )}
          >
            Mark Task {task.id} verified → unlock next
          </button>
        )}
      </Card>
    </section>
  );
}

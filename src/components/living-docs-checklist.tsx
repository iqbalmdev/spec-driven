"use client";

import { useState } from "react";
import { minimalLivingDocsChecklist } from "@/content/section-04";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function LivingDocsChecklist({ className }: { className?: string }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const allDone = minimalLivingDocsChecklist.every((item) => checked[item.id]);

  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-surface-elevated/80 shadow-sm",
        className
      )}
    >
      <div className="border-b border-border bg-muted/30 px-5 py-3">
        <h3 className="text-sm font-semibold tracking-tight">Minimal &quot;Living Docs&quot; Checklist</h3>
      </div>
      <ul className="divide-y divide-border px-5 py-2">
        {minimalLivingDocsChecklist.map((item) => {
          const isChecked = !!checked[item.id];
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="flex w-full gap-3 py-3.5 text-left text-sm leading-relaxed transition-colors hover:bg-surface/60 -mx-2 px-2 rounded-lg"
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors",
                    isChecked
                      ? "border-accent bg-accent text-white"
                      : "border-border bg-background"
                  )}
                  aria-hidden
                >
                  {isChecked && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                </span>
                <span className={cn(isChecked && "text-muted line-through decoration-border")}>{item.label}</span>
              </button>
              {item.detail && (
                <p className="pb-3 pl-8 text-xs text-muted -mt-1">{item.detail}</p>
              )}
            </li>
          );
        })}
      </ul>
      <div
        className={cn(
          "border-t border-border px-5 py-3 text-xs font-medium",
          allDone ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "text-muted"
        )}
      >
        {allDone
          ? "Living docs gate passed — safe to ship or merge."
          : "Complete before merge: spec, plan, tasks, and verification must match reality."}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { openItems } from "@/content/course";
import { Badge, Card } from "@/components/ui/layout";
import { AlertTriangle, CheckCircle2, Lock, Unlock } from "lucide-react";

export function ClarificationGateDemo() {
  const [resolved, setResolved] = useState<Record<string, boolean>>({
    "OI-001": true,
    "OI-002": false,
    "OI-003": false,
  });

  const openCount = Object.values(resolved).filter((v) => !v).length;
  const gateOpen = openCount === 0;

  return (
    <section aria-labelledby="gate-heading" className="space-y-6">
      <div>
        <h2 id="gate-heading" className="text-2xl font-semibold tracking-tight">
          Clarification Gate
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted leading-relaxed">
          Zero unresolved items in requirements.md before implementation. Toggle items below to see the gate in action.
        </p>
      </div>

      <Card
        className={cn(
          "flex items-center gap-4 border-2 transition-colors",
          gateOpen ? "border-emerald-500/40 bg-emerald-500/5" : "border-amber-500/40 bg-amber-500/5"
        )}
      >
        {gateOpen ? (
          <Unlock className="h-8 w-8 shrink-0 text-emerald-600 dark:text-emerald-400" />
        ) : (
          <Lock className="h-8 w-8 shrink-0 text-amber-600 dark:text-amber-400" />
        )}
        <div>
          <p className="font-semibold">
            {gateOpen ? "Gate open — ready to implement" : "Gate closed — resolve open items first"}
          </p>
          <p className="text-sm text-muted mt-0.5">
            {openCount} open item{openCount !== 1 ? "s" : ""} remaining
          </p>
        </div>
        <Badge variant={gateOpen ? "success" : "warning"} className="ml-auto">
          {gateOpen ? "Proceed" : "Blocked"}
        </Badge>
      </Card>

      <div className="space-y-3">
        {openItems.map((item) => {
          const isResolved = resolved[item.id] ?? item.status === "resolved";
          return (
            <Card key={item.id} className="flex gap-4 items-start">
              <button
                type="button"
                onClick={() => setResolved((prev) => ({ ...prev, [item.id]: !isResolved }))}
                className="mt-0.5 shrink-0 rounded-md p-1 transition-colors hover:bg-surface-elevated"
                aria-label={isResolved ? "Mark as open" : "Mark as resolved"}
              >
                {isResolved ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                )}
              </button>
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-muted">{item.id}</span>
                  <Badge variant={isResolved ? "success" : "warning"}>
                    {isResolved ? "RESOLVED" : "OPEN"}
                  </Badge>
                </div>
                <p className="text-sm leading-relaxed">{item.question}</p>
                {"resolution" in item && item.resolution && isResolved && (
                  <p className="text-xs text-muted pt-1">→ {item.resolution}</p>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

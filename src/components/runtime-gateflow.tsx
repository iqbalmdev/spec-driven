"use client";

import { useState } from "react";
import { runtimeGateflowSteps } from "@/content/section-05";
import { cn } from "@/lib/utils";

export function RuntimeGateflow() {
  const [active, setActive] = useState(0);
  const step = runtimeGateflowSteps[active];

  return (
    <section className="space-y-6 rounded-2xl border border-border bg-surface/50 p-6 sm:p-8">
      <div>
        <h2 className="text-xl font-semibold">Runtime Gateflow</h2>
        <p className="text-sm text-muted mt-1 max-w-2xl">
          A repeatable diagnostic loop inside spec-driven development — from a requirement to evidence, root cause,
          and a verifiable fix.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {runtimeGateflowSteps.map((s, i) => (
          <button
            key={s.step}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full px-3 py-2 text-sm font-medium transition-colors",
              i === active ? "bg-accent text-white" : "bg-surface-elevated text-muted hover:text-foreground"
            )}
          >
            {s.step}. {s.title}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-background p-5 space-y-2">
        <p className="text-xs font-mono text-accent">{step.tool}</p>
        <p className="font-medium">{step.title}</p>
        <p className="text-sm text-muted leading-relaxed">{step.detail}</p>
      </div>

      <p className="text-xs text-center text-muted">
        Loop: evidence anchors back to{" "}
        <code className="font-mono text-foreground">requirements.md</code> — vague specs surface in the trail.
      </p>
    </section>
  );
}

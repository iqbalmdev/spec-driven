"use client";

import { useState } from "react";
import { implementationPaths } from "@/content/section-06";
import { cn } from "@/lib/utils";

export function ImplementationPathPicker() {
  const [selected, setSelected] = useState<"implement" | "orchestrate">("implement");
  const path = implementationPaths.find((p) => p.id === selected)!;

  return (
    <section className="space-y-6 rounded-2xl border border-border bg-surface/50 p-6 sm:p-8">
      <div>
        <h2 className="text-xl font-semibold">Implementation paths</h2>
        <p className="text-sm text-muted mt-1">Same AgentOS pipeline — different execution strategy.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {implementationPaths.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setSelected(p.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              selected === p.id ? "bg-accent text-white" : "bg-surface-elevated text-muted hover:text-foreground"
            )}
          >
            {p.title}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-background p-5 space-y-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">{path.tagline}</p>
          <p className="font-semibold mt-1">{path.title}</p>
          <p className="text-sm text-muted mt-2 leading-relaxed">{path.description}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted mb-2">Best when</p>
          <ul className="space-y-1">
            {path.bestFor.map((item) => (
              <li key={item} className="text-sm flex gap-2">
                <span className="text-accent">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

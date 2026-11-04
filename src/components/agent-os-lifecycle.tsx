"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { agentOsLifecycle } from "@/content/section-05";
import { cn } from "@/lib/utils";

export function AgentOsLifecycle() {
  const [active, setActive] = useState(0);
  const item = agentOsLifecycle[active];

  return (
    <section className="space-y-6 rounded-2xl border border-border bg-surface/50 p-6 sm:p-8">
      <div>
        <h2 className="text-xl font-semibold">Feature lifecycle (Agent OS)</h2>
        <p className="text-sm text-muted mt-1 max-w-2xl">
          Each stage is a system call — agents and humans run the same pipeline.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {agentOsLifecycle.map((s, i) => (
          <button
            key={s.stage}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              i === active ? "bg-accent text-white" : "bg-surface-elevated text-muted hover:text-foreground"
            )}
          >
            {s.stage}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="rounded-xl border border-border bg-background p-5 space-y-2"
        >
          <p className="text-xs font-mono text-accent">{item.command}</p>
          <p className="text-sm leading-relaxed">{item.detail}</p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

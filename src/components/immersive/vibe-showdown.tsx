"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const paths = {
  vibe: {
    label: "Vibe-coding",
    color: "red",
    steps: ["Prompt", "Code", '"Looks okay?"', "Ship", "Drift"],
    outcome: "Fast start. Expensive rework. Intent lost in chat.",
  },
  sdd: {
    label: "Spec-Driven Development",
    color: "emerald",
    steps: ["shape-spec", "requirements.md", "Gate", "Tasks", "Code", "Verify"],
    outcome: "Slower start. Predictable delivery. Intent in the repo.",
  },
} as const;

export function VibeShowdown() {
  const [active, setActive] = useState<"vibe" | "sdd">("sdd");
  const current = paths[active];

  return (
    <section aria-labelledby="showdown-heading" className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 id="showdown-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Two paths. One choice.
        </h2>
        <p className="mt-3 text-sm text-muted leading-relaxed">
          Click each path to see how intent flows — or drifts — through the process.
        </p>
      </div>

      <div className="flex justify-center gap-3">
        {(["vibe", "sdd"] as const).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              active === key
                ? key === "sdd"
                  ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 ring-1 ring-emerald-500/30"
                  : "bg-red-500/15 text-red-700 dark:text-red-400 ring-1 ring-red-500/30"
                : "bg-surface text-muted ring-1 ring-border hover:text-foreground"
            )}
          >
            {paths[key].label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className={cn(
            "rounded-2xl border p-6 sm:p-8",
            active === "sdd"
              ? "border-emerald-500/25 bg-emerald-500/5"
              : "border-red-500/25 bg-red-500/5"
          )}
        >
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {current.steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2"
              >
                <span
                  className={cn(
                    "rounded-lg px-3 py-2 text-xs font-mono sm:text-sm",
                    active === "sdd"
                      ? "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300"
                      : "bg-red-500/10 text-red-800 dark:text-red-300"
                  )}
                >
                  {step}
                </span>
                {i < current.steps.length - 1 && (
                  <span className="text-muted text-lg" aria-hidden>→</span>
                )}
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">{current.outcome}</p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

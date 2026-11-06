"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { seededShuffle } from "@/lib/practice-utils";
import { cn } from "@/lib/utils";

interface StepOrderExerciseProps {
  exerciseId: string;
  prompt: string;
  steps: readonly string[];
}

type MoveDirection = -1 | 1;

const LAYOUT_TRANSITION = { type: "spring", stiffness: 500, damping: 40 } as const;

function getFeedback(correctCount: number, total: number): string {
  if (correctCount === total) return "Correct order. You can rebuild this workflow from memory.";
  return `${correctCount} of ${total} steps are in the right place. Adjust the highlighted steps and check again.`;
}

export function StepOrderExercise({ exerciseId, prompt, steps }: StepOrderExerciseProps) {
  const reduceMotion = useReducedMotion();
  const [attempt, setAttempt] = useState(0);
  const [order, setOrder] = useState<number[]>(() => seededShuffle(steps.length, exerciseId));
  const [checked, setChecked] = useState(false);

  const correctCount = order.filter((stepIndex, position) => stepIndex === position).length;
  const solved = checked && correctCount === steps.length;

  const move = (position: number, direction: MoveDirection) => {
    const target = position + direction;
    if (target < 0 || target >= order.length) return;
    setOrder((current) => {
      const next = [...current];
      [next[position], next[target]] = [next[target], next[position]];
      return next;
    });
    setChecked(false);
  };

  const shuffle = () => {
    const nextAttempt = attempt + 1;
    setAttempt(nextAttempt);
    setOrder(seededShuffle(steps.length, `${exerciseId}:${nextAttempt}`));
    setChecked(false);
  };

  const reveal = () => {
    setOrder(steps.map((_, index) => index));
    setChecked(true);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted">{prompt} Use the arrows to move a step, then check your order.</p>

      <ol className="space-y-2">
        {order.map((stepIndex, position) => {
          const label = steps[stepIndex];
          const inPlace = stepIndex === position;
          return (
            <motion.li
              key={label}
              layout={!reduceMotion}
              transition={LAYOUT_TRANSITION}
              className={cn(
                "flex items-center gap-3 rounded-lg border bg-surface px-3 py-2.5 text-sm",
                !checked && "border-border",
                checked && inPlace && "border-emerald-500/40 bg-emerald-500/5",
                checked && !inPlace && "border-amber-500/40 bg-amber-500/5"
              )}
            >
              <span className="w-5 shrink-0 text-center font-mono text-xs text-muted">{position + 1}</span>
              <span className="flex-1 text-foreground">{label}</span>
              <span className="flex shrink-0 gap-1">
                <button
                  type="button"
                  onClick={() => move(position, -1)}
                  disabled={position === 0 || solved}
                  aria-label={`Move “${label}” up`}
                  className="rounded-md p-1 text-muted transition-colors hover:bg-background hover:text-foreground disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                >
                  <ChevronUp className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => move(position, 1)}
                  disabled={position === order.length - 1 || solved}
                  aria-label={`Move “${label}” down`}
                  className="rounded-md p-1 text-muted transition-colors hover:bg-background hover:text-foreground disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                >
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </button>
              </span>
            </motion.li>
          );
        })}
      </ol>

      <p aria-live="polite" className="min-h-5 text-sm text-muted">
        {checked && getFeedback(correctCount, steps.length)}
      </p>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setChecked(true)}
          disabled={solved}
          className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          Check order
        </button>
        <button
          type="button"
          onClick={shuffle}
          className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
        >
          Shuffle
        </button>
        {checked && !solved && (
          <button
            type="button"
            onClick={reveal}
            className="rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Show answer
          </button>
        )}
      </div>
    </div>
  );
}

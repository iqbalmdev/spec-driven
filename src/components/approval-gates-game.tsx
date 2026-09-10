"use client";

import { useState } from "react";
import { approvalGateScenarios, tierSystem } from "@/content/section-04";
import { Badge, Card } from "@/components/ui/layout";
import { cn } from "@/lib/utils";
import { Check, HelpCircle, Shield, X, Zap } from "lucide-react";

type Choice = "proceed" | "ask" | "block";

const choices: { id: Choice; label: string; icon: typeof Zap }[] = [
  { id: "proceed", label: "Proceed", icon: Zap },
  { id: "ask", label: "Ask First", icon: HelpCircle },
  { id: "block", label: "Block", icon: Shield },
];

export function ApprovalGatesGame() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<Choice | null>(null);
  const [finished, setFinished] = useState(false);

  const scenario = approvalGateScenarios[index];
  const answered = selected !== null;

  const pick = (choice: Choice) => {
    if (answered) return;
    setSelected(choice);
    if (choice === scenario.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (index < approvalGateScenarios.length - 1) {
      setIndex((i) => i + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const reset = () => {
    setIndex(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  };

  if (finished) {
    return (
      <section className="space-y-6">
        <Card className="text-center py-10 space-y-4">
          <p className="text-2xl font-semibold">Quest complete</p>
          <p className="text-4xl font-bold text-accent">{score} / {approvalGateScenarios.length}</p>
          <p className="text-sm text-muted">Tier decisions mastered</p>
          <button
            type="button"
            onClick={reset}
            className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background"
          >
            Play again
          </button>
        </Card>
      </section>
    );
  }

  return (
    <section aria-labelledby="gates-game-heading" className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="gates-game-heading" className="text-2xl font-semibold tracking-tight">
            Approval Gates — Tier Quest
          </h2>
          <p className="mt-2 text-sm text-muted">Choose: Proceed · Ask First · Block</p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Badge variant="accent">Round {index + 1}/{approvalGateScenarios.length}</Badge>
          <Badge variant="success">Score {score}</Badge>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-3 text-xs">
        {Object.values(tierSystem).map((tier) => (
          <div key={tier.label} className="rounded-lg border border-border px-3 py-2 text-muted">
            <span className="font-medium text-foreground">{tier.label.split("—")[0]}</span>
          </div>
        ))}
      </div>

      <Card className="space-y-6 py-8">
        <p className="text-center text-lg font-medium leading-relaxed px-4">{scenario.action}</p>
        <div className="flex flex-wrap justify-center gap-3">
          {choices.map(({ id, label, icon: Icon }) => {
            const isSelected = selected === id;
            const isCorrect = id === scenario.correct;
            return (
              <button
                key={id}
                type="button"
                onClick={() => pick(id)}
                disabled={answered}
                className={cn(
                  "flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium ring-1 transition-all",
                  !answered && "hover:ring-accent/50 hover:bg-accent/5",
                  answered && isSelected && isCorrect && "bg-emerald-500/15 ring-emerald-500/40 text-emerald-700 dark:text-emerald-400",
                  answered && isSelected && !isCorrect && "bg-rose-500/15 ring-rose-500/40 text-rose-700 dark:text-rose-400",
                  answered && !isSelected && isCorrect && "ring-emerald-500/30",
                  !answered && "ring-border bg-surface"
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="mx-auto max-w-lg space-y-4 px-4">
            <div className="flex items-center justify-center gap-2">
              {selected === scenario.correct ? (
                <Check className="h-5 w-5 text-emerald-600" />
              ) : (
                <X className="h-5 w-5 text-rose-600" />
              )}
              <span className="text-sm font-medium">
                {selected === scenario.correct ? "Correct!" : `Correct: ${scenario.correct === "proceed" ? "Proceed" : scenario.correct === "ask" ? "Ask First" : "Block"}`}
              </span>
            </div>
            <p className="text-sm text-muted text-center leading-relaxed">{scenario.explanation}</p>
            <button
              type="button"
              onClick={next}
              className="w-full rounded-lg bg-foreground py-2.5 text-sm font-medium text-background"
            >
              {index < approvalGateScenarios.length - 1 ? "Next scenario →" : "See results"}
            </button>
          </div>
        )}
      </Card>
    </section>
  );
}

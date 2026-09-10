"use client";

import { useState } from "react";
import { shapeSpecPrompts } from "@/content/section-04";
import { Badge, Card } from "@/components/ui/layout";
import { cn } from "@/lib/utils";
import { MessageSquare, Unlock } from "lucide-react";

export function ShapeSpecSimulator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [complete, setComplete] = useState(false);

  const current = shapeSpecPrompts[step];
  const value = answers[step] ?? "";
  const canAdvance = value.trim().length > 10;

  const submit = () => {
    if (!canAdvance) return;
    if (step < shapeSpecPrompts.length - 1) {
      setStep((s) => s + 1);
    } else {
      setComplete(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setComplete(false);
  };

  if (complete) {
    return (
      <Card className="space-y-4 border-emerald-500/30 bg-emerald-500/5">
        <div className="flex items-center gap-3">
          <Unlock className="h-6 w-6 text-emerald-600" />
          <div>
            <p className="font-semibold">Clarification Gate — Ready</p>
            <p className="text-sm text-muted">Structured conversation complete. Open items captured — ready for requirements.md.</p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          {shapeSpecPrompts.map((p, i) => (
            <div key={p.phase} className="rounded-lg bg-surface px-3 py-2">
              <span className="text-xs font-medium text-accent">{p.phase}</span>
              <p className="text-muted mt-0.5">{answers[i]}</p>
            </div>
          ))}
        </div>
        <button type="button" onClick={reset} className="text-sm text-accent hover:underline">
          Run again
        </button>
      </Card>
    );
  }

  return (
    <section aria-labelledby="shape-spec-sim" className="space-y-4">
      <div>
        <h2 id="shape-spec-sim" className="text-xl font-semibold">shape-spec Simulator</h2>
        <p className="text-sm text-muted mt-1">Structured conversation — answer each phase before coding.</p>
      </div>

      <div className="flex gap-2">
        {shapeSpecPrompts.map((p, i) => (
          <div
            key={p.phase}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              i < step ? "bg-emerald-500" : i === step ? "bg-accent" : "bg-border"
            )}
          />
        ))}
      </div>

      <Card className="space-y-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-accent" />
          <Badge variant="accent">Phase {step + 1}: {current.phase}</Badge>
        </div>
        <p className="font-medium">{current.question}</p>
        <textarea
          value={value}
          onChange={(e) => setAnswers((prev) => ({ ...prev, [step]: e.target.value }))}
          placeholder={current.placeholder}
          rows={3}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
        <button
          type="button"
          onClick={submit}
          disabled={!canAdvance}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-opacity",
            canAdvance ? "bg-foreground text-background hover:opacity-90" : "bg-surface-elevated text-muted cursor-not-allowed"
          )}
        >
          {step < shapeSpecPrompts.length - 1 ? "Next phase →" : "Complete shape-spec"}
        </button>
      </Card>
    </section>
  );
}

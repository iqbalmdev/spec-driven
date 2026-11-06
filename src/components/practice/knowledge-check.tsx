"use client";

import { useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import type { QuizQuestion } from "@/content/practice";
import { cn } from "@/lib/utils";

interface KnowledgeCheckProps {
  questions: readonly QuizQuestion[];
  onComplete?: (score: number, total: number) => void;
}

type AnswerMap = Readonly<Record<string, number>>;

const OPTION_LETTERS = ["A", "B", "C", "D", "E"] as const;

function countCorrect(questions: readonly QuizQuestion[], answers: AnswerMap): number {
  return questions.filter((question) => answers[question.id] === question.correctIndex).length;
}

function getSummaryMessage(score: number, total: number): string {
  if (score === total) return "Every answer correct. Try the steps or flashcards next.";
  return "Read the explanations, then try again — the second attempt is where recall sticks.";
}

export function KnowledgeCheck({ questions, onComplete }: KnowledgeCheckProps) {
  const [answers, setAnswers] = useState<AnswerMap>({});

  const answeredCount = Object.keys(answers).length;
  const finished = answeredCount === questions.length;
  const score = countCorrect(questions, answers);

  const choose = (question: QuizQuestion, optionIndex: number) => {
    if (question.id in answers) return;
    const next = { ...answers, [question.id]: optionIndex };
    setAnswers(next);
    if (Object.keys(next).length === questions.length) {
      onComplete?.(countCorrect(questions, next), questions.length);
    }
  };

  const reset = () => setAnswers({});

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between text-xs text-muted">
        <span>
          {answeredCount} of {questions.length} answered
        </span>
        <div className="h-1 w-32 overflow-hidden rounded-full bg-border" aria-hidden>
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-300"
            style={{ width: `${(answeredCount / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <ol className="space-y-4">
        {questions.map((question, questionIndex) => {
          const selected = answers[question.id];
          const answered = selected !== undefined;
          const isCorrect = selected === question.correctIndex;
          const groupLabelId = `${question.id}-prompt`;

          return (
            <li key={question.id} className="rounded-xl border border-border bg-background/40 p-4 sm:p-5">
              <p id={groupLabelId} className="text-sm font-medium leading-relaxed text-foreground">
                <span className="mr-2 text-muted">{questionIndex + 1}.</span>
                {question.prompt}
              </p>

              <div role="group" aria-labelledby={groupLabelId} className="mt-3 grid gap-2">
                {question.options.map((option, optionIndex) => {
                  const isSelected = selected === optionIndex;
                  const isAnswer = optionIndex === question.correctIndex;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => choose(question, optionIndex)}
                      disabled={answered}
                      aria-pressed={isSelected}
                      className={cn(
                        "flex items-start gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
                        !answered && "border-border bg-surface hover:border-accent/40 hover:bg-accent/5",
                        answered && isAnswer && "border-emerald-500/40 bg-emerald-500/5",
                        answered && isSelected && !isAnswer && "border-rose-500/40 bg-rose-500/5",
                        answered && !isSelected && !isAnswer && "border-border bg-surface opacity-60"
                      )}
                    >
                      <span className="mt-px font-mono text-xs text-muted">{OPTION_LETTERS[optionIndex]}</span>
                      <span className="flex-1 text-foreground">{option}</span>
                      {answered && isAnswer && <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-label="Correct answer" />}
                      {answered && isSelected && !isAnswer && <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" aria-label="Your answer" />}
                    </button>
                  );
                })}
              </div>

              <div aria-live="polite">
                {answered && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    <span className={cn("font-medium", isCorrect ? "text-emerald-700 dark:text-emerald-400" : "text-foreground")}>
                      {isCorrect ? "Correct. " : "Not quite. "}
                    </span>
                    {question.explanation}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {finished && (
        <div
          className="flex flex-col gap-3 rounded-xl border border-accent/20 bg-accent-soft px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
          role="status"
        >
          <div>
            <p className="text-sm font-semibold text-foreground">
              {score} / {questions.length} correct
            </p>
            <p className="mt-0.5 text-sm text-muted">{getSummaryMessage(score, questions.length)}</p>
          </div>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-surface px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            Try again
          </button>
        </div>
      )}
    </div>
  );
}

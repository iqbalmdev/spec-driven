"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { getLessonPractice, type LessonPracticeId } from "@/content/practice";
import { useLearningProgress } from "@/lib/use-learning-progress";
import { cn } from "@/lib/utils";
import { FlashcardDeck } from "./flashcard-deck";
import { KnowledgeCheck } from "./knowledge-check";
import { StepOrderExercise } from "./step-order-exercise";

type PracticeTab = "quiz" | "order" | "cards";

const practiceTabs: readonly { id: PracticeTab; label: string }[] = [
  { id: "quiz", label: "Knowledge check" },
  { id: "order", label: "Order the steps" },
  { id: "cards", label: "Flashcards" },
];

interface LessonPracticeProps {
  lessonId: LessonPracticeId;
}

export function LessonPractice({ lessonId }: LessonPracticeProps) {
  const practice = getLessonPractice(lessonId);
  const { progress, recordQuiz, setCompleted } = useLearningProgress();
  const [activeTab, setActiveTab] = useState<PracticeTab>("quiz");

  const record = progress[lessonId];
  const completed = record?.completed ?? false;
  const headingId = `practice-${lessonId.replace("/", "-")}`;

  const handleQuizComplete = useCallback(
    (score: number, total: number) => recordQuiz(lessonId, score, total),
    [lessonId, recordQuiz]
  );

  const toggleCompleted = () => setCompleted(lessonId, !completed);

  return (
    <section aria-labelledby={headingId} className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">Practice</p>
          <h2 id={headingId} className="mt-1 text-xl font-semibold tracking-tight text-foreground">
            Check your understanding
          </h2>
          <p className="mt-1 text-sm text-muted">A few minutes of recall now saves rereading later.</p>
        </div>
        {record && record.total > 0 && (
          <p className="text-xs text-muted">
            Best quiz score <span className="font-medium text-foreground">{record.bestScore} / {record.total}</span>
          </p>
        )}
      </div>

      <div role="tablist" aria-label="Practice formats" className="mt-5 flex gap-1 rounded-lg border border-border bg-background/60 p-1">
        {practiceTabs.map(({ id, label }) => {
          const selected = activeTab === id;
          return (
            <button
              key={id}
              id={`${headingId}-tab-${id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${headingId}-panel-${id}`}
              onClick={() => setActiveTab(id)}
              className={cn(
                "flex-1 rounded-md px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                selected ? "bg-surface text-foreground shadow-sm ring-1 ring-border" : "text-muted hover:text-foreground"
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="mt-5">
        <div role="tabpanel" id={`${headingId}-panel-quiz`} aria-labelledby={`${headingId}-tab-quiz`} hidden={activeTab !== "quiz"}>
          <KnowledgeCheck questions={practice.quiz} onComplete={handleQuizComplete} />
        </div>
        <div role="tabpanel" id={`${headingId}-panel-order`} aria-labelledby={`${headingId}-tab-order`} hidden={activeTab !== "order"}>
          <StepOrderExercise exerciseId={lessonId} prompt={practice.ordering.prompt} steps={practice.ordering.steps} />
        </div>
        <div role="tabpanel" id={`${headingId}-panel-cards`} aria-labelledby={`${headingId}-tab-cards`} hidden={activeTab !== "cards"}>
          <FlashcardDeck cards={practice.flashcards} />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
        <button
          type="button"
          onClick={toggleCompleted}
          aria-pressed={completed}
          className={cn(
            "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
            completed
              ? "bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/30 dark:text-emerald-400"
              : "bg-foreground text-background hover:opacity-90"
          )}
        >
          {completed && <Check className="h-4 w-4" aria-hidden />}
          {completed ? "Lesson completed" : "Mark lesson complete"}
        </button>
        <Link href="/practice" className="text-sm text-muted transition-colors hover:text-accent">
          View progress and mixed review →
        </Link>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { courseSections } from "@/content/course";
import {
  REVIEW_QUESTION_COUNT,
  learningMethods,
  lessonPracticeSets,
  type LessonPracticeSet,
  type QuizQuestion,
} from "@/content/practice";
import { Badge, Card } from "@/components/ui/layout";
import { pickRandom } from "@/lib/practice-utils";
import { useLearningProgress, type LessonProgressRecord, type ProgressMap } from "@/lib/use-learning-progress";
import { KnowledgeCheck } from "./knowledge-check";

interface SectionGroup {
  number: number;
  title: string;
  lessons: readonly LessonPracticeSet[];
}

function groupBySection(sets: readonly LessonPracticeSet[]): SectionGroup[] {
  const numbers = [...new Set(sets.map((set) => set.sectionNumber))];
  return numbers.map((number) => ({
    number,
    title: courseSections.find((section) => section.number === number)?.title ?? `Section ${number}`,
    lessons: sets.filter((set) => set.sectionNumber === number),
  }));
}

function buildReviewPool(progress: ProgressMap): QuizQuestion[] {
  const studied = lessonPracticeSets.filter((set) => progress[set.id] !== undefined);
  const source: readonly LessonPracticeSet[] = studied.length > 0 ? studied : lessonPracticeSets;
  return source.flatMap((set) =>
    set.quiz.map((question) => ({ ...question, id: `${set.id}:${question.id}` }))
  );
}

function LessonStatus({ record }: { record: LessonProgressRecord | undefined }) {
  if (record?.completed) return <Badge variant="success">Completed</Badge>;
  if (record && record.total > 0) {
    return <Badge variant="accent">Quiz {record.bestScore}/{record.total}</Badge>;
  }
  return <Badge>Not started</Badge>;
}

const sectionGroups = groupBySection(lessonPracticeSets);

export function PracticeDashboard() {
  const { progress } = useLearningProgress();
  const [reviewQuestions, setReviewQuestions] = useState<readonly QuizQuestion[] | null>(null);
  const [reviewRound, setReviewRound] = useState(0);

  const completedCount = useMemo(
    () => lessonPracticeSets.filter((set) => progress[set.id]?.completed).length,
    [progress]
  );
  const totalLessons = lessonPracticeSets.length;
  const percentComplete = Math.round((completedCount / totalLessons) * 100);

  const startReview = () => {
    setReviewQuestions(pickRandom(buildReviewPool(progress), REVIEW_QUESTION_COUNT));
    setReviewRound((round) => round + 1);
  };

  return (
    <div className="space-y-12">
      <Card className="space-y-4 p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm text-muted">Your progress</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
              {completedCount} of {totalLessons} lessons completed
            </p>
          </div>
          <p className="text-sm text-muted">Saved in this browser</p>
        </div>
        <div
          className="h-1.5 overflow-hidden rounded-full bg-border"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentComplete}
          aria-label="Lessons completed"
        >
          <div className="h-full rounded-full bg-accent transition-[width] duration-500" style={{ width: `${percentComplete}%` }} />
        </div>
      </Card>

      <section aria-labelledby="review-heading" className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 id="review-heading" className="text-xl font-semibold tracking-tight">Mixed review</h2>
            <p className="mt-1 max-w-xl text-sm text-muted">
              Up to {REVIEW_QUESTION_COUNT} questions drawn across the lessons you have studied. Mixing topics is harder
              than one lesson at a time, and that effort is what makes recall last.
            </p>
          </div>
          <button
            type="button"
            onClick={startReview}
            className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {reviewQuestions ? "New review" : "Start review"}
          </button>
        </div>
        {reviewQuestions && (
          <Card className="p-5 sm:p-6">
            <KnowledgeCheck key={reviewRound} questions={reviewQuestions} />
          </Card>
        )}
      </section>

      <section aria-labelledby="lessons-heading" className="space-y-6">
        <h2 id="lessons-heading" className="text-xl font-semibold tracking-tight">Lessons with practice</h2>
        {sectionGroups.map((group) => (
          <div key={group.number} className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Section {group.number} · {group.title}
            </p>
            <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
              {group.lessons.map((lesson) => (
                <li key={lesson.id}>
                  <Link
                    href={lesson.href}
                    className="flex items-center justify-between gap-4 px-4 py-3 text-sm transition-colors hover:bg-background/60"
                  >
                    <span className="text-foreground">{lesson.title}</span>
                    <LessonStatus record={progress[lesson.id]} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section aria-labelledby="methods-heading" className="space-y-4">
        <h2 id="methods-heading" className="text-xl font-semibold tracking-tight">How practice works</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {learningMethods.map((method) => (
            <Card key={method.id} className="space-y-1.5">
              <p className="text-sm font-medium text-foreground">{method.title}</p>
              <p className="text-sm leading-relaxed text-muted">{method.detail}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

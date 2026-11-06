import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/layout";
import { PracticeDashboard } from "@/components/practice/practice-dashboard";

export const metadata: Metadata = {
  title: "Practice | Spec-Driven Development",
  description: "Knowledge checks, step ordering, flashcards and mixed review across the course.",
};

export default function PracticePage() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="Practice"
        title="Learn by recalling, not rereading"
        description="Every lesson with practice ends in a short knowledge check, a step-ordering exercise and a flashcard deck. Track what you have finished and mix topics for review."
      />
      <PracticeDashboard />
    </div>
  );
}

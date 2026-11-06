"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import type { Flashcard } from "@/content/practice";

interface FlashcardDeckProps {
  cards: readonly Flashcard[];
}

const FADE_DURATION_S = 0.18;

function createQueue(length: number): number[] {
  return Array.from({ length }, (_, index) => index);
}

export function FlashcardDeck({ cards }: FlashcardDeckProps) {
  const reduceMotion = useReducedMotion();
  const [queue, setQueue] = useState<number[]>(() => createQueue(cards.length));
  const [flipped, setFlipped] = useState(false);
  const [reviewCount, setReviewCount] = useState(0);

  const currentIndex = queue[0];
  const known = cards.length - queue.length;

  const markKnown = () => {
    setQueue((current) => current.slice(1));
    setFlipped(false);
  };

  const reviewAgain = () => {
    setQueue((current) => [...current.slice(1), current[0]]);
    setReviewCount((count) => count + 1);
    setFlipped(false);
  };

  const restart = () => {
    setQueue(createQueue(cards.length));
    setReviewCount(0);
    setFlipped(false);
  };

  if (currentIndex === undefined) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-accent/20 bg-accent-soft px-5 py-8 text-center" role="status">
        <p className="text-sm font-semibold text-foreground">Deck complete</p>
        <p className="text-sm text-muted">
          {cards.length} terms known · {reviewCount} {reviewCount === 1 ? "card" : "cards"} reviewed again
        </p>
        <button
          type="button"
          onClick={restart}
          className="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden />
          Study again
        </button>
      </div>
    );
  }

  const card = cards[currentIndex];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-muted">
        <span>{known} of {cards.length} known</span>
        <span>{queue.length} remaining</span>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((value) => !value)}
        aria-label={flipped ? `Definition of ${card.term}. Activate to show the term.` : `${card.term}. Activate to reveal the definition.`}
        className="relative flex min-h-44 w-full flex-col items-center justify-center rounded-xl border border-border bg-surface px-6 py-8 text-center shadow-sm transition-colors hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
      >
        <span className="absolute left-4 top-3 text-[11px] font-medium uppercase tracking-widest text-muted">
          {flipped ? "Definition" : "Term"}
        </span>
        <motion.span
          key={`${card.term}-${flipped ? "back" : "front"}`}
          initial={reduceMotion ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: FADE_DURATION_S }}
          className={flipped ? "max-w-md text-sm leading-relaxed text-foreground" : "font-mono text-lg font-medium text-foreground"}
        >
          {flipped ? card.definition : card.term}
        </motion.span>
        {!flipped && <span className="mt-3 text-xs text-muted">Recall the meaning, then reveal</span>}
      </button>

      <div className="flex flex-wrap justify-center gap-2" aria-live="polite">
        {flipped ? (
          <>
            <button
              type="button"
              onClick={reviewAgain}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-amber-500/40"
            >
              Review again
            </button>
            <button
              type="button"
              onClick={markKnown}
              className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              I knew it
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setFlipped(true)}
            className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Reveal
          </button>
        )}
      </div>
    </div>
  );
}

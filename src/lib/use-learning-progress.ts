"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "sdd-learning-progress-v1";
const CHANGE_EVENT = "sdd-learning-progress-change";

export interface LessonProgressRecord {
  completed: boolean;
  bestScore: number;
  total: number;
  updatedAt: string;
}

export type ProgressMap = Readonly<Record<string, LessonProgressRecord>>;

const EMPTY_PROGRESS: ProgressMap = {};

let cachedRaw: string | null = null;
let cachedProgress: ProgressMap = EMPTY_PROGRESS;

function readProgress(): ProgressMap {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return cachedProgress;
  }

  if (raw === cachedRaw) return cachedProgress;
  cachedRaw = raw;
  try {
    cachedProgress = raw ? (JSON.parse(raw) as ProgressMap) : EMPTY_PROGRESS;
  } catch {
    cachedProgress = EMPTY_PROGRESS;
  }
  return cachedProgress;
}

function writeProgress(next: ProgressMap): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    return;
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(onChange: () => void): () => void {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function getServerSnapshot(): ProgressMap {
  return EMPTY_PROGRESS;
}

function emptyRecord(): LessonProgressRecord {
  return { completed: false, bestScore: 0, total: 0, updatedAt: new Date().toISOString() };
}

export function useLearningProgress() {
  const progress = useSyncExternalStore(subscribe, readProgress, getServerSnapshot);

  const recordQuiz = useCallback((lessonId: string, score: number, total: number) => {
    const current = readProgress();
    const existing = current[lessonId] ?? emptyRecord();
    writeProgress({
      ...current,
      [lessonId]: {
        ...existing,
        bestScore: Math.max(existing.bestScore, score),
        total,
        updatedAt: new Date().toISOString(),
      },
    });
  }, []);

  const setCompleted = useCallback((lessonId: string, completed: boolean) => {
    const current = readProgress();
    const existing = current[lessonId] ?? emptyRecord();
    writeProgress({
      ...current,
      [lessonId]: { ...existing, completed, updatedAt: new Date().toISOString() },
    });
  }, []);

  return { progress, recordQuiz, setCompleted };
}

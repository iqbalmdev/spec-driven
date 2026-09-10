"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { cn } from "@/lib/utils";

const JourneyCanvas = dynamic(() => import("./sdd-journey-canvas").then((m) => m.SddJourneyCanvas), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] items-center justify-center rounded-2xl border border-border bg-surface text-sm text-muted">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        <span>Loading 3D journey...</span>
      </div>
    </div>
  ),
});

interface SddJourneySceneProps {
  variant?: "default" | "immersive";
}

export function SddJourneyScene({ variant = "default" }: SddJourneySceneProps) {
  const immersive = variant === "immersive";

  return (
    <section
      aria-labelledby="journey-3d-heading"
      className={cn("space-y-4", immersive && "rounded-3xl border border-border/60 bg-surface/50 p-6 sm:p-8")}
    >
      <div className={cn(immersive && "text-center max-w-2xl mx-auto")}>
        <h2 id="journey-3d-heading" className={cn("font-semibold", immersive ? "text-2xl sm:text-3xl" : "text-xl")}>
          SDD Learning Path — 3D Journey
        </h2>
        <p className="text-sm text-muted mt-2">
          Drag to orbit · Click nodes to explore · Follow the path from shape-spec to verify
        </p>
      </div>
      <Suspense fallback={null}>
        <JourneyCanvas immersive={immersive} />
      </Suspense>
    </section>
  );
}

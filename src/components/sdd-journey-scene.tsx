"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const JourneyCanvas = dynamic(() => import("./sdd-journey-canvas").then((m) => m.SddJourneyCanvas), {
  ssr: false,
  loading: () => (
    <div className="flex h-[320px] items-center justify-center rounded-2xl border border-border bg-surface text-sm text-muted">
      Loading 3D journey...
    </div>
  ),
});

export function SddJourneyScene() {
  return (
    <section aria-labelledby="journey-3d-heading" className="space-y-4">
      <div>
        <h2 id="journey-3d-heading" className="text-xl font-semibold">SDD Learning Path — 3D Journey</h2>
        <p className="text-sm text-muted mt-1">
          Drag to orbit · Scroll to zoom · Click nodes to explore sections
        </p>
      </div>
      <Suspense fallback={null}>
        <JourneyCanvas />
      </Suspense>
    </section>
  );
}

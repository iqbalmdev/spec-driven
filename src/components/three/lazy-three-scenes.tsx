"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const AgentOsMemorySceneInner = dynamic(
  () => import("./agentos-memory-scene").then((m) => m.AgentOsMemoryScene),
  {
    ssr: false,
    loading: () => <ThreeLoading label="AgentOS memory" />,
  }
);

const CourseOrbitSceneInner = dynamic(
  () => import("./course-orbit-scene").then((m) => m.CourseOrbitScene),
  {
    ssr: false,
    loading: () => <ThreeLoading label="Course orbit" />,
  }
);

const WorkflowPipelineSceneInner = dynamic(
  () => import("./workflow-pipeline-scene").then((m) => m.WorkflowPipelineScene),
  {
    ssr: false,
    loading: () => <ThreeLoading label="Workflow pipeline" compact />,
  }
);

const McpBridgeSceneInner = dynamic(() => import("./mcp-bridge-scene").then((m) => m.McpBridgeScene), {
  ssr: false,
  loading: () => <ThreeLoading label="MCP bridge" compact />,
});

function ThreeLoading({ label, compact }: { label: string; compact?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-border bg-surface text-sm text-muted ${
        compact ? "h-[280px]" : "h-[min(55vh,400px)]"
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        <span>Loading {label}…</span>
      </div>
    </div>
  );
}

export function AgentOsMemoryScene() {
  return (
    <Suspense fallback={<ThreeLoading label="AgentOS memory" />}>
      <AgentOsMemorySceneInner />
    </Suspense>
  );
}

export function CourseOrbitScene() {
  return (
    <Suspense fallback={<ThreeLoading label="Course orbit" />}>
      <CourseOrbitSceneInner />
    </Suspense>
  );
}

export function WorkflowPipelineScene() {
  return (
    <Suspense fallback={<ThreeLoading label="Workflow pipeline" compact />}>
      <WorkflowPipelineSceneInner />
    </Suspense>
  );
}

export function McpBridgeScene() {
  return (
    <Suspense fallback={<ThreeLoading label="MCP bridge" compact />}>
      <McpBridgeSceneInner />
    </Suspense>
  );
}

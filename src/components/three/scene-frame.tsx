"use client";

import { cn } from "@/lib/utils";

interface ThreeSceneFrameProps {
  children: React.ReactNode;
  className?: string;
  height?: string;
  label?: string;
}

export function ThreeSceneFrame({
  children,
  className,
  height = "h-[min(50vh,360px)]",
  label = "Interactive 3D view",
}: ThreeSceneFrameProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border",
          "bg-gradient-to-b from-sky-50/80 to-stone-100/80 dark:from-stone-900 dark:to-stone-950",
          height
        )}
        role="img"
        aria-label={label}
      >
        {children}
      </div>
      <p className="text-xs text-center text-muted">Drag to orbit · Scroll to zoom</p>
    </div>
  );
}

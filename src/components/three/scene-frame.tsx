"use client";

import { cn } from "@/lib/utils";

interface ThreeSceneFrameProps {
  children: React.ReactNode;
  className?: string;
  height?: string;
  label?: string;
  /** space = dark canvas for orbit / starfield scenes */
  variant?: "default" | "space";
}

export function ThreeSceneFrame({
  children,
  className,
  height = "h-[min(50vh,360px)]",
  label = "Interactive 3D view",
  variant = "default",
}: ThreeSceneFrameProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border",
          variant === "space"
            ? "border-slate-800/80 bg-[#06070d] shadow-[inset_0_0_80px_rgba(45,212,191,0.06)]"
            : "border-border bg-gradient-to-b from-sky-50/80 to-stone-100/80 dark:from-stone-900 dark:to-stone-950",
          height
        )}
        role="img"
        aria-label={label}
      >
        {children}
      </div>
      <p className="text-xs text-center text-muted">
        {variant === "space" ? "Drag to orbit the system · Scroll to zoom · Click a planet" : "Drag to orbit · Scroll to zoom"}
      </p>
    </div>
  );
}

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { lineageEras } from "@/content/course";
import { Badge, Card } from "@/components/ui/layout";
import { ChevronRight } from "lucide-react";

export function LineageTimeline() {
  const [activeId, setActiveId] = useState<string>("sdd");
  const active = lineageEras.find((e) => e.id === activeId) ?? lineageEras[4];

  return (
    <section aria-labelledby="lineage-heading" className="space-y-8">
      <div>
        <h2 id="lineage-heading" className="text-2xl font-semibold tracking-tight">
          Historical Lineage
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted leading-relaxed">
          SDLC → PRDs → TDD → BDD → SDD. Each era solved part of the alignment problem.
          SDD composes them for the AI era.
        </p>
      </div>

      <div className="relative">
        <div className="hidden sm:flex items-center justify-between gap-2">
          {lineageEras.map((era, i) => (
            <div key={era.id} className="flex flex-1 items-center">
              <button
                type="button"
                onClick={() => setActiveId(era.id)}
                className={cn(
                  "group flex flex-col items-center gap-2 rounded-lg px-2 py-3 transition-all w-full",
                  activeId === era.id ? "bg-accent/5 ring-1 ring-accent/30" : "hover:bg-surface"
                )}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white bg-gradient-to-br transition-transform group-hover:scale-105",
                    era.color,
                    "highlight" in era && era.highlight && "ring-2 ring-accent ring-offset-2 ring-offset-background"
                  )}
                >
                  {era.name}
                </span>
                <span className="text-[10px] text-muted">{era.era}</span>
              </button>
              {i < lineageEras.length - 1 && (
                <ChevronRight className="h-4 w-4 shrink-0 text-border mx-1" aria-hidden />
              )}
            </div>
          ))}
        </div>

        <div className="flex sm:hidden gap-2 overflow-x-auto pb-2 -mx-1 px-1">
          {lineageEras.map((era) => (
            <button
              key={era.id}
              type="button"
              onClick={() => setActiveId(era.id)}
              className={cn(
                "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium ring-1 ring-inset transition-colors",
                activeId === era.id
                  ? "bg-accent/10 text-accent ring-accent/30"
                  : "bg-surface text-muted ring-border"
              )}
            >
              {era.name}
            </button>
          ))}
        </div>
      </div>

      <Card className="space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">{active.era}</p>
            <h3 className="mt-1 text-xl font-semibold">{active.fullName}</h3>
          </div>
          {"highlight" in active && active.highlight && <Badge variant="accent">Current era</Badge>}
        </div>

        <p className="text-sm font-medium text-accent">{active.question}</p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">What it solved</p>
            <p className="text-sm leading-relaxed">{active.solved}</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">SDD inherits</p>
            <p className="text-sm leading-relaxed">{active.inherits}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          <Badge>{active.artifact}</Badge>
          <Badge variant={active.executable === true ? "success" : active.executable === "partial" ? "warning" : "default"}>
            {active.executable === true ? "Executable" : active.executable === "partial" ? "Partially executable" : "Not executable"}
          </Badge>
          <Badge variant={active.inRepo ? "success" : "default"}>
            {active.inRepo ? "Lives in repo" : "Outside repo"}
          </Badge>
        </div>
      </Card>
    </section>
  );
}

import { lineageEras, developmentStages } from "@/content/course";
import type { ScrollChapterItem } from "@/components/immersive/sticky-scroll-chapter";

export const lineageChapters: ScrollChapterItem[] = lineageEras.map((era) => ({
  id: era.id,
  title: era.fullName,
  subtitle: era.era,
  description: era.solved,
  details: [
    { label: "Core question", value: era.question },
    { label: "SDD inherits", value: era.inherits },
  ],
  badges: [
    { label: era.artifact },
    {
      label: era.executable === true ? "Executable" : era.executable === "partial" ? "Partially executable" : "Not executable",
      variant: era.executable === true ? "success" : era.executable === "partial" ? "warning" : "default",
    },
    {
      label: era.inRepo ? "Lives in repo" : "Outside repo",
      variant: era.inRepo ? "success" : "default",
    },
    ...("highlight" in era && era.highlight ? [{ label: "Current era", variant: "accent" as const }] : []),
  ],
}));

export const stagesChapters: ScrollChapterItem[] = developmentStages.map((stage) => ({
  id: stage.id,
  title: stage.name,
  subtitle: `Stage ${stage.stage}`,
  description: stage.description,
  details: [
    { label: "Question", value: stage.question },
    { label: "Artifact", value: stage.artifact },
    { label: "Anti-pattern", value: stage.antiPattern },
  ],
  badges: stage.outputs.slice(0, 2).map((o) => ({ label: o, variant: "accent" as const })),
}));

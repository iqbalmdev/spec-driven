import Link from "next/link";
import { FullBleed } from "@/components/immersive/full-bleed";
import { ImmersiveHero } from "@/components/immersive/immersive-hero";
import { VibeShowdown } from "@/components/immersive/vibe-showdown";
import { StickyScrollChapter } from "@/components/immersive/sticky-scroll-chapter";
import { InteractiveConceptCards } from "@/components/immersive/interactive-concept-cards";
import { ScrollReveal } from "@/components/immersive/scroll-reveal";
import { SddJourneyScene } from "@/components/sdd-journey-scene";
import { WorkflowDiagram } from "@/components/workflow-diagram";
import { lineageChapters, stagesChapters } from "@/lib/scroll-chapters";
import { Card } from "@/components/ui/layout";

export default function HomePage() {
  return (
    <div className="-mt-10 -mx-4 sm:-mx-6">
      <FullBleed>
        <ImmersiveHero />
      </FullBleed>

      <div id="journey-start" className="space-y-8 px-4 sm:px-6 pt-16">
        <ScrollReveal>
          <VibeShowdown />
        </ScrollReveal>
      </div>

      <FullBleed className="mt-8">
        <StickyScrollChapter
          id="lineage"
          heading="Historical Lineage"
          subheading="SDLC → PRDs → TDD → BDD → SDD. Scroll to travel through each era — SDD composes them for the AI age."
          items={lineageChapters}
          accentClass="from-slate-500/10 to-transparent"
        />
      </FullBleed>

      <FullBleed>
        <StickyScrollChapter
          id="stages"
          heading="Development Stages"
          subheading="From intent to verified software. Each stage has a question, artifact, and output — never skip ahead."
          items={stagesChapters}
          accentClass="from-accent/15 to-transparent"
        />
      </FullBleed>

      <div className="space-y-24 px-4 sm:px-6 py-24">
        <FullBleed>
          <div className="px-4 sm:px-6 max-w-6xl mx-auto">
            <SddJourneyScene variant="immersive" />
          </div>
        </FullBleed>

        <ScrollReveal>
          <InteractiveConceptCards />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <section className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">SDD Workflow</h2>
              <p className="mt-2 text-sm text-muted">
                The path from feature idea to verified implementation.
              </p>
            </div>
            <Card className="overflow-hidden">
              <WorkflowDiagram />
            </Card>
            <div className="text-center">
              <Link
                href="/workflow"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
              >
                View interactive workflow →
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}

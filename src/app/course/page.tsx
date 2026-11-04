import Link from "next/link";
import { CourseJourneyCards } from "@/components/immersive/course-journey-cards";
import { ScrollReveal } from "@/components/immersive/scroll-reveal";
import { SddJourneyScene } from "@/components/sdd-journey-scene";
import { PageHeader, Card } from "@/components/ui/layout";
import { ArrowRight } from "lucide-react";

export default function CoursePage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Course"
        title="Spec-Driven Development"
        description="Scroll through each section — specs live in the repo; the Clarification Gate blocks implementation until intent is clear."
      />

      <ScrollReveal>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Your learning path</h2>
          <p className="text-sm text-muted max-w-2xl">
            Swipe through sections or explore the 3D journey map below. Each section builds on the last.
          </p>
          <CourseJourneyCards />
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <SddJourneyScene variant="immersive" />
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Quick links</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/requirements" className="group">
              <Card hover className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Living requirements.md</p>
                  <p className="text-xs text-muted mt-0.5">See the Clarification Gate in action</p>
                </div>
                <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </Link>
            <Link href="/workflow" className="group">
              <Card hover className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Interactive workflow</p>
                  <p className="text-xs text-muted mt-0.5">shape-spec → tasks → verify</p>
                </div>
                <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </Link>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}

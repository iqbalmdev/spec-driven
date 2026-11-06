import Link from "next/link";
import { KiroSpecTriadGuide } from "@/components/kiro-spec-triad-guide";
import { SectionPager } from "@/components/course-nav";
import { LessonPractice } from "@/components/practice/lesson-practice";
import { PageHeader, Card } from "@/components/ui/layout";
import { ArrowRight } from "lucide-react";

export default function SpecFilesPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 5 · Kiro workflow"
        title="steering.md · requirements.md · design.md · tasks.md"
        description="Persistent steering memory plus the execution spine — what each file needs, must include, and when it is ready."
      />

      <Card className="bg-accent-soft border-accent/20">
        <p className="text-sm leading-relaxed text-muted">
          steering.md is persistent project memory (stack, coding standards). requirements.md is the “what” for a single
          feature on the execution spine; design.md and tasks.md follow after the Clarification Gate.
        </p>
      </Card>

      <KiroSpecTriadGuide />

      <div className="flex flex-wrap gap-4 text-sm">
        <Link href="/requirements" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
          Live requirements.md in this repo <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/templates" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
          Copy templates <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <LessonPractice lessonId="section-05/spec-files" />

      <SectionPager slug="section-05" />
    </div>
  );
}

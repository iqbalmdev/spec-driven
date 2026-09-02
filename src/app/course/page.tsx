import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courseSections } from "@/content/course";
import { PageHeader, Badge, Card } from "@/components/ui/layout";

export default function CoursePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Course"
        title="Spec-Driven Development"
        description="From Vibe-Coding to AI Engineering — progress through each section. Specs live in the repo; the Clarification Gate blocks implementation until intent is clear."
      />

      <div className="space-y-4">
        {courseSections.map((section) => (
          <Link key={section.id} href={`/course/${section.slug}`} className="group block">
            <Card hover className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-muted">Section {section.number}</span>
                  <Badge variant={section.status === "complete" ? "success" : "warning"}>
                    {section.status === "complete" ? "Complete" : "Pending"}
                  </Badge>
                </div>
                <h2 className="text-xl font-semibold group-hover:text-accent transition-colors">
                  {section.title}
                </h2>
                <p className="text-sm text-muted">{section.subtitle}</p>
                <p className="text-sm text-muted leading-relaxed max-w-2xl">{section.description}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent shrink-0">
                Open section <ArrowRight className="h-4 w-4" />
              </span>
            </Card>
          </Link>
        ))}

        <Card className="border-dashed opacity-60">
          <p className="text-sm text-muted">Section 3 — coming as the course progresses.</p>
        </Card>
      </div>
    </div>
  );
}

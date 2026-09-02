import { userStories } from "@/content/course";
import { ClarificationGateDemo } from "@/components/clarification-gate";
import { PageHeader, Badge, Card } from "@/components/ui/layout";
import { Check, X } from "lucide-react";

export default function RequirementsPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Living document"
        title="requirements.md"
        description="Version-controlled in this repository. All open items must be resolved (Clarification Gate) before implementation begins on a feature."
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Project Vision</h2>
        <Card>
          <p className="text-sm leading-relaxed text-muted">
            Build a personal learning platform that stores and organizes everything learned from the
            course <em>Spec-Driven Development: From Vibe-Coding to AI Engineering</em>. The platform
            must practice what it teaches: structured specs, executable intent, and zero ambiguity
            before building.
          </p>
        </Card>
      </section>

      <ClarificationGateDemo />

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">User Stories</h2>
        {userStories.map((story) => (
          <Card key={story.id} className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-muted">{story.id}</span>
              <Badge>{story.title}</Badge>
            </div>
            <div className="text-sm leading-relaxed space-y-1">
              <p>
                <span className="font-medium">As a</span> {story.role},
              </p>
              <p>
                <span className="font-medium">I want</span> {story.want},
              </p>
              <p>
                <span className="font-medium">So that</span> {story.soThat}.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted mb-2">Success criteria</p>
              <ul className="space-y-2">
                {story.criteria.map((c, i) => (
                  <li key={c} className="flex items-start gap-2 text-sm">
                    {story.done[i] ? (
                      <Check className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                    ) : (
                      <X className="h-4 w-4 shrink-0 text-muted mt-0.5" />
                    )}
                    <span className={story.done[i] ? "" : "text-muted"}>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}

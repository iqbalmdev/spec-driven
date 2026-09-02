import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { coreConcepts } from "@/content/course";
import { Card } from "@/components/ui/layout";

export function ConceptGrid() {
  return (
    <section aria-labelledby="concepts-heading" className="space-y-8">
      <div>
        <h2 id="concepts-heading" className="text-2xl font-semibold tracking-tight">
          Core Concepts
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted leading-relaxed">
          Section 1 foundations — the practices that turn vibe-coding into AI engineering.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coreConcepts.map((concept) => (
          <Link key={concept.id} href={concept.href} className="group block">
            <Card hover className="h-full space-y-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-accent">
                  {concept.subtitle}
                </p>
                <h3 className="mt-1 text-lg font-semibold group-hover:text-accent transition-colors">
                  {concept.title}
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed line-clamp-3">{concept.description}</p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ArrowRight className="h-3 w-3" />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

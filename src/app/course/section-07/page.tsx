import Link from "next/link";
import {
  section07ModuleMeta,
  section07Takeaways,
  section07Topics,
} from "@/content/section-07";
import { ScrollReveal } from "@/components/immersive/scroll-reveal";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Card, QuoteBlock } from "@/components/ui/layout";

export default function SectionSevenPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Section 7"
        title={section07ModuleMeta.title}
        description="Apply SDD beyond the basics — evidence-driven debugging, runtime diagnostics, and specs that get stronger after every incident."
      />

      <QuoteBlock>
        What if every bug you fixed made the whole system permanently smarter against that category of failure?
      </QuoteBlock>

      <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
        <span>
          {section07ModuleMeta.lessonCount} lesson · ~{section07ModuleMeta.estimatedMinutes} min
        </span>
      </div>

      <ScrollReveal>
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Lessons</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {section07Topics.map((topic, i) => (
              <Link key={topic.id} href={topic.href} className="group">
                <Card hover className="h-full space-y-2 transition-transform hover:-translate-y-0.5">
                  <span className="text-xs font-mono text-muted">Lesson {i + 1}</span>
                  <p className="text-xs font-medium uppercase tracking-widest text-accent">{topic.subtitle}</p>
                  <h3 className="font-semibold group-hover:text-accent transition-colors">{topic.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{topic.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Practical takeaways</h2>
        <ol className="space-y-3">
          {section07Takeaways.map((t, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                {i + 1}
              </span>
              {t}
            </li>
          ))}
        </ol>
      </section>

      <SectionPager slug="section-07" />
    </div>
  );
}

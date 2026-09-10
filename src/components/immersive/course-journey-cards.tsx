"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { courseSections } from "@/content/course";
import { getSectionHref } from "@/lib/course-nav";
import { cn } from "@/lib/utils";

const sectionColors = [
  "from-teal-500/20 to-emerald-500/5",
  "from-blue-500/20 to-cyan-500/5",
  "from-violet-500/20 to-purple-500/5",
  "from-amber-500/20 to-orange-500/5",
];

export function CourseJourneyCards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="space-y-6">
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-1 px-1">
        {courseSections.map((section, i) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="snap-center shrink-0 w-[min(100%,340px)]"
          >
            <Link href={getSectionHref(section.slug)} className="group block h-full">
              <article
                className={cn(
                  "relative h-full overflow-hidden rounded-2xl border border-border p-6",
                  "transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5",
                  "hover:-translate-y-1"
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity group-hover:opacity-100",
                    sectionColors[i % sectionColors.length]
                  )}
                />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-muted">Section {section.number}</span>
                    {section.status === "complete" ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Clock className="h-4 w-4 text-amber-500" />
                    )}
                  </div>
                  <h2 className="text-xl font-semibold group-hover:text-accent transition-colors">
                    {section.title}
                  </h2>
                  <p className="text-xs font-medium text-accent">{section.subtitle}</p>
                  <p className="text-sm text-muted leading-relaxed line-clamp-3">
                    {section.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Enter section <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-center text-muted">← Swipe to explore sections →</p>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { coreConcepts } from "@/content/course";
import { cn } from "@/lib/utils";

export function InteractiveConceptCards() {
  return (
    <section aria-labelledby="concepts-heading" className="space-y-8">
      <div>
        <h2 id="concepts-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Core Concepts
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted leading-relaxed">
          Hover to explore — each practice turns vibe-coding into AI engineering.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coreConcepts.map((concept, i) => (
          <ConceptCard key={concept.id} concept={concept} index={i} />
        ))}
      </div>
    </section>
  );
}

function ConceptCard({
  concept,
  index,
}: {
  concept: (typeof coreConcepts)[number];
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <Link
        ref={ref}
        href={concept.href}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
        className={cn(
          "group relative block h-full rounded-2xl border border-border bg-surface p-5 shadow-sm",
          "transition-[box-shadow,transform] duration-200 ease-out",
          "hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
        )}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-colors pointer-events-none" aria-hidden />
        <div className="relative space-y-3">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            {concept.subtitle}
          </p>
          <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
            {concept.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed line-clamp-3">{concept.description}</p>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
            Explore <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

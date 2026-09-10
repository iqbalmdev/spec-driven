"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Sparkles } from "lucide-react";
import { NORTH_STAR } from "@/content/course";
import { Badge } from "@/components/ui/layout";

const HeroBackground = dynamic(
  () => import("./hero-background").then((m) => m.HeroBackground),
  { ssr: false }
);

const steps = [
  { num: "01", label: "Understand", desc: "shape-spec & requirements" },
  { num: "02", label: "Plan", desc: "Clarification Gate passes" },
  { num: "03", label: "Build", desc: "Tasks → implement → verify" },
];

export function ImmersiveHero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-4 py-20 sm:px-6">
      <HeroBackground />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-2 mb-8"
        >
          <Badge variant="accent">
            <Sparkles className="inline h-3 w-3 mr-1 -mt-0.5" />
            Interactive learning experience
          </Badge>
          <Badge>Sections 1–4 live</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl leading-[1.05]"
        >
          Spec-Driven
          <span className="block text-accent">Development</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-muted leading-relaxed"
        >
          From vibe-coding to AI engineering — scroll through an immersive journey
          where structured specs turn AI speed into predictable outcomes.
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 max-w-2xl border-l-2 border-accent pl-4 text-sm italic text-muted"
        >
          {NORTH_STAR}
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link
            href="/course/section-01"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            <BookOpen className="h-4 w-4" />
            Start the journey
          </Link>
          <Link
            href="/course"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-surface"
          >
            Browse all sections
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="rounded-2xl border border-border/60 bg-surface/60 px-4 py-4 backdrop-blur-sm"
            >
              <p className="text-xs font-mono text-accent">{step.num}</p>
              <p className="mt-1 font-semibold">{step.label}</p>
              <p className="text-xs text-muted mt-0.5">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#journey-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted hover:text-accent transition-colors"
      >
        <span className="uppercase tracking-widest">Scroll down & dive in</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}

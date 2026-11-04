"use client";

import { useRef, type CSSProperties } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge, Card } from "@/components/ui/layout";

export interface ScrollChapterItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badges?: { label: string; variant?: "default" | "success" | "warning" | "accent" }[];
  details?: { label: string; value: string }[];
}

interface StickyScrollChapterProps {
  id: string;
  heading: string;
  subheading: string;
  items: ScrollChapterItem[];
  accentClass?: string;
}

export function StickyScrollChapter({
  id,
  heading,
  subheading,
  items,
  accentClass = "from-accent/20 to-transparent",
}: StickyScrollChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative sm:[height:var(--chapter-h)]"
      style={{ "--chapter-h": `${items.length * 100}vh` } as CSSProperties}
    >
      <div className="hidden sm:flex sticky top-20 h-[calc(100vh-5rem)] items-center">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:gap-16">
          {/* Sticky left panel */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{heading}</h2>
              <p className="mt-3 text-sm text-muted leading-relaxed max-w-md">{subheading}</p>
            </div>

            <div className="flex flex-col gap-2">
              {items.map((item, i) => {
                const start = i / items.length;
                const end = (i + 1) / items.length;
                return (
                  <ChapterNavItem
                    key={item.id}
                    item={item}
                    index={i}
                    scrollYProgress={scrollYProgress}
                    start={start}
                    end={end}
                    isLast={i === items.length - 1}
                  />
                );
              })}
            </div>
          </div>

          {/* Scrolling right panel */}
          <div className="relative hidden sm:block">
            {items.map((item, i) => {
              const start = i / items.length;
              const end = (i + 1) / items.length;
              return (
                <ChapterCard
                  key={item.id}
                  item={item}
                  scrollYProgress={scrollYProgress}
                  start={start}
                  end={end}
                  accentClass={accentClass}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: stacked cards (no sticky scroll) */}
      <div className="sm:hidden space-y-4 px-4 py-12">
        {items.map((item) => (
          <Card key={item.id} className="space-y-4">
            <div>
              <p className="text-xs text-muted">{item.subtitle}</p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            {item.details && (
              <div className="grid gap-3">
                {item.details.map((d) => (
                  <div key={d.label}>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted">{d.label}</p>
                    <p className="text-sm mt-0.5">{d.value}</p>
                  </div>
                ))}
              </div>
            )}
            {item.badges && (
              <div className="flex flex-wrap gap-2">
                {item.badges.map((b) => (
                  <Badge key={b.label} variant={b.variant}>{b.label}</Badge>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}

function ChapterNavItem({
  item,
  index,
  scrollYProgress,
  start,
  end,
  isLast,
}: {
  item: ScrollChapterItem;
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  isLast: boolean;
}) {
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0.4, 1, 1, isLast ? 1 : 0.4]);
  const scale = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0.97, 1, 1, isLast ? 1 : 0.97]);

  return (
    <motion.button
      type="button"
      style={{ opacity, scale }}
      className={cn(
        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
        "hover:bg-surface"
      )}
      onClick={() => {
        const el = document.getElementById(`chapter-${item.id}`);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
        {index + 1}
      </span>
      <div>
        <p className="text-sm font-medium">{item.title}</p>
        <p className="text-xs text-muted">{item.subtitle}</p>
      </div>
    </motion.button>
  );
}

function ChapterCard({
  item,
  scrollYProgress,
  start,
  end,
  accentClass,
}: {
  item: ScrollChapterItem;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  accentClass: string;
}) {
  const opacity = useTransform(scrollYProgress, [start, start + 0.08, end - 0.08, end], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [start, start + 0.08, end - 0.08, end], [40, 0, 0, -40]);
  const scale = useTransform(scrollYProgress, [start, start + 0.08, end - 0.08, end], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      id={`chapter-${item.id}`}
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center"
    >
      <Card className="relative w-full overflow-hidden space-y-5 p-6 sm:p-8">
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50 pointer-events-none", accentClass)} />
        <div className="relative">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">{item.subtitle}</p>
          <h3 className="mt-1 text-2xl font-semibold">{item.title}</h3>
          <p className="mt-4 text-sm text-muted leading-relaxed">{item.description}</p>

          {item.details && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {item.details.map((d) => (
                <div key={d.label}>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">{d.label}</p>
                  <p className="text-sm mt-1 leading-relaxed">{d.value}</p>
                </div>
              ))}
            </div>
          )}

          {item.badges && (
            <div className="mt-5 flex flex-wrap gap-2">
              {item.badges.map((b) => (
                <Badge key={b.label} variant={b.variant}>{b.label}</Badge>
              ))}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

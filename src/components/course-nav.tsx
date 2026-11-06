"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  getPublishedSections,
  getSectionFromPath,
  getSectionHref,
  getAdjacentSections,
  getCtaForPath,
  isSectionPath,
} from "@/lib/course-nav";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/course", label: "Course" },
  { href: "/requirements", label: "Requirements" },
  { href: "/workflow", label: "Workflow" },
  { href: "/templates", label: "Templates" },
  { href: "/practice", label: "Practice" },
];

export function HeaderNav() {
  const pathname = usePathname();
  const sections = getPublishedSections();
  const currentSection = getSectionFromPath(pathname);
  const cta = getCtaForPath(pathname);
  const onSectionRoute = isSectionPath(pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 text-xs font-semibold text-accent ring-1 ring-accent/20">
            SD
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-foreground group-hover:text-accent transition-colors sm:inline">
            Spec-Driven
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-md px-2.5 py-1.5 text-sm transition-colors",
                pathname === href || pathname.startsWith(`${href}/`)
                  ? "bg-surface text-foreground font-medium"
                  : "text-muted hover:bg-surface hover:text-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Section tabs — scales as new sections are published */}
        <nav
          className="ml-auto flex items-center gap-1 overflow-x-auto"
          aria-label="Course sections"
        >
          {sections.map((section) => {
            const isActive = currentSection?.slug === section.slug;
            return (
              <Link
                key={section.slug}
                href={getSectionHref(section.slug)}
                title={`Section ${section.number}: ${section.title}`}
                className={cn(
                  "shrink-0 rounded-md px-2 py-1 text-xs font-medium transition-colors sm:px-2.5 sm:py-1.5 sm:text-sm",
                  isActive
                    ? "bg-accent/10 text-accent ring-1 ring-accent/30"
                    : "text-muted hover:bg-surface hover:text-foreground"
                )}
              >
                <span className="sm:hidden">S{section.number}</span>
                <span className="hidden sm:inline">Sec {section.number}</span>
              </Link>
            );
          })}
        </nav>

        <Link
          href={cta.href}
          className={cn(
            "shrink-0 rounded-md px-2.5 py-1.5 text-xs font-medium transition-opacity hover:opacity-90 sm:px-3 sm:text-sm",
            onSectionRoute && currentSection
              ? "bg-accent text-white"
              : "bg-foreground text-background"
          )}
        >
          {cta.label}
        </Link>
      </div>
    </header>
  );
}

interface SectionPagerProps {
  /** Section slug e.g. section-01 — inferred from path if omitted in client usage */
  slug: string;
  className?: string;
}

export function SectionPager({ slug, className }: SectionPagerProps) {
  const { prev, next } = getAdjacentSections(slug);
  const current = getPublishedSections().find((s) => s.slug === slug);

  if (!current) return null;

  return (
    <nav
      aria-label="Section navigation"
      className={cn(
        "flex flex-col gap-3 rounded-xl border border-border bg-surface p-4 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
    >
      {prev ? (
        <Link
          href={getSectionHref(prev.slug)}
          className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />
          <span>
            <span className="block text-xs">Previous</span>
            <span className="font-medium text-foreground">
              Section {prev.number}: {prev.title}
            </span>
          </span>
        </Link>
      ) : (
        <Link
          href="/course"
          className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4 shrink-0" />
          <span className="font-medium text-foreground">Course overview</span>
        </Link>
      )}

      <p className="text-center text-xs text-muted sm:px-4">
        Section {current.number} of {getPublishedSections().length}
      </p>

      {next ? (
        <Link
          href={getSectionHref(next.slug)}
          className="group flex items-center justify-end gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:ml-auto"
        >
          <span className="text-right">
            <span className="block text-xs font-normal opacity-80">Continue to</span>
            Section {next.number}: {next.title}
          </span>
          <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : (
        <Link
          href="/course"
          className="inline-flex items-center justify-center gap-1 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface-elevated sm:ml-auto"
        >
          Back to course
          <ChevronRight className="h-4 w-4" />
        </Link>
      )}
    </nav>
  );
}

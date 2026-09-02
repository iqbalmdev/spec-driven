import { courseSections } from "@/content/course";

export type CourseSection = (typeof courseSections)[number];

/** Sections available in the app (status === complete). Extend as new sections ship. */
export function getPublishedSections(): CourseSection[] {
  return courseSections.filter((s) => s.status === "complete");
}

export function getSectionHref(slug: string): string {
  return `/course/${slug}`;
}

export function getSectionFromPath(pathname: string): CourseSection | null {
  const match = pathname.match(/\/course\/(section-\d+)/);
  if (!match) return null;
  return getPublishedSections().find((s) => s.slug === match[1]) ?? null;
}

export function getSectionBySlug(slug: string): CourseSection | undefined {
  return getPublishedSections().find((s) => s.slug === slug);
}

export function getAdjacentSections(slug: string): {
  prev: CourseSection | null;
  next: CourseSection | null;
} {
  const sections = getPublishedSections();
  const index = sections.findIndex((s) => s.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? sections[index - 1] : null,
    next: index < sections.length - 1 ? sections[index + 1] : null,
  };
}

/** Primary CTA target when user lands on home or /course */
export function getDefaultSection(): CourseSection {
  return getPublishedSections()[0];
}

/** Next section after current, or null if last / unknown */
export function getNextSection(slug: string | null): CourseSection | null {
  if (!slug) return getPublishedSections()[0] ?? null;
  return getAdjacentSections(slug).next;
}

export function isSectionPath(pathname: string): boolean {
  return /\/course\/section-\d+/.test(pathname);
}

export function getCtaForPath(pathname: string): {
  href: string;
  label: string;
} {
  const current = getSectionFromPath(pathname);
  const sections = getPublishedSections();

  if (!current) {
    const first = sections[0];
    return {
      href: getSectionHref(first.slug),
      label: `Start Section ${first.number}`,
    };
  }

  const { next } = getAdjacentSections(current.slug);
  if (next) {
    return {
      href: getSectionHref(next.slug),
      label: `Section ${next.number} →`,
    };
  }

  return {
    href: "/course",
    label: "Course overview",
  };
}

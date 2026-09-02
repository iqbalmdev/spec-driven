import Link from "next/link";
import { cn } from "@/lib/utils";

export { HeaderNav as Header } from "@/components/course-nav";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted">
          Spec-Driven Development — From Vibe-Coding to AI Engineering
        </p>
        <p className="text-xs text-muted">
          Built as a living spec showcase · docs + app in one repo
        </p>
      </div>
    </footer>
  );
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ eyebrow, title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("mb-10 space-y-3", className)}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-widest text-accent">{eyebrow}</p>
      )}
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h1>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "accent";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
        variant === "default" && "bg-surface text-muted ring-border",
        variant === "success" && "bg-emerald-500/10 text-emerald-700 ring-emerald-500/20 dark:text-emerald-400",
        variant === "warning" && "bg-amber-500/10 text-amber-700 ring-amber-500/20 dark:text-amber-400",
        variant === "accent" && "bg-accent/10 text-accent ring-accent/20",
        className
      )}
    >
      {children}
    </span>
  );
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface p-5 shadow-sm",
        hover && "transition-shadow hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}

export function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="relative rounded-xl border border-accent/20 bg-accent-soft px-6 py-5 text-base font-medium leading-relaxed text-foreground">
      <span className="absolute -top-2.5 left-4 bg-accent-soft px-2 text-accent text-lg leading-none">"</span>
      {children}
    </blockquote>
  );
}

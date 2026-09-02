import Link from "next/link";
import { FileText, GitBranch, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/course", label: "Course", icon: Layers },
  { href: "/requirements", label: "Requirements", icon: FileText },
  { href: "/workflow", label: "Workflow", icon: GitBranch },
  { href: "/templates", label: "Templates", icon: FileText },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 text-xs font-semibold text-accent ring-1 ring-accent/20">
            SD
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground group-hover:text-accent transition-colors">
            Spec-Driven
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/course/section-01"
          className="rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-opacity hover:opacity-90 sm:text-sm"
        >
          Start Section 1
        </Link>
      </div>
    </header>
  );
}

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

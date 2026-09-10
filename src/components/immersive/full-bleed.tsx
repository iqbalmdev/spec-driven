import { cn } from "@/lib/utils";

interface FullBleedProps {
  children: React.ReactNode;
  className?: string;
}

/** Break out of the max-w-6xl main container for full-viewport sections. */
export function FullBleed({ children, className }: FullBleedProps) {
  return (
    <div className={cn("relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2", className)}>
      {children}
    </div>
  );
}

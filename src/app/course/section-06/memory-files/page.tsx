import Link from "next/link";
import { agentOsMemoryFiles } from "@/content/section-06";
import { SectionPager } from "@/components/course-nav";
import { PageHeader, Card } from "@/components/ui/layout";
import { ArrowRight } from "lucide-react";

export default function MemoryFilesPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 6"
        title="Plan · Roadmap · Techstack"
        description="Three files form AgentOS persistent memory — focus, priority, and shared stack knowledge."
      />

      <div className="space-y-4">
        {agentOsMemoryFiles.map((row) => (
          <Card key={row.file} className="space-y-2">
            <code className="text-sm font-mono text-accent">{row.file}</code>
            <p className="font-medium">{row.purpose}</p>
            <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
          </Card>
        ))}
      </div>

      <Link href="/templates" className="inline-flex items-center gap-1 text-sm font-medium text-accent">
        Starter templates in repo <ArrowRight className="h-4 w-4" />
      </Link>

      <SectionPager slug="section-06" />
    </div>
  );
}

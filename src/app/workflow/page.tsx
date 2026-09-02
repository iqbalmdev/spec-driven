import { WorkflowDiagram } from "@/components/workflow-diagram";
import { PageHeader, Card } from "@/components/ui/layout";

const steps = [
  {
    step: "Feature idea",
    detail: "A need emerges — but resist the urge to prompt-and-pray.",
  },
  {
    step: "shape-spec",
    detail: "Structured conversation: frame the problem, map the journey, define contracts, capture open items.",
  },
  {
    step: "requirements.md",
    detail: "Living document with user stories, acceptance criteria, and open items — committed to the repo.",
  },
  {
    step: "Clarification Gate",
    detail: "Hard stop: open items must equal zero. Ambiguity is not carried forward.",
  },
  {
    step: "Generate & implement",
    detail: "Tasks, plans, and AI prompts derived from the spec — then code, then verify against spec.",
  },
];

export default function WorkflowPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Process"
        title="SDD Workflow"
        description="The path from feature idea to verified implementation — each step enforces clarity before speed."
      />

      <Card className="p-8">
        <WorkflowDiagram interactive />
      </Card>

      <section className="space-y-4">
        {steps.map((s, i) => (
          <Card key={s.step} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
              {i + 1}
            </span>
            <div>
              <h3 className="font-semibold">{s.step}</h3>
              <p className="mt-1 text-sm text-muted leading-relaxed">{s.detail}</p>
            </div>
          </Card>
        ))}
      </section>

      <Card className="bg-accent-soft border-accent/20">
        <p className="text-sm font-medium leading-relaxed">
          Remember: What does the spec say should happen — not what does the code happen to do.
          Verify implementation against the spec, not the other way around.
        </p>
      </Card>
    </div>
  );
}

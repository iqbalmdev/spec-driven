/** Kiro / high-rigor spec-driven workflow — steering.md + requirements.md, design.md, tasks.md */

/** Persistent memory vs per-feature spec (execution spine) */
export const executionSpineDocs = [
  {
    file: "steering.md",
    purpose: "Persistent project memory (e.g. tech stack, coding standards)",
    scope: "Whole repo, every session",
  },
  {
    file: "requirements.md",
    purpose: "The “what” for a single feature (from the execution spine)",
    scope: "One feature or change set",
  },
] as const;

export const steeringFileGuide = {
  file: "steering.md",
  role: "Steering",
  need: "Long-lived context agents reload every session — so they stop guessing stack, style, and project rules.",
  audience: "Human + AI",
  summary:
    "Persistent project memory: tech stack, coding standards, folder conventions, and pointers to mission/roadmap — not feature-specific acceptance criteria.",
  mustInclude: [
    "Tech stack — frameworks, versions, package manager, deploy target",
    "Coding standards — naming, patterns, lint/format commands",
    "Project structure — where specs, app code, and docs live",
    "Links to constitution.md, tech-stack.md, or AGENTS.md where applicable",
    "Exact commands agents should run (build, test, lint)",
  ],
  mustNot: [
    "Replace requirements.md for a single feature’s acceptance criteria",
    "Drift from what the repo actually uses — update when stack or standards change",
    "Secrets or credentials — steer behavior, not store keys",
  ],
  readyWhen: [
    "A new agent session can orient without re-pasting stack context in chat",
    "Aligns with tech-stack.md and team constitution",
  ],
  whenToUpdate: "When stack, standards, or repo layout change — steering.md is living memory, like code.",
} as const;

export const kiroSpecFileGuide = [
  {
    file: "requirements.md",
    role: "What",
    need: "The “what” for one feature on the execution spine — intent for this change, not the whole product forever.",
    audience: "Human + AI",
    summary:
      "Per-feature living spec: user outcomes, measurable acceptance criteria, resolved ambiguity. Read steering.md first for context; requirements.md defines this feature’s contract.",
    mustInclude: [
      "Vision or problem statement — who hurts and why",
      "User stories with testable acceptance criteria (EARS patterns)",
      "Explicit out-of-scope and DO NOT constraints",
      "Clarification Gate — open items tracked until resolved",
      "Roles, data lifecycle, and error behavior where the feature touches them",
    ],
    mustNot: [
      "Implementation details (frameworks, file names, class diagrams) — those belong in design.md",
      "Vague completion language (“make it work”, “looks good”)",
      "Unresolved [OPEN] items while claiming ready to build",
    ],
    readyWhen: [
      "Clarification Gate passes — zero unresolved open items",
      "Success criteria are observable and measurable",
      "Ready for Plan Checklist green (Section 4)",
    ],
    whenToUpdate: "Whenever scope, success criteria, or constraints change — update before or with code in the same PR.",
  },
  {
    file: "design.md",
    role: "How",
    need: "Architecture and approach agreed after requirements are clear — so agents implement one coherent system, not improvised structure.",
    audience: "Human + AI",
    summary:
      "Technical plan: components, data flow, and decisions — aligned with tech-stack.md and constitution tiers.",
    mustInclude: [
      "Overview of the technical approach for this feature",
      "Main components/modules and how data flows between them",
      "Key design decisions with brief rationale",
      "References to requirements (which REQ IDs this design satisfies)",
      "Call out Tier Two changes (schema, dependencies, public API) for human approval",
    ],
    mustNot: [
      "Re-copy entire requirements.md — link and trace instead",
      "Contradict tech-stack.md or constitution.md without an explicit change request",
      "Skip design and jump straight to large code changes",
    ],
    readyWhen: [
      "requirements.md gate has passed",
      "Design is reviewable — another engineer could implement from it",
      "No major open architectural questions left in requirements",
    ],
    whenToUpdate: "When architecture, modules, or integration points change — keep design.md matching what you actually built.",
  },
  {
    file: "tasks.md",
    role: "Steps",
    need: "An ordered, executable checklist — smallest verifiable units — so AI and humans implement and review one step at a time.",
    audience: "Human + AI",
    summary:
      "Output of /create-tasks: atomic tasks with dependencies, requirement links, and verification steps (exact commands).",
    mustInclude: [
      "Tasks broken into atomic, independently verifiable units",
      "Dependency order — what blocks what",
      "Link each task to requirement IDs or user stories",
      "Verification checklist per task — exact commands (e.g. npm run build, npm run lint)",
      "Checkboxes updated as work completes",
    ],
    mustNot: [
      "Created before the Clarification Gate passes",
      "Monolithic tasks (“build the whole feature”) without verification",
      "Stale checkboxes — done in code but unchecked in tasks.md",
    ],
    readyWhen: [
      "Generated from clarified requirements.md (and informed by design.md)",
      "Every task has a verification path",
      "Dependencies form a clear execution order",
    ],
    whenToUpdate: "After each task completes and at feature sign-off — match tasks.md to reality (Minimal Living Docs Checklist, Section 4).",
  },
] as const;

export const kiroSpecWorkflowOrder = [
  { step: 0, file: "steering.md", action: "Load persistent memory — stack, standards, commands" },
  { step: 1, file: "requirements.md", action: "shape-spec → clarify → gate (this feature’s what)" },
  { step: 2, file: "design.md", action: "Architect how — after gate" },
  { step: 3, file: "tasks.md", action: "/create-tasks → dependency-ordered checklist" },
  { step: 4, file: "Code + verify", action: "/implement one task at a time; MCP for evidence" },
] as const;

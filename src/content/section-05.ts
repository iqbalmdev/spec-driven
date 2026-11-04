export const section05ModuleMeta = {
  module: "Module 5",
  title: "Tooling and Ecosystem",
  lessonCount: 3,
  estimatedMinutes: 19,
} as const;

export const section05Topics = [
  {
    id: "agent-os",
    title: "Agent OS",
    subtitle: "Lesson 1 · ~6 min",
    description:
      "Managing the feature lifecycle as an operating system for agents — shape-spec, gate, tasks, implement, and verify as repeatable stages.",
    href: "/course/section-05/agent-os",
  },
  {
    id: "kiro",
    title: "Amazon Kiro",
    subtitle: "Lesson 2 · ~6 min",
    description:
      "A high-rigor agentic IDE — specs and guardrails in the editor so agents execute intent instead of improvising.",
    href: "/course/section-05/kiro",
  },
  {
    id: "mcp",
    title: "Model Context Protocol (MCP)",
    subtitle: "Lesson 3 · ~6 min",
    description:
      "The runtime diagnostic bridge — standard hooks from AI assistants to repos, logs, APIs, and tools at execution time.",
    href: "/course/section-05/mcp",
  },
] as const;

/** Feature lifecycle stages aligned with Agent OS / SDD workflow */
export const agentOsLifecycle = [
  {
    stage: "Understand",
    command: "shape-spec",
    detail: "Structured conversation; requirements and EARS criteria before code.",
  },
  {
    stage: "Gate",
    command: "Clarification Gate",
    detail: "Zero open items in requirements.md; Ready for Plan checklist green.",
  },
  {
    stage: "Plan",
    command: "/create-tasks",
    detail: "Atomic tasks.md linked to requirements with verification steps.",
  },
  {
    stage: "Build",
    command: "/implement",
    detail: "One task at a time; constitution tiers and approval gates respected.",
  },
  {
    stage: "Verify",
    command: "verify",
    detail: "Acceptance criteria and exact commands (build, lint, test) pass.",
  },
] as const;

export const kiroRigorPoints = [
  {
    title: "Spec in the loop",
    detail: "Intent files stay visible while coding — not buried in chat history.",
  },
  {
    title: "Guardrailed automation",
    detail: "Agents follow project rules (constitution, tiers) before editing the tree.",
  },
  {
    title: "Traceable changes",
    detail: "High-rigor flows favor small, reviewable steps tied to tasks.",
  },
] as const;

export const mcpBridgeExamples = [
  { tool: "Repository", role: "Read specs, diffs, and project structure" },
  { tool: "Runtime / logs", role: "Diagnose failures with live context, not guesses" },
  { tool: "External APIs", role: "Query docs, issues, or data through standard servers" },
  { tool: "Custom servers", role: "Team-specific bridges (DB, deploy, observability)" },
] as const;

export const section05Takeaways = [
  "Agent OS treats the SDD lifecycle as an operating system — same stages for every feature.",
  "High-rigor IDEs (e.g. Kiro) keep specs and guardrails where agents work.",
  "MCP is the plug standard between AI and your runtime — diagnostics and tools at execution time.",
  "Tooling extends SDD: specs in git + disciplined agents + connected observability.",
  "Pick tools that reinforce the Clarification Gate and task-ordered implementation.",
  "This repo uses MCP in Cursor (GitHub, Supabase, docs) as a practical MCP example.",
] as const;

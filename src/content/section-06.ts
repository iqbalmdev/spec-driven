export const section06Topics = [
  {
    id: "persistent-memory",
    title: "Persistent Project Memory",
    subtitle: "Context that survives sessions",
    description:
      "AgentOS fixes AI context loss — project memory lives in version-controlled files agents read every time, not in chat history.",
    href: "/course/section-06/persistent-memory",
  },
  {
    id: "memory-files",
    title: "Three Memory Files",
    subtitle: "Plan · Roadmap · Techstack",
    description:
      "plan.md prevents feature drift, roadmap.md sets priorities, techstack.md shares stack truth — one knowledge base for humans and AI.",
    href: "/course/section-06/memory-files",
  },
  {
    id: "shape-spec",
    title: "shape-spec",
    subtitle: "Dialogue before code",
    description:
      "Structured developer–AI conversation until features are understood; capture outcomes in requirements.md and clear ambiguity.",
    href: "/course/section-06/shape-spec",
  },
  {
    id: "create-tasks",
    title: "/create-tasks",
    subtitle: "Atomic checklist",
    description:
      "Decompose features into small, dependency-ordered tasks in tasks.md — a clear checklist linked to requirements.",
    href: "/course/section-06/create-tasks",
  },
  {
    id: "implementation-paths",
    title: "Implementation Paths",
    subtitle: "Control vs speed",
    description:
      "Implement tasks for maximum control, or orchestrate tasks for speed — parallel specialist agents with fewer conflicts.",
    href: "/course/section-06/implementation-paths",
  },
] as const;

export const agentOsMemoryFiles = [
  {
    file: "plan.md",
    purpose: "Prevent feature drift",
    detail: "Keeps the current feature and tasks in focus — what we are building now, not everything at once.",
  },
  {
    file: "roadmap.md",
    purpose: "Clarify priorities",
    detail: "Orders what comes next so agents and humans align on sequencing and deferrals.",
  },
  {
    file: "techstack.md",
    purpose: "Shared stack truth",
    detail: "Documents frameworks, versions, and conventions — removes guesswork about how this repo is built.",
  },
] as const;

export const agentOsWorkflow = [
  { step: "Memory", files: "plan.md · roadmap.md · techstack.md", action: "Load persistent context" },
  { step: "Understand", files: "requirements.md", action: "shape-spec — dialogue until intent is clear" },
  { step: "Plan", files: "tasks.md", action: "/create-tasks — dependency-ordered atomic tasks" },
  { step: "Build", files: "Code", action: "Implement or orchestrate tasks" },
] as const;

export const implementationPaths = [
  {
    id: "implement",
    title: "Implement Tasks",
    tagline: "High control",
    description:
      "Execute one task at a time in order — ideal when you want tight review, Tier Two gates, and minimal parallel risk.",
    bestFor: ["Learning the codebase", "Risky or ambiguous work", "Constitution-heavy changes"],
  },
  {
    id: "orchestrate",
    title: "Orchestrate Tasks",
    tagline: "Prioritize speed",
    description:
      "Specialist agents work in parallel on independent tasks — faster delivery when tasks are well-isolated and specs are tight.",
    bestFor: ["Clear task boundaries", "Mature specs after the gate", "Time-boxed sprints"],
  },
] as const;

export const section06Benefits = [
  "Faster delivery with fewer context resets between sessions",
  "Consistent decisions — stack and priorities written once",
  "Reliable handoffs — requirements and tasks are the contract",
  "Strategic focus — you decide; AI executes within AgentOS rails",
] as const;

export const section06Takeaways = [
  "AgentOS uses persistent memory files so AI assistants stop losing project context.",
  "plan.md, roadmap.md, and techstack.md anchor focus, priority, and stack knowledge.",
  "shape-spec + requirements.md eliminate ambiguity before any implementation.",
  "/create-tasks produces a dependency-ordered tasks.md checklist.",
  "Choose implement (control) or orchestrate (speed) based on risk and spec maturity.",
  "Structured workflows increase speed, consistency, and reliability — not chaos.",
] as const;

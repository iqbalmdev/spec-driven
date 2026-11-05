export const section06ModuleMeta = {
  title: "Living Specs & AgentOS",
  lessonCount: 6,
  estimatedMinutes: 24,
} as const;

/** Section 6 · Lesson 1 — The Explainer (living guardrails / test-driven specs) */
export const section06Lesson1Sections = [
  {
    id: "gap",
    title: "The gap between plan and shipped code",
    body: "Detailed specs hand off to engineering; weeks later the feature is not quite right. That drift blows budgets, slips timelines, drives rework, frustrates teams, and erodes customer trust when bugs reach production.",
  },
  {
    id: "split-worlds",
    title: "Why specs and tests drift apart",
    body: "Traditionally requirements live in documents while tests live in the codebase — a gap opens almost inevitably. In spec-driven workflow, requirements are written to produce tests. That link ties intent to the reality of the code.",
  },
  {
    id: "executable-guardrails",
    title: "Specs as executable guardrails",
    body: "Stop treating specs as wishlists. Treat them as guardrails that actively validate themselves — catching drift the moment it happens, not during a frantic late QA cycle.",
  },
  {
    id: "test-driven-specs",
    title: "Test-driven specs",
    body: "Embed validation in the spec itself. You get an objective, automatable source of truth — a rock-solid definition of done that humans and AI agents can agree on, with far fewer arguments about “done.”",
  },
  {
    id: "scenarios",
    title: "Scenarios — not vague user stories",
    body: "Precise, structured behavior descriptions that translate directly into automated tests. Robust specs cover three types: the happy path (ideal flow), edge cases (time zones, duplicates, weird inputs), and error cases (graceful, secure failure).",
  },
  {
    id: "gwt",
    title: "Given · When · Then",
    body: "Given sets initial system state. When is the action or trigger. Then defines the expected outcome. The template is simple but forces clarity and removes ambiguity — a perfect instruction set for developers and AI agents.",
  },
  {
    id: "test-first-governance",
    title: "Test first is governance, not preference",
    body: "In spec-driven development, test-first is risk management policy — not personal style. Tests before implementation catch flawed assumptions when they are cheapest to fix. A test-first gate blocks coding until the safety net is proven.",
  },
  {
    id: "property-tests",
    title: "From examples to properties",
    body: "Example-based tests ask: does it work for this input? Property-based tests (PBT) ask: is this behavior always true for any valid input? Define an invariant; frameworks generate hundreds or thousands of inputs hunting for counterexamples.",
  },
  {
    id: "definition-of-done",
    title: "Objective definition of done",
    body: "Every acceptance criterion maps one-to-one to a scenario and therefore a test. If a requirement exists, it has an automated check. Done is not when code is written — done is when all tests derived from original intent are passing.",
  },
  {
    id: "closing",
    title: "Opinion vs verifiable fact",
    body: "When your team says a feature is done, is that an opinion or a fact? Shifting from opinion to verifiable signal is how you ship more reliable software, faster.",
  },
] as const;

export const specScenarioTypes = [
  {
    type: "Happy path",
    detail: "The ideal flow when everything works as designed — baseline behavior you must get right first.",
  },
  {
    type: "Edge cases",
    detail: "Where systems usually break — time zones, duplicate requests, boundary values, concurrency quirks.",
  },
  {
    type: "Error cases",
    detail: "Explicit failure behavior — secure, graceful degradation instead of catastrophic breakage.",
  },
] as const;

export const givenWhenThenParts = [
  { part: "Given", role: "Initial state", example: "Given a signed-in user with an empty cart" },
  { part: "When", role: "Action / trigger", example: "When they add a valid SKU" },
  { part: "Then", role: "Expected outcome", example: "Then the cart count increases by one and totals update" },
] as const;

export const testFirstGateChecklist = [
  "Every requirement maps directly to at least one test or scenario",
  "Negative paths and error cases are explicitly covered",
  "Verification commands are baked into tasks and docs (exact CLI, not “run tests”)",
  "Tests fail before implementation starts — the safety net is real, not theater",
] as const;

export const exampleVsPropertyTests = {
  example:
    "Example-based tests: “Does it work for this specific input I thought of?” — essential, but easy to miss blind spots.",
  property:
    "Property-based tests: “Is this rule always true for any valid input?” — frameworks like Hypothesis (Python) and FastCheck (JavaScript/TypeScript) stress-test invariants you define.",
} as const;

/** Template audit trail — requirement → scenario → command → PR */
export const requirementTraceabilityTemplate = [
  {
    requirementId: "REQ-001",
    scenario: "Given … When … Then … (happy path)",
    verificationCommand: "pnpm test --filter checkout",
    pullRequest: "#142",
  },
  {
    requirementId: "REQ-001",
    scenario: "Given … When duplicate submit … Then idempotent response",
    verificationCommand: "pnpm test checkout.edge",
    pullRequest: "#142",
  },
  {
    requirementId: "REQ-002",
    scenario: "Property: totals never negative for valid cart",
    verificationCommand: "pnpm test cart.properties",
    pullRequest: "#143",
  },
] as const;

export const section06Topics = [
  {
    id: "living-guardrails",
    title: "Living Specs & Executable Guardrails",
    subtitle: "Lesson 1 · The Explainer",
    description:
      "Close the plan-vs-shipped gap — test-driven specs, Given/When/Then scenarios, test-first gate, property tests, and a traceable definition of done.",
    href: "/course/section-06/living-guardrails",
  },
  {
    id: "persistent-memory",
    title: "Persistent Project Memory",
    subtitle: "Lesson 2 · AgentOS",
    description:
      "AgentOS fixes AI context loss — project memory lives in version-controlled files agents read every time, not in chat history.",
    href: "/course/section-06/persistent-memory",
  },
  {
    id: "memory-files",
    title: "Three Memory Files",
    subtitle: "Lesson 3 · Plan · Roadmap · Techstack",
    description:
      "plan.md prevents feature drift, roadmap.md sets priorities, techstack.md shares stack truth — one knowledge base for humans and AI.",
    href: "/course/section-06/memory-files",
  },
  {
    id: "shape-spec",
    title: "shape-spec",
    subtitle: "Lesson 4 · Dialogue before code",
    description:
      "Structured developer–AI conversation until features are understood; capture outcomes in requirements.md and clear ambiguity.",
    href: "/course/section-06/shape-spec",
  },
  {
    id: "create-tasks",
    title: "/create-tasks",
    subtitle: "Lesson 5 · Atomic checklist",
    description:
      "Decompose features into small, dependency-ordered tasks in tasks.md — a clear checklist linked to requirements.",
    href: "/course/section-06/create-tasks",
  },
  {
    id: "implementation-paths",
    title: "Implementation Paths",
    subtitle: "Lesson 6 · Control vs speed",
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
      "Specialist agents work in parallel — each sees only context relevant to its task. Smaller scope reduces drift and conflicts; faster when specs are tight and tasks are isolated.",
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
  "Lesson 1: Specs as executable guardrails — requirements written to produce tests, not wishlists in a doc silo.",
  "Cover happy path, edge cases, and error cases with Given/When/Then; run the test-first gate before implementation.",
  "Property-based tests (Hypothesis, FastCheck) prove invariants; every requirement maps to an automated check.",
  "Trace requirement ID → scenario → verification command → PR for an auditable definition of done.",
  "AgentOS uses persistent memory files so AI assistants stop losing project context.",
  "plan.md, roadmap.md, and techstack.md anchor focus, priority, and stack knowledge.",
  "shape-spec + requirements.md eliminate ambiguity before any implementation.",
  "/create-tasks produces a dependency-ordered tasks.md checklist.",
  "Choose implement (control) or orchestrate (speed) based on risk and spec maturity.",
  "Structured workflows increase speed, consistency, and reliability — not chaos.",
] as const;

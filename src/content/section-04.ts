export const section04Topics = [
  {
    id: "understanding-requirements",
    title: "Understanding Requirements",
    subtitle: "shape-spec before code",
    description:
      "AI must comprehensively understand a feature before coding. shape-spec forces structured conversation — with EARS patterns for precise acceptance criteria.",
    href: "/course/section-04/shape-spec",
  },
  {
    id: "clarification-gate",
    title: "Clarification Gate",
    subtitle: "Zero ambiguity",
    description:
      "Resolve every open item in requirements.md before advancing. Pass the Ready for Plan Checklist — measurable success, roles, errors, and constraints.",
    href: "/course/section-04/gate",
  },
  {
    id: "constitution",
    title: "Consistency vs Flexibility",
    subtitle: "constitution.md",
    description:
      "Balance organizational consistency with project-level flexibility. Articulate team rules in constitution.md — what is always true, what can vary.",
    href: "/course/section-04/constitution",
  },
  {
    id: "documentation",
    title: "Documentation Maintenance",
    subtitle: "Exact commands, living docs",
    description:
      "Keep docs relevant and practical. Give AI exact commands — not vague suggestions. requirements.md, tasks.md, and AGENTS.md evolve with the project.",
    href: "/course/section-04/documentation",
  },
  {
    id: "approval-gates",
    title: "Approval Gates (Tier Two)",
    subtitle: "Human verification",
    description:
      "Significant but not clearly wrong actions need human approval — schema changes, new dependencies, public API changes.",
    href: "/course/section-04/approval-gates",
  },
] as const;

export const tierSystem = {
  tierOne: {
    label: "Tier One — Always Do",
    description: "Safe defaults. AI proceeds without asking.",
    color: "emerald",
    examples: ["Run unit tests", "Update spec/plan", "Follow constitution", "Follow naming conventions"],
  },
  tierTwo: {
    label: "Tier Two — Ask First (Approval Gate)",
    description: "Significant changes. Human verification required before proceeding.",
    color: "amber",
    examples: [
      "Add dependencies",
      "Change DB schema",
      "Change public API",
      "Refactor core modules",
    ],
  },
  tierThree: {
    label: "Tier Three — Never Do",
    description: "Hard bans. No exceptions — block immediately.",
    color: "rose",
    examples: ["Read secrets", "Bypass auth", "Log sensitive data"],
  },
} as const;

export const approvalGateScenarios = [
  {
    id: "add-zod",
    action: "Add zod as a new dependency for form validation",
    tier: 2 as const,
    correct: "ask" as const,
    explanation: "Adding dependencies affects bundle size, security, and maintenance — Tier Two requires human approval.",
  },
  {
    id: "run-tests",
    action: "Run npm test after implementing Task 2",
    tier: 1 as const,
    correct: "proceed" as const,
    explanation: "Running tests is Tier One — always do without asking.",
  },
  {
    id: "schema-migration",
    action: "Add deletedAt column to messages table via migration",
    tier: 2 as const,
    correct: "ask" as const,
    explanation: "Database schema changes are Tier Two — significant structural impact.",
  },
  {
    id: "log-password",
    action: "Log request body for debugging failed login",
    tier: 3 as const,
    correct: "block" as const,
    explanation: "Logging sensitive data is Tier Three — never do, block immediately.",
  },
  {
    id: "update-requirements",
    action: "Mark Task 2 verification complete in tasks.md",
    tier: 1 as const,
    correct: "proceed" as const,
    explanation: "Updating plan/docs after verified work is Tier One — keep docs in sync.",
  },
  {
    id: "public-api",
    action: "Change /api/messages response shape to include metadata",
    tier: 2 as const,
    correct: "ask" as const,
    explanation: "Public API changes break consumers — Tier Two approval gate.",
  },
] as const;

export const constitutionLayers = {
  organization: {
    title: "Organization (consistency)",
    description: "Rules that apply across all projects — security, git workflow, naming standards.",
    examples: ["Never log PII", "All PRs require review", "Conventional commits"],
  },
  project: {
    title: "Project (flexibility)",
    description: "Rules specific to this repo — stack choices, folder structure, commands.",
    examples: ["Next.js App Router", "npm run build to verify", "docs/ for course content"],
  },
} as const;

export const documentationFiles = [
  { file: "README.md", audience: "Human", purpose: "Product overview — what this project is" },
  { file: "requirements.md", audience: "Human + AI", purpose: "Feature intent — our SPEC equivalent" },
  { file: "constitution.md", audience: "Human + AI", purpose: "Team rules — consistency vs flexibility" },
  { file: "tasks.md", audience: "Human + AI", purpose: "Atomic work units with verification" },
  { file: "AGENTS.md", audience: "AI", purpose: "Operational rules — commands, boundaries, structure" },
] as const;

export const exactCommandsExample = [
  { task: "Install", vague: "install dependencies", exact: "npm install" },
  { task: "Build", vague: "make sure it builds", exact: "npm run build" },
  { task: "Dev server", vague: "run the app", exact: "npm run dev" },
  { task: "Lint", vague: "check code quality", exact: "npm run lint" },
] as const;

export const earsPatterns = [
  { type: "Ubiquitous", template: "The system shall…" },
  { type: "Event-Driven", template: "When <trigger>, the system shall…" },
  { type: "State-Driven", template: "While <in a specific state>, the system shall…" },
  { type: "Optional Feature", template: "Where <feature is included>, the system shall…" },
  { type: "Unwanted Behavior", template: "If <condition>, then the system shall…" },
] as const;

export const readyForPlanChecklist = [
  { id: "clarification", label: "No [NEEDS CLARIFICATION] items remain" },
  { id: "success", label: "Success criteria are measurable" },
  { id: "roles", label: "Roles and permissions are explicit" },
  { id: "errors", label: "Error behavior is explicit" },
  { id: "data", label: "Data lifecycle is explicit" },
  { id: "constraints", label: "DO NOT constraints are present" },
] as const;

export const shapeSpecPrompts = [
  { phase: "Frame", question: "What problem does this solve — for whom?", placeholder: "Learners lose course notes scattered in chat..." },
  { phase: "Scope", question: "What is explicitly out of scope?", placeholder: "Authentication, payments, mobile app..." },
  { phase: "Success", question: "What does success look like — measurable?", placeholder: "Each section retrievable from repo without chat history" },
  { phase: "Open items", question: "What is still unclear?", placeholder: "OI-001: Web app or docs-only?" },
] as const;

export const section04Takeaways = [
  "shape-spec before code. Structured conversation prevents AI misassumptions.",
  "Write requirements with EARS patterns — predictable syntax AI and humans parse the same way.",
  "Clarification Gate: zero open items in requirements.md — decisions documented, clarity locked in.",
  "Ready for Plan Checklist: measurable success, explicit roles, errors, data lifecycle, and DO NOT constraints.",
  "constitution.md balances org consistency with project flexibility.",
  "Document exact commands — npm run build, not 'make sure it works.'",
  "Tier Two approval gates: dependencies, schema, public API — human verifies first.",
  "Living docs evolve with the project. If it is not in git, it does not exist.",
] as const;

export const journeyNodes = [
  { id: 1, label: "shape-spec", section: "section-04", y: 0 },
  { id: 2, label: "Gate", section: "section-04", y: 1 },
  { id: 3, label: "Constitution", section: "section-04", y: 2 },
  { id: 4, label: "Tasks", section: "section-02", y: 3 },
  { id: 5, label: "Implement", section: "section-03", y: 4 },
  { id: 6, label: "Verify", section: "section-03", y: 5 },
] as const;

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
      "Persistent project memory (/plan product), shape-spec, requirements gate, atomic tasks, and implement vs orchestrate — Builder Methods AgentOS discipline.",
    href: "/course/section-05/agent-os",
  },
  {
    id: "kiro",
    title: "Amazon Kiro",
    subtitle: "Lesson 2 · ~6 min",
    description:
      "High-rigor agentic IDE — Requirements, Design, Tasks; EARS; mission/roadmap/tech-stack artifacts; enforcement with evidence.",
    href: "/course/section-05/kiro",
  },
  {
    id: "spec-files",
    title: "requirements · design · tasks",
    subtitle: "Kiro spec triad",
    description:
      "steering.md, requirements.md, design.md, tasks.md — needs, must-include rules, and readiness on the execution spine.",
    href: "/course/section-05/spec-files",
  },
  {
    id: "mcp",
    title: "Model Context Protocol (MCP)",
    subtitle: "Lesson 3 · ~6 min",
    description:
      "Runtime diagnostic bridge — bounded autonomy, JSON-RPC tools, Playwright journeys, and evidence like LCP metrics.",
    href: "/course/section-05/mcp",
  },
] as const;

/** AgentOS persistent memory (Lesson 1 + Section 6) — plain-text anchor files */
export const highRigorArtifactFiles = [
  {
    file: "plan.md",
    problem: "Feature drift",
    detail: "Stops the AI from building features that do not matter — scope stays tied to product intent.",
  },
  {
    file: "roadmap.md",
    problem: "Priority hallucinations",
    detail: "Makes what comes next explicit so agents and humans do not invent urgency or reorder work.",
  },
  {
    file: "techstack.md",
    problem: "Stack guessing",
    detail: "Single source of truth for frameworks, versions, and allowed tools — no improvised dependencies.",
  },
] as const;

/** Lesson 1 — AgentOS transcript-aligned narrative */
export const agentOsLessonSections = [
  {
    id: "hook",
    title: "What if your assistant had perfect memory?",
    body: "You spend an hour explaining project context — mission, stack, roadmap — and the next session the AI has complete amnesia. Every new chat starts at square one. AgentOS from Builder Methods is less another AI gadget and more a discipline: a workflow that creates a persistent brain for the project in the repo, not in chat history.",
  },
  {
    id: "shared-memory",
    title: "Shared, permanent memory",
    body: "The system rests on one idea: durable context that both you and any AI agent can reload anytime, regardless of which tool you use. Run it once at the beginning; the anchor survives across all future sessions.",
  },
  {
    id: "plan-product",
    title: "/plan product — one command to anchor the project",
    body: "At project start, run /plan product once. It establishes the permanent anchor — three simple plain-text files that form the persistent knowledge layer so a new developer or a brand-new agent gets up to speed almost instantly. The painful cycle of re-explaining goes away.",
  },
  {
    id: "three-files",
    title: "Three files, three headaches solved",
    body: "plan.md ends feature drift. roadmap.md prevents priority hallucinations by spelling out what is next. techstack.md ends stack guessing. Together they are a lightweight governance layer humans and agents share.",
  },
  {
    id: "shape-spec",
    title: "shape-spec — ask before guess",
    body: "With memory in place, the next phase forces understanding before code. shape-spec creates structured dialogue instead of wild guesses — a feedback loop where the agent asks questions, you make trade-offs, and every decision is saved to requirements.md. That clarity is locked in permanently.",
  },
  {
    id: "clarification-gate",
    title: "The clarification gate",
    body: "The rule is non-negotiable: you cannot move on until requirements.md has zero unresolved items. Eliminate ambiguity first — then implementation stands on clarified intent, not assumptions.",
  },
  {
    id: "create-tasks",
    title: "/create-tasks — atomic decomposition",
    body: "Turn deep understanding into an actionable plan with /create-tasks. Break the feature into the smallest verifiable chunks — easy to review, test, and get right. tasks.md groups work by dependency, links each task to a requirement, includes verification steps, and can tag specialist agents. The output is a deterministic checklist, not a vague to-do list.",
  },
  {
    id: "implement-paths",
    title: "Implement vs orchestrate",
    body: "AgentOS gives two paths and forces a conscious choice. Implement tasks: high control — one agent, one task at a time, sequential review. Orchestrate tasks: high speed — parallel specialist agents, each with only the context relevant to its job. Smaller attention scope reduces drift, prevents conflicts, and yields more reliable code.",
  },
  {
    id: "payoff",
    title: "The real payoff is consistency",
    body: "This is not only about speed. You get a predictable rhythm where you focus on intent, trade-offs, and taste — architecting — while agents handle bounded, well-defined implementation. Lightweight governance: /plan product for context, shape-spec for discovery, /create-tasks for checklists, then a disciplined build path.",
  },
  {
    id: "closing",
    title: "Never forget again",
    body: "Strip away the hype: how would your daily work change if your AI assistant never forgot the project’s mission, priorities, or stack? AgentOS answers that with files in version control — memory that reloads every session.",
  },
] as const;

export const agentOsLifecycle = [
  {
    stage: "Anchor",
    command: "/plan product",
    detail: "Once at project start — plan.md, roadmap.md, techstack.md as durable context.",
  },
  {
    stage: "Understand",
    command: "shape-spec",
    detail: "Structured dialogue; capture intent before code.",
  },
  {
    stage: "Clarify",
    command: "Five buckets + Gate",
    detail: "Users, data, consistency, errors, security — then zero open items.",
  },
  {
    stage: "Plan",
    command: "/create-tasks",
    detail: "Atomic tasks grouped by dependencies, linked to requirements.",
  },
  {
    stage: "Build",
    command: "/implement",
    detail: "Tier One proceeds; Tier Two gets a human sanity check.",
  },
  {
    stage: "Verify",
    command: "Evidence",
    detail: "Measurable success criteria — debug intent, not mystery code.",
  },
] as const;

export const agentOsExactCommands = [
  { vague: "make sure tests pass", exact: "pnpm test && pnpm lint" },
  { vague: "check the build", exact: "pnpm build" },
  { vague: "run quality checks", exact: "npm run lint && npm run build" },
] as const;

export const clarificationBuckets = [
  {
    id: "users",
    title: "Users & roles",
    prompt: "Who acts in the system — and who must never access what?",
  },
  {
    id: "data",
    title: "Data lifecycle",
    prompt: "Create, read, update, delete, retention — what happens to data over time?",
  },
  {
    id: "consistency",
    title: "Consistency",
    prompt: "What must stay true across sessions, devices, and concurrent users?",
  },
  {
    id: "errors",
    title: "Error contracts",
    prompt: "Failure modes, messages, retries, and fallbacks — explicit, not implied.",
  },
  {
    id: "security",
    title: "Security & privacy",
    prompt: "PII, auth, logging boundaries — what is never allowed?",
  },
] as const;

export const agentOsFormalChecklist = [
  "All clarification issues resolved (Clarification Gate open items = 0)",
  "Success criteria are measurable — observable, not subjective",
  "Roles and behaviors defined — who can do what",
  "Constraints applied — DO NOT boundaries documented",
  "Shift focus from debugging code to verifying spec intent",
] as const;

export const kiroWorkflowFiles = [
  {
    file: "requirements.md",
    role: "What",
    detail: "Defines what is being built — user outcomes and acceptance criteria (EARS).",
  },
  {
    file: "design.md",
    role: "How",
    detail: "Architecture and approach before implementation — structure agents must follow.",
  },
  {
    file: "tasks.md",
    role: "Steps",
    detail: "Concrete, ordered work the AI executes one task at a time with verification.",
  },
] as const;

export const kiroVsTraditional = [
  {
    label: "Traditional AI coding",
    metaphor: "Chaotic intern",
    detail: "Fast output, messy context, little paper trail — technical debt accumulates in chat.",
  },
  {
    label: "Kiro / high-rigor",
    metaphor: "Seasoned engineer",
    detail: "Plan and durable artifacts first — enforce structure, generate evidence, then code.",
  },
] as const;

export const kiroRigorPoints = [
  {
    title: "Enforcement + evidence",
    detail: "Protocols are enforced; what was built leaves artifacts — not raw dumps without context.",
  },
  {
    title: "EARS requirements",
    detail: "Easy Approach to Requirements Syntax — precise, testable sentences; ambiguity caught early.",
  },
  {
    title: "Transparent paper trail",
    detail: "Right code with traceability — reduces rework and misaligned implementations.",
  },
] as const;

export const mcpConcepts = [
  {
    title: "Diagnostic bridge",
    detail: "Connects models to permitted tools and data for verifiable observation — not guesswork.",
  },
  {
    title: "Bounded autonomy",
    detail: "AI accesses only explicitly allowed MCP servers — no unauthorized actions.",
  },
  {
    title: "JSON-RPC client ↔ host",
    detail: "Standard structured messages between the agent host and tool servers — reliable, auditable calls.",
  },
] as const;

export const mcpDiagnosticToolkit = [
  {
    tool: "Playwright MCP",
    use: "Agent eyes and hands — control a browser, navigate, click, type, re-enact the user journey from the spec; capture on-screen evidence.",
  },
  {
    tool: "Chrome DevTools MCP",
    use: "Performance traces and network logs — turn “the page should be fast” into the exact trace showing which function slows the app (e.g. LCP).",
  },
  {
    tool: "Figma MCP",
    use: "Design source of truth — reference real artifacts instead of guessing padding, color, or layout from chat.",
  },
  {
    tool: "Repo & custom servers",
    use: "Specs, issues, and team-permitted tools through one open protocol — no one-off integrations per vendor.",
  },
] as const;

export const mcpSpeculationVsObservation = {
  speculation:
    "The old way: AI infers from static snippets and pasted logs — plausible patches that fail at runtime or create new bugs.",
  observation:
    "The goal: structured, verifiable evidence from live systems — the agent shows proof instead of guessing.",
} as const;

export const runtimeGateflowSteps = [
  {
    step: 1,
    title: "Select spec",
    tool: "requirements.md / SPEC",
    detail: "Pick a specific requirement to verify — one acceptance criterion or user journey, not the whole backlog.",
  },
  {
    step: 2,
    title: "Reproduce",
    tool: "Playwright MCP",
    detail: "Re-enact the user journey in a real browser — clicks, navigation, and flows from the spec.",
  },
  {
    step: 3,
    title: "Record",
    tool: "Chrome DevTools MCP",
    detail: "Capture traces, network logs, and timing evidence while the journey runs.",
  },
  {
    step: 4,
    title: "Localize",
    tool: "Analysis",
    detail: "Pinpoint root cause — slow functions, failed requests, or UI state that violates the spec.",
  },
  {
    step: 5,
    title: "Map",
    tool: "Traceability",
    detail: "Link evidence to exact code lines and the requirement they satisfy — no orphan fixes.",
  },
  {
    step: 6,
    title: "Propose",
    tool: "Minimal fix",
    detail: "Suggest a targeted change plus verification steps to prove the spec passes — then loop again if needed.",
  },
] as const;

export const mcpGovernanceTiers = [
  {
    tier: "Always do",
    rule: "Record evidence and link it back to the spec — every observation traceable to requirements.md.",
  },
  {
    tier: "Ask first",
    rule: "Before changing live system state outside a safe sandbox, get human confirmation.",
  },
  {
    tier: "Never do",
    rule: "Never access secrets or resources the MCP server was not explicitly permitted to expose.",
  },
] as const;

export const mcpBridgeExamples = [
  { tool: "Repository", role: "Specs, diffs, and project structure" },
  { tool: "Playwright / browser", role: "Frontend journeys and UI verification" },
  { tool: "Runtime / logs", role: "Failures and performance with live context" },
  { tool: "Custom servers", role: "Team-permitted tools only (bounded autonomy)" },
] as const;

/** Lesson 3 — MCP transcript-aligned sections */
export const mcpLessonSections = [
  {
    id: "problem",
    title: "From guesser to evidence-driven partner",
    body: "You ask the AI to fix a bug; the patch looks plausible but fails — or breaks something else. The model is often flying blind: inferring from incomplete static context. MCP moves you from speculation to observation with structured, verifiable runtime evidence.",
  },
  {
    id: "purpose",
    title: "What is MCP?",
    body: "The Model Context Protocol is an open standard — a diagnostic bridge from your AI host (IDE) to external tools and data. Access is controlled and auditable: the AI can see what’s really happening inside your application, not just guess from chat.",
  },
  {
    id: "bounded-autonomy",
    title: "Bounded autonomy",
    body: "The agent is not free to roam your machine. It may only call tools you explicitly declare and permit. That is what makes MCP safe enough for real projects while still powerful.",
  },
  {
    id: "json-rpc",
    title: "Under the hood",
    body: "MCP uses a familiar client–host–server architecture and JSON-RPC — structured, reliable, secure communication between the host and each tool server.",
  },
  {
    id: "evidence-spec",
    title: "Evidence anchored to the spec",
    body: "Every observation ties back to your specification. Debugging improves the spec too — vague or missing requirements show up in the evidence trail, creating a feedback loop that strengthens requirements.md over time.",
  },
  {
    id: "why-open",
    title: "Why a standard protocol matters",
    body: "Without MCP, every team builds custom one-off integrations for each tool. MCP is a common language — a universal plug so the AI ecosystem scales together without reinventing the wheel.",
  },
] as const;

export const section05Takeaways = [
  "AgentOS: /plan product → plan.md, roadmap.md, techstack.md; shape-spec → requirements gate; /create-tasks → atomic tasks.md.",
  "Choose implement tasks (control) or orchestrate tasks (speed) — specialists see only relevant context.",
  "Kiro-class rigor: requirements.md + design.md + tasks.md with EARS and evidence before code.",
  "plan.md, roadmap.md, techstack.md prevent feature drift, priority hallucinations, and stack guessing.",
  "steering.md: persistent memory (stack, standards); requirements.md: the what for one feature on the execution spine.",
  "MCP + Runtime Gateflow: Playwright → DevTools evidence → map to spec → propose verified fix.",
  "High-rigor tooling turns SDD from philosophy into repeatable, auditable practice.",
] as const;

export const section06ModuleMeta = {
  title: "Living Specs & AgentOS",
  lessonCount: 9,
  estimatedMinutes: 44,
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

/** Section 6 · Lesson 2 — Verification gates (agent speed vs safety) */
export const section06Lesson2Sections = [
  {
    id: "intro",
    title: "Speed without the cliff",
    body: "AI agents write code at mind-blowing speed — but velocity without verification can accelerate you toward a cliff. Verification gates harness that speed without sacrificing quality or product safety.",
  },
  {
    id: "agents-dilemma",
    title: "The agent's dilemma",
    body: "The nail-biting trade-off: move at the speed of light vs make sure the thing actually works. Fast code built on a tiny misunderstanding is not a small bug — it accelerates the whole project in the wrong direction.",
  },
  {
    id: "philosophy",
    title: "A philosophy of gates",
    body: "The answer is not to slow the agent down. Build a smarter workflow: a verification gate is a hard stop, not a suggestion. The system cannot move forward until predefined conditions are met — governance as a guarantee from day one, not worry after launch.",
  },
  {
    id: "roles",
    title: "Architect and executor",
    body: "Stop asking the AI to be the genius architect. You set vision, constraints, and validate the blueprint. The AI becomes the perfect executor — incredible speed, always within safe, pre-approved boundaries.",
  },
  {
    id: "upstream",
    title: "Upstream gates (before code)",
    body: "Spec gate locks the what and why — ambiguity here amplifies into flawed architecture and buggy code. Plan gate validates the how: human architects review the technical approach for soundness, compliance, and sensibility before implementation starts.",
  },
  {
    id: "downstream",
    title: "Downstream gates (implementation & runtime)",
    body: "Task gate chops the approved plan into chunks small enough to review in one focused sitting — micro PRs, atomic and traceable. Runtime gate is continuous drift detection: does live behavior match the spec? Not a one-time checkpoint.",
  },
  {
    id: "runtime-rule",
    title: "Spec is source of truth",
    body: "Automated flows follow user journeys from the spec, capture evidence (logs, API responses), and compare to acceptance criteria. If there is a mismatch, you are forbidden from patching code first — update the spec, then align code. The spec leads; code follows.",
  },
  {
    id: "ci",
    title: "Make gates unbreakable",
    body: "Build gates into CI so they are unavoidable. Block merges without traceability to the plan; automate checks so quality is the path of least resistance, not a nice idea from a slide deck.",
  },
  {
    id: "closing",
    title: "Fast and safe",
    body: "Gates are not brakes on AI — they unlock its potential. You get agent speed on your terms. What becomes possible when you can build this fast and this safely?",
  },
] as const;

export const agentsDilemmaTradeoffs = [
  {
    strength: "Speed & scale",
    cost: "Context drift — the agent forgets the original goal on long tasks",
  },
  {
    strength: "Autonomous gap-filling",
    cost: "Silent assumptions — filled-in instructions that are often wrong",
  },
  {
    strength: "Large batch changes",
    cost: "Quality degrades as task size grows — whole projects can derail",
  },
] as const;

export const verificationGatesOverview = [
  {
    id: "spec",
    phase: "Upstream",
    name: "Spec gate",
    purpose: "Lock what & why — testable requirements, zero open clarifications, DO NOT constraints",
  },
  {
    id: "plan",
    phase: "Upstream",
    name: "Plan gate",
    purpose: "Validate how — constitution compliance, simplicity, contracts, local testability",
  },
  {
    id: "task",
    phase: "Downstream",
    name: "Task gate",
    purpose: "Micro changes — atomic, verifiable, traceable to spec and plan",
  },
  {
    id: "runtime",
    phase: "Downstream",
    name: "Runtime gate",
    purpose: "Continuous drift detection — live behavior vs acceptance criteria",
  },
] as const;

/** Spec Gate Checklist — upstream gate before architecture or code (Lesson 2) */
export const specGateChecklist = [
  "All acceptance criteria have verification",
  "All success metrics are measurable",
  "All assumptions are explicit",
  "No [NEEDS CLARIFICATION] markers remain",
  'All "do not" constraints are listed',
] as const;

export const planGateChecklist = [
  "Plan follows project technical rules (constitution.md / team standards)",
  "Approach is simple and direct — no imaginary future-proofing complexity",
  "Contracts with other systems defined up front",
  "Clear instructions for how a developer tests on their own machine",
] as const;

export const taskGateChecklist = [
  "Atomic — one thing only; if you cannot say “correct” in one review sitting, split further",
  "Provable — specific verification (test or command) included",
  "Traceable — direct link to plan and spec (no orphan code)",
] as const;

export const runtimeDriftSteps = [
  "Run automated user flows defined in the spec",
  "Capture evidence — logs, API responses, UI state",
  "Compare outcomes to acceptance criteria",
  "On mismatch: update spec first, then code — never patch code alone",
] as const;

export const ciGateEnforcement = [
  "Block merge when tasks lack traceability links to requirements or plan",
  "Require verification commands to pass before merge",
  "Fail builds when clarification gate or spec checklist items are open",
  "Surface runtime drift alerts back to requirements.md, not silent hotfixes",
] as const;

/** Section 6 · Lesson 3 — Property-based testing (PBT) + EARS → invariants */
export const section06Lesson3Sections = [
  {
    id: "intro",
    title: "Beyond a handful of examples",
    body: "You write five or ten tests — happy path, a few edge cases. But thousands of weird inputs you would never try can still break production. Property-based testing asks: what if tests could stress all valid inputs, not just the ones you thought of?",
  },
  {
    id: "coverage-trap",
    title: "Coverage is not correctness",
    body: "100% coverage and green CI can still ship critical bugs. Coverage only proves a line ran — not that behavior is correct for every input. Example-based testing is spot-checking; you hope the rest holds.",
  },
  {
    id: "property-mindset",
    title: "Properties, not spot checks",
    body: "State a universal rule — a property — that must hold for any valid input. Stop asking “does this work for this input?” and ask “what fundamental rules must never break?” That is core intent, not just implementation detail.",
  },
  {
    id: "counterexample-engine",
    title: "Outsource the hunt for corner cases",
    body: "Define the rule, then unleash a framework that tries to prove you wrong with counterexamples. Empty strings, emoji, control characters, huge payloads, numeric limits — thousands of variations hunting for one failure.",
  },
  {
    id: "ears-bridge",
    title: "EARS → system invariant",
    body: "Easy Approach to Requirements Syntax bridges vague English to testable logic: When some condition, then the system shall do a specific thing. No room for “fast” or “easy to use” — map each requirement to an invariant that is always true.",
  },
  {
    id: "spec-to-property",
    title: "Clear spec → invariant → executable property",
    body: "Start with a precise spec sentence. Derive a system invariant (e.g. for any unauthenticated request, status must be 401). Encode that invariant as an executable property your code must obey.",
  },
  {
    id: "shrinking",
    title: "Shrinking",
    body: "When a counterexample is found — even a huge JSON blob — modern PBT shrinks it to the simplest input that still fails. You go from haystack to needle: order quantity exactly zero, not an accidental complex payload.",
  },
  {
    id: "confidence",
    title: "Prove non-negotiable truths",
    body: "This is not about a few more bugs — it is confidence that the system behaves as designed. Ask: what are your non-negotiable truths? Are you ready to prove them in CI?",
  },
] as const;

export const exampleVsPropertyMindset = {
  example:
    "Example-based: “Does this code work for this specific input I thought of?” — spot-checking; coverage can lie.",
  property:
    "Property-based: “What rules must never break for any valid input?” — a promise the machine tries to falsify.",
} as const;

export const earsToInvariantExamples = [
  {
    ears: "When the request is unauthenticated, the system shall return status 401.",
    invariant: "For any unauthenticated request, the response status must be 401.",
    theme: "Security",
  },
  {
    ears: "When order quantity is submitted, the system shall reject non-positive values.",
    invariant: "For any order payload, quantity must be greater than zero or the request is rejected.",
    theme: "Validation",
  },
  {
    ears: "When cart totals are computed, the system shall never return a negative total.",
    invariant: "For any valid cart state, computed total is greater than or equal to zero.",
    theme: "Business rule",
  },
] as const;

export const pbtCounterExampleExample = {
  rule: "Every order must have quantity greater than zero.",
  finding: "Counterexample: quantity = 0 slips through validation — example-based tests never tried it.",
  shrunk: "Shrinking reduces a messy failing payload to the minimal case: quantity 0.",
} as const;

export const pbtSixStepRecipe = [
  {
    step: 1,
    title: "Write acceptance criteria in EARS",
    detail: "Precise when/then sentences in the spec — no fuzzy adjectives.",
  },
  {
    step: 2,
    title: "Group by theme → invariants",
    detail: "Cluster security, validation, and business rules into core system invariants.",
  },
  {
    step: 3,
    title: "Define generators",
    detail: "Tell the framework how to produce valid random data (API payloads, users, carts).",
  },
  {
    step: 4,
    title: "Write the property in code",
    detail: "Encode invariants with Hypothesis (Python) or FastCheck (JavaScript/TypeScript).",
  },
  {
    step: 5,
    title: "Enable shrinking and replay",
    detail: "Failures shrink to minimal inputs and reproduce reliably for debugging.",
  },
  {
    step: 6,
    title: "Mandatory CI gate",
    detail: "Block merges when properties fail — fundamental truths are non-negotiable.",
  },
] as const;

export const pbtFrameworks = [
  { language: "Python", tool: "Hypothesis", note: "Gold standard for property-based tests in Python ecosystems." },
  { language: "JavaScript / TypeScript", tool: "FastCheck", note: "Property testing for Node and browser test runners." },
] as const;

/** Section 6 · Lesson 4 — Expert AI crew (multi-agent orchestration) */
export const section06Lesson4Sections = [
  {
    id: "lost-assistant",
    title: "When one assistant gets lost",
    body: "A single AI coding assistant starts strong on a big project, then forgets context, mixes logic, or stalls. Mega-prompts with schemas, endpoints, and UI details work briefly — then complexity wins.",
  },
  {
    id: "curse",
    title: "The curse of instructions",
    body: "The more you ask one agent to do in a single prompt, the worse it performs on each part — short-term memory overload. All-in-one prompts are fragile; that is why we split work.",
  },
  {
    id: "assembly-line",
    title: "From tangled mess to assembly line",
    body: "Stop one agent juggling everything. Split into small, focused tasks you can test — a clean pipeline instead of a single confused coder.",
  },
  {
    id: "expert-crew",
    title: "An expert crew, not a super-genius",
    body: "The breakthrough is not waiting for one omniscient model — it is designing delegation and teamwork. Specialists with predictable jobs beat overloaded generalists.",
  },
  {
    id: "construction-metaphor",
    title: "Construction crew metaphor",
    body: "Orchestrator reads the blueprint and coordinates — no bricks, no wires. Database engineer owns schema. API architect owns endpoints. UI designer owns look and feel. QA verifies it all fits.",
  },
  {
    id: "control-panel",
    title: "Central control panel",
    body: "A shared document is the job board — what is todo, done, and next. Tasks name an owner, required imports, strict allowed-file lists, dependencies, and how to verify completion. That keeps chaos out.",
  },
  {
    id: "contracts",
    title: "Contract-first handoffs",
    body: "Bad bugs live at boundaries — UI for an API that changed, API expecting a missing DB field. Database agent publishes a contract file; API builds against it and publishes its contract; UI builds against the API contract. Contracts are truth; code follows.",
  },
  {
    id: "human-gates",
    title: "You as architect and validator",
    body: "You design the plan and sign off at review gates — faster, sharper reviews than line-by-line coding. Catch small mistakes before they become expensive.",
  },
  {
    id: "payoff",
    title: "Why the crew works",
    body: "Reliability rises when each agent has one job — beating the curse of instructions. Parallel tasks scale safely when contracts and gates enforce clean handoffs.",
  },
  {
    id: "closing",
    title: "Lead the crew",
    body: "One: do not overload a single agent. Two: contract-first handoffs. Three: catch errors when they are small. Four: parallel work without train wrecks. The valuable skill may be designing and leading AI construction crews — not only writing code.",
  },
] as const;

export const curseOfInstructions = {
  name: "Curse of instructions",
  definition:
    "As you pack more responsibilities into one prompt, the agent's performance on each degrades — memory overload makes mega-prompts brittle.",
  fix: "Small, testable tasks assigned to specialists with narrow context and explicit file boundaries.",
} as const;

export const expertCrewRoles = [
  {
    role: "Orchestrator",
    focus: "Read blueprint (spec/plan), assign tasks, keep specialists aligned — does not implement features directly.",
  },
  {
    role: "Database engineer",
    focus: "Schema and migrations only — publishes data contracts for downstream agents.",
  },
  {
    role: "API architect",
    focus: "Endpoints and server logic — consumes DB contracts, publishes API contracts.",
  },
  {
    role: "UI designer",
    focus: "Look, feel, and client flows — builds only against published API contracts.",
  },
  {
    role: "QA agent",
    focus: "Verification against acceptance criteria — catches integration failures early.",
  },
] as const;

export const specialistTaskFields = [
  { field: "Owner", detail: "Which specialist agent (or human) owns the task" },
  { field: "Imports / context", detail: "Exactly what spec, contracts, or files they need to start" },
  { field: "Allowed files", detail: "Strict list of paths they may modify — no scope creep" },
  { field: "Dependencies", detail: "Tasks or contracts that must complete first" },
  { field: "Verification", detail: "Commands or checks that prove the task is done" },
] as const;

export const contractFirstHandoff = [
  { step: 1, agent: "Database", output: "Schema contract (fields, types, constraints)" },
  { step: 2, agent: "API", output: "Endpoint contract (routes, payloads, errors)" },
  { step: 3, agent: "UI", output: "Implementation against API contract + visual spec" },
  { step: 4, agent: "QA", output: "Evidence linked to requirements — integration verified" },
] as const;

/** Human review gates A–D (Expert crew · Lesson 4) — orchestration through final audit */
export const humanReviewGatesABCD = [
  {
    gate: "A",
    title: "Orchestration plan review",
    detail: "Are tasks and dependencies correct?",
  },
  {
    gate: "B",
    title: "Per-agent micro-PR review",
    detail: "One task, small diff, clear verification.",
  },
  {
    gate: "C",
    title: "Integration checkpoint",
    detail: "After any parallel batch — reconcile contracts.",
  },
  {
    gate: "D",
    title: "Final verification audit",
    detail: "Every acceptance criterion is satisfied.",
  },
] as const;

export const expertCrewBenefits = [
  "Higher reliability — one simple job per agent beats instruction overload",
  "Safe parallelism — tasks run together when contracts and file boundaries are clear",
  "Fewer boundary bugs — contract-first handoffs at DB → API → UI seams",
  "Faster human review — gates catch issues when they are still cheap to fix",
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
    id: "verification-gates",
    title: "Verification Gates",
    subtitle: "Lesson 2 · Speed without the cliff",
    description:
      "Agent's dilemma, hard-stop gates, spec/plan/task/runtime checkpoints, spec-first drift fixes, and CI that makes quality unavoidable.",
    href: "/course/section-06/verification-gates",
  },
  {
    id: "property-based-testing",
    title: "Property-Based Testing",
    subtitle: "Lesson 3 · Prove the rules",
    description:
      "Beyond examples — EARS to invariants, counter-example engines, shrinking, and a six-step recipe with Hypothesis and FastCheck in CI.",
    href: "/course/section-06/property-based-testing",
  },
  {
    id: "expert-crew",
    title: "Expert AI Crew",
    subtitle: "Lesson 4 · Beat the curse of instructions",
    description:
      "Orchestrator + specialists, shared job board, allowed-file tasks, contract-first DB→API→UI handoffs, and human review gates A–D.",
    href: "/course/section-06/expert-crew",
  },
  {
    id: "persistent-memory",
    title: "Persistent Project Memory",
    subtitle: "Lesson 5 · AgentOS",
    description:
      "AgentOS fixes AI context loss — project memory lives in version-controlled files agents read every time, not in chat history.",
    href: "/course/section-06/persistent-memory",
  },
  {
    id: "memory-files",
    title: "Three Memory Files",
    subtitle: "Lesson 6 · Plan · Roadmap · Techstack",
    description:
      "plan.md prevents feature drift, roadmap.md sets priorities, techstack.md shares stack truth — one knowledge base for humans and AI.",
    href: "/course/section-06/memory-files",
  },
  {
    id: "shape-spec",
    title: "shape-spec",
    subtitle: "Lesson 7 · Dialogue before code",
    description:
      "Structured developer–AI conversation until features are understood; capture outcomes in requirements.md and clear ambiguity.",
    href: "/course/section-06/shape-spec",
  },
  {
    id: "create-tasks",
    title: "/create-tasks",
    subtitle: "Lesson 8 · Atomic checklist",
    description:
      "Decompose features into small, dependency-ordered tasks in tasks.md — a clear checklist linked to requirements.",
    href: "/course/section-06/create-tasks",
  },
  {
    id: "implementation-paths",
    title: "Implementation Paths",
    subtitle: "Lesson 9 · Control vs speed",
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
  "Lesson 2: Verification gates are hard stops — spec, plan, task, runtime; human architect, AI executor within bounds.",
  "Lesson 3: PBT — EARS to invariants, counter-examples and shrinking; six-step recipe; Hypothesis / FastCheck as CI gates.",
  "Lesson 4: Expert crew — curse of instructions, orchestrator + specialists, contract-first handoffs, review gates A–D.",
  "Agent dilemma: speed vs context drift and silent assumptions — gates keep velocity without chaos.",
  "Runtime drift: evidence vs acceptance criteria; mismatch means update spec first, never code-only patches.",
  "Automate gates in CI — traceability and verification as merge blockers, quality as path of least resistance.",
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

export const NORTH_STAR =
  "What does the spec say should happen — not what does the code happen to do.";

export const lineageEras = [
  {
    id: "sdlc",
    era: "1960s–",
    name: "SDLC",
    fullName: "Software Development Life Cycle",
    question: "What process should we follow?",
    color: "from-slate-500 to-slate-600",
    solved: "Chaos. Projects had no repeatable process — deadlines slipped and scope ballooned.",
    inherits: "Phased thinking — understand before you build. The Clarification Gate is SDLC's requirements phase, enforced.",
    artifact: "Process phases",
    executable: false,
    inRepo: false,
  },
  {
    id: "prd",
    era: "1990s–",
    name: "PRD",
    fullName: "Product Requirements Document",
    question: "What should the product do?",
    color: "from-stone-500 to-stone-600",
    solved: 'The "telephone game" between product, design, and engineering.',
    inherits: "Structured intent — problem, users, scope, success criteria — inside version control.",
    artifact: "Product document",
    executable: "partial",
    inRepo: false,
  },
  {
    id: "tdd",
    era: "1990s–",
    name: "TDD",
    fullName: "Test-Driven Development",
    question: "Does the code behave correctly?",
    color: "from-zinc-500 to-zinc-600",
    solved: '"Does the code do what we think?" Tests became executable specifications at the unit level.',
    inherits: "Specs should be executable — SDD extends this from unit tests to tasks, plans, and AI prompts.",
    artifact: "Unit tests",
    executable: true,
    inRepo: true,
  },
  {
    id: "bdd",
    era: "2000s–",
    name: "BDD",
    fullName: "Behavior-Driven Development",
    question: "Does it behave correctly for the user?",
    color: "from-neutral-500 to-neutral-600",
    solved: "TDD's tests were too technical. BDD made specs readable by product owners while automatable.",
    inherits: "User-facing language, acceptance criteria, and scenarios — living in requirements.md.",
    artifact: "Scenario files",
    executable: true,
    inRepo: true,
  },
  {
    id: "sdd",
    era: "2020s–",
    name: "SDD",
    fullName: "Spec-Driven Development",
    question: "Can the spec itself drive AI to build it?",
    color: "from-emerald-600 to-teal-700",
    solved: 'Vibe-coding — prompting AI without specs and accepting whatever code "happens" to emerge.',
    inherits: "Composes SDLC, PRD, TDD, and BDD for the AI era — specs in repo, gate enforced, intent executable.",
    artifact: "requirements.md + shaped specs",
    executable: true,
    inRepo: true,
    highlight: true,
  },
] as const;

export const coreConcepts = [
  {
    id: "shape-spec",
    title: "shape-spec",
    subtitle: "Understand features first",
    description:
      "Structured conversations that clarify requirements before any code is written — no assumptions, no guessing.",
    prevents: [
      "AI filling gaps with guesses",
      "Lost context from unstructured chat",
      "Rework from misunderstood intent",
    ],
    produces: [
      "Documented developer insights and decisions",
      "Shared understanding among stakeholders",
      "A spec ready for the Clarification Gate",
    ],
    href: "/course/section-01/shape-spec",
  },
  {
    id: "clarification-gate",
    title: "Clarification Gate",
    subtitle: "Zero ambiguity before code",
    description:
      "A hard rule: zero unresolved items in requirements.md before moving forward. Open items are stop signs.",
    prevents: ["Building the wrong thing fast", "Ambiguity carried into implementation"],
    produces: ["Clear, implementable requirements", "Confidence to proceed"],
    href: "/requirements",
  },
  {
    id: "version-controlled",
    title: "Version-Controlled Specs",
    subtitle: "Specs live in the repo",
    description:
      "requirements.md is a living document inside the repository — version-controlled like any other code file.",
    prevents: ["Specs drifting from code", "Lost intent in chat logs"],
    produces: ["Auditable spec history", "AI-readable system of record"],
    href: "/requirements",
  },
  {
    id: "executable-intent",
    title: "Executable Intent",
    subtitle: "Specs that drive action",
    description:
      "Specifications thorough enough to generate task lists, project plans, and AI prompts automatically.",
    prevents: ["Specs that are wishes, not plans", "Manual translation of intent"],
    produces: ["Auto-generated tasks", "Executable AI prompts"],
    href: "/workflow",
  },
  {
    id: "user-stories",
    title: "User Stories & Success Criteria",
    subtitle: "Goals over implementation",
    description:
      "User stories focus on outcomes, not technology. Success criteria define done objectively.",
    prevents: ["Implementation details in requirements", "Subjective 'looks good' completion"],
    produces: ["Goal-focused stories", "Checkbox-driven acceptance"],
    href: "/templates",
  },
] as const;

export const developmentStages = [
  {
    id: "specification",
    stage: 1,
    name: "Specification",
    question: "What must be built?",
    artifact: "requirements.md · shaped spec",
    description:
      "Capture intent before any implementation. Use shape-spec to clarify requirements, write user stories, define acceptance criteria, and resolve all open items through the Clarification Gate.",
    outputs: [
      "User stories with success criteria",
      "Acceptance criteria and data contracts",
      "Zero open items (Clarification Gate passed)",
    ],
    antiPattern: "Skipping straight to prompts — vibe-coding without a spec",
  },
  {
    id: "plan",
    stage: 2,
    name: "Plan",
    question: "How will we build it?",
    artifact: "Project plan · architecture notes",
    description:
      "Translate the approved spec into a structured plan. Define milestones, dependencies, technical approach, and the order of work — still without writing feature code.",
    outputs: [
      "Milestones and sequencing",
      "Dependencies and risks identified",
      "Technical approach aligned to spec",
    ],
    antiPattern: "Planning in your head or in chat — not version-controlled",
  },
  {
    id: "tasks",
    stage: 3,
    name: "Tasks",
    question: "What are the concrete steps?",
    artifact: "Task list · AI prompts",
    description:
      "Break the plan into small, actionable, ordered tasks. Each task should trace back to a user story or acceptance criterion — executable enough for AI or a developer to pick up and run.",
    outputs: [
      "Ordered, checkbox-ready task list",
      "AI prompts derived from spec (not guesses)",
      "Each task maps to acceptance criteria",
    ],
    antiPattern: "Vague tasks like 'build the feature' with no spec link",
  },
  {
    id: "code",
    stage: 4,
    name: "Code",
    question: "Build it — does it match the spec?",
    artifact: "Source code in repo",
    description:
      "Implement against the spec and tasks — not against vibes. Code is the output of clear intent, not the source of truth. When code and spec diverge, fix the code.",
    outputs: [
      "Implementation committed to version control",
      "Each change traceable to a task and story",
      "No undocumented behaviour",
    ],
    antiPattern: "Accepting whatever AI generates and retro-fitting the spec",
  },
  {
    id: "verify",
    stage: 5,
    name: "Verify",
    question: "Does it match what the spec says should happen?",
    artifact: "Tests · acceptance checks",
    description:
      "Validate against the spec — not against what the code happens to do. Run acceptance criteria, behaviour checks, and review open items are still resolved.",
    outputs: [
      "All acceptance criteria checked",
      "Behaviour matches spec intent",
      "Feature marked complete only when criteria pass",
    ],
    antiPattern: "'Looks good to me' without running criteria",
  },
] as const;

export const workflowSteps = [
  { id: "idea", label: "Feature idea", description: "A need emerges" },
  { id: "shape", label: "shape-spec", description: "Structured conversation — clarify, don't assume" },
  { id: "requirements", label: "requirements.md", description: "Living doc — stories, criteria, open items" },
  { id: "gate", label: "Clarification Gate", description: "Open items = 0?" },
  { id: "implement", label: "Generate & implement", description: "Tasks, plans, prompts, code" },
] as const;

export const keyTerms = [
  { term: "SDLC", definition: "Software Development Life Cycle — phased process from requirements to maintenance" },
  { term: "PRD", definition: "Product Requirements Document — structured description of what to build and why" },
  { term: "TDD", definition: "Test-Driven Development — write failing tests first, then code to pass them" },
  { term: "BDD", definition: "Behavior-Driven Development — given/when/then scenarios as executable specs" },
  { term: "SDD", definition: "Spec-Driven Development — version-controlled, executable specs for AI and humans" },
  { term: "Vibe-coding", definition: "Prompting AI without structured specs; outcomes depend on luck" },
  { term: "AI Engineering", definition: "Directing AI with clear, executable specifications for predictable results" },
  { term: "shape-spec", definition: "Structured conversation process to clarify feature requirements" },
  { term: "Clarification Gate", definition: "Blocker requiring zero open items before implementation" },
  { term: "Executable intent", definition: "Specs detailed enough to auto-generate tasks, plans, and prompts" },
  { term: "Living document", definition: "A spec that evolves with the project, tracked in version control" },
  { term: "Development stages", definition: "Specification → Plan → Tasks → Code → Verify — the ordered pipeline from intent to verified software" },
] as const;

export const practicalTakeaways = [
  "Spec over code. Ask what the spec says should happen — not what the code happens to do.",
  "SDD stands on shoulders. SDLC, PRDs, TDD, and BDD each solved part of the problem — SDD composes them for the AI era.",
  "Never skip shaping. A 15-minute spec conversation saves hours of rework.",
  "Specs live in the repo. If it is not in git, it does not exist.",
  "Open items are stop signs. Resolve them before coding.",
  "Write for execution. If AI cannot generate a task from your spec, rewrite it.",
  "Stories describe goals. Let implementation emerge from clear intent.",
  "Follow the stages. Specification → Plan → Tasks → Code → Verify — never skip ahead.",
] as const;

export const openItems = [
  {
    id: "OI-001",
    question: "Platform format: documentation-only repo, or evolve into a web app (React + Supabase)?",
    status: "resolved" as const,
    resolution: "Evolved into this Next.js showcase app — docs + interactive learning UI.",
  },
  {
    id: "OI-002",
    question: "PRD vs sections: formal PRD per section, or section README sufficient?",
    status: "open" as const,
  },
  {
    id: "OI-003",
    question: "shape-spec workflow: specific CLI/tool, or manual conversation checklist?",
    status: "open" as const,
  },
] as const;

export const userStories = [
  {
    id: "US-001",
    title: "Store course learnings by section",
    role: "learner progressing through the SDD course",
    want: "each section's concepts, workflows, and examples stored in a structured, searchable format",
    soThat: "I can revisit foundations without relying on chat history or scattered notes",
    criteria: [
      "Each completed section has a dedicated folder under docs/course/",
      "Each section includes concepts, key terms, and practical takeaways",
      "Section index stays current",
    ],
    done: [true, true, true],
  },
  {
    id: "US-002",
    title: "Maintain a living requirements document",
    role: "spec-driven developer",
    want: "project requirements version-controlled alongside code",
    soThat: "intent is always traceable and the Clarification Gate can be enforced",
    criteria: [
      "requirements.md exists at repository root",
      "Open items tracked with status tags",
      "Zero open items before feature implementation",
    ],
    done: [true, true, false],
  },
  {
    id: "US-003",
    title: "Use executable specifications",
    role: "developer working with AI",
    want: "specifications detailed enough to generate tasks, plans, and prompts",
    soThat: "AI assistants execute intent instead of guessing",
    criteria: [
      "User journeys documented for core flows",
      "Acceptance criteria defined per feature",
      "Data contracts specified where applicable",
      "Templates available for reuse",
    ],
    done: [true, true, false, true],
  },
] as const;

export const courseSections = [
  {
    id: "section-01",
    number: 1,
    slug: "section-01",
    title: "Foundations",
    subtitle: "From Vibe-Coding to Structured Specs",
    status: "complete" as const,
    description:
      "The mindset shift from vibe-coding to AI engineering — shape-spec, Clarification Gate, executable intent, and the historical lineage from SDLC to SDD.",
  },
  {
    id: "section-02",
    number: 2,
    slug: "section-02",
    title: "Task Implementation",
    subtitle: "Specification Plan — From Spec to Tasks",
    status: "complete" as const,
    description:
      "Translate clarified specs into actionable tasks — /create-tasks, atomic decomposition, tasks.md structure with dependencies, requirement links, and verification steps.",
  },
  {
    id: "section-03",
    number: 3,
    slug: "section-03",
    title: "Code Implementation",
    subtitle: "From Tasks to Verified Code",
    status: "complete" as const,
    description:
      "Execute tasks in dependency order via /implement — spec-aligned code, per-task verification, and feature sign-off against acceptance criteria.",
  },
  {
    id: "section-04",
    number: 4,
    slug: "section-04",
    title: "AI Understanding",
    subtitle: "Clarity Before Code",
    status: "complete" as const,
    description:
      "shape-spec, Clarification Gate, constitution.md, living documentation with exact commands, and Tier Two approval gates — ensuring AI understands before coding.",
  },
  {
    id: "section-05",
    number: 5,
    slug: "section-05",
    title: "Tooling & Ecosystem",
    subtitle: "Module 5 — Agent OS, Kiro, MCP",
    status: "complete" as const,
    description:
      "Agent OS for the feature lifecycle, Amazon Kiro as a high-rigor agentic IDE, and MCP as the runtime diagnostic bridge to your stack.",
  },
  {
    id: "section-06",
    number: 6,
    slug: "section-06",
    title: "AgentOS",
    subtitle: "Persistent Project Memory",
    status: "complete" as const,
    description:
      "plan.md, roadmap.md, techstack.md — shape-spec, /create-tasks, and implement or orchestrate paths for faster, consistent AI-assisted development.",
  },
] as const;

export const shapeSpecPhases = [
  {
    phase: 1,
    title: "Frame the Feature",
    items: [
      "What problem does this solve? (user pain, not technical solution)",
      "Who is the user? (specific role, not 'everyone')",
      "What does success look like? (measurable outcome)",
      "What is explicitly out of scope?",
    ],
  },
  {
    phase: 2,
    title: "Map the Journey",
    items: [
      "Trigger — What causes the user to need this?",
      "Steps — What do they do, in order?",
      "Decision points — Where might paths branch?",
      "End state — What changed when done?",
    ],
  },
  {
    phase: 3,
    title: "Define Contracts",
    items: [
      "Inputs — What data enters the system?",
      "Outputs — What must be produced?",
      "Acceptance criteria — How do we know it works?",
      "Edge cases — What happens when things go wrong?",
    ],
  },
  {
    phase: 4,
    title: "Capture Open Items",
    items: [
      "List anything still unclear with [OPEN] status",
      "Do not proceed until all items are [RESOLVED]",
      "Log items in requirements.md Clarification Gate table",
    ],
  },
] as const;

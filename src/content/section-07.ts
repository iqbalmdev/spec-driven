export const section07ModuleMeta = {
  title: "Advanced SDD Use Cases",
  lessonCount: 3,
  estimatedMinutes: 42,
} as const;

/** Section 7 · Lesson 1 — Spec-first debugging / evidence-driven diagnostics */
export const section07Lesson1Sections = [
  {
    id: "intro",
    title: "Stop guessing — debug like a detective",
    body: "Runtime errors that vanish when you look, random performance tips that make no sense — bugs feel like unsolved mysteries. Replace “I think the problem might be here” with a repeatable procedure backed by cold, hard evidence.",
  },
  {
    id: "shift",
    title: "Guesswork vs evidence",
    body: "The old way: gut feelings, chaos, bugs you cannot reproduce. The new way: systematic, repeatable diagnostics — the difference between “I think” and “I know, and here is the proof.”",
  },
  {
    id: "case-file",
    title: "The case file is the spec",
    body: "Before code or logs, open requirements.md — the single source of truth for what should have happened. You cannot know something went wrong until “right” is defined without ambiguity.",
  },
  {
    id: "clues",
    title: "Clues in a good spec",
    body: "Concrete, measurable facts: exact user journeys, hard performance budgets (e.g. LCP under 2.5 seconds), and acceptance criteria you can observe in a live system — not vague ideas.",
  },
  {
    id: "team",
    title: "Detective + forensics kit",
    body: "Lead investigator: an AI agent working through MCP — clearance to observe the live system, not guess from static code. Playwright reenacts the user journey from the spec. Chrome DevTools is the lab — traces, main-thread blockers, runtime evidence.",
  },
  {
    id: "runbook",
    title: "Six-step runbook",
    body: "A standard playbook so every investigation is thorough: review spec → reenact with Playwright → capture DevTools trace → analyze root cause → map findings to the spec → update the spec with what you learned.",
  },
  {
    id: "feedback",
    title: "Bugs make the system smarter",
    body: "Incident → investigate → fix → update the spec with stricter budgets or new rules → automated checks prevent that class of bug from returning. Compounding value — not just patching holes.",
  },
  {
    id: "closing",
    title: "Opportunities, not failures",
    body: "Every bug can permanently strengthen the system against a whole category of issues. What if each fix made your application smarter and more resilient?",
  },
] as const;

export const guessworkVsEvidence = {
  guesswork: "Chaotic debugging — reproduce-if-you’re-lucky, opinions, static code reading without live proof.",
  evidence: "Spec-first, MCP-observed, trace-backed — repeatable runs that build an undeniable case.",
} as const;

export const specDiagnosticClues = [
  "Documented user journeys — steps the agent must reenact in Playwright",
  "Performance budgets — e.g. Largest Contentful Paint (LCP) under 2.5s",
  "Observable acceptance criteria — what “correct” looks like in production-like conditions",
] as const;

export const debuggingForensicsKit = [
  {
    tool: "MCP",
    role: "Agent badge",
    detail: "Secure protocol — bounded clearance to observe the live system, not infer from snippets.",
  },
  {
    tool: "Playwright MCP",
    role: "Scene reenactment",
    detail: "Replay the spec’s user journey on command until the bug appears reliably.",
  },
  {
    tool: "Chrome DevTools MCP",
    role: "Forensics lab",
    detail: "Performance traces, main-thread long tasks, forced reflow flags — evidence for the case file.",
  },
] as const;

/** Six-step spec-first debugging runbook (Lesson 1 transcript) */
export const specFirstDebugRunbook = [
  { step: 1, title: "Review the case file", action: "Read the spec — budgets, journeys, acceptance criteria" },
  { step: 2, title: "Reenact the scene", action: "Playwright MCP — reproduce the user journey from the spec" },
  { step: 3, title: "Gather forensics", action: "Chrome DevTools MCP — capture performance trace while journey runs" },
  { step: 4, title: "Analyze clues", action: "Find root cause in the trace (long tasks, reflow, failed requests)" },
  { step: 5, title: "Build the case", action: "Link evidence to what the spec said should happen" },
  { step: 6, title: "Update the record", action: "Revise requirements.md — tighter budgets, new rules, learned constraints" },
] as const;

export const debugCaseStudies = [
  {
    id: "lcp",
    title: "Case 1 — LCP regression",
    symptom: "Key page feels slow; users notice; violates the performance budget in the spec.",
    specFact: "LCP must be under 2.5 seconds.",
    evidence: "DevTools trace shows LCP at 4.1 seconds — clear violation.",
    rootCause: "Long task blocking the main thread — inefficient script prevents timely render.",
    outcome: "Case closed with proof — no guesswork.",
  },
  {
    id: "jank",
    title: "Case 2 — Janky animation",
    symptom: "Animation should be smooth but stutters and hesitates.",
    specFact: "Smooth motion per acceptance criteria — no layout thrashing.",
    evidence: "Performance panel shows purple forced-reflow markers; trace shows a loop mutating style then reading height repeatedly.",
    rootCause: "Classic layout thrashing — read/write layout in a tight loop.",
    outcome: "Smoking gun in the trace — case closed.",
  },
] as const;

export const specDebugFeedbackLoop = [
  "Incident observed against spec expectations",
  "Agent runs spec-first runbook with MCP + Playwright + DevTools",
  "Fix applied with traceability to requirements",
  "Spec updated — stricter budget or new invariant",
  "CI and agents enforce the updated spec — class of bug prevented",
] as const;

/** Section 7 · Lesson 3 — Legacy modernization / intent decay / strangler fig */
export const section07Lesson3Sections = [
  {
    id: "scare",
    title: "The system nobody wants to touch",
    body: "Every company has one: a huge, critical piece of software that everyone is terrified to change — and everyone knows must be replaced. Months or years and millions of dollars later, the rewrite is often just as buggy and confusing as the original, only written in a shinier language.",
  },
  {
    id: "trap",
    title: "The modernization trap",
    body: "Teams walk into it with the best intentions. They pour energy into the how — the code — without ever getting a real grip on the what, and most importantly the why, of the original system. That is the trap: replacing syntax while losing purpose.",
  },
  {
    id: "villain",
    title: "Intent decay",
    body: "The original purpose of the software evaporates slowly. Developers leave, documentation goes stale, and eventually nobody knows why that weird line of code exists. When the why is gone, all you have is the code — and you are stuck maintaining by patching.",
  },
  {
    id: "patching",
    title: "Duct tape instead of design",
    body: "A quick fix here, a workaround there. Nobody dares a fundamental improvement because some secret, critical business rule is buried in the tangle. Technical debt keeps piling up because the system cannot be understood, only nursed.",
  },
  {
    id: "ai-illusion",
    title: "The AI rewrite illusion",
    body: "An AI can read old code and spit out new code. Without recovered intent it creates a convincing illusion: it looks right, it passes a few demos, and it falls apart the moment real-world complexity hits production. The trap is the same — code without why.",
  },
  {
    id: "flip",
    title: "Flip the source of truth",
    body: "The old way treats code as the system of record — so you inherit every bug, workaround, and accidental complexity, and you are forced into a high-risk big-bang rewrite. Spec-driven development flips that. The written-down intent becomes the system of record. You start from a clean slate and replace the old system piece by piece.",
  },
  {
    id: "dig",
    title: "Phase one is archaeology, not code",
    body: "The first phase of an SDD modernization writes no new product code. You become a detective: recover what the system is actually supposed to be doing. Map today’s behaviour — the good, the bad, and the ugly. Lock it with characterization tests. Then translate what you discovered into a structured spec.md.",
  },
  {
    id: "spec-gold",
    title: "A spec the old system never had",
    body: "Invariants in a clear when/then form. Scenarios: happy path, weird edge cases, error handling. And a do-not list — explicit defence against scope creep: do not change this business rule, do not add that new feature. Structure like that is gold for humans and for AI agents.",
  },
  {
    id: "strangler",
    title: "Strangle, don’t blow up",
    body: "The Strangler Fig Pattern builds new services around the old system. Traffic and features move over incrementally until the legacy core is surrounded — then you turn it off. Safe, incremental, and far less risk than a big-bang cutover.",
  },
  {
    id: "agents",
    title: "Agents as assistants, not magicians",
    body: "Once the spec exists, agents become super-powered helpers: draft the first spec from old code, generate an architectural plan and data contracts, break the plan into pull-request-sized tasks, and implement those tasks with the spec and contracts as guardrails.",
  },
  {
    id: "evidence",
    title: "Done means conformance",
    body: "In the old world the sigh of relief came when the new system compiled. In SDD, compiling is the beginning. The project is done when you have proven — contract tests, golden tests, production-traffic replay — that behaviour matches the spec. The goal is not completion. It is conformance.",
  },
  {
    id: "closing",
    title: "A dataset, not a mountain of debt",
    body: "That terrifying legacy system is also a rich dataset of proven, battle-tested business logic. Recover its intent, write it down, and you can build its future without inheriting its accidents.",
  },
] as const;

export const modernizationTrap = {
  trap: "Focus all energy on the how — the code — without recovering the what and why of the original system.",
  result: "A shiny rewrite that still carries every bug, workaround, and secret rule you never understood.",
} as const;

export const intentDecayStages = [
  {
    stage: "Origin",
    detail: "The weird line of code exists for a reason — a business rule, a lawsuit, a customer exception.",
  },
  {
    stage: "People leave",
    detail: "Original developers move on. The oral history of why the system works this way leaves with them.",
  },
  {
    stage: "Docs go stale",
    detail: "Wikis and comments stop matching production. The only remaining “spec” is the running code.",
  },
  {
    stage: "Patch culture",
    detail: "Nobody dares a real change. Fixes are duct tape. Debt piles up because intent cannot be verified.",
  },
] as const;

export const codeVsSpecTruth = {
  code: "Code as source of truth — you inherit bugs, workarounds, and accidental complexity, then attempt a high-risk big-bang rewrite.",
  spec: "Spec as system of record — recovered intent on a clean slate, replaced incrementally with characterization tests as a straitjacket.",
} as const;

export const intentArchaeologySteps = [
  {
    step: 1,
    title: "Map what it does today",
    detail: "The good, the bad, and the ugly — observed behaviour, not hoped-for design.",
  },
  {
    step: 2,
    title: "Write characterization tests",
    detail: "A digital straitjacket that locks current behaviour so you do not break something important by accident.",
  },
  {
    step: 3,
    title: "Translate into spec.md",
    detail: "Structured intent: invariants, scenarios, and a do-not list — the why, written down.",
  },
] as const;

export const legacySpecContents = [
  {
    part: "Invariants",
    detail: "When this happens, the system shall do that — no fuzzy adjectives, no tribal knowledge.",
  },
  {
    part: "Scenarios",
    detail: "Happy path, weird edge cases, and how errors are handled — the behaviour you actually found.",
  },
  {
    part: "Do-not list",
    detail: "Defence against scope creep: do not change this business rule; do not add that new feature during the cutover.",
  },
] as const;

export const stranglerFigSteps = [
  {
    step: 1,
    title: "Surround",
    detail: "Build new services around the legacy core instead of detonating it.",
  },
  {
    step: 2,
    title: "Reroute",
    detail: "Move traffic and features to the new pieces, one slice at a time.",
  },
  {
    step: 3,
    title: "Strangle",
    detail: "The old system is fully surrounded — no remaining critical path through it.",
  },
  {
    step: 4,
    title: "Turn off",
    detail: "Decommission the legacy core once equivalence is proven against the spec.",
  },
] as const;

export const modernizationAgentPipeline = [
  {
    step: 1,
    agent: "Draft spec",
    output: "Read old code to propose the first spec.md — humans recover and freeze intent.",
  },
  {
    step: 2,
    agent: "Plan & contracts",
    output: "Turn the finished spec into an architectural plan and data contracts.",
  },
  {
    step: 3,
    agent: "Task the work",
    output: "Break the plan into pull-request-sized, independently verifiable tasks.",
  },
  {
    step: 4,
    agent: "Implement with guardrails",
    output: "Build each task against the spec and contracts — not against a demo script.",
  },
] as const;

export const modernizationCaseStudies = [
  {
    org: "Airbnb",
    claim: "About 18 months estimated → 6 weeks",
    detail:
      "A large migration internally estimated at roughly a year and a half was completed in six weeks with a structured, spec-like workflow plus LLMs — not a small speed-up, a different class of result.",
  },
  {
    org: "Google",
    claim: "About 50% less time",
    detail:
      "Large-scale migrations reported around a 50% reduction versus the previous manual approach, driven by the same focus on structure and validation.",
  },
] as const;

export const conformanceValidation = [
  {
    tool: "Contract tests",
    detail: "Prove the new API matches the plan — not a nearby-looking shape.",
  },
  {
    tool: "Golden tests",
    detail: "Check critical outputs against data you already know is good.",
  },
  {
    tool: "Traffic replay",
    detail: "Replay real production traffic against old and new systems and compare side by side.",
  },
] as const;

export const compileVsConformance = {
  compile: "The new system finally compiles without errors.",
  conform: "Proven equivalence to the spec — compiling is only the beginning.",
} as const;

/** Section 7 · Lesson 4 — Compile the product / multi-target generation */
export const section07Lesson4Sections = [
  {
    id: "pain",
    title: "The same product, many times over",
    body: "Multiple versions of one product — different platforms, different performance tiers — start as identical twins and quietly become strangers. A bug fix lands in one. A feature is forgotten in the other. That drift is a one-way ticket to a maintenance nightmare.",
  },
  {
    id: "twins",
    title: "Go and Rust were twins — for a week",
    body: "A Go service gets a high-performance twin in Rust. For a week they match. Then the codebases diverge: unique bugs, unique features, two products that only look similar on the surface. Double the work, double the mental overhead, double the chance of catastrophe.",
  },
  {
    id: "shift",
    title: "Stop rewriting. Start compiling the product.",
    body: "The mental model changes: you are not maintaining two codebases. You are compiling one product for different targets. In spec-driven development the specification is the asset. Code is a temporary artifact emitted from that source of truth. Update the spec; regenerate everything.",
  },
  {
    id: "compiler",
    title: "Spec in, artifacts out",
    body: "One authoritative spec feeds a generation layer that acts like a compiler. Out the other end: a Go service, a Rust service, a Flutter UI — implementations that are guaranteed to behave identically from a functional point of view. You compile the product, not just the code.",
  },
  {
    id: "llvm",
    title: "The LLVM analogy",
    body: "LLVM uses a common intermediate representation to generate machine code for many CPUs. In SDD the spec is that IR, and the targets are platforms or languages. Same idea, scaled to the product.",
  },
  {
    id: "invariants",
    title: "What must never change",
    body: "The whole scheme falls apart without discipline about what can differ and what cannot. Three pillars: functional invariants (core behaviour), contract invariants (how the system talks to the world), and quality invariants (performance and reliability that every variant must meet — no exceptions).",
  },
  {
    id: "four-steps",
    title: "Four steps to identical twins",
    body: "Write a spec with no language-specific details — pure intent. Freeze the API contract, for example with OpenAPI. Create separate, comparable implementation plans for each target. Benchmark both with the same controlled harness so you are comparing apples to apples.",
  },
  {
    id: "plans",
    title: "The what is identical. Only the how differs.",
    body: "Plan A for Go might use a standard HTTP library and goroutines. Plan B for Rust might use a different web framework and an async runtime. Libraries and runtimes are free to change. The functional spec and the API contract are not.",
  },
  {
    id: "ui",
    title: "The same split for interfaces",
    body: "Be ruthless: core flows, validation, and accessibility are functional — they cannot change. Layout, colour, and styling are aesthetic — they can vary as themes or skins on the same behaviour. Pull tokens and component structure from a design source of truth such as the Figma API so variants follow intended design, not someone’s interpretation.",
  },
  {
    id: "determinism",
    title: "Determinism is engineered, not wished",
    body: "Reliable, repeatable, predictable results do not appear by hoping. You build them: stable inputs (versioned spec, pinned dependencies), stable pipelines (repeatable generation steps), stable outputs (every artifact traceable to the exact spec version that created it).",
  },
  {
    id: "one",
    title: "The number is one",
    body: "In a true spec-driven system there is one source of truth — not two drifting codebases, not a spec plus some code. Just one. That is how you eliminate the chaos. If the spec is the most valuable asset, the code you spend so much energy writing is an emitted artifact — regenerated, not patched in parallel.",
  },
] as const;

export const codebaseDrift = {
  start: "A Go service and a high-performance Rust twin — identical for a week.",
  end: "Two distinct products: unique bugs, unique features, double the maintenance, and twice the chance something goes wrong.",
} as const;

export const specAsCompiler = [
  { stage: "Spec", role: "Source of truth", detail: "Pure intent — language-agnostic, versioned, the real source code of the product." },
  { stage: "Generation", role: "Compiler", detail: "A repeatable pipeline that emits implementations from the spec, the way a compiler emits machine code from IR." },
  { stage: "Artifacts", role: "Targets", detail: "Go service, Rust service, Flutter UI — different how, identical functional behaviour." },
] as const;

export const llvmAnalogy = {
  llvm: "LLVM IR is the common intermediate form; backends emit machine code for many CPUs.",
  sdd: "The spec is the IR of the product; generation backends emit Go, Rust, Flutter, and other targets.",
} as const;

export const multiTargetInvariants = [
  {
    pillar: "Functional",
    detail: "Core behaviour that every variant must share — critical user journeys and exact error handling.",
  },
  {
    pillar: "Contract",
    detail: "How the system talks to the outside world — API shape, fields, and status codes, frozen in OpenAPI.",
  },
  {
    pillar: "Quality",
    detail: "Performance and reliability every generated variant must hit — for example a P95 latency budget. No exceptions.",
  },
] as const;

export const multiTargetFourSteps = [
  { step: 1, title: "Write pure intent", detail: "A spec with no language-specific details — behaviour, not libraries." },
  { step: 2, title: "Freeze the contract", detail: "Lock the API solid with OpenAPI so every target speaks the same shape." },
  { step: 3, title: "Plan each target", detail: "Separate, comparable implementation plans — different stacks, same spec and contract." },
  { step: 4, title: "Benchmark together", detail: "The same controlled harness for every variant so you compare apples to apples." },
] as const;

export const goVsRustPlans = [
  {
    plan: "Plan A — Go",
    stack: "Standard HTTP library and goroutines",
    note: "A familiar, concurrent service that still must satisfy the frozen contract and quality budget.",
  },
  {
    plan: "Plan B — Rust",
    stack: "A different web framework and an async runtime",
    note: "A high-performance twin. Technologies change; functional spec and API contract do not.",
  },
] as const;

export const productCompileTargets = [
  {
    id: "go",
    label: "Go",
    role: "Service backend",
    stack: "Standard HTTP library and goroutines",
    detail: "A familiar concurrent service. Different how — same functional spec, OpenAPI contract, and P95 budget.",
  },
  {
    id: "rust",
    label: "Rust",
    role: "High-performance twin",
    stack: "Web framework and async runtime",
    detail: "Built for the performance tier. Technologies change; behaviour and contract do not.",
  },
  {
    id: "flutter",
    label: "Flutter",
    role: "UI skin",
    stack: "Figma tokens and widget structure",
    detail: "Aesthetic layer on the same flows, validation, and accessibility. Design comes from the source of truth, not a screenshot.",
  },
] as const;

export const specIrNode = {
  id: "spec",
  label: "SPEC",
  role: "Intermediate representation",
  stack: "Language-agnostic intent — versioned, the real source code of the product",
  detail: "One spec in. Many artifacts out. Click a target to compile it from this core.",
} as const;

export const uiFunctionalVsAesthetic = {
  functional: "Core user flows, validation rules, accessibility — behaviour that cannot change between skins.",
  aesthetic: "Layout, colour palette, styling — free to vary as themes on the same core behaviour.",
} as const;

export const determinismPillars = [
  { pillar: "Stable inputs", detail: "Versioned spec. Pinned dependencies. No exceptions." },
  { pillar: "Stable pipelines", detail: "Generation steps that are repeatable and consistent every run." },
  { pillar: "Stable outputs", detail: "Every artifact traceable to the exact spec version that created it." },
] as const;

export const section07Topics = [
  {
    id: "spec-first-debugging",
    lesson: 1,
    title: "Spec-First Debugging",
    subtitle: "Lesson 1 · Evidence, not guesswork",
    description:
      "Treat the spec as the case file — MCP detective, Playwright reenactment, DevTools forensics, six-step runbook, LCP and jank case studies, spec feedback loop.",
    href: "/course/section-07/spec-first-debugging",
  },
  {
    id: "legacy-modernization",
    lesson: 3,
    title: "Legacy Modernization",
    subtitle: "Lesson 3 · Recover intent, then replace",
    description:
      "Intent decay, the modernization trap, characterization tests, spec.md, the Strangler Fig Pattern, AI-assisted rebuilds, and done as conformance — not compile.",
    href: "/course/section-07/legacy-modernization",
  },
  {
    id: "product-compilation",
    lesson: 4,
    title: "Compile the Product",
    subtitle: "Lesson 4 · One spec, many targets",
    description:
      "Treat divergence as a compiler problem: spec as IR, Go and Rust as backends, frozen contracts, functional vs aesthetic UI, Figma as design truth, engineered determinism.",
    href: "/course/section-07/product-compilation",
  },
] as const;

export const section07Takeaways = [
  "Lesson 1: Debug from the spec first — measurable journeys, budgets, and acceptance criteria before touching code.",
  "Lesson 3: Do not rewrite the how until you have recovered the why — intent decay is the real villain.",
  "Lesson 4: Stop patching twin codebases. Compile one spec to many targets.",
  "Functional, contract, and quality invariants cannot change between variants — only the how can.",
  "Determinism is engineered: versioned spec, pinned dependencies, repeatable pipelines, traceable artifacts.",
] as const;

import { agentOsLifecycle, runtimeGateflowSteps } from "@/content/section-05";
import { kiroSpecWorkflowOrder } from "@/content/section-05-spec-files";
import {
  humanReviewGatesABCD,
  pbtSixStepRecipe,
  verificationGatesOverview,
} from "@/content/section-06";
import { multiTargetFourSteps, specFirstDebugRunbook, stranglerFigSteps } from "@/content/section-07";

export interface QuizQuestion {
  readonly id: string;
  readonly prompt: string;
  readonly options: readonly string[];
  readonly correctIndex: number;
  readonly explanation: string;
}

export interface OrderingExercise {
  readonly prompt: string;
  readonly steps: readonly string[];
}

export interface Flashcard {
  readonly term: string;
  readonly definition: string;
}

export interface LessonPracticeSet {
  readonly id: string;
  readonly sectionNumber: number;
  readonly title: string;
  readonly href: string;
  readonly quiz: readonly QuizQuestion[];
  readonly ordering: OrderingExercise;
  readonly flashcards: readonly Flashcard[];
}

export const REVIEW_QUESTION_COUNT = 5;

export const learningMethods = [
  {
    id: "retrieval",
    title: "Knowledge checks",
    detail: "Recalling an answer strengthens memory far more than rereading. Each question explains why — right or wrong.",
  },
  {
    id: "ordering",
    title: "Order the steps",
    detail: "Rebuild a workflow from shuffled steps to internalise sequence, not just vocabulary.",
  },
  {
    id: "flashcards",
    title: "Flashcards",
    detail: "Cards you miss return to the end of the deck until you know them.",
  },
  {
    id: "interleaving",
    title: "Mixed review",
    detail: "Questions drawn across lessons — spacing and mixing topics builds durable recall.",
  },
] as const;

export const lessonPracticeSets = [
  {
    id: "section-05/agent-os",
    sectionNumber: 5,
    title: "AgentOS — structured agent workflow",
    href: "/course/section-05/agent-os",
    quiz: [
      {
        id: "plan-product-timing",
        prompt: "When should /plan product run?",
        options: [
          "At the start of every chat session",
          "Once, at the start of the project",
          "Before each individual task",
          "After the first deployment",
        ],
        correctIndex: 1,
        explanation:
          "It runs once to create durable anchor files — plan.md, roadmap.md, techstack.md — that every later session reloads.",
      },
      {
        id: "roadmap-purpose",
        prompt: "Which anchor file stops the agent from inventing its own priorities?",
        options: ["plan.md", "roadmap.md", "techstack.md", "tasks.md"],
        correctIndex: 1,
        explanation: "roadmap.md records what matters now and what comes later, so priorities are read — not guessed.",
      },
      {
        id: "clarification-gate",
        prompt: "What must be true before you leave the clarification gate?",
        options: [
          "All tests pass",
          "Zero open questions remain in the requirements",
          "tasks.md has been generated",
          "A reviewer approved the code",
        ],
        correctIndex: 1,
        explanation: "The gate is binary: every bucket — users, data, consistency, errors, security — is resolved before planning starts.",
      },
      {
        id: "exact-commands",
        prompt: "Which instruction is most reliable for an agent?",
        options: ["Make sure tests pass", "Check the build", "pnpm test && pnpm lint", "Run quality checks"],
        correctIndex: 2,
        explanation: "Exact commands remove interpretation. Vague verbs let the agent decide what “done” means.",
      },
    ],
    ordering: {
      prompt: "Put the AgentOS lifecycle in order.",
      steps: agentOsLifecycle.map(({ stage, command }) => `${stage} — ${command}`),
    },
    flashcards: [
      { term: "/plan product", definition: "One-time command that creates durable product context: plan.md, roadmap.md, techstack.md." },
      { term: "shape-spec", definition: "Structured dialogue that captures intent before any code is written." },
      { term: "Clarification gate", definition: "Hard stop: planning starts only when zero open questions remain." },
      { term: "/create-tasks", definition: "Breaks the spec into atomic, dependency-ordered tasks linked to requirements." },
    ],
  },
  {
    id: "section-05/kiro",
    sectionNumber: 5,
    title: "Kiro — spec triad",
    href: "/course/section-05/kiro",
    quiz: [
      {
        id: "design-file",
        prompt: "In the Kiro triad, which file describes how the feature is built?",
        options: ["requirements.md", "design.md", "tasks.md", "README.md"],
        correctIndex: 1,
        explanation: "requirements.md is the what, design.md the how, tasks.md the ordered steps to get there.",
      },
      {
        id: "ears-shape",
        prompt: "Which sentence follows the EARS pattern?",
        options: [
          "As a user I want a fast login",
          "When a user submits valid credentials, the system shall create a session",
          "The login should feel quick",
          "Login must be good",
        ],
        correctIndex: 1,
        explanation: "EARS pairs a trigger with a testable system response: “When <trigger>, the system shall <response>”.",
      },
      {
        id: "kiro-rigor",
        prompt: "What separates Kiro from traditional chat-driven AI coding?",
        options: [
          "It generates code faster",
          "It enforces a protocol and leaves artifacts as evidence",
          "It avoids writing tests",
          "It uses a larger model",
        ],
        correctIndex: 1,
        explanation: "The value is enforcement plus evidence — a paper trail instead of context lost in chat.",
      },
    ],
    ordering: {
      prompt: "Order the Kiro spec flow from intent to verified code.",
      steps: [
        "Write requirements.md (EARS acceptance criteria)",
        "Draft design.md (architecture and contracts)",
        "Generate tasks.md (ordered checklist)",
        "Implement one task at a time",
        "Verify against acceptance criteria",
      ],
    },
    flashcards: [
      { term: "EARS", definition: "Easy Approach to Requirements Syntax — “When <trigger>, the system shall <response>”." },
      { term: "requirements.md", definition: "The what: user outcomes and acceptance criteria for one feature." },
      { term: "design.md", definition: "The how: architecture, data flow and interfaces — written after the requirements gate." },
      { term: "tasks.md", definition: "Dependency-ordered checklist, each task traceable to a requirement." },
    ],
  },
  {
    id: "section-05/spec-files",
    sectionNumber: 5,
    title: "Spec files — what each one is for",
    href: "/course/section-05/spec-files",
    quiz: [
      {
        id: "steering-role",
        prompt: "Which file holds persistent standards shared across every feature?",
        options: ["requirements.md", "steering.md", "tasks.md", "design.md"],
        correctIndex: 1,
        explanation: "steering.md is project memory — stack, standards, commands. requirements.md is per feature.",
      },
      {
        id: "design-timing",
        prompt: "When is design.md written?",
        options: [
          "Before requirements, to explore ideas",
          "After the requirements gate passes",
          "After implementation, as documentation",
          "Only for large features",
        ],
        correctIndex: 1,
        explanation: "Designing before intent is settled locks in assumptions. The how follows a gated what.",
      },
      {
        id: "implement-granularity",
        prompt: "How should tasks be implemented?",
        options: ["All at once in one prompt", "One task at a time, with evidence", "Grouped by file", "In any order"],
        correctIndex: 1,
        explanation: "One task per pass keeps diffs small and each result verifiable against its requirement.",
      },
    ],
    ordering: {
      prompt: "Order the spec files as an agent should load and produce them.",
      steps: kiroSpecWorkflowOrder.map(({ file }) => file),
    },
    flashcards: [
      { term: "steering.md", definition: "Persistent memory: stack, coding standards and exact commands." },
      { term: "Execution spine", definition: "The per-feature chain requirements → design → tasks → code." },
      { term: "Gate", definition: "A binary checkpoint — the next file is not written until it passes." },
    ],
  },
  {
    id: "section-05/mcp",
    sectionNumber: 5,
    title: "MCP — evidence-driven debugging",
    href: "/course/section-05/mcp",
    quiz: [
      {
        id: "mcp-role",
        prompt: "What does MCP add to an AI coding workflow?",
        options: [
          "A bigger context window",
          "A bridge to permitted tools for live, verifiable evidence",
          "Automatic code generation",
          "A replacement for tests",
        ],
        correctIndex: 1,
        explanation: "MCP moves the agent from speculation to observation — it can inspect the running system it is fixing.",
      },
      {
        id: "playwright-use",
        prompt: "Which tool re-enacts the user journey described in the spec?",
        options: ["Chrome DevTools MCP", "Playwright MCP", "Repository server", "Log server"],
        correctIndex: 1,
        explanation: "Playwright MCP is the agent's hands — navigate, click, type. DevTools MCP records what happened.",
      },
      {
        id: "bounded-autonomy",
        prompt: "Bounded autonomy means the agent…",
        options: [
          "Can call any tool it discovers",
          "Uses only tools the team explicitly permits",
          "Never runs tools without a human",
          "Works offline",
        ],
        correctIndex: 1,
        explanation: "Capabilities are declared up front; anything outside that list is not available to the agent.",
      },
    ],
    ordering: {
      prompt: "Order the runtime gateflow.",
      steps: runtimeGateflowSteps.map(({ title }) => title),
    },
    flashcards: [
      { term: "MCP", definition: "Model Context Protocol — a standard bridge from AI hosts to permitted tools and data." },
      { term: "Speculation vs observation", definition: "Guessing from pasted snippets versus collecting runtime evidence." },
      { term: "Bounded autonomy", definition: "The agent acts freely, but only through explicitly permitted tools." },
    ],
  },
  {
    id: "section-06/living-guardrails",
    sectionNumber: 6,
    title: "Living specs — executable guardrails",
    href: "/course/section-06/living-guardrails",
    quiz: [
      {
        id: "spec-purpose",
        prompt: "In a living spec, acceptance criteria are written so they can…",
        options: ["Be skipped when deadlines are tight", "Become tests", "Replace code review", "Be read by stakeholders only"],
        correctIndex: 1,
        explanation: "Every criterion should translate into a test — that is what makes the spec executable.",
      },
      {
        id: "scenario-types",
        prompt: "Which is not one of the three scenario types?",
        options: ["Happy path", "Edge case", "Error path", "Demo path"],
        correctIndex: 3,
        explanation: "Happy, edge and error scenarios cover intent, boundaries and failure. A demo path is not a guardrail.",
      },
      {
        id: "test-first",
        prompt: "Before implementation starts, the derived tests should…",
        options: ["Pass", "Fail", "Be deleted", "Be optional"],
        correctIndex: 1,
        explanation: "A failing test proves the guardrail is real. Implementation is done when it turns green.",
      },
    ],
    ordering: {
      prompt: "Order a traceable requirement from intent to merge.",
      steps: [
        "Requirement with an ID",
        "Scenario in Given / When / Then",
        "Failing test derived from the scenario",
        "Implementation until the test passes",
        "Pull request linking requirement and test",
      ],
    },
    flashcards: [
      { term: "Executable guardrail", definition: "A requirement expressed as a test that fails when intent is violated." },
      { term: "Given / When / Then", definition: "Context, action, expected outcome — the shape of a testable scenario." },
      { term: "Test-first gate", definition: "Tests exist and fail before any implementation is accepted." },
      { term: "Traceability", definition: "Every test and PR points back to the requirement it proves." },
    ],
  },
  {
    id: "section-06/verification-gates",
    sectionNumber: 6,
    title: "Verification gates",
    href: "/course/section-06/verification-gates",
    quiz: [
      {
        id: "gate-definition",
        prompt: "A verification gate is…",
        options: ["A suggestion to the agent", "A hard stop that must pass before work continues", "A code formatter", "A deployment step"],
        correctIndex: 1,
        explanation: "Gates are binary. If the checklist fails, the work does not move forward.",
      },
      {
        id: "spec-gate-item",
        prompt: "Which item belongs on the spec gate checklist?",
        options: [
          "No [NEEDS CLARIFICATION] markers remain",
          "Code coverage above 80%",
          "All tasks are merged",
          "The UI is approved",
        ],
        correctIndex: 0,
        explanation: "The spec gate checks intent: verifiable criteria, measurable metrics, explicit assumptions, no open markers.",
      },
      {
        id: "runtime-drift",
        prompt: "Runtime behaviour drifts from the spec. What comes first?",
        options: ["Patch the code quietly", "Update or confirm the spec", "Disable the failing check", "Ship and monitor"],
        correctIndex: 1,
        explanation: "The spec is the source of truth. Decide which side is wrong, record it, then change code.",
      },
    ],
    ordering: {
      prompt: "Order the verification gates from upstream to runtime.",
      steps: verificationGatesOverview.map(({ name }) => name),
    },
    flashcards: [
      { term: "Spec gate", definition: "Checks that intent is complete, measurable and free of open questions." },
      { term: "Plan gate", definition: "Validates the how: team standards, simplicity, and contracts defined up front." },
      { term: "Task gate", definition: "Checks each task is small, scoped and independently verifiable." },
      { term: "Runtime drift", definition: "Live behaviour diverging from the spec — resolved spec-first." },
    ],
  },
  {
    id: "section-06/property-based-testing",
    sectionNumber: 6,
    title: "Property-based testing",
    href: "/course/section-06/property-based-testing",
    quiz: [
      {
        id: "coverage-limit",
        prompt: "100% line coverage tells you that…",
        options: ["The code is correct", "Every line ran at least once", "All edge cases are handled", "No bugs remain"],
        correctIndex: 1,
        explanation: "Coverage measures execution, not correctness. Properties test behaviour across many inputs.",
      },
      {
        id: "shrinking",
        prompt: "What does shrinking do after a property fails?",
        options: [
          "Deletes the failing test",
          "Reduces the input to the smallest failing case",
          "Compresses the test output",
          "Retries until it passes",
        ],
        correctIndex: 1,
        explanation: "The framework simplifies the counterexample so the root cause is obvious.",
      },
      {
        id: "ts-framework",
        prompt: "Which framework is the common choice for TypeScript?",
        options: ["Hypothesis", "FastCheck", "QuickCheck", "jqwik"],
        correctIndex: 1,
        explanation: "FastCheck for TypeScript; Hypothesis for Python, QuickCheck for Haskell, jqwik for Java.",
      },
    ],
    ordering: {
      prompt: "Order the six-step property-based testing recipe.",
      steps: pbtSixStepRecipe.map(({ title }) => title),
    },
    flashcards: [
      { term: "Property", definition: "A statement that must hold for every valid input, not just one example." },
      { term: "Invariant", definition: "A rule from the spec that never changes, e.g. unauthenticated requests always return 401." },
      { term: "Counterexample", definition: "A generated input that breaks the property." },
      { term: "Shrinking", definition: "Automatic reduction of a counterexample to its minimal form." },
    ],
  },
  {
    id: "section-06/expert-crew",
    sectionNumber: 6,
    title: "Expert AI crew",
    href: "/course/section-06/expert-crew",
    quiz: [
      {
        id: "curse",
        prompt: "The “curse of instructions” means…",
        options: [
          "Models ignore short prompts",
          "The more you ask in one prompt, the worse each part is done",
          "Instructions expire after a session",
          "Agents refuse long tasks",
        ],
        correctIndex: 1,
        explanation: "Splitting work across focused specialists keeps each context small and each result sharp.",
      },
      {
        id: "contract-first",
        prompt: "In a contract-first handoff, what is defined first?",
        options: ["The UI", "The data and API contract", "The tests for styling", "The deployment pipeline"],
        correctIndex: 1,
        explanation: "Specialists build in parallel only once the shared contract between them is fixed.",
      },
      {
        id: "gate-c",
        prompt: "When does Gate C — the integration checkpoint — happen?",
        options: ["Before planning", "After any parallel batch", "Only at release", "After every commit"],
        correctIndex: 1,
        explanation: "Parallel work is reconciled against the contracts before the next batch starts.",
      },
    ],
    ordering: {
      prompt: "Order the human review gates.",
      steps: humanReviewGatesABCD.map(({ gate, title }) => `Gate ${gate} — ${title}`),
    },
    flashcards: [
      { term: "Orchestrator", definition: "Reads the blueprint, assigns tasks to specialists and coordinates handoffs." },
      { term: "Specialist task", definition: "One role, allowed files, inputs, outputs and a verification command." },
      { term: "Gate B", definition: "Per-agent micro-PR review: one task, small diff, clear verification." },
      { term: "Gate D", definition: "Final audit — every acceptance criterion is satisfied." },
    ],
  },
  {
    id: "section-07/spec-first-debugging",
    sectionNumber: 7,
    title: "Spec-first debugging",
    href: "/course/section-07/spec-first-debugging",
    quiz: [
      {
        id: "first-step",
        prompt: "What is the first step of a spec-first debugging session?",
        options: ["Open the code and guess", "Review the spec — budgets, journeys, criteria", "Add console logs", "Revert the last commit"],
        correctIndex: 1,
        explanation: "The spec tells you what “broken” means. Without it you cannot tell symptom from intent.",
      },
      {
        id: "lcp-case",
        prompt: "LCP measures 4.1 s against a 2.5 s budget. What gives you the root cause?",
        options: ["Lighthouse score alone", "A performance trace captured during the journey", "User complaints", "Bundle size"],
        correctIndex: 1,
        explanation: "The trace shows what blocked rendering — long tasks, late resources — so the fix targets evidence.",
      },
      {
        id: "forced-reflow",
        prompt: "Which pattern causes forced reflow?",
        options: [
          "Batching DOM reads before writes",
          "Writing a style, then reading layout, inside a loop",
          "Using CSS transforms",
          "Lazy loading images",
        ],
        correctIndex: 1,
        explanation: "Interleaving writes and reads forces the browser to recalculate layout every iteration.",
      },
      {
        id: "close-loop",
        prompt: "After the fix is verified, what closes the loop?",
        options: ["Delete the trace", "Strengthen the spec with the new budget or criterion", "Nothing", "Increase the budget"],
        correctIndex: 1,
        explanation: "Each bug should leave the spec stronger, so the same regression is caught by a gate next time.",
      },
    ],
    ordering: {
      prompt: "Order the spec-first debugging runbook.",
      steps: specFirstDebugRunbook.map(({ title }) => title),
    },
    flashcards: [
      { term: "LCP", definition: "Largest Contentful Paint — when the main content becomes visible. Budget it in the spec." },
      { term: "Forced reflow", definition: "Reading layout right after a style write, forcing synchronous recalculation." },
      { term: "Performance trace", definition: "Timeline evidence from DevTools showing long tasks, layout and network." },
      { term: "Feedback loop", definition: "Every fix adds a criterion or budget back to the spec." },
    ],
  },
  {
    id: "section-07/legacy-modernization",
    sectionNumber: 7,
    title: "Legacy modernization",
    href: "/course/section-07/legacy-modernization",
    quiz: [
      {
        id: "trap",
        prompt: "The modernization trap is focusing on…",
        options: [
          "The why of the original system",
          "The how — the code — without recovering what and why",
          "Characterization tests before any rewrite",
          "Incremental strangling of the old system",
        ],
        correctIndex: 1,
        explanation: "Rewriting syntax without recovered intent produces a shiny system that still hides the same secret rules.",
      },
      {
        id: "decay",
        prompt: "Intent decay means…",
        options: [
          "The compiler is outdated",
          "The original purpose of the software evaporates until only the code remains",
          "Test coverage slowly drops",
          "The spec is too detailed",
        ],
        correctIndex: 1,
        explanation: "People leave, docs go stale, and nobody knows why that weird line exists — so you can only patch.",
      },
      {
        id: "characterization",
        prompt: "A characterization test is…",
        options: [
          "A performance benchmark",
          "A digital straitjacket that locks current behaviour so you do not break it by accident",
          "A UI screenshot",
          "A rewrite of the business rule",
        ],
        correctIndex: 1,
        explanation: "You capture what the system does today first. Only then is it safe to change anything.",
      },
      {
        id: "done",
        prompt: "In spec-driven modernization, the project is done when…",
        options: [
          "The new system compiles",
          "A demo looks convincing",
          "Behaviour is proven equivalent to the spec",
          "The old repository is deleted",
        ],
        correctIndex: 2,
        explanation: "Compiling is the beginning. Conformance — contract tests, golden tests, traffic replay — is done.",
      },
    ],
    ordering: {
      prompt: "Order the Strangler Fig cutover.",
      steps: stranglerFigSteps.map(({ title }) => title),
    },
    flashcards: [
      { term: "Intent decay", definition: "The original why evaporates until only code remains — and code cannot explain itself." },
      { term: "Characterization test", definition: "Locks observed current behaviour so archaeology does not break production." },
      { term: "Do-not list", definition: "Explicit bans on scope creep: do not change this rule, do not add that feature." },
      { term: "Strangler Fig", definition: "Build new services around the old system, reroute traffic, then turn the core off." },
      {
        term: "Conformance",
        definition: "Proven equivalence to the spec. Compiling without errors is not the finish line.",
      },
    ],
  },
  {
    id: "section-07/product-compilation",
    sectionNumber: 7,
    title: "Compile the product",
    href: "/course/section-07/product-compilation",
    quiz: [
      {
        id: "asset",
        prompt: "In multi-target SDD, the primary asset is…",
        options: ["The Go service", "The Rust service", "The specification", "The Figma file"],
        correctIndex: 2,
        explanation: "Code is a temporary artifact emitted from the spec. You update the spec and regenerate the targets.",
      },
      {
        id: "llvm",
        prompt: "In the LLVM analogy, the spec is…",
        options: ["Machine code", "The intermediate representation", "A CPU backend", "A linker"],
        correctIndex: 1,
        explanation: "LLVM IR feeds many CPU backends. The spec is the IR of the product; Go, Rust, and Flutter are backends.",
      },
      {
        id: "contract",
        prompt: "A contract invariant is…",
        options: [
          "A colour palette",
          "How the system communicates — API shape, fields, and status codes",
          "Which web framework each target uses",
          "A goroutine pool size",
        ],
        correctIndex: 1,
        explanation: "Frameworks may differ. The frozen OpenAPI contract may not.",
      },
      {
        id: "ui-split",
        prompt: "Which of these may vary between UI skins?",
        options: ["Validation rules", "Accessibility requirements", "Colour palette and layout", "Core user flows"],
        correctIndex: 2,
        explanation: "Aesthetic choices can change. Functional behaviour — flows, validation, accessibility — cannot.",
      },
    ],
    ordering: {
      prompt: "Order the four steps for generating identical twins.",
      steps: multiTargetFourSteps.map(({ title }) => title),
    },
    flashcards: [
      { term: "Spec as IR", definition: "The specification is the intermediate representation of the product; targets are backends." },
      { term: "Functional invariant", definition: "Core behaviour every variant must share — journeys and error handling." },
      { term: "Quality invariant", definition: "A budget every generated variant must hit, such as P95 latency. No exceptions." },
      { term: "Stable inputs", definition: "Versioned spec and pinned dependencies — the first pillar of engineered determinism." },
    ],
  },
] as const satisfies readonly LessonPracticeSet[];

export type LessonPracticeId = (typeof lessonPracticeSets)[number]["id"];

const practiceById: ReadonlyMap<string, LessonPracticeSet> = new Map(
  lessonPracticeSets.map((set) => [set.id, set])
);

export function getLessonPractice(id: LessonPracticeId): LessonPracticeSet {
  const set = practiceById.get(id);
  if (!set) throw new Error(`Unknown practice set: ${id}`);
  return set;
}

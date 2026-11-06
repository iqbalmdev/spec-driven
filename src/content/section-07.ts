export const section07ModuleMeta = {
  title: "Advanced SDD Use Cases",
  lessonCount: 1,
  estimatedMinutes: 12,
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
    body: "Before code or logs, open the specification document — single source of truth for what should have happened. Spec-first diagnostics means anchoring every investigation in that definition of “right.”",
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

export const section07Topics = [
  {
    id: "spec-first-debugging",
    title: "Spec-First Debugging",
    subtitle: "Lesson 1 · Evidence, not guesswork",
    description:
      "Treat the spec as the case file — MCP detective, Playwright reenactment, DevTools forensics, six-step runbook, LCP and jank case studies, spec feedback loop.",
    href: "/course/section-07/spec-first-debugging",
  },
] as const;

export const section07Takeaways = [
  "Lesson 1: Debug from the spec first — measurable journeys, budgets, and acceptance criteria before touching code.",
  "MCP + Playwright + DevTools = observe live behavior, reenact journeys, capture traces.",
  "Six-step runbook: spec → reenact → trace → analyze → map to spec → update spec.",
  "LCP and layout-thrashing cases show proof beats “I think.”",
  "Every incident can tighten the spec so the same class of bug cannot return.",
] as const;

export const section02Concepts = [
  {
    id: "clarified-spec",
    title: "Clarified Specification",
    subtitle: "Gate before tasks",
    description:
      "Before /create-tasks runs, requirements.md must be fully clarified — zero open items, user roles defined, data lifecycle and error behaviours documented.",
    href: "/requirements",
  },
  {
    id: "create-tasks",
    title: "/create-tasks",
    subtitle: "Spec → tasks.md",
    description:
      "Converts clarified specifications into an ordered tasks.md file — with dependency groups, requirement links, and verification steps per task.",
    href: "/course/section-02/create-tasks",
  },
  {
    id: "atomic-decomposition",
    title: "Atomic Decomposition",
    subtitle: "Smallest verifiable units",
    description:
      "Split features into the smallest units that can be reviewed, tested, and implemented in isolation — reducing errors and ambiguity.",
    href: "/course/section-02/tasks",
  },
  {
    id: "tasks-md",
    title: "tasks.md Structure",
    subtitle: "Version-controlled task file",
    description:
      "Groups by dependency, links every task to a requirement ID, and includes verification checkboxes — all committed to the repo.",
    href: "/course/section-02/tasks",
  },
] as const;

export const tasksMdStructure = [
  {
    id: "dependency",
    title: "Groups by Dependency",
    description: "Tasks ordered so dependencies are explicit — foundation before logic before verification.",
    example: "Group A (Data) → Group B (Logic) → Group C (Tests)",
  },
  {
    id: "traceability",
    title: "Link Back to Requirements",
    description: "Every task references a REQ-XXX from requirements.md — no orphan work.",
    example: "Requirement: REQ-002 — Data lifecycle",
  },
  {
    id: "verification",
    title: "Verification Steps",
    description: "Each task includes checkbox criteria that define done objectively.",
    example: "[ ] Message schema validates required fields",
  },
] as const;

export const messagingExampleSpec = {
  feature: "Send messages between users",
  requirements: [
    { id: "REQ-001", title: "User roles", detail: "Sender composes and sends; receiver reads incoming messages" },
    { id: "REQ-002", title: "Data lifecycle", detail: "Stored on send; soft-deleted by sender; hard-deleted after 30 days" },
    { id: "REQ-003", title: "Error behaviour", detail: "Failed send shows retry UI; not persisted until delivery confirmed" },
  ],
} as const;

export const messagingExampleTasks = [
  {
    id: 1,
    group: "A — Data Foundation",
    title: "Design the message data structure",
    requirement: "REQ-002 — Data lifecycle",
    dependsOn: null as string | null,
    description: "Define message schema: id, senderId, receiverId, body, status, createdAt, deletedAt",
    verification: [
      "Schema includes all fields from data lifecycle spec",
      "Status enum covers: pending, sent, failed, deleted",
      "Soft-delete sets deletedAt without removing record",
    ],
  },
  {
    id: 2,
    group: "A — Data Foundation",
    title: "Implement the send message function",
    requirement: "REQ-001 — User roles",
    dependsOn: "Task 1",
    description: "Sender composes and dispatches; message persisted only on confirmed delivery",
    verification: [
      "Sender can create a message with receiverId and body",
      "Message not persisted until delivery confirmed",
      "Receiver can fetch the message after send",
    ],
  },
  {
    id: 3,
    group: "B — Error Handling",
    title: "Create error handling for failed messages",
    requirement: "REQ-003 — Error behaviour",
    dependsOn: "Task 2",
    description: "On send failure, surface retry UI; no orphan records; retry without duplicate",
    verification: [
      "Failed send shows user-facing retry option",
      "No orphan records in database on failure",
      "Retry succeeds without creating duplicates",
    ],
  },
  {
    id: 4,
    group: "C — Verification",
    title: "Write unit tests for message sending",
    requirement: "REQ-001, REQ-002, REQ-003",
    dependsOn: "Task 3",
    description: "Test happy path send, soft-delete, failed send + retry",
    verification: [
      "Happy path: send → persist → receiver reads",
      "Soft-delete hides message from sender view",
      "Failed send triggers retry flow without duplicate",
    ],
  },
] as const;

/** Risk planning matrix — part of the Plan stage before /create-tasks */
export const riskManagementExample = {
  title: "Risk Planning Matrix",
  description:
    "During the Plan stage, identify what can go wrong, how to detect it, and how to mitigate — before tasks become code.",
  rows: [
    {
      risk: "Database failure",
      detection: "Metrics / Alerts",
      mitigation: "Rollback migration",
    },
    {
      risk: "Latency spike",
      detection: "Monitoring signals",
      mitigation: "Disable via flag",
    },
    {
      risk: "API misuse",
      detection: "Logs",
      mitigation: "Rate limit",
    },
  ],
} as const;

export const section02Takeaways = [
  "Gate before tasks. Never /create-tasks on an unclear spec.",
  "Atomic wins. Smallest verifiable unit — not 'build the feature.'",
  "Trace everything. Every task links to a requirement ID.",
  "Verify each task. Checkboxes, not vibes.",
  "Dependency order matters. Foundation before logic before tests.",
  "Plan for failure. Document risks, detection signals, and mitigations before coding.",
  "tasks.md lives in the repo. Version-controlled like requirements.md.",
] as const;

export const createTasksSteps = [
  { step: 1, title: "Validate the spec", detail: "Clarification Gate: open items = 0. Stop if not." },
  { step: 2, title: "Identify user stories", detail: "Extract stories and acceptance criteria from requirements.md." },
  { step: 3, title: "Atomic decomposition", detail: "Split into smallest verifiable units per story." },
  { step: 4, title: "Order by dependency", detail: "Foundation → core logic → edge cases → verification." },
  { step: 5, title: "Link to requirements", detail: "Every task gets a REQ-XXX reference." },
  { step: 6, title: "Add verification steps", detail: "Checkbox criteria per task — objective done definition." },
  { step: 7, title: "Write tasks.md", detail: "Commit to repo — version-controlled alongside requirements.md." },
] as const;

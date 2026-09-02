export const section03Concepts = [
  {
    id: "task-ordered",
    title: "Task-Ordered Execution",
    subtitle: "Dependency order is law",
    description:
      "Implement tasks strictly in dependency order from tasks.md. Never skip ahead — Task 2 waits until Task 1 verification passes.",
    href: "/course/section-03/implement",
  },
  {
    id: "implement",
    title: "/implement",
    subtitle: "One task at a time",
    description:
      "Execute a single atomic task scoped to its linked requirement. Verify all checkboxes before picking the next task.",
    href: "/course/section-03/implement",
  },
  {
    id: "spec-aligned",
    title: "Spec-Aligned Code",
    subtitle: "Spec wins over code",
    description:
      "Every implementation decision resolves against requirements.md. When code diverges from spec — fix the code, not the intent.",
    href: "/course/section-03",
  },
  {
    id: "verification",
    title: "Per-Task Verification",
    subtitle: "Checkboxes gate progress",
    description:
      "Each task's verification steps must pass before the next task begins. Verification is not optional end-of-sprint QA.",
    href: "/course/section-03/verify",
  },
] as const;

export const implementWorkflowSteps = [
  { step: 1, title: "Identify next task", detail: "First unverified task whose dependencies are complete." },
  { step: 2, title: "Load context", detail: "Task from tasks.md + linked REQ-XXX from requirements.md." },
  { step: 3, title: "Scope implementation", detail: "Single task only — never the whole feature in one prompt." },
  { step: 4, title: "Write code", detail: "Minimum code to satisfy task + requirement. Commit with Task + REQ ref." },
  { step: 5, title: "Run verification", detail: "Execute every checkbox in the task's verification section." },
  { step: 6, title: "Pass or fix", detail: "All pass → mark complete. Any fail → fix code, re-verify. Do not advance." },
  { step: 7, title: "Feature complete", detail: "All tasks verified + full acceptance criteria from requirements.md." },
] as const;

export const messagingImplementationTasks = [
  {
    id: 1,
    title: "Design the message data structure",
    requirement: "REQ-002 — Data lifecycle",
    dependsOn: null as string | null,
    implementation: "Define schema: id, senderId, receiverId, body, status, createdAt, deletedAt. Status enum: pending | sent | failed | deleted.",
    verification: [
      "Schema includes all fields from data lifecycle spec",
      "Status enum covers required states",
      "Soft-delete sets deletedAt without removing record",
    ],
    status: "complete" as const,
  },
  {
    id: 2,
    title: "Implement the send message function",
    requirement: "REQ-001 — User roles",
    dependsOn: "Task 1",
    implementation: "Sender creates message; persist only on confirmed delivery; receiver can fetch after send.",
    verification: [
      "Sender can create a message with receiverId and body",
      "Message not persisted until delivery confirmed",
      "Receiver can fetch the message after send",
    ],
    status: "complete" as const,
  },
  {
    id: 3,
    title: "Create error handling for failed messages",
    requirement: "REQ-003 — Error behaviour",
    dependsOn: "Task 2",
    implementation: "Failed send shows retry UI; no orphan records; retry without duplicate.",
    verification: [
      "Failed send shows user-facing retry option",
      "No orphan records in database on failure",
      "Retry succeeds without creating duplicates",
    ],
    status: "in_progress" as const,
  },
  {
    id: 4,
    title: "Write unit tests for message sending",
    requirement: "REQ-001, REQ-002, REQ-003",
    dependsOn: "Task 3",
    implementation: "Test happy path send, soft-delete, failed send + retry.",
    verification: [
      "Happy path: send → persist → receiver reads",
      "Soft-delete hides message from sender view",
      "Failed send triggers retry flow without duplicate",
    ],
    status: "pending" as const,
  },
] as const;

export const section03Takeaways = [
  "One task at a time. Dependency order is not a suggestion.",
  "Verify before advancing. Failed verification blocks the next task.",
  "Spec over code. Fix code when it diverges from requirements.",
  "Scope AI prompts to one task. Never 'build the whole feature.'",
  "Trace commits to tasks and requirements. Code → Task → REQ → Story.",
  "Tests are in the task list — not an afterthought after shipping.",
] as const;

export const implementationAntiPatterns = [
  { bad: '"Build the messaging feature"', good: '"Implement Task 2: send message function"' },
  { bad: "Skip Task 1 verification", good: "Verify before starting Task 2" },
  { bad: "Change spec to match buggy code", good: "Fix code to match spec" },
  { bad: "One giant prompt for all tasks", good: "One scoped prompt per atomic task" },
  { bad: 'Tests "later"', good: "Task 4 is tests — follow dependency order" },
] as const;

export const featureCompletionCriteria = [
  "All tasks in tasks.md verified",
  "All verification checkboxes checked",
  "All user story acceptance criteria from requirements.md pass",
  "Implementation matches spec — not retrofitted spec matching code",
] as const;

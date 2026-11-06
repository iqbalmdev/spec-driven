import Link from "next/link";
import {
  codebaseDrift,
  determinismPillars,
  goVsRustPlans,
  llvmAnalogy,
  multiTargetFourSteps,
  multiTargetInvariants,
  section07Lesson4Sections,
  specAsCompiler,
  uiFunctionalVsAesthetic,
} from "@/content/section-07";
import { CompilerForgeScene } from "@/components/three/lazy-three-scenes";
import { SectionPager } from "@/components/course-nav";
import { LessonPractice } from "@/components/practice/lesson-practice";
import { PageHeader, Badge, Card, QuoteBlock } from "@/components/ui/layout";

export default function ProductCompilationPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Section 7 · Lesson 4"
        title="Compile the Product — One Spec, Many Targets"
        description="Stop maintaining twin codebases that drift apart. Treat the spec as IR, generate Go, Rust, and UI skins from one source of truth, and engineer determinism so every artifact is repeatable."
      />

      <QuoteBlock>There is only one source of truth. Code is an emitted artifact.</QuoteBlock>

      {section07Lesson4Sections.map((section) => (
        <section key={section.id} className="space-y-3 max-w-3xl">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <p className="text-muted leading-relaxed">{section.body}</p>
        </section>
      ))}

      <section className="grid gap-4 sm:grid-cols-2 max-w-4xl">
        <Card className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">Week one</p>
          <p className="text-sm text-muted leading-relaxed">{codebaseDrift.start}</p>
        </Card>
        <Card className="border-accent/20 bg-accent/5 space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">The drift</p>
          <p className="text-sm text-muted leading-relaxed">{codebaseDrift.end}</p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Spec as compiler</h2>
        <p className="text-sm text-muted max-w-2xl">
          One spec in. Many implementations out. The generation layer is the compiler.
        </p>
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-[540px] items-stretch gap-0">
            {specAsCompiler.map((row, i) => (
              <div key={row.stage} className="flex flex-1 items-stretch">
                <Card className="flex-1 space-y-2 rounded-xl border-accent/15">
                  <Badge variant="accent">{row.stage}</Badge>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted">{row.role}</p>
                  <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
                </Card>
                {i < specAsCompiler.length - 1 && (
                  <div className="flex w-6 shrink-0 items-center justify-center text-muted" aria-hidden>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <CompilerForgeScene />
      </section>

      <section className="grid gap-4 sm:grid-cols-2 max-w-4xl">
        <Card className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">LLVM</p>
          <p className="text-sm text-muted leading-relaxed">{llvmAnalogy.llvm}</p>
        </Card>
        <Card className="border-accent/20 bg-accent/5 space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">SDD</p>
          <p className="text-sm text-muted leading-relaxed">{llvmAnalogy.sdd}</p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Three unbreakable pillars</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {multiTargetInvariants.map((row) => (
            <Card key={row.pillar} className="space-y-2 h-full">
              <Badge variant="accent">{row.pillar}</Badge>
              <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
            </Card>
          ))}
        </div>
        <Link href="/course/section-06/living-guardrails" className="text-sm font-medium text-accent hover:underline">
          Executable guardrails →
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Four steps to identical twins</h2>
        <ol className="space-y-3 max-w-3xl">
          {multiTargetFourSteps.map((row) => (
            <li key={row.step}>
              <Card className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {row.step}
                </span>
                <div>
                  <p className="font-medium text-sm">{row.title}</p>
                  <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Go and Rust — same what, different how</h2>
        <div className="grid gap-4 sm:grid-cols-2 max-w-4xl">
          {goVsRustPlans.map((row) => (
            <Card key={row.plan} className="space-y-2 h-full">
              <p className="font-medium text-sm">{row.plan}</p>
              <p className="text-sm text-foreground">{row.stack}</p>
              <p className="text-sm text-muted leading-relaxed">{row.note}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 max-w-4xl">
        <Card className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">Functional (cannot change)</p>
          <p className="text-sm text-muted leading-relaxed">{uiFunctionalVsAesthetic.functional}</p>
        </Card>
        <Card className="border-accent/20 bg-accent/5 space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">Aesthetic (may vary)</p>
          <p className="text-sm text-muted leading-relaxed">{uiFunctionalVsAesthetic.aesthetic}</p>
        </Card>
      </section>

      <p className="text-sm max-w-2xl text-muted leading-relaxed">
        Pull design tokens and component structure from a design source of truth such as the Figma API so UI variants
        follow intended design — not a remembered screenshot.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Engineer determinism</h2>
        <p className="text-sm text-muted max-w-2xl">You cannot wish for repeatable builds. You construct them.</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {determinismPillars.map((row) => (
            <Card key={row.pillar} className="space-y-2 h-full">
              <p className="font-medium text-sm">{row.pillar}</p>
              <p className="text-sm text-muted leading-relaxed">{row.detail}</p>
            </Card>
          ))}
        </div>
        <Link href="/course/section-06/verification-gates" className="text-sm font-medium text-accent hover:underline">
          Verification gates (Section 6 · Lesson 2) →
        </Link>
      </section>

      <div className="flex flex-wrap gap-4 text-sm">
        <Link href="/course/section-07/legacy-modernization" className="font-medium text-accent hover:underline">
          Legacy modernization (Lesson 3) →
        </Link>
        <Link href="/course/section-06/property-based-testing" className="font-medium text-accent hover:underline">
          Property-based testing →
        </Link>
      </div>

      <LessonPractice lessonId="section-07/product-compilation" />

      <SectionPager slug="section-07" />
    </div>
  );
}

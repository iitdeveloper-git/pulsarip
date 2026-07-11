import type { ProcessStep } from "@/types";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.title} className="relative">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy-900 font-heading text-sm font-bold text-white">
              {index + 1}
            </span>
            {index < steps.length - 1 && <span className="hidden h-px flex-1 bg-navy-200 sm:block" aria-hidden />}
          </div>
          <h3 className="mt-4 text-base font-semibold text-navy-900">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}

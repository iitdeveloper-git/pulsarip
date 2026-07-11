import { cn } from "@/lib/utils";
import { Container } from "./container";
import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  containerClassName?: string;
  as?: "section" | "div";
}

export function Section({ className, containerClassName, as = "section", children, ...props }: SectionProps) {
  const Comp = as;
  return (
    <Comp className={cn("py-16 sm:py-20 lg:py-24", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </Comp>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-600">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>}
    </div>
  );
}

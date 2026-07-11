import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  href,
  title,
  description,
  icon: Icon,
}: {
  href: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}) {
  return (
    <Link
      href={href}
      className="focus-ring group flex flex-col rounded-xl2 border border-navy-100 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      {Icon && (
        <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-700 group-hover:bg-navy-900 group-hover:text-white">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
      )}
      <h3 className="text-base font-semibold text-navy-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 group-hover:gap-2 group-hover:text-gold-600">
        Learn more <ArrowRight className="h-4 w-4 transition-all" aria-hidden />
      </span>
    </Link>
  );
}

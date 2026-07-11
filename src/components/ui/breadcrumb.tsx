import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { jsonLdScriptProps, breadcrumbJsonLd } from "@/lib/seo/jsonld";

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbEntry[] }) {
  const full = [{ name: "Home", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-navy-100 bg-navy-50/50">
      <div className="container-page flex items-center gap-1.5 overflow-x-auto py-3 text-sm text-muted">
        {full.map((item, index) => {
          const isLast = index === full.length - 1;
          return (
            <span key={item.path} className="flex items-center gap-1.5 whitespace-nowrap">
              {index === 0 ? (
                <Link href={item.path} className="focus-ring flex items-center gap-1 rounded hover:text-navy-900">
                  <Home className="h-3.5 w-3.5" aria-hidden />
                  <span className="sr-only">Home</span>
                </Link>
              ) : isLast ? (
                <span aria-current="page" className="font-medium text-navy-900">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="focus-ring rounded hover:text-navy-900">
                  {item.name}
                </Link>
              )}
              {!isLast && <ChevronRight className="h-3.5 w-3.5 text-navy-300" aria-hidden />}
            </span>
          );
        })}
      </div>
      <script {...jsonLdScriptProps(breadcrumbJsonLd(full))} />
    </nav>
  );
}

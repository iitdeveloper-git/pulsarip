"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/config/navigation";
import { LinkButton } from "@/components/ui/button";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const first = panelRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      id="mobile-nav"
      ref={panelRef}
      className={cn(
        "fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-navy-100 bg-white lg:hidden",
        open ? "block" : "hidden",
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <nav className="container-page flex flex-col gap-1 py-4">
        {mainNav.map((group) => (
          <div key={group.href} className="border-b border-navy-50 last:border-none">
            <div className="flex items-center justify-between">
              <Link href={group.href} className="focus-ring flex-1 rounded-lg py-3 text-base font-medium text-navy-900">
                {group.label}
              </Link>
              {group.items && (
                <button
                  type="button"
                  className="focus-ring rounded-lg p-3 text-navy-500"
                  aria-expanded={expanded === group.label}
                  aria-label={`Toggle ${group.label} submenu`}
                  onClick={() => setExpanded(expanded === group.label ? null : group.label)}
                >
                  <ChevronDown
                    className={cn("h-5 w-5 transition-transform", expanded === group.label && "rotate-180")}
                    aria-hidden
                  />
                </button>
              )}
            </div>
            {group.items && expanded === group.label && (
              <div className="flex flex-col gap-1 pb-3 pl-4">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="focus-ring rounded-lg py-2 text-sm text-muted hover:text-navy-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <LinkButton href="/contact" variant="gold" className="mt-4 w-full">
          Book Consultation
        </LinkButton>
      </nav>
    </div>
  );
}

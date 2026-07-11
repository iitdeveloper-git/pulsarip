"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/config/navigation";
import { siteConfig, telHref } from "@/config/site";
import { LinkButton } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const tel = telHref();

  useEffect(() => {
    setOpenGroup(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenGroup(null);
    }
    function onPointerDown(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenGroup(null);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpenGroup(null), 150);
  }

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" className="focus-ring flex items-center gap-2 rounded" aria-label={`${siteConfig.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 font-heading text-base font-bold text-white">
            P
          </span>
          <span className="font-heading text-lg font-bold tracking-tight text-navy-900">{siteConfig.name}</span>
        </Link>

        <nav ref={navRef} aria-label="Primary" className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {mainNav.map((group) => (
            <div
              key={group.href}
              className="relative"
              onMouseEnter={() => {
                cancelClose();
                if (group.items) setOpenGroup(group.label);
              }}
              onMouseLeave={() => group.items && scheduleClose()}
            >
              {group.items ? (
                <button
                  type="button"
                  className={cn(
                    "focus-ring flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-navy-700 hover:bg-navy-50 hover:text-navy-900",
                    isActive(group.href) && "text-navy-900",
                  )}
                  aria-expanded={openGroup === group.label}
                  onClick={() => setOpenGroup(group.label)}
                >
                  {group.label}
                  <ChevronDown
                    className={cn("h-3.5 w-3.5 transition-transform", openGroup === group.label && "rotate-180")}
                    aria-hidden
                  />
                </button>
              ) : (
                <Link
                  href={group.href}
                  className={cn(
                    "focus-ring block rounded-lg px-3 py-2 text-sm font-medium text-navy-700 hover:bg-navy-50 hover:text-navy-900",
                    isActive(group.href) && "text-navy-900",
                  )}
                >
                  {group.label}
                </Link>
              )}

              {group.items && (
                <div
                  className={cn(
                    "absolute left-1/2 top-full z-20 w-80 -translate-x-1/2 pt-2 transition-opacity",
                    openGroup === group.label ? "visible opacity-100" : "invisible opacity-0",
                  )}
                >
                  <div className="rounded-xl2 border border-navy-100 bg-white p-3 shadow-card-hover">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="focus-ring block rounded-lg px-3 py-2.5 text-sm hover:bg-navy-50"
                      >
                        <span className="block font-semibold text-navy-900">{item.label}</span>
                        {item.description && <span className="mt-0.5 block text-xs text-muted">{item.description}</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {tel && (
            <a href={tel} className="focus-ring flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium text-navy-700 hover:text-navy-900">
              <Phone className="h-4 w-4" aria-hidden />
              {siteConfig.phone}
            </a>
          )}
          <LinkButton href="/contact" variant="gold" size="sm">
            Book Consultation
          </LinkButton>
        </div>

        <button
          type="button"
          className="focus-ring rounded-lg p-2 text-navy-900 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

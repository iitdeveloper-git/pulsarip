import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: "bg-navy-900 text-white hover:bg-navy-700",
  gold: "bg-gold-400 text-navy-900 hover:bg-gold-300",
  outline: "border border-navy-200 text-navy-900 hover:bg-navy-50",
  ghost: "text-navy-900 hover:bg-navy-50",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1ebe57]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm sm:text-base",
  lg: "px-7 py-4 text-base sm:text-lg",
};

interface CommonProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}

export function LinkButton({
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  if (isExternal) {
    return (
      <a
        href={href}
        className={cn(base, variants[variant], sizes[size], className)}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      />
    );
  }
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}

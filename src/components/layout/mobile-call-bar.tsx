"use client";

import { Phone, MessageCircle } from "lucide-react";
import { telHref, whatsappHref } from "@/config/site";

export function MobileStickyCallBar() {
  const tel = telHref();
  const wa = whatsappHref();
  if (!tel && !wa) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-navy-100 bg-white shadow-[0_-4px_16px_rgba(15,23,42,0.08)] sm:hidden">
      {tel && (
        <a
          href={tel}
          className="focus-ring flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-navy-900"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call Now
        </a>
      )}
      {wa && (
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex items-center justify-center gap-2 border-l border-navy-100 bg-[#25D366] py-3.5 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          WhatsApp
        </a>
      )}
    </div>
  );
}

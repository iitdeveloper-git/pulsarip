"use client";

import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/config/site";

export function WhatsAppFloatingButton() {
  const href = whatsappHref();
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
      aria-label="Chat with PulsarIP on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}

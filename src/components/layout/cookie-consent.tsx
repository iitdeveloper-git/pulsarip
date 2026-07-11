"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "pulsarip-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function respond(value: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore storage failures (private browsing, etc.)
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-navy-100 bg-white p-4 shadow-[0_-4px_16px_rgba(15,23,42,0.1)] sm:p-5"
    >
      <div className="container-page flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          We use essential cookies to run this site and optional analytics cookies to understand how it&apos;s
          used. Read our{" "}
          <Link href="/cookie-policy" className="focus-ring rounded font-medium text-navy-900 underline">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex flex-shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={() => respond("declined")}>
            Decline
          </Button>
          <Button variant="primary" size="sm" onClick={() => respond("accepted")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { AlertOctagon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button, LinkButton } from "@/components/ui/button";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[app-error]", error);
  }, [error]);

  return (
    <Section className="flex flex-col items-center py-24 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
        <AlertOctagon className="h-9 w-9 text-red-600" aria-hidden />
      </span>
      <h1 className="mt-6 text-3xl font-bold text-navy-900 sm:text-4xl">Something went wrong</h1>
      <p className="mt-4 max-w-md text-muted">
        An unexpected error occurred while loading this page. You can try again, or head back to the
        homepage.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button variant="gold" size="lg" onClick={reset}>
          Try Again
        </Button>
        <LinkButton href="/" variant="outline" size="lg">
          Back to Home
        </LinkButton>
      </div>
    </Section>
  );
}

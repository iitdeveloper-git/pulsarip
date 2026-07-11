import { SearchX } from "lucide-react";
import { Section } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="flex flex-col items-center py-24 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-50">
        <SearchX className="h-9 w-9 text-navy-700" aria-hidden />
      </span>
      <h1 className="mt-6 text-3xl font-bold text-navy-900 sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <LinkButton href="/" variant="gold" size="lg">
          Back to Home
        </LinkButton>
        <LinkButton href="/services" variant="outline" size="lg">
          Browse Services
        </LinkButton>
      </div>
    </Section>
  );
}

import { AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Section } from "@/components/ui/section";

export function LegalPageLayout({
  title,
  path,
  lastUpdated,
  children,
}: {
  title: string;
  path: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumb items={[{ name: title, path }]} />
      <Section className="max-w-3xl">
        <h1 className="text-3xl font-bold text-navy-900 sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted">Last updated: {lastUpdated}</p>

        <div className="mt-6 flex items-start gap-3 rounded-xl2 border border-gold-300 bg-gold-50 p-5 text-sm leading-relaxed text-navy-800">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-600" aria-hidden />
          <p>
            This is a draft document prepared for structural and informational purposes. It must be reviewed
            and approved by a qualified legal professional before being relied upon as PulsarIP&apos;s final,
            binding policy.
          </p>
        </div>

        <div className="prose prose-slate mt-10 max-w-none prose-headings:font-heading prose-headings:text-navy-900 prose-a:text-navy-900">
          {children}
        </div>
      </Section>
    </>
  );
}

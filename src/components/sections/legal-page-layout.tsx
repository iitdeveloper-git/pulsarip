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

        <div className="prose prose-slate mt-10 max-w-none prose-headings:font-heading prose-headings:text-navy-900 prose-a:text-navy-900">
          {children}
        </div>
      </Section>
    </>
  );
}

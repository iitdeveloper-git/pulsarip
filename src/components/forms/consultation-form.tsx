"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { contactFormClientSchema, serviceOptions, contactMethodOptions, type ContactFormClientValues } from "@/lib/validation/contact";
import { Button } from "@/components/ui/button";

interface Field {
  label: string;
  error?: string;
}

function FieldWrapper({ label, error, children, htmlFor }: Field & { children: React.ReactNode; htmlFor: string }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-navy-900">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "focus-ring w-full rounded-lg border border-navy-200 px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-navy-300";

export function ConsultationForm({ defaultService }: { defaultService?: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [meta, setMeta] = useState({ utmSource: "", utmMedium: "", utmCampaign: "", referrer: "", page: "" });
  const [formLoadedAt] = useState(() => Date.now());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormClientValues>({
    resolver: zodResolver(contactFormClientSchema),
    defaultValues: {
      service: (defaultService as ContactFormClientValues["service"]) || undefined,
      preferredContactMethod: "Email",
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setMeta({
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      referrer: document.referrer || "",
      page: window.location.pathname,
    });
  }, []);

  async function onSubmit(values: ContactFormClientValues) {
    setStatus("submitting");
    setFormError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: "", ...meta, formLoadedAt }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || "Something went wrong. Please try again.");
      }

      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" aria-describedby={formError ? "form-error-summary" : undefined}>
      {formError && (
        <div id="form-error-summary" role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {formError}
        </div>
      )}

      {/* Honeypot field — hidden from users & standard crawlers, left blank by humans */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldWrapper label="Full Name" htmlFor="name" error={errors.name?.message}>
          <input id="name" className={inputClass} {...register("name")} autoComplete="name" />
        </FieldWrapper>
        <FieldWrapper label="Email" htmlFor="email" error={errors.email?.message}>
          <input id="email" type="email" className={inputClass} {...register("email")} autoComplete="email" />
        </FieldWrapper>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldWrapper label="Phone" htmlFor="phone" error={errors.phone?.message}>
          <input id="phone" type="tel" className={inputClass} {...register("phone")} autoComplete="tel" />
        </FieldWrapper>
        <FieldWrapper label="Company (optional)" htmlFor="company" error={errors.company?.message}>
          <input id="company" className={inputClass} {...register("company")} autoComplete="organization" />
        </FieldWrapper>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldWrapper label="Service Required" htmlFor="service" error={errors.service?.message}>
          <select id="service" className={inputClass} {...register("service")} defaultValue={defaultService || ""}>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FieldWrapper>
        <FieldWrapper label="Preferred Contact Method" htmlFor="preferredContactMethod" error={errors.preferredContactMethod?.message}>
          <select id="preferredContactMethod" className={inputClass} {...register("preferredContactMethod")}>
            {contactMethodOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FieldWrapper>
      </div>

      <FieldWrapper label="Message" htmlFor="message" error={errors.message?.message}>
        <textarea id="message" rows={5} className={inputClass} {...register("message")} placeholder="Tell us briefly about your requirement…" />
      </FieldWrapper>

      <div>
        <label htmlFor="consent" className="flex items-start gap-2.5 text-sm text-muted">
          <input id="consent" type="checkbox" className="focus-ring mt-0.5 h-4 w-4 rounded border-navy-300" {...register("consent")} />
          <span>
            I agree to the{" "}
            <Link href="/privacy-policy" className="font-medium text-navy-900 underline">
              Privacy Policy
            </Link>{" "}
            and consent to being contacted about my enquiry.
          </span>
        </label>
        {errors.consent && (
          <p role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.consent.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="gold" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        {status === "submitting" ? "Sending…" : "Book Consultation"}
      </Button>
    </form>
  );
}

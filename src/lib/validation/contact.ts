import { z } from "zod";

export const contactMethodOptions = ["Email", "Phone", "WhatsApp"] as const;

export const serviceOptions = [
  "Trademark",
  "Patent",
  "Copyright",
  "Design Registration",
  "IP Advisory",
  "Company Registration",
  "LLP Registration",
  "MSME / Udyam Registration",
  "Import Export Code",
  "Startup India Registration",
  "Legal Documentation",
  "Other / Not Sure",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Phone number is too long.")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number."),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  service: z.enum(serviceOptions, { errorMap: () => ({ message: "Please select a service." }) }),
  preferredContactMethod: z.enum(contactMethodOptions),
  message: z
    .string()
    .trim()
    .min(10, "Please share a few details about your requirement.")
    .max(3000, "Message is too long."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please accept the privacy policy to continue." }),
  }),
  // Honeypot: real users never fill this in — bots typically do.
  website: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
  // Behavioural + attribution metadata (silently captured, not user-entered).
  utmSource: z.string().max(200).optional(),
  utmMedium: z.string().max(200).optional(),
  utmCampaign: z.string().max(200).optional(),
  referrer: z.string().max(500).optional(),
  page: z.string().max(300).optional(),
  formLoadedAt: z.number().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormClientSchema = contactFormSchema.omit({
  website: true,
  utmSource: true,
  utmMedium: true,
  utmCampaign: true,
  referrer: true,
  page: true,
  formLoadedAt: true,
});

export type ContactFormClientValues = z.infer<typeof contactFormClientSchema>;

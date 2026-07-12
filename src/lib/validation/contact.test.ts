import { describe, expect, it } from "vitest";
import { contactFormSchema, contactFormClientSchema } from "./contact";

const validPayload = {
  name: "Asha Verma",
  email: "asha@example.com",
  phone: "+91 98765 43210",
  company: "Verma Labs",
  service: "Trademark" as const,
  preferredContactMethod: "Email" as const,
  message: "I need help registering a trademark for my new product line.",
  consent: true as const,
  website: "",
};

describe("contactFormSchema", () => {
  it("accepts a valid submission", () => {
    const result = contactFormSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects a name that is too short", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, name: "A" });
    expect(result.success).toBe(false);
  });

  it("rejects a message that is too short", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, message: "Hi" });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid service option", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, service: "Not A Real Service" });
    expect(result.success).toBe(false);
  });

  it("rejects submissions without consent", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, consent: false });
    expect(result.success).toBe(false);
  });

  it("rejects a filled honeypot field", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, website: "http://spam.example" });
    expect(result.success).toBe(false);
  });

  it("rejects a phone number with letters", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, phone: "call-me-maybe" });
    expect(result.success).toBe(false);
  });
});

describe("contactFormClientSchema", () => {
  it("does not require honeypot/UTM fields from the client", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { website, ...clientPayload } = validPayload;
    const result = contactFormClientSchema.safeParse(clientPayload);
    expect(result.success).toBe(true);
  });
});

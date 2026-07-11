import { describe, expect, it } from "vitest";
import { allServices, ipServices, businessRegistrationServices } from "./index";

describe("service content integrity", () => {
  it("has unique slugs across all services", () => {
    const slugs = allServices.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("gives every service at least one FAQ", () => {
    for (const service of allServices) {
      expect(service.faqs.length).toBeGreaterThan(0);
    }
  });

  it("gives every service at least one process step", () => {
    for (const service of allServices) {
      expect(service.process.length).toBeGreaterThan(0);
    }
  });

  it("has 5 intellectual property services and 7 business registration services", () => {
    expect(ipServices).toHaveLength(5);
    expect(businessRegistrationServices).toHaveLength(7);
  });
});

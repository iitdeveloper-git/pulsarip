import { describe, expect, it } from "vitest";
import { buildMetadata } from "./metadata";

describe("buildMetadata", () => {
  it("appends the site name to non-home page titles", () => {
    const metadata = buildMetadata({ title: "About", description: "About us", path: "/about" });
    expect(metadata.title).toBe("About | PulsarIP");
  });

  it("does not append the site name to the home page title", () => {
    const metadata = buildMetadata({ title: "PulsarIP — Home", description: "Home", path: "/" });
    expect(metadata.title).toBe("PulsarIP — Home");
  });

  it("marks noIndex pages as not indexable", () => {
    const metadata = buildMetadata({ title: "Thank You", description: "Thanks", path: "/thank-you", noIndex: true });
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });

  it("defaults indexable pages to index and follow", () => {
    const metadata = buildMetadata({ title: "Services", description: "Our services", path: "/services" });
    expect(metadata.robots).toEqual({ index: true, follow: true });
  });

  it("builds a canonical URL from the path", () => {
    const metadata = buildMetadata({ title: "Contact", description: "Contact us", path: "/contact" });
    expect(metadata.alternates?.canonical).toBe("https://pulsarip.com/contact");
  });
});

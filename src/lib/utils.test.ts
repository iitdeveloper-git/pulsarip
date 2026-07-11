import { describe, expect, it } from "vitest";
import { cn, absoluteUrl } from "./utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("px-2", "py-3")).toBe("px-2 py-3");
  });

  it("resolves Tailwind conflicts, keeping the last one", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  it("drops falsy values", () => {
    expect(cn("px-2", false, undefined, null, "py-3")).toBe("px-2 py-3");
  });
});

describe("absoluteUrl", () => {
  it("builds an absolute URL from a relative path and base", () => {
    expect(absoluteUrl("/contact", "https://pulsarip.com")).toBe("https://pulsarip.com/contact");
  });
});

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FaqAccordion } from "./faq-accordion";

const items = [
  { question: "What is a trademark?", answer: "A trademark identifies and distinguishes goods or services." },
  { question: "How long does registration take?", answer: "It depends on the Registry and whether objections are raised." },
];

describe("FaqAccordion", () => {
  it("opens the first item by default", () => {
    render(<FaqAccordion items={items} />);
    const firstTrigger = screen.getByRole("button", { name: items[0]!.question });
    expect(firstTrigger).toHaveAttribute("aria-expanded", "true");
  });

  it("toggles a panel open and closed on click", async () => {
    const user = userEvent.setup();
    render(<FaqAccordion items={items} />);

    const secondTrigger = screen.getByRole("button", { name: items[1]!.question });
    expect(secondTrigger).toHaveAttribute("aria-expanded", "false");

    await user.click(secondTrigger);
    expect(secondTrigger).toHaveAttribute("aria-expanded", "true");

    await user.click(secondTrigger);
    expect(secondTrigger).toHaveAttribute("aria-expanded", "false");
  });
});

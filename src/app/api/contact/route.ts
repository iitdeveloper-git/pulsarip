import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { getMailProvider } from "@/lib/mail/provider";
import { isRateLimited } from "@/lib/security/rate-limit";

export const runtime = "nodejs";

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json({ ok: false, message: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ ok: false, message: "Please check the form and try again." }, { status: 400 });
    }

    const data = parsed.data;

    // Honeypot triggered — silently accept without sending, to avoid tipping off bots.
    if (data.website) {
      return NextResponse.json({ ok: true });
    }

    // Basic bot heuristic: form submitted implausibly fast after load.
    if (data.formLoadedAt && Date.now() - data.formLoadedAt < 2000) {
      return NextResponse.json({ ok: true });
    }

    const mailProvider = getMailProvider();
    await mailProvider.sendContactNotification(data);
    await mailProvider.sendAcknowledgement(data).catch((err) => {
      console.error("[contact] Failed to send acknowledgement email", err instanceof Error ? err.message : err);
    });

    const webhookPromises: Promise<void>[] = [];

    if (process.env.CONTACT_FORM_WEBHOOK_URL) {
      console.log("[contact] Sending request to general webhook...");
      webhookPromises.push(
        fetch(process.env.CONTACT_FORM_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
        })
          .then((res) => {
            console.log(`[contact] General webhook completed with status: ${res.status}`);
          })
          .catch((err) => {
            console.error("[contact] Webhook delivery failed", err instanceof Error ? err.message : err);
          })
      );
    }

    // Send submission data to Google Sheet via webhook (if configured)
    if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
      console.log("[contact] Sending request to Google Sheets webhook...");
      webhookPromises.push(
        fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            submittedAt: new Date().toISOString(),
            ...data,
          }),
        })
          .then(async (res) => {
            console.log(`[contact] Google Sheet webhook completed with status: ${res.status}`);
            if (!res.ok) {
              const bodyText = await res.text().catch(() => "");
              console.error(`[contact] Google Sheet webhook error details: ${bodyText}`);
            }
          })
          .catch((err) => {
            console.error("[contact] Google Sheet webhook failed", err instanceof Error ? err.message : err);
          })
      );
    }

    if (webhookPromises.length > 0) {
      await Promise.allSettled(webhookPromises);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Unexpected error", error instanceof Error ? error.message : error);
    return NextResponse.json({ ok: false, message: "Something went wrong. Please try again shortly." }, { status: 500 });
  }
}

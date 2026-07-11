import type { ContactFormValues } from "@/lib/validation/contact";

export interface MailProvider {
  sendContactNotification(data: ContactFormValues): Promise<void>;
  sendAcknowledgement(data: ContactFormValues): Promise<void>;
}

/**
 * Logs submissions to the server console instead of sending real email.
 * Used automatically whenever SMTP_HOST is not configured, so local
 * development and unconfigured deployments never silently fail.
 */
class ConsoleMailProvider implements MailProvider {
  async sendContactNotification(data: ContactFormValues) {
    console.info("[mail:dev] New consultation request", {
      name: data.name,
      email: data.email,
      service: data.service,
      preferredContactMethod: data.preferredContactMethod,
    });
  }

  async sendAcknowledgement(data: ContactFormValues) {
    console.info("[mail:dev] Acknowledgement queued for", data.email);
  }
}

/**
 * Sends via SMTP using credentials from environment variables.
 * Requires the `nodemailer` package to be installed before use in
 * production — see docs/DEPLOYMENT.md for setup instructions.
 */
class SmtpMailProvider implements MailProvider {
  private async getTransport() {
    const nodemailer = await import("nodemailer");
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT ?? 587) === 465,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  private from() {
    const name = process.env.SMTP_FROM_NAME || "PulsarIP";
    const email = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USERNAME;
    return `"${name}" <${email}>`;
  }

  async sendContactNotification(data: ContactFormValues) {
    const transport = await this.getTransport();
    const recipient = process.env.CONTACT_FORM_RECIPIENT || process.env.SMTP_USERNAME;
    await transport.sendMail({
      from: this.from(),
      to: recipient,
      replyTo: data.email,
      subject: `New consultation request — ${data.service}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Company: ${data.company || "-"}`,
        `Service: ${data.service}`,
        `Preferred contact method: ${data.preferredContactMethod}`,
        `Page: ${data.page || "-"}`,
        `UTM source/medium/campaign: ${data.utmSource || "-"} / ${data.utmMedium || "-"} / ${data.utmCampaign || "-"}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
    });
  }

  async sendAcknowledgement(data: ContactFormValues) {
    const transport = await this.getTransport();
    await transport.sendMail({
      from: this.from(),
      to: data.email,
      subject: "We've received your enquiry — PulsarIP",
      text: `Hi ${data.name},\n\nThank you for reaching out to PulsarIP. We've received your enquiry about ${data.service} and a member of our team will contact you shortly.\n\nThis message is an acknowledgement only and does not constitute legal advice.\n\n— Team PulsarIP`,
    });
  }
}

let cachedProvider: MailProvider | null = null;

export function getMailProvider(): MailProvider {
  if (cachedProvider) return cachedProvider;
  cachedProvider = process.env.SMTP_HOST ? new SmtpMailProvider() : new ConsoleMailProvider();
  return cachedProvider;
}

import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY environment variable is not set");
}

export const resend = new Resend(process.env.RESEND_API_KEY);

export const emailConfig = {
  from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
  toOwner: process.env.RESEND_TO_EMAIL || "jerome@example.com",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Jerome Magbanua Portfolio",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://jeromemagbanua.com",
} as const;

import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import * as React from "react";
import { contactFormSchema } from "@/lib/validations/contact";
import { resend, emailConfig } from "@/lib/email/resend";
import { ContactNotificationEmail } from "@/lib/email/templates/contact-notification";
import { ContactConfirmationEmail } from "@/lib/email/templates/contact-confirmation";
import { contactRateLimiter } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") ||
               request.headers.get("x-real-ip") ||
               "anonymous";

    const rateLimitResult = contactRateLimiter.check(ip);

    if (!rateLimitResult.allowed) {
      const resetDate = new Date(rateLimitResult.resetAt).toLocaleTimeString();
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          details: `Rate limit exceeded. Resets at ${resetDate}`
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": "3",
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": rateLimitResult.resetAt.toString(),
          }
        }
      );
    }

    const body = await request.json();
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          fields: validation.error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.data;
    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    });

    const notificationHtml = await render(
      React.createElement(ContactNotificationEmail, { name, email, message, submittedAt })
    );

    const ownerEmailResult = await resend.emails.send({
      from: emailConfig.from,
      to: emailConfig.toOwner,
      subject: `New Contact Form: ${name}`,
      html: notificationHtml,
      replyTo: email,
    });

    if (ownerEmailResult.error) {
      console.error("Failed to send owner notification:", ownerEmailResult.error);
      throw new Error("Failed to send notification email");
    }

    const confirmationHtml = await render(
      React.createElement(ContactConfirmationEmail, {
        name,
        siteName: emailConfig.siteName,
        siteUrl: emailConfig.siteUrl,
      })
    );

    const confirmationEmailResult = await resend.emails.send({
      from: emailConfig.from,
      to: email,
      subject: `Thank you for contacting ${emailConfig.siteName}`,
      html: confirmationHtml,
    });

    if (confirmationEmailResult.error) {
      console.error("Failed to send confirmation email:", confirmationEmailResult.error);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Limit": "3",
          "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
          "X-RateLimit-Reset": rateLimitResult.resetAt.toString(),
        }
      }
    );

  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}

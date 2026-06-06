import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.QUOTE_TO_EMAIL ?? "stressrelieffamilycleaningserv@gmail.com";
const FROM_EMAIL = process.env.QUOTE_FROM_EMAIL ?? "onboarding@resend.dev";

// Fields the quote form and/or contact form may send in addition to the
// required ones. Included in the email only when present.
const optionalFields = ["address", "postal", "homeType", "service", "subject", "message"];
const requiredFields = ["firstName", "lastName", "email", "phone"];
const MAX_FIELD_LENGTH = 5000;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function nonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

// Returns a validation error message, or null if the body is acceptable.
function validate(body: Record<string, unknown>): string | null {
  for (const [key, value] of Object.entries(body)) {
    if (typeof value === "string" && value.length > MAX_FIELD_LENGTH) {
      return `Field too long: ${key}`;
    }
  }
  for (const field of requiredFields) {
    if (!nonEmptyString(body[field])) {
      return `Missing required field: ${field}`;
    }
  }
  const email = (body.email as string).trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Invalid email address";
  }
  return null;
}

function buildRows(body: Record<string, unknown>, email: string): [string, string][] {
  const rows: [string, string][] = [
    ["Name", `${(body.firstName as string).trim()} ${(body.lastName as string).trim()}`],
    ["Email", email],
    ["Phone", (body.phone as string).trim()],
  ];
  for (const field of optionalFields) {
    const value = body[field];
    if (nonEmptyString(value)) {
      const label = field.charAt(0).toUpperCase() + field.slice(1);
      rows.push([label, value.trim()]);
    }
  }
  return rows;
}

async function sendEmail(rows: [string, string][], email: string, apiKey: string) {
  const html = `<h2>New quote request</h2><table cellpadding="6" style="border-collapse:collapse">${rows
    .map(
      ([label, value]) =>
        `<tr><td style="font-weight:bold;vertical-align:top">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`,
    )
    .join("")}</table>`;
  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const name = rows[0][1];

  const resend = new Resend(apiKey);
  return resend.emails.send({
    from: `Stress Relief Bookings <${FROM_EMAIL}>`,
    to: TO_EMAIL,
    replyTo: email,
    subject: `New quote request from ${name}`,
    html,
    text,
  });
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: a hidden `company` field that real users never see or fill.
  // Bots that auto-fill every input get a fake 200 and no email is sent.
  console.log("[quote] company field:", JSON.stringify(body.company));
  if (nonEmptyString(body.company)) {
    console.warn("[quote] Honeypot triggered — dropping submission.");
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 422 });
  }

  const email = (body.email as string).trim().toLowerCase();

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No key configured (e.g. local dev without secrets) — fall back to logging
    // so submissions are never silently dropped.
    console.warn("[quote] RESEND_API_KEY not set; logging request instead of emailing.");
    console.log("[quote] New quote request:", body);
    return NextResponse.json({ success: true }, { status: 200 });
  }

  if (process.env.NODE_ENV === "production" && FROM_EMAIL === "onboarding@resend.dev") {
    console.error(
      "[quote] QUOTE_FROM_EMAIL is still the Resend test sender (onboarding@resend.dev) — " +
        "real customer requests will NOT be delivered. Set a verified-domain sender.",
    );
    return NextResponse.json(
      { error: "Email sender is not configured. Please set a verified QUOTE_FROM_EMAIL." },
      { status: 500 },
    );
  }

  try {
    const { error } = await sendEmail(buildRows(body, email), email, apiKey);
    if (error) {
      console.error("[quote] Resend error:", error);
      return NextResponse.json({ error: "Failed to send your request. Please try again." }, { status: 502 });
    }
  } catch (err) {
    console.error("[quote] Resend threw:", err);
    return NextResponse.json({ error: "Failed to send your request. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

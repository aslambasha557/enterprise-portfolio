import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiter (3 requests per IP every 15 minutes)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export async function POST(req: Request) {
  try {
    // 1. Extract IP address & check rate limit
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
    const now = Date.now();
    const WINDOW_MS = 15 * 60 * 1000; // 15-minute window
    const MAX_REQUESTS = 3;

    const limitData = rateLimitMap.get(ip) || { count: 0, lastReset: now };

    if (now - limitData.lastReset > WINDOW_MS) {
      limitData.count = 0;
      limitData.lastReset = now;
    }

    if (limitData.count >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: "Too many messages sent. Please wait 15 minutes before trying again." },
        { status: 429 }
      );
    }

    limitData.count++;
    rateLimitMap.set(ip, limitData);

    // 2. Parse request body
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // 3. Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 4. Send Email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECIPIENT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject || "New Inquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #18181b; max-width: 600px;">
          <h2 style="color: #2563eb; margin-bottom: 16px;">New Portfolio Inquiry</h2>
          <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Work Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject || "N/A"}</p>
          <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 20px 0;" />
          <p style="margin-bottom: 8px;"><strong>Project Brief:</strong></p>
          <div style="background: #f4f4f5; padding: 16px; border-radius: 8px; font-family: monospace; white-space: pre-wrap;">
            ${message}
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("SMTP Delivery Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // 1. Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 2. Configure Email Options
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Shows submitter's name
      replyTo: email, // Direct reply goes to visitor's email
      to: process.env.CONTACT_RECIPIENT_EMAIL || process.env.SMTP_USER,
      subject: subject ? `[Portfolio] ${subject}` : `New Lead from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0070f3;">New Portfolio Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Work Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <h3>Project Brief:</h3>
          <p style="background: #f4f5f7; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    // 3. Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });

  } catch (error: any) {
    console.error('SMTP Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send email via SMTP.' },
      { status: 500 }
    );
  }
}
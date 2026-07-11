import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = (process.env.EMAIL_PASS || "").replace(/\s+/g, "");
// const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || EMAIL_USER;
const IS_PROD = process.env.NODE_ENV === "production";

app.use(cors());
app.use(express.json({ limit: "1mb" }));

const isEmail = (value = "") => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

// Basic HTML escaping so submitted content can't break the email markup
const escapeHtml = (str = "") =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

let transporter = null;

const createTransporter = () => {
  if (!EMAIL_USER || !EMAIL_PASS) return null;

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });
};

transporter = createTransporter();

if (transporter) {
  transporter
    .verify()
    .then(() => console.log("SMTP is ready."))
    .catch((error) =>
      console.error("SMTP verify failed:", error?.message || error),
    );
} else {
  console.error(
    "SMTP is not configured. Please set EMAIL_USER and EMAIL_PASS in .env",
  );
}

// Builds a responsive HTML email that renders well in Gmail (desktop + mobile app)
const buildEmailHtml = ({ name, email, subject, message, timestamp }) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin:0; padding:0; background-color:#f1f5f9; font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9; padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; background-color:#ffffff; border:1px solid #e2e8f0; border-radius:12px; overflow:hidden;">
            <tr>
              <td style="background-color:#0e7490; padding:20px 24px;">
                <p style="margin:0; color:#ffffff; font-size:12px; letter-spacing:1px; text-transform:uppercase; opacity:0.85;">Portfolio Contact Form</p>
                <h1 style="margin:6px 0 0; color:#ffffff; font-size:20px; font-weight:700;">New Message from ${escapeHtml(name)}</h1>
              </td>
            </tr>

            <tr>
              <td style="padding:24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                  <tr>
                    <td style="padding:8px 0; border-bottom:1px solid #e2e8f0; font-size:13px; color:#64748b; width:110px;">Name</td>
                    <td style="padding:8px 0; border-bottom:1px solid #e2e8f0; font-size:14px; color:#0f172a; font-weight:600;">${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0; border-bottom:1px solid #e2e8f0; font-size:13px; color:#64748b;">Email</td>
                    <td style="padding:8px 0; border-bottom:1px solid #e2e8f0; font-size:14px;">
                      <a href="mailto:${escapeHtml(email)}" style="color:#0e7490; text-decoration:none; font-weight:600;">${escapeHtml(email)}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0; border-bottom:1px solid #e2e8f0; font-size:13px; color:#64748b;">Subject</td>
                    <td style="padding:8px 0; border-bottom:1px solid #e2e8f0; font-size:14px; color:#0f172a;">${escapeHtml(subject || "No subject")}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0; font-size:13px; color:#64748b;">Sent</td>
                    <td style="padding:8px 0; font-size:14px; color:#0f172a;">${escapeHtml(timestamp)}</td>
                  </tr>
                </table>

                <p style="margin:0 0 8px; font-size:13px; color:#64748b; text-transform:uppercase; letter-spacing:0.5px;">Message</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:16px; font-size:14px; line-height:1.6; color:#334155; white-space:pre-wrap;">${escapeHtml(message)}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:16px 24px; background-color:#f8fafc; border-top:1px solid #e2e8f0;">
                <p style="margin:0; font-size:12px; color:#94a3b8;">This message was sent from your portfolio contact form. Reply directly to this email to respond to ${escapeHtml(name)}.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

const sendEmailHandler = async (req, res) => {
  try {
    // Only these 4 fields are ever read from the request body.
    const { user_name, user_email, subject = "", message } = req.body || {};

    const name = (user_name || "").trim();
    const email = (user_email || "").trim();
    const msg = (message || "").trim();

    if (!name || !email || !msg) {
      return res.status(400).json({
        error: "Name, email, and message are required.",
      });
    }

    if (!isEmail(email)) {
      return res.status(400).json({
        error: "Please provide a valid email address.",
      });
    }

    if (!transporter) {
      return res.status(500).json({
        error: "Server email is not configured.",
      });
    }

    const timestamp = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const mailSubject = subject.trim()
      ? `New Contact Form Message from ${name}: ${subject.trim()}`
      : `New Contact Form Message from ${name}`;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: mailSubject,
      text: [
        "New message from portfolio contact form",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject.trim() || "No subject"}`,
        "",
        `Message:\n${msg}`,
        "",
        `Time: ${timestamp}`,
      ].join("\n"),
      html: buildEmailHtml({ name, email, subject, message: msg, timestamp }),
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Send email failed:", error);
    return res.status(500).json({
      error: "Failed to send message. Please try again later.",
      details: IS_PROD ? undefined : error?.message,
    });
  }
};

app.get("/api/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.post("/api/send-email", sendEmailHandler);
app.post("/send-email", sendEmailHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Recipient email: ${RECIPIENT_EMAIL}`);
});

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = (process.env.EMAIL_PASS || "").replace(/\s+/g, "");
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "visethsoheach@gamil.com";
const IS_PROD = process.env.NODE_ENV === "production";

app.use(cors());
app.use(express.json({ limit: "1mb" }));

const isEmail = (value = "") => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

let transporter = null;

const createTransporter = () => {
  if (!EMAIL_USER || !EMAIL_PASS) {
    return null;
  }

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
    .then(() => {
      console.log("SMTP is ready.");
    })
    .catch((error) => {
      console.error("SMTP verify failed:", error?.message || error);
    });
} else {
  console.error("SMTP is not configured. Please set EMAIL_USER and EMAIL_PASS in .env");
}

const sendEmailHandler = async (req, res) => {
  try {
    const {
      user_name,
      user_email,
      subject = "",
      message,
      device_info = "Not shared",
      location_info = "Not shared",
      timestamp = new Date().toLocaleString(),
    } = req.body || {};

    if (!user_name?.trim() || !user_email?.trim() || !message?.trim()) {
      return res.status(400).json({
        error: "Name, email, and message are required.",
      });
    }

    if (!isEmail(user_email)) {
      return res.status(400).json({
        error: "Please provide a valid email address.",
      });
    }

    if (!transporter) {
      return res.status(500).json({
        error: "Server email is not configured.",
      });
    }

    const mailSubject = subject.trim() || "New Contact Message";

    await transporter.sendMail({
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: user_email.trim(),
      subject: mailSubject,
      text: [
        "New message from portfolio contact form",
        "",
        `Name: ${user_name}`,
        `Email: ${user_email}`,
        `Subject: ${mailSubject}`,
        "",
        `Message:\n${message}`,
        "",
        `Device: ${device_info}`,
        `Location: ${location_info}`,
        `Time: ${timestamp}`,
      ].join("\n"),
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Send email failed:", error);
    return res.status(500).json({
      error: "Failed to send message.",
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

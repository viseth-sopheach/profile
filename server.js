const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER;

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  try {
    const {
      user_name,
      user_email,
      subject,
      message,
      device_info = "Not shared",
      location_info = "Not shared",
      timestamp = new Date().toLocaleString(),
    } = req.body;

    if (!user_name || !user_email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required.",
      });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res.status(500).json({
        error: "Email credentials are not configured on the server.",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: RECIPIENT_EMAIL,
      replyTo: user_email,
      subject: subject || "New Message",
      text: `
Name: ${user_name}
Email: ${user_email}
Subject: ${subject || "N/A"}
Message: ${message}

Device: ${device_info}
Location: ${location_info}
Time: ${timestamp}
      `,
    });

    return res.status(200).json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

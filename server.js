// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import nodemailer from "nodemailer";

// const PORT = process.env.PORT || 5001;

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// app.post("/send-email", async (req, res) => {
//   const {
//     user_name,
//     user_email,
//     subject,
//     message,
//     device_info,
//     location_info,
//     timestamp,
//   } = req.body;

//   try {
//     await transporter.sendMail({
//       from: `"${user_name}" <${user_email}>`,
//       to: process.env.EMAIL_USER,
//       subject: subject || "New Contact Message",
//       html: `
//         <h2>New Message from Portfolio</h2>
//         <p><strong>Name:</strong> ${user_name}</p>
//         <p><strong>Email:</strong> ${user_email}</p>
//         <p><strong>Subject:</strong> ${subject}</p>
//         <p><strong>Message:</strong> ${message}</p>
//         <hr/>
//         <p><strong>Device:</strong> ${device_info}</p>
//         <p><strong>Location:</strong> ${location_info}</p>
//         <p><strong>Time:</strong> ${timestamp}</p>
//       `,
//     });

//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to send email" });
//   }
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// server.js
// server.js
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  console.log('→ POST /send-email received');
  console.log('Body:', req.body);                    // ← see what frontend sent
  console.log('EMAIL_USER:', process.env.EMAIL_USER); // ← check if loaded
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***exists***' : 'MISSING');
  console.log('RECIPIENT_EMAIL:', process.env.RECIPIENT_EMAIL);

  const { user_name, user_email, subject, message, device_info, location_info, timestamp } = req.body;

  try {
    // ... rest of your code ...
  } catch (error) {
    console.error('FULL ERROR IN /send-email:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ 
      message: 'Failed to send email', 
      error: error.message 
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
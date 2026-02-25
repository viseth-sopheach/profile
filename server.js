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

//================


const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  try {
    const { user_name, user_email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "visethsopheach@gmail.com",
      subject: subject || "New Message",
      text: `
Name: ${user_name}
Email: ${user_email}
Message: ${message}
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

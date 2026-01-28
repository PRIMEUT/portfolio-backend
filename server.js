const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express(); // ✅ Initialize app FIRST

app.use(cors());
app.use(express.json());

/* Health Check */
app.get("/", (req, res) => {
  res.send("Backend is running 😎");
});

/* Contact Form Route */
app.post("/send", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: "Portfolio Contact",
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
`
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
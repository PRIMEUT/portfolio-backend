const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send", async (req,res)=>{

    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: "optimus15m@gmail.com",
            pass: "pnnjkr3in9@A"
        }
    });

    await transporter.sendMail({
        from: email,
        to: "optimus15m@gmail.com",
        subject: "Portfolio Message",
        text: `
Name: ${name}
Email: ${email}
Message: ${message}
        `
    });

    res.json({ success:true });
});

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});
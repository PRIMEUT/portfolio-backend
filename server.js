app.get("/", (req, res) => {
    res.send("Server is running");
});


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
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`);
});
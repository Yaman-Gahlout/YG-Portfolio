import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import sendContactEmail from "./mail.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://yg-portfolio.onrender.com",
    credentials: true,
  }),
);
app.use(cookieParser());

app.post("/send-email", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Send email
    await sendContactEmail(name, email, subject, message);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Send Email Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
});

app.listen(process.env.PORT || 9000, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});

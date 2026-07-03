import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // app password
  },
});

const sendContactEmail = async (name, email, subject, message) => {
  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Your email address
      subject: `📩 Portfolio Contact: ${subject}`,

      html: `
      <div style="max-width:650px;margin:auto;font-family:Arial,sans-serif;background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">

        <!-- Header -->
        <div style="background:#2563eb;padding:25px;text-align:center;">
          <h1 style="margin:0;color:white;">📩 New Portfolio Message</h1>
        </div>

        <!-- Body -->
        <div style="padding:35px;">

          <p style="font-size:16px;color:#374151;">
            Someone has contacted you through your portfolio website.
          </p>

          <table style="width:100%;border-collapse:collapse;margin-top:20px;">

            <tr>
              <td style="padding:12px;font-weight:bold;background:#f3f4f6;width:130px;">
                Name
              </td>

              <td style="padding:12px;border-bottom:1px solid #e5e7eb;">
                ${name}
              </td>
            </tr>

            <tr>
              <td style="padding:12px;font-weight:bold;background:#f3f4f6;">
                Email
              </td>

              <td style="padding:12px;border-bottom:1px solid #e5e7eb;">
                ${email}
              </td>
            </tr>

            <tr>
              <td style="padding:12px;font-weight:bold;background:#f3f4f6;">
                Subject
              </td>

              <td style="padding:12px;border-bottom:1px solid #e5e7eb;">
                ${subject}
              </td>
            </tr>

          </table>

          <h3 style="margin-top:35px;color:#1f2937;">
            Message
          </h3>

          <div style="background:#f9fafb;border-left:4px solid #2563eb;padding:20px;border-radius:6px;color:#374151;line-height:1.8;">
            ${message.replace(/\n/g, "<br>")}
          </div>

          <p style="margin-top:35px;font-size:15px;color:#6b7280;">
            You can reply directly to this email. The reply will be sent to
            <strong>${email}</strong>.
          </p>

        </div>

        <!-- Footer -->
        <div style="background:#f3f4f6;padding:18px;text-align:center;font-size:13px;color:#6b7280;">
          This email was sent automatically from your Portfolio Contact Form.
          <br><br>
          © ${new Date().getFullYear()} Yaman Gahlout. All Rights Reserved.
        </div>

      </div>
      `,
    });

    console.log("Contact Email Sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Email Error:", error);
    throw error;
  }
};

export default sendContactEmail;

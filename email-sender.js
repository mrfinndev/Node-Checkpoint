import "dotenv/config";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    user: "iamyoungfinn@gmail.com",
    pass: process.env.GMAIL_AUTH_PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "mrfinntechnology@gmail.com", // sender address
    to: "uyoyo2003@gmail.com, uyoyo2003@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    html: "<b>Big Man?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);

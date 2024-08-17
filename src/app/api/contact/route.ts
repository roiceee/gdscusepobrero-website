import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  //i use google
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.CONTACT_EMAIL,
    pass: process.env.CONTACT_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  const res = await req.json();

  if (!res.name || !res.email || !res.message || !res.recaptcha) {
    return NextResponse.json(
      { message: "Please fill up all fields." },
      { status: 400 }
    );
  }

  if (res.recaptcha === "") {
    return NextResponse.json(
      { message: "Please complete the reCAPTCHA." },
      { status: 400 }
    );
  }

  //dont send to email first, just console log

  //verify recaptcha

  const recaptchaRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${res.recaptcha}`,
    { method: "POST" }
  );

  const recaptchaData = await recaptchaRes.json();

  if (!recaptchaData.success) {
    return NextResponse.json(
      { message: "Failed to verify reCAPTCHA." },
      { status: 400 }
    );
  }

  //send to our organization website
  const org = await transporter.sendMail({
    from: process.env.CONTACT_EMAIL,
    to: "gdsc@usep.edu.ph",
    subject: "WEBSITE CONTACT FORM | Message from " + res.email,
    text: `Name: ${res.name}\nEmail: ${res.email}\nMessage: ${res.message}`,
  });

  if (!org.accepted) {
    return NextResponse.json(
      { message: "Failed to send message to the server." },
      { status: 500 }
    );
  }

  //send to user
  const user = await transporter.sendMail({
    from: process.env.CONTACT_EMAIL,
    to: res.email,
    subject: "Thank you for contacting GDSC USeP Obrero!",
    text: `Hello ${res.name},\n\nThank you for contacting GDSC USeP Obrero! We have received your message and we will get back to you as soon as possible.\n\nBest regards,\nGoogle Developer Student Clubs USeP Obrero`,
  });

  //check if email was sent
  if (!user.accepted) {
    return NextResponse.json(
      { message: "Failed to send message to your email." },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Message Sent" }, { status: 200 });
}

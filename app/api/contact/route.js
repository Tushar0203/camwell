import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Format the services list
    const servicesList =
      data.services.length > 0 ? data.services.join(", ") : "None selected";

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: data.message.includes('quote') 
        ? "New Quote Request from Camwell Website" 
        : "New Message from Camwell Contact Form",
      html: `
        <h2>${data.message.includes('quote') ? 'New Quote Request! 💼' : 'You\'ve received a new message! 🎉'}</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phoneCode} ${data.phoneNumber}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <p><strong>Services Interested In:</strong></p>
        <p>${servicesList}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: "Form submitted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      {
        error: "Error submitting form",
      },
      { status: 500 }
    );
  }
}

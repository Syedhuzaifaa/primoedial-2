"use server"

import nodemailer from "nodemailer"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const service = formData.get("Service") as string
  const description = formData.get("description") as string

  if (!name || !description || !service) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  try {
    // Set up transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your App Password (NOT your Gmail password!)
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "huzaifa.syed.huzaifa@gmail.com",
      subject: `New Consultation Request from ${name}`,
      html: `
        <h3>New Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Description:</strong><br/>${description}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: "Thank you for your interest! We will get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}

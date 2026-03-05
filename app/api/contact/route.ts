import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    let { name, email, subject, message } = body

    name = name?.trim()
    email = email?.trim().toLowerCase()
    subject = subject?.trim()
    message = message?.trim()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // 🔥 Send Email Using Resend
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // change later to your domain
      to: "abrahamalejolowo@gmail.com",
      subject: `New Contact: ${subject}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Resend error:", error)

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
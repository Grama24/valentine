import { Resend } from "resend"

const resend = new Resend("re_4CVWvKLN_7CT23k61tGffsAhvNhWzvDYc")

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Andrei <onboarding@resend.dev>", // Replace with your verified sender
      to: ["andralcarimioara3@gmail.com"], // Replace with Ada's actual email
      subject: "Our Romantic Valentine's Dinner",
      html: `
        <h1>My Dearest Pookie,</h1>
        <p>I'm so happy you said yes to being my Valentine! To celebrate, I've planned a special evening for us.</p>
        <h2>Reservation Details:</h2>
        <ul>
          <li><strong>Restaurant:</strong> Ave Forchetta</li>
          <li><strong>Address:</strong> "Nu te intereseaza conduce Pookster orium"</li>
          <li><strong>Date:</strong> Valentine's Day</li>
          <li><strong>Time:</strong> 21:30</li>
        </ul>
        <p>I can't wait to spend this special evening with you. You mean the world to me, and I'm looking forward to creating more beautiful memories together.</p>
        <p>With all my love,</p>
        <p>Andrei</p>
      `,
    })

    console.log("Email sent successfully:", data)
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error sending email:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    return new Response(JSON.stringify({ error: "Failed to send email", details: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}


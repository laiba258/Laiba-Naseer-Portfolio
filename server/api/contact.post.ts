import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { name, email, subject, message } = await readBody(event)

  if (!name || !email || !message)
    throw createError({ statusCode: 400, statusMessage: 'Name, email and message are required.' })

  if (!email.includes('@'))
    throw createError({ statusCode: 400, statusMessage: 'Invalid email address.' })

  if (!config.resendApiKey)
    throw createError({ statusCode: 500, statusMessage: 'Email service not configured. Add RESEND_API_KEY to your environment.' })

  const resend = new Resend(config.resendApiKey)

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: [config.contactEmail],
    replyTo: email,
    subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
        <h2 style="color:#7c3aed;margin-bottom:4px;">New message from your portfolio</h2>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0;color:#6b7280;font-size:13px;width:80px;">Name</td>
            <td style="padding:8px 0;color:#111827;font-weight:600;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b7280;font-size:13px;">Email</td>
            <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#7c3aed;">${email}</a></td>
          </tr>
          ${subject ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Subject</td><td style="padding:8px 0;color:#111827;">${subject}</td></tr>` : ''}
        </table>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
        <p style="color:#374151;line-height:1.7;white-space:pre-wrap;">${message}</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
        <p style="color:#9ca3af;font-size:12px;">Reply directly to this email to respond to ${name}.</p>
      </div>
    `,
  })

  if (error)
    throw createError({ statusCode: 500, statusMessage: 'Failed to send email. Please try again.' })

  return { success: true }
})

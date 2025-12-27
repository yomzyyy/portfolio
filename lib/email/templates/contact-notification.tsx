import * as React from "react";

interface ContactNotificationEmailProps {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
}

export const ContactNotificationEmail: React.FC<ContactNotificationEmailProps> = ({
  name,
  email,
  message,
  submittedAt,
}) => (
  <html>
    <head>
      <style>{`
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
        .info-box { background: white; border-left: 4px solid #667eea; padding: 15px; margin: 15px 0; border-radius: 4px; }
        .label { font-weight: 600; color: #667eea; margin-bottom: 5px; }
        .value { color: #1f2937; word-break: break-word; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #6b7280; }
      `}</style>
    </head>
    <body>
      <div className="container">
        <div className="header">
          <h1 style={{ margin: 0, fontSize: '24px' }}>New Contact Form Submission</h1>
        </div>
        <div className="content">
          <p style={{ fontSize: '16px', marginTop: 0 }}>You have received a new message from your portfolio contact form.</p>

          <div className="info-box">
            <div className="label">From:</div>
            <div className="value">{name}</div>
          </div>

          <div className="info-box">
            <div className="label">Email:</div>
            <div className="value"><a href={`mailto:${email}`} style={{ color: '#667eea' }}>{email}</a></div>
          </div>

          <div className="info-box">
            <div className="label">Message:</div>
            <div className="value" style={{ whiteSpace: 'pre-wrap' }}>{message}</div>
          </div>

          <div className="info-box">
            <div className="label">Submitted at:</div>
            <div className="value">{submittedAt}</div>
          </div>

          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <a
              href={`mailto:${email}?subject=Re: Your inquiry`}
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                background: '#667eea',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: '600',
              }}
            >
              Reply to {name}
            </a>
          </div>
        </div>
        <div className="footer">
          <p>This email was sent from your portfolio contact form.</p>
        </div>
      </div>
    </body>
  </html>
);

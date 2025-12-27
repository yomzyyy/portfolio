import * as React from "react";

interface ContactConfirmationEmailProps {
  name: string;
  siteName: string;
  siteUrl: string;
}

export const ContactConfirmationEmail: React.FC<ContactConfirmationEmailProps> = ({
  name,
  siteName,
  siteUrl,
}) => (
  <html>
    <head>
      <style>{`
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
        .highlight { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #6b7280; }
      `}</style>
    </head>
    <body>
      <div className="container">
        <div className="header">
          <h1 style={{ margin: 0, fontSize: '24px' }}>Thank You for Reaching Out!</h1>
        </div>
        <div className="content">
          <p style={{ fontSize: '16px', marginTop: 0 }}>Hi {name},</p>

          <p>Thank you for contacting me through my portfolio. I've received your message and will get back to you as soon as possible, typically within 24-48 hours.</p>

          <div className="highlight">
            <p style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#667eea' }}>Your message has been successfully delivered!</p>
          </div>

          <p>In the meantime, feel free to explore my portfolio and recent projects:</p>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <a
              href={siteUrl}
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
              Visit My Portfolio
            </a>
          </div>

          <p style={{ marginTop: '30px' }}>Best regards,<br/><strong>Ernest Jerome M. Magbanua</strong><br/>Full-Stack Developer</p>
        </div>
        <div className="footer">
          <p>This is an automated confirmation email. Please do not reply to this message.</p>
          <p>&copy; 2025 {siteName}. All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>
);

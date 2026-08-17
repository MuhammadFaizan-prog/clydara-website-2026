export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page" style={{ padding: '130px 0 100px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(44px, 7vw, 80px)',
              lineHeight: 1.1,
              letterSpacing: '-2px',
              marginBottom: '20px',
            }}
          >
            We Value <br />
            <span className="text-accent">Your Privacy</span> <br />
            Above All
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              lineHeight: '28px',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Your trust matters. This policy explains what data we collect, why we collect it, and how we keep it safe.
          </p>
        </div>

        {/* Content Box */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '32px',
            padding: '56px 48px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.05)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            lineHeight: '28px',
            color: 'var(--color-text-secondary)',
          }}
        >
          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
              Information We Collect
            </h2>
            <p style={{ marginBottom: '16px' }}>
              We collect only the information necessary to provide you with the best service experience. This include details you share with us voluntarily such as your name, email, phone number, and project-related information — as well as limited technical data like your IP address and browsing activity collected through cookies for analytics purposes.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '4px' }}>
              <li>→ Basic contact info (name, email, phone) when you reach out</li>
              <li>→ Project details you share during collaboration</li>
              <li>→ Website usage data (cookies, IP address, browser type) for analytics</li>
            </ul>
          </section>

          <section>
            <span style={{ fontSize: '13px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '8px' }}>
              Last Updated: 30th May 2025
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
              How We Use Your Information
            </h2>
            <p>
              The information we collect is used strictly to improve your experience with our agency. We use your contact details to respond to inquiries follow up on project discussions, share proposals or invoices, and deliver services effectively. Internally, we may analyze anonymized user behavior to enhance our website’s performance and usability. You won’t receive marketing emails from us unless you explicitly opt in, and we never sell or trade your personal information to outside parties.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
              Cookies Technologies
            </h2>
            <p>
              Cookies are small files stored on your device that help us understand how you interact with our website. We use them to analyze measure traffic, and tailor your browsing experience. These cookies may track metrics like time spent on pages, click-through paths, or device type. While cookies are helpful, we understand your right to privacy — you can choose to disable or manage them through your browser settings.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
              Third-Party Services
            </h2>
            <p style={{ marginBottom: '16px' }}>
              To operate efficiently and deliver the best service possible, we occasionally use third-party tools such as Google Analytics cloud-based on project management platforms, email service providers, and secure payment gateways.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '4px' }}>
              <li>→ Google Analytics (for website insights)</li>
              <li>→ Payment processors (for invoicing)</li>
              <li>→ Cloud platforms (for project collaboration)</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
              Your Rights
            </h2>
            <p>
              Your data belongs to you, and you have full control over it. If you’d like to review the personal information we have on file, correct outdated or inaccurate details, or request deletions of your data, just reach out to us at <strong style={{ color: 'var(--color-accent)' }}>info@clydara.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

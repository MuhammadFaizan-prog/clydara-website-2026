export default function TermsPage() {
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
            Our Terms <br />
            <span className="text-accent">And Conditions</span> <br />
            Explained
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
            These outline how we operate, what you can expect from us. It’s all about keeping things transparent, and respectful.
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
              Terms of Services
            </h2>
            <p style={{ marginBottom: '16px' }}>
              We provide a range of creative services, which may include but are not limited to branding, logo design, web design, strategy, digital assets and consultation. The exact scopes, deliverables, and timeline of each project will be clearly outlined in a project proposal, estimates, or agreement before any work begins.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '4px' }}>
              <li>→ Brand identity and logo design</li>
              <li>→ Web design and development</li>
              <li>→ Print and packaging</li>
              <li>→ Social media content creation</li>
            </ul>
          </section>

          <section>
            <span style={{ fontSize: '13px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '8px' }}>
              Last Updated: 30th May 2025
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
              Payments and Invoicing
            </h2>
            <p>
              We operate with transparency and fairness when it comes to payments. Most projects require a non-refundable advance payment typically 30% to 50%—before we begin. The remaining balance is due upon final delivery of assets or completion of the project. For larger or long term projects, milestone-based payments may be set up and included in the proposal. Payments are accepted via UPI, bank transfer, and other agreed methods.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
              Cancellation and Termination
            </h2>
            <p style={{ marginBottom: '16px' }}>
              You may cancel a project at any time, but please be aware that the initial deposit is non-refundable. If cancellation happens after work has begun, the client will be invoiced for all work completed up to that point, including research, design time, and any expenses incurred.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '4px' }}>
              <li>→ The deposit remains non-refundable</li>
              <li>→ You will be invoiced for any work completed up to the point of cancellation</li>
              <li>→ You will not have rights to use unfinished or unpaid creative materials</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
              Confidentiality
            </h2>
            <p>
              We understand that during a project, you may share private business information, creative ideas, or strategic materials with us. We treat all such information as confidential and will never disclose it to third parties without your consent. Likewise, we expect you to respect our creative processes and internal methods.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
              Let’s Stay Connected
            </h2>
            <p>
              We believe in open communication and mutual respect. If you have any questions, concerns or need further clarification about these terms don’t hesitate to reach out to us at <strong style={{ color: 'var(--color-accent)' }}>info@clydara.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

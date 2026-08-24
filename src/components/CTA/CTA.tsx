import { RevealHeading } from '../common/RevealHeading'
import { RevealChars } from '../common/RevealChars'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-container">
        <div className="cta-card">
          <p className="cta-eyebrow">(Work With Us)</p>
          <RevealHeading as="h2" className="cta-headline">
            <RevealChars text="Ready to build your next" />{' '}
            <span className="text-accent">
              <RevealChars text="digital breakthrough" />
            </span>
            <RevealChars text="?" />
          </RevealHeading>
          <p className="cta-sub">
            Let's transform your vision into high-impact software, scalable SaaS platforms, and unforgettable brands.
          </p>

          <div className="cta-buttons">
            <a href="https://clydara.framer.website/contact" className="cta-primary-btn">
              Get Started
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="https://wa.link/p0gd9c" target="_blank" rel="noreferrer" className="cta-secondary-btn">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RevealHeading } from '../common/RevealHeading'
import './Pricing.css'

gsap.registerPlugin(ScrollTrigger)

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const card1 = card1Ref.current
      const card2 = card2Ref.current
      const stack = stackRef.current
      if (!card1 || !card2 || !stack) return

      // Card 2 starts translated down (fully hidden below card 1)
      gsap.set(card2, { y: '100%', opacity: 1 })

      // Pin the stack container while card 2 slides up over card 1
      ScrollTrigger.create({
        trigger: stack,
        start: 'top top',
        end: '+=700',
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const p = self.progress
          // Slide card2 from 100% down → 0% (fully visible on top)
          gsap.set(card2, { y: `${(1 - p) * 100}%` })
          // Gently scale down card1 as card2 comes in
          gsap.set(card1, { scale: 1 - p * 0.04, transformOrigin: 'center top' })
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="pricing-section" id="pricing" ref={sectionRef}>
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <p className="pricing-eyebrow">(Work With Us)</p>
          <RevealHeading as="h2" className="pricing-headline" text="Choose Your Digital Solution" />
        </div>

        {/* Stack wrapper — this gets pinned by ScrollTrigger */}
        <div className="pricing-stack-wrapper" ref={stackRef}>

          {/* Card 1: Digital Starter Solution (White Card) — stays underneath */}
          <div className="pricing-card pricing-card-light pricing-card-stacked" ref={card1Ref}>
            <div className="pricing-card-left">
              <div className="pricing-icon-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>

              <RevealHeading as="h3" className="pricing-tier-title text-gold" text="Digital Starter Solution" />
              <h4 className="pricing-tier-sub">Web Design, Development &amp; Creative Solutions</h4>

              <p className="pricing-tier-desc">
                Empowering startups and businesses with modern websites, creative designs, and essential digital solutions to establish a strong online presence.
              </p>

              <p className="pricing-tier-target">
                For Startups, Small Businesses, Restaurants, Cafes, Hotels &amp; Growing Brands
              </p>

              <div className="pricing-timeline-box">
                <span className="timeline-lbl">Project Timeline</span>
                <span className="timeline-val">Based on Scope</span>
              </div>
            </div>

            <div className="pricing-card-right">
              <div className="pricing-cost-area">
                <h3 className="pricing-cost-title">Flexible Pricing</h3>
                <p className="pricing-cost-sub">Customized for every project.</p>
              </div>

              <div className="pricing-divider" />

              <ul className="pricing-features-list">
                <li><span className="check-icon">✓</span><span>Fully Functional Modern Website</span></li>
                <li><span className="check-icon">✓</span><span>Animated &amp; Interactive 3D Web Experiences</span></li>
                <li><span className="check-icon">✓</span><span>SEO Optimized Website Development</span></li>
                <li><span className="check-icon">✓</span><span>also deisgn with Figma, framer, wordpress</span></li>
              </ul>

              <Link to="/contact" className="pricing-btn pricing-btn-dark">
                Contact Us <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Premium Enterprise Package (Dark Card) — slides up over Card 1 */}
          <div className="pricing-card pricing-card-dark pricing-card-stacked pricing-card-overlay" ref={card2Ref}>
            <div
              className="pricing-card-dark-bg"
              style={{ backgroundImage: `url('https://framerusercontent.com/images/fsglg0XtrFPuX7STlnIcSf57BgM.png?width=1672&height=941')` }}
            />
            <div
              className="pricing-card-noise"
              style={{ backgroundImage: `url('https://framerusercontent.com/images/qDuGmDXhhbdrJsP16G4zNCDX8.png?width=1440&height=1840')` }}
            />
            <div className="pricing-card-dark-overlay" />

            <div className="pricing-card-left z-rel">
              <div className="pricing-icon-badge badge-dark">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>

              <RevealHeading as="h3" className="pricing-tier-title text-gold" text="Premium Enterprise Package" />
              <h4 className="pricing-tier-sub text-white">SaaS, AI &amp; Custom Business Solutions</h4>

              <p className="pricing-tier-desc text-light-muted">
                A complete digital transformation solution for companies that need powerful software systems, automation, and scalable technology.
              </p>

              <p className="pricing-tier-target text-light-muted">
                For Enterprises, Corporations, Resorts, Hotels, Pharmacies, Medical Businesses &amp; Organizations
              </p>

              <div className="pricing-timeline-box border-light">
                <span className="timeline-lbl text-light-muted">Project Timeline</span>
                <span className="timeline-val text-white">Based on Scope</span>
              </div>
            </div>

            <div className="pricing-card-right z-rel">
              <div className="pricing-cost-area">
                <h3 className="pricing-discount-tag text-white">50% OFF</h3>
                <h4 className="pricing-offer-tag text-cyan">Limited time offer</h4>
              </div>

              <div className="pricing-divider divider-dark" />

              <ul className="pricing-features-list features-dark">
                <li><span className="check-icon check-dark">✓</span><span>Custom SaaS Applications &amp; Web Apps</span></li>
                <li><span className="check-icon check-dark">✓</span><span>Business Dashboards &amp; CRM Systems</span></li>
                <li><span className="check-icon check-dark">✓</span><span>AI Integration &amp; Automation Solutions</span></li>
                <li><span className="check-icon check-dark">✓</span><span>Industry-Based Management Systems</span></li>
              </ul>

              <Link to="/contact" className="pricing-btn pricing-btn-glow">
                Get Started <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { RevealChars } from '../components/common/RevealChars'
import { RevealHeading } from '../components/common/RevealHeading'
import FAQ from '../components/FAQ/FAQ'
import './ContactPage.css'
import { trackEnquiry } from '../seo/analytics'

const flowerIcon = 'https://framerusercontent.com/images/bPFUMYGmKDGU6pubiY2MFnjtBAk.svg'

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const sendingRef = useRef(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        '.contact-headline-row-1 .reveal-item',
        {
          opacity: 0,
          filter: 'blur(8px)',
          y: 18,
          scale: 0.95,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          scale: 1,
          duration: 0.72,
          stagger: 0.032,
          ease: 'power2.out',
        }
      )
      .fromTo(
        '.contact-headline-row-2 .reveal-item',
        {
          opacity: 0,
          filter: 'blur(10px)',
          y: 20,
          scale: 0.96,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          scale: 1,
          duration: 0.72,
          stagger: 0.032,
          ease: 'power2.out',
        },
        '-=0.45'
      )
      .from('.contact-hero-sub', { opacity: 0, y: 16, duration: 0.65 }, '-=0.3')
      .from('.contact-form-card', { opacity: 0, y: 24, duration: 0.8 }, '-=0.3')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (sendingRef.current) return

    sendingRef.current = true
    setSending(true)
    setError('')

    try {
      const submittedAt = new Date().toLocaleString()
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_6ntqen4',
          template_id: 'template_cvxf8le',
          user_id: '6r6N8V6VRCJrRGRex',
          template_params: {
            name: formData.name,
            email: formData.email,
            message: formData.description,
            description: formData.description,
            from_name: formData.name,
            from_email: formData.email,
            reply_to: formData.email,
            subject: 'Website project enquiry',
            phone: 'Not provided',
            company: 'Not provided',
            service: 'Not specified',
            submitted_at: submittedAt,
            time: submittedAt,
          },
        }),
      })

      if (!response.ok) throw new Error('EmailJS did not accept the message')
      setSubmitted(true)
      trackEnquiry()
    } catch {
      setError('Unable to send your message. Please try again.')
    } finally {
      sendingRef.current = false
      setSending(false)
    }
  }

  return (
    <main className="contact-page">
      {/* Hero Card */}
      <section className="contact-hero-card" ref={heroRef}>
        <div className="contact-hero-container">
          <h1 className="contact-headline-wrap" aria-label="Contact Clydara about your project">
            <span className="contact-headline-row contact-headline-row-1">
              <span className="contact-h1 contact-gray">
                <RevealChars text="Let's Built" />
              </span>
              <span className="hero-pill-anim-wrap reveal-item">
                <span className="hero-pill-img hero-pill-1">
                  <img src="https://framerusercontent.com/images/pK45P6DfJldnMsnh4JlPbVNhpwA.png?width=324&height=256" alt="Build together" />
                </span>
              </span>
              <span className="contact-h1 contact-accent">
                <RevealChars text="Something" />
              </span>
            </span>
            <span className="contact-headline-row contact-headline-row-2">
              <span className="contact-h1 contact-gray">
                <RevealChars text="Together" />
              </span>
              <span className="hero-pill-anim-wrap reveal-item">
                <span className="hero-pill-img hero-pill-2">
                  <img src="https://framerusercontent.com/images/lyJVmEhSRroExh2oHU7e1RKP1bU.png?width=325&height=256" alt="Together" />
                </span>
              </span>
              <span className="contact-h1 contact-dark">
                <RevealChars text="Contact" />
              </span>
            </span>
          </h1>

          <p className="contact-hero-sub">
            Have a project, idea, or challenge? We'd love to hear it. Let's collaborate and bring something meaningful to life.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section" id="contact-form">
        <div className="contact-form-container">
          {/* Watermark text */}
          <div className="contact-watermark">Let's Connect</div>
          
          <div className="contact-form-card">
            {/* Dot pattern overlay */}
            <div className="contact-card-dots"></div>
            {/* Blue arc decoration */}
            <div className="contact-card-arc"></div>

            <div className="contact-form-header">
              <RevealHeading as="h2" className="contact-form-headline" text="Got a project in mind?" />
              <p className="contact-form-sub">
                Let's make something happen together
              </p>
            </div>

            {submitted ? (
              <div className="contact-success-msg">
                <div className="success-icon">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. The Clydara team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your Name"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Enter the Email"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description" className="form-label">Project Description</label>
                  <textarea
                    id="description"
                    required
                    rows={4}
                    placeholder="Type Here..."
                    className="form-textarea"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                {error && <p role="alert" className="form-label">{error}</p>}

                <button type="submit" className="contact-submit-btn" disabled={sending} aria-busy={sending}>
                  {sending ? 'Sending...' : 'Send Now!'}
                </button>
              </form>
            )}

            {/* Email Marquee Ticker inside card */}
            <div className="contact-email-ticker">
              <div className="contact-email-track">
                {[...Array(16)].map((_, i) => (
                  <span key={i} className="contact-email-item">
                    <img src={flowerIcon} alt="✦" className="contact-ticker-flower" width={16} height={16} />
                    <span className="contact-email-text">clydara1@gmail.com</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </main>
  )
}

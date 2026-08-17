import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CTA.css'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="cta-section" id="contact" ref={sectionRef}>
      <div className="cta-container">
        <div className="cta-card">
          <p className="cta-eyebrow">(Work With Us)</p>
          <h2 className="cta-headline">
            Ready to build your next <span className="text-accent">digital breakthrough</span>?
          </h2>
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

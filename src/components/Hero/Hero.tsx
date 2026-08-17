import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Hero.css'

const founderImages = [
  'https://framerusercontent.com/images/LdiJIgo7vhBde0WiWHd48uSzxU.png?width=512&height=512',
  'https://framerusercontent.com/images/I9yoNS4RgoWEeRpJDtgEIoLAd4Y.png?width=512&height=512',
  'https://framerusercontent.com/images/G5E86VA7DStEga3pPtCu3nwW1qE.png?width=512&height=512',
]

const heroInlineImages = [
  {
    src: 'https://framerusercontent.com/images/tmb7lYyr13TSTCIp3zdK13cH8.jpg?width=3615&height=5423',
    alt: 'Hero Image',
  },
  {
    src: 'https://framerusercontent.com/images/q6Lt0wxatBudeFMJylqNDhblWfw.png?width=325&height=256',
    alt: 'Hero Image',
  },
  {
    src: 'https://framerusercontent.com/images/z5rWUBZI4G5D3Q3v82pHwruV14.jpg?width=3840&height=2160',
    alt: 'hero-image',
  },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-trust-badge', { opacity: 0, y: 16, duration: 0.5 })
        .from('.hero-headline-row', { opacity: 0, y: 40, duration: 0.65, stagger: 0.08 }, '-=0.2')
        .from('.hero-sub', { opacity: 0, y: 16, duration: 0.45 }, '-=0.2')
        .from('.hero-cta-wrap', { opacity: 0, y: 16, duration: 0.4 }, '-=0.2')
        .from('.hero-banner-wrap', { opacity: 0, y: 60, scale: 0.985, duration: 0.8 }, '-=0.25')
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero-section" id="hero" ref={sectionRef}>
      <div className="hero-inner">

        {/* ── Top content area ── */}
        <div className="hero-text-area">

          {/* Trust Badge */}
          <div className="hero-trust-badge">
            <div className="hero-avatars">
              {founderImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="founder-image"
                  className="hero-avatar-img"
                  width={32}
                  height={32}
                />
              ))}
            </div>
            <p className="hero-trust-text">
              <span className="hero-trust-grey">Trusted by </span>
              <strong className="hero-trust-black">Businesses Worldwide</strong>
            </p>
          </div>

          {/* ── Headings ── */}
          {/* Line 1: Build [img] AI-Powered */}
          <div className="hero-headline-row">
            <h1 className="hero-h1 hero-dark">Build</h1>
            <div className="hero-pill-img hero-pill-1">
              <img src={heroInlineImages[0].src} alt="Hero Image" />
            </div>
            <h1 className="hero-h1 hero-accent">AI-Powered</h1>
          </div>

          {/* Line 2: Websites & [img] Business Solutions */}
          <div className="hero-headline-row">
            <h1 className="hero-h1 hero-accent hero-bold">Websites</h1>
            <h1 className="hero-h1 hero-grey hero-bold">&amp;</h1>
            <div className="hero-pill-img hero-pill-2">
              <img src={heroInlineImages[1].src} alt={heroInlineImages[1].alt} />
            </div>
            <h1 className="hero-h1 hero-dark hero-bold">Business </h1>
            <h1 className="hero-h1 hero-accent hero-bold">Solutions</h1>
          </div>

          {/* Line 3: with [img] AI Automation */}
          <div className="hero-headline-row">
            <h1 className="hero-h1 hero-grey hero-bold">with</h1>
            <div className="hero-pill-img hero-pill-3">
              <img src={heroInlineImages[2].src} alt="hero-image" />
            </div>
            <h1 className="hero-h1 hero-accent">AI</h1>
            <h1 className="hero-h1 hero-dark">Automation</h1>
          </div>

          {/* Description */}
          <p className="hero-sub">
            We build <span className="hero-sub-accent">SEO-optimized websites</span>,{' '}
            <span className="hero-sub-accent">AI-powered business</span> software,{' '}
            <span className="hero-sub-accent">SaaS dashboards</span>,{' '}
            <span className="hero-sub-accent">CRM systems</span>, and custom web applications
            that help businesses automate operations, improve efficiency, and grow faster.
          </p>

          {/* CTA */}
          <div className="hero-cta-wrap">
            <a href="#pricing" className="hero-cta-btn">
              <span className="hero-cta-border" />
              <span className="hero-cta-label">Get Started</span>
            </a>
          </div>
        </div>

        {/* ── Banner Image ── */}
        <div className="hero-banner-wrap">
          <img
            src="https://framerusercontent.com/images/0BZyfYvRgMhWFP4m7BdLwu8.png?width=1536&height=1024"
            alt="banner-image"
            className="hero-banner-img"
          />
        </div>
      </div>
    </section>
  )
}

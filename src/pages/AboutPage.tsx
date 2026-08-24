import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RevealChars } from '../components/common/RevealChars'
import { RevealHeading } from '../components/common/RevealHeading'
import Founders from '../components/Founders/Founders'
import Values from '../components/Values/Values'
import FAQ from '../components/FAQ/FAQ'
import './AboutPage.css'

gsap.registerPlugin(ScrollTrigger)

const techLogos = [
  { name: 'JavaScript', icon: 'https://framerusercontent.com/images/IlhOQiFdnNhnnE9d4JHoPWvvQfY.svg?width=24&height=24' },
  { name: 'MongoDB', icon: 'https://framerusercontent.com/images/7tIcMHfDfyHlLdwRYvvhZIIHBI.svg?width=24&height=24' },
  { name: 'Next.js', icon: 'https://framerusercontent.com/images/xRePzAlsClqyClBmp5JEHPDKQoY.svg?width=24&height=24' },
  { name: 'WordPress', icon: 'https://framerusercontent.com/images/7DarRccYGVQx76OY3ZcoIHJ890.svg?width=512&height=104' },
  { name: 'GitHub', icon: 'https://framerusercontent.com/images/CwGormojvzTKkpssYgMLZUTOHs.svg?width=24&height=24' },
  { name: 'OpenAI', icon: 'https://framerusercontent.com/images/s0DOdCGE3A1TL0kSjfradL8m28.png?width=512&height=512' },
  { name: 'React', icon: 'https://framerusercontent.com/images/3zBv79y1aenuHUKSgCZxdTmB9A.png?width=512&height=512' },
  { name: 'Node.js', icon: 'https://framerusercontent.com/images/X4SdovIFYo7WQkamD9wwOEADx0.png?width=512&height=512' },
  { name: 'CSS3', icon: 'https://framerusercontent.com/images/B48VbTdgCXT0Kt0a7JxAmJaM6Q.png?width=512&height=512' },
]

const statementText =
  'We help fast-moving digital startups launch sharper brands and websites with clarity, speed, and no drama. Think bold storytelling, pixel-perfect design, and agile execution all tailored to scale your next big move.'

export default function AboutPage() {
  const pageRef = useRef<HTMLElement>(null)
  const statementRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Left-to-Right Reveal Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        '.about-headline-row-1 .reveal-item',
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
        }
      )
      .fromTo(
        '.about-headline-row-2 .reveal-item',
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
      .from('.about-hero-sub', { opacity: 0, y: 16, duration: 0.65 }, '-=0.3')
      .from('.about-hero-cta', { opacity: 0, y: 16, duration: 0.55 }, '-=0.3')
      .from('.about-hero-logos', { opacity: 0, y: 20, duration: 0.8 }, '-=0.3')

      // 2. Statement Scroll Scrub
      const words = statementRef.current?.querySelectorAll('.about-stmt-word')
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.05,
            ease: 'none',
            scrollTrigger: {
              trigger: statementRef.current,
              start: 'top 80%',
              end: 'bottom 45%',
              scrub: true,
            },
          }
        )
      }
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="about-page" ref={pageRef}>
      {/* About Hero Card */}
      <section className="about-hero-card">
        <div className="about-hero-container">
          <div className="about-headline-wrap">
            <div className="about-headline-row about-headline-row-1">
              <h1 className="about-h1 about-dark">
                <RevealChars text="Meet Clydara" />
              </h1>
              <div className="hero-pill-anim-wrap reveal-item">
                <div className="hero-pill-img hero-pill-1">
                  <img src="https://framerusercontent.com/images/9nS18NxRNZgZN2Nke02tqLS9eNE.jpg?width=826&height=371" alt="Meet Clydara" />
                </div>
              </div>
              <h1 className="about-h1 about-accent">
                <RevealChars text="Bold Ideas" />
              </h1>
            </div>
            <div className="about-headline-row about-headline-row-2">
              <h1 className="about-h1 about-gray">
                <RevealChars text="Real Impact" />
              </h1>
              <div className="hero-pill-anim-wrap reveal-item">
                <div className="hero-pill-img hero-pill-2">
                  <img src="https://framerusercontent.com/images/WxH5CFA7400s3OucSYNbyQr0.jpg?width=299&height=168" alt="Real Impact" />
                </div>
              </div>
              <h1 className="about-h1 about-dark">
                <RevealChars text="Driven by Innovation" />
              </h1>
            </div>
          </div>

          <p className="about-hero-sub">
            At Clydara, we transform ambitious ideas into powerful digital solutions. From modern websites and custom SaaS platforms to AI-powered automation, CRM systems, and creative branding, we help businesses innovate, scale, and thrive through technology-driven experiences.
          </p>

          <Link to="/works" className="about-hero-cta">
            View Projects&nbsp;&nbsp;→
          </Link>
        </div>

        {/* Tech Logos Ticker directly inside the hero card */}
        <div className="about-hero-logos">
          <div className="tech-logos-marquee-wrapper">
            <div className="tech-logos-track">
              {[...techLogos, ...techLogos, ...techLogos, ...techLogos].map((tech, i) => (
                <div key={i} className="tech-logo-item">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="tech-logo-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statement Card with Word-by-Word Scroll Scrub */}
      <section className="about-statement-section">
        <div className="about-statement-container">
          <p className="about-statement-eyebrow">(hello)</p>
          <p className="about-statement-text" ref={statementRef}>
            {statementText.split(' ').map((word, i) => (
              <span key={i} className="about-stmt-word">
                {word}{' '}
              </span>
            ))}
          </p>

          <div className="about-tags-cloud">
            <div className="about-tags-row">
              <span className="about-cloud-tag"><span className="tag-icon">✦</span> Branding</span>
              <span className="about-cloud-tag"><span className="tag-icon">🌐</span> Logo</span>
              <span className="about-cloud-tag"><span className="tag-icon">🌐</span> Website</span>
            </div>
            <div className="about-tags-row">
              <span className="about-cloud-tag"><span className="tag-icon">🖋️</span> Saas dashboards</span>
              <span className="about-cloud-tag"><span className="tag-icon">⊞</span> Interface</span>
            </div>
            <div className="about-tags-row">
              <span className="about-cloud-tag"><span className="tag-icon">🧭</span> Strategy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <Founders />

      {/* Angled Crossing Tapes */}
      <section className="about-tapes-section">
        <div className="tape tape-dark">
          <div className="tape-track tape-track-right">
            {['Graphic Design', 'Mobile App Development', 'CRM - ERP Solutions', 'Graphic Design', 'Mobile App Development', 'CRM - ERP Solutions', 'Graphic Design', 'Mobile App Development', 'CRM - ERP Solutions'].map((item, i) => (
              <span key={i} className="tape-item">
                <span className="tape-cross">✕</span>
                <span className="tape-text">{item}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="tape tape-blue">
          <div className="tape-track tape-track-left">
            {['SaaS Dashboards', 'MERN Stack Development', 'AI Integration', 'SaaS Dashboards', 'MERN Stack Development', 'AI Integration', 'SaaS Dashboards', 'MERN Stack Development', 'AI Integration'].map((item, i) => (
              <span key={i} className="tape-item">
                <span className="tape-flower">✦</span>
                <span className="tape-text">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise / What We Do Best */}
      <section className="about-expertise-section">
        <div className="about-expertise-container">
          <div className="about-expertise-header">
            <p className="about-eyebrow">(Our Expertise)</p>
            <RevealHeading as="h2" className="about-giant-heading" text="What We Do Best" />
            <p className="about-expertise-sub">
              Combining creativity, technology, and strategy to deliver digital solutions that help businesses grow, innovate, and stay ahead.
            </p>
          </div>

          <div className="expertise-stack-container">
            {/* Card 1: Web Development */}
            <div className="expertise-stack-card">
              <div className="expertise-card-top-row">
                <div className="expertise-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <span className="expertise-core-badge">Core Service</span>
              </div>
              <RevealHeading as="h3" className="expertise-card-title" text="💻 Web Development" />
              <p className="expertise-card-desc">
                From custom-coded web applications to Framer, WordPress, and Shopify websites, we build fast, scalable, and visually engaging digital experiences tailored to every business.
              </p>
            </div>

            {/* Card 2: AI & Business Solutions */}
            <div className="expertise-stack-card">
              <div className="expertise-card-top-row">
                <div className="expertise-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M8 14l2 2-2 2" />
                    <path d="M12 18h4" />
                  </svg>
                </div>
              </div>
              <RevealHeading as="h3" className="expertise-card-title" text="🤖 AI & Business Solutions" />
              <p className="expertise-card-desc">
                AI integrations, SaaS platforms, CRM systems, dashboards, and business automation tailored to your workflow.
              </p>
            </div>

            {/* Card 3: Branding & Design */}
            <div className="expertise-stack-card">
              <div className="expertise-card-top-row">
                <div className="expertise-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                  </svg>
                </div>
              </div>
              <RevealHeading as="h3" className="expertise-card-title" text="🎨 Branding & Design" />
              <p className="expertise-card-desc">
                Modern UI/UX, brand identity, graphics, and digital experiences that make your business stand out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project in Mind Banner */}
      <section className="about-cta-banner-section">
        <div className="about-cta-banner-container">
          <div className="about-cta-card">
            <div className="about-cta-content">
              <RevealHeading as="h2" className="about-cta-heading" text="Project In Mind?" />
              <RevealHeading as="h2" className="about-cta-heading-cyan" text="Get In Touch" />
              <p className="about-cta-sub">
                Tell us about your project — we’ll bring the tools, vision, and energy to make it real.
              </p>
              <Link to="/contact" className="about-cta-btn">
                Get Started&nbsp;&nbsp;→
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Our Impact */}
      <Values />

      {/* FAQ */}
      <FAQ />
    </main>
  )
}

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { RevealChars } from '../components/common/RevealChars'
import { RevealHeading } from '../components/common/RevealHeading'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import './ServicesPage.css'

const servicesData = [
  {
    title: 'Web Development',
    tags: ['UX/UI Design', 'Responsive Layouts', 'Animated scrolling'],
    desc: 'We build high-performance, SEO-optimized websites, web applications, and MERN stack solutions with modern UI, responsive design, and engaging user experiences.',
    icon: '💻',
    image: 'https://framerusercontent.com/images/EBtg3SqsQjHY12Y56g88GlQL89c.png?width=1104&height=736',
  },
  {
    title: 'SaaS & Business Solutions',
    tags: ['Custom SaaS', 'CRM Systems', 'Pos'],
    desc: 'Custom SaaS platforms, CRM systems, admin dashboards, ERP solutions, and industry-specific software for hotels, restaurants, pharmacies, healthcare, and enterprises.',
    icon: '📊',
    image: 'https://framerusercontent.com/images/Di4h2RBxlE4WrxjE8XpjuNgDh4.png?width=1586&height=992',
  },
  {
    title: 'AI Integration & Automation',
    tags: ['Ai agents', 'Integrations', 'automations'],
    desc: 'Enhance your business with AI-powered automation, intelligent workflows, API integrations, chatbots, and smart digital solutions that improve efficiency.',
    icon: '🤖',
    image: 'https://framerusercontent.com/images/5IdJGGCTC6AZ76gheQIaF2N3d8A.jpg?width=1024&height=1024',
  },
  {
    title: 'Branding & Creative Design',
    tags: ['Logo Marks', 'Wordmarks', 'Icon Design', 'Vector Art Included'],
    desc: 'Create a memorable brand with logo design, brand identity, UI/UX design, vector artwork, social media creatives, and complete digital marketing assets.',
    icon: '🎨',
    image: 'https://framerusercontent.com/images/fZLJgjL6liQXJwVY6kifDp14a4.jpg?width=1920&height=1920',
  },
]

export default function ServicesPage() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        '.services-headline-row-1 .reveal-item',
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
        '.services-headline-row-2 .reveal-item',
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
      .from('.services-hero-sub', { opacity: 0, y: 16, duration: 0.65 }, '-=0.3')
      .from('.services-hero-cta', { opacity: 0, y: 16, duration: 0.55 }, '-=0.3')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="services-page">
      {/* Services Hero Card */}
      <section className="services-hero-card" ref={heroRef}>
        <div className="services-hero-container">
          <div className="services-headline-wrap">
            <div className="services-headline-row services-headline-row-1">
              <h1 className="services-h1 services-dark">
                <RevealChars text="Our Creative" />
              </h1>
              <div className="hero-pill-anim-wrap reveal-item">
                <div className="hero-pill-img hero-pill-1">
                  <img src="https://framerusercontent.com/images/gsNRDCdqr35AMePFR63718Ew0.png?width=324&height=256" alt="Creative service" />
                </div>
              </div>
              <h1 className="services-h1 services-accent">
                <RevealChars text="Services" />
              </h1>
            </div>
            <div className="services-headline-row services-headline-row-2">
              <h1 className="services-h1 services-gray">
                <RevealChars text="Excellence" />
              </h1>
              <div className="hero-pill-anim-wrap reveal-item">
                <div className="hero-pill-img hero-pill-2">
                  <img src="https://framerusercontent.com/images/UyfhGP2aptx2DrJ0sZOnxNd6bo.png?width=324&height=256" alt="Excellence" />
                </div>
              </div>
              <h1 className="services-h1 services-dark">
                <RevealChars text="Delivered" />
              </h1>
            </div>
          </div>

          <p className="services-hero-sub">
            Ideas, stories, and strategies from the creative edge covering design development, and the tools that bring bold digital work to life.
          </p>

          <a href="#pricing" className="services-hero-cta">
            View Plans&nbsp;&nbsp;→
          </a>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="services-detail-section">
        <div className="services-detail-container">
          <div className="services-detail-header">
            <p className="services-eyebrow">(Services)</p>
            <RevealHeading as="h2" className="services-giant-heading" text="What we do" />
          </div>

          <div className="services-cards-grid">
            {servicesData.map((srv, idx) => (
              <div key={idx} className="services-row-block">
                <RevealHeading as="h3" className="services-row-title" text={srv.title} />
                
                <div className="services-row-body">
                  <div className="services-row-left">
                    <div className="services-img-box">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="services-graphic-img"
                      />
                    </div>
                    
                    <div className="services-item-tags">
                      {srv.tags.map((tag, i) => (
                        <span key={i} className="service-pill-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="services-row-right">
                    <p className="services-item-desc">{srv.desc}</p>
                    <div className="services-desc-line" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ />
    </main>
  )
}

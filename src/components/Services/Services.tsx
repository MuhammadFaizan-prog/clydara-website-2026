import { useState } from 'react'
import './Services.css'

interface ServiceCategory {
  id: string
  label: string
  headline: string
  image: string
  tags: string[]
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'web-design',
    label: 'Web Design',
    headline: 'High-converting, responsive websites built with modern frameworks and smooth motion.',
    image: 'https://framerusercontent.com/images/0BZyfYvRgMhWFP4m7BdLwu8.png?width=1536&height=1024',
    tags: ['Custom UI/UX Design', 'React & Framer Development', 'SEO Optimization'],
  },
  {
    id: 'brand-design',
    label: 'Brand Design',
    headline: 'We build bold, cohesive brand identities that leave a lasting impression.',
    image: 'https://framerusercontent.com/images/YO1ynxMlSvZbk2M4dR35UL4k1Q.png?width=1536&height=1024',
    tags: ['Visual Identity', 'Style Guides', 'Brand Strategy'],
  },
  {
    id: 'dashboards',
    label: 'Dashboards',
    headline: 'Scalable SaaS dashboards, CRM systems, and bespoke enterprise business applications.',
    image: 'https://framerusercontent.com/images/Di4h2RBxlE4WrxjE8XpjuNgDh4.png?width=1586&height=992',
    tags: ['SaaS Analytics', 'CRM Systems', 'Real-Time Data'],
  },
]

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(1) // Default to Brand Design as seen in Screenshot 4

  const active = serviceCategories[activeIdx]

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <p className="services-eyebrow">(Services)</p>
          <h2 className="services-title">What we do</h2>
        </div>

        {/* Subnav Tabs */}
        <div className="services-subnav">
          {serviceCategories.map((cat, i) => (
            <button
              key={cat.id}
              className={`services-nav-tab ${i === activeIdx ? 'active' : ''}`}
              onClick={() => setActiveIdx(i)}
            >
              {i === activeIdx && <span className="services-tab-dot">•</span>}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Showcase Stage with Giant Scrolling Marquee Background (Screenshot 4) */}
        <div className="services-stage">
          {/* Giant Scrolling Marquee Background */}
          <div className="services-bg-marquee">
            <div className="services-bg-track">
              {[...Array(12)].map((_, i) => (
                <span key={i} className="services-bg-word">
                  {active.label}
                </span>
              ))}
            </div>
          </div>

          {/* Floating 3D Center Card */}
          <div className="services-center-card">
            <img
              src={active.image}
              alt={active.label}
              className="services-center-img"
            />
          </div>
        </div>

        {/* Description Text */}
        <p className="services-desc-text">{active.headline}</p>

        {/* Dark Pill Tags */}
        <div className="services-tags-row">
          {active.tags.map((tag, i) => (
            <span key={i} className="services-dark-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

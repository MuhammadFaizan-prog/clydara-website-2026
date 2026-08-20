import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { RevealChars } from '../components/common/RevealChars'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import './WorksPage.css'

const worksData = [
  {
    id: 'archin',
    num: '01 / 03',
    title: 'Lehar Resorts',
    year: '2026',
    role: 'Full Stack Development',
    services: ['UI UX Design', 'Product Design', 'Branding', 'Full Stack Development'],
    desc: 'A premium resort website featuring modern design, smooth user experience, and optimized performance.',
    bg: 'https://framerusercontent.com/images/eXgkfupTU9VumIAtGExuQS48AHQ.png?width=855&height=570',
    cover: 'https://framerusercontent.com/images/NKjQpIy0A8AL3f3nojbPFF8DRW8.png?width=1536&height=1024',
  },
  {
    id: 'vntnr',
    num: '02 / 03',
    title: 'JKM GLOBALS',
    year: '2026',
    role: 'Full Stack Developer',
    services: ['UI UX', 'Branding', 'Redesigning', 'Full Stack Development'],
    desc: "We've partnered with businesses across industries to build innovative digital solutions, scalable software, and powerful online experiences.",
    bg: 'https://framerusercontent.com/images/fsglg0XtrFPuX7STlnIcSf57BgM.png?width=1672&height=941',
    cover: 'https://framerusercontent.com/images/mea2IrOxhEXzllso3Pjfx51rCb8.png?width=1536&height=1024',
  },
  {
    id: 'aeorim',
    num: '03 / 03',
    title: 'JKM solutions',
    year: '2026',
    role: 'Full stack developer',
    services: ['Branding', 'Revamp', 'Development', 'Designing'],
    desc: 'A modern business website developed for JKM Solutions, delivering a professional digital experience with clean design, intuitive navigation, and a scalable foundation for growth.',
    bg: 'https://framerusercontent.com/images/fsglg0XtrFPuX7STlnIcSf57BgM.png?width=1672&height=941',
    cover: 'https://framerusercontent.com/images/tPmf3Oa94gxsPCkGJGjL9vHW54c.png?width=1536&height=1024',
  },
]

export default function WorksPage() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        '.works-headline-row-1 .reveal-item',
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
          duration: 0.48,
          stagger: 0.022,
          ease: 'power3.out',
        }
      )
      .fromTo(
        '.works-headline-row-2 .reveal-item',
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
          duration: 0.48,
          stagger: 0.02,
          ease: 'power3.out',
        },
        '-=0.35'
      )
      .from('.works-hero-sub', { opacity: 0, y: 16, duration: 0.45 }, '-=0.2')
      .from('.works-hero-cta', { opacity: 0, y: 16, duration: 0.4 }, '-=0.2')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="works-page">
      {/* Works Hero Card */}
      <section className="works-hero-card" ref={heroRef}>
        <div className="works-hero-container">
          <div className="works-headline-wrap">
            <div className="works-headline-row works-headline-row-1">
              <h1 className="works-h1 works-dark">
                <RevealChars text="Our Work" />
              </h1>
              <div className="hero-pill-anim-wrap reveal-item">
                <div className="hero-pill-img hero-pill-1">
                  <img src="https://framerusercontent.com/images/5gx4SUhPYeLLdKmhfb1EB5xC88.jpg?width=220&height=148" alt="Work highlight" />
                </div>
              </div>
              <h1 className="works-h1 works-accent">
                <RevealChars text="That Drives" />
              </h1>
            </div>
            <div className="works-headline-row works-headline-row-2">
              <h1 className="works-h1 works-gray">
                <RevealChars text="Business" />
              </h1>
              <div className="hero-pill-anim-wrap reveal-item">
                <div className="hero-pill-img hero-pill-2">
                  <img src="https://framerusercontent.com/images/zSO6VAgT8vhYqZLGuzPnzyi2Gw4.jpg?width=2000&height=1200" alt="Growth highlight" />
                </div>
              </div>
              <h1 className="works-h1 works-dark">
                <RevealChars text="Growth" />
              </h1>
            </div>
          </div>

          <p className="works-hero-sub">
            Explore our portfolio of custom websites, SaaS platforms, AI-powered solutions, CRM systems, dashboards, and branding projects crafted to help businesses grow, automate operations, and deliver exceptional digital experiences.
          </p>

          <a href="#pricing" className="works-hero-cta">
            View Plans&nbsp;&nbsp;→
          </a>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="works-portfolio-section">
        <div className="works-portfolio-container">
          <div className="works-section-header">
            <p className="works-eyebrow">(Portfolio)</p>
            <h2 className="works-giant-heading">Recent Works</h2>
          </div>

          <div className="works-cards-list">
            {worksData.map((project) => (
              <div key={project.id} className="works-project-card">
                {/* Ambient Glow & Noise */}
                <div
                  className="project-card-glow"
                  style={{ backgroundImage: `url(${project.bg})` }}
                />
                <div
                  className="project-card-noise"
                  style={{
                    backgroundImage: `url('https://framerusercontent.com/images/hiGYz6grmhAHSeZuNKHEuchTGTw.png?width=2848&height=1588')`,
                  }}
                />

                <div className="project-card-content">
                  {/* Left Column: Description & Number */}
                  <div className="project-col-left">
                    <p className="project-desc">{project.desc}</p>
                    <span className="project-num">{project.num}</span>
                  </div>

                  {/* Center Column: Mockup image */}
                  <div className="project-col-center">
                    <Link to={`/works/${project.id}`} className="project-cover-link">
                      <img
                        src={project.cover}
                        alt={project.title}
                        className="project-cover-img"
                      />
                    </Link>
                  </div>

                  {/* Right Column: Metadata */}
                  <div className="project-col-right">
                    <div className="project-meta-block">
                      <span className="meta-label">Client</span>
                      <h3 className="project-title">{project.title}</h3>
                    </div>

                    <div className="project-meta-block">
                      <span className="meta-label">Year</span>
                      <p className="meta-value">{project.year}</p>
                    </div>

                    <div className="project-meta-block">
                      <span className="meta-label">Role</span>
                      <p className="meta-value role-title">{project.role}</p>
                    </div>

                    <div className="project-meta-block">
                      <span className="meta-label">Services</span>
                      <ul className="project-services-list">
                        {project.services.map((srv, i) => (
                          <li key={i}>{srv}</li>
                        ))}
                      </ul>
                    </div>
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

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Works.css'

gsap.registerPlugin(ScrollTrigger)

const workCards = [
  {
    num: '01 / 03',
    title: 'Lehar Resorts',
    desc: 'A premium resort website featuring modern design, smooth user experience, and optimized performance.',
    year: '2026',
    role: 'Full Stack Development',
    services: ['UI UX Design', 'Product Design', 'Branding', 'Full Stack Development'],
    bgImg: 'https://framerusercontent.com/images/eXgkfupTU9VumIAtGExuQS48AHQ.png?width=855&height=570',
    coverImg: 'https://framerusercontent.com/images/NKjQpIy0A8AL3f3nojbPFF8DRW8.png?width=1536&height=1024',
    stickyTop: 50,
  },
  {
    num: '02 / 03',
    title: 'VNTNR',
    desc: "We've partnered with businesses across industries to build innovative digital solutions, scalable software, and powerful online experiences.",
    year: '2026',
    role: 'Full Stack Developer',
    services: ['UI UX', 'Branding', 'Redesigning', 'Full Stack Development'],
    bgImg: 'https://framerusercontent.com/images/mea2IrOxhEXzllso3Pjfx51rCb8.png?width=1536&height=1024',
    coverImg: 'https://framerusercontent.com/images/mea2IrOxhEXzllso3Pjfx51rCb8.png?width=1536&height=1024',
    stickyTop: 80,
  },
  {
    num: '03 / 03',
    title: 'JKM Solutions',
    desc: 'A modern business website developed for JKM Solutions, delivering a professional digital experience with clean design, intuitive navigation, and a scalable foundation for growth.',
    year: '2026',
    role: 'Full stack developer',
    services: ['Branding', 'Revamp', 'Development', 'Designing'],
    bgImg: 'https://framerusercontent.com/images/tPmf3Oa94gxsPCkGJGjL9vHW54c.png?width=1536&height=1024',
    coverImg: 'https://framerusercontent.com/images/tPmf3Oa94gxsPCkGJGjL9vHW54c.png?width=1536&height=1024',
    stickyTop: 110,
  },
]

export default function Works() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.works-title', {
        opacity: 0,
        y: 60,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.works-header',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="works-section" id="works" ref={sectionRef}>
      <div className="works-container">
        {/* Header */}
        <div className="works-header">
          <p className="works-subtitle">(Why clients love Clydara)</p>
          <h2 className="works-title">Recent Works</h2>
        </div>

        {/* Sticky Stacked Cards */}
        <div className="works-cards-stack">
          {workCards.map((card, idx) => (
            <div
              key={idx}
              className="work-sticky-wrapper"
              style={{ top: `${card.stickyTop}px` }}
            >
              <div className="work-card">
                {/* Ambient Background with Noise */}
                <div
                  className="work-card-bg"
                  style={{ backgroundImage: `url(${card.bgImg})` }}
                />
                <div
                  className="work-card-noise"
                  style={{
                    backgroundImage: `url('https://framerusercontent.com/images/hiGYz6grmhAHSeZuNKHEuchTGTw.png?width=2848&height=1588')`,
                  }}
                />
                <div className="work-card-blur-overlay" />

                {/* 3-Column Content Layout */}
                <div className="work-card-content">
                  {/* Left info */}
                  <div className="work-card-left">
                    <p className="work-card-desc">{card.desc}</p>
                    <div className="work-card-bottom-left">
                      <span className="work-card-counter">{card.num}</span>
                      <h3 className="work-card-project-title">{card.title}</h3>
                    </div>
                  </div>

                  {/* Center Cover / Mockup */}
                  <div className="work-card-center">
                    <div className="work-cover-wrapper">
                      <img
                        src={card.coverImg}
                        alt={card.title}
                        className="work-cover-img"
                      />
                    </div>
                  </div>

                  {/* Right Metadata */}
                  <div className="work-card-right">
                    <div className="work-meta-block">
                      <span className="work-meta-label">Year</span>
                      <span className="work-meta-value">{card.year}</span>
                    </div>

                    <div className="work-meta-block">
                      <span className="work-meta-label">Role</span>
                      <span className="work-meta-value">{card.role}</span>
                    </div>

                    <div className="work-meta-block">
                      <span className="work-meta-label">Services</span>
                      <div className="work-services-tags">
                        {card.services.map((s, i) => (
                          <span key={i} className="work-service-item">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RevealHeading } from '../common/RevealHeading'
import './Works.css'

gsap.registerPlugin(ScrollTrigger)

export const workCards = [
  {
    id: 'archin',
    num: '01 / 03',
    title: 'Lehar Resorts',
    desc: 'A premium resort website featuring modern design, smooth user experience, and optimized performance.',
    year: '2026',
    role: 'Full Stack Development',
    services: ['UI UX Design', 'Product Design', 'Branding', 'Full Stack Development'],
    bgImg: 'https://framerusercontent.com/images/eXgkfupTU9VumIAtGExuQS48AHQ.png?width=855&height=570',
    coverImg: 'https://framerusercontent.com/images/NKjQpIy0A8AL3f3nojbPFF8DRW8.png?width=1536&height=1024',
  },
  {
    id: 'vntnr',
    num: '02 / 03',
    title: 'JKM GLOBALS',
    desc: "We've partnered with businesses across industries to build innovative digital solutions, scalable software, and powerful online experiences.",
    year: '2026',
    role: 'Full Stack Developer',
    services: ['UI UX', 'Branding', 'Redesigning', 'Full Stack Development'],
    bgImg: 'https://framerusercontent.com/images/fsglg0XtrFPuX7STlnIcSf57BgM.png?width=1672&height=941',
    coverImg: 'https://framerusercontent.com/images/mea2IrOxhEXzllso3Pjfx51rCb8.png?width=1536&height=1024',
  },
  {
    id: 'aeorim',
    num: '03 / 03',
    title: 'JKM Solutions',
    desc: 'A modern business website developed for JKM Solutions, delivering a professional digital experience with clean design, intuitive navigation, and a scalable foundation for growth.',
    year: '2026',
    role: 'Full stack developer',
    services: ['Branding', 'Revamp', 'Development', 'Designing'],
    bgImg: 'https://framerusercontent.com/images/fsglg0XtrFPuX7STlnIcSf57BgM.png?width=1672&height=941',
    coverImg: 'https://framerusercontent.com/images/tPmf3Oa94gxsPCkGJGjL9vHW54c.png?width=1536&height=1024',
  },
]

export default function Works() {
  const sectionRef = useRef<HTMLElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const card1 = card1Ref.current
      const card2 = card2Ref.current
      const card3 = card3Ref.current
      const stack = stackRef.current
      if (!card1 || !card2 || !card3 || !stack) return

      // Initial positions
      gsap.set(card1, { y: '0%', scale: 1, opacity: 1, filter: 'blur(0px)' })
      gsap.set(card2, { y: '100%', scale: 1, opacity: 1, filter: 'blur(0px)' })
      gsap.set(card3, { y: '100%', scale: 1, opacity: 1, filter: 'blur(0px)' })

      // ScrollTrigger pinning animation
      ScrollTrigger.create({
        trigger: stack,
        start: 'top top',
        end: '+=1400',
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const p = self.progress // 0 -> 1

          if (p <= 0.5) {
            // Stage 1: Card 2 covers Card 1 (0 -> 0.5 maps to 0 -> 1)
            const p1 = p / 0.5
            gsap.set(card2, { y: `${(1 - p1) * 100}%` })
            gsap.set(card1, {
              scale: 1 - p1 * 0.08,
              opacity: 1 - p1 * 0.85,
              filter: `blur(${p1 * 8}px)`,
              transformOrigin: 'center top',
            })
            gsap.set(card3, { y: '100%' })
          } else {
            // Stage 2: Card 3 covers Card 2 (0.5 -> 1.0 maps to 0 -> 1)
            const p2 = (p - 0.5) / 0.5
            gsap.set(card1, { scale: 0.92, opacity: 0.15, filter: 'blur(8px)' })
            gsap.set(card2, {
              y: '0%',
              scale: 1 - p2 * 0.08,
              opacity: 1 - p2 * 0.85,
              filter: `blur(${p2 * 8}px)`,
              transformOrigin: 'center top',
            })
            gsap.set(card3, { y: `${(1 - p2) * 100}%` })
          }
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const cardRefs = [card1Ref, card2Ref, card3Ref]

  return (
    <section className="works-section" id="works" ref={sectionRef}>
      <div className="works-container">
        {/* Header */}
        <div className="works-header">
          <p className="works-subtitle">(Why clients love Clydara)</p>
          <RevealHeading as="h2" className="works-title" text="Recent Works" />
        </div>

        {/* Stacked Cards Container */}
        <div className="works-stack-wrapper" ref={stackRef}>
          {workCards.map((card, idx) => (
            <div
              key={card.id}
              ref={cardRefs[idx]}
              className={`work-card-stacked work-card-layer-${idx + 1}`}
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
                      <RevealHeading as="h3" className="work-card-project-title" text={card.title} />
                    </div>
                  </div>

                  {/* Center Cover / Mockup */}
                  <div className="work-card-center">
                    <Link to={`/works/${card.id}`} className="work-cover-wrapper">
                      <img
                        src={card.coverImg}
                        alt={card.title}
                        className="work-cover-img"
                      />
                    </Link>
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

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RevealHeading } from '../common/RevealHeading'
import { RevealChars } from '../common/RevealChars'
import './Values.css'

gsap.registerPlugin(ScrollTrigger)

const impactList = [
  {
    title: 'Innovations',
    desc: 'Every solution is crafted to solve real business challenges with modern technology.',
  },
  {
    title: 'Creativity',
    desc: 'We blend strategy, design, and development to create experiences people remember.',
  },
  {
    title: 'Performance',
    desc: 'Fast, scalable, and secure digital products built for long-term growth.',
  },
  {
    title: 'Partnership',
    desc: 'We believe in building lasting relationships not just delivering projects.',
  },
  {
    title: 'Grow Together.',
    desc: 'Helping brands scale through innovation and strategy.',
  },
]

export default function Values() {
  const sectionRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const [badgeVisible, setBadgeVisible] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.impact-row', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.impact-list',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current || !badgeRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    gsap.to(badgeRef.current, {
      x: x - 36,
      y: y - 36,
      duration: 0.35,
      ease: 'power2.out',
    })
  }

  return (
    <section
      className="impact-section"
      id="impact"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setBadgeVisible(true)}
      onMouseLeave={() => setBadgeVisible(false)}
    >
      {/* Floating interactive cursor badge */}
      <div
        ref={badgeRef}
        className={`impact-cursor-badge ${badgeVisible ? 'visible' : ''}`}
      >
        <img
          src="/watermark-white.png"
          alt="Clydara"
          className="badge-logo-img"
        />
      </div>

      <div className="impact-container">
        {/* Header */}
        <div className="impact-header">
          <p className="impact-eyebrow">(Our Impact)</p>
          <RevealHeading as="h2" className="impact-headline">
            <RevealChars text="Building Digital Success Stories," /> <br />
            <RevealChars text="One Project at a Time." />
          </RevealHeading>
        </div>

        {/* Rows */}
        <div className="impact-list">
          {impactList.map((val, idx) => (
            <div key={idx} className="impact-row">
              <div className="impact-left">
                <RevealHeading as="span" className="impact-title" text={val.title} />
              </div>
              <div className="impact-right">
                <p className="impact-desc">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const wordsRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word-by-word text reveal with scroll scrub
      const words = wordsRef.current?.querySelectorAll('.about-word')
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: 0.15, color: '#131313' },
          {
            opacity: 1,
            color: '#131313',
            stagger: 0.05,
            ease: 'none',
            scrollTrigger: {
              trigger: wordsRef.current,
              start: 'top 80%',
              end: 'bottom 45%',
              scrub: true,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const text =
    'We help fast-moving digital startups launch sharper brands and websites with clarity, speed, and no drama. Think bold storytelling, pixel-perfect design, and agile execution all tailored to scale your next big move.'

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-container">
        {/* Eyebrow: (hello) */}
        <div className="about-eyebrow-wrap">
          <span className="about-eyebrow">(hello)</span>
        </div>

        {/* Big Bold Headline Statement with Scroll Scrub */}
        <h2 className="about-statement" ref={wordsRef}>
          {text.split(' ').map((word, i) => (
            <span key={i} className="about-word">
              {word}{' '}
            </span>
          ))}
        </h2>

        {/* Centered Pill Tags in 3 Rows */}
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
  )
}


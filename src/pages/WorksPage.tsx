import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { RevealChars } from '../components/common/RevealChars'
import Works from '../components/Works/Works'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import './WorksPage.css'

export default function WorksPage() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        '.works-headline-row-1 .reveal-item',
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
        '.works-headline-row-2 .reveal-item',
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
      .from('.works-hero-sub', { opacity: 0, y: 16, duration: 0.65 }, '-=0.3')
      .from('.works-hero-cta', { opacity: 0, y: 16, duration: 0.55 }, '-=0.3')
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

      {/* Stacked Recent Works Section */}
      <Works />

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ />
    </main>
  )
}

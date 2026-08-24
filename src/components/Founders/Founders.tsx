import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RevealHeading } from '../common/RevealHeading'
import './Founders.css'

gsap.registerPlugin(ScrollTrigger)

const faizanTimeline = [
  { years: '2025 - Present', title: 'CEO & Creative Director, Clydara' },
  { years: '2022 - Present', title: 'Full Stack Engineer (MERN ,SaaS Solutions)' },
  { years: '2023 - Present', title: 'UI/UX Designer & Brand Strategist' },
  { years: '2022 – Present', title: 'AI Automation & Digital Solutions Specialist' },
]

const rohanTimeline = [
  { years: '2025 - Present', title: 'Founder & Creative Director at Clydara' },
  { years: '2022 - Present', title: 'Full Stack & MERN Stack Developer' },
  { years: '2020 - Present', title: 'UI/UX & Graphic Designer' },
  { years: '2022 – Present', title: 'Digital Solutions & SEO Specialist' },
]

export default function Founders() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.founder-row', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.founders-list',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="founders-section" id="about-founder" ref={sectionRef}>
      <div className="founders-container">
        {/* Header */}
        <div className="founders-title-header">
          <RevealHeading as="h2" className="founders-giant-title" text="Founders" />
        </div>

        <div className="founders-list">
          {/* Founder 1: Mr. Rohan Baig */}
          <div className="founder-row founder-rohan">
            {/* Bio & Timeline */}
            <div className="founder-info">
              <RevealHeading as="h3" className="founder-name" text="Mr.Rohan Baig" />
              <p className="founder-bio">
                <strong>Rohan Baig</strong> is the Founder of <strong>Clydara</strong>, specializing in MERN Stack development, SaaS platforms, CRM systems, UI/UX design, graphic design, branding, SEO, and digital marketing. He creates scalable, user-focused digital solutions that empower businesses to grow through innovation, creativity, and cutting-edge technology.
              </p>

              <div className="founder-divider" />

              <div className="founder-timeline">
                {rohanTimeline.map((item, idx) => (
                  <div key={idx} className="timeline-row">
                    <span className="timeline-year">{item.years}</span>
                    <span className="timeline-title">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="founder-photo-wrapper">
              <div className="founder-photo-card">
                <img
                  src="https://framerusercontent.com/images/vx6MAMbLZLmsbBtbORFTSJpKk.jpeg?width=960&height=1280"
                  alt="Mr. Rohan Baig"
                  className="founder-photo"
                />
                <div className="founder-socials">
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="founder-social-btn">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.87 0-1.57.7-1.57 1.57s.7 1.57 1.57 1.57 1.57-.7 1.57-1.57c0-.87-.7-1.57-1.57-1.57Z"/></svg>
                  </a>
                  <a href="https://wa.link/p0gd9c" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="founder-social-btn">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.6 4.12 3.64.58.25 1.02.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.29s-1.44-.71-1.66-.79c-.22-.08-.38-.12-.55.12-.16.25-.64.79-.79.95-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43s-.55-1.33-.76-1.82c-.2-.48-.4-.42-.55-.43l-.47-.01Z"/></svg>
                  </a>
                  <a href="https://portfolio-zxs1.vercel.app/" target="_blank" rel="noreferrer" aria-label="Portfolio" className="founder-social-btn">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm7.93 9h-3.18a15.65 15.65 0 0 0-1.37-5.07A8.04 8.04 0 0 1 19.93 11ZM12 4.07a14 14 0 0 1 2.37 6.93H9.63A14 14 0 0 1 12 4.07ZM4.07 13h3.18a15.65 15.65 0 0 0 1.37 5.07A8.04 8.04 0 0 1 4.07 13Zm3.18-2H4.07a8.04 8.04 0 0 1 4.55-5.07A15.65 15.65 0 0 0 7.25 11ZM12 19.93a14 14 0 0 1-2.37-6.93h4.74A14 14 0 0 1 12 19.93Zm3.38-1.86a15.65 15.65 0 0 0 1.37-5.07h3.18a8.04 8.04 0 0 1-4.55 5.07Z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Founder 2: Mr. Faizan (CEO - Screenshot 3) */}
          <div className="founder-row founder-faizan">
            {/* Photo */}
            <div className="founder-photo-wrapper">
              <div className="founder-photo-card">
                <img
                  src="https://framerusercontent.com/images/eg87IejuHz3NCyMG1Qtb45agUiE.jpg?width=1080&height=2400"
                  alt="Mr. Faizan"
                  className="founder-photo"
                />
                {/* Circular Clydara badge in bottom right corner */}
                <div className="founder-circle-badge">
                  <img
                    src="/clydara-seal.png"
                    alt="Clydara seal"
                    className="founder-seal-img"
                  />
                </div>
                {/* Social icons on bottom left */}
                <div className="founder-socials">
                  <a href="https://www.linkedin.com/in/muhammad-faizan-60518a290/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="founder-social-btn">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.87 0-1.57.7-1.57 1.57s.7 1.57 1.57 1.57 1.57-.7 1.57-1.57c0-.87-.7-1.57-1.57-1.57Z"/></svg>
                  </a>
                  <a href="https://wa.link/p0gd9c" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="founder-social-btn">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.6 4.12 3.64.58.25 1.02.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.29s-1.44-.71-1.66-.79c-.22-.08-.38-.12-.55.12-.16.25-.64.79-.79.95-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43s-.55-1.33-.76-1.82c-.2-.48-.4-.42-.55-.43l-.47-.01Z"/></svg>
                  </a>
                  <a href="https://portfolio-zxs1.vercel.app/" target="_blank" rel="noreferrer" aria-label="Portfolio" className="founder-social-btn">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm7.93 9h-3.18a15.65 15.65 0 0 0-1.37-5.07A8.04 8.04 0 0 1 19.93 11ZM12 4.07a14 14 0 0 1 2.37 6.93H9.63A14 14 0 0 1 12 4.07ZM4.07 13h3.18a15.65 15.65 0 0 0 1.37 5.07A8.04 8.04 0 0 1 4.07 13Zm3.18-2H4.07a8.04 8.04 0 0 1 4.55-5.07A15.65 15.65 0 0 0 7.25 11ZM12 19.93a14 14 0 0 1-2.37-6.93h4.74A14 14 0 0 1 12 19.93Zm3.38-1.86a15.65 15.65 0 0 0 1.37-5.07h3.18a8.04 8.04 0 0 1-4.55 5.07Z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bio & Timeline */}
            <div className="founder-info">
              <RevealHeading as="h3" className="founder-name" text="Mr. Muhammad Faizan" />
              <p className="founder-bio founder-bio-faizan">
                <strong>Muhammad Faizan</strong> is the CEO of <strong>Clydara</strong> and a Full Stack Engineer who has delivered 50+ production web applications and contributed to Punjab Police's AI-based Automatic Driving Test System, showcased at the Punjab Transport Expo 2025. He specializes in building scalable SaaS platforms, CRM systems, and high-performance web applications.
              </p>

              <div className="founder-divider" />

              <div className="founder-timeline">
                {faizanTimeline.map((item, idx) => (
                  <div key={idx} className="timeline-row">
                    <span className="timeline-year">{item.years}</span>
                    <span className="timeline-title">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

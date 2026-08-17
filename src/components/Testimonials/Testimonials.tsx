import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Testimonials.css'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client satisfaction rate' },
  { value: '10+', label: 'Industries Served' },
]

const cards = [
  {
    num: '01 / 03',
    title: 'Custom Business Solutions',
    desc: 'We develop scalable CRM systems, SaaS platforms, and business management software tailored for hotels, resorts, restaurants, cafés, healthcare, pharmacies, and growing enterprises.',
    image: 'https://framerusercontent.com/images/Di4h2RBxlE4WrxjE8XpjuNgDh4.png?width=1586&height=992',
  },
  {
    num: '02 / 03',
    title: 'Modern Web Experiences',
    desc: 'From high-performance MERN Stack and Full Stack applications to premium WordPress and Framer websites, we build fast, secure, responsive, and SEO-optimized digital experiences.',
    image: 'https://framerusercontent.com/images/wLjtkB0h04gp0inw2krwWfvl2As.jpg?width=1600&height=1200',
  },
  {
    num: '03 / 03',
    title: 'Creative Growth & Branding',
    desc: 'Strengthen your brand with professional graphic design, vector illustrations, UI/UX design, website renovation,',
    image: 'https://framerusercontent.com/images/Ep6MT0Tpzjt8nRfZzSTNdZ4l6c.webp?width=1024&height=543',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonials-title', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })

      gsap.from('.stat-box', {
        opacity: 0,
        scale: 0.9,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.testimonials-stats-card',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="testimonials-section" id="testimonials" ref={sectionRef}>
      <div className="testimonials-header">
        <p className="testimonials-eyebrow">(Featured Work)</p>
        <h2 className="testimonials-title">Testimonials</h2>
      </div>

      <div className="testimonials-container">
        {/* Left Dark Card with Stats */}
        <div className="testimonials-stats-card">
          <div className="stats-list">
            {stats.map((st, i) => (
              <div key={i} className="stat-box">
                <span className="stat-number">{st.value}</span>
                <span className="stat-label">{st.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Carousel Track */}
        <div className="testimonials-carousel">
          <div className="testimonials-track">
            {[...cards, ...cards, ...cards].map((card, i) => (
              <div key={i} className="testimonial-card">
                <div
                  className="testimonial-card-bg"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="testimonial-card-overlay" />
                <div className="testimonial-card-content">
                  <span className="testimonial-card-num">{card.num}</span>
                  <p className="testimonial-card-desc">{card.desc}</p>
                  <h4 className="testimonial-card-title">{card.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
